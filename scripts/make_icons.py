#!/usr/bin/env python3
"""Regenerate _includes/icon.html: inline SVG icons extracted from font outlines.

The site renders ~17 icons. Shipping FontAwesome (277 KB of webfonts) and
loading Academicons from a CDN for two glyphs was not worth it, so the outlines
are extracted once and inlined.

    pip install fonttools
    python scripts/make_icons.py

The source fonts are NO LONGER in the repo (that was the point). Restore them
from git history before running this, e.g.:

    git show 914d4a3:assets/webfonts/fa-solid-900.ttf  > /tmp/fa-solid-900.ttf
    git show 914d4a3:assets/webfonts/fa-brands-400.ttf > /tmp/fa-brands-400.ttf
    git show 914d4a3:assets/fonts/academicons.ttf      > /tmp/academicons.ttf

then point FONTS below at them. _sass/vendor/font-awesome/_variables.scss is
still in the tree (nothing imports it) and supplies the codepoints.

Licences are unchanged: FontAwesome Free icons are CC BY 4.0, Academicons SIL OFL.

Font -> SVG coordinate mapping: glyph outlines run y-up from the baseline, SVG
runs y-down from the top. transform="translate(0 ASC) scale(1 -1)" maps
svg_y = ascent - font_y, and the viewBox spans the glyph's advance width by the
full em box (ascent - descent).
"""
import io
import os
import re
import sys

from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen

ROOT = "/Users/buraks/My Drive/buraksatar.github.io"
VARS = os.path.join(ROOT, "_sass/vendor/font-awesome/_variables.scss")
FONTS = {
    "solid": os.path.join(ROOT, "assets/webfonts/fa-solid-900.ttf"),
    "brands": os.path.join(ROOT, "assets/webfonts/fa-brands-400.ttf"),
    # Academicons ships in the repo but was superseded by a CDN load; using the
    # local copy for the only two glyphs we need drops the third-party request.
    "academicons": os.path.join(ROOT, "assets/fonts/academicons.ttf"),
}

# Academicons has no $fa-var-* table, so its codepoints are given directly.
EXTRA_CODEPOINTS = {
    "google-scholar": 0xE9D4,
    "orcid": 0xE9D9,
}

WANT = [
    ("location",   "location-dot",      "solid"),
    ("building",   "building-columns",  "solid"),
    ("envelope",   "envelope",          "solid"),
    ("file-pdf",   "file-pdf",          "solid"),
    ("calendar",   "calendar-check",    "solid"),
    ("link",       "link",              "solid"),
    ("clock",      "clock",             "solid"),
    ("calendar",   "calendar-days",     "solid"),
    ("rss",        "rss",               "solid"),
    ("sun",        "sun",               "solid"),
    ("moon",       "moon",              "solid"),
    ("github",     "github",            "brands"),
    ("instagram",  "instagram",         "brands"),
    ("linkedin",   "linkedin",          "brands"),
    ("x-twitter",  "x-twitter",         "brands"),
    ("scholar",    "google-scholar",    "academicons"),
    ("orcid",      "orcid",             "academicons"),
]

src = io.open(VARS, encoding="utf-8").read()
codepoints = {}
for m in re.finditer(r"^\$fa-var-([a-z0-9-]+):\s*\\([0-9a-f]+);", src, re.M):
    codepoints[m.group(1)] = int(m.group(2), 16)

fonts = {}
for k, p in FONTS.items():
    if not os.path.exists(p):
        sys.exit("missing font: %s" % p)
    fonts[k] = TTFont(p)

icons = []
for key, faname, fam in WANT:
    cp = EXTRA_CODEPOINTS.get(faname) or codepoints.get(faname)
    if cp is None:
        print("  !! no codepoint for %s" % faname)
        continue
    f = fonts[fam]
    gname = f.getBestCmap().get(cp)
    if gname is None:
        print("  !! %s (U+%04X) not in %s font" % (faname, cp, fam))
        continue
    gs = f.getGlyphSet()
    pen = SVGPathPen(gs)
    gs[gname].draw(pen)
    d = pen.getCommands()
    if not d:
        print("  !! empty outline for %s" % faname)
        continue
    asc = f["hhea"].ascent
    desc = f["hhea"].descent          # negative
    height = asc - desc
    width = gs[gname].width
    icons.append((key, faname, d, width, height, asc))
    print("  %-11s %-18s %-7s vb=0 0 %d %d  path=%d B" % (key, faname, fam, width, height, len(d)))

# ---- the Jekyll include -----------------------------------------------------
lines = [
    "{% comment %}",
    "  Inline SVG icons, generated from the vendored FontAwesome fonts.",
    "  Replaces the 277 KB of icon webfonts and the Academicons CDN request.",
    "",
    '  Usage:  {% include icon.html name="github" %}',
    "  Decorative by default (aria-hidden). Pass label=\"...\" when the icon is the",
    "  only content of a control and needs an accessible name.",
    "",
    "  Regenerate with scratchpad/make_icons.py after adding an icon.",
    "{% endcomment %}",
    "{%- assign n = include.name -%}",
]
for key, faname, d, width, height, asc in icons:
    lines.append(
        '{%%- if n == "%s" -%%}<svg class="icon icon--%s" viewBox="0 0 %d %d" '
        'width="1em" height="1em" fill="currentColor" focusable="false" '
        '{%% if include.label %%}role="img" aria-label="{{ include.label }}"'
        '{%% else %%}aria-hidden="true"{%% endif %%}>'
        '<path transform="translate(0 %d) scale(1 -1)" d="%s"/></svg>{%%- endif -%%}'
        % (key, key, width, height, asc, d)
    )

dest = os.path.join(ROOT, "_includes/icon.html")
io.open(dest, "w", encoding="utf-8").write("\n".join(lines) + "\n")
print("\nwrote %s (%.1f KB, %d icons)" % (dest, os.path.getsize(dest) / 1024.0, len(icons)))

# ---- standalone SVGs so the shapes can be eyeballed --------------------------
prev = os.path.join(os.path.dirname(os.path.abspath(__file__)), "icon_preview")
if not os.path.isdir(prev):
    os.makedirs(prev)
for key, faname, d, width, height, asc in icons:
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" width="64" height="64">'
           '<path transform="translate(0 %d) scale(1 -1)" d="%s"/></svg>' % (width, height, asc, d))
    io.open(os.path.join(prev, key + ".svg"), "w", encoding="utf-8").write(svg)
print("preview SVGs in %s" % prev)

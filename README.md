# buraksatar.github.io

Personal and academic site for **Burak Satar**, Research Scientist at Singapore
Management University, working on culturally-aware vision-language models.

Live at **<https://buraksatar.github.io>**.

Built with Jekyll on a fork of [academicpages](https://github.com/academicpages/academicpages.github.io),
itself a fork of [Minimal Mistakes](https://mademistakes.com/work/minimal-mistakes-jekyll-theme/).
Deployed by GitHub Pages from `master`.

---

## Editing content

Most things are data-driven, so an edit in one place updates everywhere it appears.

| To change | Edit |
|---|---|
| Bio, hero line, "Work with me" | `_pages/about.md` (the homepage) |
| The About page | `_pages/about-me.md` |
| A news item | `_data/news.yml` — feeds the homepage *and* `/news/` |
| Awards, service, invited talks, languages | `_data/profile.yml` — feeds the homepage, `/profile.txt` and the JSON-LD |
| A paper | its file in `_publications/` — feeds the homepage, `/publications/` and its own page |
| Research themes | `_data/research_themes.yml` |
| Co-author links | `_data/coauthors.yml` |
| CV | `_pages/cv.md` (the PDF at `files/cv.pdf` is separate and hand-made) |
| Nav | `_data/navigation.yml` |

### Publication front matter

```yaml
theme: cultural-multimodal        # must match an id in _data/research_themes.yml
status: published                 # published | under-review | under-development
selected: 1                       # optional: 1-3, appears in "Selected work" on the homepage
teaser: "teasers/name.webp"       # optional: falls back to a generated SVG placeholder
award: "Joint 3rd place"          # optional
equal_contrib: ["A", "B"]         # optional: marks these authors with an asterisk
links:                            # optional: falls back to pdfurl
  - {label: "Paper", url: "..."}
```

Two things that will bite you:

- **`theme` must match an id in `_data/research_themes.yml`.** Rename a theme
  without updating the papers and they vanish from `/publications/` — their own
  pages still build, so it is easy to miss. This has happened once.
- **Author names must match the keys in `_data/coauthors.yml` exactly**, or the
  name renders as plain text instead of a link. Watch for `Joo-Hwee` vs
  `Joo Hwee`, and for all-caps surnames.

---

## Two files that must be kept in step

`_pages/cv.md` and `_data/profile.yml` both list academic service and invited
talks. The CV needs markdown links, `/profile.txt` needs plain text, and there is
no clean way to generate one from the other — so if you add service to one, add
it to the other.

Everything else has exactly one source.

---

## Running it locally

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config_preview.yml
```

The preview config sets `url: http://localhost:4173`, so serve on that port or
absolute links will point at production.

Needs Ruby 3.x. The `github-pages` gem will not install on the macOS system Ruby.

---

## CI

`.github/workflows/ci-preview.yml` builds on every branch and pull request with
`--strict_front_matter`, then pushes the built site to the `ci-preview` branch so
a build can be inspected without deploying it:

```bash
git clone --depth 1 --branch ci-preview https://github.com/buraksatar/buraksatar.github.io.git preview
cd preview/site && python3 -m http.server 4173
```

---

## Generated files

These are generated and should not be hand-edited:

| File | Regenerate with |
|---|---|
| `_includes/icon.html` | `python3 scripts/make_icons.py` |
| `_includes/sea-map.html` | `python3 scripts/make_sea_map.py` |

Both scripts document their inputs at the top. The icons are inline SVG extracted
from the FontAwesome and Academicons fonts, which are no longer in the repo — the
script explains how to restore them from git history.

---

## Theme notes

- Colours, type and spacing live in `_sass/theme/_burak_{tokens,light,dark}.scss`.
  Everything else is `_sass/_custom.scss`, imported last so it can override
  compiled upstream rules.
- Fonts (Newsreader, Inter) are self-hosted in `assets/fonts/site/`, subset to
  Latin, Latin Extended and Vietnamese. Licences sit alongside them.
- No Node toolchain. `assets/js/site.js` is served as written.
- Ruby Sass compiles this: no `@use`, no `math.div`, and never write CSS
  `min()`/`max()` in SCSS, as Sass shadows them. `clamp()` passes through.
- Never put a Liquid block tag (`if`, `for`, …) inside a Liquid comment block.
  Liquid still tokenises it, so the tag collides with the closing `endcomment`
  and the build fails.

## Licence

Site content © Burak Satar. Template code MIT, per `LICENSE`.

---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
excerpt: "Peer-reviewed publications by Burak Satar on culturally-aware vision-language models, text-video retrieval and multimodal reasoning."
---

{% comment %}
  This page used to be a `redirect_to: /#publications` stub while the homepage
  carried the whole bibliography as hand-typed markdown. Everything below is
  generated from the _publications/ collection and grouped by the themes in
  _data/research_themes.yml, so there is exactly one source of truth.

  NOTE: do not reintroduce `redirect_to` in the front matter. jekyll-redirect-from
  wins over page content, and this page would silently go blank.
{% endcomment %}

<p>
Also on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.
An asterisk marks equal contribution.
</p>

{% assign pubs = site.publications | sort: "date" | reverse %}

{% comment %}
  Within each theme: published work first, then under review, then under
  development. Ordering by date alone would bury the published papers under the
  unpublished ones, since the in-progress work is the most recent.
{% endcomment %}
{% for t in site.data.research_themes %}
  {% assign theme_pubs = pubs | where: "theme", t.id %}
  {% if theme_pubs.size > 0 %}
  <h2 id="{{ t.id }}">{{ t.title }}</h2>
  {% if t.blurb %}<p class="theme-blurb">{{ t.blurb }}</p>{% endif %}
  <div class="pub-list">
    {% assign published = theme_pubs | where: "status", "published" %}
    {% for pub in published %}{% include pub-entry.html pub=pub %}{% endfor %}
    {% assign reviewing = theme_pubs | where: "status", "under-review" %}
    {% for pub in reviewing %}{% include pub-entry.html pub=pub %}{% endfor %}
    {% assign developing = theme_pubs | where: "status", "under-development" %}
    {% for pub in developing %}{% include pub-entry.html pub=pub %}{% endfor %}
  </div>
  {% endif %}
{% endfor %}

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

{% for t in site.data.research_themes %}
  {% assign theme_pubs = pubs | where: "theme", t.id %}
  {% if theme_pubs.size > 0 %}
  <h2 id="{{ t.id }}">{{ t.title }}</h2>
  {% if t.blurb %}<p class="theme-blurb">{{ t.blurb }}</p>{% endif %}
  <div class="pub-list">
    {% for pub in theme_pubs %}{% include pub-entry.html pub=pub %}{% endfor %}
  </div>
  {% endif %}
{% endfor %}

<h2 id="in-progress">Also in progress</h2>

<p>
Retrieval-augmented reasoning segmentation in a cultural context, with Zhixin Ma.
Drafts on request &mdash; <a href="mailto:{{ site.author.email }}">email me</a>.
</p>

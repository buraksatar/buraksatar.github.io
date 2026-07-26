---
title: "Sitemap"
permalink: /sitemap/
author_profile: true
excerpt: "Every page on buraksatar.github.io, plus the machine-readable versions."
---

Machine-readable: [sitemap.xml](/sitemap.xml) · [feed.xml](/feed.xml) · [llms.txt](/llms.txt) · [profile.txt](/profile.txt)

## Pages

<ul>
{% assign sorted_pages = site.pages | sort: 'title' %}
{% for node in sorted_pages %}
  {% if node.title and node.sitemap != false and node.redirect_to == nil %}
  <li><a href="{{ node.url }}">{{ node.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

{% for collection in site.collections %}
{% if collection.output and collection.label != 'posts' and collection.docs.size > 0 %}
## {{ collection.label | replace: '_', ' ' | capitalize }}

<ul>
{% assign docs = collection.docs | sort: 'date' | reverse %}
{% for doc in docs %}
  <li><a href="{{ doc.url }}">{{ doc.title }}</a></li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}

## Writing

<ul>
{% for post in site.posts %}
  <li><a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>

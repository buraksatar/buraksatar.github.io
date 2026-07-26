---
title: "News"
permalink: /news/
author_profile: true
excerpt: "News timeline for Burak Satar: papers, awards, talks, and milestones from 2018 to today."
---

<ul class="news-list">
{% for item in site.data.news %}
  <li class="news-list__item">
    <span class="news-list__date">{{ item.date }}</span>
    <span class="news-list__text">{{ item.text | markdownify | remove: "<p>" | remove: "</p>" | strip }}</span>
  </li>
{% endfor %}
</ul>

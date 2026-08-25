---
permalink: /
title: "Burak Satar"
seo_title: "Burak Satar — Research Scientist, culturally-aware vision-language models"
excerpt: "Burak Satar is a Research Scientist at Singapore Management University making vision-language models culturally aware, starting with Southeast Asia."
author_profile: true
# /about/ is a real page now (_pages/about-me.md), so the homepage must not
# also claim that URL — two documents targeting /about/index.html breaks the build.
redirect_from:
  - /about.html
---

{% comment %}
  This page used to be ~139 lines and carried the entire publication list by
  hand, duplicating the _publications/ collection. Selected work and news are
  now generated from _publications/ and _data/news.yml.
{% endcomment %}

I make Vision-Language Models (VLMs) culturally aware, starting with Southeast Asia, one of the world's most culturally diverse regions.
{: .hero__lede}

I am a Research Scientist at Singapore Management University (SMU), working with [Prof Chong-Wah Ngo](https://scholar.google.com/citations?user=HM39HrUAAAAJ&hl=en) on multimodal reasoning across image, video, audio and text.

<div class="hero__chips">
<a href="/publications/cultural-moment/" class="chip">EMNLP 2026</a>
<a href="/publications/seeing-culture/" class="chip">EMNLP 2025</a>
<a href="/publications/vg-tvp/" class="chip">AAAI 2025</a>
<a href="/cv/" class="chip">A*STAR SINGA Scholar</a>
</div>

**I am actively looking for collaborators and student interns** on culturally-aware multimodal AI.\\
[Book a 30-minute chat](/meeting/) or [email me](mailto:buraks@smu.edu.sg).
{: .notice--info}

Our newest benchmark, [Cultural Moment](/publications/cultural-moment/), is accepted to **EMNLP 2026** (Main Conference): it extends the test to video, asking models to name a Southeast Asian cultural concept, recognize it among unlabeled video moments, and locate its sub-events in time. Explore it on the [project page](https://culturalmoment-benchmark.github.io/).

I build tests that vision-language models fail. When a model describes a festival, a dish or a ritual from Southeast Asia, does it understand what it is looking at, or has it only learned what confidence sounds like? Our EMNLP 2025 benchmark, [Seeing Culture](/publications/seeing-culture/), makes models show their work: answer a culturally grounded question, then point to the evidence in the image. A model that names the right artifact while highlighting the wrong one did not know the answer; it guessed well. The gaps we measure are systematic, not noise.

Before SMU I spent five years at Nanyang Technological University (NTU) and A\*STAR's Institute for Infocomm Research on an A\*STAR SINGA scholarship, working on semantic, debiased and moment-level text-video retrieval. I grew up in Bursa (Türkiye), studied on exchange in Siena and Naples (Italy), worked in Valencia (Spain) and Istanbul (Türkiye), and have lived in Singapore since 2020. I have often been the person in the room who does not get the reference. The difference is that I knew it. The models I test do not. [More about how I got here &rarr;](/about/)

My PhD thesis, *Towards Semantic, Debiased and Moment Video Retrieval with Multi-modal Features*, was supervised by [Prof Joo-Hwee Lim](https://scholar.google.com/citations?user=BjEDX4EAAAAJ&hl=en), [Dr Hongyuan Zhu](https://hongyuanzhu.github.io/) and [Prof Hanwang Zhang](https://scholar.google.com.sg/citations?user=YG0DFyYAAAAJ&hl=en). During it I spent three months with [Dr Michael Wray](https://mwray.github.io/) in Dima Damen's group at the University of Bristol. My master's, on vehicle detection, was supervised by [Prof Ahmet Emir Dirik](https://scholar.google.com/citations?user=cfgcBIEAAAAJ&hl=tr) at Uludağ University.

## What I work on

<ul class="themes">
{%- for t in site.data.research_themes -%}
  {%- if t.id != 'earlier' -%}
  {%- assign themed = site.publications | where: "theme", t.id -%}
  {%- assign done = themed | where: "status", "published" -%}
  {%- assign wip = themed.size | minus: done.size -%}
  <li class="themes__item">
    <a class="themes__title" href="/publications/#{{ t.id }}">{{ t.title }}</a>
    {%- comment -%}
      Published and in-progress counted separately, so a theme with one paper out
      and three in the pipeline does not read as four published papers.

      The published count says "published" rather than "paper": "1 paper, 1 in
      progress" reads as though the single paper is the in-progress one.
    {%- endcomment -%}
    {%- if done.size > 0 or wip > 0 %} <span class="pub__note">
      {%- if done.size > 0 %}{{ done.size }} published{% endif -%}
      {%- if done.size > 0 and wip > 0 %} &middot; {% endif -%}
      {%- if wip > 0 %}{{ wip }} in progress{% endif -%}
    </span>{% endif %}
    <p class="themes__blurb">{{ t.blurb }}</p>
  </li>
  {%- endif -%}
{%- endfor -%}
</ul>

## Selected work

{% assign selected = site.publications | where_exp: "p", "p.selected" | sort: "selected" %}
<div class="pub-list">
{% for pub in selected %}{% include pub-entry.html pub=pub %}{% endfor %}
</div>

[All publications &rarr;](/publications/)

## Awards and honours

<ul class="awards">
{% for a in site.data.profile.awards %}
  <li class="awards__item"><span>{{ a }}</span></li>
{% endfor %}
</ul>

## Recent news

<ul class="news-list">
{% for item in site.data.news limit: 5 %}
  <li class="news-list__item">
    <span class="news-list__date">{{ item.date }}</span>
    <span class="news-list__text">{{ item.text | markdownify | remove: "<p>" | remove: "</p>" | strip }}</span>
  </li>
{% endfor %}
</ul>

[Full news archive &rarr;](/news/)

## Work with me

* **Research collaborators** — cultural reasoning and grounding benchmarks, culturally-aware VLMs, Southeast Asia datasets. [Book a 30-minute chat](/meeting/).
* **Students** — internships and research mentorship at SMU on multimodal AI. [Email me](mailto:buraks@smu.edu.sg) with your CV and a short note on what you would like to work on.
* **Industry and talks** — invited talks, media, and projects on cultural AI evaluation and model design. [Email me](mailto:buraks@smu.edu.sg) or [book a slot](/meeting/).

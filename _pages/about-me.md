---
layout: single
title: "About"
seo_title: "About Burak Satar: how I got here, and what I actually work on"
permalink: /about/
redirect_from:
  - /about.html
last_modified: 2026-10-15
author_profile: true
excerpt: "Burak Satar: the route from Bursa to Singapore, and a plain-language explanation of research on culturally-aware vision-language models."
---

{% comment %}
  NOTE FOR BURAK: there is deliberately no paragraph here saying why you work on
  cultural AI. Everything on this page is either a documented fact from the CV or
  a restatement of something you have already published. Your motivation is the
  one thing that cannot be reconstructed from the record, so it is left for you
  to write rather than invented on your behalf.
{% endcomment %}

## The short version

Show a vision-language model a wedding in Ohio and it will describe the dress,
the cake, the first dance. Show it a Barong dance in Bali and ask which figure
represents good, and it will still answer: fluently, immediately, and often
wrongly. It has learned what a confident answer sounds like, not what it is
looking at. The models learn from the internet, and the internet is not the world.

My work is to measure that gap precisely enough to fix it.
[Seeing Culture](/publications/seeing-culture/) (EMNLP 2025) makes a model show
its work: answer a question about a cultural artifact, then point to it in the
image. GPT-o3 answers **91%** of across-culture questions correctly, yet its
grounding never rises above **32.5 mean IoU**. It says the right word and points
at the wrong thing.

[Cultural Moment](/publications/cultural-moment/) (EMNLP 2026, oral) carries the
test into video, where culture unfolds in time. A model must name a Southeast
Asian concept, recognize it among unlabeled video moments, and locate its
sub-events. Even the strongest models clear all three stages for fewer than
**30%** of concepts. You can
[try the three stages yourself](https://culturalmoment-benchmark.github.io/).

## How I got here

Bursa → Siena and Naples → Valencia → Bursa → İstanbul → London → Singapore → Bristol → Singapore
{: .about__route}

I grew up in **Bursa**, Türkiye, and studied electronics engineering at Uludağ
University, with exchange semesters in Siena and Naples. Then came a software
traineeship in Valencia, a master's on vehicle detection back in Bursa, machine
learning engineering at Turkish Technic in İstanbul, and mentoring at a
developer festival in London.

Since 2020 I have been in **Singapore**: a PhD at NTU and A\*STAR's Institute
for Infocomm Research on a SINGA scholarship, three months in Dima Damen's group
at the University of Bristol, and, since March 2025, a Research Scientist at SMU.

I am an outsider to every culture in these benchmarks, which is why they were
built with people who are not: co-authors, students and annotators from each
country. Cultural AI built only by people who visited is the problem, not the fix.

## What I think the field should do

1. **Source data from the region, with the people of the region.** Representation
   is a data collection decision, not a fine-tuning trick.
2. **Test concepts, not translations.** If the concept inventory is Western,
   translating the language changes nothing about what is measured.
3. **Demand evidence, not just answers.** Grounding or segmentation separates
   understanding from a lucky guess.
4. **Report the gap, not the average.** A single accuracy number hides exactly
   the disparity that matters.
5. **Treat cultural knowledge and cultural perception as different problems.**
   Fixing one does not fix the other.

## Common questions

{% include faq.html %}

## Elsewhere

I co-run [Turquoise Dot](https://theturquoisedot.github.io/), a meetup for
Turkish and Turkic researchers and tech professionals in Singapore, and I keep a
[list of cultural VLM resources](/resources/) current as the field moves.

If any of this is useful to you, [email me](mailto:buraks@smu.edu.sg) or
[book a 30-minute chat](/meeting/).

---
layout: single
title: "About"
seo_title: "About Burak Satar — how I got here, and what I actually work on"
permalink: /about/
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

## The three-minute version

Show a computer a photo of a wedding in Ohio and it will tell you about the
dress, the cake, the first dance. Show it a Barong dance in Bali and ask which
figure represents good, and it will still answer — fluently, immediately, and
often wrongly. It has learned what confident text looks like, not what it is
looking at.

This happens because the models are trained on whatever was on the internet, and
the internet is not the world. Roughly speaking, the machine has seen a million
Ohio weddings and a handful of Barong dances.

My work is to prove that precisely enough that it can be fixed. We build tests.
The one I care most about, [Seeing Culture](/publications/seeing-culture/), does
something most tests do not: it makes the model show its work. First answer the
question about the artifact; then point to that artifact in the picture. A model
that names the right thing while circling the wrong part of the image did not
know the answer — it guessed well. Ordinary accuracy scores cannot tell those two
apart. Ours can.

The result is not subtle. On our benchmark GPT-o3 answers **91%** of
across-culture questions correctly, and yet its grounding never rises above
**32.5 mean IoU**. It says the right word and points at the wrong thing.

*(I was a finalist in NTU's Three Minute Thesis competition in 2022, which is
where I learned to do this without slides.)*

## How I got here

I grew up in **Bursa**, in northwest Türkiye, and studied electronics engineering
at **Uludağ University**, with exchange semesters in **Siena** and **Naples**.
After that a software engineering traineeship in **Valencia**, a master's back in
Bursa on vehicle detection, a year as a machine learning engineer at Turkish
Technic in **İstanbul**, and mentoring at a developer festival in **London**.

Since 2020 I have been in **Singapore**: five years at NTU and A\*STAR's Institute
for Infocomm Research on a SINGA scholarship, with three months at the University
of **Bristol** in Dima Damen's group, and since March 2025 a Research Scientist at
SMU.

Bursa → Siena and Naples → Valencia → Bursa → İstanbul → London → Singapore → Bristol → Singapore.

I am Turkish, I live in Singapore, and I work on Southeast Asia. I am an outsider
to every culture in the Seeing Culture benchmark, which is why it was built with
people who are not: the co-authors, students and annotators from the countries in
it. Cultural AI built only by people who visited is the problem, not the fix.

## What I think the field should do

This is the checklist I ended
[Why Vision-Language Models Fail Outside the West](/blog/why-vlms-fail-outside-the-west/)
with, and it is still what I would argue for:

1. **Source data from the region, with the people of the region.** Representation
   is a data collection decision, not a fine-tuning trick.
2. **Test concepts, not translations.** If the concept inventory is Western,
   translating the language changes nothing about what is measured.
3. **Demand evidence, not just answers.** Grounding or segmentation separates
   understanding from lucky guessing.
4. **Report the gap, not the average.** A single accuracy number hides exactly the
   disparity that matters.
5. **Treat cultural knowledge and cultural perception as different problems.**
   Fixing one does not fix the other.

## Elsewhere

I run [Turquoise Dot](https://www.linkedin.com/company/turquoisedot), a meetup for
Turkish and Turkic researchers and tech professionals in Singapore, and I keep a
[list of cultural VLM resources](/resources/) current as the field moves.

If any of this is useful to you, [email me](mailto:buraks@smu.edu.sg) or
[book a 30-minute chat](/meeting/).

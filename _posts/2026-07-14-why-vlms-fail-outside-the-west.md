---
title: "Why Vision-Language Models Fail Outside the West"
date: 2026-07-14
permalink: /blog/why-vlms-fail-outside-the-west/
excerpt: "Vision-language models answer confidently about weddings in Ohio and struggle with festivals in Java. A tour of the evidence, the reasons, and what better benchmarks look like."
tags:
  - vision-language-models
  - cultural-awareness
  - benchmarks
  - southeast-asia
---

Ask a state-of-the-art vision-language model about a wedding photo from Ohio and it will describe the dress, the cake, and the first dance. Show it a barong dance from Bali and ask which character symbolises goodwill, and things get shaky. The model may still produce a confident answer. Whether that answer reflects any understanding of the scene is a different question, and it is the question I spend most of my time on.

This post is a tour of what we actually know about the cultural blind spots of vision-language models (VLMs): the evidence that they exist, the reasons they persist, and what I think better evaluation looks like. It is also the reading list I wish I had when I started working on this problem.

## An old problem with a new face

Behavioral scientists have known for a long time that they were building a science of "human nature" on a very narrow sample of humans. [Henrich, Heine and Norenzayan (2010)](https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/weirdest-people-in-the-world/BF84F7517D56AFF7B7EB58411A554C17) called that sample WEIRD: Western, Educated, Industrialized, Rich, Democratic. Their point was not just that the sample was narrow, but that it was unusual: on many measures, WEIRD populations are outliers among humans.

Multimodal AI inherited the same problem through its training data. Web-scraped image-text corpora over-represent the people, objects, scenes and ceremonies of the internet-rich world. The models built on them are WEIRD in the same sense, and it shows as soon as you evaluate them anywhere else.

## The evidence, in rough chronological order

The first clear demonstration I know of came before the current VLM era. [DeVries et al. (CVPR Workshops 2019)](https://arxiv.org/abs/1906.02659) ran commercial object-recognition systems over household photos from Dollar Street and found that accuracy dropped sharply for items from low-income, non-Western households. Same object category, different soap bar, worse predictions.

Then reasoning benchmarks arrived. [MaRVL (Liu et al., EMNLP 2021)](https://aclanthology.org/2021.emnlp-main.818/) rebuilt a visual reasoning task around concepts and images chosen by native speakers of Indonesian, Mandarin, Swahili, Tamil and Turkish, instead of translating a Western benchmark, and exposed how much existing vision-and-language evaluation assumed a Western concept inventory. The same year, [GD-VCR (Yin et al., EMNLP 2021)](https://aclanthology.org/2021.emnlp-main.162/) showed models scoring significantly lower on East Asian, South Asian and African images than on Western ones, with the largest gaps exactly where culture matters most: weddings, festivals, religious activities.

You might hope newer and bigger models closed the gap. The 2023-2025 wave of benchmarks says otherwise:

* [GeoDE (Ramaswamy et al., NeurIPS 2023)](https://arxiv.org/abs/2301.02560) crowdsourced 61,940 images of everyday objects directly from people in six world regions, precisely because web-scraped data cannot measure the disparity it causes.
* [CVQA (Romero et al., NeurIPS 2024)](https://arxiv.org/abs/2406.05967) built culturally grounded visual questions from 30 countries in 31 languages and found current multimodal models struggling across the board.
* [CulturalVQA (Nayak et al., EMNLP 2024)](https://arxiv.org/abs/2407.10920) probed frontier models directly and found clear geographic disparities: strong on North American content, substantially worse on African contexts.
* Food, one of the densest carriers of culture, gets its own line of evidence. [FoodieQA (Li et al., EMNLP 2024)](https://aclanthology.org/2024.emnlp-main.1063/) found open-source VLMs trailing humans by roughly 41 percent on fine-grained multi-image questions about regional Chinese cuisine. [WorldCuisines (Winata et al., NAACL 2025)](https://aclanthology.org/2025.naacl-long.167/) scaled this to over a million VQA data points across 30 languages and showed models failing on regional dish identification, especially under adversarial location context.
* The disparity is not limited to images. [BLEnD (Myung et al., NeurIPS 2024)](https://arxiv.org/abs/2406.09948), a text-only benchmark of everyday cultural knowledge, measured gaps of up to 57 percent for GPT-4 between well-represented and under-represented regions. The visual gap sits on top of a knowledge gap.

Across six years, different tasks, different regions and different model generations, the pattern is stable: performance tracks the cultural distribution of the training data.

## Why translation is not the fix

A tempting shortcut is to take an existing English benchmark, translate the questions, and call the result multicultural. It is cheaper, and it is also the wrong measurement. A translated question about a hot dog is still a question about a hot dog.

The benchmarks that revealed the most (MaRVL, CVQA, FoodieQA, and others) were built the expensive way: concepts selected by people from the culture, images sourced from the region, questions written by people who know what the object means and not only what it is called. The data side of the field is slowly catching up to this. [SEACrowd (Lovenia et al., EMNLP 2024)](https://aclanthology.org/2024.emnlp-main.296/) consolidated standardized corpora across roughly a thousand Southeast Asian languages and benchmarked models on 36 indigenous languages. [SEA-VL (Cahyawijaya et al., ACL 2025)](https://aclanthology.org/2025.acl-long.916/) built a 1.28 million image culturally relevant dataset for the region and reported an instructive comparison of collection methods: crawling reached about 85 percent cultural relevance at much lower cost than crowdsourcing, while synthetic generation failed to capture cultural nuance at all. If you were hoping to solve cultural coverage by generating images, that result should give you pause.

## Right answer, wrong reason

There is a second failure mode that accuracy numbers hide. A model can pick the correct multiple-choice answer for the wrong reason: pattern-matching on the answer options, exploiting distribution quirks, or free-riding on a caption. For cultural content this matters even more, because superficial cues (an ornate costume, a temple in the background) correlate with correct answers without any understanding of what the artifact is.

This is the gap we tried to close with [Seeing Culture (EMNLP 2025)](https://aclanthology.org/2025.emnlp-main.1131/), a benchmark of 1,065 images covering 138 cultural artifacts from seven Southeast Asian countries with over 3,000 questions. The design is two-stage: the model first answers a culturally grounded visual question, and then it must segment the artifact it reasoned about, providing visual evidence for its answer. A model that answers "barong" but highlights the wrong figure in the image did not understand the scene, and the benchmark treats it accordingly. The [dataset is public on HuggingFace](https://huggingface.co/datasets/Multimedia-SMU/seeingculture-benchmark), and the gaps we measured in current VLMs are systematic, not noise.

Why start with Southeast Asia? Partly because I live and work here. Mostly because the region is a stress test by construction: eleven countries, hundreds of languages, and deep cultural diversity within single countries, all under-represented in web-scale training data. Methods that work here have a chance of working anywhere.

## What progress looks like

If I compress everything above into a checklist for the field, it reads like this:

1. **Source data from the region, with the people of the region.** GeoDE, SEA-VL and SEACrowd all point the same way: representation is a data collection decision, not a fine-tuning trick.
2. **Test concepts, not translations.** If the benchmark's concept inventory is Western, translating its language changes nothing about what is measured.
3. **Demand evidence, not just answers.** Grounding, segmentation, or any mechanism that ties the answer to the pixels separates understanding from lucky guessing.
4. **Report the gap, not the average.** A single accuracy number hides exactly the disparity that matters. Regional breakdowns should be standard practice.
5. **Treat cultural knowledge and cultural perception as different problems.** BLEnD shows the knowledge gap exists without any images. Fixing one does not fix the other.

## A reading list, maintained

I keep a curated list of cultural and geographic VLM benchmarks, including everything cited above, on a dedicated page: [Cultural VLM resources](/resources/). I update it as the field moves. If I am missing a benchmark or dataset, [email me](mailto:buraks@smu.edu.sg) and I will add it.

And if you work on culturally-aware multimodal AI, especially in or about Southeast Asia, I want to hear from you: [book a 30-minute chat](/meeting/). The region's diversity is exactly why this problem is worth solving here first.

---
title: "Cultural VLM Resources"
permalink: /resources/
author_profile: true
excerpt: "A curated, maintained list of benchmarks and datasets for culturally-aware and geographically robust vision-language models, with a focus on Southeast Asia."
---

A curated list of benchmarks and datasets for measuring how well vision-language models (and multimodal AI generally) handle cultural and geographic diversity. I maintain this page as the field moves; it accompanies my post [Why Vision-Language Models Fail Outside the West](/blog/why-vlms-fail-outside-the-west/).

Missing something? [Email me](mailto:buraks@smu.edu.sg) and I will add it.

*Last updated: July 2026.*

## Southeast Asia

* **[Seeing Culture](https://aclanthology.org/2025.emnlp-main.1131/)** (EMNLP 2025): 1,065 images of 138 cultural artifacts from seven SEA countries, 3,000+ questions. Two-stage evaluation: answer a culturally grounded visual question, then segment the artifact as visual evidence of the reasoning. [Dataset on HuggingFace](https://huggingface.co/datasets/Multimedia-SMU/seeingculture-benchmark), [project page](https://seeingculture-benchmark.github.io/). Disclosure: this is our work.
* **[SEA-VL](https://aclanthology.org/2025.acl-long.916/)** (ACL 2025): a 1.28M-image culturally relevant vision-language dataset for Southeast Asia, with a systematic comparison of crowdsourcing, crawling and synthetic generation as collection methods.
* **[SEACrowd](https://aclanthology.org/2024.emnlp-main.296/)** (EMNLP 2024): a data hub and benchmark suite consolidating standardized corpora (text, image, audio) across roughly 1,000 Southeast Asian languages, with evaluations on 36 indigenous languages.

## Cultural visual reasoning and VQA

* **[MaRVL](https://aclanthology.org/2021.emnlp-main.818/)** (EMNLP 2021): visually grounded reasoning built around concepts and images selected by native speakers of Indonesian, Mandarin, Swahili, Tamil and Turkish.
* **[GD-VCR](https://aclanthology.org/2021.emnlp-main.162/)** (EMNLP 2021): geo-diverse visual commonsense reasoning; models score notably lower on East Asian, South Asian and African images, with the biggest gaps on culture-specific scenarios.
* **[CVQA](https://arxiv.org/abs/2406.05967)** (NeurIPS 2024 D&B): culturally grounded VQA from 30 countries in 31 languages and 13 scripts.
* **[CulturalVQA](https://arxiv.org/abs/2407.10920)** (EMNLP 2024): probes frontier VLMs on cultural understanding across regions; strong on North American content, substantially weaker on African contexts.

## Food and everyday culture

* **[FoodieQA](https://aclanthology.org/2024.emnlp-main.1063/)** (EMNLP 2024): fine-grained multimodal QA on regional Chinese food culture; open-source VLMs trail humans by roughly 41 percent on multi-image questions.
* **[WorldCuisines](https://aclanthology.org/2025.naacl-long.167/)** (NAACL 2025, Best Theme Paper): 1M+ VQA data points on global cuisines across 30 languages, including adversarial location contexts.
* **[BLEnD](https://arxiv.org/abs/2406.09948)** (NeurIPS 2024 D&B): everyday cultural knowledge across 16 regions and 13 languages. Text-only (LLM benchmark), useful for separating the knowledge gap from the perception gap.

## Geographic robustness of visual recognition

* **[Does Object Recognition Work for Everyone?](https://arxiv.org/abs/1906.02659)** (CVPR Workshops 2019): commercial recognition systems are markedly less accurate on household items from low-income, non-Western households (Dollar Street).
* **[GeoDE](https://arxiv.org/abs/2301.02560)** (NeurIPS 2023 D&B): 61,940 images of 40 object classes crowdsourced directly from six world regions, built to evaluate geographic disparities without web-scraping bias.

## Foundational reading

* **[The weirdest people in the world?](https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/weirdest-people-in-the-world/BF84F7517D56AFF7B7EB58411A554C17)** (Henrich, Heine and Norenzayan, Behavioral and Brain Sciences 2010): the WEIRD sampling critique that the AI version of this problem echoes.

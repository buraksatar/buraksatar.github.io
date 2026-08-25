---
title: "Cultural Moment Benchmark: Evaluating Video Cultural Reasoning and Grounding in Southeast Asia"
collection: publications
permalink: /publications/cultural-moment/
excerpt: "Three-stage video probes of cultural understanding across Southeast Asia: naming a concept, recognizing it among unlabeled video moments, and locating its sub-events in time. EMNLP 2026."
date: 2026-08-25
venue: "EMNLP 2026 (Main Conference)"
citation_venue: "EMNLP 2026"
theme: cultural-multimodal
status: published
selected: 1
teaser: "teasers/cultural-moment.webp"
pdfurl: "https://arxiv.org/pdf/2608.23065"
authors:
  - "Burak Satar"
  - "Zhixin Ma"
  - "Cheng Yu-Tong"
  - "Huy Hoang Tran"
  - "Phuong Anh Nguyen"
  - "Chong-Wah Ngo"
links:
  - label: "arXiv"
    url: "https://arxiv.org/abs/2608.23065"
  - label: "Project site"
    url: "https://culturalmoment-benchmark.github.io/"
bibtex: |
  @misc{satar2026cultural,
      title={Cultural Moment Benchmark: Evaluating Video Cultural Reasoning and Grounding in Southeast Asia},
      author={Burak Satar and Zhixin Ma and Yu-Tong Cheng and Huy Hoang Tran and Phuong Anh Nguyen and Chong-Wah Ngo},
      year={2026},
      eprint={2608.23065},
      archivePrefix={arXiv},
      url={https://arxiv.org/abs/2608.23065}
  }
---

**Burak Satar**, Zhixin Ma, Cheng Yu-Tong, Huy Hoang Tran, Phuong Anh Nguyen, Chong-Wah Ngo

*Three-stage video probes of cultural understanding across Southeast Asia: naming a concept, recognizing it among unlabeled video moments, and locating its sub-events in time.*

{% include pub-links.html %}

<img src="/images/cultural-moment-teaser.webp" alt="The CMB three-stage probe of one cultural concept: Stage 1 naming among four candidates, Stage 2 recognition among four video moments, Stage 3 free-form temporal localization on a different video." width="600" loading="lazy"/>

## What it covers

306 expert-curated concepts from seven Southeast Asian countries across five categories, evaluated over 624 videos in a 3-stage &times; 3-mode framework. Cultural understanding is scored as three separate abilities rather than one number, and the abilities do not compose: even the strongest closed-source models clear all three stages for fewer than 30% of concepts, and a 14-rater human study shows the knowledge required is country-specific, not regional.

Try the interactive walkthrough on the [project page](https://culturalmoment-benchmark.github.io/), where the leaderboard and challenge details also live. The paper appears at the EMNLP 2026 Main Conference (15.4% acceptance rate); the ACL Anthology version will be linked here once published.

## Related

It builds on [Seeing Culture](/publications/seeing-culture/) (EMNLP 2025), which
asks the same two-stage question — reason about a cultural artifact, then ground
it in the image — of still images rather than video. Cultural Moment carries the
visual-option design into video and adds free-form temporal localization.

{% include bibtex.html %}

---
title: "Towards Debiasing Frame Length Bias in Text-Video Retrieval via Causal Intervention"
collection: publications
permalink: /publications/frame-length-bias/
redirect_from:
  - /FrameLengthBias/
  - /framelength/
excerpt: "Shows that text-video retrieval models exploit clip length as a shortcut, and mitigates the bias with causal intervention."
date: 2023-11-20
venue: "BMVC 2023"
citation_venue: "BMVC 2023"
authors:
  - "Burak Satar"
  - "Hongyuan Zhu"
  - "Hanwang Zhang"
  - "Joo-Hwee Lim"
pdfurl: "https://papers.bmvc2023.org/0650.pdf"
theme: debiased-retrieval
status: published
selected: 3
teaser: "teasers/frame-length-bias.webp"
links:
  - label: "PDF (BMVC)"
    url: "https://papers.bmvc2023.org/0650.pdf"
  - label: "arXiv"
    url: "https://arxiv.org/abs/2309.09311"
  - label: "Video"
    url: "https://youtu.be/aMhNvTCkT8Y"
bibtex: |
  @inproceedings{DBLP:conf/bmvc/SatarZZL23,
    author       = {Burak Satar and
                    Hongyuan Zhu and
                    Hanwang Zhang and
                    Joo{-}Hwee Lim},
    title        = {Towards Debiasing Frame Length Bias in Text-Video Retrieval via Causal
                    Intervention},
    booktitle    = {34th British Machine Vision Conference 2023, {BMVC} 2023, Aberdeen,
                    UK, November 20-24, 2023},
    pages        = {650--658},
    publisher    = {{BMVA} Press},
    year         = {2023},
    url          = {https://papers.bmvc2023.org/0650.pdf},
    biburl       = {https://dblp.org/rec/conf/bmvc/SatarZZL23.bib},
    bibsource    = {dblp computer science bibliography, https://dblp.org}
  }
---

**Burak Satar**<sup>1,2</sup>, Hongyuan Zhu<sup>1</sup>, Hanwang Zhang<sup>2</sup>, Joo-Hwee Lim<sup>1,2</sup>

<sup>1</sup>Institute for Infocomm Research (I<sup>2</sup>R), A\*STAR &nbsp;·&nbsp; <sup>2</sup>College of Computing and Data Science (formerly SCSE), Nanyang Technological University

*Shows that text-video retrieval models exploit clip length as a shortcut, and mitigates the bias with causal intervention.*

{% include pub-links.html %}

<img src="/images/fig-frame-length-bias.webp" alt="Structural causal model for frame length bias in text-video retrieval" width="800" loading="lazy"/>

## Abstract

Many studies focus on improving pretraining or developing new backbones in text-video retrieval. However, existing methods may suffer from the learning and inference bias issue, as recent research suggests in other text-video-related tasks. For instance, spatial appearance features on action recognition or temporal object co-occurrences on video scene graph generation could induce spurious correlations. In this work, we present a unique and systematic study of a temporal bias due to frame length discrepancy between training and test sets of trimmed video clips, which is the first such attempt for a text-video retrieval task, to the best of our knowledge. We first hypothesise and verify the bias on how it would affect the model illustrated with a baseline study. Then, we propose a causal debiasing approach and perform extensive experiments and ablation studies on the Epic-Kitchens-100, YouCook2, and MSR-VTT datasets. Our model overpasses the baseline and SOTA on nDCG, a semantic-relevancy-focused evaluation metric which proves the bias is mitigated, as well as on the other conventional metrics.

## Video

<iframe width="560" height="315" src="https://www.youtube.com/embed/aMhNvTCkT8Y" title="BMVC 2023 presentation: Towards Debiasing Frame Length Bias in Text-Video Retrieval" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>

## Acknowledgements

This research is supported by the Agency for Science, Technology and Research (A\*STAR) under its AME Programmatic Funding Scheme (Project A18A2b0046).

{% include bibtex.html %}

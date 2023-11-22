---
layout: archive
permalink: /FrameLengthBias/
author_profile: true
redirect_from:
  - /framelength
---
<!--- <img src="https://buraksatar.github.io/images/epic_bias.png" alt="epic_bias" width="300"/> !--->

# Towards Debiasing Frame Length Bias in
# Text-Video Retrieval via Causal Intervention

Burak Satar $^{1,2}$, Hongyuan Zhu$^{1}$, Hanwang Zhang$^{2}$, Joo Hwee Lim$^{1,2}$ \\
$^{1}$Institute of Infocomm Research, A*STAR | $^{2}$SCSE, Nanyang Technological University \\
British Machine Vision Conference (BMVC), 2023

<img src="https://buraksatar.github.io/images/scm_camready.png" alt="Structural Causal Model" width="750"/>


Abstract
======

Many studies focus on improving pretraining or developing new backbones in text-video retrieval. However, existing methods may suffer from the learning and inference bias issue, as recent research suggests in other text-video-related tasks. For instance, spatial appearance features on action recognition or temporal object co-occurrences on video scene graph generation could induce spurious correlations. In this work, we present a unique and systematic study of a temporal bias due to frame length discrepancy between training and test sets of trimmed video clips, which is the first such attempt for a text-video retrieval task, to the best of our knowledge. We first hypothesise and verify the bias on how it would affect the model illustrated with a baseline study. Then, we propose a causal debiasing approach and perform extensive experiments and ablation studies on the Epic-Kitchens-100, YouCook2, and MSR-VTT datasets. Our model overpasses the baseline and SOTA on nDCG, a semantic-relevancy-focused evaluation metric which proves the bias is mitigated, as well as on the other conventional metrics.

Video
======

<iframe width="560" height="315" src="https://www.youtube.com/embed/aMhNvTCkT8Y?si=m99s6q1GN6BR17XG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Files
======

<a href="https://arxiv.org/pdf/2309.09311">
<button type="button">Paper
<img src="https://buraksatar.github.io/images/adobe_logo.png" width="50" alt="buttonpng" border="0"/>
</button>
</a>
<a href="https://arxiv.org/abs/2309.09311">
<button type="button">arXiv
<img src="https://buraksatar.github.io/images/arxiv3.jpg" width="40" alt="buttonpng" border="0"/>
</button>
</a>
<a href="https://drive.google.com/file/d/10aXgkCl4PowFelEOyxJp4X90cTtub6Pt/view?usp=sharing">
<button type="button">Poster
<img src="https://buraksatar.github.io/images/pposter.png" width="70" alt="buttonpng" border="0"/>
</button>
</a>


Bibtex
======
```
@inproceedings{Satar_2023_BMVC,
author    = {Burak Satar and Hongyuan Zhu and Hanwang Zhang and Joo-Hwee Lim},
title     = {Towards Debiasing Frame Length Bias in Text-Video Retrieval via Causal Intervention},
booktitle = {34th British Machine Vision Conference 2023, {BMVC} 2023, Aberdeen, UK, November 20-24, 2023},
publisher = {BMVA},
year      = {2023},
url       = {https://papers.bmvc2023.org/0650.pdf}
}
```

Acknowledgements
======
This research is supported by the Agency for Science, Technology and Research (A*STAR) \\
under its AME Programmatic Funding Scheme (Project A18A2b0046).

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

Burak Satar $^{1,2}$, Hongyuan Zhu$^{1}$, Hanwang Zhang$^{2}$, Joo Hwee Lim$^{1,2}$\\
$^{1}$Institute of Infocomm Research, A*STAR, $^{2}$SCSE, Nanyang Technological University 

<img src="https://buraksatar.github.io/images/scm_camready.png" alt="Structural Causal Model" width="700"/>


Abstract
======

Many studies focus on improving pretraining or developing new backbones in text-video retrieval. However, existing methods may suffer from the learning and inference bias issue, as recent research suggests in other text-video-related tasks. For instance, spatial appearance features on action recognition or temporal object co-occurrences on video scene graph generation could induce spurious correlations. In this work, we present a unique and systematic study of a temporal bias due to frame length discrepancy between training and test sets of trimmed video clips, which is the first such attempt for a text-video retrieval task, to the best of our knowledge. We first hypothesise and verify the bias on how it would affect the model illustrated with a baseline study. Then, we propose a causal debiasing approach and perform extensive experiments and ablation studies on the Epic-Kitchens-100, YouCook2, and MSR-VTT datasets. Our model overpasses the baseline and SOTA on nDCG, a semantic-relevancy-focused evaluation metric which proves the bias is mitigated, as well as on the other conventional metrics.

Video
======



Paper
======

arXiv, Poster



Bibtex
======
<font size="5">your_text_here</font>

<font size="5">your_text_here
```
@inproceedings{wray2021semantic,
  title={Towards Debiasing Frame Length Bias in Text-Video Retrieval via Causal Intervention},
  author={Satar, Burak and Zhu, Hongyuan and Zhang, Hanwang and Lim, Joo Hwee},
  booktitle={BMVC},
  year={2023}
}
```
</font>

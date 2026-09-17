---
title: "Cultural VLM Resources"
permalink: /resources/
author_profile: true
excerpt: "A curated, maintained list of benchmarks, datasets and studies for culturally aware and geographically robust vision-language models, with a focus on Southeast Asia."
# Bump this when you actually add or change an entry. Deliberately NOT site.time,
# which would claim the page was updated on every unrelated rebuild.
last_updated: 2026-09-17
---

A curated list of 89 benchmarks, datasets and studies for measuring how well vision-language models (and multimodal AI generally) handle cultural and geographic diversity: image, video, text-to-image and text-to-video. I maintain this page as the field moves; it accompanies my post [Why Vision-Language Models Fail Outside the West](/blog/why-vlms-fail-outside-the-west/).

Every entry was checked against its paper, the venue proceedings and its dataset page; the last full check was on 17 September 2026. Entries are newest first within each section. Data notes: *Data gated* means a Hugging Face access agreement, *Data on request* means a form or email to the authors, *Data coming soon* means the authors have announced a release, and *No public data found* means no release could be located.

The same list is on GitHub as [awesome-cultural-vlm](https://github.com/buraksatar/awesome-cultural-vlm), which is where to send additions and corrections. You can also [email me](mailto:buraks@smu.edu.sg).

*Last updated: {{ page.last_updated | date: "%B %Y" }}.*

## Southeast Asia

Everything on this list that is built from Southeast Asian images, videos or prompts, whatever the task. Neighboring traditions here share surface features (rice, water, gold, drums), so fine-grained discrimination is the test.

* **[Cultural Moment Benchmark](https://arxiv.org/abs/2608.23065)** (EMNLP 2026 Main): Three-stage video benchmark of 306 expert-curated cultural concepts from seven Southeast Asian countries: naming, recognizing among video moments, and temporal localization. Public sample; hidden test set held back. Disclosure: this is our work. [Dataset](https://huggingface.co/datasets/Multimedia-SMU/culturalmoment-benchmark), [Code](https://github.com/culturalmoment-benchmark/culturalmoment-benchmark.github.io), [Project page](https://culturalmoment-benchmark.github.io/).
* **[GG-EZ](https://arxiv.org/abs/2604.11490)** (arXiv, 2026): Regional data filtering plus model merging to adapt LVLMs, SDXL and SigLIP-2 to Southeast Asia, gaining 5 to 15 percent in cultural relevance. [Dataset](https://huggingface.co/collections/SEACrowd/sea-vl-phase-2-multimodal-vision-language-models-for-sea).
* **[Rice-VL](https://arxiv.org/abs/2512.01419)** (arXiv, 2025): ASEAN cultural VQA benchmark: over 28,000 human-curated questions on 7,000 images and 1,000 grounding boxes across 11 countries and 14 categories. No public data found.
* **[SEA-VL](https://arxiv.org/abs/2503.07920)** (ACL 2025 Main): Compares crowdsourcing, crawling and image generation for collecting culturally relevant data, yielding 1.28M Southeast Asian images across 11 countries. [Dataset](https://huggingface.co/collections/SEACrowd/sea-vl-multicultural-vl-dataset-for-southeast-asia-67cf223d0c341d4ba2b236e7), [Code](https://github.com/SEACrowd/sea-vl-experiments).
* **[Seeing Culture](https://arxiv.org/abs/2509.16517)** (EMNLP 2025 Main): Two-stage benchmark: multiple-choice VQA with image options then segmentation of the cultural artifact, 1,065 images, 138 artifacts, 3,178 questions, seven Southeast Asian countries. Disclosure: this is our work. [Dataset](https://huggingface.co/datasets/Multimedia-SMU/seeingculture-benchmark), [Code](https://github.com/buraksatar/seeingculture), [Project page](https://seeingculture-benchmark.github.io).
* **[VietMEAgent](https://arxiv.org/abs/2511.09058)** (FAIR 2025 conference): Vietnamese cultural VQA method pairing cultural object detection, program generation and a knowledge base for dual-modality explanations, with a 28,484-sample dataset over 12 categories. [Dataset](https://huggingface.co/datasets/Dangindev/viet-cultural-vqa).
* **[SEA-VQA](https://aclanthology.org/2024.alvr-1.15/)** (ACL 2024 Workshop (ALVR)): Culture-centric VQA on UNESCO cultural heritage images from 8 Southeast Asian countries; GPT-4 and Gemini score substantially lower than on A-OKVQA. [Dataset](https://huggingface.co/datasets/wit543/sea-vqa).
* **[SEACrowd](https://arxiv.org/abs/2406.10118)** (EMNLP 2024 Main): Data hub of 498 datasheets and 399 dataloaders for Southeast Asian languages across text, image and audio, with a benchmark on 13 tasks. [Dataset](https://github.com/SEACrowd/seacrowd-datahub), [Code](https://github.com/SEACrowd/seacrowd-experiments), [Project page](https://seacrowd.org/seacrowd-catalogue/).

## Multi-country VQA and cultural knowledge

Benchmarks that span many countries or regions. Use these to compare models across cultures at once.

* **[CulturalMenuBench](https://arxiv.org/abs/2609.03526)** (EMNLP 2026 Findings): 4,870 culinary items in 10 languages and 18 regions pair dish and cooking-step images with text to test regional cuisine attribution beyond recognition. Data coming soon. [Code](https://github.com/BobTsang-NLP/CulturalMenuBench).
* **[BLEnD-Vis](https://arxiv.org/abs/2510.11178)** (EACL 2026 Main): Extends BLEnD to VQA with 4,916 generated images and over 21,000 multiple-choice questions across 16 regions, testing rephrasing and cross-modal robustness. [Dataset](https://huggingface.co/datasets/Incomple/BLEnD-Vis), [Code](https://github.com/Social-AI-Studio/BLEnD-Vis).
* **[C3B](https://arxiv.org/abs/2510.00041)** (ICLR 2026): Comic-image benchmark of 2,220 images and 18,789 QA pairs with recognition, cultural-conflict and multilingual generation tasks; 11 open-source MLLMs evaluated. [Dataset](https://huggingface.co/datasets/Coder109/C3B), [Project page](https://c3b-benchmark.github.io/).
* **[ConfusedTourist](https://arxiv.org/abs/2511.17004)** (CVPR 2026 Findings): Adversarial suite of 5,451 images of cuisine, attire and musical instruments from 57 countries with stacked or generated conflicting cues; accuracy drops heavily. [Dataset](https://huggingface.co/datasets/patrickamadeus/vlms-are-confused-tourists), [Code](https://github.com/patrickamadeus/vlms-are-confused-tourists).
* **[CultureMix](https://arxiv.org/abs/2511.22787)** (CVPR 2026): 23k generated food VQA images mixing dishes and backgrounds from 30 countries, testing whether VLMs keep each element's cultural identity. [Dataset](https://huggingface.co/datasets/EunsuKim/CultureMix).
* **[GIMMICK](https://arxiv.org/abs/2502.13766)** (ACL 2025 Findings): Six tasks on 728 cultural events and facets from 144 countries in six regions, with 6,887 images and 993 videos; 31 models evaluated. Data gated. [Dataset](https://huggingface.co/datasets/floschne/gimmick-civqa), [Code](https://github.com/floschne/gimmick).
* **[MMAC](https://arxiv.org/abs/2510.08608)** (ACL 2026 Main): Human-curated multiple-choice benchmark of 27,000 questions aligned across text, image and speech, covering 8 Asian countries and 10 languages, with cross-modal consistency tests. [Dataset](https://huggingface.co/datasets/ZWHTXY/MMAC-Bench).
* **[ALM-bench](https://arxiv.org/abs/2411.16508)** (CVPR 2025): 22,763 questions in 100 languages from 73 countries across 13 cultural and 6 generic categories, in four question formats. [Dataset](https://huggingface.co/datasets/MBZUAI/ALM-Bench), [Code](https://github.com/mbzuai-oryx/ALM-Bench), [Project page](https://mbzuai-oryx.github.io/ALM-Bench/).
* **[CROPE](https://arxiv.org/abs/2410.15453)** (NAACL 2025 Main): VQA benchmark of 1,060 binary questions on culture-specific versus common concepts, testing whether VLMs adapt from in-context text and image descriptions. [Dataset](https://huggingface.co/datasets/Malvinan/CROPE), [Code](https://github.com/MalvinaNikandrou/crope).
* **[CulturalVQA](https://arxiv.org/abs/2407.10920)** (EMNLP 2024 Main): 2,378 questions on 2,328 images from 11 countries across five continents on clothing, food, drinks, rituals and traditions, answered by annotators familiar with each culture. [Dataset](https://huggingface.co/datasets/mair-lab/CulturalVQA), [Project page](https://culturalvqa.org/).
* **[CVQA](https://arxiv.org/abs/2406.05967)** (NeurIPS 2024 Datasets and Benchmarks): Multilingual VQA benchmark of 10,374 four-way questions on culturally driven images from 30 countries in 31 languages, built with native speakers and cultural experts. [Dataset](https://huggingface.co/datasets/afaji/cvqa), [Project page](https://cvqa-benchmark.org/).
* **[WorldCuisines](https://arxiv.org/abs/2410.12705)** (NAACL 2025 Main): Multilingual food VQA benchmark with over 1 million instances in 30 languages, asking dish names and origins for 2,414 dishes from 189 countries. [Dataset](https://huggingface.co/datasets/worldcuisines/vqa), [Code](https://github.com/worldcuisines/worldcuisines), [Project page](https://worldcuisines.github.io/).

## Country and region VQA and cultural knowledge

Benchmarks built for one country or region, usually by people from it. Grouped by region.

### South Asia

* **[BanglaProtha](https://openaccess.thecvf.com/content/WACV2026/html/Fahim_BanglaProtha_Evaluating_Vision_Language_Models_in_Underrepresented_Long-tail_Cultural_Contexts_WACV_2026_paper.html)** (WACV 2026): VQA dataset of Bengali cultural images with native Bengali questions and semantically similar distractors, evaluating VLMs across prompting, fine-tuning and cultural aspects. [Dataset](https://www.kaggle.com/datasets/sourove/bangla-culturally-relevant-vqa), [Code](https://github.com/farhanishmam/BanglaProtha).
* **[BanglaVerse](https://arxiv.org/abs/2603.21165)** (EMNLP 2026 Findings): 1,152 Bengali-culture images for VQA and captioning, expanded into four languages and five Bangla dialects (about 32.2K items) across nine domains. [Dataset](https://huggingface.co/datasets/FaiyazAbdullah114708/BanglaVerse), [Code](https://github.com/faiyazabdullah/BanglaVerse), [Project page](https://labib1610.github.io/BanglaVerse).
* **[TAB-VLM](https://arxiv.org/abs/2605.15071)** (ACL 2026 Findings): 600 questions over 1,600 Indian artifacts from prehistoric to modern periods testing temporal reasoning; best of ten models (GPT-5.2) reaches 58.7%. [Dataset](https://huggingface.co/datasets/mukul54/tab-vlm), [Code](https://github.com/KHUSHBOO0012/tab-vlm/), [Project page](https://khushboo0012.github.io/tab-vlm-webpage/).
* **[DRISHTIKON](https://arxiv.org/abs/2509.19274)** (EMNLP 2025 Main): Indian-culture VQA benchmark of 64,288 instances in 15 languages covering all states and union territories across 16 cultural themes. [Dataset](https://huggingface.co/datasets/13ari/DRISHTIKON), [Code](https://github.com/13ari/DRISHTIKON).
* **[IndicVisionBench](https://arxiv.org/abs/2511.04727)** (ICLR 2026): India-centric benchmark: about 5K images and 37K+ QA pairs for VQA, OCR and multimodal translation in English and 10 Indian languages, 13 cultural topics. [Dataset](https://huggingface.co/datasets/krutrim-ai-labs/IndicVisionBench), [Code](https://github.com/ola-krutrim/IndicVisionBench).

### East Asia

* **[Hanfu-Bench](https://arxiv.org/abs/2506.01565)** (EMNLP 2025 Main): 1,192 images of 496 Hanfu outfits across Chinese dynasties for cultural VQA and image transcreation; closed VLMs trail human experts by 10%. Data gated. [Dataset](https://huggingface.co/datasets/lizhou21/hanfu-bench), [Code](https://github.com/lizhou21/TemporalCulture).
* **[TaiwanVQA](https://openreview.net/forum?id=atofIc3x1q)** (NeurIPS 2025 Datasets and Benchmarks): Taiwan-specific VQA benchmark of 2,736 images and 5,472 questions on food, signs, festivals and landmarks, plus augmentation to improve cultural reasoning. [Dataset](https://huggingface.co/datasets/hhhuang/TaiwanVQA), [Code](https://github.com/hhhuang/TaiwanVQA), [Project page](https://taide-taiwan.github.io/TaiwanVQA/).
* **[CVLUE](https://arxiv.org/abs/2407.01081)** (AAAI 2025): Chinese vision-language benchmark with native-speaker-selected images over 92 categories, covering image-text retrieval, VQA, visual grounding and visual dialogue. Data on request. [Dataset](https://github.com/WangYuxuan93/CVLUE).
* **[FoodieQA](https://arxiv.org/abs/2406.11030)** (EMNLP 2024 Main): Manually curated Chinese regional food benchmark: 389 unseen images, multi-image, single-image and text QA; open VLMs trail humans by 41% and 21%. Data gated. [Dataset](https://huggingface.co/datasets/lyan62/FoodieQA), [Code](https://github.com/lyan62/FoodieQA).
* **[K-Viscuit](https://arxiv.org/abs/2406.16469)** (ACL 2025 Main): Korean culture VQA benchmark of 657 questions on 237 images across ten categories, built with VLM-generated questions validated by native speakers. [Dataset](https://huggingface.co/datasets/ddehun/k-viscuit).

### Middle East and North Africa

* **[M2CQA](https://arxiv.org/abs/2602.05437)** (ACL 2026 Findings): Images from 17 MENA countries with true and counterfactual statements in English, Modern Standard Arabic, Egyptian and Levantine Arabic, for measuring counterfactual hallucination. [Dataset](https://huggingface.co/datasets/QCRI/M2CQA).
* **[PEARL](https://arxiv.org/abs/2505.21979)** (EMNLP 2025 Findings): Over 309K Arabic multimodal instruction examples across ten cultural domains covering all Arab countries, built with human-in-the-loop annotation by 37 annotators. Data gated. [Dataset](https://huggingface.co/datasets/UBC-NLP/PEARL), [Code](https://github.com/UBC-NLP/pearl), [Project page](https://pearl.dlnlp.ai/).

### Africa

* **[Afri-MCQA](https://arxiv.org/abs/2601.05699)** (ACL 2026 Main): Culturally grounded multiple-choice and open-ended VQA in 15 African languages from 12 countries, about 7.5k QA pairs with native-language and accented-English audio. [Dataset](https://huggingface.co/datasets/Atnafu/Afri-MCQA).

## Visual reasoning, grounding and retrieval

Beyond recognition: visually grounded reasoning, grounding and segmentation of cultural objects, and culture-aware retrieval.

* **[M4-RAG](https://arxiv.org/abs/2512.05959)** (CVPR 2026): Retrieval-augmented VQA benchmark of over 80,000 image-question pairs across 42 languages, 56 dialects and registers, and 189 countries, with a controlled multilingual document collection. [Dataset](https://huggingface.co/datasets/davidanugraha/M4-RAG), [Code](https://github.com/davidanugraha/M4-RAG).
* **[RAVENEA](https://arxiv.org/abs/2505.14462)** (ICLR 2026): 1,868 culture-focused instances with 11,396 human-ranked Wikipedia documents for retrieval-augmented cultural VQA and captioning across 8 countries. [Dataset](https://huggingface.co/datasets/jaagli/ravenea), [Code](https://github.com/yfyuan01/RAVENEA), [Project page](https://jiaangli.github.io/ravenea/).
* **[GlobalRG](https://arxiv.org/abs/2407.00263)** (EMNLP 2024 Main): Retrieving culturally diverse images for 20 universal concepts across 50 countries, and grounding culture-specific concepts in images from 15 countries. [Dataset](https://huggingface.co/datasets/UBC-VL/GlobalRG-Retrieval), [Code](https://github.com/meharbhatia/globalrg), [Project page](https://globalrg.github.io/).
* **[GD-VCR](https://arxiv.org/abs/2109.06860)** (EMNLP 2021 Main): 328 movie and TV screenshots with 886 four-way QA pairs over West, East Asia, South Asia and Africa, exposing regional performance gaps. [Dataset](https://github.com/WadeYin9712/GD-VCR).
* **[MaRVL](https://arxiv.org/abs/2109.13238)** (EMNLP 2021 Main): 5,670 native-speaker true/false statements over image pairs in Indonesian, Chinese, Swahili, Tamil and Turkish, built from speaker-selected concepts. [Dataset](https://marvl-challenge.github.io/download), [Code](https://github.com/marvl-challenge/marvl-code), [Project page](https://marvl-challenge.github.io).

## Norms, values and safety

Whether models read social norms, values and offensiveness the way people in a given place do.

* **[NormViz](https://arxiv.org/abs/2609.06831)** (COLM 2026): Contrastive image pairs from 16 countries test whether VLMs judge behaviors against local social norms; includes a 64k image training set with explanations. Data coming soon. [Code](https://github.com/Akhila-Yerukola/NormViz).
* **[CROSS](https://arxiv.org/abs/2505.14972)** (TMLR 2025): 1,284 image-grounded queries from 16 countries in 14 languages testing cultural norm safety; best model scores 61.79% awareness, 37.73% compliance. [Dataset](https://github.com/haoyiq114/CROSS).
* **[MC-SIGNS](https://arxiv.org/abs/2502.17710)** (ACL 2025 Main): 288 gesture-country pairs (25 gestures, 85 countries) annotated for offensiveness, used to test T2I systems, LLMs and VLMs for US-centric bias. [Dataset](https://github.com/Akhila-Yerukola/culturally-offensive-gestures).

## Memes, humor, art and heritage

Memes and humor need shared context; art and heritage need domain knowledge. Both fail in culturally specific ways.

* **[AVMeme Exam](https://arxiv.org/abs/2601.17645)** (arXiv, 2026): Human-curated benchmark of 1,032 iconic Internet audio-visual memes in more than ten languages, with questions from surface content to context, emotion, usage and world knowledge. Data gated. [Dataset](https://huggingface.co/datasets/naplab/AVMeme-Exam), [Project page](https://avmemeexam.github.io/public).
* **[DuwatBench](https://arxiv.org/abs/2601.19898)** (EACL 2026 Main): 1,272 Arabic calligraphy samples with about 1,475 unique words across six styles and sentence-level detection annotations; 13 multimodal models evaluated. [Dataset](https://huggingface.co/datasets/MBZUAI/DuwatBench), [Code](https://github.com/mbzuai-oryx/DuwatBench), [Project page](https://mbzuai-oryx.github.io/DuwatBench/).
* **[MemeCULT-1K](https://arxiv.org/abs/2609.01772)** (EMNLP 2026 Main): 1,000 South Asian memes in Bengali, English and Hindi with context notes and human explanations; evaluates 13 VLMs with and without cultural context. Data coming soon. [Code](https://github.com/TawsifDipto17/MemeCULT-1K).
* **[VULCA-Bench](https://arxiv.org/abs/2601.07986)** (arXiv, 2026): Art-critique benchmark of 7,410 image-critique pairs across 8 cultural traditions with bilingual Chinese-English expert critiques over a five-layer framework from perception to aesthetics. [Dataset](https://github.com/vulca-org/vulca-cultural-visual-benchmark), [Code](https://github.com/yha9806/VULCA-Bench).
* **[TimeTravel](https://arxiv.org/abs/2502.14865)** (ACL 2025 Findings): 10,250 expert-verified samples of historical artifacts from 266 cultures across 10 historical regions, covering manuscripts, artworks, inscriptions and archaeology. [Dataset](https://huggingface.co/datasets/MBZUAI/TimeTravel), [Code](https://github.com/mbzuai-oryx/TimeTravel), [Project page](https://mbzuai-oryx.github.io/TimeTravel/).
* **[Multi3Hate](https://arxiv.org/abs/2411.03888)** (NAACL 2025 Main): 300 parallel memes in five languages annotated for hate speech by 445 annotators across five cultures; VLMs align more with US labels than with other cultures. [Dataset](https://huggingface.co/datasets/MinhDucBui/Multi3Hate), [Code](https://github.com/MinhDucBui/Multi3Hate).

## Captioning, translation and transcreation

Describing, translating and adapting images across languages and cultures.

* **[CaMMT](https://arxiv.org/abs/2505.24456)** (EMNLP 2025 Findings): Over 5,800 image plus parallel English and regional-language caption triples from 23 regions for testing whether images help culturally aware translation. [Dataset](https://huggingface.co/datasets/villacu/cammt).
* **[CIC](https://arxiv.org/abs/2402.05374)** (IJCAI 2024): Pipeline generating culture-category questions, extracting cultural elements via VQA, and prompting an LLM to write culturally descriptive captions, judged by 45 evaluators. [Code](https://github.com/shane3606/CIC), [Project page](https://shane3606.github.io/cic).
* **[MosAIC](https://arxiv.org/abs/2411.11758)** (NAACL 2025 Main): Multi-agent framework with cultural personas that writes culture-enriched captions for 2,832 images from China, India and Romania, with a culture-adaptable metric. [Dataset](https://github.com/MichiganNLP/MosAIC).
* **[Crossmodal-3600](https://arxiv.org/abs/2205.12522)** (EMNLP 2022 Main): Geographically diverse image captioning evaluation set: 3,600 images with 261,375 human captions in 36 languages, 100 images per language region. [Dataset](https://google.github.io/crossmodal-3600/).

## Video understanding

Cultural understanding over time: events, rituals, norms and moments in video.

* **[MINERVA-Cultural](https://arxiv.org/abs/2601.10649)** (CVPR 2026, as CURVE): Human-annotated long-video QA with reasoning traces in 18 native languages over 540 culturally specific videos from 18 locales; Video-LLMs fall well below human accuracy. [Dataset](https://github.com/google-deepmind/neptune).
* **[VideoVista-CulturalLingo](https://arxiv.org/abs/2504.17821)** (ACL 2025 Main): Bilingual (Chinese, English) video QA benchmark with 1,389 videos and 3,134 questions spanning Chinese, North American and European cultural content; 24 models evaluated. [Dataset](https://huggingface.co/datasets/Uni-MoE/VideoVista-CulturalLingo), [Code](https://github.com/HITsz-TMG/VideoVista), [Project page](https://videovista-culturallingo.github.io/).
* **[ViMUL-Bench](https://arxiv.org/abs/2506.07032)** (EMNLP 2025 Main): Video QA in 14 languages: 879 videos and 8,025 questions over 8 cultural and 7 generic categories, plus the ViMUL model. [Dataset](https://huggingface.co/datasets/MBZUAI/ViMUL-Bench), [Code](https://github.com/mbzuai-oryx/ViMUL), [Project page](https://mbzuai-oryx.github.io/ViMUL/).

## Text-to-image and text-to-video generation

How faithfully generative models depict cultures, and how to measure and fix the gaps.

* **[CultureVidBench](https://arxiv.org/abs/2608.01942)** (EMNLP 2026 Main): 1,000 prompts over 12 countries and 14 cultural aspects for judging cultural faithfulness of text-to-video models, with human and MLLM evaluation of seven models. [Dataset](https://huggingface.co/datasets/XianjingHan/CultureVidBench), [Project page](https://hanxjing.github.io/CultureVidBench/).
* **[When Cultures Move](https://arxiv.org/abs/2605.16716)** (EMNLP 2026 Workshop (NLP4PI)): 243 prompts and 972 generated videos across Chinese, American and Romanian cultures, mono and cross-cultural, plus MAVEN multi-agent prompt refinement for cultural fidelity. [Dataset](https://huggingface.co/datasets/AIM-SCU/When_Cultures_Move), [Code](https://github.com/AIM-SCU/MAVEN).
* **[CAIRE](https://arxiv.org/abs/2506.09109)** (EACL 2026 Main): Retrieval-augmented metric grounding image entities to a knowledge base to score cultural relevance per label, validated on rare-item and 10-country universal-concept sets. [Dataset](https://huggingface.co/datasets/cmu-lti/caire-universal), [Code](https://github.com/siddharthyayavaram/CAIRE).
* **[CultDiff](https://arxiv.org/abs/2502.08914)** (ACL 2025 Main): Tests whether text-to-image diffusion models generate the architecture, clothing and food of 10 countries, with a learned similarity metric, CultDiff-S. No public data found.
* **[CULTIVate](https://arxiv.org/abs/2511.05681)** (ICLR 2026): 576 social-activity prompts from 16 countries and over 19,000 generated images, scored for alignment, hallucination, exaggeration and diversity. [Dataset](https://huggingface.co/datasets/sinamalakouti/CultiVATE), [Code](https://github.com/sinamalakouti/AHEaD), [Project page](https://sinamalakouti.github.io/AHEaD/).
* **[CulturalFrames](https://arxiv.org/abs/2506.08835)** (EMNLP 2025 Findings): Text-to-image benchmark of 983 prompts across 10 countries and 5 social domains, with 3,637 images and over 10,000 human annotations of cultural expectations. [Dataset](https://huggingface.co/datasets/mair-lab/CulturalFrames), [Code](https://github.com/mair-lab/CulturalFrames), [Project page](https://culturalframes.github.io).
* **[Culture-TRIP](https://arxiv.org/abs/2502.16902)** (NAACL 2025 Main): Iterative prompt refinement that retrieves cultural context for culture nouns from 8 countries, improving Stable Diffusion alignment in a 66-participant study. [Code](https://github.com/Kakaomacao/Culture-TRIP), [Project page](https://shane3606.github.io/Culture-TRIP/).
* **[CuRe](https://arxiv.org/abs/2506.08071)** (ICCV 2025): 300 cultural artifacts from 64 countries in 32 subcategories across six axes, scoring text-to-image systems on long-tail cultural fidelity. [Dataset](https://huggingface.co/datasets/aniketr/cure), [Code](https://github.com/aniketrege/cure-bench), [Project page](https://aniketrege.github.io/cure/).
* **[Exposing Blindspots](https://arxiv.org/abs/2510.20042)** (IASEAI 2026): Audits text-to-image generation and image-to-image editing across six countries with an 8-category, 36-subcategory, era-aware prompt schema and native expert ratings. [Dataset](https://huggingface.co/datasets/seochan99/ecb-datasets), [Code](https://github.com/cmubig/ECB), [Project page](https://seochan99.github.io/ECB/).
* **[When Cultures Meet](https://arxiv.org/abs/2502.15972)** (ACL 2026 Findings): Multicultural text-to-image benchmark of 9,000 generated images mixing people and landmarks from five countries in five languages, with the MosAIG multi-agent prompting framework. [Dataset](https://huggingface.co/datasets/AIM-SCU/When-Cultures-Meet), [Code](https://github.com/AIM-SCU/MosAIG).
* **[Where Culture Fades](https://arxiv.org/abs/2511.17282)** (CVPR 2026): Shows multilingual T2I models give culturally neutral or English-biased images across 15 languages, localizes culture neurons, and proposes activation and layer-targeted fixes on CultureBench.
* **[CUBE](https://arxiv.org/abs/2407.06863)** (NeurIPS 2024 Datasets and Benchmarks): 1,000 prompts and about 300,000 cultural artifacts across cuisine, landmarks and art in 8 countries, for text-to-image cultural awareness and diversity. [Dataset](https://github.com/google-deepmind/cube).
* **[Image transcreation](https://arxiv.org/abs/2404.01247)** (EMNLP 2024 Main): Three generative pipelines and 700 evaluation images across 7 countries for adapting images to a target culture; the best pipelines translate only 5% of images for some countries. [Dataset](https://huggingface.co/datasets/cmu-lti/machine-translation-for-vision), [Code](https://github.com/simran-khanuja/image-transcreation), [Project page](https://machine-transcreation.github.io/image-transcreation).
* **[SCoFT](https://arxiv.org/abs/2401.08053)** (CVPR 2024): Self-contrastive fine-tuning of Stable Diffusion on the CCUB dataset, judged by 51 participants from 5 countries to reduce stereotypes and raise cultural relevance. [Dataset](https://github.com/cmubig/CCUB), [Code](https://github.com/cmubig/SCoFT), [Project page](https://ariannaliu.github.io/SCoFT/).
* **[ViSAGe](https://arxiv.org/abs/2401.06310)** (ACL 2024 Main): Visual stereotype attributes for 135 nationalities; stereotypical attributes are three times as likely in T2I images of those identities, most for Global South groups. [Dataset](https://github.com/google-research-datasets/visage).
* **[CCUB](https://arxiv.org/abs/2301.12073)** (arXiv, 2023): 1,095 image-text pairs from 8 countries, curated by people with ties to each culture, for fine-tuning Stable Diffusion and prompting GPT-3 toward culturally relevant generation. [Dataset](https://github.com/cmubig/CCUB).
* **[CulText2I](https://arxiv.org/abs/2310.01929)** (TACL 2025): Images from six TTI models prompted in ten languages, evaluated with CLIP, VQA and humans to expose each model's cultural point of view. Data on request. [Dataset](https://github.com/venturamor/CulText-2-I), [Project page](https://venturamor.github.io/CulText2IWeb/).
* **[DIG In](https://arxiv.org/abs/2308.06198)** (TMLR 2023): Three automatic indicators of realism, diversity and prompt-generation consistency for T2I images of objects worldwide; generations for Africa and West Asia score lower than Europe. [Dataset](https://github.com/facebookresearch/DIG-In/), [Project page](https://openreview.net/forum?id=FDt2UGM1Nz).
* **[Geographical representativeness of T2I](https://arxiv.org/abs/2305.11080)** (ICCV 2023): 540 participants from 27 countries rate whether DALL-E 2 and Stable Diffusion images of common nouns reflect their country; defaults skew to the US.

## Geographic robustness of visual recognition

The older and more basic question: does image recognition work everywhere, or only where the training data came from?

* **[Multilingual diversity improves VL representations](https://arxiv.org/abs/2405.16915)** (NeurIPS 2024 Main): Shows that translating non-English web captions to English and re-filtering improves vision-language pretraining, with gains on GeoDE across regions, largest in Africa. [Dataset](https://huggingface.co/datasets/thaottn/datacomp-medium-pool-translated), [Project page](https://proceedings.neurips.cc/paper_files/paper/2024/hash/a6678e2be4ce7aef9d2192e03cd586b7-Abstract-Conference.html).
* **[No Filter](https://arxiv.org/abs/2405.13777)** (NeurIPS 2024 Main): Filtering pre-training data to English image-text pairs hurts cultural understanding and lower-income communities; global pre-training before English fine-tuning improves it without losing benchmark accuracy.
* **[Does progress on object recognition benchmarks improve generalization?](https://arxiv.org/abs/2307.13136)** (ICLR 2024): Evaluates nearly 100 vision models on DollarStreet and GeoDE, finding 7 to 20 percent geographic accuracy gaps that ImageNet progress does not close. [Project page](https://openreview.net/forum?id=rhaQbS3K3R).
* **[GeoDE](https://arxiv.org/abs/2301.02560)** (NeurIPS 2023 Datasets and Benchmarks): 61,940 crowdsourced images of 40 object classes from six world regions, without PII, for geographically diverse evaluation and training. [Dataset](https://geodiverse-data-collection.cs.princeton.edu/), [Code](https://github.com/princetonvisualai/geode_dataset).
* **[GeoNet](https://arxiv.org/abs/2303.15443)** (CVPR 2023): Domain adaptation benchmark with USA and Asia splits for scene recognition (205 classes) and object classification (600 classes), plus a universal adaptation split. [Dataset](https://tarun005.github.io/GeoNet), [Code](https://github.com/ViLab-UCSD/GeoNet).
* **[Dollar Street](https://proceedings.neurips.cc/paper_files/paper/2022/hash/5474d9d43c0519aa176276ff2c1ca528-Abstract-Datasets_and_Benchmarks.html)** (NeurIPS 2022 Datasets and Benchmarks): Supervised dataset of 38,479 household-item images from homes worldwide, labeled with object tags, region, country and monthly income, released under CC-BY. [Dataset](https://www.kaggle.com/datasets/mlcommons/the-dollar-street-dataset), [Project page](https://mlcommons.org/datasets/dollar-street/).
* **[Does Object Recognition Work for Everyone?](https://arxiv.org/abs/1906.02659)** (CVPR 2019 Workshops): Evaluates five commercial object-recognition APIs on Dollar Street household photos from 54 countries, finding lower accuracy for low-income homes. [Dataset](https://www.gapminder.org/dollar-street).

## Models, training data and adaptation methods

Training data, pre-training objectives, adaptation and prompting methods that target cultural or geographic gaps.

* **[CulturalGround](https://arxiv.org/abs/2508.07414)** (EMNLP 2025 Main): 22M synthetic multilingual VQA pairs on images of culturally significant Wikidata entities from 42 countries in 39 languages, used to train CulturalPangea-7B. [Dataset](https://huggingface.co/datasets/neulab/CulturalGround), [Code](https://github.com/neulab/CulturalGround), [Project page](https://neulab.github.io/CulturalGround/).
* **[CultureCLIP](https://arxiv.org/abs/2507.06210)** (COLM 2025): Fine-tunes CLIP on CulTwin, a synthetic set of 73,823 retained concept-caption-image triplets spanning 229 countries, to sharpen fine-grained cultural concept recognition. [Code](https://github.com/lukahhcm/CultureCLIP).
* **[CultureMixup](https://aclanthology.org/2023.emnlp-main.18/)** (EMNLP 2023 Main): Annotation-free cultural concept mapping plus a mixup augmentation that improve four multilingual VLMs on MaRVL across five languages. [Dataset](https://huggingface.co/datasets/zhili312/multimodal-cultural-concepts), [Code](https://github.com/zhilizju/Culture-mixup).
* **[GIVL](https://arxiv.org/abs/2301.01893)** (CVPR 2023): Pre-trained VLM with Image-Knowledge Matching and Image Edit Checking objectives to reduce performance gaps on geo-diverse benchmarks such as GD-VCR and MaRVL. [Code](https://github.com/WadeYin9712/GIVL).

## Analyses, position papers and surveys

Where the failures come from, and how the field should evaluate.

* **[Cultural representation disparities](https://arxiv.org/abs/2505.14729)** (IJCNLP-AACL 2025 Findings): Probes VLMs on country identification over Country211 (211 countries) with open-ended, multiple-choice, multilingual and adversarial settings; prompts released on Hugging Face. [Dataset](https://huggingface.co/datasets/Biases/CulturalBiases-2025).
* **[Cultural theory for VLM evaluation](https://arxiv.org/abs/2505.22793)** (arXiv, 2025): Position paper arguing VLM cultural evaluations should draw on cultural studies, semiotics and visual studies, proposing five frameworks after reviewing 35 recent papers.
* **[Culture-sensitive neurons](https://arxiv.org/abs/2510.24942)** (EACL 2026 Main): Identifies culture-sensitive neurons in three VLMs on CVQA's 25 cultural groups, with a contrastive activation margin method validated by ablation. [Code](https://github.com/xiutian/vlm-culture-neuron).
* **[See It from My Perspective](https://arxiv.org/abs/2406.11665)** (ICLR 2025): Analysis showing VLMs favor Western over East Asian image subsets and that pre-training language mix and inference language shift the bias. [Code](https://github.com/amith-ananthram/see-it-from-my-perspective), [Project page](https://openreview.net/forum?id=Xbl6t6zxZs).

## Foundational reading

Background that motivates the whole area.

* **[The weirdest people in the world?](https://doi.org/10.1017/S0140525X0999152X)** (Behavioral and Brain Sciences, 2010): Psychology review arguing that findings from Western, Educated, Industrialized, Rich and Democratic samples are outliers and do not generalize to humanity.

## Related lists

* **[awesome-cultural-nlp](https://github.com/simran-khanuja/awesome-cultural-nlp)**: cultural NLP resources, mostly text, with a growing multimodal section.
* **[SEACrowd catalogue](https://seacrowd.org/seacrowd-catalogue/)**: datasheets for Southeast Asian language, speech and vision datasets.

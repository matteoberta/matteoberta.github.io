# Website redesign — content inventory and visual brief

Prepared from the current repository on 13 November 2026.

## Purpose

Reshape Matteo Berta's academic website so it feels more personal, expressive, and connected. The current presentation feels too schematic: many similarly bordered sections, numbered headings, repeated panels, and isolated blocks.

This document describes the content and functions to carry into a new design. It is a design brief, not a request to retain the existing layout. Sections can be reordered, combined, renamed, or given new visual treatments. Preserve factual information, publication metadata, research definitions, photographs, and usable access to the content.

The site serves three main purposes:

1. Introduce Matteo and his research interests.
2. Make his publications and academic activity easy to explore.
3. Offer Fieldnotes as a useful, growing research dictionary.

Suggested audiences: researchers, potential collaborators, students, and readers interested in machine unlearning and dynamical systems.

## Visual direction already established

The selected palette is the first palette discussed:

| Color | Hex | Current role |
| --- | --- | --- |
| Dark slate grey | #335c67 | Main text and scientific graphics |
| Vanilla custard | #fff3b0 | Highlights and selected states |
| Honey bronze | #e09f3e | Small accents and borders |
| Brown red | #9e2a2b | Buttons, emphasis, and headings |
| Night bordeaux | #540b0e | Deep accents and hover states |

The page background is a lighter cream, #fffaf0, with warm and cool surface tints. The palette should guide the redesign without requiring five equally prominent colors everywhere.

Current typography combines Georgia headings with Arial/Helvetica body text. Those fonts, the circular portrait, card shapes, section numbering, and current spacing are design choices that may change.

Keep the conceptual connection to learning, forgetting, and chaos. Mathematical imagery and Matteo's own photographs provide a more personal identity than generic technology graphics.

## Current page structure at a glance

| Page | Current sections, in order |
| --- | --- |
| Home — index.html | Navigation; introduction and Lorenz attractor; publication highlight; Fieldnotes introduction; research interests; publications; research log; dissemination; Fieldnotes preview; background bibliography; contact; footer |
| Fieldnotes — taxonomy.html | Navigation; dictionary introduction; field/category filters and search; concept entries; footer |
| Shared background | Logistic-map bifurcation diagram and animation control |

The two homepage Fieldnotes promotions currently repeat the same message. Their purpose can be consolidated into one strong invitation, with smaller navigation links elsewhere.

## 1. Shared identity and navigation

### Content to preserve

- Name: Matteo Berta.
- Identity: PhD student in artificial intelligence.
- Research themes: machine unlearning, chaotic dynamics, and neural networks.
- Access to Research, Work/research log, Dissemination, and Fieldnotes.
- A clear way to return home from Fieldnotes.
- Footer wording: “Matteo · Learning, forgetting, dynamics.” This can be rewritten while retaining the theme.

The affiliation stored in the data file is “Liris, Université Claude Bernard Lyon 1, Politecnico di Torino.” It is not currently displayed. Treat it as available identity information, not as a newly approved biography or a requirement to add another section.

### Freedom in the redesign

The navigation can become quieter and more compact. Preserve the destinations, not the current labels, numbered sections, or exact arrangement.

## 2. Homepage introduction

### Purpose

Immediately explain who Matteo is, what he studies, and where visitors should go next.

### Current content

- Portrait: assets/portrait.jpg.
- Eyebrow: “PhD student / Artificial intelligence”.
- Main headline: “Learning. Forgetting. Finding order.”
- Introduction: “I’m Matteo. I study machine unlearning and the complex dynamics of neural networks.”
- Supporting sentence: “Exploring what models retain, how they forget, and how chaotic behavior emerges.”
- Primary action: “Explore my research”, leading to the publication section.
- Secondary action: “Open the fieldnotes”, leading to the dictionary.

Preserve the portrait, research positioning, and both destinations. The copy can be reflowed or refined; its meaning should remain.

### Scientific illustration

The hero currently contains an animated Lorenz attractor, labeled “01 / Deterministic chaos”, with the caption “Simple rules. Complex trajectories.”

Keep chaos imagery as a meaningful part of the visual identity. Its position, frame, scale, and relationship to the introduction can change. If animation remains, retain a pause/play control and a static state for reduced-motion preferences. The current illustration is decorative, not a numerical analysis tool.

## 3. News / publication highlight

### Purpose

Bring a timely research contribution to the visitor's attention.

### Content to preserve

- Published paper at EMNLP 2026, Industry Track.
- Title: “From Experts to Open-Weight Models: a Validated LLM Pipeline for Institutional Economic News Annotation”.
- Publication link: https://aclanthology.org/2026.emnlp-industry.231/
- Current heading: “New paper at EMNLP 2026”.
- Current status: “Published · EMNLP 2026”.

The conference has finished. Do not restore upcoming-attendance language.

### Freedom in the redesign

This could be integrated into the introduction, become a featured publication, or appear as a small news note. It does not need a large standalone box or a second full copy of the paper record.

## 4. Research interests

Three themes must remain recognizable:

- Machine unlearning.
- Chaotic dynamics.
- Neural networks, including chaotic neural networks.

Currently these appear as a horizontal strip. They could instead become part of the introduction, an editorial paragraph, or a visual connection between the research and Fieldnotes.

## 5. Publications / “My research.”

### Purpose

Present Matteo's research contributions and give direct access to papers and citation metadata.

### Content structure

There are six publications in two current groups:

- General research: five publications spanning 2023–2026.
- Machine unlearning & chaos theory: one publication from 2026.

The first group covers broader AI and related work. The second describes work on machine unlearning, chaotic dynamics, and chaotic neural networks.

All six paper records are reproduced in Appendix A, including author order, links, and full BibTeX.

### Information to preserve for every paper

- Full title.
- Author names in their existing order, with Matteo identifiable.
- Venue and publication year.
- Paper/PDF or repository link, retaining the distinction between a landing page and an accepted manuscript.
- Full BibTeX, including DOI, pages, and other metadata where supplied.
- Access to older publications as the list grows.

### Existing interactions

Publications sort newest first within each group. The interface initially shows up to three papers per group, with a “Show all” / “Show fewer” control where needed. BibTeX expands through a disclosure.

The new design can use a timeline, an editorial list, or featured papers with a compact archive. Retain discoverability and citation access rather than requiring the current two-column arrangement or exact three-paper threshold.

## 6. Research log / work in progress

### Purpose

Provide room for results, open questions, and experiments beyond formal publication records.

### Current state

This section is empty. There are no actual findings or projects in the data yet.

Current headings:

- “Findings & work in progress.”
- “Selected findings”.
- “Currently exploring”.

The placeholders explain that findings will include a short takeaway, supporting evidence, and links; project entries will describe the question, approach, and next step.

### What to maintain

Preserve the ability to add these kinds of entries later. Do not invent research results or project descriptions to fill a mockup.

For a less schematic design, the empty section can be hidden until real content exists. It does not need to occupy a large placeholder area in the visual concept.

## 7. Dissemination / conference participation

### Purpose

Show academic community participation with a personal sense of place.

### Content to preserve

| Conference | Year | Location | Personal photo |
| --- | --- | --- | --- |
| EMNLP | 2026 | Budapest, Hungary | assets/budapest.jpg |
| ECML PKDD | 2026 | Naples, Italy | assets/naples.jpg |
| EDBT/ICDT | 2026 | Tampere, Finland | assets/tampere.jpg |

Descriptions currently identify:

- EMNLP: Conference on Empirical Methods in Natural Language Processing.
- ECML PKDD: European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases.
- EDBT/ICDT: Joint conference on Extending Database Technology and Database Theory.

The records say “Conference participation” and provide the year, not exact attendance dates. Preserve that level of specificity.

### Image content and composition

All three images are Matteo's replacements for the original stock photos:

- Budapest: illuminated Parliament building at night, with the moon above and water below.
- Naples: a daytime city and coastal view, with substantial sky above.
- Tampere: two Moomin figures in a display, rather than a city skyline.

The images are portrait-oriented. The redesign should use crops that preserve their subjects; a wider layout may need different focal positioning. Keep text readable without covering every photo with a heavy overlay.

### Freedom in the redesign

Possible treatments include a travel diary, a chronological sequence, an image strip, or an asymmetric photo layout. Three identical background-photo cards are not a requirement.

The content model should still accommodate future workshops, talks, and research visits when supplied.

## 8. Fieldnotes invitation on the homepage

### Purpose

Introduce Fieldnotes as a substantial part of the site and encourage exploration.

### Content to preserve

- Name: Fieldnotes.
- Concept: a living, searchable research dictionary.
- Scope: machine unlearning, chaos theory, and neural dynamics.
- Each entry connects a concise explanation with sources and related concepts.
- The dictionary grows as Matteo's research develops.
- A clear link to taxonomy.html.

Current prominent headline: “A guide to unlearning and chaos.”

There are currently two large homepage promotions plus links in the navigation, hero, and footer. The redesign can reduce this repetition while keeping Fieldnotes easy to find.

## 9. Background bibliography / “Ideas to build on.”

### Purpose

Provide the foundational sources supporting the dictionary, clearly separate from Matteo's own publications.

### Current references

- **Machine Unlearning** — Bourtoule et al., 2021; 2021 IEEE Symposium on Security and Privacy. [Source](https://doi.org/10.1109/SP40001.2021.00019).
- **Certified Data Removal from Machine Learning Models** — Guo et al., 2020; Proceedings of the 37th International Conference on Machine Learning. [Source](https://proceedings.mlr.press/v119/guo20c.html).
- **Deterministic Nonperiodic Flow** — Lorenz, 1963; Journal of the Atmospheric Sciences. [Source](https://doi.org/10.1175/1520-0469(1963)020%3C0130:DNF%3E2.0.CO;2).
- **Chaos in Dynamical Systems** — Ott, 2002; Cambridge University Press. [Source](https://doi.org/10.1017/CBO9780511803260).
- **Nonlinear Dynamics and Chaos** — Strogatz, 2015; Westview Press. [Source](https://www.routledge.com/Nonlinear-Dynamics-and-Chaos-With-Applications-to-Physics-Biology-Chemistry-and-Engineering/Strogatz/p/book/9780813349107).

Each reference has a complete BibTeX record in assets/data.js. Preserve those records and their associations with the Fieldnotes entries.

Current interactions include source links, “Copy BibTeX” buttons, and a selectable-text fallback if clipboard access is unavailable.

This bibliography could move closer to Fieldnotes or become an expandable reading list, provided existing links still reach the relevant material.

## 10. Contact and academic profiles

### Content to preserve

- Email: matteo.berta@polito.it.
- Email: matteo.berta@liris.cnrs.fr.
- GitHub: https://github.com/matteoberta
- Google Scholar: https://scholar.google.com/citations?user=b2halSQAAAAJ&hl=en

Current copy:

- Eyebrow: “Let’s connect”.
- Heading: “Good questions start conversations.”

Both email addresses currently share one comma-separated data field and one email action. A redesign can present them as two clear, separate contact links.

A CV, ORCID link, or additional social profiles have not been supplied and should not be invented.

## 11. Fieldnotes page — introduction

### Current content

- Eyebrow: “THE RESEARCH FIELDNOTES / VOLUME 01”.
- Heading: “A map of complex ideas.”
- Introduction: “A living dictionary of machine unlearning, chaos, and neural dynamics. Start with a word. Follow the connections.”
- Context: concise working definitions with sources and related concepts; a curated starting point rather than an exhaustive taxonomy.

Preserve the dictionary's identity and exploratory purpose. The volume label and existing typography are optional visual treatments.

## 12. Fieldnotes page — browsing and search

### Content and functions to preserve

- Domain choices: All concepts, Machine unlearning, Chaos & dynamics.
- Category selection, populated from the concepts.
- Search across titles, aliases, definitions, categories, and domains.
- Combined domain, category, and search filters.
- Alphabetically ordered results.
- Visible result count and a useful no-results message.
- Reset filters.
- Shareable query URLs using q, domain, and category.
- Direct concept links using taxonomy.html#term-id.
- Related-concept links that reveal their destination even when filters would otherwise hide it.
- A link to the background bibliography.
- Keyboard access, labeled controls, and accessible updates to the result count.

There are currently 16 concepts: 10 in Chaos and 6 in Unlearning. “Neural dynamics” is part of the editorial scope, but it is not currently a separate populated filter/domain.

A new design could bring stronger visual connections between concepts. A graph or map, if proposed, should supplement a readable and searchable way to reach all entries.

## 13. Fieldnotes page — concept entries

Each concept must retain:

- Stable ID and link.
- Title.
- Domain and category.
- Complete definition.
- Aliases, when present.
- Related-concept relationships.
- Supporting reference links.
- Access to source BibTeX.

Appendix B reproduces the current definitions, aliases, relationships, categories, and reference IDs so the visual concept can use real content.

## 14. Shared scientific background and motion

The site currently has a fixed logistic-map bifurcation diagram behind both pages:

- Model: x[n+1] = r × x[n] × (1 − x[n]).
- Parameter range: r from 2.8 to 4.
- A slow highlight sweeps across the plotted branches.
- A fixed pause/play control is available.
- Reduced-motion preferences start the background in a static state.
- Animation stops while the tab is hidden.
- The diagram is decorative and does not intercept pointer interaction.

The bifurcation motif was explicitly requested and should remain part of the redesign direction. Its placement and scale may change: it could be a hero composition, a section transition, or a quieter page texture rather than a full-screen background.

Account for both this animation and the separate Lorenz illustration. Text legibility, mobile performance, and working motion controls should survive the redesign.

## 15. Practical requirements for the visual concept

- Design the homepage and Fieldnotes as related experiences.
- Show desktop and mobile arrangements.
- Use the actual portrait, conference photos, publication titles, and dictionary definitions.
- Accommodate long titles, multiple authors, citation disclosures, and growing lists.
- Preserve meaningful reading order and navigation with a keyboard.
- Retain visible focus states, sufficient contrast, and reduced-motion behavior.
- Keep direct links to research, work, dissemination, references, contact, and individual dictionary entries working, or provide equivalent destinations.
- Maintain clear separation between Matteo's publications and foundational reading.
- Avoid restoring the outdated upcoming EMNLP announcement.
- Avoid presenting empty research-log placeholders as real projects.

The site currently runs as plain HTML, CSS, and JavaScript on GitHub Pages. No build step, account, or backend is needed. A design concept need not mimic the existing implementation, but should be feasible as a lightweight personal research website.

## 16. Opportunities to explore — proposals, not requirements

1. A more expressive introduction that combines typography, portrait, and scientific imagery into one composition.
2. A continuous narrative connecting research questions, publications, Fieldnotes, and community activity.
3. Fewer boxes and numbered labels, with more varied scale, whitespace, and alignment.
4. A featured-paper treatment followed by a compact publication archive.
5. A personal photographic conference diary.
6. A stronger identity for Fieldnotes, with clear pathways between definitions.
7. A compact contact ending rather than another large panel.
8. One strong Fieldnotes invitation rather than repeated large promotions.

The goal is to preserve the substance while allowing a substantially different visual rhythm.

## Appendix A — Complete publication inventory

The first five entries belong to General research. The final entry belongs to Machine unlearning & chaos theory. Publication metadata below is copied from the repository; this brief does not independently verify or revise it.

### A1. From Experts to Open-Weight Models: a Validated LLM Pipeline for Institutional Economic News Annotation

- Authors: Michele Petrocelli, Andrea Rollin, Matteo Berta, Francesca Zafonte, Simone Monaco, Daniele Apiletti, Tania Cerquitelli.
- Venue: EMNLP Industry Track · 2026.
- Year: 2026.
- Current paper link: https://aclanthology.org/2026.emnlp-industry.231/

<details>
<summary>Full BibTeX to preserve</summary>

```bibtex
@inproceedings{petrocelli-etal-2026-experts,
  title = {From Experts to Open-Weight Models: a Validated {LLM} Pipeline for Institutional Economic News Annotation},
  author = {Petrocelli, Michele and Rollin, Andrea and Berta, Matteo and Zafonte, Francesca and Monaco, Simone and Apiletti, Daniele and Cerquitelli, Tania},
  editor = {Atanasova, Pepa and Haffari, Gholamreza and Wang, Minghan},
  booktitle = {Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing: Industry Track},
  month = oct,
  year = {2026},
  address = {Budapest, Hungary},
  publisher = {Association for Computational Linguistics},
  url = {https://aclanthology.org/2026.emnlp-industry.231/},
  doi = {10.18653/2026.emnlp-industry.231},
  pages = {3854--3869},
  ISBN = {979-8-89176-460-6}
}
```

</details>

### A2. From Human to Scalable Annotation: Teaching LLMs to mimic experts labeling on Economic News Sentiment

- Authors: Michele Petrocelli, Andrea Rollin, Matteo Berta, Francesca Zafonte, Simone Monaco, Salvatore Lo Sardo, Daniele Apiletti, Daria Scacciatelli, Tania Cerquitelli.
- Venue: DARLI-AP · EDBT/ICDT Workshops · 2026.
- Year: 2026.
- Current paper link: https://ceur-ws.org/Vol-4192/DARLIAP-paper17.pdf

<details>
<summary>Full BibTeX to preserve</summary>

```bibtex
@inproceedings{petrocelli2026annotation,
  title = {From Human to Scalable Annotation: Teaching {LLMs} to mimic experts labeling on Economic News Sentiment},
  author = {Petrocelli, Michele and Rollin, Andrea and Berta, Matteo and Zafonte, Francesca and Monaco, Simone and {Lo Sardo}, Salvatore and Apiletti, Daniele and Scacciatelli, Daria and Cerquitelli, Tania},
  booktitle = {Proceedings of the Workshops of the EDBT/ICDT 2026 Joint Conference},
  series = {CEUR Workshop Proceedings},
  volume = {4192},
  year = {2026},
  url = {https://ceur-ws.org/Vol-4192/DARLIAP-paper17.pdf}
}
```

</details>

### A3. Diverse Minds, Collective Mission: Surveying the Development of a Participative EDI Manifesto

- Authors: Matteo Berta, Amin Mantrach, Tania Cerquitelli.
- Venue: DARLI-AP · EDBT/ICDT Workshops · 2025.
- Year: 2025.
- Current paper link: https://ceur-ws.org/Vol-3946/DARLI-AP-13.pdf

<details>
<summary>Full BibTeX to preserve</summary>

```bibtex
@inproceedings{berta2025diverse,
  title = {Diverse Minds, Collective Mission: Surveying the Development of a Participative {EDI} Manifesto},
  author = {Berta, Matteo and Mantrach, Amin and Cerquitelli, Tania},
  booktitle = {Proceedings of the Workshops of the EDBT/ICDT 2025 Joint Conference},
  series = {CEUR Workshop Proceedings},
  volume = {3946},
  year = {2025},
  url = {https://ceur-ws.org/Vol-3946/DARLI-AP-13.pdf}
}
```

</details>

### A4. Decoding Narratives: Towards a Classification Analysis for Stereotypical Patterns in Italian News Headlines

- Authors: Matteo Berta, Salvatore Greco, Giuseppe Tipaldo, Tania Cerquitelli.
- Venue: IEEE International Conference on Big Data · 2024.
- Year: 2024.
- Current paper link: https://iris.polito.it/retrieve/handle/11583/2996189/777977

<details>
<summary>Full BibTeX to preserve</summary>

```bibtex
@inproceedings{berta2024decoding,
  title = {Decoding Narratives: Towards a Classification Analysis for Stereotypical Patterns in Italian News Headlines},
  author = {Berta, Matteo and Greco, Salvatore and Tipaldo, Giuseppe and Cerquitelli, Tania},
  booktitle = {2024 IEEE International Conference on Big Data (BigData)},
  pages = {5253--5262},
  publisher = {IEEE},
  year = {2024},
  doi = {10.1109/BigData62323.2024.10825258},
  url = {https://iris.polito.it/handle/11583/2996189}
}
```

</details>

### A5. GINN: Towards Gender InclusioNeural Network

- Authors: Matteo Berta, Bartolomeo Vacchetti, Tania Cerquitelli.
- Venue: IEEE International Conference on Big Data · 2023.
- Year: 2023.
- Current paper link: https://iris.polito.it/handle/11583/2987325

<details>
<summary>Full BibTeX to preserve</summary>

```bibtex
@inproceedings{berta2023ginn,
  title = {{GINN}: Towards Gender InclusioNeural Network},
  author = {Berta, Matteo and Vacchetti, Bartolomeo and Cerquitelli, Tania},
  booktitle = {2023 IEEE International Conference on Big Data (BigData)},
  pages = {4119--4126},
  publisher = {IEEE},
  year = {2023},
  doi = {10.1109/BigData59044.2023.10386328},
  url = {https://iris.polito.it/handle/11583/2987325}
}
```

</details>

### A6. Eraserhead at SVELA: Detecting LLM Forgetting via Logit-Space Statistics

- Authors: Matteo Berta, Tania Cerquitelli.
- Venue: EVALITA · 2026.
- Year: 2026.
- Current paper link: https://aclanthology.org/2026.evalita-1.43.pdf

<details>
<summary>Full BibTeX to preserve</summary>

```bibtex
@inproceedings{berta-cerquitelli-2026-eraserhead,
  title = {Eraserhead at {SVELA}: Detecting {LLM} Forgetting via Logit-Space Statistics},
  author = {Berta, Matteo and Cerquitelli, Tania},
  booktitle = {Proceedings of the Ninth Evaluation Campaign of Natural Language Processing and Speech Tools for Italian. Final Workshop (EVALITA 2026)},
  pages = {477--483},
  address = {Bari, Italy},
  publisher = {CEUR Workshop Proceedings},
  month = feb,
  year = {2026},
  url = {https://aclanthology.org/2026.evalita-1.43/}
}
```

</details>

## Appendix B — Complete Fieldnotes inventory

Reference IDs below correspond to the background bibliography in assets/data.js. Preserve the actual source metadata and BibTeX there as well.

### Chaos & dynamics — 10 concepts

#### Deterministic chaos

- ID: chaos.
- Category: Foundations.
- Definition: Irregular long-term behavior generated by deterministic dynamics, associated with sensitivity to initial conditions. A noisy or visually complex trace alone does not establish chaos.
- Aliases: chaotic dynamics deterministic nonperiodic behavior
- Related concepts: Sensitivity to initial conditions (sensitivity); Lyapunov exponent (lyapunov-exponent); Strange attractor (strange-attractor).
- Reference IDs: lorenz1963, ott2002.

#### Phase space

- ID: phase-space.
- Category: Foundations.
- Definition: The space whose coordinates specify every variable needed to describe a dynamical system's state. Each initial condition is a point, and its evolution traces a trajectory through this space.
- Aliases: state space trajectory orbit
- Related concepts: Attractor (attractor); Poincaré map (poincare-map); Bifurcation (bifurcation).
- Reference IDs: strogatz2015, ott2002.

#### Attractor

- ID: attractor.
- Category: Geometry.
- Definition: A set in phase space toward which nearby trajectories approach over time. Attractors may be fixed points, periodic orbits, or more complicated sets; an attractor is not necessarily chaotic.
- Aliases: attracting set basin of attraction
- Related concepts: Phase space (phase-space); Strange attractor (strange-attractor); Bifurcation (bifurcation).
- Reference IDs: strogatz2015, ott2002.

#### Strange attractor

- ID: strange-attractor.
- Category: Geometry.
- Definition: A chaotic attractor with intricate geometric structure, typically associated with stretching, folding, and sensitive dependence on initial conditions. The Lorenz attractor is a canonical example.
- Aliases: chaotic attractor Lorenz attractor fractal attractor
- Related concepts: Attractor (attractor); Sensitivity to initial conditions (sensitivity); Lyapunov exponent (lyapunov-exponent).
- Reference IDs: lorenz1963, ott2002.

#### Sensitivity to initial conditions

- ID: sensitivity.
- Category: Dynamics.
- Definition: Nearby initial states can separate rapidly under the same deterministic evolution. In chaotic regimes this limits trajectory-level prediction even when the governing equations are known.
- Aliases: butterfly effect initial-value sensitivity
- Related concepts: Deterministic chaos (chaos); Lyapunov exponent (lyapunov-exponent); Strange attractor (strange-attractor).
- Reference IDs: lorenz1963, ott2002.

#### Lyapunov exponent

- ID: lyapunov-exponent.
- Category: Measures.
- Definition: A rate measuring the average exponential growth or decay of an infinitesimal perturbation along a trajectory. A positive maximal Lyapunov exponent is a standard indicator of sensitive dependence and chaos.
- Aliases: Lyapunov characteristic exponent LCE maximal Lyapunov exponent
- Related concepts: Deterministic chaos (chaos); Sensitivity to initial conditions (sensitivity); Strange attractor (strange-attractor).
- Reference IDs: ott2002.

#### Bifurcation

- ID: bifurcation.
- Category: Transitions.
- Definition: A qualitative change in a system's long-term behavior caused by varying a parameter. A bifurcation can create or destroy equilibria, periodic orbits, or other invariant structures.
- Aliases: qualitative transition critical parameter
- Related concepts: Period-doubling route to chaos (period-doubling); Logistic map (logistic-map); Attractor (attractor).
- Reference IDs: strogatz2015.

#### Period-doubling route to chaos

- ID: period-doubling.
- Category: Transitions.
- Definition: A route to chaos in which a stable periodic orbit repeatedly loses stability and is replaced by an orbit with twice its period. The bifurcations accumulate at a finite parameter value.
- Aliases: period doubling cascade Feigenbaum cascade route to chaos
- Related concepts: Bifurcation (bifurcation); Logistic map (logistic-map); Deterministic chaos (chaos).
- Reference IDs: strogatz2015, ott2002.

#### Poincaré map

- ID: poincare-map.
- Category: Analysis.
- Definition: A discrete map obtained by recording where a continuous trajectory repeatedly intersects a chosen surface. It reduces a flow by one dimension while preserving key stability and recurrence information.
- Aliases: Poincare section first-return map return map
- Related concepts: Phase space (phase-space); Attractor (attractor); Bifurcation (bifurcation).
- Reference IDs: strogatz2015, ott2002.

#### Logistic map

- ID: logistic-map.
- Category: Models.
- Definition: The one-dimensional recurrence xₙ₊₁ = r xₙ(1 − xₙ). As the parameter r changes, it displays fixed points, periodic cycles, period-doubling cascades, chaotic intervals, and periodic windows.
- Aliases: quadratic map discrete dynamical system population map
- Related concepts: Period-doubling route to chaos (period-doubling); Bifurcation (bifurcation); Deterministic chaos (chaos).
- Reference IDs: strogatz2015, ott2002.
### Machine unlearning — 6 concepts

#### Machine unlearning

- ID: machine-unlearning.
- Category: Foundations.
- Definition: Methods for removing the influence of specified training data from a learned model. The target is usually defined relative to training on the retained data.
- Aliases: forgetting data removal
- Related concepts: Exact unlearning (exact-unlearning); Approximate unlearning (approximate-unlearning); Retraining baseline (retraining).
- Reference IDs: bourtoule2021.

#### Exact unlearning

- ID: exact-unlearning.
- Category: Guarantees.
- Definition: An unlearning procedure whose output has the same distribution as the reference training algorithm run on the retained dataset. Equality of one model’s weights is not generally required.
- Aliases: None currently supplied.
- Related concepts: Approximate unlearning (approximate-unlearning); Retraining baseline (retraining).
- Reference IDs: bourtoule2021.

#### Approximate unlearning

- ID: approximate-unlearning.
- Category: Guarantees.
- Definition: An unlearning procedure that aims to approximate the retained-data training distribution or behavior. The chosen distance, tolerance, and assumptions determine what the claim means.
- Aliases: None currently supplied.
- Related concepts: Exact unlearning (exact-unlearning); Certified removal (certified-removal).
- Reference IDs: guo2020.

#### Certified removal

- ID: certified-removal.
- Category: Guarantees.
- Definition: Data removal with a formal bound relating the output distribution to a model trained without the removed data, under stated assumptions. The guarantee is stronger than a drop in accuracy on forgotten samples.
- Aliases: None currently supplied.
- Related concepts: Approximate unlearning (approximate-unlearning); Retraining baseline (retraining).
- Reference IDs: guo2020.

#### SISA training

- ID: sisa.
- Category: Methods.
- Definition: Sharded, Isolated, Sliced, and Aggregated training limits each example’s influence to part of an ensemble, allowing affected components to be retrained after deletion.
- Aliases: sharding slicing ensemble
- Related concepts: Machine unlearning (machine-unlearning); Retraining baseline (retraining).
- Reference IDs: bourtoule2021.

#### Retraining baseline

- ID: retraining.
- Category: Evaluation.
- Definition: Run the specified training algorithm again using only retained data. This is a reference for unlearning quality; randomness and computational cost must be accounted for.
- Aliases: None currently supplied.
- Related concepts: Exact unlearning (exact-unlearning); Certified removal (certified-removal).
- Reference IDs: bourtoule2021, guo2020.

## Appendix C — Source and asset map

| File | Content or responsibility |
| --- | --- |
| index.html | Homepage copy, section structure, all six publication records and BibTeX |
| taxonomy.html | Fieldnotes page introduction, browsing controls, and page structure |
| assets/data.js | Identity and contact data, conferences, five background references and BibTeX, sixteen concepts, and currently empty findings/projects |
| assets/app.js | Dynamic content rendering, search, filtering, related links, citation copying, publication expansion, and both canvas animations |
| assets/style.css | Palette, typography, layout, responsive behavior, and component styles |
| assets/portrait.jpg | Matteo's portrait |
| assets/budapest.jpg | Matteo's Budapest photo |
| assets/naples.jpg | Matteo's Naples photo |
| assets/tampere.jpg | Matteo's Tampere photo |
| assets/favicon.svg | Site icon |

This document records the existing content and suggested design freedoms. It does not change the live site.


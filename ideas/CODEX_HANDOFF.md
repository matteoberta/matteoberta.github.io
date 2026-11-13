# Matteo Berta — Codex implementation handoff

## What this package is

An **initial visual and interaction prototype**, not a replacement for the live repository. `index.html` is the proposed homepage. `taxonomy.html` is the related Fieldnotes page. `assets/style.css` controls visual styling; `assets/app.js` implements the prototype interactions; `assets/data.js` contains publication and concept records transcribed from the user's 13 November 2026 Markdown brief. `assets/portrait.jpg` is Matteo's supplied black-and-white portrait.

**Critical:** The user's *existing website repository*, particularly `assets/data.js` and any BibTeX records, is the canonical source of truth. In this prototype the five **foundational reference BibTeX strings are NOT available** (the brief supplied titles and URLs but not their full records), so import them from the actual repository. Three conference photographs have not been uploaded to this conversation and are represented by intentionally plain placeholders. Replace these only with Matteo's own `assets/budapest.jpg`, `assets/naples.jpg`, and `assets/tampere.jpg` from the repository. Do not synthesize these photos or invent conference details.

## The visual direction — approved decisions

**Concept A / Manuscript visual language, combined with the earlier clean editorial homepage layout.** The initial visual palette:

- background `#fffaf0`, warm paper `#f6ecd2`, ink `#241b1c`;
- bordeaux `#540b0e`, brown red `#9e2a2b`, slate `#335c67`;
- vanilla `#fff3b0`, honey accent `#e09f3e`;
- Fraunces for expressive headings, Inter for body, IBM Plex Mono for scientific labels and metadata (graceful fallback fonts); typography, hierarchy, and whitespace are the main identity.

Avoid AI-generated imagery, faux brushstrokes, fake paper textures, decorative icons, repeated cards, and number labels on every element. Preserve Schiele's influence through typography, asymmetry, restrained strong colors, and negative space — not by placing paintings on the site. Only Matteo's genuine photographs may be used for photos.

## Visual hierarchy and content

1. **Hero:** Matteo's original photo, large “Learning. Forgetting. Finding order.” headline, copy describing machine unlearning first, coded Lorenz attractor; simple research/Fieldnotes links. This visualization must remain an actual mathematical computation, not a raster image.
2. **Research interests:** machine unlearning leads both editorially and visually, chaotic dynamics second, neural networks cross-cutting. Scholarly tone without invented claims.
3. **Featured publication:** retain Concept A's bordeaux full-width treatment for the real published EMNLP 2026 Industry Track paper *From Experts to Open-Weight Models: a Validated LLM Pipeline for Institutional Economic News Annotation*. Use real title, ordered authors, status, and paper link. Do not draw a logistic bifurcation diagram here or suggest an unrelated chart depicts paper results.
4. **Publications:** clean editorial list with all six verified provided paper records, direct paper links, BibTeX disclosures and copy controls, accurate year/venue/authors. The latest EMNLP paper is featured above; avoid wasteful duplicate full records while retaining citation access and discoverability.
5. **Fieldnotes:** substantial homepage invitation with a **coded concept graph** from the source's 16 concepts and related-concept edges, machine unlearning visually prioritized. The graph is interactive and is NOT an AI-generated picture. Feature one strong homepage invitation, not two duplicates.
6. **Dissemination:** personally photographed Budapest/EMNLP 2026, Naples/ECML PKDD 2026, Tampere/EDBT-ICDT 2026. Preserve subjects (Budapest Parliament and moon; Naples coast and sky; Tampere Moomin figures). No generated or stock substitutes. Prefer editorial photo layout with captions and generous breathing room.
7. **Contact:** matteo.berta@polito.it and matteo.berta@liris.cnrs.fr separately, plus GitHub and Google Scholar.

No invented projects, empty findings, upcoming EMNLP announcement, ORCID/CV, or additional paper titles. Research log may remain hidden while empty, but retain the ability to add content in the site's data model.

## Fieldnotes page

Create a coherent companion to the homepage: same typography/color system, more information-dense and exploratory.

- Machine unlearning should be the opening editorial focus; chaotic dynamics comes second, although all concepts must be available.
- Coded knowledge graph should supplement—not replace—a readable, searchable concept dictionary.
- 16 real concepts from the repository (6 unlearning, 10 chaos). Preserve stable IDs, full definitions, domain/category, aliases, related IDs, and source IDs.
- Combined domain, category, and free-text filters; search across titles, aliases, definitions, categories, domains; alphabetical results; visible result count; reset; empty-result state; q/domain/category shareable query parameters.
- Direct `taxonomy.html#term-id` anchors and related-concept navigation must work even when prior filters would hide the target.
- Preserve foundational bibliography separately from Matteo's publications, including **complete original BibTeX** and copy access from the real repository.
- The **logistic-map bifurcation diagram** belongs with mathematical concepts/Fieldnotes, never beside unrelated paper records. Compute it using JavaScript.

## Accessibility and animation

- Lorenz trajectory computed from the Lorenz ODE (e.g. RK4) with true parameters σ=10, ρ=28, β=8/3, pause/play, page-visibility handling, mobile performance, and reduced-motion static state.
- Bifurcation plot from x[n+1] = r x[n](1-x[n]), r in [2.8, 4.0], with pause/play if animated.
- Meaningful heading structure, focus states, labeled controls, keyboard graph interactions or equivalent textual access, legible contrast, and mobile-first testing at narrow screen sizes.
- No external backend, authentication, or mandatory build step; retain compatibility with GitHub Pages and plain HTML/CSS/JS.

## What still needs to be done by Codex

1. Open and inspect the **existing repository**. Compare this prototype with real `index.html`, `taxonomy.html`, `assets/data.js`, `assets/app.js`, `assets/style.css`, and all images. Preserve content and functionality rather than replacing data by hand from the prototype.
2. Integrate the approved style and sections incrementally, ideally retaining the original application's data shape and linking structure, and keeping a rollback path.
3. Swap conference placeholders with real photos and tune portrait and photo crops responsively.
4. Restore foundational BibTeX and proper clipboard fallback.
5. Review responsive layouts visually, refine graph node positions for mobile/desktop, and verify that motion stops when hidden and respects reduced-motion.
6. Validate citation links, author order, every graph edge, URL parameters, deep links, and keyboard behavior.
7. Run a local server and generate screenshots at approximately 1440px, 768px, and 390px widths for review.
8. Deliver diff/commit with a brief summary; do not rewrite the website from scratch unless necessary.

## A suggested prompt to paste into Codex

> Study the repository before editing. Use `CODEX_HANDOFF.md` and the accompanying prototype (`index.html`, `taxonomy.html`, `assets/style.css`, `assets/app.js`) as the **visual and interaction reference**, but treat the existing repository as authoritative for all content, bibliography, photos, IDs, and URLs. Implement the approved "Concept A / Manuscript" editorial visual language on the previous clean homepage layout. Preserve the real monochrome portrait, make machine unlearning the primary research focus, keep the featured EMNLP 2026 paper as a bordeaux editorial banner, use a coded Lorenz attractor in the hero, keep a real concept graph for Fieldnotes and the logistic-map bifurcation plot on the Fieldnotes side, and show only real Budapest/Naples/Tampere photos. No AI-generated images or invented papers. Maintain the working search, filters, BibTeX, deep links, responsive design, and accessibility. First give a concise implementation plan; then implement in incremental changes and show desktop/mobile screenshots and test results.

## Implementation notes

The provided HTML/CSS/JS files are a starting point, not fully visually QA'd in this session: the preview browser refused local and localhost navigation. JavaScript syntax and source-data relational integrity have been checked. The concept graph uses fixed initial coordinates for the nodes but draws edges programmatically from provided related IDs. There is no build step. To run locally:

```bash
cd matteo-prototype
python3 -m http.server 8000
# open http://localhost:8000/index.html
# and http://localhost:8000/taxonomy.html
```

Then move to the real repository before production deployment.

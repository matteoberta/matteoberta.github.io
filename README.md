# Matteo — research website

A two-page academic website for GitHub Pages. Plain HTML, CSS, and JavaScript; no installation, build service, analytics, or API keys required. All assets are local. Works at both a user-site URL and a repository subpath.

## Publish on GitHub Pages

1. Create a public repository named **YOUR_USERNAME.github.io** on GitHub. For example, `matteo.github.io` only if your GitHub username is `matteo`.
2. Upload the **contents** of this folder to the repository root: `index.html`, `taxonomy.html`, `assets/`, and `.nojekyll`. Do not nest them inside another `research-site` folder. README and examples can be included too.
3. In the repository, choose **Settings → Pages → Build and deployment → Source → Deploy from a branch**. Select `main` and `/(root)`, then Save.
4. Once deployment completes, open `https://YOUR_USERNAME.github.io/`.

For a project repository with a different name, the URL is `https://YOUR_USERNAME.github.io/REPOSITORY/`; the relative links already support this.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Personalize before sharing

Edit `assets/data.js`, a JavaScript object containing the site's content:

- `name`, `email`, `github`, `scholar`: your name and full profile URLs. Leave unused links empty.
- `findings`: your results and publications. Describe the result, evidence, limitations, and a link to the paper/code.
- `projects`: current questions and progress, with a status label.
- `venues`: conference/workshop/talk participation; use explicit dates, contribution type, location, and event URLs.
- `references`: background reading and your own references. Every ID must be unique.
- `terms`: searchable definitions, aliases, domain, category, references, and related-term IDs.

See `content-examples.js` for copy-and-edit object shapes. There is no public editor: change the source file and commit it to update the site.

The personal biography and hero copy are in `index.html`. The page titles, descriptions, footer name, and brand fallback are in both HTML files. Replace these when using your full name. The data-file `subtitle` and `affiliation` fields are reserved for future use; add your affiliation to the hero HTML when ready. Add CV/ORCID links there if desired.

**No publications, research results, affiliations, or venue attendance have been invented.** The empty research sections are intentional. The cited foundational papers are background reading, not your publications. Starter dictionary definitions are concise editorial summaries: review them and extend their sources before treating the dictionary as a comprehensive scholarly reference.

## Citations and taxonomy

Add a reference with `id`, `title`, `authors`, `venue`, `year`, `url`, and `bib`. Add its ID to a finding's or term's `refs`. Copy BibTeX buttons use the browser clipboard on HTTPS; a selectable text field appears if access is denied. A full bibliography is also provided as `references.bib`.

Related links use term IDs. Domain filters, category filters, and search can be combined. Search covers titles, aliases, definitions, categories, and domains. Queries are reflected in the URL; each term also has a permanent `taxonomy.html#term-id` link. Related links clear filters so their destination remains visible.

To add a third field, extend the domain buttons and the allowed domains in `assets/app.js`. Categories populate automatically. Editing `data.js` is sufficient for new terms in the existing two fields.

## Local preview and checks

From this folder, run:

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Search and copy buttons require JavaScript; research area descriptions and the homepage structure are HTML. The animated Lorenz illustration respects reduced-motion preferences and can be paused. Its explicit-Euler integration is decorative, not a numerical research tool.

Run `python3 validate.py` to check internal paths, term relationships, reference IDs, and required fields. Run `node --check assets/app.js` for syntax. `build.py` generated the initial HTML and data; it is not required for deployment. **Do not rerun it after editing the generated files**, because it resets them to starter content.

## Design

Warm paper, forest green, muted lime, serif headlines, and a local canvas attractor. Responsive layouts, semantic page sections, skip navigation, labeled form controls, visible keyboard focus, and a reduced-motion mode. No external fonts or tracking scripts.

# Matteo Berta — Portfolio (GitHub Pages)

This repository contains the code for **matteoberta.github.io**, a bilingual (English/Italian) personal portfolio website inspired by chaos theory and the logistic map.

---

## 📂 Project Overview

* **Tech stack:** Plain HTML, CSS, JavaScript (no framework required)
* **Hosting:** GitHub Pages (auto-deployed from main branch)
* **Main file:** `index.html` (single-page layout with internal navigation)
* **Languages:** English (default) and Italian (toggleable)
* **Dynamic sections:**

  * Landing section (hero + name + tagline + photo)
  * Projects (cards with tags, links, and citations)
  * Passions (books, music, films, and other categories)
  * About and Contact
  * Animated bifurcation diagram background

---

## 🚀 Getting Started

1. **Clone or download** this repository:

   ```bash
   git clone https://github.com/matteoberta/matteoberta.github.io.git
   cd matteoberta.github.io
   ```

2. **Open `index.html`** in your browser or in a code editor like VS Code.

3. **Push changes** to the `main` branch — GitHub Pages will auto-deploy.

   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```

Your website will be live at **[https://matteoberta.github.io](https://matteoberta.github.io)**.

---

## 🧩 Editing the Landing Page

The landing (hero) section is defined near the top of `index.html`:

```html
<section class="hero">
  <div>
    <div class="pill">Between order and chaos</div>
    <h1 class="tagline">
      <span id="your-name">Your Name</span>
      <span class="accent">— patterns emerge where noise meets meaning.</span>
    </h1>
    <p class="subtitle">Exploring logistic maps, neural dynamics, and human-centered systems through code.</p>
    <div class="id-card">
      <div class="avatar" id="avatar"></div>
      <div>
        <div class="name" id="name-slot">Your Name</div>
        <div style="color:var(--muted)">Creative Engineer · ML / Systems · Research-minded</div>
      </div>
    </div>
  </div>
</section>
```

### To customize:

* Replace **`Your Name`** with your real name.
* Update the **tagline** and **subtitle**.
* To use your photo:

  1. Add it to `/assets/avatar.jpg`.
  2. Edit the following JavaScript section near the bottom:

     ```js
     const YOUR_NAME = 'Matteo Berta';
     const AVATAR_URL = 'assets/avatar.jpg';
     ```
* The colors `#5682B1` and `#8C00FF` can be changed inside the CSS `:root` block.

---

## 🌐 Language Support

The text is translated dynamically via a simple dictionary (`DICT` in the script section). To add or change translations:

* Locate `const DICT = { en: {...}, it: {...} }`.
* Edit any string inside both `en` and `it` objects.
* Click the EN/IT toggle in the header to test translations.

If you add new text to the page, give it a `data-i18n` attribute so it updates when switching language, e.g.:

```html
<p data-i18n="hero.sub">Your translated text here</p>
```

---

## 🧠 Adding Projects

Projects are defined in the JavaScript array `PROJECTS`:

```js
const PROJECTS = [
  {
    title: 'Chaotic Sketches',
    desc: 'Interactive explorations of logistic maps and bifurcations in the browser.',
    tags: ['JavaScript', 'Canvas', 'Math'],
    url: 'https://github.com/matteoberta/chaotic-sketches',
    citations: [
      { label: 'May, R. M. (1976). Simple mathematical models...', url: 'https://example.com' }
    ]
  }
];
```

### Each project supports:

| Field       | Description                      |
| ----------- | -------------------------------- |
| `title`     | Project name                     |
| `desc`      | Short summary                    |
| `tags`      | Array of skills/tech used        |
| `url`       | Link to live demo or GitHub repo |
| `citations` | Optional list of references      |

### Add a project page

To create a dedicated page for a project:

1. Duplicate the main file and rename it (e.g., `project-chaotic-sketches.html`).
2. Keep the same header/footer and edit the `<main>` content.
3. Link to it from the `url` field in the `PROJECTS` array.

Alternatively, use hash routes like `#projects/chaotic-sketches` for single-page style navigation.

---

## 🎵 Adding Passions (Books, Music, Films...)

Your interests are handled by the `PASSIONS` object in the script:

```js
const PASSIONS = {
  books: [
    { title: 'Nonlinear Dynamics and Chaos', desc: 'Foundational concepts with applications.', citations: [ { label: 'Strogatz, S. H. (2015)', url: '#' } ] },
    { title: 'Chaos: Making a New Science', desc: 'Popular history of chaos theory.', citations: [ { label: 'Gleick, J. (1987)', url: '#' } ] }
  ],
  music: [
    { title: 'Steve Reich — Music for 18 Musicians', desc: 'Pattern, phase, emergence.', citations: [] }
  ],
  film: [
    { title: 'Pi (1998)', desc: 'Obsession with patterns.', citations: [] }
  ],
  other: []
};
```

### To add items:

* Append to the relevant category (books, music, etc.).
* Each entry can include optional citations.
* Navigate between categories using the tabs at the top of the section.

### To add a new category:

1. Add a new key under `PASSIONS`.
2. Add a new button in the HTML tab list:

   ```html
   <button class="tab" data-cat="newcat" data-i18n="passions.tabs.newcat">New Category</button>
   ```
3. Add its translation in the `DICT` object.

---

## ✍️ Adding Citations

Citations can be attached to projects and passion items as arrays of objects:

```js
citations: [
  { label: 'Author, Year. Title...', url: 'https://example.com' }
]
```

They appear as small lists below each card.

---

## 🎨 Styling & Customization

* **Colors:** Edit `--accent-1` and `--accent-2` in the CSS `:root` section.
* **Fonts:** Controlled via Google Fonts in `<head>` (Inter + JetBrains Mono).
* **Animation:** The bifurcation diagram is rendered in `drawBifurcation()`; you can tweak density, colors, or motion speed.
* **Dark theme:** Default; can be expanded with a toggle later.

---

## 🧪 Testing

A lightweight test suite runs automatically in the browser console to verify rendering:

* Confirms number of project cards matches `PROJECTS` length.
* Confirms active passions tab renders correct item count.

Open DevTools → Console to see: `✔ Basic render tests passed`.

---

## 🧰 Tips

* Always keep one `index.html` at the repo root — GitHub Pages serves this automatically.
* Use relative paths for images (`assets/...`).
* Commit small changes and check your site after each push.
* Backup your current version before major edits.

---

## 💡 Future Enhancements

* Add per-project detail templates.
* Include a global References page combining all citations.
* Add RSS or blog feed (optional).
* Dark/light toggle sync with system theme.

---

**Author:** Matteo Berta
**Website:** [https://matteoberta.github.io](https://matteoberta.github.io)

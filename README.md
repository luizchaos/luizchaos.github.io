# luizchaos.github.io

Personal portfolio of **Luiz Henrique Carvalho**, Senior Software Engineer. Bilingual (English / Português).

Live: https://luizchaos.github.io

## Stack

Plain HTML, CSS and JavaScript. No build step, no dependencies.

```
index.html            page structure (static strings use data-i18n keys)
assets/css/styles.css styles, dark/light themes via CSS variables
assets/js/content.js  all copy (EN + PT) and shared data (projects, skills)
assets/js/main.js     i18n, rendering, theme, menu, scroll effects
```

## Editing content

Everything you'd want to change is in `assets/js/content.js`:

- Text in both languages: `CONTENT.en` and `CONTENT.pt` (keep the same keys in both).
- Projects shown: `SHARED.projects` (repo name, language, tags). Add the matching description under `projects.items` in each language.
- Skills: `SHARED.skills`.

Language is picked from `?lang=en|pt`, then the saved choice, then the browser language.

## Run locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Push to the `main` branch of the `luizchaos/luizchaos.github.io` repository. GitHub Pages serves it at https://luizchaos.github.io.

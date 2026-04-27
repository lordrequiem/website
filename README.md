# romuald-portfolio

Personal portfolio site for Romuald Lenormand — Lead Quality Engineer.

Built with [Astro](https://astro.build), deployed on [GitHub Pages](https://lordrequiem.github.io/website/).

## Stack

- **Astro 6** — static site generator
- **MDX** — blog posts
- **TypeScript**
- **GitHub Actions** — CI/CD

## Structure

```
src/
├── components/    # Hero, About, Services, Podcast, Blog, Contact...
├── data/          # podcast.ts, case studies, services
├── i18n/          # strings.ts — EN/FR translations
├── layouts/       # Layout.astro
├── pages/         # index.astro, blog posts
└── styles/        # tokens.css, global styles
public/
├── avatar.jpg
└── podcast-cover.jpg
```

## i18n

Language switching is CSS-based. Elements with `data-lang-en` / `data-lang-fr` are shown or hidden via `tokens.css` depending on the `data-lang` attribute on `<html>`. No JS framework required.

## Dev

```bash
npm install
npm run dev       # localhost:4321
npm run build     # production build
npm run preview   # preview build locally
```

Requires Node >= 22.12.0.

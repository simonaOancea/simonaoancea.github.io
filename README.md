# simonaoancea.github.io

Personal site. [Astro](https://astro.build) static build, deployed to GitHub Pages
by `.github/workflows/deploy.yml` on every push to `main`.

Design: same bones as [colelee.art](https://colelee.art/) with its own identity —
six themes named after conference cities, self-hosted fonts, zero runtime JS
dependencies.

## Commands

```sh
npm install       # once
npm run dev       # http://localhost:4321 — drafts ARE visible here
npm run build     # production build into dist/ — drafts excluded
npm run preview   # serve dist/ locally
npm run check     # typecheck (also validates the data files)
```

## Placeholder checklist (fill these in before sharing the URL)

Everything marked `TODO` is placeholder. The site is live but anonymous-safe
until you do this pass — nothing real renders that you didn't write.

- [ ] `src/data/site.ts` — site `description` (search results + link previews)
- [ ] `src/pages/index.astro` — the hero `intro` line
- [ ] `src/data/socials.ts` — LinkedIn URL, public email (GitHub is already real)
- [ ] `src/data/talks.ts` — uncomment your four 2026 talks and **verify every
      date, URL and city** against the conference sites
- [ ] `src/data/work.ts` — `currently` and `previously` items
- [ ] `src/pages/404.astro` — the not-found line
- [ ] `public/favicon.svg` — replace the placeholder "S." monogram
- [ ] `public/og-default.png` — replace with a real 1200×630 link-preview card
- [ ] Delete the two `example-*.md` files in `src/content/writing/` when you
      publish your first real article

## How to add a talk

Open `src/data/talks.ts`, copy the template comment at the top into the array,
fill it in, commit, push. The site sorts by date and groups Upcoming vs Past
automatically — a talk moves to Past after its final day (`endDate` for
multi-day conferences). Once past, `slidesUrl`/`videoUrl` render as links.

The Upcoming→Past split is computed at build time. A weekly scheduled deploy
(Mondays 04:20 UTC) keeps it fresh without commits. GitHub pauses cron
workflows after ~60 days of repo inactivity — if a past talk still shows as
upcoming, go to Actions → Deploy to GitHub Pages → Run workflow.

## How to add an article

Create `src/content/writing/my-post.md`:

```md
---
title: 'My post'
date: 2026-08-01
description: 'One sentence shown in lists, meta tags and RSS.'
draft: true        # remove (or set false) to publish
---

Body in markdown. Java code fences get syntax highlighting.
```

The filename becomes the URL (`/writing/my-post/`). Drafts show in `npm run
dev` only. To list an article you published elsewhere, add `externalUrl:
'https://…'` to the frontmatter — it links out directly and no page is
generated here.

## How to add a theme

One block in `src/styles/tokens.css` (copy an existing `[data-theme='…']`
block) + one row in `src/data/themes.ts`. Nothing else changes.

## Deploy notes

- Repo must stay **public** and named exactly `simonaoancea.github.io`
  (GitHub Pages user site → served at the domain root; never add `base` to
  `astro.config.mjs`).
- Pages source is **GitHub Actions** (repo Settings → Pages). The workflow
  builds and deploys on push, manual dispatch, and the weekly cron.
- **Custom domain later:** add the domain to `public/CNAME` (it must live in
  the repo — Actions deploys overwrite dashboard-set CNAMEs), set it in
  Settings → Pages, update `site` in `astro.config.mjs`, point DNS
  (`CNAME www → simonaoancea.github.io`, apex `A` records
  185.199.108.153/109/110/111), then tick Enforce HTTPS.

## Versions

Pinned to `astro@^5.18.2` deliberately (v7 is latest; every API used here is
verified against v5, which still receives patches). Upgrade later with
`npx @astrojs/upgrade` after reading the v6/v7 migration guides.

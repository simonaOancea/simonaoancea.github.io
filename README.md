# simonaoancea.com

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

- [ ] `src/content/talks/modulith.md` — **review the pre-filled abstract**
      (your words, from talk-abstract-final.md), fill the takeaways, verify
      audience/duration, then flip `draft: false` to publish
- [ ] `src/content/talks/agentic.md` — fill in once the Devoxx CFP resolves
- [ ] `src/pages/index.astro` — the hero `intro` line + the CTA topics line
- [ ] `src/data/site.ts` — site `description` (search results + link previews)
- [ ] `src/data/engagements.ts` — narrow JavaCro and W-JAX to your talk day
      once their schedules publish (the other three dates are confirmed)
- [ ] `src/pages/speaker-kit.astro` — short bio, long bio, facts (your existing
      bios are referenced in a comment at the top of the file); add
      `public/headshot.jpg`
- [ ] `src/data/work.ts` — `currently` and `previously` items
- [ ] `src/pages/404.astro` — the not-found line
- [ ] `public/favicon.svg` — replace the placeholder "S." monogram
- [ ] `public/og-default.png` — replace with a real 1200×630 link-preview card
- [ ] Delete the two `example-*.md` files in `src/content/writing/` when you
      publish your first real article

## Talks: two concepts

**Talk pages** (`src/content/talks/*.md`) are the products — one page per
bookable talk with abstract, takeaways, audience/duration meta and an optional
`deckUrl`. The filename is the URL (`modulith.md` → `/talks/modulith/` — the
short link for your last slide). `draft: true` = visible in dev only.

**Engagements** (`src/data/engagements.ts`) are deliveries of a talk at an
event. Copy the template comment, fill it in, commit. The site sorts and
groups Upcoming vs Past by date automatically — an engagement moves to Past
after its final day (`endDate` for multi-day events), and its
`slidesUrl`/`videoUrl` then render as links. Set `talk: '<slug>'` to link the
engagement to its talk page and list it in that page's delivery history.

The Upcoming→Past split is computed at build time. A weekly scheduled deploy
(Mondays 04:20 UTC) keeps it fresh without commits. GitHub pauses cron
workflows after ~60 days of repo inactivity — if a past engagement still shows
as upcoming, go to Actions → Deploy to GitHub Pages → Run workflow.

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

- Repo must stay **public** (GitHub Pages free plan). Renamed
  `simonaoancea.github.io` → `simonaoancea.com` on 2026-07-23: with a custom
  domain configured the site serves at the domain root regardless of repo
  name — never add `base` to `astro.config.mjs`.
- Pages source is **GitHub Actions** (repo Settings → Pages). The workflow
  builds and deploys on push, manual dispatch, and the weekly cron.
- **Custom domain (done 2026-07-14):** canonical is `https://simonaoancea.com`
  (`public/CNAME` + Pages custom domain + `site` in astro.config). DNS lives at
  Cloudflare, all records "DNS only"/grey-cloud (apex `A` 185.199.108-111.153,
  `CNAME www → simonaoancea.github.io` — that's GitHub's infra hostname, still
  valid after the repo rename). `simonaoancea.dev` 301-redirects to the .com
  via a Cloudflare redirect rule. The bare `https://simonaoancea.github.io/`
  URL died with the 2026-07-23 repo rename (404). Both domains renew yearly
  at Cloudflare Registrar.

## Versions

Pinned to `astro@^5.18.2` deliberately (v7 is latest; every API used here is
verified against v5, which still receives patches). Upgrade later with
`npx @astrojs/upgrade` after reading the v6/v7 migration guides.

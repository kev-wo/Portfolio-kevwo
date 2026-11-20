# Kevin Wong — Portfolio

A bilingual (EN/FR), light/dark portfolio website with an easy no-code editing
dashboard. Built with **Next.js 15**, **Tailwind CSS v4**, and **Sanity** as the CMS.

- **Live site:** `/en` and `/fr`
- **Editing dashboard:** `/studio`
- **Runs instantly in demo mode** (built-in resume content) until a Sanity project is connected.

## 👉 Setup & how to edit weekly: see [SETUP.md](./SETUP.md)

## Tech

| Area | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4, CSS variables for theming |
| Theme | `next-themes` (light / dark) |
| i18n | `/[locale]` routing (`en`, `fr`) + localized CMS fields |
| CMS | Sanity (embedded Studio at `/studio`) |
| Animation | Framer Motion |
| Hosting | Vercel (free) |

## Structure

```
src/
  app/
    [locale]/            # the one-page site (en / fr)
    studio/[[...tool]]/  # embedded Sanity Studio (admin dashboard)
  components/            # nav, footer, sections, ui
  lib/
    seed.ts              # resume content (demo + CMS import source)
    data.ts              # fetches from Sanity, falls back to seed
    i18n.ts              # UI strings (EN/FR)
  sanity/
    schemaTypes/         # the content model you edit in the Studio
sanity/seed.ndjson       # generated import file
scripts/seed-to-ndjson.ts
```

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
```

To connect the CMS, copy `.env.local.example` → `.env.local` and follow
[SETUP.md](./SETUP.md).

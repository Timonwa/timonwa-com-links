# Timonwa's Links Hub

A single-page link-in-bio site at [links.timonwa.com](https://links.timonwa.com) —
newsletters, tools I've built, shop, support, press kit, and socials, all in one place.

## Stack

- **Framework** — Next.js 14 (Pages Router) + React 18 + TypeScript
- **Styling** — Tailwind CSS v4 (no SCSS, no runtime theming library)
- **Icons** — lucide-react
- **Package manager** — pnpm

## Local setup

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm lint
```

## Adding a link or section

1. Add the URL to [src/config/constants.ts](src/config/constants.ts)
2. Reference it in the relevant file under `src/data/`
3. If it's a new section, create a component under `src/components/sections/` and
   compose it into [pages/index.tsx](pages/index.tsx); add an entry to
   `MENU_ITEMS` for the floating section jump.

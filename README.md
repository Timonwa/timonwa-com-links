# Timonwa's Links Hub

A single-page link-in-bio site at [links.timonwa.com](https://links.timonwa.com) — newsletters, tools I've built, shop, support, press kit, and socials, all in one place. It mirrors the architecture of the main site, [timonwa.com](https://www.timonwa.com).

## Stack

- **Framework** — Next.js 14 (App Router) + React 18 + TypeScript
- **Styling** — Tailwind CSS v4 (no SCSS, no runtime theming library)
- **Icons** — lucide-react + @icons-pack/react-simple-icons
- **Package manager** — pnpm

## Local setup

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm lint
```

## Structure

Kind-first `src/lib/`, feature-first `src/components/` — the same layout as the main site.

- `src/lib/config/` — site metadata + URL constants (barrel `@/lib/config`); don't hardcode URLs
- `src/lib/data/` — the typed content lists behind each section (socials, newsletters, shop, tools…)
- `src/lib/types/` — shared types, one file per domain (barrel `@/lib/types`)
- `src/lib/hooks/`, `src/lib/utils/`, `src/lib/seo/` — client hooks, generic helpers (`cn`), JSON-LD builders
- `src/components/ui/` — reusable primitives (barrel `@/components/ui`)
- `src/components/layout/` — shared chrome (header, footer, floating menu, theme toggle)
- `src/components/home/` — the page's sections + `index.tsx` composing them; `app/page.tsx` just renders it

## Adding a link or section

1. Add the URL to [src/lib/config/constants.ts](src/lib/config/constants.ts)
2. Reference it in the relevant file under `src/lib/data/`
3. For a new section, add a component under `src/components/home/`, compose it in [src/components/home/index.tsx](src/components/home/index.tsx), and add an entry to `MENU_ITEMS` for the floating section jump.

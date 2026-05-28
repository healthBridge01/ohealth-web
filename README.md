# OHealth Web

Marketing and informational website for **OHealth**, built with:

- `next@16` (App Router)
- `react@19`
- `typescript`
- `tailwindcss@4`

The codebase is organized around reusable section components so Home and For Professionals can share layout logic while keeping different copy/content.

## Prerequisites

- Node.js 20+
- npm 10+

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

- `npm run dev` - start development server (Turbopack)
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run lint:fix` - run ESLint with auto-fix
- `npm run format` - run Prettier write
- `npm run format:check` - check formatting
- `npm run check` - format check + lint + build

## Project structure

- `src/app/` - Next.js routes and layouts
- `src/components/ui/` - low-level UI primitives
- `src/components/layout/` - shared page chrome (`Navbar`, `Footer`, `SiteChrome`)
- `src/components/sections/` - reusable section blocks used across routes
- `src/components/home/` - Home page composition and page-specific wrappers
- `src/components/for-professionals/` - For Professionals page composition
- `src/content/` - structured content (FAQ, legal, etc.)
- `src/lib/` - shared utilities/config (`images`, loaders, nav)
- `public/` - static assets

## Routes

Main routes include:

- `/`
- `/for-professionals`
- `/faq`
- `/contact`
- `/privacy`
- `/terms`
- `/blog` (placeholder)
- `/careers` (placeholder)

## Styling and design system

- Tailwind v4 utilities + design tokens in `src/app/globals.css`
- Shared button variants in `src/components/ui/button.tsx`
- Favor reusable section components over duplicating section markup between pages

## Images

- Product/marketing image IDs are centralized in `src/lib/images.ts`
- Static icon/image assets live in `public/icons` and `public/images`
- `next/image` is used throughout with local assets and configured loader support

## Quality gates

- Pre-commit hooks are configured via Husky + lint-staged
- Staged TS/JS files run ESLint with fixes
- Staged JSON/CSS/MD/YAML files run Prettier

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for development workflow, coding conventions, and PR checklist.

## Notes

This repo targets **Next.js 16**. Prefer local versioned docs in `node_modules/next/dist/docs` when behavior differs from older examples.

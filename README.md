# OHealth Web

Marketing and informational site for **OHealth**, a digital healthcare platform. The app is built with **Next.js** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Requirements

- **Node.js** 20 or newer (recommended; aligns with `@types/node` in this repo)
- **npm** (or another package manager compatible with `package-lock.json`)

## Getting started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Pages update as you edit files under `src/`.

## Scripts

| Command                | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `npm run dev`          | Start Next.js in development mode with Turbopack |
| `npm run build`        | Create an optimized production build             |
| `npm run start`        | Run the production server (after `build`)        |
| `npm run lint`         | ESLint (Next.js + TypeScript + Prettier rules)   |
| `npm run lint:fix`     | ESLint with `--fix`                              |
| `npm run format`       | Format with Prettier                             |
| `npm run format:check` | Verify formatting (useful in CI)                 |
| `npm run check`        | `format:check` + `lint` + `build` (full gate)    |

After `npm install`, the **`prepare`** script runs **Husky** so Git uses `.husky/` hooks. **lint-staged** runs on pre-commit: ESLint with fix on staged `*.{ts,tsx,js,mjs,cjs}`, Prettier on staged `*.{json,css,md,yml,yaml}`.

Config files: `eslint.config.mjs`, `.prettierrc`, `.prettierignore`.

## Project structure

| Path              | Purpose                                                          |
| ----------------- | ---------------------------------------------------------------- |
| `src/app/`        | App Router routes and layouts (`page.tsx`, `layout.tsx`)         |
| `src/components/` | UI sections and layout (home, marketing, contact, FAQ, etc.)     |
| `src/content/`    | Typed copy and structured data (legal text, FAQs, contact cards) |
| `src/lib/`        | Shared utilities (navigation config, Cloudinary image loader)    |
| `public/`         | Static assets served from the site root                          |

## Routes

Static marketing routes include the home page, **For professionals**, **FAQ**, **Contact**, **Terms**, **Privacy**, and lightweight **Blog** and **Careers** placeholders. See `src/app/` for the full route tree.

## Images

Product imagery is loaded via **Cloudinary** using a custom Next.js image loader (`next.config.ts` → `src/lib/cloudinary-loader.ts`). Image public IDs are listed in `src/lib/images.ts`. To use local files instead, switch to the default Next image pipeline and place files under `public/`.

## Conventions

- **TypeScript** is used throughout; shared content shapes live next to usage (for example `PolicyBlock` in `src/content/legal.ts`).
- **Tailwind** theme tokens (brand colors, fonts) are defined in `src/app/globals.css` under `@theme`.
- Follow existing patterns in `src/components/` when adding new sections or pages.

## Documentation

This project targets **Next.js 16**; when in doubt, prefer the versioned docs under `node_modules/next/dist/docs/` in this repo over older generic Next.js material.

## License

Private / internal — not licensed for public distribution unless otherwise stated by the repository owner.

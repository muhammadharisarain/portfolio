# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start development server at localhost:3000
npm run build     # Production build
npm run start     # Start production server
npm run lint      # Run ESLint (next lint)
```

There are no tests in this project.

## Architecture

**Next.js 14 App Router** portfolio site with TypeScript, Tailwind CSS, and Framer Motion.

### Key Directories

- `src/app/` — App Router pages and layouts. The root `page.tsx` is the single-page portfolio (client component). `/api/cv/route.ts` is a Node.js API route for server-side PDF generation.
- `src/components/sections/` — One component per portfolio section (Hero, About, Skills, Experience, Projects, Contact, Navbar, Footer). Barrel-exported via `index.ts`.
- `src/components/ui/` — Reusable primitives (Button, Card, SectionHeading, AnimatedCounter, SkillTag). Barrel-exported via `index.ts`.
- `src/lib/data.ts` — **Single source of truth** for all portfolio content (personal info, skills, experience, projects, nav links). Both the portfolio UI and the PDF CV document consume this file.
- `src/lib/cv-document.tsx` — React PDF template rendered by `@react-pdf/renderer`. Imports its content from `data.ts`.
- `src/app/resume/` — Web resume page. `/cv` permanently redirects here (see `next.config.js`).
- `src/components/resume/` — One component per resume section, barrel-exported via `index.ts`. Each reads `data.ts` directly and takes no props.

### Data Flow

All content lives in `src/lib/data.ts`. To update any portfolio information (name, skills, projects, experience, education), edit that file — no other files need to change.

This is enforced, not aspirational: the homepage, `src/app/resume/`, and `src/lib/cv-document.tsx` (the PDF) all import from `data.ts`. Do not reintroduce a local copy of CV content in a component — the three previously diverged, and the `/cv` page ended up showing a year-old job title.

`certifications` is intentionally an empty array; `ResumeEducation` hides that block while it is empty. Add entries to `data.ts` to make it appear — no component change needed.

### Theming (dark + light)

Both themes are driven by `data-theme` on `<html>`, set by `themeInitScript` in `src/components/ThemeProvider.tsx` — a blocking `<head>` script that runs before first paint so there is no flash. Resolution order: stored `localStorage.theme` → OS `prefers-color-scheme` → dark.

**Do not add `dark:` variants.** Colors resolve through CSS variables (`--c-*`, space-separated RGB triplets) defined in `globals.css` and mapped in `tailwind.config.ts` via `rgb(var(--c-x) / <alpha-value>)`. Changing `data-theme` repaints the whole site with no component changes.

`white` and `gray-*` are deliberately overridden and are **semantic, not literal**: in light mode `white` resolves to near-black, so `text-white` still means "highest-contrast text" and `bg-white/5` still means "barely-there contrast tint". The gray ramp keeps its meaning too — `gray-200` is always the most prominent secondary tone, `gray-500` the faintest.

`#00ff88` is dark-mode only. It is ~1.3:1 on white, so light mode uses `#047857` (5.24:1). Any new accent color needs a light-mode counterpart in both `:root` blocks.

### Fonts

Three families, each with a job: Space Grotesk (`font-display`) for headings, Inter (`font-sans`) for body, JetBrains Mono (`font-mono`) for dates, metric numerals, and tech tags. All registered in `src/app/layout.tsx` and `tailwind.config.ts`.

### PDF Generation

Two approaches coexist:
1. **Server-side** (`/api/cv/route.ts`): Reads profile image from disk, renders PDF via `@react-pdf/renderer`, streams download response.
2. **Client-side** (`src/lib/downloadCV.ts`): Fetches image as base64, generates PDF in the browser.

`@react-pdf/renderer` is listed in `next.config.js` as `serverExternalPackages` to prevent it from being bundled on the client.

### Client vs Server Components

Most components are `'use client'` due to Framer Motion animations and interactive hooks. `ParticleBackground` uses a dynamic import (`next/dynamic` with `ssr: false`) because tsParticles is SSR-unsafe.

### Styling

- Dark theme by default; custom color palette defined in `tailwind.config.ts` (primary: `#00ff88`, dark backgrounds).
- Path alias `@/*` resolves to `src/*`.
- Use `cn()` from `src/lib/utils.ts` (wraps `clsx` + `tailwind-merge`) for conditional class names.

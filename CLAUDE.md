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
- `src/lib/cv-document.tsx` — React PDF template rendered by `@react-pdf/renderer`.
- `src/app/cv/` — Dedicated CV page with download button and toolbar.

### Data Flow

All content lives in `src/lib/data.ts`. To update any portfolio information (name, skills, projects, experience), edit that file — no other files need to change.

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

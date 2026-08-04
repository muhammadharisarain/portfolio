# Design: `/resume` — Web Resume Page

**Date:** 2026-08-04
**Status:** Approved for planning

## Problem

The portfolio can only deliver the CV as a PDF download. A recruiter who wants to skim credentials must download a file first — friction at exactly the moment attention is highest. There is also a `/cv` page, but it is stale and unstyled relative to the portfolio.

Worse, CV content now exists in three diverged copies:

| Source | Title used | Projects | Experience dates |
|---|---|---|---|
| `src/lib/data.ts` | Full-Stack Developer | 7 (Dentbird, Firmament, Karaoke, Tamam, Fatoraty, Wayfellow, Campaign Estimator) | Oct 2022 – Present |
| `src/lib/cv-document.tsx` | Full-Stack Developer | same 7, independently worded | Oct 2022 – Present |
| `src/app/cv/page.tsx` | Backend & MERN Stack Engineer | 6, incl. Battle Saga; no Dentbird/Firmament | 2026 – Present |

`CLAUDE.md` states `data.ts` is the single source of truth. That is currently false. The `/cv` page presents an outdated professional identity.

## Goals

1. A `/resume` page presenting full CV detail in the portfolio's visual language.
2. Restore `data.ts` as the true single source of truth for all three consumers.
3. Retain PDF download, and add print support.

## Non-goals

- Redesigning the PDF's visual layout. Only its data layer changes.
- Redesigning the homepage sections.
- Per-project deep-dive breakdowns (role, team size, duration) — explicitly deferred.
- A certifications section — none exist yet.

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Route strategy | `/resume` is canonical; `/cv` permanently redirects to it | One canonical web resume; eliminates the drift source |
| Data source | `data.ts` feeds homepage, `/resume`, and PDF | Matches the contract CLAUDE.md already declares |
| Visual tone | Consistent with portfolio | Recruiter-safe; the two pages read as one site |
| Extra sections | Education, impact metrics, career timeline | Adds substance the PDF lacks |
| Certifications | Omitted; empty array auto-hides section | No empty headings; extensible later without component edits |
| Battle Saga | Restored as 8th project | Keeps Web3 exposure visible |
| Education dates | `2022 – 2026`, completed | Degree finished as of Aug 2026 |

## Design language

Inherits the existing system unchanged:

- Background `#0a0e17`, surfaces `#111827` / `#1f2937`
- Primary `#00ff88`
- Space Grotesk (display), Inter (body)
- Framer Motion for scroll-reveal

One addition: **JetBrains Mono**, scoped to dates, metric numerals, and tech tags. This is the one borrowing from the reference site (`aunali.vercel.app`), which uses monospace for the same purpose. It makes metadata read as data rather than prose and suits an engineering resume.

Structural patterns adopted from the reference (structure only — colors and type remain ours):

- Section header as short rule + label (`—— Experience`), left-aligned
- Employment-type pills (`Full Time · Remote`) beside dates
- Timeline dot brightness encoding recency
- Dual availability badges plus location line

The particle background is disabled on `/resume` so content reads cleanly.

**Explicit fix:** the homepage Experience timeline is right-aligned, which fights reading direction. `/resume` uses a left-aligned timeline. The homepage is left unchanged (out of scope).

## Page structure

| # | Section | Content | Source |
|---|---|---|---|
| 1 | Header | Photo, name, title, contact row, 2 availability badges; actions: Download PDF, Print, Email, LinkedIn | `personalInfo`, `availability` |
| 2 | Impact metrics | Animated counters: 400+ endpoints, 7 products led, 65% latency cut, 10+ contributed, 3 mentored | `resumeMetrics` (new) |
| 3 | Summary | Professional summary paragraph | `resumeSummary` (new) |
| 4 | Career timeline | Junior Backend Engineer (Oct 2022) → Full-Stack / MERN Developer → primary engineer on 7 products | `careerTimeline` (new) |
| 5 | Experience | XISLABS card: mono dates, `Full Time` pill, achievement bullets, tech tags | `experiences` |
| 6 | Technical skills | 6 groups rendered as pill tags | `skillCategories` |
| 7 | Key projects | 8 compact cards: title, category, description, tech | `projects` |
| 8 | Education | 2 entries; certifications auto-hidden while empty | `education` (new), `certifications` (new, empty) |
| 9 | Contact CTA | Hire Me (→ `mailto:`), Email, LinkedIn, GitHub | `personalInfo` |

No "Book a Call" CTA: no scheduling link exists in `personalInfo`. Adding one would mean inventing a URL. It can be added later by extending `personalInfo`.

## Data model additions to `src/lib/data.ts`

```ts
export const availability = {
  freelance: boolean
  fullTime: boolean
  locationLine: string        // "Lahore, Pakistan · Remote Worldwide"
}

export const resumeSummary: string

export const resumeMetrics: {
  value: number
  suffix: string
  label: string
  detail: string              // tooltip / sub-label
}[]

export const careerTimeline: {
  role: string
  period: string
  note: string
}[]

export const education: {
  degree: string
  institution: string
  period: string
  detail?: string
}[]

export const certifications: {
  name: string
  issuer: string
  year: string
}[]                           // [] — section auto-hides
```

`projects` gains an eighth entry, Battle Saga (React, Solidity, Web3.js, Ethereum, NFT, Smart Contracts; category `Web3 / Blockchain`).

`experiences[0]` gains `employmentType: 'Full Time'` and a `tech: string[]` field for tag rendering.

## Component architecture

New directory `src/components/resume/`, one component per section, barrel-exported via `index.ts` — mirroring the existing `sections/` and `ui/` convention.

```
src/components/resume/
  ResumeHeader.tsx        # photo, identity, availability, action buttons
  ResumeMetrics.tsx       # animated counter row (reuses ui/AnimatedCounter)
  ResumeSummary.tsx
  ResumeTimeline.tsx      # vertical career progression
  ResumeExperience.tsx
  ResumeSkills.tsx
  ResumeProjects.tsx
  ResumeEducation.tsx     # returns null when both lists are empty
  ResumeContact.tsx
  ResumeSectionHeader.tsx # shared "—— Label" rule+label primitive
  index.ts
```

Each component reads directly from `data.ts` and takes no props, matching how `sections/` components already work. `ResumeSectionHeader` is the one shared primitive, preventing nine copies of the same header markup.

`src/app/resume/page.tsx` composes them. `src/app/resume/layout.tsx` supplies metadata and loads JetBrains Mono via `next/font`.

The existing PDF download path is reused as-is: `ResumeHeader` calls `downloadCV()` from `src/lib/downloadCV.ts`, the same dynamic import `CVToolbar` uses today.

## Files changed

**Created**
- `src/app/resume/page.tsx`, `src/app/resume/layout.tsx`
- `src/components/resume/*` (10 files above)

**Modified**
- `src/lib/data.ts` — new exports; Battle Saga; experience fields
- `src/lib/cv-document.tsx` — delete hardcoded `const cv`; import from `data.ts`. **Styles and layout untouched.**
- `src/components/sections/Navbar.tsx` — add `Resume` link and `Hire Me` CTA
- `next.config.js` — permanent redirect `/cv` → `/resume`
- `CLAUDE.md` — document the `/resume` route and the restored data-flow contract

**Deleted**
- `src/app/cv/` (`page.tsx`, `layout.tsx`, `CVToolbar.tsx`, `CVDownloadButton.tsx`)

## Print behaviour

`/resume` carries an `@media print` block: A4 page size, white background, dark text, navigation and CTA hidden, particle layer hidden, page-break control before Projects. This absorbs the printing role `/cv` served.

## Error handling and edge cases

- `certifications: []` → `ResumeEducation` renders education only; no empty heading.
- PDF generation failure → button returns to idle and surfaces an inline error message. (The current `CVToolbar` swallows errors silently; the new header does not.)
- Missing profile image → header falls back to an initials monogram rather than a broken image.
- `resumeMetrics` respects `prefers-reduced-motion`: counters render final values without animating.

## Verification

No test suite exists in this project. Verification is manual, via Playwright driven through the shell (`scratchpad/shot.js`), since the Playwright MCP server is not loaded in-session:

1. `npm run build` passes and `npx tsc --noEmit` is clean.
2. `/resume` screenshots at 1440px and 390px viewports; all nine sections render.
3. `/cv` returns a redirect to `/resume`.
4. Downloaded PDF opens and its content matches `/resume` — proving the single-source refactor.
5. Print preview renders as clean A4.
6. Homepage still renders correctly after `data.ts` changes (8 projects now).

## Risks

| Risk | Mitigation |
|---|---|
| PDF regression from the `data.ts` refactor | Layout/styles untouched; only the data object is swapped. Verified by generating and opening the PDF. |
| Homepage breakage from new `data.ts` shape | Additions are new exports; existing exports keep their shape. Only `projects` grows and `experiences[0]` gains optional fields. |
| Deleting `/cv` breaks an external link someone saved | Permanent redirect preserves the URL. |

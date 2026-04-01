# CV Document Redesign — Design Spec
**Date:** 2026-04-01  
**File:** `src/lib/cv-document.tsx`  
**Status:** Approved

---

## Goal

Redesign the React PDF CV document to adopt the "Theo Ramos" visual style from `cv-document-examples/ex-1.png` (middle template): dark navy sidebar, white main column, bold name treatment at the top of the sidebar, clean horizontal-rule section separators, and strong typographic hierarchy. Remove the profile image entirely. Trim projects from 6 to 4 most impressive entries.

---

## Layout & Structure

### Page 1 — Core CV

**Sidebar (dark navy `#0f172a`, sky-blue accent `#38bdf8`):**
1. **Name block** — Name in large bold white text (~16pt), role/title beneath in accent colour (~9pt), no photo, no placeholder
2. **Divider line**
3. **CONTACT** section — email, location, GitHub link, LinkedIn link (each with a small accent dot or icon-like marker)
4. **Divider line**
5. **SKILLS** section — 4 categories (Frontend, Backend, Database, Tools) each with a category label and skill chips

**Main column (white `#ffffff`):**
1. **PROFESSIONAL SUMMARY** — shortened to 2–3 lines, section title with left accent bar + full-width horizontal rule beneath
2. **WORK EXPERIENCE** — job title bold, date right-aligned, company in accent blue, bullet points with accent dots. All 5 existing bullets kept.
3. **EDUCATION** — both entries: degree bold, date right-aligned, institution in muted italic

### Page 2 — Projects

**Sidebar:**
- Name (smaller, ~11pt) + "PROJECTS" label in accent
- Divider
- A compact repeat of the top 6 skills (most relevant: Node.js, React, NestJS, PostgreSQL, MongoDB, TypeScript) as a quick-reference for ATS page-2 readers
- Divider
- GitHub link + email

**Main column:**
- **FEATURED PROJECTS** section heading
- 2×2 grid (4 projects, 2 per row)
- Each project card: title bold, category label muted italic (right-aligned), 1-line description, tech chips below

### Projects to include (4 of 6)

| Project | Category | Reason kept |
|---|---|---|
| Wayfellow | Social Platform | Full-stack breadth, Socket.io, AWS |
| Karaoke System | Entertainment | WebRTC, real-time, Redis |
| Battle Saga | Web3 / Blockchain | Differentiator, Solidity/Web3 |
| Fatoraty | Business / POS | Business domain, full-stack |

**Dropped:** Campaign Estimator (generic analytics), Tamam (form builder — least impressive technically)

---

## Visual Design

### Typography (Helvetica — built into react-pdf)

| Element | Size | Weight | Colour |
|---|---|---|---|
| Sidebar name | 16pt | Bold | `#e2e8f0` |
| Sidebar role | 9pt | Regular | `#38bdf8` (accent) |
| Section labels | 7pt | Bold | `#38bdf8`, letter-spacing 1.5 |
| Main section title | 9.5pt | Bold | `#0f172a` |
| Body text | 8.5pt | Regular | `#374151` |
| Muted / dates | 8pt | Italic | `#6b7280` |
| Company name | 8.5pt | Bold | `#2563eb` |

### Colours (unchanged palette)

| Token | Value | Usage |
|---|---|---|
| `SB.bg` | `#0f172a` | Sidebar background |
| `SB.accent` | `#38bdf8` | Accent dots, links, labels |
| `SB.text` | `#e2e8f0` | Sidebar body text |
| `SB.muted` | `#94a3b8` | Sidebar muted text |
| `SB.border` | `#1e3a52` | Divider lines |
| `MN.bg` | `#ffffff` | Main column background |
| `MN.heading` | `#0f172a` | Section headings, job titles |
| `MN.body` | `#374151` | Body paragraphs, bullets |
| `MN.muted` | `#6b7280` | Dates, institution names |
| `MN.company` | `#2563eb` | Company name highlight |

### Section separator style (Theo Ramos match)
Each main-column section: left accent bar (3px wide, 13px tall, sky-blue, rounded) + section title → full-width `#e5e7eb` horizontal rule beneath, 1px height.

---

## Specific Changes from Current Document

1. **Remove** `photoWrap`, `photo`, `sbName` (old), `sbRole` (old) styles and all photo/initials JSX
2. **Add** new `sbNameBlock` style: larger name, tighter margin, no circular border
3. **Shrink sidebar width** from 188px to 175px — photo removal frees main-column space
4. **Shorten summary** from current 4-sentence paragraph to 2–3 lines in the data constant
5. **Page 2 sidebar** — replace filler note with compact skill repeat (6 key skills as chips)
6. **Projects** — reduce from 6 to 4; trim descriptions to 1 line each in the data constant
7. **`CVDocument` prop** — remove `profileImageSrc` prop entirely (no longer needed)
8. **Update callers** — `src/app/api/cv/route.ts` and `src/lib/downloadCV.ts` pass `profileImageSrc`; remove that argument

---

## Files Changed

| File | Change |
|---|---|
| `src/lib/cv-document.tsx` | Full redesign — remove photo, restyle sidebar header, adjust spacing, trim data |
| `src/app/api/cv/route.ts` | Remove `profileImageSrc` argument passed to `CVDocument` |
| `src/lib/downloadCV.ts` | Remove base64 image fetch logic and `profileImageSrc` argument |

---

## Out of Scope

- No changes to portfolio website UI (only the PDF document changes)
- No new dependencies
- No changes to `src/lib/data.ts` (CV data lives inline in `cv-document.tsx`)

# `/resume` Web Resume Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a `/resume` page presenting full CV detail in the portfolio's visual language, and restore `src/lib/data.ts` as the single source of truth for the homepage, the resume page, and the PDF.

**Architecture:** A new `src/app/resume/` route composes focused components from a new `src/components/resume/` directory, mirroring the existing `sections/` + `ui/` barrel convention. Every component reads directly from `data.ts` and takes no props. `cv-document.tsx` loses its hardcoded data object and imports the same exports, so all three consumers converge.

**Tech Stack:** Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, `@react-pdf/renderer`, `next/font/google`.

## Global Constraints

- **No test runner exists in this project.** `CLAUDE.md` states "There are no tests in this project," and adding one is out of scope. Every task is therefore verified by: `npx tsc --noEmit` (clean), `npm run build` (passes), and a Playwright visual check. Steps below give the exact commands and expected output. Do not claim a task passes without running them.
- Palette is fixed: background `#0a0e17`, surfaces `#111827` / `#1f2937`, primary `#00ff88`. Use existing Tailwind tokens (`bg-background`, `bg-background-light`, `text-primary`) — do not introduce new hex values.
- Fonts: Space Grotesk (`font-display`), Inter (`font-sans`), and a new JetBrains Mono (`font-mono`) scoped to dates, metric numerals, and tech tags only.
- Use `cn()` from `src/lib/utils.ts` for conditional classes.
- Components using Framer Motion or hooks need `'use client'`.
- Do not modify the homepage sections. The only homepage-adjacent change is `Navbar.tsx`.
- Do not change `cv-document.tsx` styles or layout. Only its data source changes.
- Never invent factual content (dates, certifications, employers). Only the facts already present in `data.ts`, `cv-document.tsx`, or confirmed by the user.

---

### Task 1: Extend `data.ts` with resume data

**Files:**
- Modify: `src/lib/data.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `availability`, `resumeSummary`, `resumeMetrics`, `careerTimeline`, `education`, `certifications`; `projects` grows to 8; `experiences[0]` gains `employmentType` and `tech`.

- [ ] **Step 1: Add the new type-annotated exports**

Append to `src/lib/data.ts`:

```ts
export const availability = {
  freelance: true,
  fullTime: true,
  locationLine: 'Lahore, Pakistan · Remote Worldwide',
}

export const resumeSummary =
  'MERN Stack Specialist and Full-Stack Developer with 4+ years delivering production web platforms across healthcare, fintech, retail, entertainment, and AI-agent domains. Primary engineer on 7 products and contributor on 10+, with 400+ REST/GraphQL endpoints authored. Strong in Node.js, NestJS, React, Next.js (App Router, SSR/ISR), PostgreSQL, MongoDB, and Redis — plus OAuth 2.0, microservices, and AI-augmented workflows on Claude Code and MCP servers.'

export type ResumeMetric = {
  value: number
  suffix: string
  label: string
  detail: string
}

export const resumeMetrics: ResumeMetric[] = [
  { value: 400, suffix: '+', label: 'API Endpoints', detail: 'REST & GraphQL across Node.js, Express, NestJS' },
  { value: 7,   suffix: '',  label: 'Products Led',  detail: 'Primary engineer on production systems' },
  { value: 65,  suffix: '%', label: 'Latency Cut',   detail: 'p95 ~800ms → ~280ms via Redis + composite indexes' },
  { value: 10,  suffix: '+', label: 'Products Shipped', detail: 'Contributor across healthcare, retail, Web3, AI' },
  { value: 3,   suffix: '',  label: 'Engineers Mentored', detail: 'Onboarding cut from 4 weeks to 2' },
]

export type TimelineEntry = {
  role: string
  period: string
  note: string
  current?: boolean
}

// Only documented milestones. Do not add intermediate steps without real dates.
export const careerTimeline: TimelineEntry[] = [
  {
    role: 'Junior Backend Engineer',
    period: 'Oct 2022',
    note: 'Joined XISLABS on the backend team — Node.js, Express, and MongoDB service work.',
  },
  {
    role: 'Full-Stack / MERN Developer',
    period: 'Present',
    note: 'Primary engineer on 7 production products and contributor on 10+, spanning healthcare, retail, Web3, entertainment, and AI-agent platforms.',
    current: true,
  },
]

export type Education = {
  degree: string
  institution: string
  period: string
  detail?: string
}

export const education: Education[] = [
  {
    degree: 'BS Computer Science',
    institution: 'Virtual University of Pakistan',
    period: '2022 – 2026',
  },
  {
    degree: 'Intermediate — Pre-Engineering (FSc)',
    institution: 'Superior College of Science, Hyderabad',
    period: 'Completed 2022',
  },
]

export type Certification = {
  name: string
  issuer: string
  year: string
}

// Empty by design — ResumeEducation hides the block while this is empty.
export const certifications: Certification[] = []
```

- [ ] **Step 2: Add `employmentType` and `tech` to the experience entry**

In `src/lib/data.ts`, inside `experiences[0]`, add these two fields directly after `period: 'Oct 2022 - Present',`:

```ts
    employmentType: 'Full Time',
    tech: ['Node.js', 'NestJS', 'Express', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'],
```

- [ ] **Step 3: Add Battle Saga as the 8th project**

Append to the `projects` array in `src/lib/data.ts`, after the Campaign Estimator entry:

```ts
  {
    title: 'Battle Saga',
    description:
      'Web3 gaming platform built at XISLABS with smart-contract integration — cryptocurrency tokens for in-game purchases, on-chain battles, and NFT rewards, with wallet connectivity and Ethereum contract calls from a React frontend.',
    image: '/battle-saga.svg',
    tags: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'NFT', 'Smart Contracts'],
    category: 'Web3 / Blockchain',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
```

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0, no output.

- [ ] **Step 5: Verify the homepage still renders 8 projects**

Run: `npm run dev` (if not already running), then check `http://localhost:3000` — the Projects section must show 8 cards including Battle Saga.

- [ ] **Step 6: Commit**

```bash
git add src/lib/data.ts
git commit -m "feat(data): add resume fields and Battle Saga project"
```

---

### Task 2: Point the PDF template at `data.ts`

**Files:**
- Modify: `src/lib/cv-document.tsx`

**Interfaces:**
- Consumes: all Task 1 exports plus existing `personalInfo`, `experiences`, `projects`, `skillCategories`.
- Produces: no new exports. `CVDocument` signature is unchanged.

**Critical:** styles (`const s = StyleSheet.create({...})`) and all JSX layout stay byte-identical. Only the `const cv = {...}` object is replaced.

- [ ] **Step 1: Replace the hardcoded data object**

Delete the entire `const cv = { ... }` block (currently lines 243–342) and replace with:

```tsx
import {
  personalInfo,
  experiences,
  projects,
  education,
  resumeSummary,
} from './data'

const cv = {
  name:        personalInfo.name,
  title:       personalInfo.title,
  phone:       personalInfo.phone,
  email:       personalInfo.email,
  location:    personalInfo.location,
  github:      personalInfo.github.replace('https://github.com/', ''),
  githubUrl:   personalInfo.github,
  linkedin:    personalInfo.linkedin.replace('https://linkedin.com/in/', ''),
  linkedinUrl: personalInfo.linkedin,

  summary: resumeSummary,

  experience: experiences.map((e) => ({
    title:   e.title,
    company: e.company,
    period:  e.period.replace(' - ', ' – '),
    bullets: e.achievements,
  })),

  education,

  skills: {
    frontend:     ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'Framer Motion'],
    backend:      ['Node.js', 'NestJS', 'Express', 'REST APIs', 'GraphQL', 'Socket.io', 'WebRTC', 'Microservices'],
    database:     ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Mongoose'],
    devops:       ['Docker', 'AWS (EC2, S3, Lambda)', 'Azure', 'Digital Ocean', 'Vercel', 'GitHub Actions', 'Nginx', 'Linux'],
    integrations: ['Stripe', 'Moyasar', 'Twilio', 'Firebase', 'OAuth 2.0', 'JWT'],
    ai:           ['Claude Code', 'MCP Servers', 'Anthropic API', 'OpenAI API', 'Gemini', 'Agent Orchestration'],
    workflow:     ['Jest', 'Vitest', 'Agile / Kanban', 'Jira', 'Confluence', 'Git'],
  },

  projects: projects.map((p) => ({
    title:    p.title,
    category: p.category,
    desc:     p.description,
    tech:     p.tags.slice(0, 5),
  })),
}
```

Note: the `skills` groupings stay literal here. `skillCategories` in `data.ts` carries UI-only fields (icon components, hex colors, proficiency levels) that the PDF must not import — pulling `lucide-react` icons into the PDF bundle would break the server-side render.

The education entries need no mapping: `education` already exposes `degree`, `institution`, and `period`, which is exactly what the existing JSX reads.

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 3: Verify the PDF still generates and now shows 8 projects**

Run: `curl -s -o /tmp/cv.pdf -w "%{http_code} %{size_download}\n" http://localhost:3000/api/cv`
Expected: `200` and a size greater than 20000 bytes.

Then confirm content changed as intended:
```bash
node -e "const b=require('fs').readFileSync('/tmp/cv.pdf');console.log(b.length)"
```
Open the PDF and confirm: title reads "Full-Stack Developer", experience period is "Oct 2022 – Present", and Battle Saga appears in Key Projects.

- [ ] **Step 4: Commit**

```bash
git add src/lib/cv-document.tsx
git commit -m "refactor(cv): source PDF content from data.ts"
```

---

### Task 3: Route scaffold, mono font, and shared section header

**Files:**
- Create: `src/app/resume/layout.tsx`, `src/app/resume/page.tsx`
- Create: `src/components/resume/ResumeSectionHeader.tsx`, `src/components/resume/index.ts`
- Modify: `src/app/layout.tsx`

**Interfaces:**
- Produces: `ResumeSectionHeader({ label, id }: { label: string; id?: string })` — renders a short primary rule followed by the label, left-aligned. Every later section uses it.

- [ ] **Step 1: Add JetBrains Mono to the root layout**

In `src/app/layout.tsx`, extend the font import and body class:

```tsx
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})
```

Then change the `<body>` className to:

```tsx
<body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
```

- [ ] **Step 2: Register the mono family in Tailwind**

In `tailwind.config.ts`, inside `theme.extend.fontFamily`, add:

```ts
        mono: ['var(--font-jetbrains-mono)', 'ui-monospace', 'monospace'],
```

- [ ] **Step 3: Create the shared section header**

Create `src/components/resume/ResumeSectionHeader.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'

export default function ResumeSectionHeader({
  label,
  id,
}: {
  label: string
  id?: string
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 mb-8"
    >
      <span className="h-px w-10 bg-primary" aria-hidden="true" />
      <h2 className="font-display text-xl md:text-2xl font-bold text-white">
        {label}
      </h2>
    </motion.div>
  )
}
```

- [ ] **Step 4: Create the barrel**

Create `src/components/resume/index.ts`:

```ts
export { default as ResumeSectionHeader } from './ResumeSectionHeader'
```

- [ ] **Step 5: Create the route layout**

Create `src/app/resume/layout.tsx`:

```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume — Muhammad Haris Arain',
  description:
    'Full resume of Muhammad Haris Arain — Full-Stack Developer and MERN Stack Specialist with 4+ years building production web platforms.',
}

export default function ResumeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
```

- [ ] **Step 6: Create a placeholder page to prove the route resolves**

Create `src/app/resume/page.tsx`:

```tsx
import { ResumeSectionHeader } from '@/components/resume'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <div className="container mx-auto max-w-4xl px-6 py-24">
        <ResumeSectionHeader label="Experience" />
      </div>
    </main>
  )
}
```

- [ ] **Step 7: Verify the route and the mono font both load**

Run: `curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/resume`
Expected: `200`

Then confirm the font variable is applied:
```bash
node -e "
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROME});
const p=await b.newPage();await p.goto('http://localhost:3000/resume');
console.log(await p.evaluate(()=>getComputedStyle(document.body).getPropertyValue('--font-jetbrains-mono')));
await b.close()})()"
```
Expected: a non-empty font family value.

- [ ] **Step 8: Commit**

```bash
git add src/app/layout.tsx tailwind.config.ts src/app/resume src/components/resume
git commit -m "feat(resume): scaffold route, mono font, section header"
```

---

### Task 4: `ResumeHeader`

**Files:**
- Create: `src/components/resume/ResumeHeader.tsx`
- Modify: `src/components/resume/index.ts`, `src/app/resume/page.tsx`

**Interfaces:**
- Consumes: `personalInfo`, `availability` from `data.ts`; `downloadCV()` from `src/lib/downloadCV.ts`.
- Produces: `ResumeHeader` — default export, no props.

- [ ] **Step 1: Create the component**

Create `src/components/resume/ResumeHeader.tsx`:

```tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, Printer, Mail, Linkedin, Github, MapPin, Phone, ArrowLeft } from 'lucide-react'
import { personalInfo, availability } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function ResumeHeader() {
  const [downloading, setDownloading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [imgFailed, setImgFailed] = useState(false)

  const handleDownload = async () => {
    if (downloading) return
    setDownloading(true)
    setError(null)
    try {
      const { downloadCV } = await import('@/lib/downloadCV')
      await downloadCV()
    } catch {
      setError('Could not generate the PDF. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  const initials = personalInfo.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 3)
    .join('')

  return (
    <header className="mb-16">
      <a
        href="/"
        className="print:hidden inline-flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft size={15} /> Back to portfolio
      </a>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row gap-8 items-start"
      >
        <div className="relative h-28 w-28 shrink-0 rounded-2xl overflow-hidden border border-primary/30 bg-background-lighter">
          {imgFailed ? (
            <span className="flex h-full w-full items-center justify-center font-display text-2xl font-bold text-primary">
              {initials}
            </span>
          ) : (
            <Image
              src="/profile_image.jpeg"
              alt={personalInfo.name}
              width={112}
              height={112}
              className="h-full w-full object-cover object-top"
              onError={() => setImgFailed(true)}
              priority
            />
          )}
        </div>

        <div className="flex-1">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
            {personalInfo.name}
          </h1>
          <p className="mt-1 text-primary font-medium">{personalInfo.title}</p>
          <p className="mt-0.5 text-sm text-gray-400">{personalInfo.subtitle}</p>

          <div className="mt-4 flex flex-wrap gap-2 print:hidden">
            {availability.freelance && <Badge>Available for Freelance</Badge>}
            {availability.fullTime && <Badge>Open to Full-Time Roles</Badge>}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
              <MapPin size={11} /> {availability.locationLine}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-gray-400">
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={13} /> {personalInfo.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={13} /> {personalInfo.phone}
            </span>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Github size={13} /> {personalInfo.github.replace('https://', '')}
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors">
              <Linkedin size={13} /> {personalInfo.linkedin.replace('https://', '')}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-opacity',
                downloading ? 'opacity-70 cursor-wait' : 'hover:opacity-90'
              )}
            >
              <Download size={16} /> {downloading ? 'Generating…' : 'Download PDF'}
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
            >
              <Printer size={16} /> Print
            </button>
          </div>

          {error && (
            <p role="alert" className="mt-3 text-sm text-red-400">{error}</p>
          )}
        </div>
      </motion.div>
    </header>
  )
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </span>
  )
}
```

- [ ] **Step 2: Export it and render it**

Add to `src/components/resume/index.ts`:
```ts
export { default as ResumeHeader } from './ResumeHeader'
```

Update `src/app/resume/page.tsx` to import `ResumeHeader` and render it above the section header.

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 4: Visual check at desktop and mobile**

Screenshot `http://localhost:3000/resume` at 1440×900 and 390×844. Confirm: photo renders, badges wrap without overflow, contact row is monospace, both buttons visible.

- [ ] **Step 5: Verify the download button actually produces a PDF**

Click "Download PDF" in the browser and confirm a file downloads and opens.

- [ ] **Step 6: Commit**

```bash
git add src/components/resume src/app/resume
git commit -m "feat(resume): add header with contact, availability, PDF download"
```

---

### Task 5: `ResumeMetrics` and `ResumeSummary`

**Files:**
- Create: `src/components/resume/ResumeMetrics.tsx`, `src/components/resume/ResumeSummary.tsx`
- Modify: `src/components/ui/AnimatedCounter.tsx`, `src/components/resume/index.ts`, `src/app/resume/page.tsx`

**Interfaces:**
- Consumes: `resumeMetrics`, `resumeSummary`; `AnimatedCounter`.
- Produces: `ResumeMetrics`, `ResumeSummary` — default exports, no props.

- [ ] **Step 1: Give `AnimatedCounter` an optional `className` and guard `value === 0`**

In `src/components/ui/AnimatedCounter.tsx`, add `className?: string` to `AnimatedCounterProps`, accept it in the signature, and replace the hardcoded class string with:

```tsx
className={cn('text-4xl md:text-5xl font-display font-bold text-primary', className)}
```

Import `cn` from `@/lib/utils`. Also guard the divide-by-zero in the effect — change `if (isInView) {` to `if (isInView && value > 0) {`, and add an `else if (isInView) setCount(0)` branch so a zero value still renders.

This keeps every existing call site rendering identically, since `cn` with `undefined` is a no-op.

- [ ] **Step 2: Create `ResumeMetrics`**

Create `src/components/resume/ResumeMetrics.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { resumeMetrics } from '@/lib/data'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function ResumeMetrics() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {resumeMetrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="rounded-xl border border-white/10 bg-background-light/60 p-4"
          >
            <AnimatedCounter
              value={m.value}
              suffix={m.suffix}
              className="!text-2xl md:!text-3xl font-mono"
            />
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-300">
              {m.label}
            </p>
            <p className="mt-1 text-[11px] leading-snug text-gray-500">{m.detail}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create `ResumeSummary`**

Create `src/components/resume/ResumeSummary.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { resumeSummary } from '@/lib/data'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeSummary() {
  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Profile" id="profile" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45 }}
        className="text-[15px] leading-relaxed text-gray-300"
      >
        {resumeSummary}
      </motion.p>
    </section>
  )
}
```

- [ ] **Step 4: Export both and render them**

Add both to `src/components/resume/index.ts` and to `src/app/resume/page.tsx`, ordered: header → metrics → summary.

- [ ] **Step 5: Typecheck and confirm no homepage regression**

Run: `npx tsc --noEmit` (expect exit 0), then load `http://localhost:3000` and confirm the four homepage stat counters still animate and are still large — proving the `AnimatedCounter` change was backward-compatible.

- [ ] **Step 6: Commit**

```bash
git add src/components/ui/AnimatedCounter.tsx src/components/resume src/app/resume
git commit -m "feat(resume): add impact metrics and profile summary"
```

---

### Task 6: `ResumeTimeline` and `ResumeExperience`

**Files:**
- Create: `src/components/resume/ResumeTimeline.tsx`, `src/components/resume/ResumeExperience.tsx`
- Modify: `src/components/resume/index.ts`, `src/app/resume/page.tsx`

**Interfaces:**
- Consumes: `careerTimeline`, `experiences`.
- Produces: `ResumeTimeline`, `ResumeExperience` — default exports, no props.

**Layout requirement:** left-aligned rail. The homepage timeline is right-aligned; do not copy that.

- [ ] **Step 1: Create `ResumeTimeline`**

Create `src/components/resume/ResumeTimeline.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { careerTimeline } from '@/lib/data'
import { cn } from '@/lib/utils'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeTimeline() {
  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Career Progression" id="progression" />
      <ol className="relative ml-2 border-l border-white/10 pl-7">
        {careerTimeline.map((t, i) => (
          <motion.li
            key={t.role}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="relative pb-8 last:pb-0"
          >
            <span
              className={cn(
                'absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-background',
                t.current ? 'bg-primary shadow-glow' : 'bg-gray-600'
              )}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="font-display font-bold text-white">{t.role}</h3>
              <span className="font-mono text-xs text-gray-500">{t.period}</span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{t.note}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
```

- [ ] **Step 2: Create `ResumeExperience`**

Create `src/components/resume/ResumeExperience.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { experiences } from '@/lib/data'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeExperience() {
  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Experience" id="experience" />
      {experiences.map((exp) => (
        <motion.article
          key={`${exp.company}-${exp.title}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className="rounded-2xl border border-white/10 bg-background-light/50 p-6 md:p-7"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
            <div>
              <h3 className="font-display text-lg font-bold text-white">{exp.title}</h3>
              <p className="text-primary font-semibold text-sm mt-0.5">{exp.company}</p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="font-mono text-xs text-gray-500">{exp.period}</span>
              {'employmentType' in exp && exp.employmentType && (
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gray-400">
                  {exp.employmentType}
                </span>
              )}
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">{exp.description}</p>

          <ul className="mt-5 space-y-2.5">
            {exp.achievements.map((a) => (
              <li key={a} className="flex gap-2.5 text-sm leading-relaxed text-gray-300">
                <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{a}</span>
              </li>
            ))}
          </ul>

          {'tech' in exp && Array.isArray(exp.tech) && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {exp.tech.map((t: string) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-gray-400"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </motion.article>
      ))}
    </section>
  )
}
```

- [ ] **Step 3: Export both and render them** in `index.ts` and `page.tsx`, after the summary.

- [ ] **Step 4: Typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0.

- [ ] **Step 5: Visual check**

Screenshot `/resume` at 1440 and 390. Confirm the rail is on the **left**, the current-role dot is green and glowing, dates are monospace, and on mobile the date/pill wraps below the title.

- [ ] **Step 6: Commit**

```bash
git add src/components/resume src/app/resume
git commit -m "feat(resume): add career timeline and experience"
```

---

### Task 7: `ResumeSkills`, `ResumeProjects`, `ResumeEducation`

**Files:**
- Create: `src/components/resume/ResumeSkills.tsx`, `ResumeProjects.tsx`, `ResumeEducation.tsx`
- Modify: `src/components/resume/index.ts`, `src/app/resume/page.tsx`

**Interfaces:**
- Consumes: `skillCategories`, `projects`, `education`, `certifications`.
- Produces: three default exports, no props. `ResumeEducation` returns `null` when both `education` and `certifications` are empty.

- [ ] **Step 1: Create `ResumeSkills`**

Create `src/components/resume/ResumeSkills.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/data'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeSkills() {
  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Technical Skills" id="skills" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="rounded-xl border border-white/10 bg-background-light/50 p-5"
          >
            <div className="flex items-center gap-2 mb-3">
              <cat.icon size={15} style={{ color: cat.accent }} />
              <h3 className="text-sm font-bold text-white">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((s) => (
                <span
                  key={s.name}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[11px] text-gray-400"
                >
                  {s.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Create `ResumeProjects`**

Create `src/components/resume/ResumeProjects.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeProjects() {
  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Key Projects" id="projects" />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: (i % 2) * 0.06 }}
            className="rounded-xl border border-white/10 bg-background-light/50 p-5 break-inside-avoid"
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-display font-bold text-white">{p.title}</h3>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-gray-500">
                {p.category}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-gray-400">{p.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-gray-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 3: Create `ResumeEducation`**

Create `src/components/resume/ResumeEducation.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { education, certifications } from '@/lib/data'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeEducation() {
  if (education.length === 0 && certifications.length === 0) return null

  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Education" id="education" />
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="rounded-xl border border-white/10 bg-background-light/50 p-5"
          >
            <h3 className="font-display font-bold text-white text-[15px]">{e.degree}</h3>
            <p className="mt-1 text-sm text-gray-400">{e.institution}</p>
            <p className="mt-1 font-mono text-xs text-gray-500">{e.period}</p>
            {e.detail && <p className="mt-2 text-[13px] text-gray-400">{e.detail}</p>}
          </motion.div>
        ))}
      </div>

      {certifications.length > 0 && (
        <>
          <h3 className="mt-8 mb-3 text-sm font-bold uppercase tracking-wider text-gray-300">
            Certifications
          </h3>
          <ul className="grid gap-2 md:grid-cols-2">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300"
              >
                <span className="font-semibold text-white">{c.name}</span>
                <span className="ml-2 font-mono text-xs text-gray-500">
                  {c.issuer} · {c.year}
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  )
}
```

- [ ] **Step 4: Export all three and render them** in order: skills → projects → education.

- [ ] **Step 5: Typecheck**

Run: `npx tsc --noEmit`
Expected: exits 0. If `cat.icon` errors, the `skillCategories` type annotation already declares `icon: typeof Code2`, which is a valid component — confirm the JSX usage is `<cat.icon />` with a capitalized binding.

- [ ] **Step 6: Visual check** — confirm 6 skill cards, 8 project cards, 2 education cards, and **no** "Certifications" heading.

- [ ] **Step 7: Commit**

```bash
git add src/components/resume src/app/resume
git commit -m "feat(resume): add skills, projects, education sections"
```

---

### Task 8: `ResumeContact` and final page composition

**Files:**
- Create: `src/components/resume/ResumeContact.tsx`
- Modify: `src/components/resume/index.ts`, `src/app/resume/page.tsx`

- [ ] **Step 1: Create `ResumeContact`**

Create `src/components/resume/ResumeContact.tsx`:

```tsx
'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export default function ResumeContact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="print:hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 text-center"
    >
      <h2 className="font-display text-2xl font-bold text-white">
        Let&apos;s work together
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-sm text-gray-400">
        Open to full-time roles and freelance projects. {availabilityLine()}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
        >
          <Mail size={16} /> Hire Me
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold text-gray-200 hover:border-primary/40 hover:text-primary transition-colors"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold text-gray-200 hover:border-primary/40 hover:text-primary transition-colors"
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </motion.section>
  )
}

function availabilityLine() {
  return `Based in ${personalInfo.location}.`
}
```

- [ ] **Step 2: Compose the final page**

Replace `src/app/resume/page.tsx` entirely:

```tsx
import {
  ResumeHeader,
  ResumeMetrics,
  ResumeSummary,
  ResumeTimeline,
  ResumeExperience,
  ResumeSkills,
  ResumeProjects,
  ResumeEducation,
  ResumeContact,
} from '@/components/resume'
import ResumePrintStyles from '@/components/resume/ResumePrintStyles'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <ResumePrintStyles />
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <ResumeHeader />
        <ResumeMetrics />
        <ResumeSummary />
        <ResumeTimeline />
        <ResumeExperience />
        <ResumeSkills />
        <ResumeProjects />
        <ResumeEducation />
        <ResumeContact />
      </div>
    </main>
  )
}
```

`ResumePrintStyles` is created in Task 9. Until then, comment out its import and usage so the page still builds.

- [ ] **Step 3: Typecheck and visual check.** Run `npx tsc --noEmit` (expect exit 0) and screenshot the full page.

- [ ] **Step 4: Commit**

```bash
git add src/components/resume src/app/resume
git commit -m "feat(resume): add contact CTA and compose full page"
```

---

### Task 9: Print stylesheet

**Files:**
- Create: `src/components/resume/ResumePrintStyles.tsx`
- Modify: `src/components/resume/index.ts`, `src/app/resume/page.tsx`

- [ ] **Step 1: Create the component**

Create `src/components/resume/ResumePrintStyles.tsx`:

```tsx
export default function ResumePrintStyles() {
  return (
    <style>{`
      @media print {
        @page { size: A4; margin: 14mm 14mm; }

        html, body {
          background: #ffffff !important;
          color: #111827 !important;
        }

        main { background: #ffffff !important; }

        h1, h2, h3 { color: #0f172a !important; }

        p, span, li, a { color: #374151 !important; }

        .border-white\\/10,
        .border-white\\/15 { border-color: #e5e7eb !important; }

        [class*="bg-background-light"],
        [class*="bg-white/5"] { background: #f9fafb !important; }

        section { break-inside: avoid; margin-bottom: 18px !important; }

        article { break-inside: avoid; }
      }
    `}</style>
  )
}
```

Note the doubled backslashes — inside a JS template literal, `\\/` produces the `\/` that CSS needs to escape Tailwind's slash in `border-white\/10`.

- [ ] **Step 2: Export it and un-comment its use** in `page.tsx`.

- [ ] **Step 3: Verify print rendering**

```bash
node -e "
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch({executablePath:process.env.CHROME});
const p=await b.newPage();await p.goto('http://localhost:3000/resume',{waitUntil:'networkidle'});
await p.emulateMedia({media:'print'});
await p.pdf({path:'resume-print.pdf',format:'A4'});
await b.close()})()"
```
Open `resume-print.pdf`: background must be white, text dark, no Download/Print buttons, no contact CTA block.

- [ ] **Step 4: Commit**

```bash
git add src/components/resume src/app/resume
git commit -m "feat(resume): add print stylesheet"
```

---

### Task 10: Wire up navigation, redirect `/cv`, delete the old page

**Files:**
- Modify: `src/components/sections/Navbar.tsx`, `next.config.js`, `CLAUDE.md`
- Delete: `src/app/cv/` (all four files)

- [ ] **Step 1: Add the Resume link and Hire Me CTA to the navbar**

In `src/components/sections/Navbar.tsx`, immediately after the `</ul>` that closes the desktop nav list (currently line 100), insert:

```tsx
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/resume"
              className="text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              Resume
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-background hover:opacity-90 transition-opacity"
            >
              Hire Me
            </a>
          </div>
```

Add `personalInfo` to the existing `@/lib/data` import.

Then add the same two links to the mobile menu `<ul>`, after the `navLinks.map(...)` block:

```tsx
                <li>
                  <a href="/resume" className="block py-3 px-4 rounded-lg text-lg font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all duration-300">
                    Resume
                  </a>
                </li>
                <li>
                  <a href={`mailto:${personalInfo.email}`} className="mt-2 block rounded-lg bg-primary py-3 px-4 text-center text-lg font-semibold text-background">
                    Hire Me
                  </a>
                </li>
```

These are plain `<a href="/resume">` links, not `handleNavClick` targets — `handleNavClick` does `document.querySelector(href)` for in-page hash scrolling and would throw on a route path. Do **not** add `/resume` to `navLinks`; that array drives the scroll-spy and expects hash hrefs.

- [ ] **Step 2: Redirect `/cv` → `/resume`**

In `next.config.js`, add to `nextConfig`:

```js
  async redirects() {
    return [{ source: '/cv', destination: '/resume', permanent: true }]
  },
```

- [ ] **Step 3: Delete the old CV page**

```bash
git rm -r src/app/cv
```

- [ ] **Step 4: Update `CLAUDE.md`**

In the "Key Directories" section, replace the `src/app/cv/` bullet with:

```markdown
- `src/app/resume/` — Web resume page. Composes components from `src/components/resume/`, all reading from `src/lib/data.ts`. `/cv` permanently redirects here.
```

Add to "Key Directories":

```markdown
- `src/components/resume/` — One component per resume section, barrel-exported via `index.ts`. Each reads `data.ts` directly and takes no props.
```

In the "Data Flow" section, append:

```markdown
This is enforced: `src/lib/cv-document.tsx` (the PDF) and `src/app/resume/` both import from `data.ts` rather than holding their own copies.
```

- [ ] **Step 5: Verify the redirect and the build**

```bash
curl -s -o /dev/null -w "/cv -> %{http_code} -> %{redirect_url}\n" http://localhost:3000/cv
npm run build
```
Expected: `/cv -> 308 -> http://localhost:3000/resume`, and the build passes.

Note: `next.config.js` changes require a dev-server restart to take effect.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat(resume): link resume in nav, redirect /cv, remove old CV page"
```

---

### Task 11: Full verification pass

**Files:** none modified unless a defect is found.

- [ ] **Step 1: Clean typecheck and production build**

```bash
npx tsc --noEmit && npm run build
```
Expected: both exit 0. Record the actual output — do not assert success without it.

- [ ] **Step 2: Console errors**

Load `/` and `/resume` and collect console messages at `error` level. Expected: none related to this work.

- [ ] **Step 3: Responsive screenshots**

Capture `/resume` at 1440×900, 768×1024, and 390×844. Confirm at every width: no horizontal scroll, no text overflow, metrics grid reflows, project grid collapses to one column on mobile.

- [ ] **Step 4: Confirm the single-source refactor actually holds**

Download the PDF from `/resume` and compare against the page:
- Job title matches `personalInfo.title` ("Full-Stack Developer") in both.
- Experience period reads "Oct 2022 – Present" in both.
- Battle Saga appears in both.
- Education reads "2022 – 2026" in both.

This is the check that proves Task 2 worked. If any differ, the PDF is still holding stale data.

- [ ] **Step 5: Homepage regression check**

Confirm the homepage still shows: 4 animated stat counters at full size, 8 project cards, working section scroll-spy, and a working "Download CV" button.

- [ ] **Step 6: Commit any fixes**

```bash
git add -A
git commit -m "fix(resume): address verification findings"
```

---

## Self-Review

**Spec coverage:** All nine spec sections map to tasks — header (4), metrics (5), summary (5), timeline (6), experience (6), skills (7), projects (7), education (7), contact (8). Data model → Task 1. PDF unification → Task 2. Print → Task 9. Redirect, nav, `CLAUDE.md` → Task 10. Verification → Task 11.

**Deviation from spec, deliberate:** the spec listed `ResumeSectionHeader` among ten components but did not name `ResumePrintStyles`. Print behaviour needed a component to own it rather than polluting `globals.css`, so `ResumePrintStyles.tsx` was added in Task 9. Component count is 11, not 10.

**Known gap accepted:** the spec's `careerTimeline` described three progression steps ("Junior Backend Engineer → Full-Stack / MERN Developer → primary engineer on 7 products"). Only two have documented dates in the source data. Task 1 ships two entries rather than inventing a date for a third. The user can add intermediate milestones later by appending to `careerTimeline`.

**Type consistency:** `ResumeMetric`, `TimelineEntry`, `Education`, `Certification` are defined once in Task 1 and referenced by exact field name in Tasks 5–7. `AnimatedCounter`'s new `className?: string` (Task 5) is the only signature change to existing code, and it is additive.

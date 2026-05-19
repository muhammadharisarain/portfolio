import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from '@react-pdf/renderer'

// ─── Palette — ATS-safe: light sidebar, dark text everywhere ─────────────────
const ACCENT = '#0284c7' // single primary accent (sky-600)
const SB = {
  bg:      '#f1f5f9', // slate-100 — light, ATS-readable
  heading: '#0f172a',
  text:    '#334155',
  muted:   '#64748b',
  accent:  ACCENT,
  divider: '#cbd5e1',
}
const MN = {
  bg:      '#ffffff',
  heading: '#0f172a',
  body:    '#374151',
  muted:   '#6b7280',
  accent:  ACCENT,
  tag:     '#f1f5f9',
  tagText: '#475569',
  divider: '#e2e8f0',
}

const SIDEBAR_W = 190
const s = StyleSheet.create({
  // ── Page ──
  page: {
    flexDirection: 'row',
    fontFamily: 'Helvetica',
    backgroundColor: MN.bg,
  },

  // ── Sidebar ──
  sidebar: {
    width: SIDEBAR_W,
    backgroundColor: SB.bg,
    paddingTop: 24,
    paddingBottom: 24,
    paddingHorizontal: 18,
  },
  sbName: {
    fontSize: 13.5,
    fontFamily: 'Helvetica-Bold',
    color: SB.heading,
    marginBottom: 3,
    lineHeight: 1.2,
  },
  sbNameAccent: {
    width: 26,
    height: 2,
    backgroundColor: SB.accent,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 1,
  },
  sbRole: {
    fontSize: 9,
    color: SB.accent,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 18,
    lineHeight: 1.35,
    letterSpacing: 0.3,
  },
  sbDivider: {
    height: 0.75,
    backgroundColor: SB.divider,
    marginBottom: 10,
  },
  sbSectionLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: SB.accent,
    letterSpacing: 1.3,
    marginBottom: 9,
  },
  sbItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  sbContactItem: {
    marginBottom: 6,
  },
  sbItemLabel: {
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
    color: SB.muted,
    marginBottom: 3,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sbItemText: {
    fontSize: 8,
    color: SB.text,
    lineHeight: 1.4,
  },
  sbLink: {
    fontSize: 8,
    color: SB.accent,
    textDecoration: 'none',
    lineHeight: 1.4,
  },
  sbSkillGroup: { marginBottom: 7 },
  sbSkillGroupLabel: {
    fontSize: 7.5,
    fontFamily: 'Helvetica-Bold',
    color: SB.heading,
    marginBottom: 3,
  },
  sbSkillList: {
    fontSize: 7.5,
    color: SB.text,
    lineHeight: 1.5,
  },

  // ── Main content ──
  main: {
    flex: 1,
    backgroundColor: MN.bg,
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 24,
    paddingRight: 26,
  },
  sectionWrap: { marginBottom: 14 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  sectionBar: {
    width: 3,
    height: 12,
    backgroundColor: MN.accent,
    marginRight: 7,
    borderRadius: 1,
  },
  sectionTitle: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: MN.heading,
    letterSpacing: 0.8,
  },
  divider: {
    height: 0.5,
    backgroundColor: MN.divider,
    marginBottom: 10,
    marginTop: -1,
  },

  // summary
  summary: { fontSize: 9, color: MN.body, lineHeight: 1.6 },

  // experience
  expBlock: { marginBottom: 8 },
  expRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  expJob:     { fontSize: 10, fontFamily: 'Helvetica-Bold', color: MN.heading },
  expDate:    { fontSize: 8, color: MN.muted, fontFamily: 'Helvetica-Oblique', flexShrink: 0, marginLeft: 8 },
  expCompany: {
    fontSize: 9,
    color: MN.accent,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 5,
  },
  bullet:     { flexDirection: 'row', marginBottom: 4 },
  bulletDot:  {
    width: 2.5,
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: MN.accent,
    marginTop: 4.5,
    marginRight: 6,
    flexShrink: 0,
  },
  bulletText: { flex: 1, fontSize: 8.5, color: MN.body, lineHeight: 1.6 },

  // education
  eduBlock:  { marginBottom: 6 },
  eduRow:    { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 1 },
  eduDegree: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', color: MN.heading },
  eduDate:   { fontSize: 7.5, color: MN.muted, fontFamily: 'Helvetica-Oblique', flexShrink: 0, marginLeft: 8 },
  eduInst:   { fontSize: 7.5, color: MN.muted, fontFamily: 'Helvetica-Oblique' },

  // projects
  projBlock: { marginBottom: 9 },
  projRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
  projTitleWrap: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  projDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: MN.accent,
    marginRight: 6,
    flexShrink: 0,
  },
  projTitle:   { fontSize: 9, fontFamily: 'Helvetica-Bold', color: MN.heading },
  projSep:     { fontSize: 8, color: MN.muted, marginHorizontal: 5 },
  projCat:     { fontSize: 8, color: MN.muted, fontFamily: 'Helvetica-Oblique' },
  projDesc:    { fontSize: 8, color: MN.body, lineHeight: 1.6, paddingLeft: 9, marginBottom: 4 },
  projTechRow: { flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 9 },
  projTechChip: {
    backgroundColor: MN.tag,
    borderRadius: 2,
    paddingHorizontal: 5,
    paddingVertical: 2.2,
    marginRight: 3.5,
    marginBottom: 3,
  },
  projTechText: { fontSize: 6.8, color: MN.tagText },

  // ── Footer ──
  footer: {
    position: 'absolute',
    bottom: 14,
    left: SIDEBAR_W + 24,
    right: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: { fontSize: 7, color: '#9ca3af' },
  pageNum: { fontSize: 7, color: '#9ca3af' },
})

// ─── Data ─────────────────────────────────────────────────────────────────────
const cv = {
  name:        'Muhammad Haris Arain',
  title:       'Full-Stack Developer',
  phone:       '+92 335 319 1421',
  email:       'harisarain704@gmail.com',
  location:    'Lahore, Pakistan',
  github:      'muhammadharisarain',
  githubUrl:   'https://github.com/muhammadharisarain',
  linkedin:    'muhammadharisarain',
  linkedinUrl: 'https://linkedin.com/in/muhammadharisarain',

  summary:
    'MERN Stack Specialist and Full-Stack Developer with 4+ years delivering production web platforms across healthcare, fintech, retail, entertainment, and AI-agent domains. Primary engineer on 7 products and contributor on 10+, with 400+ REST/GraphQL endpoints authored. Strong in Node.js, NestJS, React, Next.js (App Router, SSR/ISR), PostgreSQL, MongoDB, and Redis — plus OAuth 2.0, microservices, and AI-augmented workflows on Claude Code and MCP servers.',

  experience: [
    {
      title:   'Full-Stack Developer',
      company: 'XISLABS',
      period:  'Oct 2022 – Present',
      bullets: [
        'Progressed from Junior Backend Engineer (Oct 2022) to Full-Stack / MERN Developer — now primary engineer on 7 production products and contributor on 10+ across healthcare, retail, Web3, entertainment, and AI-agent platforms.',
        'Authored 400+ REST and GraphQL endpoints in Node.js, Express, and NestJS — securing traffic with JWT and OAuth 2.0, and integrating Stripe, Moyasar (Saudi), Twilio, AWS S3, Azure, and Firebase.',
        'Reduced p95 query latency from ~800ms to ~280ms (≈65% improvement) on Fatoraty and Tamam via Redis caching layers and composite PostgreSQL / MongoDB indexing.',
        'Engineered Firmament — a 7-agent AI platform where the "Altitude" orchestrator generates work orders and delegates planning, development, review, and deployment to specialized agents running on Claude Code and MCP servers; integrated Anthropic, OpenAI, and Gemini APIs across client products.',
        'Built real-time multiplayer systems (Socket.io, WebRTC, Redis) — including the Korean-market Karaoke platform that pairs with physical karaoke machines for live pitch scoring and 1-vs-1 / 1-vs-many battle modes.',
        'Shipped React and Next.js (App Router, SSR/ISR) interfaces on Fatoraty, Tamam, Dentbird, and Karaoke — optimizing bundle size via code-splitting and dynamic imports, and measurably lifting Lighthouse scores on key user flows.',
        'Containerized services with Docker and built GitHub Actions CI/CD pipelines across Fatoraty, Tamam, and Karaoke — deploying to AWS (EC2, S3, Lambda), Azure, Digital Ocean, and Vercel.',
        'Mentored 3 junior engineers through structured code reviews and pair programming on a Jira + Kanban workflow with daily stand-ups, cutting onboarding from 4 weeks to 2.',
      ],
    },
  ],

  education: [
    {
      degree:      'BS Computer Science',
      institution: 'Virtual University of Pakistan',
      period:      '2022 – Feb 2026',
    },
    {
      degree:      'Intermediate — Pre-Engineering (FSc)',
      institution: 'Superior College of Science, Hyderabad',
      period:      'Completed 2022',
    },
  ],

  skills: {
    frontend:     ['React.js', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux', 'Framer Motion'],
    backend:      ['Node.js', 'NestJS', 'Express', 'REST APIs', 'GraphQL', 'Socket.io', 'WebRTC', 'Microservices'],
    database:     ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Mongoose'],
    devops:       ['Docker', 'AWS (EC2, S3, Lambda)', 'Azure', 'Digital Ocean', 'Vercel', 'GitHub Actions', 'Nginx', 'Linux'],
    integrations: ['Stripe', 'Moyasar', 'Twilio', 'Firebase', 'OAuth 2.0', 'JWT'],
    ai:           ['Claude Code', 'MCP Servers', 'Anthropic API', 'OpenAI API', 'Gemini', 'Agent Orchestration'],
    workflow:     ['Jest', 'Vitest', 'Agile / Kanban', 'Jira', 'Confluence', 'Git'],
  },

  projects: [
    {
      title:    'Dentbird',
      category: 'Healthcare / Multi-platform SaaS',
      desc:     'Dental workflow SaaS across three roles — clinics, labs, and admin. Clinics place orders with patient info and interactive SVG tooth-chart selection; labs get real-time notifications, prepare solutions from 3D images, and route back for clinic approval before shipping.',
      tech:     ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS'],
    },
    {
      title:    'Firmament',
      category: 'AI Agent Orchestration',
      desc:     '7-agent system orchestrated by "Altitude" — a planning agent that issues work orders to specialized build, review, and deploy agents running on Claude Code and MCP servers for end-to-end feature delivery.',
      tech:     ['Claude Code', 'MCP', 'TypeScript', 'Node.js', 'Anthropic API'],
    },
    {
      title:    'Karaoke System',
      category: 'Entertainment (Korea) — HW + SW',
      desc:     'Companion platform to physical karaoke machines deployed in Korea — captures hardware performance data and renders real-time pitch scoring with 1-vs-1 and 1-vs-many battle modes, powered by Socket.io + Redis live leaderboards.',
      tech:     ['React', 'Node.js', 'WebRTC', 'Socket.io', 'Redis'],
    },
    {
      title:    'Tamam',
      category: 'Form Management',
      desc:     'Dynamic form platform with drag-and-drop builder, conditional logic, workflow automation, and analytics — processing 50K+ monthly submissions.',
      tech:     ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    },
    {
      title:    'Fatoraty',
      category: 'Retail POS',
      desc:     'POS and back-office suite — inventory, live transactions, thermal-printer receipts, and multi-branch analytics — deployed across 5+ retail locations.',
      tech:     ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux'],
    },
    {
      title:    'Wayfellow',
      category: 'Social / Networking',
      desc:     'Professional networking platform with job posts, events, real-time DMs, and a feed — 10K+ users on a Node.js + Socket.io backend with AWS media pipeline.',
      tech:     ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    },
    {
      title:    'Campaign Estimator',
      category: 'Marketing Analytics',
      desc:     'Marketing tool forecasting campaign reach, conversions, and ROI — used by 3 enterprise clients to plan 100+ campaigns.',
      tech:     ['React', 'TypeScript', 'Node.js', 'Chart.js'],
    },
  ],
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function SbSection({ label }: { label: string }) {
  return (
    <View style={{ marginBottom: 9 }}>
      <View style={s.sbDivider} />
      <Text style={s.sbSectionLabel}>{label}</Text>
    </View>
  )
}

function Section({ title }: { title: string }) {
  return (
    <View style={s.sectionHeader}>
      <View style={s.sectionBar} />
      <Text style={s.sectionTitle}>{title}</Text>
    </View>
  )
}

// ─── Document ─────────────────────────────────────────────────────────────────
export function CVDocument() {
  return (
    <Document
      title="Muhammad Haris Arain — CV"
      author="Muhammad Haris Arain"
      subject="Professional Curriculum Vitae"
    >
      <Page size="A4" style={s.page}>

        {/* ── Sidebar ── */}
        <View style={s.sidebar}>

          {/* Name + title */}
          <Text style={s.sbName}>{cv.name}</Text>
          <View style={s.sbNameAccent} />
          <Text style={s.sbRole}>{cv.title}</Text>

          {/* CONTACT */}
          <SbSection label="CONTACT" />
          <View style={s.sbContactItem}>
            <Text style={s.sbItemLabel}>Phone</Text>
            <Text style={s.sbItemText}>{cv.phone}</Text>
          </View>
          <View style={s.sbContactItem}>
            <Text style={s.sbItemLabel}>Email</Text>
            <Text style={s.sbItemText}>{cv.email}</Text>
          </View>
          <View style={s.sbContactItem}>
            <Text style={s.sbItemLabel}>Location</Text>
            <Text style={s.sbItemText}>{cv.location}</Text>
          </View>
          <View style={s.sbContactItem}>
            <Text style={s.sbItemLabel}>GitHub</Text>
            <Link src={cv.githubUrl} style={s.sbLink}>
              {cv.github}
            </Link>
          </View>
          <View style={s.sbContactItem}>
            <Text style={s.sbItemLabel}>LinkedIn</Text>
            <Link src={cv.linkedinUrl} style={s.sbLink}>
              {cv.linkedin}
            </Link>
          </View>

          {/* SKILLS */}
          <SbSection label="SKILLS" />

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Frontend</Text>
            <Text style={s.sbSkillList}>{cv.skills.frontend.join(', ')}</Text>
          </View>

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Backend</Text>
            <Text style={s.sbSkillList}>{cv.skills.backend.join(', ')}</Text>
          </View>

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Database</Text>
            <Text style={s.sbSkillList}>{cv.skills.database.join(', ')}</Text>
          </View>

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Cloud & DevOps</Text>
            <Text style={s.sbSkillList}>{cv.skills.devops.join(', ')}</Text>
          </View>

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Integrations & Auth</Text>
            <Text style={s.sbSkillList}>{cv.skills.integrations.join(', ')}</Text>
          </View>

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>AI Engineering</Text>
            <Text style={s.sbSkillList}>{cv.skills.ai.join(', ')}</Text>
          </View>

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Testing & Workflow</Text>
            <Text style={s.sbSkillList}>{cv.skills.workflow.join(', ')}</Text>
          </View>

          {/* EDUCATION (moved to sidebar to save main column space) */}
          <SbSection label="EDUCATION" />
          {cv.education.map((edu, i) => (
            <View key={i} style={{ marginBottom: 8 }}>
              <Text style={{ fontSize: 7.5, fontFamily: 'Helvetica-Bold', color: SB.heading, lineHeight: 1.4, marginBottom: 2 }}>
                {edu.degree}
              </Text>
              <Text style={{ fontSize: 7, color: SB.muted, lineHeight: 1.4, fontFamily: 'Helvetica-Oblique', marginBottom: 1 }}>
                {edu.institution}
              </Text>
              <Text style={{ fontSize: 6.5, color: SB.muted, lineHeight: 1.4 }}>
                {edu.period}
              </Text>
            </View>
          ))}
        </View>

        {/* ── Main content ── */}
        <View style={s.main}>

          {/* PROFESSIONAL SUMMARY */}
          <View style={s.sectionWrap}>
            <Section title="Professional Summary" />
            <View style={s.divider} />
            <Text style={s.summary}>{cv.summary}</Text>
          </View>

          {/* WORK EXPERIENCE */}
          <View style={s.sectionWrap}>
            <Section title="Work Experience" />
            <View style={s.divider} />
            {cv.experience.map((exp, i) => (
              <View key={i} style={s.expBlock}>
                <View style={s.expRow}>
                  <Text style={s.expJob}>{exp.title}</Text>
                  <Text style={s.expDate}>{exp.period}</Text>
                </View>
                <Text style={s.expCompany}>{exp.company}</Text>
                {exp.bullets.map((b, j) => (
                  <View key={j} style={s.bullet}>
                    <View style={s.bulletDot} />
                    <Text style={s.bulletText}>{b}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>

          {/* FEATURED PROJECTS */}
          <View style={s.sectionWrap}>
            <Section title="Key Projects (at XISLABS)" />
            <View style={s.divider} />
            {cv.projects.map((proj, i) => (
              <View key={i} style={s.projBlock}>
                <View style={s.projRow}>
                  <View style={s.projTitleWrap}>
                    <View style={s.projDot} />
                    <Text style={s.projTitle}>{proj.title}</Text>
                    <Text style={s.projSep}>·</Text>
                    <Text style={s.projCat}>{proj.category}</Text>
                  </View>
                </View>
                <Text style={s.projDesc}>{proj.desc}</Text>
                <View style={s.projTechRow}>
                  {proj.tech.map((t) => (
                    <View key={t} style={s.projTechChip}>
                      <Text style={s.projTechText}>{t}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Footer with page number */}
        <View style={s.footer} fixed>
          <Text style={s.footerText}>Muhammad Haris Arain — Curriculum Vitae</Text>
          <Text
            style={s.pageNum}
            render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
          />
        </View>

      </Page>
    </Document>
  )
}

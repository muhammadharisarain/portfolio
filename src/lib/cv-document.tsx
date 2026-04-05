import React from 'react'
import {
  Document,
  Page,
  Text,
  View,
  Link,
  StyleSheet,
} from '@react-pdf/renderer'

// ─── Palette ──────────────────────────────────────────────────────────────────
const SB = {
  bg:     '#0f172a',
  accent: '#38bdf8',
  text:   '#e2e8f0',
  muted:  '#94a3b8',
  border: '#1e3a52',
}
const MN = {
  bg:      '#ffffff',
  heading: '#0f172a',
  body:    '#374151',
  muted:   '#6b7280',
  company: '#2563eb',
  tag:     '#f1f5f9',
  tagText: '#475569',
  divider: '#e5e7eb',
}

const SIDEBAR_W = 175
const s = StyleSheet.create({
  // ── Page ──
  page: {
    backgroundColor: SB.bg,
    flexDirection: 'row',
    fontFamily: 'Helvetica',
  },

  // ── Sidebar ──
  sidebar: {
    width: SIDEBAR_W,
    paddingTop: 36,
    paddingBottom: 36,
    paddingHorizontal: 20,
  },
  sbName: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
    color: SB.text,
    marginBottom: 4,
    lineHeight: 1.2,
  },
  sbRole: {
    fontSize: 9,
    color: SB.accent,
    marginBottom: 20,
    lineHeight: 1.4,
  },
  sbDivider: {
    height: 1,
    backgroundColor: SB.border,
    marginBottom: 14,
  },
  sbSectionLabel: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: SB.accent,
    letterSpacing: 1.5,
    marginBottom: 10,
  },
  sbItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  sbItemDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: SB.accent,
    marginTop: 4,
    marginRight: 7,
    flexShrink: 0,
  },
  sbItemText: {
    fontSize: 8,
    color: SB.text,
    lineHeight: 1.5,
    flex: 1,
  },
  sbItemMuted: {
    fontSize: 7.5,
    color: SB.muted,
    lineHeight: 1.5,
    flex: 1,
  },
  sbSkillGroup: { marginBottom: 11 },
  sbSkillGroupLabel: {
    fontSize: 8,
    fontFamily: 'Helvetica-Bold',
    color: SB.text,
    marginBottom: 5,
  },
  sbSkillChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  sbChip: {
    backgroundColor: '#1e3a52',
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 4,
  },
  sbChipText: {
    fontSize: 7,
    color: SB.text,
  },

  // ── Main content ──
  main: {
    flex: 1,
    backgroundColor: MN.bg,
    paddingTop: 36,
    paddingBottom: 36,
    paddingLeft: 26,
    paddingRight: 30,
  },
  mainSectionWrap: { marginBottom: 18 },
  mainSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 11,
  },
  mainSectionBar: {
    width: 3,
    height: 13,
    backgroundColor: SB.accent,
    marginRight: 7,
    borderRadius: 2,
  },
  mainSectionTitle: {
    fontSize: 9.5,
    fontFamily: 'Helvetica-Bold',
    color: MN.heading,
    letterSpacing: 1.2,
  },
  mainDivider: {
    height: 1,
    backgroundColor: MN.divider,
    marginBottom: 14,
    marginTop: -4,
  },

  // summary
  summary: { fontSize: 8.5, color: MN.body, lineHeight: 1.7 },

  // experience
  expBlock: { marginBottom: 12 },
  expRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  expJob:     { fontSize: 10, fontFamily: 'Helvetica-Bold', color: MN.heading },
  expDate:    { fontSize: 8, color: MN.muted, fontFamily: 'Helvetica-Oblique', flexShrink: 0, marginLeft: 8 },
  expCompany: {
    fontSize: 8.5,
    color: MN.company,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 6,
  },
  bullet:     { flexDirection: 'row', marginBottom: 3 },
  bulletDot:  {
    width: 3,
    height: 3,
    borderRadius: 2,
    backgroundColor: SB.accent,
    marginTop: 4.5,
    marginRight: 7,
    flexShrink: 0,
  },
  bulletText: { flex: 1, fontSize: 8.5, color: MN.body, lineHeight: 1.55 },

  // education
  eduBlock:  { marginBottom: 9 },
  eduRow:    { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 1 },
  eduDegree: { fontSize: 9.5, fontFamily: 'Helvetica-Bold', color: MN.heading },
  eduDate:   { fontSize: 8, color: MN.muted, fontFamily: 'Helvetica-Oblique', flexShrink: 0, marginLeft: 8 },
  eduInst:   { fontSize: 8.5, color: MN.muted, fontFamily: 'Helvetica-Oblique' },

  // ── Page 2 ──
  p2Sidebar: {
    width: SIDEBAR_W,
    paddingTop: 32,
    paddingBottom: 36,
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  p2SbName: {
    fontSize: 11,
    fontFamily: 'Helvetica-Bold',
    color: SB.text,
    marginBottom: 4,
  },
  p2SbLabel: {
    fontSize: 7,
    color: SB.accent,
    letterSpacing: 1.5,
    marginBottom: 16,
  },

  // projects grid
  p2Main: {
    flex: 1,
    backgroundColor: MN.bg,
    paddingTop: 32,
    paddingBottom: 36,
    paddingLeft: 26,
    paddingRight: 30,
  },
  projGrid: { flexDirection: 'row', flexWrap: 'wrap' },
  projBlock: { width: '50%', paddingRight: 16, marginBottom: 16 },
  projHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  projTitleWrap: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  projDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: SB.accent,
    marginRight: 6,
    flexShrink: 0,
  },
  projTitle:   { fontSize: 9.5, fontFamily: 'Helvetica-Bold', color: MN.heading },
  projCat:     { fontSize: 7.5, color: MN.muted, fontFamily: 'Helvetica-Oblique', flexShrink: 0, marginLeft: 6 },
  projDesc:    { fontSize: 8, color: MN.body, lineHeight: 1.55, marginBottom: 5, paddingLeft: 11 },
  projTechRow: { flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 11 },
  projTechChip: {
    backgroundColor: MN.tag,
    borderRadius: 3,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 4,
    marginBottom: 3,
  },
  projTechText: { fontSize: 7, color: MN.tagText },

  // ── Footer ──
  footer: {
    position: 'absolute',
    bottom: 16,
    left: SIDEBAR_W + 26,
    right: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: { fontSize: 7, color: '#9ca3af' },
})

// ─── Data ─────────────────────────────────────────────────────────────────────
const cv = {
  name:        'Muhammad Haris Arain',
  title:       'Backend & MERN Stack Engineer',
  email:       'harisarain704@gmail.com',
  location:    'Lahore, Pakistan',
  github:      'github.com/muhammadharisarain',
  githubUrl:   'https://github.com/muhammadharisarain',
  linkedin:    'linkedin.com/in/muhammadharisarain',
  linkedinUrl: 'https://linkedin.com/in/muhammadharisarain',

  summary:
    'Backend & MERN Stack Engineer with 4+ years of hands-on experience architecting and shipping scalable, production-grade web applications. Deep expertise across Node.js, NestJS, Express, React, and Next.js, with strong command of both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) data modelling. Proven track record delivering 15+ end-to-end products across social platforms, fintech/POS, Web3, entertainment, and analytics — from API design and database architecture to CI/CD deployment on AWS, Docker, and Vercel. Comfortable owning features end-to-end in Agile teams and collaborating directly with product, design, and client stakeholders.',

  experience: [
    {
      title:   'Full Stack / Backend & MERN Engineer',
      company: 'XISLABS',
      period:  '2021 – Present',
      bullets: [
        'Architected and shipped 15+ full-stack products using NestJS, Express, Node.js, React, and Next.js — owning features end-to-end from API design through UI delivery and production deployment.',
        'Designed normalised PostgreSQL schemas and denormalised MongoDB collections tuned for high-throughput read/write workloads; added strategic indexes and aggregation pipelines that cut p95 query times by 40-60%.',
        'Built RESTful and GraphQL APIs integrated with Stripe, AWS S3, Twilio, Firebase, and blockchain/Web3 providers — with JWT auth, role-based access control, and request validation via Zod / class-validator.',
        'Implemented real-time features using Socket.io and WebRTC powering live messaging, multiplayer gaming, and karaoke battle modes for thousands of concurrent users.',
        'Containerised services with Docker and set up CI/CD pipelines on GitHub Actions, deploying to AWS EC2/S3 and Vercel with zero-downtime releases.',
        'Collaborated with designers to translate Figma specs into pixel-perfect, accessible React interfaces using Tailwind CSS, Framer Motion, and Redux Toolkit.',
        'Mentored junior developers through code reviews, pair programming, and internal knowledge sharing on system design and testing practices.',
      ],
    },
  ],

  education: [
    {
      degree:      "Bachelor's in Computer Science (BS-CS)",
      institution: 'Virtual University of Pakistan',
      period:      '2022 – 2026',
    },
    {
      degree:      'Intermediate — Pre-Engineering (FSc)',
      institution: 'Superior College of Science, Hyderabad',
      period:      'Completed 2022',
    },
  ],

  skills: {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'Framer Motion'],
    backend:  ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'GraphQL', 'Socket.io', 'WebRTC', 'Redis', 'JWT'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma', 'Mongoose'],
    tools:    ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Postman', 'Linux', 'Nginx'],
  },

  // Top 6 skills for page-2 sidebar ATS repeat
  topSkills: ['Node.js', 'NestJS', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS'],

  projects: [
    {
      title:    'Wayfellow',
      category: 'Social Platform',
      desc:     'Professional networking platform combining LinkedIn and Twitter — job posts, events, real-time DMs, and a professional feed. Built on a scalable Node.js backend with Socket.io messaging and an AWS-hosted media pipeline.',
      tech:     ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux', 'AWS'],
    },
    {
      title:    'Fatoraty',
      category: 'Business / POS',
      desc:     'Comprehensive Point-of-Sale and back-office suite handling inventory, transactions, thermal-printer receipts, and multi-branch sales analytics with offline-first capability.',
      tech:     ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux'],
    },
    {
      title:    'Tamam',
      category: 'Form Management',
      desc:     'Dynamic form management platform with a drag-and-drop builder, conditional logic, workflow automation, role-based approvals, and real-time analytics on submissions.',
      tech:     ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    },
    {
      title:    'Battle Saga',
      category: 'Web3 / Blockchain',
      desc:     'Web3 gaming platform with on-chain battles, NFT rewards, and in-game token economy — Ethereum smart contracts plus a React + Web3.js frontend wrapping wallet flows.',
      tech:     ['React', 'Solidity', 'Web3.js', 'Ethereum', 'NFT'],
    },
    {
      title:    'Campaign Estimator',
      category: 'Business Analytics',
      desc:     'Marketing analytics tool that forecasts campaign reach, CTA conversion, and ROI using historical data and lightweight ML models, surfacing optimisation recommendations.',
      tech:     ['React', 'TypeScript', 'Node.js', 'Chart.js', 'ML'],
    },
    {
      title:    'Karaoke System',
      category: 'Entertainment',
      desc:     'Karaoke platform with 1-on-1 and 1-to-many battle modes, AI pitch scoring, prize competitions, and live leaderboards powered by WebRTC and Redis.',
      tech:     ['React', 'Node.js', 'WebRTC', 'Socket.io', 'Redis'],
    },
  ],
}

// ─── Small helpers ────────────────────────────────────────────────────────────
function SbSection({ label }: { label: string }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <View style={s.sbDivider} />
      <Text style={s.sbSectionLabel}>{label}</Text>
    </View>
  )
}

function MainSection({ title }: { title: string }) {
  return (
    <View style={s.mainSectionHeader}>
      <View style={s.mainSectionBar} />
      <Text style={s.mainSectionTitle}>{title}</Text>
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
      {/* ══════════════════════ PAGE 1 ══════════════════════ */}
      <Page size="A4" style={s.page}>

        {/* ── Sidebar ── */}
        <View style={s.sidebar}>

          {/* Name + title */}
          <Text style={s.sbName}>{cv.name}</Text>
          <Text style={s.sbRole}>{cv.title}</Text>

          {/* CONTACTS */}
          <SbSection label="CONTACT" />
          <View style={s.sbItem}>
            <View style={s.sbItemDot} />
            <Text style={s.sbItemText}>{cv.email}</Text>
          </View>
          <View style={s.sbItem}>
            <View style={s.sbItemDot} />
            <Text style={s.sbItemText}>{cv.location}</Text>
          </View>
          <View style={{ marginBottom: 6 }}>
            <View style={s.sbItem}>
              <View style={s.sbItemDot} />
              <Link src={cv.githubUrl} style={[s.sbItemMuted, { textDecoration: 'none' }]}>
                {cv.github}
              </Link>
            </View>
            <View style={s.sbItem}>
              <View style={s.sbItemDot} />
              <Link src={cv.linkedinUrl} style={[s.sbItemMuted, { textDecoration: 'none' }]}>
                {cv.linkedin}
              </Link>
            </View>
          </View>

          {/* SKILLS */}
          <SbSection label="SKILLS" />

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Frontend</Text>
            <View style={s.sbSkillChips}>
              {cv.skills.frontend.map((sk) => (
                <View key={sk} style={s.sbChip}>
                  <Text style={s.sbChipText}>{sk}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Backend</Text>
            <View style={s.sbSkillChips}>
              {cv.skills.backend.map((sk) => (
                <View key={sk} style={s.sbChip}>
                  <Text style={s.sbChipText}>{sk}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Database</Text>
            <View style={s.sbSkillChips}>
              {cv.skills.database.map((sk) => (
                <View key={sk} style={s.sbChip}>
                  <Text style={s.sbChipText}>{sk}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={s.sbSkillGroup}>
            <Text style={s.sbSkillGroupLabel}>Tools</Text>
            <View style={s.sbSkillChips}>
              {cv.skills.tools.map((sk) => (
                <View key={sk} style={s.sbChip}>
                  <Text style={s.sbChipText}>{sk}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* ── Main content ── */}
        <View style={s.main}>

          {/* PROFESSIONAL SUMMARY */}
          <View style={s.mainSectionWrap}>
            <MainSection title="PROFESSIONAL SUMMARY" />
            <View style={s.mainDivider} />
            <Text style={s.summary}>{cv.summary}</Text>
          </View>

          {/* WORK EXPERIENCE */}
          <View style={s.mainSectionWrap}>
            <MainSection title="WORK EXPERIENCE" />
            <View style={s.mainDivider} />
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

          {/* EDUCATION */}
          <View style={s.mainSectionWrap}>
            <MainSection title="EDUCATION" />
            <View style={s.mainDivider} />
            {cv.education.map((edu, i) => (
              <View key={i} style={s.eduBlock}>
                <View style={s.eduRow}>
                  <Text style={s.eduDegree}>{edu.degree}</Text>
                  <Text style={s.eduDate}>{edu.period}</Text>
                </View>
                <Text style={s.eduInst}>{edu.institution}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={s.footer}>
          <Text style={s.footerText}>Muhammad Haris Arain — Curriculum Vitae</Text>
          <Text style={s.footerText}>1 / 2</Text>
        </View>
      </Page>

      {/* ══════════════════════ PAGE 2 — PROJECTS ══════════════════════ */}
      <Page size="A4" style={s.page}>

        {/* Sidebar */}
        <View style={s.p2Sidebar}>
          <Text style={s.p2SbName}>{cv.name}</Text>
          <Text style={s.p2SbLabel}>PROJECTS</Text>
          <View style={{ height: 1, backgroundColor: SB.border, marginBottom: 16 }} />

          {/* ATS-friendly skill repeat */}
          <Text style={[s.sbSectionLabel, { marginBottom: 8 }]}>KEY SKILLS</Text>
          <View style={s.sbSkillChips}>
            {cv.topSkills.map((sk) => (
              <View key={sk} style={s.sbChip}>
                <Text style={s.sbChipText}>{sk}</Text>
              </View>
            ))}
          </View>

          <View style={{ height: 1, backgroundColor: SB.border, marginTop: 16, marginBottom: 16 }} />
          <Link src={cv.githubUrl} style={{ fontSize: 8, color: SB.accent, textDecoration: 'none', marginBottom: 6 }}>
            {cv.github}
          </Link>
          <Text style={{ fontSize: 8, color: SB.muted }}>{cv.email}</Text>
        </View>

        {/* Projects grid */}
        <View style={s.p2Main}>
          <MainSection title="FEATURED PROJECTS" />
          <View style={{ height: 1, backgroundColor: MN.divider, marginBottom: 16, marginTop: -4 }} />

          <View style={s.projGrid}>
            {cv.projects.map((proj, i) => (
              <View key={i} style={s.projBlock}>
                <View style={s.projHeader}>
                  <View style={s.projTitleWrap}>
                    <View style={s.projDot} />
                    <Text style={s.projTitle}>{proj.title}</Text>
                  </View>
                  <Text style={s.projCat}>{proj.category}</Text>
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

        <View style={s.footer}>
          <Text style={s.footerText}>{cv.email}  ·  {cv.github}</Text>
          <Text style={s.footerText}>2 / 2</Text>
        </View>
      </Page>
    </Document>
  )
}

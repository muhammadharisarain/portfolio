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

const SIDEBAR_W = 168
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
    paddingTop: 28,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  sbName: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: SB.heading,
    marginBottom: 2,
    lineHeight: 1.2,
  },
  sbRole: {
    fontSize: 8,
    color: SB.accent,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 14,
    lineHeight: 1.3,
  },
  sbDivider: {
    height: 0.75,
    backgroundColor: SB.divider,
    marginBottom: 10,
  },
  sbSectionLabel: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: SB.accent,
    letterSpacing: 1.2,
    marginBottom: 7,
  },
  sbItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  sbItemLabel: {
    fontSize: 6.5,
    fontFamily: 'Helvetica-Bold',
    color: SB.muted,
    marginBottom: 1,
  },
  sbItemText: {
    fontSize: 7.5,
    color: SB.text,
    lineHeight: 1.4,
    flex: 1,
  },
  sbLink: {
    fontSize: 7.5,
    color: SB.accent,
    textDecoration: 'none',
    lineHeight: 1.4,
    flex: 1,
  },
  sbSkillGroup: { marginBottom: 8 },
  sbSkillGroupLabel: {
    fontSize: 7,
    fontFamily: 'Helvetica-Bold',
    color: SB.heading,
    marginBottom: 3,
  },
  sbSkillChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  sbChip: {
    backgroundColor: '#ffffff',
    borderRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 1.5,
    marginRight: 3,
    marginBottom: 3,
    borderWidth: 0.5,
    borderColor: SB.divider,
  },
  sbChipText: {
    fontSize: 6.5,
    color: SB.text,
  },

  // ── Main content ──
  main: {
    flex: 1,
    backgroundColor: MN.bg,
    paddingTop: 28,
    paddingBottom: 24,
    paddingLeft: 22,
    paddingRight: 24,
  },
  sectionWrap: { marginBottom: 12 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  sectionBar: {
    width: 3,
    height: 11,
    backgroundColor: MN.accent,
    marginRight: 6,
    borderRadius: 1,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: MN.heading,
    letterSpacing: 0.8,
  },
  divider: {
    height: 0.5,
    backgroundColor: MN.divider,
    marginBottom: 8,
    marginTop: -2,
  },

  // summary
  summary: { fontSize: 8, color: MN.body, lineHeight: 1.65 },

  // experience
  expBlock: { marginBottom: 8 },
  expRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  expJob:     { fontSize: 9, fontFamily: 'Helvetica-Bold', color: MN.heading },
  expDate:    { fontSize: 7.5, color: MN.muted, fontFamily: 'Helvetica-Oblique', flexShrink: 0, marginLeft: 8 },
  expCompany: {
    fontSize: 8,
    color: MN.accent,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 4,
  },
  bullet:     { flexDirection: 'row', marginBottom: 2.5 },
  bulletDot:  {
    width: 2.5,
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: MN.accent,
    marginTop: 4,
    marginRight: 5,
    flexShrink: 0,
  },
  bulletText: { flex: 1, fontSize: 7.5, color: MN.body, lineHeight: 1.5 },

  // education
  eduBlock:  { marginBottom: 6 },
  eduRow:    { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 1 },
  eduDegree: { fontSize: 8.5, fontFamily: 'Helvetica-Bold', color: MN.heading },
  eduDate:   { fontSize: 7.5, color: MN.muted, fontFamily: 'Helvetica-Oblique', flexShrink: 0, marginLeft: 8 },
  eduInst:   { fontSize: 7.5, color: MN.muted, fontFamily: 'Helvetica-Oblique' },

  // projects (compact list for single-page)
  projBlock: { marginBottom: 7 },
  projRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  projTitleWrap: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  projDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: MN.accent,
    marginRight: 5,
    flexShrink: 0,
  },
  projTitle:   { fontSize: 8, fontFamily: 'Helvetica-Bold', color: MN.heading },
  projCat:     { fontSize: 6.5, color: MN.muted, fontFamily: 'Helvetica-Oblique', flexShrink: 0, marginLeft: 6 },
  projDesc:    { fontSize: 7, color: MN.body, lineHeight: 1.5, paddingLeft: 8, marginBottom: 2 },
  projTechRow: { flexDirection: 'row', flexWrap: 'wrap', paddingLeft: 8 },
  projTechChip: {
    backgroundColor: MN.tag,
    borderRadius: 2,
    paddingHorizontal: 4,
    paddingVertical: 1.5,
    marginRight: 3,
    marginBottom: 2,
  },
  projTechText: { fontSize: 6, color: MN.tagText },

  // ── Footer ──
  footer: {
    position: 'absolute',
    bottom: 14,
    left: SIDEBAR_W + 22,
    right: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: { fontSize: 6.5, color: '#9ca3af' },
})

// ─── Data ─────────────────────────────────────────────────────────────────────
const cv = {
  name:        'Muhammad Haris Arain',
  title:       'Full Stack Engineer',
  phone:       '+92 335 319 1421',
  email:       'harisarain704@gmail.com',
  location:    'Lahore, Pakistan',
  github:      'muhammadharisarain',
  githubUrl:   'https://github.com/muhammadharisarain',
  linkedin:    'muhammadharisarain',
  linkedinUrl: 'https://linkedin.com/in/muhammadharisarain',

  summary:
    'Full Stack Engineer with 4+ years of professional experience shipping scalable, production-grade web applications at XISLABS. Deep expertise across Node.js, NestJS, Express, React, and Next.js with strong SQL and NoSQL data modelling. Delivered 15+ end-to-end products across social, fintech, Web3, and entertainment domains.',

  experience: [
    {
      title:   'Full Stack Engineer',
      company: 'XISLABS',
      period:  '2021 – Present',
      bullets: [
        'Architected and shipped 15+ full-stack products using NestJS, Express, React, and Next.js — owning features end-to-end from API design through UI delivery and production deployment.',
        'Designed PostgreSQL schemas and MongoDB collections tuned for high-throughput workloads; added strategic indexes and aggregation pipelines that cut p95 query times by 40–60%.',
        'Built RESTful and GraphQL APIs integrated with Stripe, AWS S3, Twilio, Firebase, and blockchain providers — with JWT auth, RBAC, and request validation via Zod / class-validator.',
        'Implemented real-time features using Socket.io and WebRTC powering live messaging, multiplayer gaming, and karaoke battle modes for thousands of concurrent users.',
        'Containerised services with Docker and set up CI/CD on GitHub Actions, deploying to AWS EC2/S3 and Vercel with zero-downtime releases.',
        'Translated Figma specs into pixel-perfect, accessible React interfaces using Tailwind CSS, Framer Motion, and Redux Toolkit.',
        'Mentored 3+ junior developers through code reviews and pair programming, reducing average onboarding time from 4 weeks to 2.',
      ],
    },
  ],

  education: [
    {
      degree:      "BS Computer Science (In Progress)",
      institution: 'Virtual University of Pakistan',
      period:      '2022 – Expected 2026',
    },
    {
      degree:      'Intermediate — Pre-Engineering (FSc)',
      institution: 'Superior College of Science, Hyderabad',
      period:      'Completed 2022',
    },
  ],

  skills: {
    frontend: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux'],
    backend:  ['Node.js', 'Express', 'NestJS', 'REST APIs', 'GraphQL', 'Socket.io', 'WebRTC', 'Redis'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Prisma', 'Mongoose'],
    devops:   ['Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Nginx', 'Linux', 'Git'],
  },

  projects: [
    {
      title:    'Wayfellow',
      category: 'Social Platform',
      desc:     'Professional networking platform with job posts, events, real-time DMs, and a feed — serving 10K+ users on a Node.js + Socket.io backend with AWS media pipeline.',
      tech:     ['React', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
    },
    {
      title:    'Fatoraty',
      category: 'Business / POS',
      desc:     'POS and back-office suite handling inventory, transactions, thermal-printer receipts, and multi-branch analytics — deployed across 5+ retail locations.',
      tech:     ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux'],
    },
    {
      title:    'Tamam',
      category: 'Form Management',
      desc:     'Dynamic form platform with drag-and-drop builder, conditional logic, workflow automation, and analytics processing 50K+ monthly submissions.',
      tech:     ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    },
    {
      title:    'Battle Saga',
      category: 'Web3 / Blockchain',
      desc:     'Web3 gaming platform with on-chain battles, NFT rewards, and token economy — 2K+ active players on Ethereum smart contracts.',
      tech:     ['React', 'Solidity', 'Web3.js', 'Ethereum'],
    },
    {
      title:    'Campaign Estimator',
      category: 'Analytics',
      desc:     'Marketing tool forecasting campaign reach, conversion, and ROI — used by 3 enterprise clients to plan 100+ campaigns.',
      tech:     ['React', 'TypeScript', 'Node.js', 'Chart.js'],
    },
    {
      title:    'Karaoke System',
      category: 'Entertainment',
      desc:     'Karaoke platform with battle modes, AI pitch scoring, and live leaderboards — 5K+ users in Korean and Japanese markets.',
      tech:     ['React', 'Node.js', 'WebRTC', 'Socket.io', 'Redis'],
    },
  ],
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function SbSection({ label }: { label: string }) {
  return (
    <View style={{ marginBottom: 8 }}>
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
          <Text style={s.sbRole}>{cv.title}</Text>

          {/* CONTACT */}
          <SbSection label="CONTACT" />
          <View style={{ marginBottom: 3 }}>
            <Text style={s.sbItemLabel}>Phone</Text>
            <Text style={s.sbItemText}>{cv.phone}</Text>
          </View>
          <View style={{ marginBottom: 3 }}>
            <Text style={s.sbItemLabel}>Email</Text>
            <Text style={s.sbItemText}>{cv.email}</Text>
          </View>
          <View style={{ marginBottom: 3 }}>
            <Text style={s.sbItemLabel}>Location</Text>
            <Text style={s.sbItemText}>{cv.location}</Text>
          </View>
          <View style={{ marginBottom: 3 }}>
            <Text style={s.sbItemLabel}>GitHub</Text>
            <Link src={cv.githubUrl} style={s.sbLink}>
              {cv.github}
            </Link>
          </View>
          <View style={{ marginBottom: 6 }}>
            <Text style={s.sbItemLabel}>LinkedIn</Text>
            <Link src={cv.linkedinUrl} style={s.sbLink}>
              {cv.linkedin}
            </Link>
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
            <Text style={s.sbSkillGroupLabel}>DevOps & Tools</Text>
            <View style={s.sbSkillChips}>
              {cv.skills.devops.map((sk) => (
                <View key={sk} style={s.sbChip}>
                  <Text style={s.sbChipText}>{sk}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* EDUCATION (moved to sidebar to save main column space) */}
          <SbSection label="EDUCATION" />
          {cv.education.map((edu, i) => (
            <View key={i} style={{ marginBottom: 6 }}>
              <Text style={{ fontSize: 7.5, fontFamily: 'Helvetica-Bold', color: SB.heading, lineHeight: 1.3 }}>
                {edu.degree}
              </Text>
              <Text style={{ fontSize: 7, color: SB.muted, lineHeight: 1.3, fontFamily: 'Helvetica-Oblique' }}>
                {edu.institution}
              </Text>
              <Text style={{ fontSize: 6.5, color: SB.muted, lineHeight: 1.3 }}>
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

        {/* Footer */}
        <View style={s.footer}>
          <Text style={s.footerText}>Muhammad Haris Arain — Curriculum Vitae</Text>
          <Text style={s.footerText}>Page 1 of 1</Text>
        </View>
      </Page>
    </Document>
  )
}

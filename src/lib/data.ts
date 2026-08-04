import { Code2, Server, Wrench, Database, Cloud, Bot } from 'lucide-react'

export const personalInfo = {
  name: 'Muhammad Haris Arain',
  title: 'Full-Stack Developer',
  subtitle: 'MERN Stack Specialist · AI-Augmented Engineering',
  tagline: 'Shipping production web platforms with modern stacks and AI-augmented workflows',
  email: 'harisarain704@gmail.com',
  linkedin: 'https://linkedin.com/in/muhammadharisarain',
  github: 'https://github.com/muhammadharisarain',
  phone: '+92 335 319 1421',
  location: 'Lahore, Pakistan',
  permanentAddress: 'Sindh, Pakistan',
  age: 22,
  experience: '4+',
  status: 'Available for Work',
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 15, suffix: '+', label: 'Projects Delivered' },
  { value: 8, suffix: '+', label: 'Happy Clients' },
  { value: 20, suffix: '+', label: 'Technologies' },
]

export const aboutParagraphs = [
  "I'm a Full-Stack Developer and MERN Stack Specialist with 4+ years at XISLABS, delivering production web platforms across healthcare, retail, Web3, entertainment, and AI-agent domains. Core expertise in the MERN stack (MongoDB, Express, React, Node.js), extended with NestJS, Next.js (App Router, SSR/ISR), and TypeScript.",
  "I joined XISLABS as a Junior Backend Engineer in October 2022 and grew into a Full-Stack / MERN Developer — now primary engineer on 7 production products including Dentbird (multi-platform dental workflow), Firmament (multi-agent AI orchestration on Claude Code + MCP), and a Korean-market karaoke platform paired with physical machines. I've authored 400+ REST and GraphQL endpoints, integrated Stripe, Moyasar, Twilio, and OAuth 2.0, and cut p95 query latency from ~800ms to ~280ms using Redis caching and composite indexing.",
  "My focus in 2026 is AI-augmented engineering — building agentic systems with Claude Code, MCP servers, and Anthropic / OpenAI / Gemini APIs, and using AI-assisted workflows for test generation, code review, and deployment automation. I pair that with solid fundamentals: REST and GraphQL design, SQL and NoSQL modeling, real-time systems (Socket.io, WebRTC, Redis), and containerized deployments across AWS, Azure, Digital Ocean, and Vercel.",
]

// Each skill: name, simpleicons slug, brand color (hex, no #), proficiency 0-100
export type Skill = {
  name: string
  slug: string
  color: string
  level: number
}

export const skillCategories: {
  title: string
  icon: typeof Code2
  color: string
  accent: string
  skills: Skill[]
}[] = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    accent: '#3b82f6',
    skills: [
      { name: 'React.js',       slug: 'react',        color: '61DAFB', level: 95 },
      { name: 'Next.js',        slug: 'nextdotjs',    color: 'FFFFFF', level: 92 },
      { name: 'TypeScript',     slug: 'typescript',   color: '3178C6', level: 90 },
      { name: 'JavaScript',     slug: 'javascript',   color: 'F7DF1E', level: 95 },
      { name: 'Tailwind CSS',   slug: 'tailwindcss',  color: '06B6D4', level: 93 },
      { name: 'Redux',          slug: 'redux',        color: '764ABC', level: 88 },
      { name: 'HTML5',          slug: 'html5',        color: 'E34F26', level: 98 },
      { name: 'CSS3',           slug: 'css3',         color: '1572B6', level: 95 },
      { name: 'Framer Motion',  slug: 'framer',       color: '0055FF', level: 85 },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    accent: '#10b981',
    skills: [
      { name: 'Node.js',        slug: 'nodedotjs',    color: '339933', level: 94 },
      { name: 'Express.js',     slug: 'express',      color: 'FFFFFF', level: 92 },
      { name: 'NestJS',         slug: 'nestjs',       color: 'E0234E', level: 88 },
      { name: 'REST APIs',      slug: 'fastapi',      color: '009688', level: 95 },
      { name: 'GraphQL',        slug: 'graphql',      color: 'E10098', level: 82 },
      { name: 'Socket.io',      slug: 'socketdotio',  color: 'FFFFFF', level: 88 },
      { name: 'WebRTC',         slug: 'webrtc',       color: '333333', level: 80 },
      { name: 'Microservices',  slug: 'apachekafka',  color: '231F20', level: 80 },
      { name: 'Redis',          slug: 'redis',        color: 'DC382D', level: 80 },
      { name: 'OAuth 2.0',      slug: 'auth0',        color: 'EB5424', level: 85 },
      { name: 'JWT',            slug: 'jsonwebtokens',color: '000000', level: 90 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-amber-500 to-orange-500',
    accent: '#f59e0b',
    skills: [
      { name: 'MongoDB',        slug: 'mongodb',      color: '47A248', level: 92 },
      { name: 'PostgreSQL',     slug: 'postgresql',   color: '4169E1', level: 88 },
      { name: 'MySQL',          slug: 'mysql',        color: '4479A1', level: 85 },
      { name: 'Prisma',         slug: 'prisma',       color: 'FFFFFF', level: 84 },
      { name: 'Mongoose',       slug: 'mongoose',     color: '880000', level: 90 },
      { name: 'Firebase',       slug: 'firebase',     color: 'FFCA28', level: 82 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-purple-500 to-pink-500',
    accent: '#a855f7',
    skills: [
      { name: 'Docker',         slug: 'docker',       color: '2496ED', level: 85 },
      { name: 'AWS',            slug: 'amazonaws',    color: 'FF9900', level: 85 },
      { name: 'Azure',          slug: 'microsoftazure', color: '0078D4', level: 78 },
      { name: 'Digital Ocean',  slug: 'digitalocean', color: '0080FF', level: 80 },
      { name: 'Vercel',         slug: 'vercel',       color: 'FFFFFF', level: 92 },
      { name: 'GitHub Actions', slug: 'githubactions',color: '2088FF', level: 85 },
      { name: 'Nginx',          slug: 'nginx',        color: '009639', level: 78 },
      { name: 'Linux',          slug: 'linux',        color: 'FCC624', level: 85 },
    ],
  },
  {
    title: 'AI Engineering',
    icon: Bot,
    color: 'from-indigo-500 to-violet-500',
    accent: '#6366f1',
    skills: [
      { name: 'Claude Code',      slug: 'claude',        color: 'D97757', level: 92 },
      { name: 'MCP Servers',      slug: 'anthropic',     color: 'D97757', level: 85 },
      { name: 'Anthropic API',    slug: 'anthropic',     color: 'D97757', level: 88 },
      { name: 'OpenAI API',       slug: 'openai',        color: '412991', level: 85 },
      { name: 'Gemini',           slug: 'googlegemini',  color: '8E75B2', level: 80 },
      { name: 'Agent Orchestration', slug: 'langchain',  color: '1C3C3C', level: 82 },
    ],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    color: 'from-rose-500 to-red-500',
    accent: '#f43f5e',
    skills: [
      { name: 'Git',            slug: 'git',          color: 'F05032', level: 95 },
      { name: 'GitHub',         slug: 'github',       color: 'FFFFFF', level: 95 },
      { name: 'Postman',        slug: 'postman',      color: 'FF6C37', level: 92 },
      { name: 'VS Code',        slug: 'visualstudiocode', color: '007ACC', level: 98 },
      { name: 'Jira',           slug: 'jira',         color: '0052CC', level: 85 },
      { name: 'Figma',          slug: 'figma',        color: 'F24E1E', level: 78 },
    ],
  },
]

export const experiences = [
  {
    title: 'Full-Stack Developer',
    company: 'XISLABS',
    period: 'Oct 2022 - Present',
    employmentType: 'Full Time',
    tech: ['Node.js', 'NestJS', 'Express', 'React', 'Next.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'],
    description:
      'Progressed from Junior Backend Engineer to Full-Stack / MERN Developer at XISLABS — now primary engineer on 7 production products and contributor on 10+ across healthcare, retail, Web3, entertainment, and AI-agent platforms.',
    achievements: [
      'Primary engineer on 7 production products and contributor on 10+, spanning healthcare, retail, Web3, entertainment, and AI-agent domains',
      'Authored 400+ REST and GraphQL endpoints in Node.js, Express, and NestJS — secured with JWT and OAuth 2.0',
      'Integrated Stripe, Moyasar (Saudi), Twilio, AWS S3, Azure, Firebase, and blockchain providers across client products',
      'Cut p95 query latency from ~800ms to ~280ms (≈65%) on Fatoraty and Tamam via Redis caching and composite PostgreSQL / MongoDB indexes',
      'Engineered Firmament — a 7-agent AI platform with the "Altitude" orchestrator coordinating planning, development, review, and deployment agents on Claude Code and MCP servers',
      'Built real-time systems with Socket.io, WebRTC, and Redis — including the Korean-market Karaoke platform paired with physical karaoke machines',
      'Containerized services with Docker and set up GitHub Actions CI/CD deploying to AWS (EC2, S3, Lambda), Azure, Digital Ocean, and Vercel',
      'Mentored 3 junior engineers through code reviews and pair programming on a Jira + Kanban workflow with daily stand-ups — onboarding cut from 4 weeks to 2',
    ],
  },
]

export const projects = [
  {
    title: 'Dentbird',
    description:
      'Multi-platform dental workflow SaaS built at XISLABS spanning three roles — clinics, labs, and admin. Clinics place orders with patient info and interactive SVG tooth-chart selection; labs receive real-time notifications, prepare solutions from 3D images, and route back for clinic approval before shipping.',
    image: '/tamam.png',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'AWS'],
    category: 'Healthcare / Multi-platform SaaS',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Firmament',
    description:
      'Multi-agent AI platform built at XISLABS — a 7-agent system orchestrated by "Altitude," a planning agent that generates work orders and delegates build, review, and deployment tasks to specialized agents running on Claude Code and MCP servers for end-to-end feature delivery.',
    image: '/battle-saga.svg',
    tags: ['Claude Code', 'MCP', 'TypeScript', 'Node.js', 'Anthropic API', 'Agent Orchestration'],
    category: 'AI Agent Orchestration',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Karaoke System',
    description:
      'Korean-market karaoke platform built at XISLABS — a companion web/mobile app to physical karaoke machines that captures hardware performance data and renders real-time pitch scoring with 1-vs-1 and 1-vs-many battle modes, powered by Socket.io, WebRTC, and Redis live leaderboards.',
    image: '/karaoke.svg',
    tags: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'Redis', 'Audio API'],
    category: 'Entertainment (Korea) — Hardware + Software',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Tamam',
    description:
      'Form management platform built at XISLABS for enterprise clients, delivering dynamic conditional forms with a drag-and-drop builder. Features workflow automation, role-based approvals, and real-time analytics processing 50K+ monthly submissions.',
    image: '/tamam.png',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    category: 'Form Management',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fatoraty',
    description:
      'Comprehensive POS and back-office system developed at XISLABS for retail and F&B clients. Handles inventory, transactions, thermal-printer receipts, and multi-branch sales analytics — deployed across 5+ business locations with offline-first capability.',
    image: '/fatoraty.png',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Thermal Printing'],
    category: 'Retail POS',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Wayfellow',
    description:
      'Professional networking platform built for a client at XISLABS — combining job posts, event management, real-time DMs, and a professional feed serving 10K+ users. Scalable Node.js backend with Socket.io messaging and an AWS-hosted media pipeline.',
    image: '/wayfellow.svg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux', 'AWS'],
    category: 'Social / Networking',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Campaign Estimator',
    description:
      'Marketing analytics tool built at XISLABS that helps teams estimate campaign reach, CTA conversion, and ROI. Combines historical data with ML models to forecast performance, used by 3 enterprise clients to plan 100+ campaigns.',
    image: '/campaign-estimator.png',
    tags: ['React', 'TypeScript', 'Node.js', 'Chart.js', 'ML', 'Analytics'],
    category: 'Marketing Analytics',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
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
]

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

// ─── Resume page data ────────────────────────────────────────────────────────
// Consumed by src/app/resume/ and src/lib/cv-document.tsx (the PDF).

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
  { value: 400, suffix: '+', label: 'API Endpoints',      detail: 'REST & GraphQL across Node.js, Express, NestJS' },
  { value: 7,   suffix: '',  label: 'Products Led',       detail: 'Primary engineer on production systems' },
  { value: 65,  suffix: '%', label: 'Latency Cut',        detail: 'p95 ~800ms → ~280ms via Redis + composite indexes' },
  { value: 10,  suffix: '+', label: 'Products Shipped',   detail: 'Contributor across healthcare, retail, Web3, AI' },
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

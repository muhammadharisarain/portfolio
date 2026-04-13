import { Code2, Server, Wrench, Database, Cloud } from 'lucide-react'

export const personalInfo = {
  name: 'Muhammad Haris Arain',
  title: 'Full Stack Developer',
  subtitle: 'MERN Stack Specialist',
  tagline: 'Converting Ideas into Reality with Modern Web Technologies',
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
  "I'm a Full Stack Developer with over 4 years of professional experience at XISLABS, architecting and shipping production-grade web applications for clients across fintech, social, entertainment, and Web3. My core expertise is the MERN stack (MongoDB, Express.js, React.js, Node.js), complemented by strong command of NestJS, Next.js, and TypeScript.",
  "At XISLABS, I've led end-to-end delivery on 15+ client projects — from Point-of-Sale systems processing live transactions, to real-time social platforms, Web3 gaming dApps, and dynamic form management suites. I believe in writing clean, modular, and maintainable code, guided by SOLID principles, thoughtful testing, and code-review discipline.",
  "My engineering approach combines technical depth with a strong sense of product and business context. I specialize in designing solutions that solve the immediate need while being structured to scale — clean REST and GraphQL APIs, well-modeled SQL and NoSQL data layers, real-time communication with Socket.io and WebRTC, and deployment pipelines built on AWS, Docker, and CI/CD.",
  "When I'm not coding, I'm exploring new technologies and sharpening my craft around system design, performance, and developer experience. I'm always excited to partner with teams that value quality, collaboration, and turning ambitious ideas into reliable products.",
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
      { name: 'Redis',          slug: 'redis',        color: 'DC382D', level: 80 },
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
      { name: 'AWS',            slug: 'amazonaws',    color: 'FF9900', level: 82 },
      { name: 'Vercel',         slug: 'vercel',       color: 'FFFFFF', level: 92 },
      { name: 'GitHub Actions', slug: 'githubactions',color: '2088FF', level: 85 },
      { name: 'Nginx',          slug: 'nginx',        color: '009639', level: 78 },
      { name: 'Linux',          slug: 'linux',        color: 'FCC624', level: 85 },
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
    title: 'Full Stack Developer',
    company: 'XISLABS',
    period: '2021 - Present',
    description:
      'Leading full-stack development on production web platforms for clients across fintech, social, entertainment, and Web3. Own features end-to-end — from architecture and API design, through React/Next.js interfaces, to deployment and monitoring.',
    achievements: [
      'Shipped 15+ client projects from concept to production, including POS, social, and Web3 applications',
      'Architected REST & GraphQL APIs in Node.js, Express, and NestJS serving millions of requests',
      'Designed relational (PostgreSQL) and document (MongoDB) schemas tuned for high-throughput workloads',
      'Built real-time features using Socket.io and WebRTC for live messaging, gaming, and karaoke platforms',
      'Integrated third-party services — Stripe, AWS S3, Twilio, Firebase, and blockchain/Web3 providers',
      'Partnered with designers to translate Figma specs into pixel-perfect, accessible React interfaces',
      'Set up CI/CD pipelines on GitHub Actions with Dockerized deployments to AWS and Vercel',
    ],
  },
]

export const projects = [
  {
    title: 'Wayfellow',
    description:
      'Professional networking platform built for a client at XISLABS — combining job posts, event management, real-time DMs, and a professional feed serving 10K+ users. Scalable Node.js backend with Socket.io messaging and an AWS-hosted media pipeline.',
    image: '/wayfellow.svg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux', 'AWS'],
    category: 'Social Platform',
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
    category: 'Business Solution',
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
    title: 'Battle Saga',
    description:
      'Web3 gaming platform developed at XISLABS with on-chain battles, NFT rewards, and an in-game token economy supporting 2K+ active players. Ethereum smart contracts handle matchmaking and payouts, with a React + Web3.js frontend.',
    image: '/battle-saga.svg',
    tags: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'NFT', 'Smart Contracts'],
    category: 'Web3 / Blockchain',
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
    category: 'Business Analytics',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Karaoke System',
    description:
      'Karaoke platform developed at XISLABS for Korean and Japanese markets with 5K+ active users. Features 1-on-1 and 1-to-many battle modes, AI pitch scoring, weekly prize competitions, and live leaderboards powered by WebRTC and Redis.',
    image: '/karaoke.svg',
    tags: ['React', 'Node.js', 'WebRTC', 'Socket.io', 'Audio API', 'Redis'],
    category: 'Entertainment',
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

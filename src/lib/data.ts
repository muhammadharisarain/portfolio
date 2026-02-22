import { Code2, Server, Wrench } from 'lucide-react'

export const personalInfo = {
  name: 'Muhammad Haris Arain',
  title: 'Full Stack Developer',
  subtitle: 'MERN Stack Specialist',
  tagline: 'Converting Ideas into Reality with Modern Web Technologies',
  email: 'harisarain704@gmail.com',
  linkedin: 'https://linkedin.com/in/muhammadharisarain',
  github: 'https://github.com/muhammadharisarain',
  location: 'Lahore, Pakistan',
  permanentAddress: 'Sindh, Pakistan',
  age: 22,
  experience: '4+',
  status: 'Available for Work',
  resumeUrl: '/resume.pdf',
}

export const stats = [
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Completed' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 20, suffix: '+', label: 'Technologies' },
]

export const aboutParagraphs = [
  "I'm a passionate Full Stack Developer with over 4 years of experience in building robust web applications. My expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js), complemented by strong skills in NestJS and TypeScript for building scalable backend architectures.",
  "Throughout my career, I've had the privilege of working on diverse projects ranging from Point of Sale systems to complex form management platforms. I believe in writing clean, maintainable code and following best practices that ensure long-term project success.",
  "My approach combines technical excellence with a deep understanding of business needs. I specialize in creating full-stack solutions that not only meet current requirements but are also designed to scale with your growing business.",
  "When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in web development. I'm always excited to take on new challenges and transform innovative ideas into reality.",
]

export const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      'React.js',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Redux',
      'Framer Motion',
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    skills: [
      'Node.js',
      'Express.js',
      'NestJS',
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
      'GraphQL',
      'Socket.io',
      'Redis',
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    color: 'from-purple-500 to-pink-500',
    skills: [
      'Git',
      'GitHub',
      'Docker',
      'AWS',
      'Azure',
      'Vercel',
      'CI/CD',
      'Linux',
      'Postman',
    ],
  },
]

export const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'XISLABS',
    period: '2021 - Present',
    description: 'Developed and maintained multiple web applications for clients across various industries. Focused on React.js frontend development and Node.js backend services.',
    achievements: [
      'Built 15+ client projects from concept to deployment',
      'Integrated third-party APIs and payment gateways',
      'Collaborated with design team to implement pixel-perfect UIs',
    ],
  },
]

export const projects = [
  {
    title: 'Wayfellow',
    description: 'A professional networking platform combining the best features of LinkedIn and Twitter. Includes job posting, event management, professional networking, and real-time messaging for career growth and community building.',
    image: '/wayfellow.svg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux', 'AWS'],
    category: 'Social Platform',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Fatoraty',
    description: 'A comprehensive Point of Sale and back-office management system. Enables businesses to manage inventory, process transactions, generate receipts, and analyze sales data with intuitive dashboards.',
    image: '/fatoraty.png',
    tags: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux', 'Thermal Printing'],
    category: 'Business Solution',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Tamam',
    description: 'A sophisticated form management application that provides customers with form-based services. Features dynamic form builder, workflow automation, and data analytics for streamlined business processes.',
    image: '/tamam.png',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Socket.io'],
    category: 'Form Management',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Battle Saga',
    description: 'An innovative Web3 gaming platform with smart contract integration. Players use cryptocurrency tokens for in-game purchases, battles, and rewards in an immersive gaming ecosystem.',
    image: '/battle-saga.svg',
    tags: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'NFT', 'Smart Contracts'],
    category: 'Web3 / Blockchain',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Campaign Estimator',
    description: 'A business analytics application that helps marketers estimate campaign performance. Features CTA optimization, audience reach prediction, ROI calculation, and data-driven insights for marketing success.',
    image: '/campaign-estimator.png',
    tags: ['React', 'TypeScript', 'Node.js', 'Chart.js', 'ML', 'Analytics'],
    category: 'Business Analytics',
    featured: true,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Karaoke System',
    description: 'A feature-rich karaoke platform popular in Korean and Japanese markets. Includes one-to-one and one-to-many battle modes, song perfection scoring, prize competitions, and real-time leaderboards.',
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

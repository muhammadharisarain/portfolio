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
      className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 text-center print:hidden"
    >
      <h2 className="font-display text-2xl font-bold text-white">
        Let&apos;s work together
      </h2>
      <p className="mx-auto mt-2 max-w-lg text-sm text-gray-400">
        Open to full-time roles and freelance projects. Based in{' '}
        {personalInfo.location}.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
        >
          <Mail size={16} /> Hire Me
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <Linkedin size={16} /> LinkedIn
        </a>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-6 py-2.5 text-sm font-semibold text-gray-200 transition-colors hover:border-primary/40 hover:text-primary"
        >
          <Github size={16} /> GitHub
        </a>
      </div>
    </motion.section>
  )
}

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
          <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                {exp.title}
              </h3>
              <p className="mt-0.5 text-sm font-semibold text-primary">
                {exp.company}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="font-mono text-xs text-gray-500">
                {exp.period}
              </span>
              {exp.employmentType && (
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-medium text-gray-400">
                  {exp.employmentType}
                </span>
              )}
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            {exp.description}
          </p>

          <ul className="mt-5 space-y-2.5">
            {exp.achievements.map((a) => (
              <li
                key={a}
                className="flex gap-2.5 text-sm leading-relaxed text-gray-300"
              >
                <Check size={15} className="mt-0.5 shrink-0 text-primary" />
                <span>{a}</span>
              </li>
            ))}
          </ul>

          {exp.tech && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
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

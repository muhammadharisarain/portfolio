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
            <h3 className="font-display text-[15px] font-bold text-white">
              {e.degree}
            </h3>
            <p className="mt-1 text-sm text-gray-400">{e.institution}</p>
            <p className="mt-1 font-mono text-xs text-gray-500">{e.period}</p>
            {e.detail && (
              <p className="mt-2 text-[13px] text-gray-400">{e.detail}</p>
            )}
          </motion.div>
        ))}
      </div>

      {certifications.length > 0 && (
        <>
          <h3 className="mb-3 mt-8 text-sm font-bold uppercase tracking-wider text-gray-300">
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

'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/data'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeSkills() {
  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Technical Skills" id="skills" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const Icon = cat.icon
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-background-light/50 p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <Icon size={15} style={{ color: cat.accent }} />
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
          )
        })}
      </div>
    </section>
  )
}

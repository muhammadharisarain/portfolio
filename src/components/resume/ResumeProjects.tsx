'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeProjects() {
  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Key Projects" id="projects" />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: (i % 2) * 0.06 }}
            className="break-inside-avoid rounded-xl border border-white/10 bg-background-light/50 p-5"
          >
            {/* flex-wrap, and no shrink-0 on the category: long values such as
                "Entertainment (Korea) — Hardware + Software" otherwise force
                horizontal page scroll on narrow viewports. */}
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="font-display font-bold text-white">{p.title}</h3>
              <span className="font-mono text-[10px] uppercase tracking-wide text-gray-500">
                {p.category}
              </span>
            </div>
            <p className="mt-2 text-[13px] leading-relaxed text-gray-400">
              {p.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-gray-500"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

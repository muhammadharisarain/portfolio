'use client'

import { motion } from 'framer-motion'
import { careerTimeline } from '@/lib/data'
import { cn } from '@/lib/utils'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeTimeline() {
  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Career Progression" id="progression" />
      <ol className="relative ml-2 border-l border-white/10 pl-7">
        {careerTimeline.map((t, i) => (
          <motion.li
            key={t.role}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            className="relative pb-8 last:pb-0"
          >
            <span
              className={cn(
                'absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-background',
                t.current ? 'bg-primary shadow-glow' : 'bg-gray-600'
              )}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="font-display font-bold text-white">{t.role}</h3>
              <span className="font-mono text-xs text-gray-500">{t.period}</span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
              {t.note}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}

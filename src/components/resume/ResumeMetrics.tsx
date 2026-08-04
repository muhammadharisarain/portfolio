'use client'

import { motion } from 'framer-motion'
import { resumeMetrics } from '@/lib/data'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function ResumeMetrics() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {resumeMetrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="rounded-xl border border-white/10 bg-background-light/60 p-4"
          >
            <AnimatedCounter
              value={m.value}
              suffix={m.suffix}
              className="!text-2xl font-mono md:!text-3xl"
            />
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-300">
              {m.label}
            </p>
            <p className="mt-1 text-[11px] leading-snug text-gray-500">
              {m.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

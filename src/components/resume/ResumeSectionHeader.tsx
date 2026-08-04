'use client'

import { motion } from 'framer-motion'

export default function ResumeSectionHeader({
  label,
  id,
}: {
  label: string
  id?: string
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4 }}
      className="flex items-center gap-4 mb-8"
    >
      <span className="h-px w-10 bg-primary" aria-hidden="true" />
      <h2 className="font-display text-xl md:text-2xl font-bold text-white">
        {label}
      </h2>
    </motion.div>
  )
}

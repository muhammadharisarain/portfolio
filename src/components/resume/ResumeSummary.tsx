'use client'

import { motion } from 'framer-motion'
import { resumeSummary } from '@/lib/data'
import ResumeSectionHeader from './ResumeSectionHeader'

export default function ResumeSummary() {
  return (
    <section className="mb-16">
      <ResumeSectionHeader label="Profile" id="profile" />
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45 }}
        className="text-[15px] leading-relaxed text-gray-300"
      >
        {resumeSummary}
      </motion.p>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SkillTagProps {
  skill: string
  index: number
  className?: string
}

export default function SkillTag({ skill, index, className }: SkillTagProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className={cn(
        'px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm text-white',
        'transition-all duration-300 hover:bg-primary/20 hover:border-primary/50 hover:shadow-glow',
        'cursor-default',
        className
      )}
    >
      {skill}
    </motion.span>
  )
}

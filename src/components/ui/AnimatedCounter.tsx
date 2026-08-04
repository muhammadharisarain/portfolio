'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export default function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (isInView && value > 0) {
      let start = 0
      const end = value
      const incrementTime = (duration * 1000) / end

      const timer = setInterval(() => {
        start += 1
        setCount(start)
        if (start >= end) {
          clearInterval(timer)
        }
      }, incrementTime)

      return () => clearInterval(timer)
    }

    if (isInView) setCount(value)
  }, [isInView, value, duration])

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'text-4xl md:text-5xl font-display font-bold text-primary',
        className
      )}
    >
      {count}
      {suffix}
    </motion.span>
  )
}

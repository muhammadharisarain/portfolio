'use client'

import { cn } from '@/lib/utils'
import { motion, HTMLMotionProps } from 'framer-motion'
import { forwardRef } from 'react'

interface CardProps extends HTMLMotionProps<'div'> {
  variant?: 'default' | 'hover' | 'interactive'
  children: React.ReactNode
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          'bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl',
          {
            'transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:shadow-glow hover:-translate-y-1':
              variant === 'hover',
            'cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-primary/30 hover:shadow-glow hover:-translate-y-2':
              variant === 'interactive',
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card

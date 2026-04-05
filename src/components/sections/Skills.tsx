'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { skillCategories } from '@/lib/data'
import { SectionHeading } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)
  const active = skillCategories[activeTab]

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative bg-background-light/30 overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(600px circle at 50% 0%, ${active.accent}22, transparent 60%)`,
          transition: 'background 600ms ease',
        }}
      />

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="A curated stack I use to design, build, and ship production-grade software"
        />

        <div className="max-w-6xl mx-auto">
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category, i) => {
              const Icon = category.icon
              const isActive = i === activeTab
              return (
                <motion.button
                  key={category.title}
                  onClick={() => setActiveTab(i)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    'group relative flex items-center gap-2 px-4 md:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300',
                    'border backdrop-blur-sm',
                    isActive
                      ? 'bg-white/10 border-white/30 text-white shadow-glow'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:border-white/20'
                  )}
                >
                  <Icon
                    size={16}
                    style={{ color: isActive ? category.accent : undefined }}
                    className={cn(!isActive && 'text-gray-500 group-hover:text-gray-300')}
                  />
                  <span>{category.title}</span>
                  {isActive && (
                    <motion.span
                      layoutId="skillTabGlow"
                      className="absolute inset-0 rounded-full"
                      style={{
                        boxShadow: `0 0 30px ${category.accent}40, inset 0 0 20px ${category.accent}15`,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Skill grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
          >
            {active.skills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                slug={skill.slug}
                color={skill.color}
                level={skill.level}
                accent={active.accent}
                index={i}
              />
            ))}
          </motion.div>

          {/* Also experienced with — marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-center text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">
              Also Experienced With
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                'Jest', 'Cypress', 'Webpack', 'Vite', 'Material UI', 'Sass',
                'Web3.js', 'Solidity', 'WebSockets', 'Microservices',
                'Stripe', 'Twilio', 'Zod', 'TRPC',
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:border-primary/40 hover:text-white hover:bg-primary/5 transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  name,
  slug,
  color,
  level,
  accent,
  index,
}: {
  name: string
  slug: string
  color: string
  level: number
  accent: string
  index: number
}) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.04, duration: 0.35, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      <div
        className="relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-5 overflow-hidden transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/[0.06]"
      >
        {/* Glow on hover */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at 50% 0%, #${color}22, transparent 70%)`,
          }}
        />

        <div className="relative flex flex-col items-center text-center gap-3">
          {/* Logo */}
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
            style={{
              background: `linear-gradient(135deg, #${color}20, #${color}08)`,
              border: `1px solid #${color}30`,
            }}
          >
            {!imgError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={`https://cdn.simpleicons.org/${slug}/${color}`}
                alt={`${name} logo`}
                width={28}
                height={28}
                className="w-7 h-7 md:w-8 md:h-8"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              <span
                className="text-lg font-bold"
                style={{ color: `#${color}` }}
              >
                {name.charAt(0)}
              </span>
            )}
          </div>

          {/* Name */}
          <h4 className="text-sm md:text-base font-semibold text-white">
            {name}
          </h4>

          {/* Proficiency bar */}
          <div className="w-full">
            <div className="flex items-center justify-between text-[10px] text-gray-500 mb-1.5">
              <span className="uppercase tracking-wider">Proficiency</span>
              <span className="font-mono text-gray-400">{level}%</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 + 0.2, duration: 0.8, ease: 'easeOut' }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${accent}, #${color})`,
                  boxShadow: `0 0 12px ${accent}80`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

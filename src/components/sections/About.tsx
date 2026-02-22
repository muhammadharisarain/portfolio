'use client'

import { motion } from 'framer-motion'
import { Code2, Lightbulb, Rocket, Users } from 'lucide-react'
import { aboutParagraphs } from '@/lib/data'
import { SectionHeading, Card } from '@/components/ui'

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable and scalable code',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Finding creative solutions to complex challenges',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Building fast and optimized applications',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with teams',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about creating impactful digital experiences through code"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                {aboutParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-gray-300 leading-relaxed"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card variant="hover" className="p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Code Block Decoration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-16"
          >
            <Card className="p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 font-mono">
                <code>
                  <span className="text-accent-purple">const</span>{' '}
                  <span className="text-accent-blue">developer</span> = {'{'}
                  {'\n'}
                  {'  '}
                  <span className="text-primary">name</span>:{' '}
                  <span className="text-accent-pink">&quot;Muhammad Haris Arain&quot;</span>,{'\n'}
                  {'  '}
                  <span className="text-primary">skills</span>: [
                  <span className="text-accent-pink">&quot;React&quot;</span>,{' '}
                  <span className="text-accent-pink">&quot;Node.js&quot;</span>,{' '}
                  <span className="text-accent-pink">&quot;TypeScript&quot;</span>],{'\n'}
                  {'  '}
                  <span className="text-primary">passion</span>:{' '}
                  <span className="text-accent-pink">&quot;Building amazing web experiences&quot;</span>,{'\n'}
                  {'  '}
                  <span className="text-accent-purple">async</span>{' '}
                  <span className="text-accent-blue">createSolution</span>() {'{'}
                  {'\n'}
                  {'    '}
                  <span className="text-accent-purple">return</span>{' '}
                  <span className="text-accent-pink">&quot;Innovative & Scalable&quot;</span>;{'\n'}
                  {'  '}
                  {'}'}
                  {'\n'}
                  {'}'};
                </code>
              </pre>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

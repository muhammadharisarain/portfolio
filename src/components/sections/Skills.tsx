'use client'

import { motion } from 'framer-motion'
import { skillCategories } from '@/lib/data'
import { SectionHeading, Card, SkillTag } from '@/components/ui'

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative bg-background-light/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <Card variant="hover" className="h-full p-8">
                  {/* Icon Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} p-0.5`}
                    >
                      <div className="w-full h-full rounded-2xl bg-background-light flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-display font-semibold">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <SkillTag
                        key={skill}
                        skill={skill}
                        index={skillIndex}
                      />
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <Card className="p-8 text-center">
              <h3 className="text-xl font-display font-semibold mb-4">
                Also Experienced With
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'Firebase',
                  'Prisma',
                  'Jest',
                  'Cypress',
                  'Webpack',
                  'Vite',
                  'Material UI',
                  'Sass',
                  'Web3.js',
                  'Solidity',
                  'WebSockets',
                  'Microservices',
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-primary/30 hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

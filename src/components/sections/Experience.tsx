'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experiences } from '@/lib/data'
import { SectionHeading, Card } from '@/components/ui'

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey and career milestones"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-glow z-10 mt-8" />

                {/* Content */}
                <div
                  className={`flex-1 ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}
                >
                  <Card variant="hover" className="p-6 md:p-8">
                    {/* Header */}
                    <div
                      className={`flex items-center gap-3 mb-4 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-primary font-medium">
                        {experience.period}
                      </span>
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-primary mb-4">{experience.company}</p>

                    {/* Description */}
                    <p
                      className={`text-gray-400 mb-6 ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}
                    >
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <ul
                      className={`space-y-2 ${
                        index % 2 === 0 ? 'md:text-right' : ''
                      }`}
                    >
                      {experience.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: achIndex * 0.1 }}
                          className={`flex items-center gap-2 text-sm text-gray-300 ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { SectionHeading, Card } from '@/components/ui'

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-background-light/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A showcase of my recent work and passion projects"
        />

        <div className="max-w-7xl mx-auto">
          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  variant="interactive"
                  className="h-full group overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-purple/20" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback for missing images
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary/90 text-background text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Links */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-4 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <a
                        href={project.liveUrl}
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background hover:scale-110 transition-transform"
                        aria-label="View Live"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:scale-110 hover:bg-white/20 transition-all"
                        aria-label="View Code"
                      >
                        <Github size={20} />
                      </a>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="text-gray-400 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      />
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 bg-primary/10 border border-primary/30 rounded text-xs text-primary">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* More Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/muhammadharisarain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <Github size={20} />
              View More on GitHub
              <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { MapPin, Mail, Calendar, Briefcase, Download, Send, Github, Linkedin } from 'lucide-react'
import { personalInfo, stats } from '@/lib/data'
import { Button, AnimatedCounter, Card } from '@/components/ui'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.1),transparent_50%)]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 md:p-12" variant="hover">
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                  className="relative"
                >
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-accent-blue p-1">
                    <div className="w-full h-full rounded-full bg-background-light flex items-center justify-center">
                      <span className="text-4xl md:text-5xl font-display font-bold gradient-text">
                        MHA
                      </span>
                    </div>
                  </div>
                  {/* Status Indicator */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-2 right-2 w-5 h-5 bg-primary rounded-full border-4 border-background"
                  />
                </motion.div>

                {/* Info */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-2"
                  >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      {personalInfo.status}
                    </span>
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2"
                  >
                    {personalInfo.name}
                  </motion.h1>

                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-xl md:text-2xl text-primary mb-4"
                  >
                    {personalInfo.title} | {personalInfo.subtitle}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="text-gray-400 text-lg mb-6 max-w-2xl"
                  >
                    {personalInfo.tagline}
                  </motion.p>

                  {/* Details Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8"
                  >
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin size={18} className="text-primary" />
                      <span className="text-sm">{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar size={18} className="text-primary" />
                      <span className="text-sm">Age: {personalInfo.age}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Briefcase size={18} className="text-primary" />
                      <span className="text-sm">{personalInfo.experience} Years Exp.</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 col-span-2 md:col-span-3">
                      <Mail size={18} className="text-primary" />
                      <span className="text-sm">{personalInfo.email}</span>
                    </div>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-wrap items-center gap-4 mb-8"
                  >
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Github size={18} />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Linkedin size={18} />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                    >
                      <Mail size={18} />
                      <span className="text-sm">Email</span>
                    </a>
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button variant="primary" size="lg">
                      <Download size={18} />
                      Download CV
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => {
                        const element = document.querySelector('#contact')
                        element?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      <Send size={18} />
                      Get In Touch
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300"
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-gray-400 mt-2 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { SectionHeading, Card, Button } from '@/components/ui'

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind? Let's discuss how we can collaborate"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full">
                <h3 className="text-2xl font-display font-bold mb-6">
                  Get In Touch
                </h3>

                <div className="space-y-6">
                  <motion.a
                    href={`mailto:${personalInfo.email}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">
                        {personalInfo.email}
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="text-white font-medium group-hover:text-primary transition-colors">
                        Connect with me
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white font-medium">
                        {personalInfo.location}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Availability */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 p-4 rounded-xl bg-primary/10 border border-primary/30"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <p className="text-primary font-medium">
                      Currently available for freelance projects
                    </p>
                  </div>
                </motion.div>
              </Card>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-primary/20 to-accent-purple/20 border-primary/20">
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6"
                  >
                    <MessageCircle className="w-10 h-10 text-primary" />
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                    Ready to Start a Project?
                  </h3>

                  <p className="text-gray-300 mb-8 max-w-md">
                    I&apos;m always excited to work on new projects and collaborate
                    with amazing people. Let&apos;s create something great together!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={() =>
                        window.open(`mailto:${personalInfo.email}`, '_blank')
                      }
                    >
                      <Send size={18} />
                      Send an Email
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() =>
                        window.open(personalInfo.linkedin, '_blank')
                      }
                    >
                      <Linkedin size={18} />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

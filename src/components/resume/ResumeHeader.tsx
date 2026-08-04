'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Download,
  Printer,
  Mail,
  Linkedin,
  Github,
  MapPin,
  Phone,
  ArrowLeft,
} from 'lucide-react'
import { personalInfo, availability } from '@/lib/data'
import { cn } from '@/lib/utils'
import ThemeToggle from '@/components/ThemeToggle'

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </span>
  )
}

export default function ResumeHeader() {
  const [downloading, setDownloading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [imgFailed, setImgFailed] = useState(false)

  const handleDownload = async () => {
    if (downloading) return
    setDownloading(true)
    setError(null)
    try {
      const { downloadCV } = await import('@/lib/downloadCV')
      await downloadCV()
    } catch {
      setError('Could not generate the PDF. Please try again.')
    } finally {
      setDownloading(false)
    }
  }

  const initials = personalInfo.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 3)
    .join('')

  return (
    <header className="mb-16">
      <div className="mb-8 flex items-center justify-between print:hidden">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-primary"
        >
          <ArrowLeft size={15} /> Back to portfolio
        </a>
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-start gap-8 sm:flex-row"
      >
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl border border-primary/30 bg-background-lighter">
          {imgFailed ? (
            <span className="flex h-full w-full items-center justify-center font-display text-2xl font-bold text-primary">
              {initials}
            </span>
          ) : (
            <Image
              src="/profile_image.jpeg"
              alt={personalInfo.name}
              width={112}
              height={112}
              className="h-full w-full object-cover object-top"
              onError={() => setImgFailed(true)}
              priority
            />
          )}
        </div>

        <div className="flex-1">
          <h1 className="font-display text-3xl font-bold leading-tight text-white md:text-4xl">
            {personalInfo.name}
          </h1>
          <p className="mt-1 font-medium text-primary">{personalInfo.title}</p>
          <p className="mt-0.5 text-sm text-gray-400">{personalInfo.subtitle}</p>

          <div className="mt-4 flex flex-wrap gap-2 print:hidden">
            {availability.freelance && <Badge>Available for Freelance</Badge>}
            {availability.fullTime && <Badge>Open to Full-Time Roles</Badge>}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
              <MapPin size={11} /> {availability.locationLine}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-gray-400">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Mail size={13} /> {personalInfo.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Phone size={13} /> {personalInfo.phone}
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Github size={13} /> {personalInfo.github.replace('https://', '')}
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Linkedin size={13} /> {personalInfo.linkedin.replace('https://', '')}
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 print:hidden">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-background transition-opacity',
                downloading ? 'cursor-wait opacity-70' : 'hover:opacity-90'
              )}
            >
              <Download size={16} /> {downloading ? 'Generating…' : 'Download PDF'}
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              <Printer size={16} /> Print
            </button>
          </div>

          {error && (
            <p role="alert" className="mt-3 text-sm text-red-400">
              {error}
            </p>
          )}
        </div>
      </motion.div>
    </header>
  )
}

'use client'

import dynamic from 'next/dynamic'
import {
  Navbar,
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
  Footer,
} from '@/components/sections'
import Loader from '@/components/Loader'
import ScrollProgress from '@/components/ScrollProgress'

// Dynamically import ParticleBackground to avoid SSR issues
const ParticleBackground = dynamic(
  () => import('@/components/ParticleBackground'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <ParticleBackground />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

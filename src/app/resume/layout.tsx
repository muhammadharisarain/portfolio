import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume — Muhammad Haris Arain',
  description:
    'Full resume of Muhammad Haris Arain — Full-Stack Developer and MERN Stack Specialist with 4+ years building production web platforms across healthcare, retail, entertainment, and AI-agent domains.',
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

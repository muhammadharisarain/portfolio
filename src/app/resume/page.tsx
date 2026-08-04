import { ResumeSectionHeader } from '@/components/resume'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <ResumeSectionHeader label="Experience" />
      </div>
    </main>
  )
}

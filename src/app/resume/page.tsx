import {
  ResumeHeader,
  ResumeMetrics,
  ResumeSummary,
  ResumeTimeline,
  ResumeExperience,
  ResumeSkills,
  ResumeProjects,
  ResumeEducation,
  ResumeContact,
  ResumePrintStyles,
} from '@/components/resume'

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <ResumePrintStyles />
      <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
        <ResumeHeader />
        <ResumeMetrics />
        <ResumeSummary />
        <ResumeTimeline />
        <ResumeExperience />
        <ResumeSkills />
        <ResumeProjects />
        <ResumeEducation />
        <ResumeContact />
      </div>
    </main>
  )
}

/**
 * Client-side CV download utility.
 * Generates the PDF in the browser and triggers download.
 */
export async function downloadCV(): Promise<void> {
  const [{ pdf }, { CVDocument }, { default: React }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('./cv-document'),
    import('react'),
  ])

  const element = React.createElement(CVDocument)
  const blob = await pdf(element as Parameters<typeof pdf>[0]).toBlob()

  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Muhammad-Haris-Arain-CV.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

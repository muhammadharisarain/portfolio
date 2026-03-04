/**
 * Client-side CV download utility.
 * Fetches the profile image as a base64 data URI first,
 * then generates the PDF in the browser and triggers download.
 */
export async function downloadCV(): Promise<void> {
  // 1. Pre-fetch profile image as base64 so react-pdf can embed it
  let profileImageSrc = ''
  try {
    const res = await fetch('/profile_image.jpeg')
    const blob = await res.blob()
    profileImageSrc = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = reject
      reader.readAsDataURL(blob)
    })
  } catch {
    // proceed without image
  }

  // 2. Dynamically import react-pdf (browser only — never runs on server)
  const [{ pdf }, { CVDocument }, { default: React }] = await Promise.all([
    import('@react-pdf/renderer'),
    import('./cv-document'),
    import('react'),
  ])

  // 3. Generate the PDF blob
  const element = React.createElement(CVDocument, { profileImageSrc })
  const blob = await pdf(element as Parameters<typeof pdf>[0]).toBlob()

  // 4. Trigger download
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'Muhammad-Haris-Arain-CV.pdf'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

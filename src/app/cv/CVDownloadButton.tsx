'use client'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { CVDocument } from '@/lib/cv-document'

export function CVDownloadButton({ profileImageSrc }: { profileImageSrc: string }) {
  return (
    <PDFDownloadLink
      document={<CVDocument profileImageSrc={profileImageSrc} />}
      fileName="Muhammad-Haris-Arain-CV.pdf"
      style={{ textDecoration: 'none' }}
    >
      {({ loading, error }) => (
        <button
          style={{
            background: '#fff',
            color: '#1a1a1a',
            border: 'none',
            borderRadius: '5px',
            padding: '7px 18px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: loading ? 'wait' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Generating...' : error ? 'Error — retry' : '↓ Download PDF'}
        </button>
      )}
    </PDFDownloadLink>
  )
}

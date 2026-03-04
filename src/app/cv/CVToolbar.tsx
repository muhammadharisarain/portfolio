'use client'

import { useState } from 'react'

export default function CVToolbar() {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = async () => {
    if (downloading) return
    setDownloading(true)
    try {
      const { downloadCV } = await import('@/lib/downloadCV')
      await downloadCV()
    } catch {
      // silent
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: '#111827',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 28px',
        zIndex: 100,
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <a
          href="/"
          style={{
            color: '#9ca3af',
            textDecoration: 'none',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          ← Portfolio
        </a>
        <span style={{ color: '#e5e7eb', fontSize: '14px', fontWeight: '600' }}>
          Muhammad Haris Arain — CV
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          onClick={() => window.print()}
          style={{
            background: 'transparent',
            color: '#d1d5db',
            border: '1px solid #374151',
            borderRadius: '5px',
            padding: '7px 16px',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          🖨 Print
        </button>

        <button
          onClick={handleDownload}
          disabled={downloading}
          style={{
            background: '#ffffff',
            color: '#1a1a1a',
            border: 'none',
            borderRadius: '5px',
            padding: '7px 18px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: downloading ? 'wait' : 'pointer',
            opacity: downloading ? 0.7 : 1,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'opacity 0.2s',
          }}
        >
          {downloading ? 'Generating…' : '↓ Download PDF'}
        </button>
      </div>
    </div>
  )
}

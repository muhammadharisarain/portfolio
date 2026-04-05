import { NextResponse } from 'next/server'
import { renderToBuffer } from '@react-pdf/renderer'
import { CVDocument } from '@/lib/cv-document'
import React from 'react'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const element = React.createElement(CVDocument)
    const buffer = await renderToBuffer(element as unknown as React.ReactElement)

    return new NextResponse(buffer as unknown as BodyInit, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Muhammad-Haris-Arain-CV.pdf"',
        'Cache-Control': 'no-store',
      },
    })
  } catch (err) {
    console.error('[CV generation error]', err)
    return NextResponse.json({ error: 'Failed to generate CV' }, { status: 500 })
  }
}

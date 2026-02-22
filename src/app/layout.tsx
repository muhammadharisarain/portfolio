import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://muhammadharisarain.vercel.app'),
  title: 'Muhammad Haris Arain | Full Stack Developer',
  description: 'Full Stack Developer specializing in MERN Stack, NestJS, and TypeScript. Building scalable web applications with modern technologies.',
  keywords: [
    'Full Stack Developer',
    'MERN Stack',
    'React',
    'Node.js',
    'TypeScript',
    'NestJS',
    'MongoDB',
    'PostgreSQL',
    'Web Developer',
    'Software Engineer',
  ],
  authors: [{ name: 'Muhammad Haris Arain' }],
  creator: 'Muhammad Haris Arain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadharisarain.com',
    siteName: 'Muhammad Haris Arain Portfolio',
    title: 'Muhammad Haris Arain | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN Stack, NestJS, and TypeScript. Building scalable web applications with modern technologies.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Muhammad Haris Arain - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Haris Arain | Full Stack Developer',
    description: 'Full Stack Developer specializing in MERN Stack, NestJS, and TypeScript.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

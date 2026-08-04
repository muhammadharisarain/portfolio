/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next.js 14 key. (`serverExternalPackages` is the Next 15 name and is
  // silently ignored here — it produced an "Unrecognized key" build warning.)
  experimental: {
    serverComponentsExternalPackages: ['@react-pdf/renderer'],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [{ source: '/cv', destination: '/resume', permanent: true }]
  },
}

module.exports = nextConfig

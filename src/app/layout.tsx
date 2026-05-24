import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Think Growth Labs',
  description: 'Building AI-enabled tools for professional growth, execution readiness, and communication performance.',
  openGraph: {
    title: 'Think Growth Labs',
    description: 'Building AI-enabled tools for professional growth, execution readiness, and communication performance.',
    url: 'https://thinkgrowthlabs.com',
    siteName: 'Think Growth Labs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Think Growth Labs',
    description: 'Building AI-enabled tools for professional growth, execution readiness, and communication performance.',
  },
  metadataBase: new URL('https://thinkgrowthlabs.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import './globals.css'

const SITE_URL = 'https://thinkgrowthlabs.com'
const TITLE = 'Think Growth Labs'
const DESCRIPTION = 'Think Growth Labs is a founder-led AI product company building thoughtful software for professional growth. Our flagship product, ELOQ — your AI partner to get your next job — is live.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: `%s — ${TITLE}`,
  },
  description: DESCRIPTION,

  keywords: [
    'AI product company',
    'AI career tools',
    'AI job search',
    'career intelligence',
    'interview preparation',
    'professional growth',
    'Think Growth Labs',
    'ELOQ',
  ],

  authors: [{ name: 'Think Growth Labs', url: SITE_URL }],

  creator: 'Think Growth Labs',
  publisher: 'Think Growth Labs',

  // Canonical
  alternates: {
    canonical: SITE_URL,
  },

  // Open Graph — controls LinkedIn, Slack, iMessage previews
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    locale: 'en_US',
  },

  // Twitter card
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    creator: '@thinkgrowthlabs',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#09090f',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

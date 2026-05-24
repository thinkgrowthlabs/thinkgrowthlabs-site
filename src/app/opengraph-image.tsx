import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Think Growth Labs — Building AI-enabled tools for professional growth'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#09090f',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(129, 140, 248, 0.08) 0%, transparent 60%)',
          }}
        />

        {/* Glow dot */}
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: '#818cf8',
            boxShadow: '0 0 40px 16px rgba(129, 140, 248, 0.5)',
            marginBottom: 40,
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#818cf8',
            marginBottom: 24,
            display: 'flex',
          }}
        >
          Think Growth Labs
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#f1f1f3',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            maxWidth: 780,
            marginBottom: 28,
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          Building AI-enabled tools for professional growth.
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 22,
            color: '#8b8b9e',
            lineHeight: 1.6,
            maxWidth: 620,
            display: 'flex',
          }}
        >
          A founder-led product lab at the intersection of AI, leadership, and professional performance.
        </div>

        {/* Domain watermark */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 100,
            fontSize: 15,
            color: '#4a4a5e',
            display: 'flex',
          }}
        >
          thinkgrowthlabs.com
        </div>
      </div>
    ),
    { ...size }
  )
}

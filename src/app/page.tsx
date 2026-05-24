'use client'

// ── Think Growth Labs — thinkgrowthlabs.com ───────────────────────────────────
// Founder-led AI product lab. One page. No hype.

const LINKEDIN_URL = 'https://www.linkedin.com/company/thinkgrowthlabs'
const ELOQ_URL = 'https://witheloq.com'
const EMAIL = 'hello@thinkgrowthlabs.com'

const FOCUS_AREAS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Interview Readiness',
    description: 'Structured preparation that transforms experience into coherent, confident communication under pressure.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: 'Career Storytelling',
    description: 'Helping professionals surface the coherence in their work and articulate it with clarity and precision.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Executive Communication',
    description: 'Building the muscle to communicate with authority, economy, and presence at every level of an organization.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07" />
      </svg>
    ),
    title: 'AI-Assisted Coaching',
    description: 'Applying AI to deliver personalized, context-aware professional development at a depth that was previously inaccessible.',
  },
]

export default function Home() {
  return (
    <main style={{ backgroundColor: '#09090f', minHeight: '100vh', color: '#f1f1f3' }}>

      {/* ── Nav ──────────────────────────────────────────────────────────────── */}
      <nav className="fade-up" style={{ maxWidth: 760, margin: '0 auto', padding: '28px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#f1f1f3', letterSpacing: '-0.01em' }}>
          Think Growth Labs
        </span>
        <a
          href={ELOQ_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 13,
            color: '#818cf8',
            textDecoration: 'none',
            fontWeight: 500,
            padding: '6px 14px',
            border: '1px solid rgba(129, 140, 248, 0.3)',
            borderRadius: 8,
            transition: 'border-color 0.2s, color 0.2s',
          }}
          onMouseEnter={e => {
            (e.target as HTMLElement).style.borderColor = 'rgba(129, 140, 248, 0.7)'
          }}
          onMouseLeave={e => {
            (e.target as HTMLElement).style.borderColor = 'rgba(129, 140, 248, 0.3)'
          }}
        >
          ELOQ ↗
        </a>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px 100px', textAlign: 'center' }}>

        {/* Glow dot */}
        <div className="glow-pulse fade-up" style={{
          width: 10, height: 10, borderRadius: '50%',
          backgroundColor: '#818cf8',
          margin: '0 auto 40px',
        }} />

        <p className="fade-up fade-up-delay-1" style={{
          fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: '#818cf8', marginBottom: 20,
        }}>
          Think Growth Labs
        </p>

        <h1 className="fade-up fade-up-delay-2" style={{
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
          color: '#f1f1f3',
          marginBottom: 24,
          maxWidth: 600,
          margin: '0 auto 24px',
        }}>
          Building AI-enabled tools for professional growth.
        </h1>

        <p className="fade-up fade-up-delay-3" style={{
          fontSize: 17,
          color: '#8b8b9e',
          lineHeight: 1.7,
          maxWidth: 480,
          margin: '0 auto 48px',
        }}>
          A founder-led product lab at the intersection of AI, leadership, and professional performance.
        </p>

        {/* CTAs */}
        <div className="fade-up fade-up-delay-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={ELOQ_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              backgroundColor: '#818cf8',
              color: '#09090f',
              fontWeight: 600, fontSize: 14,
              padding: '12px 24px',
              borderRadius: 12,
              textDecoration: 'none',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#9ba3fb')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#818cf8')}
          >
            Explore ELOQ
            <span style={{ fontSize: 16 }}>→</span>
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              backgroundColor: 'transparent',
              color: '#8b8b9e',
              fontWeight: 500, fontSize: 14,
              padding: '12px 24px',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.08)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#f1f1f3'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = '#8b8b9e'
            }}
          >
            Connect on LinkedIn
          </a>
        </div>

      </section>

      {/* Divider */}
      <Divider />

      {/* ── About ────────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px' }}>
        <SectionLabel>About</SectionLabel>
        <div style={{ maxWidth: 580 }}>
          <p style={{ fontSize: 17, color: '#c8c8d8', lineHeight: 1.85, marginBottom: 20 }}>
            Think Growth Labs is a founder-led AI product lab exploring the intersection of artificial intelligence,
            professional development, and human performance.
          </p>
          <p style={{ fontSize: 17, color: '#8b8b9e', lineHeight: 1.85 }}>
            We build focused, opinionated tools for professionals who want to communicate better,
            prepare more effectively, and understand their own career story with clarity. The work is
            early-stage, independent, and intentional — built on the belief that the right intelligence,
            delivered at the right moment, changes outcomes.
          </p>
        </div>
      </section>

      <Divider />

      {/* ── Current Initiative — ELOQ ─────────────────────────────────────────── */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px' }}>
        <SectionLabel>Current Initiative</SectionLabel>

        <a
          href={ELOQ_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', display: 'block' }}
        >
          <div
            style={{
              backgroundColor: 'rgba(129, 140, 248, 0.05)',
              border: '1px solid rgba(129, 140, 248, 0.2)',
              borderRadius: 16,
              padding: '36px 40px',
              transition: 'border-color 0.2s, background-color 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(129, 140, 248, 0.45)'
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(129, 140, 248, 0.08)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(129, 140, 248, 0.2)'
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(129, 140, 248, 0.05)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 16 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#818cf8', marginBottom: 8 }}>
                  Active · MVP
                </p>
                <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f1f1f3', letterSpacing: '-0.02em', marginBottom: 0 }}>
                  ELOQ
                </h2>
              </div>
              <span style={{ color: '#818cf8', fontSize: 20, marginTop: 4, flexShrink: 0 }}>↗</span>
            </div>
            <p style={{ fontSize: 16, color: '#8b8b9e', lineHeight: 1.75, maxWidth: 520 }}>
              An AI platform helping professionals organize their career story, prepare for high-stakes
              interviews, and communicate with clarity under pressure. Built around the idea that most
              professionals have more evidence of excellence than they can access when it matters.
            </p>
            <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['Career intelligence', 'Interview prep', 'AI synthesis', 'Professional narrative'].map(tag => (
                <span key={tag} style={{
                  fontSize: 12, color: '#818cf8',
                  backgroundColor: 'rgba(129, 140, 248, 0.1)',
                  border: '1px solid rgba(129, 140, 248, 0.15)',
                  padding: '4px 10px', borderRadius: 6,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </section>

      <Divider />

      {/* ── Focus Areas ──────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px' }}>
        <SectionLabel>Focus Areas</SectionLabel>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {FOCUS_AREAS.map(area => (
            <div
              key={area.title}
              style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 14,
                padding: '28px 28px',
                transition: 'border-color 0.2s, background-color 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.14)'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.05)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'
                ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(255,255,255,0.03)'
              }}
            >
              <div style={{ color: '#818cf8', marginBottom: 16 }}>{area.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: '#f1f1f3', marginBottom: 8, letterSpacing: '-0.01em' }}>
                {area.title}
              </h3>
              <p style={{ fontSize: 14, color: '#6b6b7e', lineHeight: 1.7 }}>
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ── Status ───────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.07)',
          borderRadius: 100,
          padding: '8px 20px',
          marginBottom: 28,
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            backgroundColor: '#818cf8',
            boxShadow: '0 0 8px 2px rgba(129, 140, 248, 0.5)',
            display: 'inline-block',
          }} />
          <span style={{ fontSize: 12, color: '#8b8b9e', fontWeight: 500 }}>
            Early stage · Active development
          </span>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 600, color: '#f1f1f3', marginBottom: 16, letterSpacing: '-0.02em' }}>
          Currently in concept and MVP exploration.
        </h2>
        <p style={{ fontSize: 16, color: '#6b6b7e', lineHeight: 1.75, maxWidth: 460, margin: '0 auto 40px' }}>
          Think Growth Labs is building in public at an early stage. ELOQ is the first initiative.
          More tools will follow as the lab evolves.
        </p>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            color: '#8b8b9e', fontSize: 14, fontWeight: 500,
            textDecoration: 'none',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#f1f1f3')}
          onMouseLeave={e => (e.currentTarget.style.color = '#8b8b9e')}
        >
          Follow the journey on LinkedIn →
        </a>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '40px 24px',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#f1f1f3', marginBottom: 4 }}>
              Think Growth Labs
            </p>
            <p style={{ fontSize: 12, color: '#4a4a5e' }}>
              AI-enabled professional development tools
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href={ELOQ_URL} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: '#6b6b7e', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#818cf8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b6b7e')}
            >
              ELOQ
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: '#6b6b7e', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f1f1f3')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b6b7e')}
            >
              LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`}
              style={{ fontSize: 13, color: '#6b6b7e', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f1f1f3')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b6b7e')}
            >
              Contact
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}

// ── Shared components ─────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
      textTransform: 'uppercase', color: '#4a4a5e',
      marginBottom: 32,
    }}>
      {children}
    </p>
  )
}

function Divider() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.06)' }} />
    </div>
  )
}

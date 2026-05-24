'use client'

// ── Think Growth Labs — thinkgrowthlabs.com ───────────────────────────────────
// AI product lab. Intentional restraint.

const LINKEDIN_URL = 'https://www.linkedin.com/in/vichet-horn-thinkgrowth/'
const EMAIL = 'thinkgrowthlabs@gmail.com'

export default function Home() {
  return (
    <main style={{ backgroundColor: '#09090f', minHeight: '100vh', color: '#f1f1f3' }}>

      {/* ── Nav ──────────────────────────────────────────────────────────────── */}
      <nav className="fade-up nav-inner" style={{ maxWidth: 760, margin: '0 auto', padding: '28px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#f1f1f3', letterSpacing: '-0.01em' }}>
          Think Growth Labs
        </span>
        <a
          href={`mailto:${EMAIL}`}
          style={{
            fontSize: 13,
            color: '#6b6b7e',
            textDecoration: 'none',
            fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#f1f1f3')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6b6b7e')}
        >
          Get in touch
        </a>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px 100px', textAlign: 'center' }}>

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
          maxWidth: 600,
          margin: '0 auto 24px',
        }}>
          Building AI-enabled tools for professional growth.
        </h1>

        <p className="fade-up fade-up-delay-3" style={{
          fontSize: 17,
          color: '#8b8b9e',
          lineHeight: 1.75,
          maxWidth: 460,
          margin: '0 auto 48px',
        }}>
          A founder-led product lab exploring the intersection of AI, leadership,
          and professional performance.
        </p>

        <div className="fade-up fade-up-delay-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              backgroundColor: 'rgba(255,255,255,0.06)',
              color: '#c8c8d8',
              fontWeight: 500, fontSize: 14,
              padding: '12px 24px',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.1)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s, background-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = '#f1f1f3'
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.09)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.color = '#c8c8d8'
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'
            }}
          >
            Connect on LinkedIn
          </a>
          <a
            href={`mailto:${EMAIL}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              backgroundColor: 'transparent',
              color: '#6b6b7e',
              fontWeight: 500, fontSize: 14,
              padding: '12px 24px',
              borderRadius: 12,
              border: '1px solid rgba(255,255,255,0.06)',
              textDecoration: 'none',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
              e.currentTarget.style.color = '#f1f1f3'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              e.currentTarget.style.color = '#6b6b7e'
            }}
          >
            Get in touch
          </a>
        </div>

      </section>

      <Divider />

      {/* ── About ────────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px' }}>
        <SectionLabel>About</SectionLabel>
        <div style={{ maxWidth: 580 }}>
          <p style={{ fontSize: 17, color: '#c8c8d8', lineHeight: 1.85, marginBottom: 20, textAlign: 'justify' }}>
            Think Growth Labs is a founder-led AI product lab exploring the intersection of
            artificial intelligence, professional development, and human performance.
          </p>
          <p style={{ fontSize: 17, color: '#8b8b9e', lineHeight: 1.85, textAlign: 'justify' }}>
            The work is early-stage, independent, and intentional — built on the belief that
            the right intelligence, delivered at the right moment, changes outcomes.
          </p>
        </div>
      </section>

      <Divider />

      {/* ── Current Initiative — ELOQ ─────────────────────────────────────────── */}
      <section className="section-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px' }}>
        <SectionLabel>Current Initiative</SectionLabel>

        <div
          className="eloq-card"
          style={{
            backgroundColor: 'rgba(129, 140, 248, 0.04)',
            border: '1px solid rgba(129, 140, 248, 0.15)',
            borderRadius: 16,
            padding: '36px 40px',
          }}
        >
          <div style={{ marginBottom: 16 }}>
            <p style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: '#818cf8', marginBottom: 10,
            }}>
              In Active Development
            </p>
            <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f1f1f3', letterSpacing: '-0.02em', marginBottom: 0 }}>
              ELOQ
            </h2>
          </div>
          <p style={{ fontSize: 16, color: '#8b8b9e', lineHeight: 1.8, maxWidth: 520, marginBottom: 24, textAlign: 'justify' }}>
            An AI platform designed to help professionals communicate with clarity under pressure.
            Built around the idea that most professionals have more evidence of excellence
            than they can access when it matters most.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {['Communication intelligence', 'AI synthesis', 'Professional readiness', 'Context-aware'].map(tag => (
              <span key={tag} style={{
                fontSize: 12, color: '#6b6b7e',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '4px 10px', borderRadius: 6,
              }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── Status ───────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
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
            Early stage · Active exploration
          </span>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 600, color: '#f1f1f3', marginBottom: 16, letterSpacing: '-0.02em' }}>
          Currently in concept and MVP exploration.
        </h2>
        <p style={{ fontSize: 16, color: '#5a5a6e', lineHeight: 1.8, maxWidth: 420, margin: '0 auto' }}>
          Think Growth Labs is early-stage and focused. The work is intentional,
          not announced. More will follow as each initiative matures.
        </p>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 24px' }}>
        <div className="footer-inner" style={{ maxWidth: 760, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#c8c8d8', marginBottom: 4 }}>
              Think Growth Labs
            </p>
            <p style={{ fontSize: 12, color: '#3a3a4e' }}>
              AI product lab
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 13, color: '#4a4a5e', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c8c8d8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a4a5e')}
            >
              LinkedIn
            </a>
            <a href={`mailto:${EMAIL}`}
              style={{ fontSize: 13, color: '#4a4a5e', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#c8c8d8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#4a4a5e')}
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
      textTransform: 'uppercase', color: '#3a3a4e',
      marginBottom: 32,
    }}>
      {children}
    </p>
  )
}

function Divider() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.05)' }} />
    </div>
  )
}

'use client'

// ── Think Growth Labs — thinkgrowthlabs.com ───────────────────────────────────
// A founder-led AI product COMPANY. ELOQ is the first product (live). The Products
// section is a list, so future products are added by appending to PRODUCTS — no redesign.

import { useState } from 'react'

const LINKEDIN_URL = 'https://www.linkedin.com/in/vichet-horn-thinkgrowth/'
const EMAIL = 'thinkgrowthlabs@gmail.com'
const ELOQ_URL = 'https://witheloq.com'

type Product = {
  name: string
  tagline: string
  description: string[]
  capabilities: string[]
  status: 'live' | 'building'
  href: string
  ctaLabel: string
}

// The company's product line. Today: ELOQ. Future products append here.
const PRODUCTS: Product[] = [
  {
    name: 'ELOQ',
    tagline: 'Preparation creates eloquence.',
    description: [
      'ELOQ is an AI-powered interview preparation platform that helps professionals organize their experience, prepare with confidence, and communicate clearly under pressure.',
      'Instead of generating generic answers, ELOQ helps professionals remember their own experience, build stronger stories, and rehearse until their communication becomes natural.',
    ],
    capabilities: [
      'Career Intelligence',
      'Interview Intelligence',
      'Professional Memory',
      'AI-powered Preparation',
      'Personalized Rehearsal',
      'Communication Coaching',
    ],
    status: 'live',
    href: ELOQ_URL,
    ctaLabel: 'Learn more about ELOQ',
  },
]

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
          style={{ fontSize: 13, color: '#6b6b7e', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#f1f1f3')}
          onMouseLeave={e => (e.currentTarget.style.color = '#6b6b7e')}
        >
          Get in touch
        </a>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="hero-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px 100px', textAlign: 'center' }}>

        <div className="glow-pulse fade-up" style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#818cf8', margin: '0 auto 40px' }} />

        <p className="fade-up fade-up-delay-1" style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#818cf8', marginBottom: 20 }}>
          Think Growth Labs
        </p>

        <h1 className="fade-up fade-up-delay-2" style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.025em', color: '#f1f1f3', maxWidth: 620, margin: '0 auto 24px' }}>
          Building AI-enabled products for professional growth.
        </h1>

        <p className="fade-up fade-up-delay-3" style={{ fontSize: 17, color: '#8b8b9e', lineHeight: 1.75, maxWidth: 500, margin: '0 auto 48px' }}>
          We design AI products that help professionals prepare, communicate, and perform at their best.
        </p>

        <div className="fade-up fade-up-delay-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <LinkButton href={ELOQ_URL} variant="primary" external>Explore ELOQ →</LinkButton>
          <LinkButton href={LINKEDIN_URL} variant="ghost" external>Connect on LinkedIn</LinkButton>
        </div>

      </section>

      <Divider />

      {/* ── About ────────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px' }}>
        <SectionLabel>About</SectionLabel>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <p style={{ fontSize: 17, color: '#c8c8d8', lineHeight: 1.85, marginBottom: 20 }}>
            Think Growth Labs is a founder-led AI product company focused on building thoughtful
            software for professional growth.
          </p>
          <p style={{ fontSize: 17, color: '#8b8b9e', lineHeight: 1.85, marginBottom: 20 }}>
            Our products combine artificial intelligence with practical experience to help professionals
            communicate more clearly, prepare more effectively, and perform with confidence when it
            matters most.
          </p>
          <p style={{ fontSize: 17, color: '#8b8b9e', lineHeight: 1.85 }}>
            We believe AI should amplify human capability—not replace it.
          </p>
        </div>
      </section>

      <Divider />

      {/* ── Products ─────────────────────────────────────────────────────────── */}
      <section className="section-pad" style={{ maxWidth: 760, margin: '0 auto', padding: '80px 24px' }}>
        <SectionLabel>Products</SectionLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {PRODUCTS.map(p => <ProductCard key={p.name} product={p} />)}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 24px', marginTop: 40 }}>
        <div className="footer-inner" style={{ maxWidth: 760, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: '#c8c8d8', marginBottom: 4 }}>
              Think Growth Labs
            </p>
            <p style={{ fontSize: 12, color: '#3a3a4e' }}>
              AI product company
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            <FooterLink href={ELOQ_URL} external>ELOQ</FooterLink>
            <FooterLink href={LINKEDIN_URL} external>LinkedIn</FooterLink>
            <FooterLink href={`mailto:${EMAIL}`}>Contact</FooterLink>
          </div>
        </div>
      </footer>

    </main>
  )
}

// ── Shared components ─────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="eloq-card fade-up"
      style={{
        backgroundColor: 'rgba(129, 140, 248, 0.04)',
        border: '1px solid rgba(129, 140, 248, 0.15)',
        borderRadius: 16,
        padding: '36px 40px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 6, flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: 26, fontWeight: 700, color: '#f1f1f3', letterSpacing: '-0.02em', margin: 0 }}>
          {product.name}
        </h2>
        {product.status === 'live' && <LiveBadge />}
      </div>

      <p style={{ fontSize: 14, fontWeight: 600, color: '#818cf8', letterSpacing: '0.01em', marginBottom: 20 }}>
        {product.tagline}
      </p>

      {product.description.map((para, i) => (
        <p key={i} style={{ fontSize: 16, color: '#8b8b9e', lineHeight: 1.8, maxWidth: 560, marginBottom: 16 }}>
          {para}
        </p>
      ))}

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', margin: '20px 0 28px' }}>
        {product.capabilities.map(cap => (
          <span key={cap} style={{
            fontSize: 12, color: '#9a9ab0',
            backgroundColor: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            padding: '5px 11px', borderRadius: 6,
          }}>
            {cap}
          </span>
        ))}
      </div>

      <LinkButton href={product.href} variant="primary" external>{product.ctaLabel} →</LinkButton>
    </div>
  )
}

function LiveBadge() {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 7,
      backgroundColor: 'rgba(52, 211, 153, 0.08)',
      border: '1px solid rgba(52, 211, 153, 0.25)',
      borderRadius: 100, padding: '5px 12px',
    }}>
      <span className="glow-pulse" style={{
        width: 6, height: 6, borderRadius: '50%',
        backgroundColor: '#34d399',
        boxShadow: '0 0 8px 2px rgba(52, 211, 153, 0.5)',
        display: 'inline-block',
      }} />
      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#34d399' }}>
        Live
      </span>
    </span>
  )
}

function LinkButton({ href, children, variant, external }: {
  href: string; children: React.ReactNode; variant: 'primary' | 'ghost'; external?: boolean
}) {
  const [hover, setHover] = useState(false)
  const primary = variant === 'primary'
  const style: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontWeight: 500, fontSize: 14, padding: '12px 24px',
    borderRadius: 12, textDecoration: 'none',
    transition: 'border-color 0.2s, color 0.2s, background-color 0.2s',
    backgroundColor: primary
      ? (hover ? 'rgba(129,140,248,0.22)' : 'rgba(129,140,248,0.14)')
      : (hover ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.06)'),
    border: primary
      ? `1px solid rgba(129,140,248,${hover ? 0.55 : 0.35})`
      : `1px solid rgba(255,255,255,${hover ? 0.2 : 0.1})`,
    color: primary ? (hover ? '#f1f1f3' : '#dcdcf5') : (hover ? '#f1f1f3' : '#c8c8d8'),
  }
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </a>
  )
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      style={{ fontSize: 13, color: '#4a4a5e', textDecoration: 'none', transition: 'color 0.2s' }}
      onMouseEnter={e => (e.currentTarget.style.color = '#c8c8d8')}
      onMouseLeave={e => (e.currentTarget.style.color = '#4a4a5e')}
    >
      {children}
    </a>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#3a3a4e', marginBottom: 32 }}>
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

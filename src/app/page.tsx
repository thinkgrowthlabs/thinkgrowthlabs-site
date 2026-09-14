'use client'

// ── Think Growth Labs — thinkgrowthlabs.com ───────────────────────────────────
// Parent AI product company; ELOQ is the flagship product (live). The page is an
// editorial, single-column narrative: who we are → what we believe → the product
// → how it works. Structured so future products append as new sections without a
// redesign. No dependencies; motion is CSS + a light IntersectionObserver.

import { useEffect, useRef, useState } from 'react'

// Founder is the strongest public presence behind TGL — "Meet the Founder" and the
// footer "Founder LinkedIn" both point to Vichet Horn's PERSONAL profile (intentional;
// not the company or ELOQ LinkedIn pages).
const FOUNDER_LINKEDIN = 'https://www.linkedin.com/in/vichet-horn-thinkgrowth/'
const EMAIL = 'thinkgrowthlabs@gmail.com'
const ELOQ_URL = 'https://witheloq.com'

// ELOQ's capability stanza — the feature concepts, elevated from chips to a spoken list.
const CAPABILITIES = [
  ['Find', 'opportunities that fit.'],
  ['Understand', 'where you stand.'],
  ['Organize', 'the experience that proves it.'],
  ['Prepare', 'stronger answers.'],
  ['Rehearse', 'until they sound like you.'],
]

// The ELOQ journey — experience becomes the next job; Professional Memory is the foundation.
const JOURNEY = [
  { key: 'EXPERIENCE', sub: "what you've done", role: 'start' },
  { key: 'FIND', sub: 'roles that fit' },
  { key: 'FIT', sub: 'where you stand' },
  { key: 'PREPARE', sub: 'stronger answers' },
  { key: 'REHEARSE', sub: 'in your voice' },
  { key: 'NEXT JOB', sub: "what's next", role: 'end' },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const mainRef = useRef<HTMLElement>(null)

  // Sticky-nav treatment appears once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll reveal — opt-in via JS so no-JS and reduced-motion users always see content.
  useEffect(() => {
    const root = mainRef.current
    if (!root) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    root.classList.add('reveal-on')
    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target) }
      })
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      {/* ── Nav ─────────────────────────────────────────────────────────────── */}
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#top" className="wordmark" aria-label="Think Growth Labs — home">
            <span className="dot" aria-hidden="true" />
            Think Growth Labs
          </a>
          <a href={`mailto:${EMAIL}`} className="nav-link">Get in touch</a>
        </div>
      </header>

      <main id="top" ref={mainRef}>

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="hero" aria-labelledby="hero-h">
          <div className="hero-glow" aria-hidden="true" />
          <HeroField />
          <div className="container hero-content">
            <p className="eyebrow fade-up d1">Think Growth Labs</p>
            <h1 id="hero-h" className="fade-up d2">
              We build AI products that turn experience into <span className="accent">what comes next.</span>
            </h1>
            <p className="hero-sub fade-up d3">
              Think Growth Labs builds thoughtful AI products that help professionals understand
              what they know, make more of what they’ve done, and move forward with clarity and confidence.
            </p>
            <div className="hero-cta fade-up d4">
              <a href={ELOQ_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Use ELOQ <span className="arrow" aria-hidden="true">→</span>
              </a>
              <a href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Meet the Founder <span className="arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <div className="container"><hr className="hr" /></div>

        {/* ── About ─────────────────────────────────────────────────────────── */}
        <section className="section" aria-labelledby="about-h">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="section-index">01</span>
              <span className="eyebrow eyebrow-muted" id="about-h">About</span>
            </div>
            <div className="about-grid">
              <p className="about-lead" data-reveal>
                Your experience should become <em>more valuable with time</em> — not harder to access.
              </p>
              <div className="about-body" data-reveal>
                <p>
                  Think Growth Labs is a founder-led AI product company building thoughtful software
                  around a simple idea: your experience should compound, not fade.
                </p>
                <p>
                  We use AI to help professionals organize what they know, surface what matters,
                  and apply their experience when opportunity appears.
                </p>
                <p className="quiet">AI should amplify human capability — not replace it.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container"><hr className="hr" /></div>

        {/* ── ELOQ — flagship product ───────────────────────────────────────── */}
        <section className="section" aria-labelledby="eloq-h">
          <div className="container">
            <div className="section-head" data-reveal>
              <span className="section-index">02</span>
              <span className="eyebrow eyebrow-muted">Flagship product</span>
            </div>

            <div className="eloq" data-reveal>
              <div className="eloq-top">
                {/* ELOQ product lockup — the FINAL locked Signature Identity (canonical outlined
                    vector; the same wordmark + Q app icon used on witheloq.com and in the app).
                    Never a font or hand-typed "ELOQ". */}
                <img className="eloq-appicon" src="/eloq-app-icon.svg" alt="" aria-hidden="true" width={52} height={52} />
                <img className="eloq-wordmark" id="eloq-h" src="/eloq-wordmark.svg" alt="ELOQ" width={214} height={47} />
                <span className="badge-live"><span className="dot" aria-hidden="true" />Live</span>
              </div>

              <p className="eloq-tagline">Preparation creates eloquence.</p>
              <h2 className="eloq-statement">Your AI partner to get your next job.</h2>
              <p className="eloq-support">
                ELOQ brings your experience, job search, and interview preparation into one
                intelligent workspace.
              </p>

              <div className="stanza">
                {CAPABILITIES.map(([verb, rest], i) => (
                  <div className="stanza-row" data-reveal="stagger" style={{ ['--rd' as string]: `${i * 0.06}s` }} key={verb}>
                    <span className="n">{String(i + 1).padStart(2, '0')}</span>
                    <span className="t"><b>{verb}</b> {rest}</span>
                  </div>
                ))}
              </div>

              <div className="memory" data-reveal>
                <span className="glyph" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="2.4" fill="#a5b4fc" />
                    <circle cx="9" cy="9" r="6.5" stroke="#818cf8" strokeOpacity="0.5" />
                    <circle cx="9" cy="2" r="1.1" fill="#818cf8" />
                    <circle cx="15" cy="12" r="1.1" fill="#818cf8" />
                    <circle cx="3" cy="12" r="1.1" fill="#818cf8" />
                  </svg>
                </span>
                <p>
                  At the center is <b>Professional Memory</b> — a living understanding of your career
                  that helps ELOQ surface the right story, strength, or evidence when you need it.
                </p>
              </div>

              <p className="eloq-closer">
                No generic answers. No invented experience.{' '}
                <span className="quiet">Your career — organized, activated, and ready for what’s next.</span>
              </p>

              <div className="eloq-cta">
                <a href={ELOQ_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Use ELOQ <span className="arrow" aria-hidden="true">→</span>
                </a>
              </div>

              {/* ── How ELOQ works — the journey ──────────────────────────────── */}
              <div className="journey" data-reveal aria-label="How ELOQ works: experience becomes your next job">
                <div className="journey-cap">
                  <span className="eyebrow">How it works</span>
                  <span className="rule" aria-hidden="true" />
                </div>

                <div className="flow">
                  <div className="flow-track">
                    {JOURNEY.map((s, i) => (
                      <div
                        key={s.key}
                        className={`stage${s.role === 'start' ? ' is-start' : ''}${s.role === 'end' ? ' is-end' : ''}`}
                        data-reveal="stagger"
                        style={{ ['--rd' as string]: `${i * 0.08}s` }}
                      >
                        <span className="node" aria-hidden="true"><i /></span>
                        <span className="label">{s.key}</span>
                        <span className="sub">{s.sub}</span>
                      </div>
                    ))}
                  </div>

                  {/* risers connect each stage down into the Professional Memory foundation (desktop) */}
                  <div className="risers" aria-hidden="true">
                    {JOURNEY.map((s, i) => (
                      <span key={s.key} style={{ left: `${((i + 0.5) / JOURNEY.length) * 100}%` }} />
                    ))}
                  </div>

                  <div className="foundation">
                    <span className="k">Professional Memory</span>
                    <span className="v">the intelligence beneath every step</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <p className="name">Think Growth Labs</p>
            <p className="tag">AI product company</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a className="footer-link" href={ELOQ_URL} target="_blank" rel="noopener noreferrer">ELOQ</a>
            <a className="footer-link" href={FOUNDER_LINKEDIN} target="_blank" rel="noopener noreferrer">Founder LinkedIn</a>
            <a className="footer-link" href={`mailto:${EMAIL}`}>Contact</a>
          </nav>
        </div>
      </footer>
    </>
  )
}

// ── Hero background — an abstract "signal" field: scattered nodes on the left
//    converging into an aligned, brighter node on the right (experience → next).
function HeroField() {
  return (
    <div className="hero-field" aria-hidden="true">
      <svg width="100%" height="100%" viewBox="0 0 1200 560" preserveAspectRatio="xMidYMid slice" fill="none">
        <defs>
          <linearGradient id="tgl-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#818cf8" stopOpacity="0.05" />
            <stop offset="1" stopColor="#818cf8" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {/* connective lines drifting rightward toward convergence */}
        <g stroke="url(#tgl-line)" strokeWidth="1">
          <path d="M120 130 L400 200 L720 250 L1020 280" />
          <path d="M90 330 L360 300 L700 270 L1020 280" />
          <path d="M180 430 L470 360 L760 300 L1020 280" />
          <path d="M150 240 L520 250 L1020 280" />
        </g>
        {/* faint scattered nodes (experience) */}
        <g fill="#c7cbf5">
          {[
            [120, 130], [90, 330], [180, 430], [150, 240], [360, 300],
            [400, 200], [470, 360], [520, 250], [700, 270], [720, 250], [760, 300],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={2} opacity={0.28} />
          ))}
        </g>
        {/* convergence node (what comes next) */}
        <circle cx="1020" cy="280" r="5" fill="#a5b4fc" />
        <circle cx="1020" cy="280" r="12" stroke="#818cf8" strokeOpacity="0.5" />
      </svg>
    </div>
  )
}

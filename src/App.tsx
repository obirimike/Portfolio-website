import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import About from './sections/About/About'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div
      style={{
        fontFamily: 'var(--font-body)',
        background: 'var(--background)',
        color: 'var(--foreground)',
        minHeight: '100vh',
      }}
    >
      <Navbar />

      <Hero />

      <Projects />

      <About />

      {/* Process */}
      <section id="process" className="process-section">
        <h2 className="process-title">
          How I build
        </h2>

        <div className="process-grid">
          {[
            {
              num: '01',
              title: 'Understand',
              desc: 'Requirements gathering, stakeholder alignment, and defining success metrics before a single line of code is written.',
            },
            {
              num: '02',
              title: 'Architect',
              desc: 'System design, tech stack decisions, API contracts, and data modeling that account for scale from the start.',
            },
            {
              num: '03',
              title: 'Build',
              desc: 'Clean, tested, and reviewed code shipped incrementally with meaningful commits and a focus on maintainability.',
            },
            {
              num: '04',
              title: 'Ship & Iterate',
              desc: 'Testing, feedback, performance improvements, and continuous refinement long after the first version is built.',
            },
          ].map((step) => (
            <div
              key={step.num}
              className="process-card"
            >
              <p className="process-number">
                {step.num}
              </p>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-container">
          <span className="footer-logo">
            Addo Michael Obiri
          </span>

          <div className="footer-links">
            {[
              {
                name: 'GitHub',
                href: 'https://github.com/obirimike',
              },
              {
                name: 'LinkedIn',
                href: 'https://www.linkedin.com/in/michael-addo-k23',
              },
              {
                name: 'Twitter',
                href: 'https://twitter.com/kweku_mk',
              },
              {
                name: 'Email',
                href: 'mailto:michaelobiri022@gmail.com',
              },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={
                  link.href.startsWith('mailto:')
                    ? undefined
                    : '_blank'
                }
                rel={
                  link.href.startsWith('mailto:')
                    ? undefined
                    : 'noopener noreferrer'
                }
                className="footer-link"
              >
                {link.name}
              </a>
            ))}
          </div>

          <span
            style={{
              fontSize: '12px',
              color: 'var(--muted-foreground)',
              letterSpacing: '0.02em',
            }}
          >
            © 2026
          </span>
        </div>
      </footer>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </div>
  )
}

export default App
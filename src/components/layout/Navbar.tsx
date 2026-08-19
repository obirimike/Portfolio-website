import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = ['About', 'Projects', 'Process', 'Contact']

  return (
    <nav style={{ borderBottom: '1px solid var(--border)' }}>
      <div className="nav-container">

        <span className="nav-logo">
          Addo Michael Obiri
        </span>

        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '×' : '☰'}
        </button>

      </div>

      {mobileMenuOpen && (
        <div
          style={{
            borderTop: '1px solid var(--border)',
            background: 'var(--background)',
            padding: '16px 20px 20px',
          }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
              style={{
                display: 'block',
                padding: '12px 0',
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
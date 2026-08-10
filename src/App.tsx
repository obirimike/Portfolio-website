import React from 'react'
import { useState } from 'react'
import profilePic from './assets/profilePic/MIKE.jpeg'

const caseStudies = [
  {
    id: 1,
    title: 'Building a scalable mobile app for an eCommerce startup in Ghana',
    category: 'Mobile App Development',
    year: '2026',
    tags: ['React Native', 'Expo', 'Express.js', 'MongoDB', 'AWS'],
    outcome: 'Still in Production, but early user feedback is positive',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format',
    color: '#dce4f0',
  },
  {
    id: 2,
    title: 'Website Development for a Ghanaian Education institution with integrated payment processing',
    category: 'Full Stack Web Development',
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Stripe API'],
    outcome: 'Successfully launched the website with integrated payment processing, resulting in a 30% increase in online enrollment',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop&auto=format',
    color: '#dceae0',
  },
  {
    id: 3,
    title: 'Built an expert system for Cafeteria Menu Planning using AI and Machine Learning',
    category: 'Expert Systems Development',
    year: '2023',
    tags: ['React','Node.js', 'Tailwind CSS', 'Python', 'Machine Learning'],
    outcome: 'Successfully developed an expert system that recommends optimal cafeteria menus based on dietary restrictions, nutritional requirements, and user preferences, resulting in a 25% increase in customer satisfaction',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format',
    color: '#e8e4dc',
  },
  {
    id: 4,
    title: 'Open-source component library adopted across 3 local startups',
    category: 'Open Source',
    year: '2022',
    tags: ['React', 'Storybook', 'npm'],
    outcome: '800+ GitHub stars, 12k weekly downloads',
    image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=900&h=600&fit=crop&auto=format',
    color: '#e4dcea',
  },
  {
    id: 5,
    title: 'Real-time chat application for a local NGO to facilitate communication between volunteers and beneficiaries',
    category: 'Real-time Communication',
    year: '2021',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    outcome: 'Successfully launched the chat application, resulting in a 40% increase in volunteer engagement and improved communication with beneficiaries',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format',
    color: '#e4e8dc',
  }
]

const skills = [
  'React', 'TypeScript', 'Node.js', 'PostgreSQL','MongoDB', 'REST APIs',
  'Git', 'Docker', 'Python', 'PHP', 'UI/UX Design', 'System Design', 'Linux', 'Agile',
]

export default function App() {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const categories = ['All', ...Array.from(new Set(caseStudies.map(c => c.category)))]

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeFilter)

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--background)', color: 'var(--foreground)', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{ borderBottom: '1px solid var(--border)' }}>
  <div className="nav-container">

    <span className="nav-logo">
      Addo Michael Obiri
    </span>

    <div className="nav-links">
      {['Work', 'About', 'Process', 'Contact'].map(item => (
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
      {['Work', 'About', 'Process', 'Contact'].map(item => (
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
    {/* Hero */}
    <section className="hero-section">
     <div className="hero-content">
      <div className="hero-main">
      <p className="hero-eyebrow">
        Software Developer — Accra, Ghana
      </p>

      <h1 className="hero-title">
        I build software that<br />
        <em className="hero-highlight">
          solves real problems.
        </em>
      </h1>
    </div>

      <div className="hero-description">
       <p>
        4 years of building and shipping production systems across
        education, fintech, and the social sector. I care about clean code,
        developer empathy, and software that holds up under pressure.
        </p>
      </div>
    </div>

     {/* Skills strip */}
      <div className="skills-strip">
       {skills.map((s) => (
       <span
        key={s}
        className="skill-item"
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = 'var(--foreground)')
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = 'var(--muted-foreground)')
        }
      >
        {s}
      </span>
    ))}
  </div>
  </section>

      {/* Work */}
     <section id="work" className="work-section">
        <div className="work-header">
  <h2 className="section-title">
    Selected Projects
  </h2>

  <div className="project-filters">
    {categories.map(cat => (
      <button
        key={cat}
        onClick={() => setActiveFilter(cat)}
        className={`filter-button ${
          activeFilter === cat ? 'active' : ''
        }`}
      >
        {cat}
      </button>
    ))}
  </div>
</div>
       <div className="projects-grid">
          {filtered.map((study, i) => (
            <CaseStudyCard
             key={study.id} 
             study={study} 
             large={i === 0 && filtered.length >= 3}
              />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ borderTop: '1px solid var(--border)', background: 'var(--card)' }}>
        <div style={{ width: '100%', maxWidth: '1180px', margin: '0 auto', padding: '100px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '340px 1fr', gap: '96px', alignItems: 'start' }}>

            {/* Photo col */}
            <div>
              <div style={{ width: '100%', aspectRatio: '3/4', background: 'var(--muted)', overflow: 'hidden' }}>
                <img
                  src={profilePic}
                  alt="Portrait of Addo Michael Obiri"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'grayscale(20%)' }}
                />
              </div>
              <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  ['Currently', 'Freelancing / Open to roles'],
                  ['Based in', 'Accra, Ghana'],
                  ['Experience', '4 years'],
                  ['Education', 'BSc Computer Science, University of Ghana'],
                ].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', gap: '12px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-foreground)', flexShrink: 0 }}>{label}</span>
                    <span style={{ fontSize: '13px', fontWeight: 400, textAlign: 'right' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio col */}
            <div style={{ paddingTop: '8px' }}>
              <p style={{ fontSize: '13px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '28px' }}>
                About
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 300,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                margin: '0 0 40px',
              }}>
                Code as craft,<br />
                <em style={{ fontStyle: 'italic' }}>not commodity.</em>
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '540px' }}>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--muted-foreground)', margin: 0, fontWeight: 300 }}>
                  I'm a software developer with a BSc in Computer Science from the University of Ghana and four years of experience building production systems across fintech, mobility, NGO operations, and open-source tooling. I thrive in environments where good engineering can directly change outcomes for real people.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--muted-foreground)', margin: 0, fontWeight: 300 }}>
                  My work spans the full stack — from designing PostgreSQL schemas and WebSocket servers to building accessible React interfaces and shipping npm packages used in production. I write code that others can read, test, and extend without needing to ask me questions.
                </p>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--muted-foreground)', margin: 0, fontWeight: 300 }}>
                  I'm currently freelancing and open to full-time roles — especially with teams building infrastructure, developer tools, or products with impact in emerging markets.
                </p>
              </div>
              <div style={{ marginTop: '48px', display: 'flex', gap: '16px' }}>
                <a
                  href="mailto:addo@addoobiri.dev"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'var(--foreground)',
                    color: 'var(--primary-foreground)',
                    padding: '14px 28px',
                    fontSize: '14px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Get in touch
                </a>
                <a
                  href="#"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    border: '1px solid var(--border)',
                    color: 'var(--foreground)',
                    padding: '14px 28px',
                    fontSize: '14px',
                    fontWeight: 400,
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--foreground)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border)')}
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ width: '100%', maxWidth: '1180px', margin: '0 auto', padding: '100px 32px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '56px' }}>
          How I build
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border)' }}>
          {[
            { num: '01', title: 'Understand', desc: 'Requirements gathering, stakeholder alignment, and defining success metrics before a single line of code is written.' },
            { num: '02', title: 'Architect', desc: 'System design, tech stack decisions, API contracts, and data modeling that account for scale from the start.' },
            { num: '03', title: 'Build', desc: 'Clean, tested, and reviewed code shipped incrementally with CI/CD pipelines and meaningful commit history.' },
            { num: '04', title: 'Ship & Iterate', desc: 'Monitoring, feedback loops, performance tuning, and continuous improvement long after the first deploy.' },
          ].map(step => (
            <div
              key={step.num}
              style={{ background: 'var(--background)', padding: '40px 32px', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--card)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--background)')}
            >
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '36px', fontWeight: 300, color: 'var(--muted)', margin: '0 0 20px', letterSpacing: '-0.02em' }}>
                {step.num}
              </p>
              <h3 style={{ fontSize: '16px', fontWeight: 600, margin: '0 0 12px', letterSpacing: '-0.01em' }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--muted-foreground)', margin: 0, fontWeight: 300 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ borderTop: '1px solid var(--border)', padding: '40px 32px' }}>
        <div style={{ width: '100%', maxWidth: '1180px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '16px', letterSpacing: '-0.02em' }}>
            Addo Michael Obiri
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {(
              [
                { name: 'GitHub', href: 'https://github.com/obirimike' },
                { name: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-addo-k23' },
                { name: 'Twitter', href: 'https://twitter.com/kweku_mk' },
                { name: 'Email', href: 'mailto:michaelobiri022@gmail.com' },
              ] as { name: string; href: string }[]
            ).map(link => (
              <a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                style={{ fontSize: '13px', color: 'var(--muted-foreground)', textDecoration: 'none', letterSpacing: '0.02em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >
                {link.name}
              </a>
            ))}
          </div>
          <span style={{ fontSize: '12px', color: 'var(--muted-foreground)', letterSpacing: '0.02em' }}>
            © 2026
          </span>
        </div>
      </footer>

    </div>
  )
}

function CaseStudyCard({ study, large }: { study: typeof caseStudies[0]; large: boolean }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
       className={`case-study-card ${large ? 'large' : ''}`}
       style={{
         background: study.color,
       }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
       className={`case-study-image ${large ? 'large' : 'normal'}`}
       >

        <img
          src={study.image}
          alt={study.title}
          
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: hovered ? 'rgba(22,24,29,0.15)' : 'rgba(22,24,29,0)',
          transition: 'background 0.4s',
        }} />
      </div>

      <div style={{ padding: large ? '32px 40px' : '24px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)' }}>
            {study.category}
          </span>
          <span style={{ fontSize: '12px', color: 'var(--muted-foreground)', letterSpacing: '0.04em' }}>
            {study.year}
          </span>
        </div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: large ? '24px' : '18px',
          fontWeight: 400,
          lineHeight: 1.3,
          letterSpacing: '-0.015em',
          margin: '0 0 16px',
          maxWidth: large ? '600px' : '100%',
        }}>
          {study.title}
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {study.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                background: 'rgba(22,24,29,0.07)',
                color: 'var(--muted-foreground)',
              }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{
            fontSize: '13px',
            color: 'var(--foreground)',
            fontWeight: 400,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            opacity: hovered ? 1 : 0.6,
            transition: 'opacity 0.3s',
          }}>
            {study.outcome} →
          </span>
        </div>
      </div>
    </div>
  )
}

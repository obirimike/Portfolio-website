import React from 'react'
import { useEffect, useState } from 'react'
import profilePic from './assets/profilePic/MIKE.jpeg'
import { motion } from "framer-motion";

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
  const [showBackToTop, setShowBackToTop] = useState(false)
  const categories = ['All', ...Array.from(new Set(caseStudies.map(c => c.category)))]

  useEffect(() => {
  const handleScroll = () => {
    setShowBackToTop(window.scrollY > 400)
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
      {['Projects', 'About', 'Process', 'Contact'].map(item => (
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
      {['Projects', 'About', 'Process', 'Contact'].map(item => (
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
     <motion.div className="hero-main">
  <motion.p
    className="hero-eyebrow"
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
  >
    Junior Software Developer — Accra, Ghana
  </motion.p>

  <motion.h1
    className="hero-title"
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{
      duration: 1.5,
      delay: 0.3,
      ease: [0.22, 1, 0.36, 1],
    }}
  >
    I build software that<br />
    <em className="hero-highlight">
      solves real problems.
    </em>
  </motion.h1>
</motion.div>

      <div className="hero-description">
       <motion.p  initial={{ opacity: 0, y: -40 }}
       animate={{ opacity: 1, y: 0}}
       transition={{
        duration: 1,
        delay: 0.8,
        ease: [0.22, 1, 0.36, 1],
        }}>
        4 years of building and shipping production systems across
        education, fintech, and the social sector. I care about clean code,
        developer empathy, and software that holds up under pressure.
        </motion.p>
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

      {/* Projects */}
     <section id="Projects" className="Projects-section">
        <div className="Projects-header">
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
      <section id="about" className="about-section">
        <div className="about-container"> 
         <div className="about-grid">

            {/* Photo col */}
            <div className="aboutImage-container">
              <div className="about-photo">
                <img
                  src={profilePic}
                  alt="Portrait of Addo Michael Obiri"
                />
              </div>
              <div className="about-photo">
                {[
                  ['Currently', 'Freelancing / Open to roles'],
                  ['Based in', 'Accra, Ghana'],
                  ['Experience', '4 years'],
                  ['Education', 'BSc Computer Science, University of Ghana'],
                ].map(([label, value]) => (
                  <div key={label} className="about-detail">
                    <span className="about-detail-label">{label}</span>
                    <span className="about-detail-value">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio col */}
           <div className="about-content">
             <p className="about-eyebrow">
             About
             </p>
                <h2 className="about-title">
                  Building with purpose,<br />
                   <em>learning by doing.</em>
                </h2>
             <div className="about-text">
              <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'var(--muted-foreground)', margin: 0, fontWeight: 300 }}>
                 I'm a Computer Science student at the University of Ghana and a software
                 developer passionate about turning ideas into practical, reliable
                 digital products. I enjoy solving problems with code, learning new
                 technologies, and building systems that are useful beyond the classroom.
              </p>

              <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'var(--muted-foreground)', margin: 0, fontWeight: 300 }}>
              My experience spans full-stack web and mobile development, with hands-on
               work in React, React Native, Node.js, ASP.NET Core, Java, Python,
               PostgreSQL, MongoDB, and REST APIs. From university projects and
              collaborative software teams to personal products, I focus on writing
              clean, maintainable code and understanding the systems behind what I build.
            </p>

            <p style={{ fontSize: '16px', lineHeight: 1.5, color: 'var(--muted-foreground)', margin: 0, fontWeight: 300, marginBottom: 20,}}>
              I'm constantly improving as a developer through real projects, teamwork,
              and continuous learning. My long-term goal is to become a highly skilled
              software engineer and computer scientist, contributing to products and
               technologies that create meaningful impact, especially within emerging
             markets.
           </p>
         </div>
              <div className="about-text">
                <a
                  href="mailto:michaelobiri022@gmail.com"
                  className="primary-button"
                 >
                  Get in touch
                </a>
                <a
                  href="/cv/Addo_Michael_Obiri_CV.pdf"
                  className="secondary-button"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="process-section">
        <h2 className="process-title">
          How I build
        </h2>
       <div className="process-grid">
          {[
            { num: '01', title: 'Understand', desc: 'Requirements gathering, stakeholder alignment, and defining success metrics before a single line of code is written.' },
            { num: '02', title: 'Architect', desc: 'System design, tech stack decisions, API contracts, and data modeling that account for scale from the start.' },
            { num: '03', title: 'Build', desc: 'Clean, tested, and reviewed code shipped incrementally with CI/CD pipelines and meaningful commit history.' },
            { num: '04', title: 'Ship & Iterate', desc: 'Monitoring, feedback loops, performance tuning, and continuous improvement long after the first deploy.' },
          ].map(step => (
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
          <span className='footer-logo'>
            Addo Michael Obiri
          </span>
          <div className="footer-links">
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
                className="footer-link"
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

    <div className={`case-study-content ${large ? 'large' : ''}`}>
       <div className="case-study-meta">
           <span className="case-study-category">
             {study.category}
           </span>

         <span className="case-study-year">
            {study.year}
         </span>
       </div>
          <h3
           className={`case-study-title ${large ? 'large' : ''}`}>                                                     
           {study.title}
          </h3>
        <div className="case-study-bottom">

       <div className="case-study-tags">
         {study.tags.map(tag => (
         <span
           key={tag}
           className="case-study-tag"
         >
           {tag}
          </span>
       ))}
       </div>

          <span className="case-study-outcome">
              {study.outcome} →
          </span>

        </div>
      </div>
    </div>
  )
}

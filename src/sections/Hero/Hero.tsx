import { motion } from 'framer-motion'
import { skills } from '../../data/skills'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">

        <motion.div className="hero-main">
          {/* Eyebrow */}
          <motion.p
            className="hero-eyebrow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            Junior Software Developer — Accra, Ghana
          </motion.p>

          {/* Main heading */}
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
            I build software that
            <br />

            <em className="hero-highlight">
              solves real problems.
            </em>
          </motion.h1>
        </motion.div>

        {/* Description */}
        <div className="hero-description">
         <motion.p
             initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
            duration: 1,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
            }}
          >
              I'm a software developer and Computer Science student in Accra,
             Ghana, building web and mobile applications with React, React Native,
             Node.js, Java, ASP.NET Core and modern backend technologies.
           </motion.p>
        </div>

      </div>

      {/* Skills */}
      <div className="skills-strip">
        {skills.map((skills) => (
          <span
            key={skills}
            className="skill-item"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--foreground)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--muted-foreground)'
            }}
          >
            {skills}
          </span>
        ))}
      </div>
    </section>
  )
}
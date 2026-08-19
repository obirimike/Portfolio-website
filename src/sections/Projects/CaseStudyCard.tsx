import { useState } from 'react'
import type { CaseStudy } from '../../data/projects'

interface CaseStudyCardProps {
  study: CaseStudy
  large: boolean
}

export default function CaseStudyCard({
  study,
  large,
}: CaseStudyCardProps) {
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
      {/* Project Image */}
      <div
        className={`case-study-image ${
          large ? 'large' : 'normal'
        }`}
      >
        <img
          src={study.image}
          alt={`${study.title} — ${study.category}`}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: hovered
              ? 'rgba(22,24,29,0.15)'
              : 'rgba(22,24,29,0)',
            transition: 'background 0.4s',
          }}
        />
      </div>

      {/* Project Content */}
      <div
        className={`case-study-content ${
          large ? 'large' : ''
        }`}
      >
        {/* Category and Year */}
        <div className="case-study-meta">
          <span className="case-study-category">
            {study.category}
          </span>

          <span className="case-study-year">
            {study.year}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`case-study-title ${
            large ? 'large' : ''
          }`}
        >
          {study.title}
        </h3>

        {/* Bottom Content */}
        <div className="case-study-bottom">

          {/* Technologies */}
          <div className="case-study-tags">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="case-study-tag"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Outcome */}
          <span className="case-study-outcome">
            {study.outcome}
          </span>

          {/* Project Links */}
          <div className="case-study-links">

            {/* Live Website */}
            {study.liveUrl && (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo ↗
              </a>
            )}

            {/* GitHub Repository */}
            {study.githubUrl && (
              <a
                href={study.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                GitHub ↗
              </a>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}
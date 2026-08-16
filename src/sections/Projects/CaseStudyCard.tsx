import { useState } from 'react'
import type { CaseStudy } from '../../data/Projects'

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
      <div
        className={`case-study-image ${
          large ? 'large' : 'normal'
        }`}
      >
        <img
          src={study.image}
          alt={study.title}
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

      <div
        className={`case-study-content ${
          large ? 'large' : ''
        }`}
      >
        <div className="case-study-meta">
          <span className="case-study-category">
            {study.category}
          </span>

          <span className="case-study-year">
            {study.year}
          </span>
        </div>

        <h3
          className={`case-study-title ${
            large ? 'large' : ''
          }`}
        >
          {study.title}
        </h3>

        <div className="case-study-bottom">

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

          <span className="case-study-outcome">
            {study.outcome} →
          </span>

        </div>
      </div>
    </div>
  )
}
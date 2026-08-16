import { useMemo, useState } from 'react'

import { caseStudies } from '../../data/Projects'

import CaseStudyCard from './CaseStudyCard'
import ProjectFilters from './ProjectFilters'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const categories = useMemo(() => {
    return [
      'All',
      ...Array.from(
        new Set(caseStudies.map((project) => project.category))
      ),
    ]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') {
      return caseStudies
    }

    return caseStudies.filter(
      (project) => project.category === activeFilter
    )
  }, [activeFilter])

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-header">

        <h2 className="section-title">
          Selected Projects
        </h2>

        <ProjectFilters
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

      </div>

      <div className="projects-grid">
        {filteredProjects.map((study, index) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            large={
              index === 0 &&
              filteredProjects.length >= 3
            }
          />
        ))}
      </div>
    </section>
  )
}
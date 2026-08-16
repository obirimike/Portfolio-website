interface ProjectFiltersProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (category: string) => void
}

export default function ProjectFilters({
  categories,
  activeFilter,
  onFilterChange,
}: ProjectFiltersProps) {
  return (
    <div className="project-filters">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`filter-button ${
            activeFilter === category ? 'active' : ''
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
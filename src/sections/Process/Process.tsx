import Reveal from '../../components/animations/Reveal'

const processSteps = [
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
    desc: 'Clean, tested, and reviewed code shipped incrementally with CI/CD pipelines and meaningful commit history.',
  },
  {
    num: '04',
    title: 'Ship & Iterate',
    desc: 'Monitoring, feedback loops, performance tuning, and continuous improvement long after the first deploy.',
  },
]

export default function Process() {
  return (
    <section id="process" className="process-section">
      <Reveal distance={60}>
        <h2 className="process-title">
          How I build
        </h2>
      </Reveal>

      <div className="process-grid">
        {processSteps.map((step, index) => (
          <Reveal
            key={step.num}
            distance={70}
            delay={index * 0.12}
          >
            <div className="process-card">
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
          </Reveal>
        ))}
      </div>
    </section>
  )
}
import { motion } from 'framer-motion'
import Stagger, {
  staggerItem,
} from '../../components/animations/Stagger'

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
      <motion.h2
        className="process-title"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        How I build
      </motion.h2>

      <Stagger>
        <div className="process-grid">
          {processSteps.map((step) => (
            <motion.div
              key={step.num}
              className="process-card"
              variants={staggerItem}
            >
              <p className="process-number">
                {step.num}
              </p>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Stagger>
    </section>
  )
}
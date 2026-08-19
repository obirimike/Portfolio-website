import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import About from './sections/About/About'
import Process from './sections/Process/Process'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'

export default function App() {
  return (
    <div
      style={{
        fontFamily: 'var(--font-body)',
        background: 'var(--background)',
        color: 'var(--foreground)',
        minHeight: '100vh',
      }}
    >
      <Navbar />
       
      <main>
       <Hero />
       <About />
       <Projects />
       <Process />
       <Footer />
      </main>
      
      <BackToTop />

    </div>
  )
}

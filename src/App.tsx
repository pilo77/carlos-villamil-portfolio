import { CaseStudy } from './components/sections/CaseStudy'
import { Certifications } from './components/sections/Certifications'
import { Contact } from './components/sections/Contact'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'
import { Timeline } from './components/sections/Timeline'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { BackgroundEffects } from './components/ui/BackgroundEffects'

function App() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden text-slate-100">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <CaseStudy />
        <Skills />
        <Certifications />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

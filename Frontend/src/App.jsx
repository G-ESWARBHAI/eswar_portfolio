import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TechMarquee from './components/TechMarquee'

function App() {
  useEffect(() => {
    // Initialize Lenis for ultra-smooth scrolling
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
      smoothTouch: true,
      touchMultiplier: 1.5,
      infinite: false,
      lerp: 0.1,
    })

    // Make lenis available globally for scroll functions
    window.lenis = lenis

    // Add lenis class to html element
    document.documentElement.classList.add('lenis', 'lenis-smooth')

    // Animation frame loop
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
      if (window.lenis) {
        window.lenis.destroy()
        delete window.lenis
      }
    }
  }, [])

  return (
    <div className="w-full bg-bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App


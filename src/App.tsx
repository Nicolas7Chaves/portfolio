import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Speedrun from './components/Speedrun'
import Toolkit from './components/Toolkit'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

export default function App() {
  // Smooth, inertial scrolling (skipped for people who prefer reduced motion).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ autoRaf: true, anchors: true })
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Speedrun />
        <Toolkit />
        <Projects />
        <Gallery />
      </main>
      <Contact />
    </>
  )
}

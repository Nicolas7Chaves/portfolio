import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav'
import Cover from './components/Cover'
import Issues from './components/Issues'
import Shipped from './components/Shipped'
import Toolkit from './components/Toolkit'
import Snapshots from './components/Snapshots'
import BackCover from './components/BackCover'

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
        <Cover />
        <Issues />
        <Shipped />
        <Toolkit />
        <Snapshots />
      </main>
      <BackCover />
    </>
  )
}

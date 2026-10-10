import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { pastLives, profile } from '../data'

// Three.js is heavy, so the scene loads in its own chunk after the text paints.
const Scene = lazy(() => import('./Scene'))

function CareerTicker() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % pastLives.length), 1800)
    return () => clearInterval(id)
  }, [])

  const isNow = index === pastLives.length - 1

  return (
    <p className="font-mono text-sm text-muted md:text-base">
      career speedrun:
      <span className="relative block h-[1.5em] overflow-hidden whitespace-nowrap">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={index}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`block ${isNow ? 'text-clay' : 'text-cream'}`}
          >
            {isNow ? `now ${pastLives[index]} ✦` : `ex-${pastLives[index]}`}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative h-svh min-h-[640px] overflow-hidden">
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </div>

      {/* Text ignores the pointer so the clay behind it stays clickable. */}
      <div className="pointer-events-none relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-4 pb-14 sm:px-8 md:justify-center md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-ink/50 px-3 py-1 font-mono text-xs text-muted backdrop-blur">
            <span className="h-2 w-2 animate-pulse rounded-full bg-moss" />
            {profile.role} @ {profile.company} · {profile.location}
          </p>
          <h1 className="text-[clamp(3.5rem,11vw,8rem)] font-extrabold leading-[0.88] tracking-tighter">
            Nicolas
            <br />
            <span className="text-clay">Chaves</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-snug text-cream/85 md:text-xl">
            I build the systems that turn data into pipeline, after a few past lives as a founder, real estate developer,
            engineer and PM.
          </p>
          <div className="mt-5">
            <CareerTicker />
          </div>
          <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
            <a
              href="#speedrun"
              className="rounded-full bg-clay px-6 py-3 font-semibold text-ink transition-transform hover:-translate-y-0.5"
            >
              See the speedrun ↓
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 font-semibold transition-colors hover:bg-white/10"
            >
              LinkedIn ↗
            </a>
          </div>
        </motion.div>
      </div>

      <p className="pointer-events-none absolute bottom-6 right-6 z-10 hidden font-mono text-xs text-muted md:block">
        psst, poke the clay ↖
      </p>
    </section>
  )
}

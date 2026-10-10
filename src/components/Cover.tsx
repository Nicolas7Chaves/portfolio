import type { PointerEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react'
import { contents, profile } from '../data'

const ease = [0.22, 1, 0.36, 1] as const

// The magazine itself: tilts toward the pointer with a moving gloss highlight.
function Magazine() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const spring = { stiffness: 150, damping: 18 }
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), spring)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), spring)
  const glossX = useTransform(x, [-0.5, 0.5], [0, 100])
  const glossY = useTransform(y, [-0.5, 0.5], [0, 100])
  const gloss = useMotionTemplate`radial-gradient(circle at ${glossX}% ${glossY}%, rgba(255,255,255,0.35), transparent 45%)`

  const handleMove = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: 6 }}
      animate={{ opacity: 1, y: 0, rotate: 2 }}
      transition={{ duration: 1.1, ease }}
      className="mx-auto w-full max-w-[460px] [perspective:1400px]"
      onPointerMove={handleMove}
      onPointerLeave={() => {
        x.set(0)
        y.set(0)
      }}
    >
      <motion.a
        href="#issues"
        aria-label="Open the cover story"
        style={{ rotateX, rotateY }}
        className="relative block aspect-[3/4] overflow-hidden rounded-[3px] bg-ink text-white shadow-[0_40px_80px_-20px_rgba(27,26,23,0.55),0_8px_20px_-8px_rgba(27,26,23,0.4)]"
      >
        <img
          src="/images/demoday.jpg"
          alt="Nicolas Chaves at BrainStation demo day"
          className="absolute inset-0 h-full w-full object-cover object-[60%_30%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05)_40%,rgba(0,0,0,0.75))]" />

        <div className="kicker absolute inset-x-4 top-3 z-10 flex justify-between text-[9px] text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
          <span>Vol. 06 · {profile.location}</span>
          <span>Fall 2026 · $0.00</span>
        </div>
        <p className="absolute inset-x-0 top-5 text-center font-serif text-[clamp(5rem,26vw,8.5rem)] leading-[0.8] tracking-[-0.04em] text-rust">
          CHAVES
        </p>

        <div className="absolute bottom-24 left-5 max-w-[60%]">
          <p className="kicker text-[9px] text-sun">Cover story</p>
          <p className="mt-1 font-serif text-[2.1rem] leading-[0.92]">The GTM Engineer issue</p>
          <p className="mt-2 text-xs leading-snug text-white/85">
            How a BDR built an AI prospecting engine, hit 116% of quota, then turned it into a new job.
          </p>
        </div>
        <div className="absolute bottom-5 left-5 max-w-[55%]">
          <p className="font-serif text-xl leading-none">
            6 careers, <i>one</i> throughline
          </p>
          <p className="mt-1 text-[11px] text-white/75">The back issues, p.04</p>
        </div>
        <div className="absolute right-4 top-[38%] max-w-[34%] text-right">
          <p className="font-serif text-xl leading-none">51% open rate</p>
          <p className="mt-1 text-[10px] leading-tight text-white/80">The AI email playbook, p.12</p>
        </div>

        <div className="absolute right-5 bottom-20 grid h-24 w-24 animate-[spin_16s_linear_infinite] place-items-center rounded-full bg-sun text-center text-[11px] font-black leading-[1.05] text-ink">
          HACKATHON
          <br />
          WINNER ★
        </div>
        <div className="absolute right-4 bottom-4 bg-white px-2 pt-1.5 pb-0.5 text-[8px] text-ink">
          <div className="barcode h-6 w-20" />
          NC-2026
        </div>

        <motion.div className="pointer-events-none absolute inset-0 mix-blend-overlay" style={{ background: gloss }} />
      </motion.a>
    </motion.div>
  )
}

export default function Cover() {
  return (
    <section id="top" className="mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-4 pt-24 pb-16 sm:px-8 md:grid-cols-[1fr_460px] md:gap-16">
      <div className="order-2 md:order-1">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="kicker mb-5 flex items-center gap-2"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-moss" />
          Now: {profile.role} @ {profile.company}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
          className="font-serif text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.88] tracking-tight"
        >
          Nicolas Chaves, <i className="text-rust">in six issues.</i>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease }}
          className="mt-6 max-w-md text-lg leading-relaxed text-ink/80"
        >
          <span className="float-left mr-2 font-serif text-[4.2rem] leading-[0.8] text-rust">I</span>
          build AI-powered systems that turn buying signals into pipeline. Before that I was a founder, a real estate
          developer, a software engineer, a product manager and a BDR. This is the whole story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease }}
          className="mt-10 max-w-md"
        >
          <p className="kicker mb-2 border-b border-ink pb-2">In this issue</p>
          <ul>
            {contents.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="group flex items-baseline gap-4 border-b border-ink/15 py-3 transition-colors hover:text-rust"
                >
                  <span className="font-serif text-2xl text-rust">{item.page}</span>
                  <span className="font-serif text-2xl">{item.title}</span>
                  <span className="ml-auto hidden text-sm text-faded sm:inline">{item.note}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="order-1 md:order-2">
        <Magazine />
      </div>
    </section>
  )
}

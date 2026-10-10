import type { ReactNode } from 'react'
import { motion } from 'motion/react'

// Fades and lifts its children in the first time they scroll into view.
export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({ kicker, title }: { kicker: string; title: ReactNode }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-clay">{kicker}</p>
      <h2 className="text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">{title}</h2>
    </Reveal>
  )
}

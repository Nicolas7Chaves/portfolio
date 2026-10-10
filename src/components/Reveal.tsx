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
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Magazine-style section opener: running header rule, page number, big serif title.
export function SectionHeading({ page, kicker, title }: { page: string; kicker: string; title: ReactNode }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="kicker mb-6 flex justify-between border-b border-ink pb-2">
        <span>{kicker}</span>
        <span>p.{page}</span>
      </div>
      <h2 className="font-serif text-6xl leading-[0.9] tracking-tight md:text-8xl">{title}</h2>
    </Reveal>
  )
}

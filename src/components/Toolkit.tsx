import { motion } from 'motion/react'
import { toolkit } from '../data'
import Reveal, { SectionHeading } from './Reveal'

const accent = {
  clay: 'bg-clay',
  lilac: 'bg-lilac',
  moss: 'bg-moss',
  sun: 'bg-sun',
} as const

export default function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-6xl px-4 py-24 sm:px-8 md:py-32">
      <SectionHeading
        kicker="Toolkit"
        title={
          <>
            Equal parts seller, <br className="hidden md:block" />
            builder and spreadsheet nerd.
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {toolkit.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.08} className="rounded-3xl border border-white/10 bg-ink-2 p-6 md:p-8">
            <h3 className="mb-5 flex items-center gap-3 text-xl font-bold">
              <span className={`h-3 w-3 rounded-full ${accent[group.color]}`} />
              {group.group}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ y: -4, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="cursor-default rounded-full border border-white/15 bg-ink-3 px-4 py-2 text-sm"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

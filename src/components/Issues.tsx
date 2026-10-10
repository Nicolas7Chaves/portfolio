import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { issues, type Issue } from '../data'
import Reveal, { SectionHeading } from './Reveal'

function useWide() {
  const query = '(min-width: 768px)'
  const [wide, setWide] = useState(() => window.matchMedia(query).matches)
  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setWide(mql.matches)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return wide
}

function IssueCover({ issue, active, wide, onSelect }: { issue: Issue; active: boolean; wide: boolean; onSelect: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      aria-label={`Issue ${issue.number}: ${issue.title}`}
      initial={false}
      animate={{
        rotateY: active || !wide ? 0 : 32,
        z: active ? 90 : 0,
        y: active ? -18 : 0,
      }}
      whileHover={{ rotateY: 0, z: 70, y: -14 }}
      transition={{ type: 'spring', stiffness: 220, damping: 22 }}
      style={{ backgroundColor: issue.color, color: issue.ink }}
      className="relative flex aspect-[3/4] w-40 shrink-0 cursor-pointer flex-col overflow-hidden rounded-[3px] p-3 text-left shadow-[-16px_20px_36px_-10px_rgba(27,26,23,0.45)] md:-mx-8 md:w-52 md:p-4"
    >
      {issue.image &&
        (issue.plainImage ? (
          <>
            <img src={issue.image} alt="" className="absolute inset-0 h-full w-full object-cover object-top opacity-80" />
            <span className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(27,26,23,0.55),transparent_35%,transparent_55%,rgba(27,26,23,0.9))]" />
          </>
        ) : (
          <img src={issue.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50 mix-blend-multiply" />
        ))}
      <span className="kicker relative flex justify-between text-[9px]">
        <span>No. {issue.number}</span>
        <span>{issue.year}</span>
      </span>
      <span className="relative mt-2 font-serif text-[2.1rem] leading-[0.85] md:text-[2.6rem]">{issue.title}</span>
      <span className="relative mt-auto text-xs leading-snug opacity-90">{issue.tagline}</span>
      {issue.current && (
        <span className="absolute right-2 bottom-14 rotate-12 rounded-full bg-ink px-2 py-1 text-[9px] font-bold tracking-wider text-sun uppercase">
          On stands
        </span>
      )}
    </motion.button>
  )
}

export default function Issues() {
  const wide = useWide()
  const [selected, setSelected] = useState(issues.length - 1)
  const issue = issues[selected]

  return (
    <section id="issues" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          page="04"
          kicker="Back issues"
          title={
            <>
              Six issues, <i className="text-cobalt">one</i> story.
            </>
          }
        />
        <p className="-mt-6 mb-4 max-w-md text-faded">Pick an issue off the shelf to read that chapter.</p>
      </div>

      <Reveal>
        <div className="flex snap-x gap-4 overflow-x-auto px-4 pt-10 pb-12 sm:px-8 md:justify-center md:gap-0 md:overflow-visible md:px-16">
          {issues.map((item, i) => (
            <div key={item.number} className={`relative snap-center [perspective:900px] hover:z-20 ${i === selected ? 'z-10' : ''}`}>
              <IssueCover issue={item} active={i === selected} wide={wide} onSelect={() => setSelected(i)} />
            </div>
          ))}
        </div>
        <div className="mx-auto h-3 max-w-5xl rounded-full bg-ink/10" aria-hidden />
      </Reveal>

      <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.article
            key={issue.number}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 border-t-4 pt-8 md:grid-cols-[280px_1fr] md:gap-16"
            style={{ borderColor: issue.color === '#ffd84d' ? '#1b1a17' : issue.color }}
          >
            <header>
              <p className="kicker text-faded">
                No. {issue.number} · {issue.years}
              </p>
              <h3 className="mt-2 font-serif text-5xl leading-[0.9] md:text-6xl">{issue.title}</h3>
              <p className="mt-3 font-serif text-xl text-faded italic">{issue.tagline}</p>
            </header>
            <ul className="space-y-6">
              {issue.roles.map((role) => (
                <li key={role.title + role.company} className="border-b border-ink/15 pb-6 last:border-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="text-lg font-bold">
                      {role.title} <span className="font-normal text-faded">· {role.company}</span>
                    </p>
                    <p className="kicker text-faded">{role.dates}</p>
                  </div>
                  {role.details && <p className="mt-2 max-w-2xl leading-relaxed text-ink/80">{role.details}</p>}
                  {role.highlights && (
                    <ul className="mt-3 max-w-2xl space-y-2">
                      {role.highlights.map((point) => (
                        <li key={point} className="flex gap-3 leading-relaxed text-ink/80">
                          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}

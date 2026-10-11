import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { issues, type Issue, type Photo } from '../data'
import Reveal, { SectionHeading } from './Reveal'

const tapeColors = ['rgba(255,216,77,0.8)', 'rgba(47,91,211,0.45)', 'rgba(194,65,12,0.45)']

// The chapter's photos, dropped onto the page like taped polaroids in one
// horizontal row. Phones scroll it sideways; a scroll box clips shadows, so it
// gets extra bottom padding there, and wider screens skip scrolling entirely.
function Polaroids({ photos }: { photos: Photo[] }) {
  return (
    <div className="-mx-4 flex gap-6 overflow-x-auto px-4 pt-5 pb-14 md:mx-0 md:flex-wrap md:gap-8 md:overflow-visible md:px-0 md:pb-6">
      {photos.map((photo, i) => {
        const rotate = i % 2 === 0 ? -3 : 2.5
        return (
          <motion.figure
            key={photo.src}
            initial={{ opacity: 0, y: 40, rotate: rotate * 3, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate, scale: 1 }}
            whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
            transition={{ type: 'spring', stiffness: 180, damping: 18, delay: 0.15 + i * 0.12 }}
            className="relative shrink-0 bg-white p-2.5 pb-11 shadow-[0_18px_36px_-12px_rgba(27,26,23,0.4)]"
          >
            <span
              className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3"
              style={{ background: tapeColors[i % tapeColors.length] }}
            />
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              className={`w-auto object-cover ${photo.small ? 'h-36 md:h-40' : 'h-52 md:h-60'} ${
                photo.wide ? 'aspect-[4/3]' : photo.small ? 'aspect-square' : 'aspect-[4/5]'
              }`}
            />
            <figcaption className="absolute right-2 bottom-2 left-3 truncate font-hand text-xl">{photo.caption}</figcaption>
          </motion.figure>
        )
      })}
    </div>
  )
}

// A taped sticky note with an arrow down to the shelf, so it's obvious the covers are clickable.
function StickyNote() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, rotate: -8 }}
      whileInView={{ opacity: 1, y: 0, rotate: -3 }}
      whileHover={{ rotate: 0, scale: 1.03 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 180, damping: 14, delay: 0.2 }}
      className="relative -mt-4 mb-2 ml-1 inline-block max-w-[290px] bg-sun px-5 pt-6 pb-5 shadow-[0_14px_24px_-10px_rgba(27,26,23,0.45)]"
    >
      <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 rotate-2 bg-paper/70" aria-hidden />
      <p className="font-hand text-[1.7rem] leading-[1.05] text-ink">
        Psst! Click a volume on the shelf to read that chapter.
      </p>
      <svg
        className="absolute -bottom-14 left-10 h-16 w-16 text-ink"
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M10 4 C 6 24, 20 40, 40 52" />
        <path d="M30 54 L 41 53 L 38 42" />
      </svg>
    </motion.div>
  )
}

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
      aria-label={`Volume ${issue.number}: ${issue.title}`}
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
        <span>Vol. {issue.number}</span>
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
  const sidePhotos = !!issue.photos?.every((p) => p.small)

  return (
    <section id="volumes" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <SectionHeading
          page="01"
          kicker="The volumes"
          title={
            <>
              Six volumes, <i className="text-cobalt">one</i> story.
            </>
          }
        />
        <StickyNote />
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
            className="grid gap-8 border-t-4 pt-8 md:grid-cols-[300px_1fr] md:gap-16"
            style={{ borderColor: issue.color === '#ffd84d' ? '#1b1a17' : issue.color }}
          >
            <header>
              <p className="kicker text-faded">
                Vol. {issue.number} · {issue.years}
              </p>
              <h3 className="mt-2 font-serif text-5xl leading-[0.9] md:text-6xl">{issue.title}</h3>
              <p className="mt-3 font-serif text-xl text-faded italic">{issue.tagline}</p>
              {/* Small photos fit beside the roles, so they sit here instead of in a row below. */}
              {sidePhotos && <Polaroids photos={issue.photos!} />}
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
            {issue.photos && !sidePhotos && (
              <div className="-mt-4 md:col-span-2">
                <Polaroids photos={issue.photos} />
              </div>
            )}
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}

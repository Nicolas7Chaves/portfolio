import { useRef, type CSSProperties } from 'react'
import { motion } from 'motion/react'
import { photos } from '../data'
import { SectionHeading } from './Reveal'

// Scrapbook placement for each polaroid, as % of the board (wide screens only).
const layout = [
  { left: '4%', top: '6%', rotate: -6 },
  { left: '30%', top: '24%', rotate: 4 },
  { left: '57%', top: '6%', rotate: -3 },
  { left: '72%', top: '55%', rotate: 7 },
]
const tapeColors = ['rgba(255,216,77,0.8)', 'rgba(47,91,211,0.45)', 'rgba(194,65,12,0.45)', 'rgba(63,107,79,0.5)']

export default function Snapshots() {
  const board = useRef<HTMLDivElement>(null)

  return (
    <section id="snapshots" className="mx-auto max-w-6xl px-4 py-24 sm:px-8 md:py-32">
      <SectionHeading
        page="26"
        kicker="Snapshots"
        title={
          <>
            Field notes <i className="text-moss">&amp; photos.</i>
          </>
        }
      />

      <div
        ref={board}
        className="relative grid grid-cols-2 gap-6 rounded-[3px] bg-paper-2 bg-[radial-gradient(#d9d2c3_1px,transparent_1px)] [background-size:18px_18px] p-6 md:block md:h-[740px] md:p-0"
      >
        <p className="pointer-events-none absolute bottom-6 left-8 hidden -rotate-3 font-hand text-3xl text-rust md:block">
          psst, drag us around ↗
        </p>

        {photos.map((photo, i) => {
          const spot = layout[i % layout.length]
          return (
            <motion.figure
              key={photo.caption}
              drag
              dragConstraints={board}
              dragElastic={0.15}
              whileHover={{ rotate: 0, scale: 1.05 }}
              whileDrag={{ scale: 1.08, rotate: 0, zIndex: 30 }}
              initial={{ opacity: 0, y: 40, rotate: spot.rotate }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.08 }}
              className={`relative cursor-grab bg-white p-2.5 pb-12 shadow-[0_18px_36px_-12px_rgba(27,26,23,0.4)] active:cursor-grabbing md:absolute md:top-[var(--top)] md:left-[var(--left)] ${
                photo.wide ? 'col-span-2 md:w-[400px]' : 'md:w-[260px]'
              }`}
              style={{ '--left': spot.left, '--top': spot.top } as CSSProperties}
            >
              <span
                className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3"
                style={{ background: tapeColors[i % tapeColors.length] }}
              />
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  draggable={false}
                  loading="lazy"
                  className={`w-full object-cover ${photo.wide ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}
                />
              ) : (
                <div className="grid aspect-[4/5] w-full place-items-center bg-ink/5 font-hand text-2xl text-faded">photo soon</div>
              )}
              <figcaption className="absolute right-2 bottom-2 left-3 truncate font-hand text-lg md:text-2xl">{photo.caption}</figcaption>
            </motion.figure>
          )
        })}
      </div>
    </section>
  )
}

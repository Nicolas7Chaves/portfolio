import { motion } from 'motion/react'
import { photos } from '../data'
import Reveal, { SectionHeading } from './Reveal'

// Polaroid-style photo wall; each print sits at a slight angle and
// straightens up on hover.
const tilts = [-3, 2.5, -1.5, 3, -2.5, 1.5]

export default function Gallery() {
  return (
    <section id="photos" className="mx-auto max-w-6xl px-4 py-24 sm:px-8 md:py-32">
      <SectionHeading kicker="Off the clock" title="Photo dump." />

      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {photos.map((photo, i) => (
          <Reveal key={photo.caption} delay={(i % 3) * 0.08} className="mb-6 break-inside-avoid">
            <motion.figure
              initial={{ rotate: tilts[i % tilts.length] }}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="rounded-xl bg-cream p-3 pb-4 text-ink shadow-2xl shadow-black/50"
            >
              {photo.src ? (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  className={`w-full rounded-md object-cover ${photo.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
                />
              ) : (
                <div className="grid aspect-[4/3] w-full place-items-center rounded-md border-2 border-dashed border-ink/20 bg-ink/5 font-mono text-xs text-ink/50">
                  photo coming soon
                </div>
              )}
              <figcaption className="mt-3 px-1 font-mono text-xs leading-snug">{photo.caption}</figcaption>
            </motion.figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

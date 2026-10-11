import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { projects, type Project } from '../data'
import Reveal, { SectionHeading } from './Reveal'

// One feature spread: image drifts against the scroll for a bit of depth.
function Feature({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const flip = index % 2 === 1

  return (
    <article ref={ref} className="grid items-center gap-8 border-t border-ink py-12 md:grid-cols-2 md:gap-16 md:py-16">
      <motion.div style={{ y }} className={flip ? 'md:order-2' : ''}>
        <div className={`overflow-hidden rounded-[3px] shadow-[0_30px_60px_-25px_rgba(27,26,23,0.5)] ${flip ? 'rotate-1' : '-rotate-1'}`}>
          {project.image ? (
            <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" className="aspect-[4/3] w-full object-cover object-top" />
          ) : project.poster ? (
            <div
              className={`flex aspect-[4/3] flex-col items-center justify-center p-8 text-center ${
                project.poster.color === '#ffd84d' ? 'text-ink' : 'text-paper'
              }`}
              style={{ backgroundColor: project.poster.color }}
            >
              <p className="font-serif text-[clamp(5rem,14vw,10rem)] leading-[0.85]">{project.poster.big}</p>
              <p className="kicker mt-4">{project.poster.small}</p>
            </div>
          ) : null}
        </div>
      </motion.div>

      <Reveal className={flip ? 'md:order-1' : ''}>
        <p className="kicker flex items-center gap-3 text-rust">
          <span className="font-serif text-4xl tracking-normal normal-case">{String(index + 1).padStart(2, '0')}</span>
          {project.kicker}
        </p>
        <h3 className="mt-3 font-serif text-5xl leading-[0.9] md:text-6xl">{project.name}</h3>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-ink/80">{project.blurb}</p>
        <p className="mt-5 text-sm text-faded">{project.stack.join(' · ')}</p>
        {project.links.length > 0 && (
          <div className="mt-6 flex gap-5">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="kicker border-b-2 border-ink pb-1 transition-colors hover:border-rust hover:text-rust"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </Reveal>
    </article>
  )
}

export default function Shipped() {
  return (
    <section id="shipped" className="mx-auto max-w-6xl px-4 py-24 sm:px-8 md:py-32">
      <SectionHeading
        page="02"
        kicker="Feature"
        title={
          <>
            Things I <i className="text-rust">shipped.</i>
          </>
        }
      />
      {projects.map((project, i) => (
        <Feature key={project.name} project={project} index={i} />
      ))}
    </section>
  )
}

import { useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { projects, type Project } from '../data'
import Reveal, { SectionHeading } from './Reveal'

// Card that tilts in 3D toward the cursor.
function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 20 })

  const handleMove = (e: MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        x.set(0)
        y.set(0)
      }}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-ink-2"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-ink-3">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center bg-[radial-gradient(circle_at_30%_30%,var(--color-lilac),transparent_55%),radial-gradient(circle_at_70%_70%,var(--color-clay),transparent_55%)]">
            <span className="text-7xl drop-shadow-lg">🏆</span>
          </div>
        )}
        {project.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-ink">
            {project.badge}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-bold tracking-tight">{project.name}</h3>
        <p className="mt-2 flex-1 leading-relaxed text-cream/75">{project.blurb}</p>
        <ul className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] text-muted">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md bg-ink-3 px-2 py-1">
              {tech}
            </li>
          ))}
        </ul>
        {project.links.length > 0 && (
          <div className="mt-5 flex gap-4">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-clay underline-offset-4 hover:underline"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-8 md:py-32">
      <SectionHeading kicker="Projects" title="Things I've shipped." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

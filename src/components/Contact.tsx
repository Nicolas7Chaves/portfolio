import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
    ...(profile.resume ? [{ label: 'Resume (PDF)', href: profile.resume }] : []),
  ]

  return (
    <footer id="contact" className="px-4 pb-10 pt-24 sm:px-8 md:pt-32">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-clay p-8 text-ink md:p-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em]">Contact</p>
        <h2 className="mt-4 text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold leading-[0.9] tracking-tighter">
          Let's build
          <br />
          some pipeline.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block break-all text-xl font-semibold underline decoration-2 underline-offset-8 transition-opacity hover:opacity-70 md:text-3xl"
        >
          {profile.email}
        </a>
        <div className="mt-10 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-ink px-6 py-3 font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </Reveal>
      <p className="mx-auto mt-8 flex max-w-6xl justify-between font-mono text-xs text-muted">
        <span>© {new Date().getFullYear()} Nicolas Chaves</span>
        <span>Sculpted with React Three Fiber</span>
      </p>
    </footer>
  )
}

import { profile } from '../data'
import Reveal from './Reveal'

export default function BackCover() {
  const links = [
    { label: 'LinkedIn', href: profile.linkedin },
    { label: 'GitHub', href: profile.github },
    ...(profile.resume ? [{ label: 'Resume', href: profile.resume }] : []),
  ]

  return (
    <footer id="contact" className="bg-rust text-paper">
      <Reveal className="mx-auto max-w-6xl px-4 pt-24 pb-12 sm:px-8 md:pt-32">
        <div className="kicker flex justify-between border-b border-paper pb-2">
          <span>Letters to the editor</span>
          <span>Back cover</span>
        </div>
        <h2 className="mt-10 font-serif text-[clamp(4rem,12vw,10rem)] leading-[0.85] tracking-tight">
          Write <i>in.</i>
        </h2>
        <p className="mt-6 max-w-md text-lg text-paper/85">
          Building something in GTM, or just want to swap Clay workflows and AI prospecting ideas? Say hello.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block break-all font-serif text-3xl underline decoration-1 underline-offset-8 transition-colors hover:text-sun md:text-5xl"
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
              className="kicker rounded-full border border-paper px-5 py-3 transition-colors hover:bg-paper hover:text-rust"
            >
              {link.label} ↗
            </a>
          ))}
        </div>

        <div className="mt-20 flex items-end justify-between gap-6 text-xs">
          <p>
            © {new Date().getFullYear()} {profile.name}
            <br />
            Printed in {profile.location}. Made with React and Motion.
          </p>
          <div className="bg-paper px-2 pt-2 pb-1 text-[9px] text-ink">
            <div className="barcode h-8 w-28" />
            NC-2026 · VOL. 06
          </div>
        </div>
      </Reveal>
    </footer>
  )
}

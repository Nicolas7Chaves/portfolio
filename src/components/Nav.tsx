const links = [
  { href: '#speedrun', label: 'Speedrun' },
  { href: '#toolkit', label: 'Toolkit' },
  { href: '#projects', label: 'Projects' },
  { href: '#photos', label: 'Photos' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav className="mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-ink/60 px-4 py-2 backdrop-blur-md sm:mx-4 md:mx-auto">
        <a href="#top" className="grid h-9 w-9 place-items-center rounded-full bg-clay font-bold text-ink" aria-label="Back to top">
          NC
        </a>
        <ul className="hidden items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-cream">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-cream px-4 py-2 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
        >
          Say hi
        </a>
      </nav>
    </header>
  )
}

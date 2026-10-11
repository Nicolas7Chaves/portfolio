const links = [
  { href: '#volumes', label: 'Volumes' },
  { href: '#shipped', label: 'Shipped' },
  { href: '#toolkit', label: 'Skills & Tools' },
]

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/15 bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-8">
        <a href="#top" className="font-serif text-2xl leading-none tracking-tight" aria-label="Back to the cover">
          Nicolas Chaves<span className="text-rust">.</span>
        </a>
        <ul className="kicker hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-rust">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="kicker rounded-full bg-ink px-4 py-2 text-paper transition-colors hover:bg-rust">
          Contact
        </a>
      </nav>
    </header>
  )
}

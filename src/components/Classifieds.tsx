import { classifieds } from '../data'
import Reveal, { SectionHeading } from './Reveal'

export default function Classifieds() {
  return (
    <section id="classifieds" className="bg-ink py-24 text-paper md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 [&_.border-ink]:border-paper">
        <SectionHeading
          page="20"
          kicker="Classifieds"
          title={
            <>
              Skills <i className="text-sun">for hire.</i>
            </>
          }
        />

        <div className="grid gap-px border border-paper/30 bg-paper/30 md:grid-cols-2">
          {classifieds.map((ad, i) => (
            <Reveal key={ad.heading} delay={i * 0.08} className="bg-ink p-6 md:p-8">
              <p className="kicker text-sun">Wanted · {ad.heading}</p>
              <p className="mt-3 font-serif text-3xl leading-[1.05]">{ad.ad}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {ad.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-paper/30 px-3 py-1 text-sm transition-colors hover:border-sun hover:bg-sun hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

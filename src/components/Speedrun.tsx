import { levels, stats } from '../data'
import Reveal, { SectionHeading } from './Reveal'

export default function Speedrun() {
  return (
    <section id="speedrun" className="mx-auto max-w-6xl px-4 py-24 sm:px-8 md:py-32">
      <SectionHeading
        kicker="Experience"
        title={
          <>
            The career speedrun. <span className="text-muted">Six levels, one throughline: build things that make money move.</span>
          </>
        }
      />

      <Reveal className="mb-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-ink-2 p-6">
            <p className="text-5xl font-extrabold tracking-tight text-clay md:text-6xl">{stat.value}</p>
            <p className="mt-1 font-mono text-xs text-muted">{stat.label}</p>
          </div>
        ))}
      </Reveal>

      <ol className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[1.65rem] before:w-px before:bg-white/10 md:before:left-[3.4rem]">
        {levels.map((level) => (
          <li key={level.level}>
            <Reveal className="relative grid grid-cols-[3.3rem_1fr] gap-4 md:grid-cols-[7rem_1fr] md:gap-8">
              <div className="relative z-10 flex flex-col items-center pt-1">
                <span
                  className={`grid h-[3.3rem] w-[3.3rem] place-items-center rounded-2xl font-mono text-sm font-medium md:h-16 md:w-16 ${
                    level.current ? 'bg-clay text-ink' : 'border border-white/15 bg-ink-2 text-cream'
                  }`}
                >
                  L{level.level}
                </span>
              </div>

              <article
                className={`rounded-3xl border p-6 transition-colors md:p-8 ${
                  level.current ? 'border-clay/50 bg-clay/[0.06]' : 'border-white/10 bg-ink-2 hover:border-white/20'
                }`}
              >
                <header className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                      {level.name}
                      {level.current && (
                        <span className="ml-3 inline-block -translate-y-1 rounded-full bg-clay px-2.5 py-0.5 align-middle font-mono text-[10px] font-medium uppercase tracking-widest text-ink">
                          Now playing
                        </span>
                      )}
                    </h3>
                    <p className="mt-1 text-muted">{level.tagline}</p>
                  </div>
                  <p className="font-mono text-xs text-muted">{level.years}</p>
                </header>

                <ul className="space-y-5">
                  {level.roles.map((role) => (
                    <li key={role.title + role.company} className="border-t border-white/10 pt-5 first:border-0 first:pt-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                        <p className="font-semibold">
                          {role.title} <span className="font-normal text-muted">· {role.company}</span>
                        </p>
                        <p className="font-mono text-xs text-muted">{role.dates}</p>
                      </div>
                      {role.details && <p className="mt-2 max-w-2xl leading-relaxed text-cream/75">{role.details}</p>}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}

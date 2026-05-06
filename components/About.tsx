export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-white/[0.06] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              About
            </h2>
            <p className="mt-3 max-w-prose text-pretty text-lg text-ink sm:text-xl">
              I focus on end-to-end product work: clarifying the problem, shaping
              the interface, and implementing it with maintainable front-end
              architecture.
            </p>
            <p className="mt-5 max-w-prose text-pretty text-ink-muted">
              Recent themes include performance budgets, accessible motion, and
              CI that catches regressions before users do. If that resonates,
              we&apos;ll get along.
            </p>
          </div>
          <aside className="rounded-2xl border border-white/[0.08] bg-surface-elevated/70 p-6 shadow-[0_0_0_1px_rgb(255_255_255/0.04)_inset]">
            <h3 className="text-sm font-medium text-ink">Currently</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                Building polished marketing and app surfaces with React and
                Next.js.
              </li>
              <li className="flex gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-glow"
                  aria-hidden
                />
                Exploring how small teams ship faster with better defaults—not
                more tools.
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}

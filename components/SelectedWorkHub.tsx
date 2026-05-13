import Link from "next/link";

const categories = [
  {
    href: "/it-work",
    label: "IT work",
    blurb: "Tooling, platforms, and front-end systems—where reliability and DX matter.",
  },
  {
    href: "/projects",
    label: "Projects",
    blurb: "Product-shaped builds: interfaces, flows, and experiments worth shipping.",
  },
  {
    href: "/music",
    label: "Music",
    blurb: "Releases, scores, and sonic experiments—summaries you can extend over time.",
  },
] as const;

export function SelectedWorkHub() {
  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Selected work
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-lg text-ink sm:text-xl">
          Three lanes of work—each with its own page so you can grow summaries without
          crowding the home screen.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group flex flex-col rounded-2xl border border-white/[0.08] bg-surface-elevated/40 p-6 transition hover:border-accent/30 hover:bg-surface-elevated/70 hover:shadow-soft"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
                Explore
              </span>
              <h3 className="mt-3 text-lg font-medium tracking-tight text-ink group-hover:text-accent">
                {cat.label}
              </h3>
              <p className="mt-3 flex-1 text-pretty text-sm text-ink-muted">
                {cat.blurb}
              </p>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Open page
                <span aria-hidden>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

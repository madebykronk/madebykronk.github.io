import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.06] bg-grid-fade bg-grid pb-20 pt-16 sm:pb-28 sm:pt-24 md:pt-32">
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-full bg-accent-glow/15 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-surface-elevated/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink-muted">
          Open to collaborations
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-[3.25rem] md:leading-[1.1]">
          {siteConfig.name}
          <span className="mt-2 block bg-gradient-to-r from-ink via-ink-muted to-accent-glow bg-clip-text text-transparent sm:mt-3">
            {siteConfig.role}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-ink-muted sm:text-lg">
          {siteConfig.tagline}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/#work"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-soft transition hover:bg-accent/90"
          >
            View selected work
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center rounded-full border border-white/[0.12] bg-surface-elevated/50 px-6 py-2.5 text-sm font-medium text-ink transition hover:border-accent/40 hover:text-ink"
          >
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}

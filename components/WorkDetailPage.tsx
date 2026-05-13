import Link from "next/link";

import type { WorkSummary } from "@/data/workSummary";

type WorkDetailPageProps = {
  item: WorkSummary;
  listHref: string;
  listLabel: string;
};

export function WorkDetailPage({ item, listHref, listLabel }: WorkDetailPageProps) {
  return (
    <article className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href={listHref}
          className="text-sm text-ink-muted transition hover:text-ink"
        >
          ← {listLabel}
        </Link>
        <header className="mt-8">
          <p className="font-mono text-xs text-ink-muted">{item.year}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {item.title}
          </h1>
          <p className="mt-4 text-pretty text-lg text-ink-muted sm:text-xl">
            {item.description}
          </p>
        </header>
        {item.body ? (
          <div className="mt-10 space-y-4 text-pretty text-ink-muted">
            {item.body.split(/\n\n+/).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        ) : null}
        <ul className="mt-10 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        {item.href ? (
          <p className="mt-10">
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
            >
              Open external link
              <span aria-hidden>→</span>
            </a>
          </p>
        ) : null}
      </div>
    </article>
  );
}

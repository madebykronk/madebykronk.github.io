import Link from "next/link";

import type { WorkSummary } from "@/data/workSummary";

type ProjectCardProps = {
  item: WorkSummary;
  /** e.g. `/it-work` — card links to `${basePath}/${item.slug}` */
  basePath: string;
};

function ProjectCardInner({ item }: { item: WorkSummary }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight text-ink">
          {item.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-ink-muted">
          {item.year}
        </span>
      </div>
      <p className="mt-3 text-pretty text-ink-muted">{item.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
        View details
        <span aria-hidden>→</span>
      </span>
    </>
  );
}

const cardClassName =
  "group block rounded-2xl border border-white/[0.08] bg-surface-elevated/40 p-6 transition hover:border-accent/30 hover:bg-surface-elevated/70 hover:shadow-soft";

export function ProjectCard({ item, basePath }: ProjectCardProps) {
  const href = `${basePath.replace(/\/$/, "")}/${item.slug}`;

  return (
    <Link href={href} className={cardClassName}>
      <ProjectCardInner item={item} />
    </Link>
  );
}

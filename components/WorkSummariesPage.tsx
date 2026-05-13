import Link from "next/link";

import { ProjectCard } from "@/components/ProjectCard";
import type { WorkSummary } from "@/data/workSummary";

type WorkSummariesPageProps = {
  title: string;
  intro: string;
  items: WorkSummary[];
  dataFileHint: string;
};

export function WorkSummariesPage({
  title,
  intro,
  items,
  dataFileHint,
}: WorkSummariesPageProps) {
  return (
    <div className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Link
          href="/#work"
          className="text-sm text-ink-muted transition hover:text-ink"
        >
          ← Selected work
        </Link>
        <h1 className="mt-8 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-lg text-ink-muted sm:text-xl">
          {intro}
        </p>
        <p className="mt-3 max-w-2xl text-pretty text-sm text-ink-muted/80">
          Summaries are defined in{" "}
          <code className="rounded bg-white/[0.06] px-1.5 py-0.5 font-mono text-[13px] text-ink-muted">
            {dataFileHint}
          </code>
          .
        </p>
        {items.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-dashed border-white/[0.12] bg-surface-elevated/30 p-8 text-center text-ink-muted">
            No entries yet—add objects to the array in that file to list them here.
          </p>
        ) : (
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {items.map((item) => (
              <ProjectCard key={item.title} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

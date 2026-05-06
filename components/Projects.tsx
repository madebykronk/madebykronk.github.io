import type { Project } from "@/data/projects";

function ProjectCard({ project }: { project: Project }) {
  const CardInner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight text-ink">
          {project.title}
        </h3>
        <span className="shrink-0 font-mono text-xs text-ink-muted">
          {project.year}
        </span>
      </div>
      <p className="mt-3 text-pretty text-ink-muted">{project.description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full bg-white/[0.04] px-2.5 py-0.5 font-mono text-[11px] text-ink-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
      {project.href ? (
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
          View project
          <span aria-hidden>→</span>
        </span>
      ) : null}
    </>
  );

  const className =
    "group block rounded-2xl border border-white/[0.08] bg-surface-elevated/40 p-6 transition hover:border-accent/30 hover:bg-surface-elevated/70 hover:shadow-soft";

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {CardInner}
      </a>
    );
  }

  return <article className={className}>{CardInner}</article>;
}

export function Projects({ items }: { items: Project[] }) {
  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Selected work
        </h2>
        <p className="mt-3 max-w-2xl text-pretty text-lg text-ink sm:text-xl">
          A few projects that mirror how I like to work: opinionated UX, pragmatic
          scope, and code that teammates can extend.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

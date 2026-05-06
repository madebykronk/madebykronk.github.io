import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/[0.06] bg-surface-elevated/30 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
          Contact
        </h2>
        <p className="mt-3 max-w-xl text-pretty text-lg text-ink sm:text-xl">
          Tell me what you&apos;re building—especially if it sits at the
          intersection of craft and velocity.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="w-fit text-base font-medium text-accent underline decoration-accent/40 underline-offset-4 transition hover:decoration-accent"
          >
            {siteConfig.email}
          </a>
          <div className="flex gap-6 text-sm text-ink-muted">
            <a
              href={siteConfig.links.github}
              className="transition hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              className="transition hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

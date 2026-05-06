import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {siteConfig.name}. Built with Next.js and Tailwind CSS.
        </p>
        <a href="#" className="w-fit transition hover:text-ink">
          Back to top
        </a>
      </div>
    </footer>
  );
}

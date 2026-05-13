import type { WorkSummary } from "@/data/workSummary";

export const projectWorkSummaries: WorkSummary[] = [
  {
    slug: "realtime-collaboration-prototype",
    title: "Realtime collaboration prototype",
    description:
      "Lightweight canvas for async-friendly teamwork: cursors, presence, and conflict-free updates without heavy infra.",
    body: "Describe the prototype goals, what you validated, and what you would do next. Add screenshots or embeds later if you move to MDX or a CMS.",
    stack: ["Next.js", "WebSockets", "Postgres"],
    year: "2024",
  },
];

export function getProjectWorkBySlug(slug: string): WorkSummary | undefined {
  return projectWorkSummaries.find((item) => item.slug === slug);
}

import type { WorkSummary } from "@/data/workSummary";

export const itWorkSummaries: WorkSummary[] = [
  {
    slug: "design-system-toolkit",
    title: "Design system toolkit",
    description:
      "Reusable UI primitives and documentation for shipping interfaces faster with consistent motion, typography, and spacing.",
    body: "This page is where you can expand on scope, constraints, outcomes, and links. The summary card always links here; use the optional live URL below for GitHub, demos, or docs hosted elsewhere.",
    stack: ["React", "TypeScript", "Storybook"],
    href: "https://github.com",
    year: "2025",
  },
  {
    slug: "cli-release-hygiene",
    title: "CLI for release hygiene",
    description:
      "Automates changelog slices, semver bumps, and GitHub releases so shipping stays boring—in a good way.",
    stack: ["Node", "GitHub API"],
    href: "https://github.com",
    year: "2024",
  },
];

export function getItWorkBySlug(slug: string): WorkSummary | undefined {
  return itWorkSummaries.find((item) => item.slug === slug);
}

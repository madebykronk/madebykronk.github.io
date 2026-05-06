export type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  year: string;
};

export const projects: Project[] = [
  {
    title: "Design system toolkit",
    description:
      "Reusable UI primitives and documentation for shipping interfaces faster with consistent motion, typography, and spacing.",
    stack: ["React", "TypeScript", "Storybook"],
    href: "https://github.com",
    year: "2025",
  },
  {
    title: "Realtime collaboration prototype",
    description:
      "Lightweight canvas for async-friendly teamwork: cursors, presence, and conflict-free updates without heavy infra.",
    stack: ["Next.js", "WebSockets", "Postgres"],
    year: "2024",
  },
  {
    title: "CLI for release hygiene",
    description:
      "Automates changelog slices, semver bumps, and GitHub releases so shipping stays boring—in a good way.",
    stack: ["Node", "GitHub API"],
    href: "https://github.com",
    year: "2024",
  },
];

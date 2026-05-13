import type { WorkSummary } from "@/data/workSummary";

export const musicSummaries: WorkSummary[] = [
  {
    slug: "ambient-sketch-series",
    title: "Ambient sketch series",
    description:
      "Short-form pieces built from modular synth layers and field recordings—exploring space without losing momentum.",
    stack: ["Ableton", "Modular", "Field recording"],
    year: "2025",
  },
];

export function getMusicBySlug(slug: string): WorkSummary | undefined {
  return musicSummaries.find((item) => item.slug === slug);
}

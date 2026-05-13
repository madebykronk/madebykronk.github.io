import type { Metadata } from "next";

import { WorkSummariesPage } from "@/components/WorkSummariesPage";
import { projectWorkSummaries } from "@/data/projectWork";

export const metadata: Metadata = {
  title: "Projects",
  description: "Product and project work—interfaces, prototypes, and shipped ideas.",
};

export default function ProjectsPage() {
  return (
    <WorkSummariesPage
      title="Projects"
      intro="Product-shaped work: flows, surfaces, and experiments that started as questions and ended as something you can click through."
      items={projectWorkSummaries}
      dataFileHint="data/projectWork.ts"
    />
  );
}

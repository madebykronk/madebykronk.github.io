import type { Metadata } from "next";

import { WorkSummariesPage } from "@/components/WorkSummariesPage";
import { itWorkSummaries } from "@/data/itWork";

export const metadata: Metadata = {
  title: "IT work",
  description: "IT and engineering work—tooling, systems, and front-end craft.",
};

export default function ItWorkPage() {
  return (
    <WorkSummariesPage
      title="IT work"
      intro="Infrastructure-minded builds: CLIs, design systems, and the glue that keeps teams shipping."
      items={itWorkSummaries}
      dataFileHint="data/itWork.ts"
    />
  );
}

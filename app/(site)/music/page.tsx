import type { Metadata } from "next";

import { WorkSummariesPage } from "@/components/WorkSummariesPage";
import { musicSummaries } from "@/data/musicWork";

export const metadata: Metadata = {
  title: "Music",
  description: "Music and audio work—releases, scores, and experiments.",
};

export default function MusicPage() {
  return (
    <WorkSummariesPage
      title="Music"
      intro="Sonic work in digest form—swap in your own releases, collaborations, and sound design."
      items={musicSummaries}
      dataFileHint="data/musicWork.ts"
    />
  );
}

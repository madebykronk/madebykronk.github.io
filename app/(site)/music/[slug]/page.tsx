import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkDetailPage } from "@/components/WorkDetailPage";
import { getMusicBySlug, musicSummaries } from "@/data/musicWork";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return musicSummaries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getMusicBySlug(slug);
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function MusicDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getMusicBySlug(slug);
  if (!item) notFound();

  return <WorkDetailPage item={item} listHref="/music" listLabel="Music" />;
}

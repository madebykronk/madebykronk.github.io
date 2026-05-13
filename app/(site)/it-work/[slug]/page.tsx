import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkDetailPage } from "@/components/WorkDetailPage";
import { getItWorkBySlug, itWorkSummaries } from "@/data/itWork";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return itWorkSummaries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getItWorkBySlug(slug);
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function ItWorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getItWorkBySlug(slug);
  if (!item) notFound();

  return (
    <WorkDetailPage item={item} listHref="/it-work" listLabel="IT work" />
  );
}

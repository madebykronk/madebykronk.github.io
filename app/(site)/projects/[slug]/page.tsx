import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { WorkDetailPage } from "@/components/WorkDetailPage";
import { getProjectWorkBySlug, projectWorkSummaries } from "@/data/projectWork";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectWorkSummaries.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getProjectWorkBySlug(slug);
  if (!item) return { title: "Not found" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getProjectWorkBySlug(slug);
  if (!item) notFound();

  return (
    <WorkDetailPage item={item} listHref="/projects" listLabel="Projects" />
  );
}

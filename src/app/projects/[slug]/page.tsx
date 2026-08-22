import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/projects";
import { DSProjectDetail } from "@/components/sections/DSProjectDetail";
import { BAProjectDetail } from "@/components/sections/BAProjectDetail";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} — Devinda Rajawardhane`,
    description: project.shortDesc,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      {project.category === "business-analysis" ? (
        <BAProjectDetail project={project} />
      ) : (
        <DSProjectDetail project={project} />
      )}
    </>
  );
}

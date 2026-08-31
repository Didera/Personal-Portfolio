"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface Props {
  project: Project;
  index: number;
  accentColor?: string;
}

export function ProjectCard({ project, index, accentColor = "var(--accent)" }: Props) {
  const router = useRouter();

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("[data-external]")) return;
    router.push(`/projects/${project.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.8, delay: 0.1 * index, ease: [0.16, 1, 0.3, 1] }}
    >
      <article
        className="py-10 cursor-pointer group"
        style={{ borderTop: "1px solid var(--border)" }}
        onClick={handleCardClick}
      >
        {/* Top row: number + year */}
        <div className="flex items-center justify-between mb-5">
          <span
            className="font-mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Project {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              color: "var(--muted)",
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3
          className="font-serif leading-[1.05]"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
            transition: "color 0.3s",
          }}
        >
          <span
            style={{ transition: "color 0.3s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accentColor)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "")}
          >
            {project.name}
          </span>
        </h3>

        {/* Description */}
        <p
          className="font-mono mt-4"
          style={{
            fontSize: "0.88rem",
            lineHeight: 1.9,
            color: "var(--muted)",
            maxWidth: "620px",
            letterSpacing: "0.01em",
          }}
        >
          {project.shortDesc}
        </p>

        {/* Tags — inline, small caps */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono"
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links row */}
        <div className="flex items-center gap-6 mt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-external
            className="font-mono no-underline transition-colors duration-300"
            style={{ fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accentColor)}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
          >
            {project.category === "business-analysis" ? "GitHub ↗" : "GitHub ↗"}
          </a>
          <span
            className="font-mono ml-auto transition-colors duration-300"
            style={{ fontSize: "0.75rem", letterSpacing: "0.1em", color: "var(--text)" }}
          >
            View Details →
          </span>
        </div>
      </article>
    </motion.div>
  );
}

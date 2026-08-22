"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bodoni_Moda, IBM_Plex_Mono } from "next/font/google";
import { Project } from "@/types";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

interface Props {
  project: Project & {
    snapshots?: string[];
  };
}

const placeholderSlides = [
  {
    label: "Snapshot 01",
    title: "Dashboard View",
    description: "Add your main project dashboard screenshot here.",
  },
  {
    label: "Snapshot 02",
    title: "Core Workflow",
    description: "Add a screenshot that explains the main user flow.",
  },
  {
    label: "Snapshot 03",
    title: "Feature Detail",
    description: "Add a detailed feature or result screen here.",
  },
];

export function ProjectDetail({ project }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);

  const snapshots = project.snapshots ?? [];
  const slideCount =
    snapshots.length > 0 ? snapshots.length : placeholderSlides.length;

  const currentSlide = activeSlide % slideCount;

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slideCount);
  };

  const previousSlide = () => {
    setActiveSlide((current) => (current - 1 + slideCount) % slideCount);
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`${bodoni.variable} ${mono.variable} relative min-h-screen overflow-hidden bg-[#0d0d0c] text-[#eee8dc]`}
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:6px_6px] opacity-40" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(230,91,69,0.08),transparent_28%),radial-gradient(circle_at_78%_24%,rgba(255,255,255,0.05),transparent_25%),radial-gradient(circle_at_75%_75%,rgba(230,91,69,0.06),transparent_24%)]" />
      </div>

      {/* Constellation background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <span className="absolute left-[17%] top-[18%] h-2 w-2 rounded-full bg-[#4F8EF7]/50" />
        <span className="absolute left-[19%] top-[17.5%] h-1 w-1 rounded-full bg-[#eee8dc]/40" />
        <span className="absolute left-[29%] top-[23%] h-2 w-2 rounded-full bg-[#eee8dc]/35" />
        <span className="absolute left-[32%] top-[30%] h-2 w-2 rounded-full bg-[#4F8EF7]/40" />

        <span className="absolute right-[18%] top-[16%] h-2 w-2 rounded-full bg-[#4F8EF7]/60" />
        <span className="absolute right-[12%] top-[13%] h-2 w-2 rounded-full bg-[#eee8dc]/50" />
        <span className="absolute right-[8%] top-[40%] h-2 w-2 rounded-full bg-[#4F8EF7]/45" />

        <span className="absolute left-[40%] bottom-[20%] h-2 w-2 rounded-full bg-[#eee8dc]/40" />
        <span className="absolute left-[51%] bottom-[16%] h-2 w-2 rounded-full bg-[#4F8EF7]/45" />

        <div className="absolute left-[17%] top-[18%] h-px w-16 rotate-[-8deg] bg-[#eee8dc]/15" />
        <div className="absolute left-[29%] top-[24%] h-px w-24 rotate-[52deg] bg-[#eee8dc]/15" />
        <div className="absolute right-[18%] top-[16%] h-px w-28 rotate-[-18deg] bg-[#eee8dc]/15" />
        <div className="absolute right-[10%] top-[28%] h-px w-28 rotate-[-24deg] bg-[#eee8dc]/15" />
        <div className="absolute left-[43%] bottom-[19%] h-px w-32 rotate-[14deg] bg-[#eee8dc]/15" />
      </div>

      {/* Top metadata */}
      <header className="relative z-10 flex items-start justify-between px-6 pt-8 sm:px-10 lg:px-16">
        <div className="mt-24 hidden h-px w-20 bg-[#4F8EF7] sm:block" />

        <div
          className="ml-auto text-right text-[11px] uppercase leading-loose tracking-[0.35em] text-[#8e8981]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <p>Didera&apos;s Portfolio</p>
          <p>Gampaha, Sri Lanka</p>
          <p className="mt-2">2026</p>
        </div>
      </header>

      {/* Hero section */}
      <section className="relative z-10 px-6 pb-16 pt-16 sm:px-10 lg:px-16 lg:pb-24 lg:pt-20">
        <div className="py-6">
              <Link
                href="/#projects"
                className="border-b border-[#eee8dc]/40 pb-1 text-[11px] uppercase tracking-[0.25em] text-[#eee8dc] no-underline transition hover:border-[#4F8EF7] hover:text-[#4F8EF7]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                ← Back to Main Page
              </Link>
            </div>
        <div className="grid min-h-[72vh] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* Left typography */}
          <div>

            <h1
              className="font-normal leading-[0.9] text-[#eee8dc]"
              style={{
                fontFamily: "var(--font-bodoni)",
                fontSize: "clamp(2.4rem, 5.5vw, 6rem)",
                letterSpacing: "-0.05em",
              }}
            >
              {project.name}
            </h1>

            <p
              className="mt-3 max-w-[950px] italic leading-[0.9] text-[#4F8EF7]"
              style={{
                fontFamily: "var(--font-bodoni)",
                fontSize: "clamp(1.8rem, 4vw, 4.8rem)",
                letterSpacing: "-0.055em",
              }}
            >
              Project Showcase
            </p>

            <p
              className="mt-8 max-w-xl text-sm leading-loose tracking-[0.06em] text-[#9b948b]"
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}
            >
              {project.longDesc}
            </p>

            <div
              className="mt-12 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.22em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-[#eee8dc]/20 px-3 py-2 text-[#8e8981]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Snapshot carousel */}
          <div className="relative">
            <div className="mb-4 flex items-center justify-between border-b border-[#eee8dc]/25 pb-3">
              <p
                className="text-[11px] uppercase tracking-[0.28em] text-[#8e8981]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Project Snapshots
              </p>

              <p
                className="text-[11px] uppercase tracking-[0.28em] text-[#8e8981]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {String(currentSlide + 1).padStart(2, "0")} /{" "}
                {String(slideCount).padStart(2, "0")}
              </p>
            </div>

            <div className="relative aspect-[16/10] overflow-hidden border border-[#eee8dc]/20 bg-[#151412]">
              {snapshots.length > 0 ? (
                <motion.img
                  key={snapshots[currentSlide]}
                  src={snapshots[currentSlide]}
                  alt={`${project.name} snapshot ${currentSlide + 1}`}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
              ) : (
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="flex h-full flex-col justify-between p-6"
                >
                  <div
                    className="flex items-center justify-between border-b border-[#eee8dc]/20 pb-3 text-[10px] uppercase tracking-[0.24em] text-[#8e8981]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span>{placeholderSlides[currentSlide].label}</span>
                    <span>Image Placeholder</span>
                  </div>

                  <div>
                    <p
                      className="max-w-xl italic leading-[0.95] text-[#4F8EF7]"
                      style={{
                        fontFamily: "var(--font-bodoni)",
                        fontSize: "clamp(1.6rem, 3vw, 3rem)",
                        letterSpacing: "-0.045em",
                      }}
                    >
                      {placeholderSlides[currentSlide].title}
                    </p>

                    <p
                      className="mt-5 max-w-sm text-sm leading-relaxed text-[#9b948b]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {placeholderSlides[currentSlide].description}
                    </p>
                  </div>

                  <div
                    className="grid grid-cols-3 border-t border-[#eee8dc]/20 pt-3 text-[10px] uppercase tracking-[0.22em] text-[#8e8981]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span>16:10</span>
                    <span className="text-center">Screenshot</span>
                    <span className="text-right">Slot</span>
                  </div>
                </motion.div>
              )}

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.24))]" />
            </div>

            {/* Carousel controls */}
            <div className="mt-5 flex items-center justify-between">
              <div className="flex gap-2">
                {Array.from({ length: slideCount }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActiveSlide(index)}
                    className="h-px transition-all duration-300"
                    style={{
                      width: currentSlide === index ? "44px" : "18px",
                      backgroundColor:
                        currentSlide === index
                          ? "#4F8EF7"
                          : "rgba(238,232,220,0.35)",
                    }}
                    aria-label={`Go to snapshot ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={previousSlide}
                  className="group relative overflow-hidden border font-mono transition-all duration-500"
                  style={{
                    borderColor: "rgba(238, 232, 220, 0.2)",
                    color: "#eee8dc",
                    background: "transparent",
                    padding: "0.45rem 1.1rem",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.borderColor = "#4F8EF7";
                    e.currentTarget.style.color = "#4F8EF7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(238, 232, 220, 0.2)";
                    e.currentTarget.style.color = "#eee8dc";
                  }}
                >
                  {/* Animated corner accent */}
                  <span
                    className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 border-l border-t transition-all duration-300 group-hover:h-2.5 group-hover:w-2.5"
                    style={{ borderColor: "#eee8dc" }}
                  />
                  <span
                    className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r transition-all duration-300 group-hover:h-2.5 group-hover:w-2.5"
                    style={{ borderColor: "#eee8dc" }}
                  />
                  Prev
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="group relative overflow-hidden border font-mono transition-all duration-500"
                  style={{
                    borderColor: "rgba(238, 232, 220, 0.2)",
                    color: "#eee8dc",
                    background: "transparent",
                    padding: "0.45rem 1.1rem",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.borderColor = "#4F8EF7";
                    e.currentTarget.style.color = "#4F8EF7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(238, 232, 220, 0.2)";
                    e.currentTarget.style.color = "#eee8dc";
                  }}
                >
                  {/* Animated corner accent */}
                  <span
                    className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 border-l border-t transition-all duration-300 group-hover:h-2.5 group-hover:w-2.5"
                    style={{ borderColor: "#eee8dc" }}
                  />
                  <span
                    className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r transition-all duration-300 group-hover:h-2.5 group-hover:w-2.5"
                    style={{ borderColor: "#eee8dc" }}
                  />
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hero navigation */}
        <div
          className="mt-16 flex items-center justify-between text-[11px] uppercase tracking-[0.28em] text-[#8e8981]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          <span>Scroll</span>

          <div className="flex gap-4">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border font-mono transition-all duration-500"
              style={{
                borderColor: "#4F8EF7",
                color: "#4F8EF7",
                background: "transparent",
                padding: "0.6rem 1.4rem",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(79, 142, 247, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              {/* Animated corner accent */}
              <span
                className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 border-l border-t transition-all duration-300 group-hover:h-3 group-hover:w-3"
                style={{ borderColor: "#4F8EF7" }}
              />
              <span
                className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r transition-all duration-300 group-hover:h-3 group-hover:w-3"
                style={{ borderColor: "#4F8EF7" }}
              />
              View Work ↗
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border font-mono transition-all duration-500"
              style={{
                borderColor: "rgba(238, 232, 220, 0.2)",
                color: "#8e8981",
                background: "transparent",
                padding: "0.6rem 1.4rem",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.color = "#eee8dc";
                e.currentTarget.style.borderColor = "rgba(238, 232, 220, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#8e8981";
                e.currentTarget.style.borderColor = "rgba(238, 232, 220, 0.2)";
              }}
            >
              {/* Animated corner accent */}
              <span
                className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 border-l border-t transition-all duration-300 group-hover:h-3 group-hover:w-3"
                style={{ borderColor: "#eee8dc" }}
              />
              <span
                className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r transition-all duration-300 group-hover:h-3 group-hover:w-3"
                style={{ borderColor: "#eee8dc" }}
              />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Editorial content */}
      <section className="relative z-10 border-t border-[#eee8dc]/15 px-6 py-20 sm:px-10 lg:px-16">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr]">
          <article>
            {/* Overview */}
            <div
              className="mb-8 grid grid-cols-[90px_1fr] border-b border-[#eee8dc]/20 pb-3 text-[11px] uppercase tracking-[0.25em] text-[#8e8981]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              <span>01</span>
              <span>Overview</span>
            </div>

            <div className="space-y-8">
              {project.overview.split("\n\n").map((para, index) => (
                <p
                  key={index}
                  className="max-w-4xl leading-[1.75] text-[#c7beb2]"
                  style={{ fontFamily: "var(--font-bodoni)", fontSize: "1rem" }}
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Features */}
            <div className="mt-20">
              <div
                className="mb-8 grid grid-cols-[90px_1fr] border-b border-[#eee8dc]/20 pb-3 text-[11px] uppercase tracking-[0.25em] text-[#8e8981]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <span>02</span>
                <span>Key Features</span>
              </div>

              <ul>
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className="grid gap-6 border-b border-[#eee8dc]/15 py-6 sm:grid-cols-[90px_1fr]"
                  >
                    <span
                      className="text-[11px] uppercase tracking-[0.25em] text-[#4F8EF7]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      className="leading-relaxed text-[#c7beb2]"
                      style={{ fontFamily: "var(--font-bodoni)", fontSize: "0.95rem" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-10 lg:self-start">
            <div className="border-y border-[#eee8dc]/20 py-6">
              <h3
                className="mb-5 text-[11px] uppercase tracking-[0.25em] text-[#8e8981]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Technical Index
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#eee8dc]/20 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-[#c7beb2]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-b border-[#eee8dc]/20 py-6">
              <h3
                className="mb-5 text-[11px] uppercase tracking-[0.25em] text-[#8e8981]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Details
              </h3>

              <div
                className="space-y-4 text-sm text-[#c7beb2]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <div className="flex justify-between gap-8 border-b border-[#eee8dc]/10 pb-3">
                  <span className="uppercase tracking-[0.18em] text-[#8e8981]">
                    Year
                  </span>
                  <span>{project.year}</span>
                </div>

                <div className="flex justify-between gap-8 border-b border-[#eee8dc]/10 pb-3">
                  <span className="uppercase tracking-[0.18em] text-[#8e8981]">
                    Role
                  </span>
                  <span className="text-right">{project.role}</span>
                </div>
              </div>
            </div>

            
          </aside>
        </div>
      </section>
    </motion.main>
  );
}
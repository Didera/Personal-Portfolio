"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import { Project } from "@/types";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const ibmMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-mono",
});

interface Props {
  project: Project & { snapshots?: string[] };
}

/* ─── Blue theme tokens ─── */
const T = {
  bg:        "#090E18",
  bg2:       "#0D1320",
  surface:   "#111826",
  accent:    "#4F8EF7",                      // blue
  accentDim: "rgba(79,142,247,0.12)",
  accentBorder: "rgba(79,142,247,0.22)",
  text:      "#DDE6F5",
  muted:     "#6278A0",
  bodyText:  "#8AAAD4",
  border:    "rgba(221,230,245,0.08)",
  borderMid: "rgba(221,230,245,0.14)",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: T.muted }}>
      {children}
    </span>
  );
}

function SectionDivider({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-5 border-b pb-4" style={{ borderColor: T.borderMid }}>
      <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase", color: T.accent }}>
        {number}
      </span>
      <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: T.muted }}>
        {title}
      </span>
    </div>
  );
}

export function DSProjectDetail({ project }: Props) {
  const [activeSlide, setActiveSlide] = useState(0);
  const snapshots = project.snapshots ?? [];
  const slideCount = snapshots.length > 0 ? snapshots.length : 3;
  const currentSlide = activeSlide % slideCount;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${playfair.variable} ${ibmMono.variable} relative min-h-screen`}
      style={{ background: T.bg, color: T.text }}
    >
      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          opacity: 0.4,
        }}
      />

      {/* Top accent bar */}
      <div
        className="fixed left-0 top-0 h-[2px] w-full"
        style={{ background: `linear-gradient(90deg, ${T.accent}, transparent)`, zIndex: 50 }}
      />

      {/* ── Header ── */}
      <header
        className="relative z-10 flex items-center justify-between border-b px-8 py-5"
        style={{ borderColor: T.border, background: T.bg }}
      >
        <Link
          href="/#projects"
          style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: T.muted, textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = T.accent)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = T.muted)}
        >
          ← Portfolio
        </Link>
        <div className="flex items-center gap-6">
          <Label>Data Science</Label>
          <div style={{ width: "1px", height: "14px", background: T.border }} />
          <Label>{project.year}</Label>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="relative z-10 border-b px-8 py-16 lg:px-16 lg:py-24" style={{ borderColor: T.border }}>
        {/* Category badge */}
        <div className="mb-8 inline-flex items-center gap-3">
          <span
            className="px-3 py-1"
            style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: T.accent, background: T.accentDim, border: `1px solid ${T.accentBorder}` }}
          >
            Data Science &amp; Analytics
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4.5vw, 4.2rem)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.02em", color: T.text }}>
              {project.name}
            </h1>
            <p style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontStyle: "italic", color: T.accent, marginTop: "0.75rem", lineHeight: 1.4 }}>
              {project.tags.slice(0, 2).join(" · ")}
            </p>
            <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.82rem", lineHeight: 1.85, color: T.muted, maxWidth: "580px", marginTop: "1.5rem" }}>
              {project.shortDesc}
            </p>
          </div>

          {/* Meta card */}
          <div className="border p-6 space-y-5" style={{ borderColor: T.borderMid, background: T.surface }}>
            {[
              { label: "Year",  value: project.year },
              { label: "Role",  value: project.role },
              { label: "Stack", value: project.tech.slice(0, 3).join(", ") },
            ].map(({ label, value }) => (
              <div key={label} className="border-b pb-4 last:border-0 last:pb-0" style={{ borderColor: T.border }}>
                <Label>{label}</Label>
                <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.78rem", color: T.text, marginTop: "0.3rem", lineHeight: 1.5 }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: T.muted, border: `1px solid ${T.border}`, padding: "5px 10px" }}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
          <article className="space-y-16">

            {/* Overview */}
            <div>
              <SectionDivider number="01" title="Project Overview" />
              <div className="space-y-5">
                {project.overview.split("\n\n").map((para, i) => (
                  <p key={i} style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.84rem", lineHeight: 1.9, color: T.bodyText }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div>
              <SectionDivider number="02" title="Key Features" />
              <ul className="space-y-0">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex gap-5 border-b py-5" style={{ borderColor: T.border }}>
                    <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.58rem", letterSpacing: "0.2em", color: T.accent, flexShrink: 0, paddingTop: "2px", minWidth: "28px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.81rem", lineHeight: 1.7, color: T.bodyText }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Snapshots */}
            {snapshots.length > 0 && (
              <div>
                <SectionDivider number="03" title="Project Snapshots" />
                <div className="relative aspect-[16/10] overflow-hidden border" style={{ borderColor: T.borderMid, background: T.surface }}>
                  <motion.img
                    key={snapshots[currentSlide]}
                    src={snapshots[currentSlide]}
                    alt={`${project.name} snapshot ${currentSlide + 1}`}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {snapshots.map((_, i) => (
                      <button key={i} type="button" onClick={() => setActiveSlide(i)}
                        className="h-px transition-all duration-300"
                        style={{ width: currentSlide === i ? "44px" : "18px", backgroundColor: currentSlide === i ? T.accent : `${T.border}` }}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveSlide((s) => (s - 1 + slideCount) % slideCount)}
                      className="group relative overflow-hidden border font-mono transition-all duration-500"
                      style={{
                        borderColor: "rgba(221,230,245,0.15)",
                        color: T.text,
                        background: "transparent",
                        padding: "0.45rem 1.1rem",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        e.currentTarget.style.borderColor = T.accent;
                        e.currentTarget.style.color = T.accent;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderColor = "rgba(221,230,245,0.15)";
                        e.currentTarget.style.color = T.text;
                      }}
                    >
                      {/* Animated corner accent */}
                      <span
                        className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 border-l border-t transition-all duration-300 group-hover:h-2.5 group-hover:w-2.5"
                        style={{ borderColor: T.text }}
                      />
                      <span
                        className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r transition-all duration-300 group-hover:h-2.5 group-hover:w-2.5"
                        style={{ borderColor: T.text }}
                      />
                      Prev
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveSlide((s) => (s + 1) % slideCount)}
                      className="group relative overflow-hidden border font-mono transition-all duration-500"
                      style={{
                        borderColor: "rgba(221,230,245,0.15)",
                        color: T.text,
                        background: "transparent",
                        padding: "0.45rem 1.1rem",
                        fontSize: "0.65rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                        e.currentTarget.style.borderColor = T.accent;
                        e.currentTarget.style.color = T.accent;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.borderColor = "rgba(221,230,245,0.15)";
                        e.currentTarget.style.color = T.text;
                      }}
                    >
                      {/* Animated corner accent */}
                      <span
                        className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 border-l border-t transition-all duration-300 group-hover:h-2.5 group-hover:w-2.5"
                        style={{ borderColor: T.text }}
                      />
                      <span
                        className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r transition-all duration-300 group-hover:h-2.5 group-hover:w-2.5"
                        style={{ borderColor: T.text }}
                      />
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            {/* Tech stack */}
            <div className="border p-6" style={{ borderColor: T.borderMid, background: T.surface }}>
              <Label>Tech Stack</Label>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: T.accent, border: `1px solid ${T.accentBorder}`, background: T.accentDim, padding: "4px 8px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="border p-6 space-y-4" style={{ borderColor: T.borderMid, background: T.surface }}>
              <Label>Details</Label>
              {[
                { k: "Year",  v: project.year },
                { k: "Role",  v: project.role },
              ].map(({ k, v }) => (
                <div key={k} className="flex flex-col gap-1 border-b pb-3 last:border-0 last:pb-0" style={{ borderColor: T.border }}>
                  <Label>{k}</Label>
                  <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.72rem", color: T.text, lineHeight: 1.5 }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="border p-6 space-y-4" style={{ borderColor: T.borderMid, background: T.surface }}>
              <Label>Links</Label>
              <div className="mt-3 flex flex-col gap-3">
                {[
                  { label: "GitHub →", href: project.githubUrl, isPrimary: false },
                  { label: "Live Demo →", href: project.demoUrl, isPrimary: true },
                ].map(({ label, href, isPrimary }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="group relative overflow-hidden border font-mono transition-all duration-500 block text-center"
                    style={{
                      borderColor: isPrimary ? T.accent : "rgba(221,230,245,0.15)",
                      color: isPrimary ? T.accent : T.muted,
                      background: "transparent",
                      padding: "0.6rem 1.2rem",
                      fontSize: "0.65rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = isPrimary ? T.accentDim : "rgba(255, 255, 255, 0.04)";
                      e.currentTarget.style.color = isPrimary ? T.accent : T.text;
                      if (!isPrimary) e.currentTarget.style.borderColor = "rgba(221,230,245,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = isPrimary ? T.accent : T.muted;
                      if (!isPrimary) e.currentTarget.style.borderColor = "rgba(221,230,245,0.15)";
                    }}
                  >
                    {/* Animated corner accent */}
                    <span
                      className="pointer-events-none absolute left-0 top-0 h-1.5 w-1.5 border-l border-t transition-all duration-300 group-hover:h-3 group-hover:w-3"
                      style={{ borderColor: isPrimary ? T.accent : T.text }}
                    />
                    <span
                      className="pointer-events-none absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r transition-all duration-300 group-hover:h-3 group-hover:w-3"
                      style={{ borderColor: isPrimary ? T.accent : T.text }}
                    />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </motion.main>
  );
}

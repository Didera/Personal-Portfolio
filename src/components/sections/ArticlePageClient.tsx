"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import type { Article } from "@/lib/articles";

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

const T = {
  bg:           "#120A09",
  surface:      "#1E1110",
  accent:       "#C4553D",
  accentDim:    "rgba(196,85,61,0.12)",
  accentBorder: "rgba(196,85,61,0.22)",
  text:         "#F0E6E3",
  muted:        "#8A6560",
  bodyText:     "#BFA09A",
  border:       "rgba(240,230,227,0.08)",
  borderMid:    "rgba(240,230,227,0.14)",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase" as const, color: T.muted }}>
      {children}
    </span>
  );
}

function SectionDivider({ number, title }: { number: string; title: string }) {
  return (
    <div className="mb-8 flex items-center gap-5 border-b pb-4" style={{ borderColor: T.borderMid }}>
      <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.6rem", letterSpacing: "0.28em", textTransform: "uppercase" as const, color: T.accent }}>
        {number}
      </span>
      <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase" as const, color: T.muted }}>
        {title}
      </span>
    </div>
  );
}

export function ArticlePageClient({ article }: { article: Article }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${playfair.variable} ${ibmMono.variable} relative min-h-screen`}
      style={{ background: T.bg, color: T.text }}
    >
      {/* Grid background */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          backgroundImage: `linear-gradient(${T.border} 1px, transparent 1px), linear-gradient(90deg, ${T.border} 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          opacity: 0.4,
        }}
      />

      {/* Top accent bar */}
      <div className="fixed left-0 top-0 h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${T.accent}, transparent)`, zIndex: 50 }} />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b px-8 py-5" style={{ borderColor: T.border, background: T.bg }}>
        <Link
          href="/#projects"
          style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: T.muted, textDecoration: "none", transition: "color 0.2s" }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = T.accent)}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = T.muted)}
        >
          ← Portfolio
        </Link>
        <div className="flex items-center gap-6">
          <Label>Written Notes</Label>
          <div style={{ width: "1px", height: "14px", background: T.border }} />
          <Label>{article.date}</Label>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 border-b px-8 py-16 lg:px-16 lg:py-24" style={{ borderColor: T.border }}>
        <div className="mb-8 inline-flex items-center gap-3">
          <span className="px-3 py-1" style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: T.accent, background: T.accentDim, border: `1px solid ${T.accentBorder}` }}>
            {article.category}
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:items-start">
          <div>
            <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4.5vw, 4.2rem)", fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.02em", color: T.text }}>
              {article.title}
            </h1>
            <p style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1rem, 2vw, 1.3rem)", fontStyle: "italic", color: T.accent, marginTop: "0.75rem", lineHeight: 1.4 }}>
              {article.publication}
            </p>
            <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.82rem", lineHeight: 1.85, color: T.muted, maxWidth: "580px", marginTop: "1.5rem" }}>
              {article.excerpt}
            </p>
          </div>

          {/* Meta card */}
          <div className="border p-6 space-y-5" style={{ borderColor: T.borderMid, background: T.surface }}>
            {[
              { label: "Author",      value: article.author },
              { label: "Published",   value: article.date },
              { label: "Category",    value: article.category },
              { label: "Read Time",   value: article.readTime },
              { label: "Publication", value: article.publication },
            ].map(({ label, value }) => (
              <div key={label} className="border-b pb-4 last:border-0 last:pb-0" style={{ borderColor: T.border }}>
                <Label>{label}</Label>
                <p style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.78rem", color: T.text, marginTop: "0.3rem", lineHeight: 1.5 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="relative z-10 px-8 py-16 lg:px-16 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_280px]">
          <article className="space-y-12">
            {article.sections.map((section, si) => (
              <div key={section.heading}>
                <SectionDivider number={String(si + 1).padStart(2, "0")} title={section.heading} />
                <div className="space-y-5">
                  {section.body.map((paragraph, pi) => (
                    <p key={pi} style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.84rem", lineHeight: 1.9, color: T.bodyText }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <div className="border p-6 space-y-4" style={{ borderColor: T.borderMid, background: T.surface }}>
              <Label>Article Info</Label>
              {[
                { k: "Author",   v: article.author },
                { k: "Date",     v: article.date },
                { k: "Duration", v: article.readTime },
              ].map(({ k, v }) => (
                <div key={k} className="flex flex-col gap-1 border-b pb-3 last:border-0 last:pb-0" style={{ borderColor: T.border }}>
                  <Label>{k}</Label>
                  <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.72rem", color: T.text, lineHeight: 1.5 }}>{v}</span>
                </div>
              ))}
            </div>

            <div className="border p-6" style={{ borderColor: T.borderMid, background: T.surface }}>
              <Label>Category</Label>
              <div className="mt-4 flex flex-wrap gap-2">
                <span style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.58rem", letterSpacing: "0.14em", textTransform: "uppercase", color: T.accent, border: `1px solid ${T.accentBorder}`, background: T.accentDim, padding: "4px 8px" }}>
                  {article.category}
                </span>
              </div>
            </div>

            {article.sourceUrl && (
              <div className="border p-6 space-y-3" style={{ borderColor: T.borderMid, background: T.surface }}>
                <Label>Read Online</Label>
                <div className="mt-3">
                  <a
                    href={article.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-ibm-mono)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: T.muted, textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = T.accent)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = T.muted)}
                  >
                    View Original Article →
                  </a>
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </motion.main>
  );
}

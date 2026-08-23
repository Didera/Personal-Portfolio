"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { projects } from "@/lib/projects";
import { articles } from "@/lib/articles";

type ActivePanel = "data-science" | "business-analysis" | "articles";

const dsProjects = projects.filter((p) => p.category === "data-science");
const baProjects = projects.filter((p) => p.category === "business-analysis");

const COLOR = {
  ds:       "#4F8EF7",
  ba:       "#2DD4BF",
  articles: "#C4553D",
} as const;

export function ProjectsSection() {
  const [activePanel, setActivePanel] = useState<ActivePanel>("business-analysis");
  const [activeMobilePanel, setActiveMobilePanel] = useState<ActivePanel | null>("business-analysis");

  const toggleMobile = (panel: ActivePanel) => {
    setActiveMobilePanel(current => current === panel ? null : panel);
  };

  const isDSActive       = activePanel === "data-science";
  const isBAActive       = activePanel === "business-analysis";
  const isArticlesActive = activePanel === "articles";

  const gridCols = isDSActive
    ? "3fr 1fr 1fr"
    : isBAActive
    ? "1fr 3fr 1fr"
    : "1fr 1fr 3fr";

  return (
    <section
      id="projects"
      className="px-10 py-28 lg:px-16 lg:py-36"
      style={{ background: "var(--bg2)" }}
    >
      <ScrollReveal>
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
            No. 03
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
            Selected Work / Articles
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="mb-12 max-w-4xl">
          <h2 className="font-serif leading-[1.1]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "var(--text)", letterSpacing: "-0.02em" }}>
            Work archive{" "}
            <em className="font-serif" style={{ fontStyle: "italic", color: "var(--accent)" }}>
              and notes . . .
            </em>
          </h2>
          <p className="mt-5 max-w-2xl font-mono" style={{ fontSize: "0.82rem", lineHeight: 1.9, color: "var(--muted)" }}>
            Click any editorial panel to expand the selected archive.
          </p>
        </div>
      </ScrollReveal>

      {/* Desktop three-panel split */}
      <div
        className="hidden min-h-[620px] overflow-hidden border lg:grid"
        style={{
          borderColor: "var(--border)",
          gridTemplateColumns: gridCols,
          transition: "grid-template-columns 700ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Data Science */}
        <button type="button" onClick={() => setActivePanel("data-science")}
          className="group relative block h-full overflow-hidden border-r text-left"
          style={{ borderColor: "var(--border)", background: isDSActive ? "var(--bg2)" : "var(--bg)" }}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-7 py-6" style={{ borderColor: "var(--border)" }}>
              <div>
                <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: isDSActive ? COLOR.ds : "var(--muted)" }}>
                  01 / Data Science
                </span>
                <h3 className="mt-3 font-serif leading-none" style={{ fontSize: isDSActive ? "clamp(2rem, 3.4vw, 3.4rem)" : "clamp(1.5rem, 2vw, 2rem)", color: "var(--text)", letterSpacing: "-0.035em", transition: "font-size 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  Data Science
                </h3>
              </div>
              <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                {isDSActive ? "Open" : "Click"}
              </span>
            </div>
            <div
              className={`flex-1 px-7 py-6 ${isDSActive ? "experience-scroll overflow-y-auto pr-2 lg:pr-6" : "overflow-hidden"}`}
              style={{
                opacity: isDSActive ? 1 : 0.45,
                transition: "opacity 500ms ease",
                maxHeight: isDSActive ? "480px" : undefined,
                "--panel-accent": COLOR.ds,
              } as React.CSSProperties}
            >
              {isDSActive ? (
                <div>
                  {dsProjects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} accentColor={COLOR.ds} />)}
                  <div style={{ height: "1px", background: "var(--border)" }} />
                </div>
              ) : (
                <CompressedPanel title="Data Science" count={dsProjects.length} items={dsProjects.map((p) => p.name)} accent={COLOR.ds} />
              )}
            </div>
          </div>
        </button>

        {/* Business Analysis */}
        <button type="button" onClick={() => setActivePanel("business-analysis")}
          className="group relative block h-full overflow-hidden border-r text-left"
          style={{ borderColor: "var(--border)", background: isBAActive ? "var(--bg2)" : "var(--bg)" }}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-7 py-6" style={{ borderColor: "var(--border)" }}>
              <div>
                <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: isBAActive ? COLOR.ba : "var(--muted)" }}>
                  02 / Business Analysis
                </span>
                <h3 className="mt-3 font-serif leading-none" style={{ fontSize: isBAActive ? "clamp(2rem, 3.4vw, 3.4rem)" : "clamp(1.5rem, 2vw, 2rem)", color: "var(--text)", letterSpacing: "-0.035em", transition: "font-size 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  Business Analysis
                </h3>
              </div>
              <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                {isBAActive ? "Open" : "Click"}
              </span>
            </div>
            <div
              className={`flex-1 px-7 py-6 ${isBAActive ? "experience-scroll overflow-y-auto pr-2 lg:pr-6" : "overflow-hidden"}`}
              style={{
                opacity: isBAActive ? 1 : 0.45,
                transition: "opacity 500ms ease",
                maxHeight: isBAActive ? "480px" : undefined,
                "--panel-accent": COLOR.ba,
              } as React.CSSProperties}
            >
              {isBAActive ? (
                <div>
                  {baProjects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} accentColor={COLOR.ba} />)}
                  <div style={{ height: "1px", background: "var(--border)" }} />
                </div>
              ) : (
                <CompressedPanel title="Business Analysis" count={baProjects.length} items={baProjects.map((p) => p.name)} accent={COLOR.ba} />
              )}
            </div>
          </div>
        </button>

        {/* Articles */}
        <button type="button" onClick={() => setActivePanel("articles")}
          className="group relative block h-full overflow-hidden text-left"
          style={{ background: isArticlesActive ? "var(--bg2)" : "var(--bg)" }}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-7 py-6" style={{ borderColor: "var(--border)" }}>
              <div>
                <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: isArticlesActive ? COLOR.articles : "var(--muted)" }}>
                  03 / Articles
                </span>
                <h3 className="mt-3 font-serif leading-none" style={{ fontSize: isArticlesActive ? "clamp(2rem, 3.4vw, 3.4rem)" : "clamp(1.5rem, 2vw, 2rem)", color: "var(--text)", letterSpacing: "-0.035em", transition: "font-size 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  Written Notes
                </h3>
              </div>
              <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                {isArticlesActive ? "Open" : "Click"}
              </span>
            </div>
            <div
              className={`flex-1 px-7 py-6 ${isArticlesActive ? "experience-scroll overflow-y-auto pr-2 lg:pr-6" : "overflow-hidden"}`}
              style={{
                opacity: isArticlesActive ? 1 : 0.45,
                transition: "opacity 500ms ease",
                maxHeight: isArticlesActive ? "480px" : undefined,
                "--panel-accent": COLOR.articles,
              } as React.CSSProperties}
            >
              {isArticlesActive ? (
                <div>
                  {articles.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} accentColor={COLOR.articles} />)}
                  <div style={{ height: "1px", background: "var(--border)" }} />
                </div>
              ) : (
                <CompressedPanel title="Articles" count={articles.length} items={articles.map((a) => a.title)} accent={COLOR.articles} />
              )}
            </div>
          </div>
        </button>
      </div>

      {/* Mobile */}
      <div className="space-y-2 lg:hidden">
        <MobileAccordion
          number="01"
          title="Data Science"
          subtitle="Data Science"
          accent={COLOR.ds}
          isOpen={activeMobilePanel === "data-science"}
          onClick={() => toggleMobile("data-science")}
        >
          <div className="pt-2 pb-6">
            {dsProjects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} accentColor={COLOR.ds} />)}
            <div style={{ height: "1px", background: "var(--border)" }} />
          </div>
        </MobileAccordion>
        
        <MobileAccordion
          number="02"
          title="Business Analysis"
          subtitle="Business Analysis"
          accent={COLOR.ba}
          isOpen={activeMobilePanel === "business-analysis"}
          onClick={() => toggleMobile("business-analysis")}
        >
          <div className="pt-2 pb-6">
            {baProjects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} accentColor={COLOR.ba} />)}
            <div style={{ height: "1px", background: "var(--border)" }} />
          </div>
        </MobileAccordion>

        <MobileAccordion
          number="03"
          title="Articles"
          subtitle="Written Notes"
          accent={COLOR.articles}
          isOpen={activeMobilePanel === "articles"}
          onClick={() => toggleMobile("articles")}
        >
          <div className="pt-2 pb-6">
            {articles.map((a, i) => <ArticleCard key={a.slug} article={a} index={i} accentColor={COLOR.articles} />)}
            <div style={{ height: "1px", background: "var(--border)" }} />
          </div>
        </MobileAccordion>
      </div>
    </section>
  );
}

function CompressedPanel({ title, count, items, accent }: { title: string; count: number; items: readonly string[]; accent: string }) {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <p className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>{count} Entries</p>
        <div className="mt-8 space-y-4">
          {[...items].slice(0, 4).map((item, index) => (
            <div key={item} className="border-b pb-4" style={{ borderColor: "var(--border)" }}>
              <span className="font-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.16em", textTransform: "uppercase", color: accent }}>{String(index + 1).padStart(2, "0")}</span>
              <p className="mt-2 line-clamp-2 font-serif" style={{ fontSize: "1.2rem", lineHeight: 1.1, color: "var(--text)", letterSpacing: "-0.025em" }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-10 font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>Click to expand {title}</p>
    </div>
  );
}

function MobileAccordion({ number, title, subtitle, accent, isOpen, onClick, children }: { number: string; title: string; subtitle: string; accent: string; isOpen: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <div className="border-b" style={{ borderColor: "var(--border)" }}>
      <button type="button" onClick={onClick} className="w-full text-left py-5 flex justify-between items-end group">
        <div>
          <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: accent }}>{number} / {title}</span>
          <h3 className="mt-3 font-serif leading-none" style={{ fontSize: "clamp(2rem, 8vw, 3rem)", color: "var(--text)", letterSpacing: "-0.035em" }}>{subtitle}</h3>
        </div>
        <span className="font-mono text-xl mb-1" style={{ color: "var(--muted)", transition: "transform 0.3s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          ↓
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
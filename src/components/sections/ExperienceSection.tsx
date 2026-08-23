"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  experiences,
  volunteeringExperiences,
  competitionExperiences,
} from "@/lib/data";

type ExperiencePanelType = "technical" | "volunteering" | "competitions";

type ExperienceItem = {
  period: string;
  company: string;
  type: string;
  location: string;
  role: string;
  bullets: string[];
};

const COLOR = {
  tech: "#22D3EE", // electric cyan
  vol:  "#FB923C", // amber-orange
  comp: "#C084FC", // orchid
} as const;

export function ExperienceSection() {
  const [activePanel, setActivePanel] = useState<ExperiencePanelType>("technical");
  const [activeMobilePanel, setActiveMobilePanel] = useState<ExperiencePanelType | null>("technical");

  const toggleMobile = (panel: ExperiencePanelType) => {
    setActiveMobilePanel(current => current === panel ? null : panel);
  };

  const isTechActive = activePanel === "technical";
  const isVolActive  = activePanel === "volunteering";
  const isCompActive = activePanel === "competitions";

  const gridCols = isTechActive
    ? "3fr 1fr 1fr"
    : isVolActive
    ? "1fr 3fr 1fr"
    : "1fr 1fr 3fr";

  return (
    <section
      id="experience"
      className="px-10 py-28 lg:px-16 lg:py-36"
      style={{ background: "var(--bg)" }}
    >
      {/* Section label */}
      <ScrollReveal>
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
            No. 04
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
            Curriculum Vitae
          </span>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.05}>
        <div className="mb-12 max-w-4xl">
          <h2 className="font-serif leading-[1.1]" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", color: "var(--text)", letterSpacing: "-0.02em" }}>
            Experience{" "}
            <em className="font-serif" style={{ fontStyle: "italic", color: "var(--accent)" }}>
              so far . . .
            </em>
          </h2>
          <p className="mt-5 max-w-2xl font-mono" style={{ fontSize: "0.82rem", lineHeight: 1.9, color: "var(--muted)" }}>
            Click any panel to expand the selected experience category.
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
        {/* Technical (Cyan) */}
        <button type="button" onClick={() => setActivePanel("technical")}
          className="group relative block h-full overflow-hidden border-r text-left"
          style={{ borderColor: "var(--border)", background: isTechActive ? "var(--bg2)" : "var(--bg)" }}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-7 py-6" style={{ borderColor: "var(--border)" }}>
              <div>
                <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: isTechActive ? COLOR.tech : "var(--muted)" }}>
                  01 / Technical
                </span>
                <h3 className="mt-3 font-serif leading-none" style={{ fontSize: isTechActive ? "clamp(1.7rem, 2.5vw, 2.4rem)" : "clamp(1.2rem, 1.8vw, 1.5rem)", color: "var(--text)", letterSpacing: "-0.035em", transition: "font-size 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  Technical Experience
                </h3>
              </div>
              <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                {isTechActive ? "Open" : "Click"}
              </span>
            </div>
            <div
              className={`flex-1 px-7 py-6 ${isTechActive ? "experience-scroll overflow-y-auto pr-2 lg:pr-6" : "overflow-hidden"}`}
              style={{
                opacity: isTechActive ? 1 : 0.45,
                transition: "opacity 500ms ease",
                maxHeight: isTechActive ? "480px" : undefined,
                "--panel-accent": COLOR.tech,
              } as React.CSSProperties}
            >
              {isTechActive ? (
                <div>
                  {experiences.map((exp, i) => (
                    <ExperienceItemRow key={`${exp.company}-${exp.role}`} exp={exp} i={i} color={COLOR.tech} />
                  ))}
                </div>
              ) : (
                <CompressedPanel title="Technical" count={experiences.length} items={experiences.map((e) => e.role)} accent={COLOR.tech} />
              )}
            </div>
          </div>
        </button>

        {/* Volunteering (Orange) */}
        <button type="button" onClick={() => setActivePanel("volunteering")}
          className="group relative block h-full overflow-hidden border-r text-left"
          style={{ borderColor: "var(--border)", background: isVolActive ? "var(--bg2)" : "var(--bg)" }}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-7 py-6" style={{ borderColor: "var(--border)" }}>
              <div>
                <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: isVolActive ? COLOR.vol : "var(--muted)" }}>
                  02 / Volunteering
                </span>
                <h3 className="mt-3 font-serif leading-none" style={{ fontSize: isVolActive ? "clamp(1.7rem, 2.5vw, 2.4rem)" : "clamp(1.2rem, 1.8vw, 1.5rem)", color: "var(--text)", letterSpacing: "-0.035em", transition: "font-size 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  Volunteering
                </h3>
              </div>
              <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                {isVolActive ? "Open" : "Click"}
              </span>
            </div>
            <div
              className={`flex-1 px-7 py-6 ${isVolActive ? "experience-scroll overflow-y-auto pr-2 lg:pr-6" : "overflow-hidden"}`}
              style={{
                opacity: isVolActive ? 1 : 0.45,
                transition: "opacity 500ms ease",
                maxHeight: isVolActive ? "480px" : undefined,
                "--panel-accent": COLOR.vol,
              } as React.CSSProperties}
            >
              {isVolActive ? (
                <div>
                  {volunteeringExperiences.map((exp, i) => (
                    <ExperienceItemRow key={`${exp.company}-${exp.role}`} exp={exp} i={i} color={COLOR.vol} />
                  ))}
                </div>
              ) : (
                <CompressedPanel title="Volunteering" count={volunteeringExperiences.length} items={volunteeringExperiences.map((e) => e.role)} accent={COLOR.vol} />
              )}
            </div>
          </div>
        </button>

        {/* Competitions (Orchid) */}
        <button type="button" onClick={() => setActivePanel("competitions")}
          className="group relative block h-full overflow-hidden text-left"
          style={{ background: isCompActive ? "var(--bg2)" : "var(--bg)" }}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b px-7 py-6" style={{ borderColor: "var(--border)" }}>
              <div>
                <span className="font-mono" style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", color: isCompActive ? COLOR.comp : "var(--muted)" }}>
                  03 / Competitions
                </span>
                <h3 className="mt-3 font-serif leading-none" style={{ fontSize: isCompActive ? "clamp(1.7rem, 2.5vw, 2.4rem)" : "clamp(1.2rem, 1.8vw, 1.5rem)", color: "var(--text)", letterSpacing: "-0.035em", transition: "font-size 700ms cubic-bezier(0.22, 1, 0.36, 1)" }}>
                  Competitions
                </h3>
              </div>
              <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                {isCompActive ? "Open" : "Click"}
              </span>
            </div>
            <div
              className={`flex-1 px-7 py-6 ${isCompActive ? "experience-scroll overflow-y-auto pr-2 lg:pr-6" : "overflow-hidden"}`}
              style={{
                opacity: isCompActive ? 1 : 0.45,
                transition: "opacity 500ms ease",
                maxHeight: isCompActive ? "480px" : undefined,
                "--panel-accent": COLOR.comp,
              } as React.CSSProperties}
            >
              {isCompActive ? (
                <div>
                  {competitionExperiences.map((exp, i) => (
                    <ExperienceItemRow key={`${exp.company}-${exp.role}`} exp={exp} i={i} color={COLOR.comp} />
                  ))}
                </div>
              ) : (
                <CompressedPanel title="Competitions" count={competitionExperiences.length} items={competitionExperiences.map((e) => e.role)} accent={COLOR.comp} />
              )}
            </div>
          </div>
        </button>
      </div>

      {/* Mobile */}
      <div className="space-y-2 lg:hidden">
        <MobileAccordion
          number="01"
          title="Technical"
          subtitle="Technical Experience"
          accent={COLOR.tech}
          isOpen={activeMobilePanel === "technical"}
          onClick={() => toggleMobile("technical")}
        >
          <div className="pt-2 pb-6">
            {experiences.map((exp, i) => (
              <ExperienceItemRow key={`${exp.company}-${exp.role}`} exp={exp} i={i} color={COLOR.tech} />
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion
          number="02"
          title="Volunteering"
          subtitle="Volunteering"
          accent={COLOR.vol}
          isOpen={activeMobilePanel === "volunteering"}
          onClick={() => toggleMobile("volunteering")}
        >
          <div className="pt-2 pb-6">
            {volunteeringExperiences.map((exp, i) => (
              <ExperienceItemRow key={`${exp.company}-${exp.role}`} exp={exp} i={i} color={COLOR.vol} />
            ))}
          </div>
        </MobileAccordion>

        <MobileAccordion
          number="03"
          title="Competitions"
          subtitle="Competitions"
          accent={COLOR.comp}
          isOpen={activeMobilePanel === "competitions"}
          onClick={() => toggleMobile("competitions")}
        >
          <div className="pt-2 pb-6">
            {competitionExperiences.map((exp, i) => (
              <ExperienceItemRow key={`${exp.company}-${exp.role}`} exp={exp} i={i} color={COLOR.comp} />
            ))}
          </div>
        </MobileAccordion>
      </div>
    </section>
  );
}

function ExperienceItemRow({ exp, i, color }: { exp: ExperienceItem; i: number; color: string }) {
  return (
    <div
      className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-12 lg:gap-8"
      style={{
        borderTop: i === 0 ? "none" : "1px solid var(--border)",
      }}
    >
      {/* Left column */}
      <div className="lg:col-span-3">
        <div
          className="font-mono text-[0.68rem] tracking-wider uppercase"
          style={{ color }}
        >
          {exp.period}
        </div>
        <div className="font-mono text-[0.72rem] text-muted mt-1">
          {exp.company}
        </div>
        <div className="font-mono text-[0.68rem] text-muted">
          {exp.type} · {exp.location}
        </div>
      </div>

      {/* Right column */}
      <div className="lg:col-span-9">
        <h4 className="font-serif text-lg lg:text-xl text-text leading-tight">
          {exp.role}
        </h4>
        <ul className="mt-4 space-y-2">
          {exp.bullets.map((bullet, j) => (
            <li
              key={j}
              className="font-mono flex gap-3 text-[0.82rem] text-muted leading-relaxed"
            >
              <span
                className="mt-2 flex-shrink-0"
                style={{
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: color,
                }}
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { certifications } from "@/lib/certifications";
import { CertificationCard } from "@/components/ui/CertificationCard";

const ACCENT = "#F97316"; // orange

export function CertificationsSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── Section ── */}
      <section
        id="certifications"
        className="relative px-10 py-24 lg:px-16 lg:py-32 overflow-hidden"
        style={{ background: "var(--bg)" }}
      >
        {/* Subtle dot grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${ACCENT}18 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />

        <ScrollReveal>
          <div className="mb-14 flex items-center gap-4">
            <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
              No. 04.5
            </span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            <span className="font-mono" style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
              Credentials
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2
                className="font-serif leading-[1.08]"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.4rem)", color: "var(--text)", letterSpacing: "-0.025em" }}
              >
                Certifications &amp;{" "}
                <em className="font-serif" style={{ fontStyle: "italic", color: ACCENT }}>
                  credentials
                </em>
              </h2>
            </div>

            {/* CTA button */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="group relative self-start overflow-hidden border font-mono transition-all duration-500 lg:self-end"
              style={{
                borderColor: ACCENT,
                color: ACCENT,
                background: "transparent",
                padding: "0.85rem 2rem",
                fontSize: "0.72rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = `${ACCENT}18`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {/* Animated corner accent */}
              <span
                className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t transition-all duration-300 group-hover:h-4 group-hover:w-4"
                style={{ borderColor: ACCENT }}
              />
              <span
                className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r transition-all duration-300 group-hover:h-4 group-hover:w-4"
                style={{ borderColor: ACCENT }}
              />
              View Certifications →
            </button>
          </div>
        </ScrollReveal>


      </section>

      {/* ── Modal overlay ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[200]"
              style={{ background: "rgba(8, 8, 7, 0.75)", backdropFilter: "blur(8px)" }}
              onClick={() => setOpen(false)}
            />

            {/* Subwindow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.36, 1] }}
              className="fixed inset-x-4 bottom-0 top-16 z-[210] mx-auto flex flex-col overflow-hidden lg:inset-x-16 lg:top-20"
              style={{
                maxWidth: "960px",
                maxHeight: "85vh",
                border: `1px solid ${ACCENT}35`,
                background: "rgba(12, 11, 9, 0.88)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              {/* Window chrome */}
              <div
                className="flex shrink-0 items-center justify-between border-b px-7 py-5"
                style={{ borderColor: `${ACCENT}25` }}
              >
                <div className="flex items-center gap-5">
                  {/* Traffic light dots */}
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="h-3 w-3 rounded-full transition-opacity hover:opacity-80"
                      style={{ background: "#FF5F57" }}
                      aria-label="Close"
                    />
                    <span className="h-3 w-3 rounded-full" style={{ background: "#FEBC2E" }} />
                    <span className="h-3 w-3 rounded-full" style={{ background: "#28C840" }} />
                  </div>
                  <span className="font-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: ACCENT }}>
                    Credentials Archive
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="font-mono transition-colors duration-200"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)", background: "none", border: "none", cursor: "pointer" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = ACCENT)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
                >
                  Close ✕
                </button>
              </div>

              {/* Scrollable cert list */}
              <div className="cert-scroll flex-1 overflow-y-auto px-7 py-6">
                <div className="grid gap-0 lg:grid-cols-2 lg:gap-x-16">
                  {certifications.map((cert, i) => (
                    <CertificationCard
                      key={cert.title}
                      cert={cert}
                      index={i}
                      accentColor={ACCENT}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom bar */}
              <div
                className="flex shrink-0 items-center justify-between border-t px-7 py-4"
                style={{ borderColor: `${ACCENT}25` }}
              >
                <span className="font-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--muted)" }}>
                  Click outside to dismiss
                </span>
                <span className="font-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: `${ACCENT}70` }}>
                  Devinda Rajawardhane · Credentials
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ParticleField } from "@/components/ui/ParticleField";

/* ── Typewriter Block ── */
const LINES = [
  "Data Analyst & Computer Science undergraduate",
  "specializing in Data Science —",
  "transforming complex, unstructured datasets into",
  "high-impact analytical pipelines",
  "and data-driven narratives, bridging the gap between technical depth and business impact",
];

const CHAR_SPEED = 28;
const LINE_PAUSE = 250;

function TypewriterBlock({ started }: { started: boolean }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    setCurrentChar((prev) => {
      const lineText = LINES[currentLine];
      if (!lineText) return prev;
      if (prev < lineText.length) return prev + 1;
      return prev;
    });
  }, [currentLine]);

  useEffect(() => {
    if (!started) return;
    if (currentLine >= LINES.length) return;
    const lineText = LINES[currentLine];
    if (currentChar < lineText.length) {
      timerRef.current = setTimeout(tick, CHAR_SPEED);
    } else {
      timerRef.current = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, LINE_PAUSE);
    }
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [started, currentLine, currentChar, tick]);

  return (
    <div
      className="font-mono"
      style={{
        fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
        maxWidth: "580px",
        lineHeight: 2,
        letterSpacing: "0.02em",
        wordBreak: "break-word",
        overflowWrap: "break-word",
        textAlign: "center",
      }}
    >
      {LINES.map((line, i) => {
        if (i > currentLine) return null;
        const visibleText = i < currentLine ? line : line.slice(0, currentChar);
        const isActive = i === currentLine && currentLine < LINES.length;
        return (
          <div key={i} style={{ color: "var(--muted)", marginBottom: "0.35em", minHeight: "1.85em" }}>
            {visibleText}
            {isActive && (
              <span
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1em",
                  marginLeft: "2px",
                  background: "var(--accent)",
                  verticalAlign: "text-bottom",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function HeroSection() {
  // Observe when the typewriter row scrolls into view
  const [bioRef, bioInView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      /* Two "screens" tall so user scrolls through the hero naturally */
      style={{ minHeight: "200vh" }}
    >
      {/* Particle background spans the full 200vh section */}
      <ParticleField />

      {/* ─────────────────────────────────────────
          PART 1 — Name block
          Fills exactly one viewport height so it
          appears centred when the page first loads.
      ───────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 text-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Editorial marginalia — top right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute top-8 right-10 lg:right-16 font-mono text-right z-10"
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--muted)",
            lineHeight: 2.2,
          }}
        >
          Didera&apos;s Portfolio<br />
          Gampaha, Sri Lanka<br />
          2026
        </motion.div>

        {/* Accent rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "60px",
            height: "1px",
            background: "var(--accent)",
            marginBottom: "2rem",
            transformOrigin: "center",
          }}
        />

        {/* Name */}
        <h1
          className="font-serif leading-[0.92]"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            letterSpacing: "-0.03em",
            color: "var(--text)",
            textAlign: "center",
          }}
        >
          <span style={{ display: "block", overflow: "hidden" }}>
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "block",
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                letterSpacing: "0.05em",
                color: "var(--muted)",
              }}
            >
              Hi! I&apos;m
            </motion.span>
          </span>

          <span style={{ display: "block", overflow: "hidden" }}>
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "block" }}
            >
              Devinda
            </motion.span>
          </span>

          <span style={{ display: "block", overflow: "hidden" }}>
            <motion.em
              className="font-serif"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "block",
                fontStyle: "italic",
                color: "var(--accent)",
                fontSize: "clamp(1.4rem, 3.5vw, 3.2rem)",
                letterSpacing: "-0.01em",
                marginTop: "0.4rem",
              }}
            >
              Welcome to My Portfolio
            </motion.em>
          </span>
        </h1>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="w-px h-12 animate-scroll-pulse" style={{ background: "var(--border)" }} />
          <span
            className="font-mono"
            style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}
          >
            Scroll
          </span>
        </motion.div>
      </div>

      {/* ─────────────────────────────────────────
          PART 2 — Typewriter bio + CTAs
          Sits in the second half of the section.
          Scrolling into view starts the typewriter.
      ───────────────────────────────────────── */}
      <div
        ref={bioRef}
        className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16 text-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={bioInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: "60px",
            height: "1px",
            background: "var(--border)",
            marginBottom: "2.5rem",
            transformOrigin: "center",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
          animate={bioInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-10 w-full"
        >
          <TypewriterBlock started={bioInView} />

          <div className="flex gap-8 items-center justify-center">
            <Link
              href="#projects"
              className="font-mono no-underline transition-colors duration-300"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--text)",
                borderBottom: "1px solid var(--text)",
                paddingBottom: "4px",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--accent)";
                el.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.color = "var(--text)";
                el.style.borderColor = "var(--text)";
              }}
            >
              View Work ↗
            </Link>
            <Link
              href="#contact"
              className="font-mono no-underline transition-colors duration-300"
              style={{
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

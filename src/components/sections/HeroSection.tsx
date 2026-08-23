"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
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
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [started, currentLine, currentChar, tick]);

  return (
    <div
      className="font-mono"
      style={{
        fontSize: "clamp(0.75rem, 2.5vw, 0.9rem)",
        maxWidth: "520px",
        lineHeight: 1.85,
        letterSpacing: "0.02em",
        wordBreak: "break-word",
        overflowWrap: "break-word",
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
                className="typewriter-cursor"
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
  const sectionRef = useRef<HTMLElement>(null);
  const [typewriterStarted, setTypewriterStarted] = useState(false);

  // Track scroll progress across the full hero section (280vh)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Typewriter + CTA appear when user has scrolled ~30% through hero
  // Start the typewriter typing once scroll threshold passed
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v >= 0.28 && !typewriterStarted) {
      setTypewriterStarted(true);
    }
  });

  // Typewriter row fades in between scroll 28% → 50%
  const bioOpacity = useTransform(scrollYProgress, [0.28, 0.52], [0, 1]);
  const bioY      = useTransform(scrollYProgress, [0.28, 0.52], [40, 0]);

  // Scroll indicator fades out once user starts scrolling
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    /* ── 280vh outer section gives scroll room ── */
    <section
      ref={sectionRef}
      id="hero"
      className="relative"
      style={{ minHeight: "280vh" }}
    >
      {/* ── Sticky panel: stays in viewport as user scrolls ── */}
      <div
        className="sticky top-0 flex flex-col overflow-hidden"
        style={{ height: "100vh" }}
      >
        <ParticleField />

        {/* Editorial marginalia — top right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
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

        {/* ── Main content: vertically centered ── */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-16">

          {/* Accent rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "60px",
              height: "1px",
              background: "var(--accent)",
              marginBottom: "2rem",
              transformOrigin: "left",
            }}
          />

          {/* ── Phase 1: Name (loads on mount, centered) ── */}
          <h1
            className="font-serif leading-[0.92]"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
            }}
          >
            <span style={{ display: "block", overflow: "hidden" }}>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "block",
                  fontSize: "clamp(2.2rem, 2.5vw, 2rem)",
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
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
                transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
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

          {/* ── Phase 2: Typewriter + CTAs (revealed on scroll) ── */}
          <motion.div
            style={{ opacity: bioOpacity, y: bioY }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mt-12 gap-8"
          >
            <TypewriterBlock started={typewriterStarted} />

            <div className="flex gap-8 items-center">
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

        {/* Scroll hint — fades out as soon as user starts scrolling */}
        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <div
            className="w-px h-12 animate-scroll-pulse"
            style={{ background: "var(--border)" }}
          />
          <span
            className="font-mono"
            style={{
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}

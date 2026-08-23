"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const CHAR_SPEED = 28;  // ms per character
const LINE_PAUSE = 250; // pause between lines

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

  // Character ticker — only runs once `started` is true
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

        const visibleText =
          i < currentLine ? line : line.slice(0, currentChar);
        const isActive = i === currentLine && currentLine < LINES.length;

        return (
          <div
            key={i}
            style={{
              color: "var(--muted)",
              marginBottom: "0.35em",
              minHeight: "1.85em",
            }}
          >
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
  // Observe when the sticky content block is in view to trigger animations
  const [contentRef, contentInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Scroll-based fade-out: content fades as user scrolls past the midpoint
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  // Fade content out in the second half of the scroll
  const contentOpacity = useTransform(scrollYProgress, [0.5, 0.85], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0.5, 0.85], ["0%", "-6%"]);

  return (
    /* Outer scroll container — 200vh gives room to scroll through */
    <section
      ref={sectionRef}
      id="hero"
      className="relative"
      style={{ minHeight: "200vh" }}
    >
      {/* ── Sticky viewport-height panel ── */}
      <div className="sticky top-0 flex min-h-screen flex-col overflow-hidden">
        {/* Particle background fills the sticky panel */}
        <ParticleField />

        {/* Editorial marginalia — top right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={contentInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
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

        {/* ── Centered content ── */}
        <motion.div
          ref={contentRef}
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-10 flex flex-1 flex-col justify-center px-6 sm:px-10 lg:px-16"
        >
          {/* Thin horizontal rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={contentInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: "60px",
              height: "1px",
              background: "var(--accent)",
              marginBottom: "2rem",
              transformOrigin: "left",
            }}
          />

          {/* Name — cinematic split reveal */}
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
                animate={contentInView ? { y: "0%" } : {}}
                transition={{
                  duration: 1,
                  delay: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
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
                animate={contentInView ? { y: "0%" } : {}}
                transition={{
                  duration: 1,
                  delay: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ display: "block" }}
              >
                Devinda
              </motion.span>
            </span>

            <span style={{ display: "block", overflow: "hidden" }}>
              <motion.em
                className="font-serif"
                initial={{ y: "110%" }}
                animate={contentInView ? { y: "0%" } : {}}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
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

          {/* Typewriter + CTAs — appear after name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mt-12 gap-8"
          >
            <TypewriterBlock started={contentInView} />

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
        </motion.div>

        {/* Scroll indicator — stays at bottom of sticky panel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={contentInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, delay: 1.2 }}
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

"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ParticleField } from "@/components/ui/ParticleField";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

/* ── Typewriter Block ── */
const LINES = [
  "Data Analyst & Computer Science undergraduate",
  "specializing in Data Science —",
  "transforming complex, unstructured datasets into",
  "high-impact analytical pipelines",
  "and data-driven narratives, bridging the gap between technical depth and business impact",
];

const CHAR_SPEED = 28;   // ms per character
const LINE_PAUSE = 250;  // pause between lines

function TypewriterBlock() {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true });
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [started, setStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    setCurrentChar((prev) => {
      const lineText = LINES[currentLine];
      if (!lineText) return prev;
      if (prev < lineText.length) return prev + 1;
      return prev;
    });
  }, [currentLine]);

  // Start when scrolled into view
  useEffect(() => {
    if (inView && !started) setStarted(true);
  }, [inView, started]);

  // Character ticker
  useEffect(() => {
    if (!started) return;
    if (currentLine >= LINES.length) return;

    const lineText = LINES[currentLine];
    if (currentChar < lineText.length) {
      timerRef.current = setTimeout(tick, CHAR_SPEED);
    } else {
      // Line finished → move to next after pause
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
      ref={ref}
      className="font-mono"
      style={{
        fontSize: "0.9rem",
        maxWidth: "520px",
        lineHeight: 2,
        letterSpacing: "0.02em",
        minHeight: `${LINES.length * 2}em`,
      }}
    >
      {LINES.map((line, i) => {
        if (i > currentLine) return <div key={i} style={{ height: "2em" }} />;

        const visibleText =
          i < currentLine ? line : line.slice(0, currentChar);
        const isActive = i === currentLine && currentLine < LINES.length;

        return (
          <div key={i} style={{ height: "2em", color: "var(--muted)" }}>
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
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end px-10 lg:px-16 pb-20 overflow-hidden"
      style={{ paddingTop: "10rem" }}
    >
      {/* Animated particle background */}
      <ParticleField />

      {/* Editorial marginalia — top right */}
      <motion.div
        {...fadeUp(0.5)}
        className="absolute top-28 right-16 font-mono text-right"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "var(--muted)",
          lineHeight: 2.2,
        }}
      >
        Didera's Portfolio<br />
        Gampaha, Sri Lanka<br />
        2026
      </motion.div>

      {/* Thin horizontal rule */}
      <motion.div
        {...fadeUp(0.4)}
        style={{
          width: "60px",
          height: "1px",
          background: "var(--accent)",
          marginBottom: "2rem",
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
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              display: "block",
              fontSize: "clamp(2.2rem, 2.5vw, 2rem)",
              letterSpacing: "0.05em",
              color: "var(--muted)",
            }}
          >
           Hi! I'm
          </motion.span>
        </span>
        <span style={{ display: "block", overflow: "hidden" }}>
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              delay: 0.5,
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
            animate={{ y: "0%" }}
            transition={{
              duration: 1,
              delay: 0.7,
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

      {/* Descriptor — typewriter on scroll */}
      <motion.div
        {...fadeUp(0.85)}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between mt-12 gap-8"
      >
        <TypewriterBlock />

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

      {/* Scroll indicator — vertical rule */}
      <motion.div
        {...fadeUp(1.2)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
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
    </section>
  );
}

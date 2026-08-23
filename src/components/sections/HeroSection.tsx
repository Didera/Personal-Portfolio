"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { ParticleField } from "@/components/ui/ParticleField";

/* ── Bio lines — revealed via blur-in instead of typewriter ── */
const BIO_LINES = [
  "Data Analyst & Computer Science undergraduate",
  "specializing in Data Science — transforming complex,",
  "unstructured datasets into high-impact analytical pipelines",
  "and data-driven narratives,",
  "bridging the gap between technical depth and business impact.",
];

/** Staggered blur-in for each bio line */
function BioText() {
  return (
    <div
      className="font-mono"
      style={{
        fontSize: "clamp(1rem, 2.2vw, 1.18rem)",
        lineHeight: 2.1,
        letterSpacing: "0.02em",
        textAlign: "center",
        maxWidth: "640px",
        color: "var(--muted)",
      }}
    >
      {BIO_LINES.map((line, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 8 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 1.4,
            delay: i * 0.18,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: "block" }}
        >
          {line}
        </motion.span>
      ))}
    </div>
  );
}

export function HeroSection() {
  const [bioRef, bioInView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ minHeight: "200vh" }}
    >
      {/* Hero-specific particle field — full brightness, 130 nodes */}
      <ParticleField />

      {/* ──────────────────────────────────────────
          PART 1 — Name
          Centered in the first viewport.
      ────────────────────────────────────────── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16"
        style={{ minHeight: "100vh" }}
      >
        {/* Editorial marginalia */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
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

        {/* Name — blur-in reveal on each span */}
        <h1
          className="font-serif leading-[0.92] text-center"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            letterSpacing: "-0.03em",
            color: "var(--text)",
          }}
        >
          {/* "Hi! I'm" */}
          <motion.span
            initial={{ opacity: 0, filter: "blur(16px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "block",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              letterSpacing: "0.05em",
              color: "var(--muted)",
            }}
          >
            Hi! I&apos;m
          </motion.span>

          {/* "Devinda" */}
          <motion.span
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.3, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "block" }}
          >
            Devinda
          </motion.span>

          {/* "Welcome to My Portfolio" */}
          <motion.em
            className="font-serif"
            initial={{ opacity: 0, filter: "blur(18px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.3, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
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
        </h1>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
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

      {/* ──────────────────────────────────────────
          PART 2 — Bio text + CTAs
          Revealed as user scrolls down.
      ────────────────────────────────────────── */}
      <div
        ref={bioRef}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16"
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

        {/* Bio lines — staggered blur-in, triggered by scroll */}
        {bioInView && <BioText />}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={bioInView ? { opacity: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, delay: BIO_LINES.length * 0.18 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-8 items-center justify-center mt-12"
        >
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
        </motion.div>
      </div>
    </section>
  );
}

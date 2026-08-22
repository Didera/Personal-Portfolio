"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { techStack } from "@/lib/data";

const ACCENT = "#F97316"; // orange, matching certifications section

export function TechSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCat = techStack[activeIdx];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % techStack.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="tech"
      className="relative overflow-hidden py-28 lg:py-36"
      style={{ background: "var(--bg)" }}
    >
      {/* Subtle dot grid matching CertificationsSection */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, ${ACCENT}18 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* Section label */}
        <ScrollReveal>
          <div className="mb-16 flex items-center gap-4">
            <span
              className="font-mono"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              No. 02
            </span>

            <div
              style={{
                flex: 1,
                height: "1px",
                background: "var(--border)",
              }}
            />

            <span
              className="font-mono"
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--muted)",
              }}
            >
              Index
            </span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={0.05}>
          <h2
            className="mb-12 font-serif leading-[1.1]"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            Tools &{" "}
            <em
              className="font-serif"
              style={{
                fontStyle: "italic",
                color: ACCENT,
              }}
            >
              methodologies
            </em>
          </h2>
        </ScrollReveal>

        {/* Modern Tabs Navigation */}
        <ScrollReveal delay={0.08}>
          <div className="mb-16 flex flex-wrap gap-2 border-b pb-6" style={{ borderColor: "var(--border)" }}>
            {techStack.map((cat, i) => {
              const isActive = activeIdx === i;
              return (
                <button
                  key={cat.label}
                  onClick={() => setActiveIdx(i)}
                  className="group relative px-4 py-2.5 font-mono text-[0.66rem] tracking-wider uppercase transition-all duration-300 rounded"
                  style={{
                    color: isActive ? ACCENT : "var(--muted)",
                    background: isActive ? `${ACCENT}12` : "transparent",
                    border: isActive ? `1px solid ${ACCENT}40` : "1px solid transparent",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                      e.currentTarget.style.borderColor = "var(--border)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--muted)";
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.borderColor = "transparent";
                    }
                  }}
                >
                  <span className="mr-2 transition-colors duration-300" style={{ color: isActive ? ACCENT : "rgba(255, 255, 255, 0.2)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {cat.label}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-8">
          {/* LEFT — carousel content */}
          <div className="lg:w-[55%] lg:pr-6">
            {/* Animated category content */}
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: "1.5rem",
                minHeight: "280px",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span
                    className="mb-6 block font-mono"
                    style={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: ACCENT,
                    }}
                  >
                    {activeCat.label}
                  </span>

                  <div className="flex flex-col gap-0">
                    {activeCat.items.map(({ name }, i) => (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.05,
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="cursor-default py-[0.5rem]"
                        style={{
                          borderBottom:
                            "1px solid rgba(232, 228, 221, 0.04)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderBottomColor = `${ACCENT}25`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderBottomColor =
                            "rgba(232, 228, 221, 0.04)";
                        }}
                      >
                        <span
                          className="font-serif transition-colors duration-300"
                          style={{
                            fontSize: "1.2rem",
                            color: "var(--text)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = ACCENT;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "var(--text)";
                          }}
                        >
                          {name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Previous / Next buttons */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={() =>
                  setActiveIdx(
                    (prev) => (prev - 1 + techStack.length) % techStack.length
                  )
                }
                className="group relative overflow-hidden border font-mono transition-all duration-500"
                aria-label="Previous category"
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  background: "transparent",
                  borderColor: ACCENT,
                  padding: "0.75rem 1.6rem",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${ACCENT}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {/* Animated corner accent */}
                <span
                  className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t transition-all duration-300 group-hover:h-3.5 group-hover:w-3.5"
                  style={{ borderColor: ACCENT }}
                />
                <span
                  className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r transition-all duration-300 group-hover:h-3.5 group-hover:w-3.5"
                  style={{ borderColor: ACCENT }}
                />
                ← Prev
              </button>

              <button
                onClick={() =>
                  setActiveIdx((prev) => (prev + 1) % techStack.length)
                }
                className="group relative overflow-hidden border font-mono transition-all duration-500"
                aria-label="Next category"
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: ACCENT,
                  background: "transparent",
                  borderColor: ACCENT,
                  padding: "0.75rem 1.6rem",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${ACCENT}12`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {/* Animated corner accent */}
                <span
                  className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t transition-all duration-300 group-hover:h-3.5 group-hover:w-3.5"
                  style={{ borderColor: ACCENT }}
                />
                <span
                  className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r transition-all duration-300 group-hover:h-3.5 group-hover:w-3.5"
                  style={{ borderColor: ACCENT }}
                />
                Next →
              </button>
            </div>
          </div>

          {/* RIGHT — organized active category grid of standalone icons */}
          <div className="relative min-h-[420px] lg:w-[45%] flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat.label}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.04,
                    },
                  },
                  exit: {
                    opacity: 0,
                    transition: {
                      staggerChildren: 0.02,
                      staggerDirection: -1,
                    },
                  },
                }}
                className="w-full flex flex-wrap justify-center items-center gap-x-12 gap-y-10 max-w-md"
              >
                {activeCat.items
                  .filter((item) => Boolean(item.image))
                  .map((item) => (
                    <motion.div
                      key={item.name}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8, y: 15 },
                        visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 22 } },
                        exit: { opacity: 0, scale: 0.8, y: -15, transition: { duration: 0.2 } },
                      }}
                      className="flex flex-col items-center justify-center w-24 transition-all duration-300 group"
                    >
                      {/* Standalone Icon */}
                      <div className="h-16 w-16 mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 object-contain transition-all duration-300"
                          style={{
                            filter: item.name === "Next.js" || item.name === "GitHub" ? "invert(1)" : undefined,
                          }}
                        />
                      </div>
                      {/* Standalone Label */}
                      <span className="font-mono text-center text-[0.7rem] tracking-wider uppercase text-muted group-hover:text-text transition-colors duration-300">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

const socials = [
  { label: "GitHub",   value: "github.com/Didera" },
  { label: "LinkedIn", value: "linkedin.com/in/devinda-rajawardhane" },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="px-10 lg:px-16 py-28 lg:py-36"
      style={{ background: "var(--bg2)" }}
    >
      {/* Section label */}
      <ScrollReveal>
        <div className="flex items-center gap-4 mb-16">
          <span
            className="font-mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            No. 05
          </span>
          <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          <span
            className="font-mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Contact
          </span>
        </div>
      </ScrollReveal>

      {/* All content is visible but completely non-interactive */}
      <div
        style={{ pointerEvents: "none", userSelect: "none" }}
        aria-hidden="true"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left — editorial CTA */}
          <div className="lg:col-span-5">
            <h2
              className="font-serif leading-[1.08]"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                color: "var(--text)",
                letterSpacing: "-0.03em",
              }}
            >
              Let&apos;s build<br />
              something{" "}
              <em
                className="font-serif"
                style={{ fontStyle: "italic", color: "var(--accent)" }}
              >
                great
              </em>
            </h2>

            <p
              className="font-mono mt-6"
              style={{
                fontSize: "0.88rem",
                lineHeight: 2,
                color: "var(--muted)",
                maxWidth: "400px",
              }}
            >
              Whether you have a project in mind or just want to chat
              about data — my inbox is always open.
            </p>

            {/* Social handles — plain text, not clickable */}
            <div className="flex gap-6 mt-10">
              {socials.map(({ label, value }) => (
                <span
                  key={label}
                  className="font-mono"
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: "3px",
                  }}
                >
                  {label} ↗
                </span>
              ))}
            </div>
          </div>

          {/* Right — static form display (not a real form, no inputs) */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-0">

              {/* Name field — display only */}
              <div>
                <span
                  className="font-mono block"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.25rem",
                  }}
                >
                  Name
                </span>
                <div
                  className="w-full font-mono"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    color: "var(--muted)",
                    padding: "1rem 0",
                    fontSize: "0.9rem",
                    letterSpacing: "0.02em",
                    opacity: 0.38,
                  }}
                >
                  Your name
                </div>
              </div>

              {/* Message field — display only */}
              <div>
                <span
                  className="font-mono block"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: "0.25rem",
                    marginTop: "1rem",
                  }}
                >
                  Message
                </span>
                <div
                  className="w-full font-mono"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    color: "var(--muted)",
                    padding: "1rem 0",
                    fontSize: "0.9rem",
                    letterSpacing: "0.02em",
                    lineHeight: 1.9,
                    minHeight: "7rem",
                    opacity: 0.38,
                  }}
                >
                  Tell me about your project...
                </div>
              </div>

              {/* Send button — static, not a button element */}
              <div
                className="relative mt-8 overflow-hidden border font-mono self-start"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  background: "transparent",
                  padding: "0.85rem 2rem",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  opacity: 0.45,
                }}
              >
                <span
                  className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t"
                  style={{ borderColor: "var(--accent)" }}
                />
                <span
                  className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r"
                  style={{ borderColor: "var(--accent)" }}
                />
                Send Message →
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

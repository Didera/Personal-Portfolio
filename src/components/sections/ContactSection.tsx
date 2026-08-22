"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const socials = [
  { label: "GitHub", href: "https://github.com/Didera" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/devinda-rajawardhane-aa6996188" },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left — editorial CTA */}
        <ScrollReveal className="lg:col-span-5" delay={0.1}>
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

          {/* Social links — text only */}
          <div className="flex gap-6 mt-10">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono no-underline transition-colors duration-300"
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: "3px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--accent)";
                  el.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--muted)";
                  el.style.borderColor = "var(--border)";
                }}
              >
                {label} ↗
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Right — form */}
        <ScrollReveal className="lg:col-span-6 lg:col-start-7" delay={0.2}>
          {sent ? (
            <div
              className="py-12 text-center"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <p
                className="font-serif"
                style={{ fontSize: "1.6rem", color: "var(--text)" }}
              >
                Message sent.
              </p>
              <p
                className="font-mono mt-3"
                style={{
                  fontSize: "0.85rem",
                  color: "var(--muted)",
                }}
              >
                I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-0">
              <div>
                <label
                  htmlFor="contact-name"
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
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full font-mono outline-none transition-colors duration-300"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text)",
                    padding: "1rem 0",
                    fontSize: "0.9rem",
                    letterSpacing: "0.02em",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
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
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me about your project..."
                  required
                  rows={4}
                  className="w-full font-mono outline-none resize-y transition-colors duration-300"
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid var(--border)",
                    color: "var(--text)",
                    padding: "1rem 0",
                    fontSize: "0.9rem",
                    letterSpacing: "0.02em",
                    lineHeight: 1.9,
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--accent)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border)")
                  }
                />
              </div>
              <button
                type="submit"
                className="group relative mt-8 overflow-hidden border font-mono transition-all duration-500 self-start"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  background: "transparent",
                  padding: "0.85rem 2rem",
                  fontSize: "0.72rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(196, 85, 61, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                {/* Animated corner accent */}
                <span
                  className="pointer-events-none absolute left-0 top-0 h-2 w-2 border-l border-t transition-all duration-300 group-hover:h-4 group-hover:w-4"
                  style={{ borderColor: "var(--accent)" }}
                />
                <span
                  className="pointer-events-none absolute bottom-0 right-0 h-2 w-2 border-b border-r transition-all duration-300 group-hover:h-4 group-hover:w-4"
                  style={{ borderColor: "var(--accent)" }}
                />
                Send Message →
              </button>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

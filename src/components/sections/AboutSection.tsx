import { ScrollReveal } from "@/components/ui/ScrollReveal";

const links = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/devinda-rajawardhane-aa6996188",
  },
];

const stats = [
  { num: "3+", label: "Years Experience" },
  { num: "10+", label: "BA & DS Projects" },
  { num: "5+", label: "Dashboards Built" },
  { num: "∞", label: "Coffees Consumed" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden px-10 py-28 lg:px-16 lg:py-36"
      style={{ background: "var(--bg2)" }}
    >
      {/* Full-width background video */}
      <video
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        src="/videos/about-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 -z-20 bg-black/65" />

      {/* Editorial gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(13,13,12,0.92) 0%, rgba(13,13,12,0.78) 45%, rgba(13,13,12,0.55) 100%)",
        }}
      />

      {/* Subtle texture layer */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[length:6px_6px] opacity-35" />

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
            No. 01
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
            About
          </span>
        </div>
      </ScrollReveal>

      {/* Editorial spread */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Pull-quote */}
        <ScrollReveal className="lg:col-span-5" delay={0.1}>
          <h2
            className="font-serif leading-[1.1]"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            I bridge the gap between{" "}
            <em
              className="font-serif"
              style={{ fontStyle: "italic", color: "var(--accent)" }}
            >
              business requirements
            </em>{" "}
            and data — translating complexity into decisions that matter.
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8 mt-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono no-underline transition-colors duration-300"
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--muted)";
                }}
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </ScrollReveal>

        {/* Body text */}
        <ScrollReveal className="lg:col-span-6 lg:col-start-7" delay={0.2}>
          <div
            className="space-y-5 font-mono"
            style={{
              fontSize: "0.88rem",
              color: "var(--muted)",
              lineHeight: 2.1,
              letterSpacing: "0.01em",
            }}
          >
            <p>
              I&apos;m a{" "}
              <span style={{ color: "var(--text)" }}>
                Business Analyst &amp; Computer Science undergraduate
              </span>{" "}
              specializing in Data Science, based in Colombo, Sri Lanka. My
              core focus is eliciting and structuring business requirements,
              mapping processes, and defining scope — using data as the
              analytical backbone that validates every decision.
            </p>

            <p>
              Trained in{" "}
              <span style={{ color: "var(--text)" }}>
                requirements engineering, BPMN 2.0 process modelling, gap
                analysis, and stakeholder management
              </span>{" "}
              within Agile/Scrum environments through the Project Management
              &amp; Business Analysis Bootcamp by STEM Link. I author user
              stories, acceptance criteria, ERDs, wireframes, and WBS
              artefacts that translate business intent into implementable scope.
            </p>

            <p>
              I support that analysis with hands-on{" "}
              <span style={{ color: "var(--text)" }}>
                Python, SQL, Power BI, and Tableau
              </span>{" "}
              — running EDA, building dashboards, and extracting operational
              metrics that give stakeholders a data-grounded view of process
              performance and business health.
            </p>

            <p>
              Ultimately, I act as a{" "}
              <span style={{ color: "var(--text)" }}>
                technical-to-business translator
              </span>
              {" "}— focused on the &quot;Why&quot; behind the numbers,
              uncovering root causes, justifying process improvements, and
              ensuring every deliverable connects back to measurable business
              value.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
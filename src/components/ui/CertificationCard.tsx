import type { Certification } from "@/lib/certifications";

interface Props {
  cert: Certification;
  index: number;
  accentColor?: string;
}

export function CertificationCard({ cert, index, accentColor = "var(--accent)" }: Props) {
  return (
    <article className="border-t py-6" style={{ borderColor: "var(--border)" }}>
      <div className="mb-4 flex items-center justify-between gap-4">
        <span
          className="font-mono"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: accentColor,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className="font-mono"
          style={{
            fontSize: "0.62rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          {cert.date}
        </span>
      </div>

      <h3
        className="font-serif leading-[1.1]"
        style={{
          fontSize: "clamp(1.2rem, 2vw, 1.7rem)",
          color: "var(--text)",
          letterSpacing: "-0.02em",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accentColor)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
      >
        {cert.title}
      </h3>

      <p
        className="font-mono mt-2"
        style={{ fontSize: "0.75rem", color: "var(--muted)", letterSpacing: "0.04em" }}
      >
        {cert.issuer}
      </p>

      {cert.distinction && (
        <span
          className="font-mono mt-3 inline-block px-2 py-0.5"
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: accentColor,
            border: `1px solid ${accentColor}40`,
            background: `${accentColor}12`,
          }}
        >
          {cert.distinction}
        </span>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1">
        {cert.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono"
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: accentColor,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {cert.credentialId && (
        <div className="mt-4">
          {cert.credentialUrl ? (
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono no-underline transition-colors duration-300"
              style={{ fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accentColor)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
            >
              Verify Certificate ↗
            </a>
          ) : (
            <span
              className="font-mono"
              style={{ fontSize: "0.6rem", letterSpacing: "0.08em", color: "var(--muted)" }}
            >
              ID: {cert.credentialId}
            </span>
          )}
        </div>
      )}
    </article>
  );
}

export function Footer() {
  const links = [
    {
      label: "GitHub",
      href: "https://github.com/Didera",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/devinda-rajawardhane-aa6996188",
    },
  ];

  return (
    <footer
      className="flex flex-col items-start justify-between gap-6 px-10 py-8 lg:flex-row lg:items-center lg:px-16"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <span
        className="font-mono"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        © 2026 Devinda Rajawardhane
      </span>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
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

      <span
        className="font-mono"
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--muted)",
        }}
      >
        Gampaha, Sri Lanka
      </span>
    </footer>
  );
}
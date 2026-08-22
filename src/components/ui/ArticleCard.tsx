import Link from "next/link";

type Article = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  href?: string;
};

type ArticleCardProps = {
  article: Article;
  index: number;
  accentColor?: string;
};

export function ArticleCard({ article, index, accentColor = "var(--accent)" }: ArticleCardProps) {
  const cardContent = (
    <article
      className="group border-t py-6 transition-colors duration-300"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="mb-5 flex items-center justify-between gap-6">
        <span
          className="font-mono"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: accentColor,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <span
          className="font-mono text-right"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          {article.date}
        </span>
      </div>

      <h3
        className="font-serif leading-[1.05]"
        style={{
          fontSize: "clamp(1.55rem, 2.4vw, 2.15rem)",
          color: "var(--text)",
          letterSpacing: "-0.025em",
          transition: "color 0.3s",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accentColor)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--text)")}
      >
        {article.title}
      </h3>

      <p
        className="mt-4 font-mono"
        style={{
          fontSize: "0.78rem",
          lineHeight: 1.9,
          color: "var(--muted)",
        }}
      >
        {article.excerpt}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span
          className="font-mono"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--muted)",
          }}
        >
          {article.category}
        </span>

        <span
          style={{
            width: "4px",
            height: "4px",
            borderRadius: "999px",
            background: "var(--border)",
          }}
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
          {article.readTime}
        </span>
      </div>
    </article>
  );

  if (article.href) {
    return (
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className="block no-underline">
      {cardContent}
    </Link>
  );
}
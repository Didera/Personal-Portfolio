export interface Project {
  slug: string;
  name: string;
  emoji: string;
  bgGradient: string;
  tags: string[];
  shortDesc: string;
  longDesc: string;
  overview: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  demoUrl: string;
  year: string;
  role: string;
  category: "data-science" | "business-analysis";
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  bullets: string[];
}

export interface TechCategory {
  label: string;
  items: { name: string; icon: string; image?: string }[];
}

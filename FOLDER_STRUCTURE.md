# 📁 Portfolio — Folder Structure

```
portfolio/
│
├── .vscode/
│   └── settings.json
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout (metadata, fonts, providers)
│   │   ├── page.tsx                # Home page
│   │   └── projects/
│   │       └── [slug]/
│   │           └── page.tsx        # Dynamic project detail page
│   │
│   ├── components/
│   │   ├── layout/                 # Layout-level components
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   ├── sections/              # Page section components
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Loader.tsx
│   │   │   ├── ProjectDetail.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   └── TechSection.tsx
│   │   │
│   │   └── ui/                    # Reusable UI primitives
│   │       ├── CustomCursor.tsx
│   │       ├── ParticleField.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── ScrollReveal.tsx
│   │       └── SmoothScroll.tsx
│   │
│   ├── lib/                       # Utilities & data
│   │   ├── data.ts                # Site content / static data
│   │   ├── projects.ts            # Project definitions
│   │   └── utils.ts               # Helper functions
│   │
│   ├── styles/
│   │   └── globals.css            # Global styles & CSS variables
│   │
│   └── types/
│       └── index.ts               # Shared TypeScript types
│
├── .env.local.example             # Environment variable template
├── .gitignore
├── next-env.d.ts
├── next.config.ts                 # Next.js configuration
├── package.json
├── package-lock.json
├── postcss.config.mjs             # PostCSS configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── README.md
```

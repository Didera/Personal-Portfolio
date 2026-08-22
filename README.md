# Portfolio — Next.js + Framer Motion

A dark, minimal developer portfolio built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Smooth scroll | Lenis |
| Fonts | next/font (Google Fonts) |
| Deployment | Vercel |

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              ← Root layout, fonts, metadata
│   ├── page.tsx                ← Home page (assembles all sections)
│   └── projects/
│       └── [slug]/
│           └── page.tsx        ← Dynamic project detail pages
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Loader.tsx          ← Loading screen with letter animation
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── TechSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ProjectDetail.tsx   ← Full project detail view
│   └── ui/
│       ├── CustomCursor.tsx    ← Dot + lagging ring cursor
│       ├── SmoothScroll.tsx    ← Lenis smooth scroll wrapper
│       ├── ScrollReveal.tsx    ← Framer Motion whileInView wrapper
│       └── ProjectCard.tsx     ← Project card with hover animation
│
├── lib/
│   ├── projects.ts             ← All project data (edit this!)
│   ├── data.ts                 ← Experience + tech stack data (edit this!)
│   └── utils.ts                ← cn() helper
│
├── types/
│   └── index.ts                ← TypeScript interfaces
│
└── styles/
    └── globals.css             ← CSS variables, base styles, noise overlay
```

---

## Customization

### Personal info
Edit `src/app/layout.tsx` — update `metadata` (name, description, OG tags).

### Projects
Edit `src/lib/projects.ts`. Each project has:
- `slug` — URL path (`/projects/your-slug`)
- `name`, `emoji`, `bgGradient` — card appearance
- `tags` — tech badge labels
- `shortDesc` — card description
- `overview` — detail page paragraphs (separate with `\n\n`)
- `features` — bullet list on detail page
- `tech` — sidebar tech pills
- `githubUrl`, `demoUrl` — external links
- `year`, `role` — sidebar metadata

To add a project image instead of an emoji, swap the emoji `<div>` in `ProjectCard.tsx` and `ProjectDetail.tsx` with `<Image>` from `next/image`. Put images in `/public/images/projects/`.

### Experience
Edit `src/lib/data.ts` → `experiences` array.

### Tech Stack
Edit `src/lib/data.ts` → `techStack` array.

### Colors
Edit the CSS variables in `src/styles/globals.css`:
```css
:root {
  --bg: #0a0a0f;
  --accent: #7c6dfa;   /* ← change this for a different color theme */
  --accent2: #fa6d8c;
  /* ... */
}
```

### Contact form
Three easy options (see `.env.local.example`):
1. **Resend** — add API route at `src/app/api/contact/route.ts`
2. **EmailJS** — client-side, no backend needed
3. **Formspree** — simplest: replace the `handleSubmit` in `ContactSection.tsx` with a `fetch` POST to your Formspree endpoint

---

## Deploying to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repo at vercel.com for auto-deploy on push
```

That's it. Vercel auto-detects Next.js and configures everything.

---

## Adding a Custom Domain

In Vercel dashboard → Project → Settings → Domains → Add `yourname.dev`.

Then in your domain registrar, point the nameservers or add the DNS records Vercel provides.

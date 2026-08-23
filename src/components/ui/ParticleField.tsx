"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

interface ParticleFieldProps {
  /** When true: fewer particles, lower opacity, CSS blur — for non-hero sections */
  dim?: boolean;
  /** Override particle count */
  count?: number;
}

const ACCENT = { r: 196, g: 85, b: 61 };
const MUTED  = { r: 125, g: 120, b: 114 };

export function ParticleField({ dim = false, count }: ParticleFieldProps) {
  const PARTICLE_COUNT  = count ?? (dim ? 55 : 130);
  const CONNECTION_DIST = dim ? 100 : 150;
  const LINE_ALPHA_MAX  = dim ? 0.12 : 0.38;
  const DOT_OPACITY_MOD = dim ? 0.18 : 0.55;
  const SPEED           = dim ? 0.18 : 0.32;

  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const particles  = useRef<Particle[]>([]);
  const animRef    = useRef<number>(0);
  const mouse      = useRef({ x: -500, y: -500 });

  // Keep mutable refs to avoid stale closure in the draw loop
  const configRef = useRef({ PARTICLE_COUNT, CONNECTION_DIST, LINE_ALPHA_MAX, DOT_OPACITY_MOD, SPEED });
  configRef.current = { PARTICLE_COUNT, CONNECTION_DIST, LINE_ALPHA_MAX, DOT_OPACITY_MOD, SPEED };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      const { PARTICLE_COUNT: pc, SPEED: sp } = configRef.current;
      particles.current = Array.from({ length: pc }, () => ({
        x:       Math.random() * canvas.offsetWidth,
        y:       Math.random() * canvas.offsetHeight,
        vx:      (Math.random() - 0.5) * sp,
        vy:      (Math.random() - 0.5) * sp,
        radius:  Math.random() * 2.2 + 0.9,
        opacity: Math.random() * 0.4 + 0.5,
      }));
    };

    const draw = () => {
      const { CONNECTION_DIST: cd, LINE_ALPHA_MAX: lam, DOT_OPACITY_MOD: dom, SPEED: sp } = configRef.current;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const pts = particles.current;

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0)  { p.x = 0; p.vx *= -1; }
        if (p.x > w)  { p.x = w; p.vx *= -1; }
        if (p.y < 0)  { p.y = 0; p.vy *= -1; }
        if (p.y > h)  { p.y = h; p.vy *= -1; }

        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        if (Math.sqrt(dx * dx + dy * dy) < 120) {
          p.vx += dx * 0.0002;
          p.vy += dy * 0.0002;
        }

        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > sp * 1.6) {
          p.vx = (p.vx / speed) * sp * 1.6;
          p.vy = (p.vy / speed) * sp * 1.6;
        }
      }

      // Connection lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < cd) {
            const alpha = (1 - dist / cd) * lam;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${MUTED.r},${MUTED.g},${MUTED.b},${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of pts) {
        // Outer glow ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius + 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${MUTED.r},${MUTED.g},${MUTED.b},${Math.min(p.opacity * dom, 1)})`;
        ctx.fill();
        // Accent center
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.45, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT.r},${ACCENT.g},${ACCENT.b},${Math.min(p.opacity * dom * 0.7, 1)})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove  = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => { mouse.current = { x: -500, y: -500 }; };
    const onResize     = () => { resize(); initParticles(); };

    resize();
    initParticles();
    draw();

    window.addEventListener("resize",     onResize);
    window.addEventListener("mousemove",  onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize",     onResize);
      window.removeEventListener("mousemove",  onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        /* dim variant: blurred and very low opacity */
        opacity: dim ? 0.28 : 0.92,
        filter:  dim ? "blur(1.5px)" : "none",
      }}
    />
  );
}

/** Fixed full-page background variant — rendered once in layout, visible in all sections */
export function GlobalParticleField() {
  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <ParticleField dim count={55} />
    </div>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#tech", label: "Index" },
  { href: "/#projects", label: "Work" },
  { href: "/#experience", label: "CV" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const isProject = pathname.startsWith("/projects/");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-10 lg:px-16 py-5"
        style={{
          background: "rgba(15, 14, 12, 0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="font-serif no-underline"
          style={{
            color: "var(--text)",
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          DiDeRa
          <span
            className="font-serif italic"
            style={{ color: "var(--accent)" }}
          >
            . . . .
          </span>
        </Link>

        {/* Desktop links — centered */}
        <ul className="absolute left-1/2 -translate-x-1/2 hidden lg:flex gap-8 lg:gap-10 list-none items-center">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={isProject ? href : `#${href.split("#")[1] || ""}`}
                className="nav-link relative font-mono no-underline"
                style={{
                  fontSize: "0.9rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] relative z-[110]"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            width: "28px",
            height: "28px",
            padding: 0,
          }}
        >
          <motion.span
            animate={
              mobileOpen
                ? { rotate: 45, y: 6, background: "var(--accent)" }
                : { rotate: 0, y: 0, background: "var(--muted)" }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              transformOrigin: "center",
            }}
          />
          <motion.span
            animate={
              mobileOpen
                ? { opacity: 0, scaleX: 0 }
                : { opacity: 1, scaleX: 1 }
            }
            transition={{ duration: 0.2 }}
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              background: "var(--muted)",
            }}
          />
          <motion.span
            animate={
              mobileOpen
                ? { rotate: -45, y: -6, background: "var(--accent)" }
                : { rotate: 0, y: 0, background: "var(--muted)" }
            }
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "block",
              width: "20px",
              height: "1px",
              transformOrigin: "center",
            }}
          />
        </button>
      </motion.nav>

      {/* Mobile overlay + drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[98]"
              style={{ background: "rgba(15, 14, 12, 0.6)" }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed top-0 right-0 bottom-0 z-[99] flex flex-col justify-center px-10"
              style={{
                width: "min(320px, 85vw)",
                background: "var(--bg2)",
                borderLeft: "1px solid var(--border)",
              }}
            >
              <nav>
                <ul className="list-none flex flex-col gap-1">
                  {links.map(({ href, label }, i) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.15 + i * 0.06,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={
                          isProject ? href : `#${href.split("#")[1] || ""}`
                        }
                        onClick={() => setMobileOpen(false)}
                        className="font-mono no-underline block py-3 transition-colors duration-300"
                        style={{
                          fontSize: "0.85rem",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          borderBottom: "1px solid var(--border)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "var(--accent)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "var(--muted)";
                        }}
                      >
                        <span
                          className="font-mono"
                          style={{
                            fontSize: "0.65rem",
                            color: "var(--border)",
                            marginRight: "1rem",
                          }}
                        >
                          0{i + 1}
                        </span>
                        {label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

const FIRST = ["D", "e", "v", "i", "n", "d", "a"];
const SECOND = ["R", "a", "j", "a", "w", "a", "r", "d", "h", "a", "n", "e"];

export function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((c) => {
        const next = Math.min(c + Math.floor(Math.random() * 6 + 2), 100);
        if (next >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 900);
          }, 400);
        }
        return next;
      });
    }, 50);
    return () => clearInterval(intervalRef.current);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
          style={{ background: "var(--bg)" }}
        >
          {/* First word */}
          <div
            className="overflow-hidden flex font-serif leading-none"
            style={{
              fontSize: "clamp(3rem, 9vw, 6rem)",
              letterSpacing: "-0.02em",
            }}
          >
            {FIRST.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.15 + i * 0.06,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ color: "var(--text)", display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Second word */}
          <div
            className="overflow-hidden flex font-serif leading-none"
            style={{
              fontSize: "clamp(3rem, 9vw, 6rem)",
              letterSpacing: "-0.02em",
              marginTop: "0.05em",
              fontStyle: "italic",
            }}
          >
            {SECOND.map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.5 + i * 0.05,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ color: "var(--accent)", display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Hairline progress */}
          <div
            className="mt-16 overflow-hidden"
            style={{ width: "120px", height: "1px", background: "var(--border)" }}
          >
            <motion.div
              className="h-full"
              style={{ background: "var(--accent)" }}
              initial={{ width: 0 }}
              animate={{ width: `${count}%` }}
              transition={{ ease: "easeOut", duration: 0.15 }}
            />
          </div>

          {/* Counter */}
          <p
            className="mt-6 font-mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "var(--muted)",
            }}
          >
            {String(count).padStart(3, "0")}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

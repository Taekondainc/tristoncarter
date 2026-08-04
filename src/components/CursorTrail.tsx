import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import "./CursorTrail.css";

type TrailDot = {
  id: number;
  x: number;
  y: number;
  tone: "yellow" | "blue";
};

const MAX = 12;

/** Soft trailing squares that follow the pointer on desktop. */
export function CursorTrail() {
  const reduce = useReducedMotion();
  const [dots, setDots] = useState<TrailDot[]>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    let id = 0;
    let last = 0;

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last < 42) return;
      last = now;
      id += 1;
      const next: TrailDot = {
        id,
        x: e.clientX,
        y: e.clientY,
        tone: id % 3 === 0 ? "yellow" : "blue",
      };
      setDots((prev) => [...prev.slice(-(MAX - 1)), next]);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce]);

  if (!enabled) return null;

  return (
    <div className="trail" aria-hidden="true">
      <AnimatePresence>
        {dots.map((dot, i) => (
          <motion.span
            key={dot.id}
            className={`trail__dot trail__dot--${dot.tone}`}
            style={{ left: dot.x, top: dot.y }}
            initial={{ opacity: 0.7, scale: 0.55 }}
            animate={{ opacity: 0, scale: 1.15, y: -8 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <span
              className="trail__sq"
              style={{
                transform: `rotate(${(i % 4) * 12 - 18}deg)`,
              }}
            />
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}

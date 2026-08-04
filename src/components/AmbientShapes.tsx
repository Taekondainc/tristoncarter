import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { RefObject } from "react";
import { useSmoothScrollProgress } from "../hooks/useSmoothScrollProgress";
import "./AmbientShapes.css";

type ShapeKind = "square" | "circle" | "dash" | "ring";

type ShapeSpec = {
  kind: ShapeKind;
  className: string;
  /** Structured corner / edge placement */
  spot: "tl" | "tr" | "bl" | "br" | "mt" | "mb";
  size: number;
  delay: number;
  duration: number;
  rotate?: number;
  depth: number;
};

const spotPos: Record<ShapeSpec["spot"], { x: string; y: string }> = {
  tl: { x: "4%", y: "10%" },
  tr: { x: "88%", y: "12%" },
  bl: { x: "6%", y: "78%" },
  br: { x: "86%", y: "76%" },
  mt: { x: "46%", y: "6%" },
  mb: { x: "48%", y: "88%" },
};

/** Fewer, corner-aligned accents — orange / sandy / blue / one yellow */
const presets: Record<"hero" | "soft" | "dark" | "bright", ShapeSpec[]> = {
  hero: [
    { kind: "square", className: "amb__shape--tomato", spot: "tl", size: 14, delay: 0, duration: 3.2, rotate: 10, depth: 90 },
    { kind: "circle", className: "amb__shape--blue", spot: "br", size: 12, delay: 0.35, duration: 3.6, depth: -70 },
  ],
  soft: [
    { kind: "square", className: "amb__shape--blue", spot: "tl", size: 13, delay: 0.1, duration: 3.3, rotate: 8, depth: 85 },
    { kind: "ring", className: "amb__shape--tomato-line", spot: "tr", size: 36, delay: 0.3, duration: 5.2, depth: -100 },
    { kind: "square", className: "amb__shape--sandy", spot: "bl", size: 12, delay: 0.5, duration: 2.9, rotate: -10, depth: 70 },
    { kind: "dash", className: "amb__shape--blue-soft", spot: "br", size: 28, delay: 0.35, duration: 3.6, depth: -55 },
  ],
  dark: [
    { kind: "square", className: "amb__shape--sandy", spot: "tl", size: 15, delay: 0, duration: 3.1, rotate: 14, depth: 110 },
    { kind: "circle", className: "amb__shape--blue-bright", spot: "tr", size: 12, delay: 0.3, duration: 3.5, depth: -95 },
    { kind: "dash", className: "amb__shape--tomato", spot: "mb", size: 34, delay: 0.5, duration: 3.8, depth: 65 },
    { kind: "square", className: "amb__shape--yellow", spot: "bl", size: 10, delay: 0.7, duration: 2.7, rotate: -8, depth: -80 },
  ],
  bright: [
    { kind: "square", className: "amb__shape--ink", spot: "tl", size: 13, delay: 0.15, duration: 3, rotate: 8, depth: 90 },
    { kind: "circle", className: "amb__shape--blue", spot: "tr", size: 12, delay: 0.35, duration: 3.5, depth: -85 },
    { kind: "dash", className: "amb__shape--tomato", spot: "bl", size: 30, delay: 0.25, duration: 3.7, depth: 70 },
    { kind: "square", className: "amb__shape--sandy", spot: "br", size: 11, delay: 0.55, duration: 2.8, rotate: -14, depth: -60 },
  ],
};

function ParallaxShape({
  shape,
  scrollYProgress,
  reduce,
}: {
  shape: ShapeSpec;
  scrollYProgress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const layerY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [shape.depth, -shape.depth],
  );
  const pos = spotPos[shape.spot];

  const bounce = reduce
    ? {}
    : shape.kind === "square"
      ? {
          y: [0, -12, 0, 8, 0],
          rotate: [
            shape.rotate ?? 0,
            (shape.rotate ?? 0) + 10,
            shape.rotate ?? 0,
            (shape.rotate ?? 0) - 6,
            shape.rotate ?? 0,
          ],
        }
      : shape.kind === "circle"
        ? { y: [0, -14, 0], scale: [1, 1.1, 1] }
        : shape.kind === "ring"
          ? { rotate: [0, 180, 360] }
          : { x: [0, 12, 0, -8, 0], opacity: [0.4, 0.8, 0.5, 0.75, 0.4] };

  return (
    <motion.span className="amb__layer" style={{ y: layerY }}>
      <motion.span
        className={`amb__shape amb__shape--${shape.kind} ${shape.className}`}
        style={{
          left: pos.x,
          top: pos.y,
          width: shape.size,
          height: shape.kind === "dash" ? 3 : shape.size,
        }}
        animate={bounce}
        transition={
          reduce
            ? { duration: 0 }
            : {
                duration: shape.duration,
                delay: shape.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />
    </motion.span>
  );
}

type AmbientShapesProps = {
  preset?: keyof typeof presets;
  className?: string;
  target: RefObject<HTMLElement | null>;
};

export function AmbientShapes({
  preset = "soft",
  className = "",
  target,
}: AmbientShapesProps) {
  const reduce = useReducedMotion();
  const shapes = presets[preset];
  const scrollYProgress = useSmoothScrollProgress({
    target,
    offset: ["start end", "end start"],
  });

  return (
    <div className={`amb ${className}`.trim()} aria-hidden="true">
      {shapes.map((shape, i) => (
        <ParallaxShape
          key={`${preset}-${shape.spot}-${i}`}
          shape={shape}
          scrollYProgress={scrollYProgress}
          reduce={reduce}
        />
      ))}
    </div>
  );
}

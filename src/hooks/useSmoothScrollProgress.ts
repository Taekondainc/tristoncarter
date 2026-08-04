import { useScroll, useSpring, type UseScrollOptions } from "framer-motion";

const spring = {
  stiffness: 38,
  damping: 26,
  mass: 0.55,
  restDelta: 0.0005,
} as const;

/** Scroll progress with spring smoothing — keeps parallax fluid, no WebGL needed. */
export function useSmoothScrollProgress(
  options?: UseScrollOptions,
) {
  const { scrollYProgress } = useScroll(options);
  return useSpring(scrollYProgress, spring);
}

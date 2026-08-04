import { useScroll, useSpring, type UseScrollOptions } from "framer-motion";

const spring = {
  stiffness: 28,
  damping: 32,
  mass: 0.7,
  restDelta: 0.0001,
} as const;

/** Scroll progress with spring smoothing — keeps parallax fluid, no WebGL needed. */
export function useSmoothScrollProgress(
  options?: UseScrollOptions,
) {
  const { scrollYProgress } = useScroll(options);
  return useSpring(scrollYProgress, spring);
}

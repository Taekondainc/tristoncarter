import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Hero.css";

const ease = [0.16, 1, 0.3, 1] as const;
const title = ["Systems", "& Craft"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const opacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const panelRotate = useTransform(scrollYProgress, [0, 1], [0, -12]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const panelScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const hintY = useTransform(scrollYProgress, [0, 0.25], [0, 24]);

  return (
    <section className="hero" id="top" aria-label="Introduction" ref={ref}>
      <motion.div className="container hero__grid" style={{ y, opacity }}>
        <div className="hero__copy">
          <motion.p
            className="hero__brand"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
          >
            Triston Carter
          </motion.p>

          <h1 className="hero__title">
            {title.map((line, i) => (
              <span key={line} className="hero__clip">
                <motion.span
                  className="hero__line"
                  initial={{ y: "115%", rotate: 6 }}
                  animate={{ y: "0%", rotate: 0 }}
                  transition={{ duration: 1.05, delay: 0.1 + i * 0.14, ease }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="hero__lead"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease }}
          >
            Nine years in the field — shipping real systems from Georgetown,
            Guyana.
          </motion.p>

          <motion.div
            className="hero__cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease }}
          >
            <a className="hero__btn" href="#now">
              See 592APTS
            </a>
            <motion.a
              className="hero__orb"
              href="#about"
              aria-label="About Triston"
              whileHover={{ scale: 1.12, rotate: -14 }}
              whileTap={{ scale: 0.94 }}
            >
              ↘
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="hero__visual"
          style={{ y: panelY, rotate: panelRotate, scale: panelScale }}
          initial={{ opacity: 0, x: 80, rotate: 8 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.15, delay: 0.18, ease }}
        >
          <div className="hero__panel">
            <img
              className="hero__mark"
              src="/brand/tc-logo.png"
              alt=""
              aria-hidden="true"
            />
            <p className="hero__panel-text">
              Code
              <br />
              Design
              <br />
              Circuits
              <br />
              Classrooms
              <br />
              Branding
              <br />
              SVG
              <br />
              The Future
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll-wrap"
        style={{ opacity: hintOpacity, y: hintY }}
      >
        <motion.a
          className="hero__scroll"
          href="#about"
          aria-label="Scroll to next section"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease }}
        >
          <span className="hero__scroll-label">Scroll</span>
          <span className="hero__scroll-track" aria-hidden="true">
            <motion.span
              className="hero__scroll-dot"
              animate={{ y: [0, 18, 0], opacity: [1, 0.35, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </span>
          <motion.span
            className="hero__scroll-chevron"
            aria-hidden="true"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.15,
            }}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}

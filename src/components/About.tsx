import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { links } from "../data/content";
import { useSmoothScrollProgress } from "../hooks/useSmoothScrollProgress";
import { AmbientShapes } from "./AmbientShapes";
import "./About.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function About() {
  const ref = useRef<HTMLElement>(null);
  const scrollYProgress = useSmoothScrollProgress({
    target: ref,
    offset: ["start end", "end start"],
  });
  const burstRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const frameY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const copyY = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section className="about" id="about" ref={ref}>
      <AmbientShapes preset="soft" target={ref} />
      <div className="container about__layout">
        <motion.div
          className="about__frame"
          style={{ y: frameY }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease }}
        >
          <span className="about__corner about__corner--tl" />
          <span className="about__corner about__corner--tr" />
          <span className="about__corner about__corner--bl" />
          <span className="about__corner about__corner--br" />
          <motion.div
            className="about__burst"
            style={{ rotate: burstRotate }}
            aria-hidden="true"
          />
          <img src="/photos/portrait.png" alt="Triston Carter" />
        </motion.div>

        <motion.div
          className="about__copy"
          style={{ y: copyY }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
        >
          <p className="about__eyebrow">Who I am</p>
          <h2>Developer at GL&amp;SC. Tutor at UG. Founder of Taekonda TCA.</h2>
          <p>
            Building national land systems at the{" "}
            <strong>Guyana Lands &amp; Surveys Commission</strong>, teaching labs
            at the <strong>University of Guyana</strong>, and certified through{" "}
            <strong>Georgetown Technical Institute · City &amp; Guilds</strong>.
          </p>
          <p>
            <strong>Taekonda TCA</strong> is my startup for web, brand, and
            digital products. Completing an MSc in GIS &amp; Remote Sensing —
            after Full Stack at Toronto Metropolitan University and a BSc IT,
            Cum Laude.
          </p>
          <div className="about__actions">
            <a
              className="about__link"
              href={links.agency}
              target="_blank"
              rel="noreferrer"
            >
              Visit Taekonda TCA ↗
            </a>
            <motion.a
              className="about__orb"
              href="#projects"
              aria-label="See work"
              whileHover={{ scale: 1.12, rotate: -12 }}
              whileTap={{ scale: 0.94 }}
            >
              ↓
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Team.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function Team() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleX = useTransform(scrollYProgress, [0, 1], ["-16%", "16%"]);
  const shotY = useTransform(scrollYProgress, [0, 1], [130, -130]);
  const copyY = useTransform(scrollYProgress, [0, 1], [80, -60]);

  return (
    <section className="team" id="team" ref={ref}>
      <motion.p className="team__mega" style={{ x: titleX }} aria-hidden="true">
        The Crew
      </motion.p>

      <div className="container team__layout">
        <motion.div
          className="team__copy"
          style={{ y: copyY }}
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease }}
        >
          <p className="eyebrow">GL&amp;SC</p>
          <h2 className="section-title">With the Team</h2>
          <p className="section-lead">
            Building national land systems alongside the people who run them —
            Guyana Lands &amp; Surveys Commission.
          </p>
          <p className="team__caption">Georgetown, Guyana</p>
        </motion.div>

        <motion.figure
          className="team__shot"
          style={{ y: shotY }}
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
        >
          <img
            src="/photos/lands-team.jpg"
            alt="Triston Carter with the team at Guyana Lands and Surveys Commission"
            loading="lazy"
          />
        </motion.figure>
      </div>
    </section>
  );
}

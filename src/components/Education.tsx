import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { education } from "../data/content";
import "./Education.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function Education() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const megaY = useTransform(scrollYProgress, [0, 1], [30, -50]);

  return (
    <section className="section education" id="education" ref={ref}>
      <div className="container education__wrap">
        <motion.h2 className="education__mega" style={{ y: megaY }}>
          School
        </motion.h2>

        <div className="education__layout">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease }}
          >
            <p className="eyebrow">Education</p>
            <h3 className="section-title">Learning Curve</h3>
            <p className="section-lead">
              IT, full-stack, GIS graduate study, and City &amp; Guilds electrical
              certification.
            </p>
          </motion.div>

          <ol className="education__list">
            {education.map((item, index) => (
              <motion.li
                key={`${item.place}-${item.title}`}
                className="education__item"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.6, delay: index * 0.07, ease }}
              >
                <span className="education__time">{item.time}</span>
                <h4 className="education__title">{item.title}</h4>
                <p className="education__place">{item.place}</p>
                <p className="education__detail">{item.detail}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

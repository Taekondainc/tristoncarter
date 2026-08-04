import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { education } from "../data/content";
import { useSmoothScrollProgress } from "../hooks/useSmoothScrollProgress";
import "./Education.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function Education() {
  const ref = useRef<HTMLElement>(null);
  const scrollYProgress = useSmoothScrollProgress({
    target: ref,
    offset: ["start end", "end start"],
  });
  const marqueeX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const listY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  return (
    <section className="section education" id="education" ref={ref}>
      <motion.div
        className="marquee"
        style={{ x: marqueeX }}
        aria-hidden="true"
      >
        <div className="marquee__track marquee__track--soft">
          <span>history · history · history · history · history · </span>
          <span>history · history · history · history · history · </span>
        </div>
      </motion.div>

      <motion.div className="container" style={{ y: listY }}>
        <ol className="education__list">
          {education.map((item, index) => {
            const current = /expected/i.test(item.time);
            return (
              <motion.li
                key={`${item.place}-${item.title}`}
                className="education__row"
                initial={{ opacity: 0, y: 48, x: -16 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease }}
                whileHover={{ backgroundColor: "rgba(240, 157, 81, 0.14)", x: 6 }}
              >
                <span className="education__num">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="education__main">
                  <h3>
                    {item.title}
                    {current ? (
                      <span className="education__current">Current</span>
                    ) : null}
                  </h3>
                  <p>
                    {item.place} · {item.time}
                  </p>
                </div>
                <p className="education__detail">{item.detail}</p>
              </motion.li>
            );
          })}
        </ol>
      </motion.div>
    </section>
  );
}

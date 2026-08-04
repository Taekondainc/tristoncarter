import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { nowBuilding } from "../data/content";
import "./NowBuilding.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function NowBuilding() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shotY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const shotRotate = useTransform(scrollYProgress, [0, 1], [-4, 2]);
  const megaX = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);

  return (
    <section className="now" id="now" ref={ref}>
      <motion.p className="now__mega" style={{ x: megaX }} aria-hidden="true">
        Now
      </motion.p>

      <div className="container now__layout">
        <motion.div
          className="now__copy"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.85, ease }}
        >
          <p className="now__pulse">
            <span className="now__dot" aria-hidden="true" />
            Now building
          </p>
          <h2 className="now__name">{nowBuilding.name}</h2>
          <p className="now__tagline">{nowBuilding.tagline}</p>
          <p className="now__blurb">{nowBuilding.blurb}</p>
          <ul className="now__stack">
            {nowBuilding.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="now__stage"
          style={{ y: shotY, rotate: shotRotate }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.1, ease }}
        >
          <div className="now__glow" aria-hidden="true" />
          <figure className="now__shot">
            <img
              src={nowBuilding.image}
              alt="592APTS homepage preview"
              loading="eager"
            />
            <figcaption>{nowBuilding.status}</figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}

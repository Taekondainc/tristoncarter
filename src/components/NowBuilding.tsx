import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { nowBuilding } from "../data/content";
import { useSmoothScrollProgress } from "../hooks/useSmoothScrollProgress";
import { AmbientShapes } from "./AmbientShapes";
import "./NowBuilding.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function NowBuilding() {
  const ref = useRef<HTMLElement>(null);
  const scrollYProgress = useSmoothScrollProgress({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shotY = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const shotRotate = useTransform(scrollYProgress, [0, 1], [-8, 5]);
  const megaX = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section className="now" id="now" ref={ref}>
      <AmbientShapes preset="dark" target={ref} />
      <motion.p className="now__mega" style={{ x: megaX }} aria-hidden="true">
        Now
      </motion.p>

      <div className="container now__layout">
        <motion.div
          className="now__copy"
          style={{ y: copyY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
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
          <a
            className="now__link"
            href={nowBuilding.href}
            target="_blank"
            rel="noreferrer"
          >
            {nowBuilding.linkLabel} ↗
          </a>
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

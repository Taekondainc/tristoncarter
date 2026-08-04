import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../data/content";
import "./Projects.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const project = projects[active];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const megaY = useTransform(scrollYProgress, [0, 1], [50, -70]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section className="section portfolio" id="projects" ref={sectionRef}>
      <motion.div className="portfolio__bg-wrap" style={{ y: bgY }} aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.div
            key={project.image}
            className="portfolio__bg"
            style={{ backgroundImage: `url(${project.image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease }}
          />
        </AnimatePresence>
      </motion.div>
      <div className="portfolio__veil" aria-hidden="true" />

      <motion.h2 className="portfolio__mega" style={{ y: megaY }} aria-hidden="true">
        work
      </motion.h2>

      <div className="container portfolio__layout">
        <motion.div
          className="portfolio__intro"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="portfolio__label">02 / Work</p>
          <p className="portfolio__lead">
            Hover or click a name — the background shows the shot.
          </p>
        </motion.div>

        <ol className="portfolio__list">
          {projects.map((item, index) => {
            const isActive = index === active;
            return (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.04, 0.28),
                  ease,
                }}
              >
                <button
                  type="button"
                  className={`portfolio__item${isActive ? " is-active" : ""}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  aria-pressed={isActive}
                >
                  <span className="portfolio__num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="portfolio__name">{item.name}</span>
                  <span className="portfolio__year">{item.year}</span>
                </button>
              </motion.li>
            );
          })}
        </ol>

        <motion.div
          className="portfolio__detail"
          key={project.name}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease }}
        >
          <p className="portfolio__blurb">{project.blurb}</p>
          <ul className="portfolio__stack">
            {project.stack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

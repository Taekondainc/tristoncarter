import { AnimatePresence, motion, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { projects } from "../data/content";
import { useSmoothScrollProgress } from "../hooks/useSmoothScrollProgress";
import { AmbientShapes } from "./AmbientShapes";
import "./Projects.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const project = projects[active];

  const scrollYProgress = useSmoothScrollProgress({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const megaY = useTransform(scrollYProgress, [0, 1], [120, -140]);
  const stageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const listY = useTransform(scrollYProgress, [0, 1], [70, -50]);

  return (
    <section className="section portfolio" id="projects" ref={sectionRef}>
      <AmbientShapes preset="dark" target={sectionRef} />
      <motion.p className="portfolio__mega" style={{ y: megaY }} aria-hidden="true">
        work
      </motion.p>

      <div className="container portfolio__shell">
        <motion.header
          className="portfolio__intro"
          style={{ y: listY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="portfolio__label">02 / Work</p>
          <h2 className="portfolio__title">Selected systems</h2>
          <p className="portfolio__lead">
            Hover or click a name — the preview switches to that shot.
          </p>
        </motion.header>

        <div className="portfolio__board">
          <ol className="portfolio__list" role="listbox" aria-label="Projects">
            {projects.map((item, index) => {
              const isActive = index === active;
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(index * 0.035, 0.3),
                    ease,
                  }}
                >
                  <button
                    type="button"
                    role="option"
                    className={`portfolio__item${isActive ? " is-active" : ""}`}
                    aria-selected={isActive}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
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

          <div className="portfolio__stage-col">
            <motion.div className="portfolio__stage" style={{ y: stageY }}>
              <div className="portfolio__stage-chrome" aria-hidden="true">
                <span />
                <span />
                <span />
                <p>{project.name}</p>
              </div>
              <div className="portfolio__viewport">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={project.image}
                    className="portfolio__shot"
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.99 }}
                    transition={{ duration: 0.4, ease }}
                  />
                </AnimatePresence>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={project.name}
                className="portfolio__detail"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease }}
              >
                <p className="portfolio__blurb">{project.blurb}</p>
                <ul className="portfolio__stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

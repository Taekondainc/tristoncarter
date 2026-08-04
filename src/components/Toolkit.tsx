import { motion } from "framer-motion";
import { toolkit } from "../data/content";
import "./Toolkit.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function Toolkit() {
  return (
    <section className="toolkit" id="toolkit" aria-labelledby="toolkit-title">
      <div className="container toolkit__wrap">
        <motion.p
          className="toolkit__label"
          id="toolkit-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
        >
          03 / Toolkit
        </motion.p>

        <motion.div
          className="terminal"
          role="region"
          aria-label="Skills terminal"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease }}
        >
          <div className="terminal__chrome">
            <span className="terminal__dot terminal__dot--close" />
            <span className="terminal__dot terminal__dot--min" />
            <span className="terminal__dot terminal__dot--max" />
            <p className="terminal__title">triston — zsh — skills</p>
          </div>

          <div className="terminal__body">
            <p className="terminal__prompt">
              <span className="terminal__user">triston@portfolio</span>
              <span className="terminal__sep">:</span>
              <span className="terminal__path">~/skills</span>
              <span className="terminal__dollar">$</span>
              <span className="terminal__cmd"> ls -la ./toolkit</span>
            </p>

            <div className="terminal__grid">
              {toolkit.map((group, index) => (
                <article key={group.id} className="terminal__panel">
                  <h3 className="terminal__heading">
                    <span className="terminal__hash">#</span> {group.label}
                  </h3>
                  <ul className="terminal__list">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="terminal__arrow" aria-hidden="true">
                          →
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className="terminal__index" aria-hidden="true">
                    0{index + 1}
                  </span>
                </article>
              ))}
            </div>

            <p className="terminal__prompt terminal__prompt--idle">
              <span className="terminal__user">triston@portfolio</span>
              <span className="terminal__sep">:</span>
              <span className="terminal__path">~/skills</span>
              <span className="terminal__dollar">$</span>
              <span className="terminal__cursor" aria-hidden="true" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

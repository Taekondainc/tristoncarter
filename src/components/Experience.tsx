import { motion } from "framer-motion";
import { experience } from "../data/content";
import "./Experience.css";

const ease = [0.16, 1, 0.3, 1] as const;

export function Experience() {
  return (
    <section className="section exhibitions" id="work">
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track marquee__track--soft">
          <span>
            experience · experience · experience · experience · experience ·{" "}
          </span>
          <span>
            experience · experience · experience · experience · experience ·{" "}
          </span>
        </div>
      </div>

      <div className="container">
        <ol className="exhibitions__list">
          {experience.map((item, index) => (
            <motion.li
              key={`${item.org}-${item.role}`}
              className="exhibitions__row"
              initial={{ opacity: 0, y: 48, x: -16 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, delay: index * 0.08, ease }}
              whileHover={{ backgroundColor: "rgba(240, 157, 81, 0.12)", x: 6 }}
            >
              <span className="exhibitions__num">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="exhibitions__main">
                <h3>
                  {item.role}
                  {item.current ? (
                    <span className="exhibitions__current">Current</span>
                  ) : null}
                </h3>
                <p>
                  {item.org} · {item.time}
                </p>
              </div>
              <p className="exhibitions__detail">{item.detail}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

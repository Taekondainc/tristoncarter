import { motion } from "framer-motion";
import { roles } from "../data/content";
import { RoleIcon } from "./RoleIcon";
import "./Roles.css";

const ease = [0.16, 1, 0.3, 1] as const;

const shorts: Record<string, string> = {
  software: "National land systems",
  design: "UI, brand & SVG",
  tutor: "CSE & ITE labs",
  electrician: "GTI · City & Guilds",
};

const variants = ["ink", "sandy", "tomato", "ink"] as const;

export function Roles() {
  return (
    <section className="roles" id="roles">
      <div className="container roles__inner">
        <motion.div
          className="roles__intro"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="eyebrow">What I do</p>
          <h2 className="roles__title">
            {"Software. Design. Power. Teaching.".split(" ").map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: "110%", rotate: 4 }}
                whileInView={{ opacity: 1, y: "0%", rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.75, delay: 0.08 + i * 0.1, ease }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <div className="roles__grid">
          {roles.map((role, index) => (
            <motion.article
              key={role.id}
              className={`role role--${variants[index % 3]}`}
              initial={{ opacity: 0, y: 50, scale: 0.9, rotate: index % 2 ? 3 : -3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease }}
              whileHover={{ y: -8, rotate: index % 2 ? -2 : 2, scale: 1.02 }}
            >
              <div className="role__top">
                <span className="role__icon" aria-hidden="true">
                  <RoleIcon id={role.id} />
                </span>
                <span className="role__index">0{index + 1}</span>
              </div>
              <h3 className="role__name">{role.title}</h3>
              <p className="role__place">{role.place}</p>
              <p className="role__tag">{shorts[role.id] ?? role.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

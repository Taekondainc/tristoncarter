import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { contact, links } from "../data/content";
import "./Contact.css";

const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  { label: "Email", href: links.email },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Taekonda TCA", href: links.agency },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const panelRotate = useTransform(scrollYProgress, [0, 1], [3, -2]);

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact__panel"
          style={{ rotate: panelRotate }}
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease }}
        >
          <div className="contact__copy">
            <p className="contact__eyebrow">Contact</p>
            <h2 className="contact__title">Let&apos;s Build</h2>
            <p className="contact__lead">
              Based in {contact.location}. Open to full-stack, GIS, and civic tech
              collaboration.
            </p>
            <div className="contact__actions">
              <a className="btn btn--fill" href={links.email}>
                Email me
              </a>
              <a className="btn btn--line" href={links.phone}>
                {contact.phone}
              </a>
            </div>
          </div>

          <ul className="contact__socials">
            {socials.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.08, ease }}
              >
                <a
                  href={item.href}
                  {...(item.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {item.label} ↗
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

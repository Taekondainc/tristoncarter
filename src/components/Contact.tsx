import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import { contact, links } from "../data/content";
import { useSmoothScrollProgress } from "../hooks/useSmoothScrollProgress";
import { AmbientShapes } from "./AmbientShapes";
import "./Contact.css";

const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  { label: contact.email, href: links.email },
  { label: contact.emailAlt, href: links.emailAlt },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Taekonda TCA", href: links.agency },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const scrollYProgress = useSmoothScrollProgress({
    target: ref,
    offset: ["start end", "end start"],
  });
  const panelRotate = useTransform(scrollYProgress, [0, 1], [8, -7]);
  const panelY = useTransform(scrollYProgress, [0, 1], [100, -70]);

  return (
    <section className="section contact" id="contact" ref={ref}>
      <AmbientShapes preset="bright" target={ref} />
      <div className="container">
        <motion.div
          className="contact__panel"
          style={{ rotate: panelRotate, y: panelY }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
                {contact.email}
              </a>
              <a className="btn btn--line" href={links.emailAlt}>
                {contact.emailAlt}
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

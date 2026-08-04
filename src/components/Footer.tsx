import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Footer.css";

export function Footer() {
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const megaY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const megaScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);

  return (
    <footer className="footer" ref={ref}>
      <div className="container footer__top">
        <img
          className="footer__logo"
          src="/brand/tc-logo.png"
          alt="Triston Carter"
          width={120}
          height={140}
        />
        <nav className="footer__nav" aria-label="Footer">
          <a href="#about">About</a>
          <a href="#team">Team</a>
          <a href="#projects">Work</a>
          <a href="#toolkit">Toolkit</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <motion.p
        className="footer__mega"
        style={{ y: megaY, scale: megaScale }}
        aria-hidden="true"
      >
        Triston
      </motion.p>
      <p className="footer__copy">
        © {year} Triston Carter · Taekonda TCA · Georgetown, Guyana
      </p>
    </footer>
  );
}

import { motion } from "framer-motion";
import { links } from "../data/content";
import "./Nav.css";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#now", label: "Now" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#work", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label="Triston Carter home">
          <img
            className="nav__logo"
            src="/brand/tc-logo.png"
            alt="Triston Carter"
            width={120}
            height={140}
          />
        </a>
        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="nav__person"
          href={links.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          Triston Carter
        </a>
      </div>
    </motion.header>
  );
}

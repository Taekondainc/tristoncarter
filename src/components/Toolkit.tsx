import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { toolkit } from "../data/content";
import { AmbientShapes } from "./AmbientShapes";
import "./Toolkit.css";

const ease = [0.16, 1, 0.3, 1] as const;
const CMD = "ls -la ./toolkit";
/** Fast type — previous 130ms felt frozen */
const CHAR_MS = 22;
const LINE_GAP_MS = 90;
const PANEL_STAGGER_MS = 120;

function useTypedText(
  full: string,
  active: boolean,
  speed = CHAR_MS,
  onDone?: () => void,
) {
  const [text, setText] = useState("");
  const finished = useRef(false);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    if (!active) {
      setText("");
      finished.current = false;
      return;
    }

    if (text.length >= full.length) {
      if (!finished.current) {
        finished.current = true;
        onDoneRef.current?.();
      }
      return;
    }

    const id = window.setTimeout(() => {
      setText(full.slice(0, text.length + 1));
    }, speed);
    return () => window.clearTimeout(id);
  }, [active, full, speed, text]);

  return text;
}

type PanelProps = {
  label: string;
  items: string[];
  index: number;
  active: boolean;
  reduce: boolean | null;
};

function TypedPanel({ label, items, index, active, reduce }: PanelProps) {
  const lines = useMemo(
    () => [`# ${label.toUpperCase()}`, ...items.map((item) => `→ ${item}`)],
    [items, label],
  );
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [doneLines, setDoneLines] = useState<string[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!active) {
      setStarted(false);
      setLineIndex(0);
      setCharIndex(0);
      setDoneLines([]);
      return;
    }
    if (reduce) {
      setDoneLines(lines);
      setLineIndex(lines.length);
      return;
    }
    const id = window.setTimeout(() => setStarted(true), index * PANEL_STAGGER_MS);
    return () => window.clearTimeout(id);
  }, [active, index, lines, reduce]);

  useEffect(() => {
    if (!started || reduce) return;
    const current = lines[lineIndex];
    if (!current) return;

    if (charIndex < current.length) {
      const id = window.setTimeout(() => setCharIndex((c) => c + 1), CHAR_MS);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(() => {
      setDoneLines((prev) => [...prev, current]);
      setCharIndex(0);
      setLineIndex((i) => i + 1);
    }, LINE_GAP_MS);
    return () => window.clearTimeout(id);
  }, [started, reduce, lines, lineIndex, charIndex]);

  const live = lines[lineIndex]?.slice(0, charIndex) ?? "";
  const showCursor = started && !reduce && lineIndex < lines.length;

  return (
    <article className="terminal__panel">
      <div className="terminal__typed" aria-hidden="true">
        {doneLines.map((line, i) => (
          <p
            key={`${index}-${i}-${line}`}
            className={
              line.startsWith("#")
                ? "terminal__line terminal__line--head"
                : "terminal__line"
            }
          >
            {line}
          </p>
        ))}
        {showCursor ? (
          <p
            className={
              live.startsWith("#")
                ? "terminal__line terminal__line--head"
                : "terminal__line"
            }
          >
            {live}
            <span className="terminal__cursor" />
          </p>
        ) : null}
      </div>

      <span className="terminal__index" aria-hidden="true">
        0{index + 1}
      </span>
    </article>
  );
}

export function Toolkit() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [cmdDone, setCmdDone] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.35 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce && inView) setCmdDone(true);
  }, [reduce, inView]);

  const typedCmd = useTypedText(
    CMD,
    inView && !reduce,
    CHAR_MS,
    () => setCmdDone(true),
  );
  const commandText = reduce && inView ? CMD : typedCmd;
  const showCmdCursor = inView && !reduce && !cmdDone;
  const panelsActive = inView && (reduce || cmdDone);

  return (
    <section
      className="toolkit"
      id="toolkit"
      ref={sectionRef}
      aria-labelledby="toolkit-title"
    >
      <AmbientShapes preset="dark" target={sectionRef} />
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
              <span className="terminal__cmd"> {commandText}</span>
              {showCmdCursor ? (
                <span className="terminal__cursor" aria-hidden="true" />
              ) : null}
            </p>

            {panelsActive ? (
              <div className="terminal__grid">
                {toolkit.map((group, index) => (
                  <TypedPanel
                    key={group.id}
                    label={group.label}
                    items={group.items}
                    index={index}
                    active={panelsActive}
                    reduce={reduce}
                  />
                ))}
              </div>
            ) : (
              <div className="terminal__grid terminal__grid--waiting" aria-hidden="true">
                {toolkit.map((group) => (
                  <article key={group.id} className="terminal__panel terminal__panel--empty" />
                ))}
              </div>
            )}

            {panelsActive ? (
              <p className="terminal__prompt terminal__prompt--idle">
                <span className="terminal__user">triston@portfolio</span>
                <span className="terminal__sep">:</span>
                <span className="terminal__path">~/skills</span>
                <span className="terminal__dollar">$</span>
                <span className="terminal__cursor" aria-hidden="true" />
              </p>
            ) : null}
          </div>
        </motion.div>

        <ul className="toolkit__a11y">
          {toolkit.map((group) => (
            <li key={group.id}>
              <strong>{group.label}</strong>
              <span>: {group.items.join(", ")}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

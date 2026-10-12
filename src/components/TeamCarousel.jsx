import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import TeamPhoto from "./TeamPhoto";
import { TEAM } from "../data/team";
import { ArrowIcon } from "./Icons";
import styles from "./TeamCarousel.module.css";

const AUTOPLAY_MS = 5000;
const TRANSITION_MS = 760;

export default function TeamCarousel() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [instant, setInstant] = useState(false);
  const [step, setStep] = useState(320);
  const wrapRef = useRef(null);

  const total = TEAM.length;

  // Mantém o clone final alinhado com o primeiro card (loop contínuo)
  const loopIndex = index % total;
  const visible = [...TEAM, TEAM[0]];

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;

    const measure = () => {
      const card = el.querySelector(`.${styles.card}`);
      if (!card) return;
      const stylesheet = window.getComputedStyle(el);
      const gap = parseFloat(stylesheet.columnGap || stylesheet.gap || "0") || 0;
      setStep(card.offsetWidth + gap);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Avanço automático (pausado no hover e quando o usuário prefere menos movimento)
  useEffect(() => {
    if (paused || reduce) return undefined;
    const id = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce, next]);

  // Ao chegar no clone, volta para o início sem animação
  useEffect(() => {
    if (index !== total) return undefined;
    const id = window.setTimeout(() => {
      setInstant(true);
      setIndex(0);
    }, TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [index, total]);

  useEffect(() => {
    if (!instant) return undefined;
    const id = window.setTimeout(() => setInstant(false), 60);
    return () => window.clearTimeout(id);
  }, [instant]);

  return (
    <div
      className={styles.wrap}
      ref={wrapRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="group"
      aria-roledescription="carrossel"
      aria-label="Nossa equipe de dentistas"
    >
      <div className={styles.bar}>
        <motion.button
          type="button"
          className={styles.next}
          onClick={next}
          aria-label="Ver próximo profissional"
          whileHover={reduce ? undefined : { y: -2 }}
          whileTap={reduce ? undefined : { scale: 0.97 }}
        >
          Próximo
          <ArrowIcon size={14} />
        </motion.button>

        <span className={styles.counter} aria-live="polite">
          {String(loopIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div className={styles.viewport}>
        <motion.div
          className={styles.track}
          animate={{ x: -index * step }}
          transition={
            instant ? { duration: 0 } : { type: "spring", stiffness: 70, damping: 22 }
          }
        >
          {visible.map((member, i) => (
            <figure
              className={styles.card}
              key={`${member.id}-${i}`}
              aria-hidden={i > loopIndex + 1}
            >
              <TeamPhoto member={member} eager={i === 0} />
              <figcaption className={styles.caption}>
                <span className={styles.captionName}>{member.shortName}</span>
                <span className={styles.captionRole}>{member.role}</span>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
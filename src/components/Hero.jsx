import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ImplantImage from "./ImplantImage";
import TeamCarousel from "./TeamCarousel";
import HeroFooterBar from "./HeroFooterBar";
import styles from "./Hero.module.css";

const HEADLINE = [
  [{ text: "Cuidado" }],
  [{ text: "Moderno" }, { text: "para" }],
  [{ text: "um" }, { text: "Sorriso" }],
  [{ text: "Perfeito", accent: true }],
];

/* Delay escalonado por palavra, calculado uma única vez fora do render */
const WORD_STAGGER = 0.09;
const FIRST_DELAY = 0.45;
const LINES = (() => {
  let count = 0;
  return HEADLINE.map((line) => {
    const words = line.map((word) => {
      const item = { ...word, delay: FIRST_DELAY + count * WORD_STAGGER };
      count += 1;
      return item;
    });
    return words;
  });
})();

function AnimatedWord({ word, delay, reduce }) {
  const className = `${styles.word} ${word.accent ? styles.accent : ""}`;

  if (reduce) {
    return <span className={className}>{word.text}</span>;
  }

  return (
    <span className={styles.wordMask}>
      <motion.span
        className={className}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {word.text}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.hero} id="topo">
      <div className={styles.body}>
        <motion.p
          className={styles.intro}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          Da prevenção a restaurações complexas, uma abordagem completa para a
          sua saúde bucal.
        </motion.p>

        <ImplantImage className={styles.stage} priority />

        <div className={styles.carousel}>
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <TeamCarousel />
          </motion.div>
        </div>

        <h1 className={styles.headline}>
          {LINES.map((line, li) => (
            <span className={styles.line} key={li}>
              {line.map((word, wi) => (
                <Fragment key={word.text}>
                  <AnimatedWord word={word} delay={word.delay} reduce={reduce} />
                  {wi < line.length - 1 ? " " : null}
                </Fragment>
              ))}
            </span>
          ))}
        </h1>
      </div>

      <HeroFooterBar />
    </section>
  );
}
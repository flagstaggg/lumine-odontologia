import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { PRICING, PRICING_NOTE } from "../data/pricing";
import { ArrowIcon } from "./Icons";
import { WHATSAPP_LINK } from "../config";
import styles from "./Pricing.module.css";

function formatBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
}

function PriceValue({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [animated, setAnimated] = useState(null);

  useEffect(() => {
    if (!value || reduce || !inView) return undefined;

    const controls = animate(0, value, {
      duration: 1.3,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setAnimated(latest),
      onComplete: () => setAnimated(value),
    });

    return () => controls.stop();
  }, [value, inView, reduce]);

  let display = label;
  if (value) {
    display = reduce ? formatBRL(value) : formatBRL(animated ?? 0);
  }

  return (
    <span className={styles.price} ref={ref}>
      {display}
    </span>
  );
}

export default function Pricing() {
  const reduce = useReducedMotion();

  return (
    <section id="precos" className="section">
      <div className="section__inner">
        <header className="section__head">
          <p className="eyebrow">Preços e condições</p>
          <h2 className="section__title">Transparência antes de tudo</h2>
          <p className="section__desc">
            Planos transparentes, sem surpresa na fatura. Você recebe o orçamento
            completo antes de decidir.
          </p>
        </header>

        <ul className={styles.grid}>
          {PRICING.map((plan, i) => (
            <motion.li
              key={plan.id}
              className={`${styles.item} ${plan.featured ? styles.featured : ""}`}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <article className={styles.card}>
                {plan.featured && <span className={styles.badge}>Mais procurado</span>}

                <h3 className={styles.name}>{plan.name}</h3>

                <p className={styles.value}>
                  <span className={styles.suffix}>{plan.suffix}</span>
                  <PriceValue value={plan.price} label={plan.priceLabel} />
                </p>

                <p className={styles.desc}>{plan.description}</p>

                <ul className={styles.features}>
                  {plan.features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                      <span className={styles.check} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  className={`btn ${plan.featured ? "btn--solid" : "btn--outline"} ${styles.cta}`}
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Quero este plano
                  <ArrowIcon size={15} />
                </a>
              </article>
            </motion.li>
          ))}
        </ul>

        <p className={styles.note}>{PRICING_NOTE}</p>
      </div>
    </section>
  );
}
import Section from "./Section";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "../data/testimonials";
import { StarIcon } from "./Icons";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <Section
      id="depoimentos"
      eyebrow="Depoimentos"
      title="O que dizem nossos pacientes"
      description="Histórias reais de quem voltou a sorrir com segurança."
    >
      <ul className={styles.grid}>
        {TESTIMONIALS.map((item, i) => (
          <Reveal as="li" key={item.id} delay={i * 0.1} amount={0.2}>
            <figure className={styles.card}>
              <div className={styles.stars} role="img" aria-label="Nota 5 de 5">
                {Array.from({ length: 5 }, (_, s) => (
                  <StarIcon key={s} size={13} />
                ))}
              </div>
              <blockquote className={styles.text}>&ldquo;{item.text}&rdquo;</blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {item.name.charAt(0)}
                </span>
                <span>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.city}>{item.city} — SC</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
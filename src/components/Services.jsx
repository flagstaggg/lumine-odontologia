import Section from "./Section";
import Reveal from "./Reveal";
import { SERVICES } from "../data/services";
import { ServiceIcon } from "./Icons";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="Serviços"
      title="Tudo o que o seu sorriso precisa, em um só lugar"
      description="Cada tratamento é planejado com diagnóstico digital e acompanhado por uma equipe multidisciplinar."
    >
      <ul className={styles.grid}>
        {SERVICES.map((service, i) => (
          <Reveal as="li" key={service.id} delay={i * 0.06} amount={0.15}>
            <article className={styles.card}>
              <span className={styles.icon}>
                <ServiceIcon name={service.icon} />
              </span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.description}</p>
              <span className={styles.cardGlow} aria-hidden="true" />
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
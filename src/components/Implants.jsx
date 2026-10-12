import Section from "./Section";
import Reveal from "./Reveal";
import ImplantImage from "./ImplantImage";
import { WHATSAPP_LINK } from "../config";
import styles from "./Implants.module.css";

const STEPS = [
  {
    title: "Avaliação",
    text: "Tomografia 3D, análise óssea e plano digital do resultado que você busca.",
  },
  {
    title: "Procedimento",
    text: "Cirurgia guiada por computador, com anestesia e recuperação rápida.",
  },
  {
    title: "Acompanhamento",
    text: "Consultas de controle, ajuste da coroa e orientação de higiene diária.",
  },
];

export default function Implants() {
  return (
    <Section
      id="implantes"
      tint
      eyebrow="Implantes dentários"
      title="Reposição fixa, precisa e confortável"
      description="Do planejamento digital à coroa final, cada etapa é conduzida pela mesma equipe, com previsibilidade do início ao fim."
    >
      <div className={styles.grid}>
        <div className={styles.content}>
          <ol className={styles.steps}>
            {STEPS.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.12} amount={0.3}>
                <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
                <div className={styles.stepBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepText}>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={0.12} className={styles.actions}>
            <a
              className="btn btn--solid"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer noopener"
            >
              Agendar avaliação
            </a>
            <p className={styles.note}>Avaliação inicial gratuita para novos pacientes.</p>
          </Reveal>
        </div>

        <Reveal className={styles.visual} delay={0.1} amount={0.2}>
          <span className={styles.visualBadge}>Implante osteointegrado</span>
          <ImplantImage className={styles.scene} height="92%" base="6%" />
        </Reveal>
      </div>
    </Section>
  );
}
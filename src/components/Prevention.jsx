import Section from "./Section";
import Reveal from "./Reveal";
import { PreventionIcon } from "./Icons";
import styles from "./Prevention.module.css";

const TIPS = [
  {
    icon: "brush",
    title: "Escovação correta",
    text: "Duas vezes ao dia, com técnica circular e sem esquecer a linha da gengiva.",
  },
  {
    icon: "floss",
    title: "Limite os dentes",
    text: "Fio dental ou escova interproximal uma vez ao dia evita cáries entre os dentes.",
  },
  {
    icon: "water",
    title: "Beba água",
    text: "A saliva mantém a boca saudável: 2 litros ao dia ajudam a neutralizar ácidos.",
  },
  {
    icon: "sun",
    title: "Atenção ao sol",
    text: "Protetor solar labial e atenção à água com gás: o açúcar do refrigerante é o principal vilão do esmalte.",
  },
];

export default function Prevention() {
  return (
    <Section
      id="prevencao"
      eyebrow="Prevenção"
      title="Cuidar antes de tratar é sempre mais barato"
      description="Quatro hábitos simples que, mantidos em casa, reduzem em até 70% o risco de cáries e doença periodontal."
    >
      <div className={styles.band}>
        <Reveal className={styles.figure} amount={0.3}>
          <p className={styles.figureLabel}>Frequência ideal</p>
          <p className={styles.figureNumber}>
            6<span className={styles.figureSuffix}>em 6 meses</span>
          </p>
          <p className={styles.figureText}>
            É o intervalo indicado para a consulta de manutenção: profilaxia,
            controle da gengiva e revisão do tratamento.
          </p>
        </Reveal>

        <ul className={styles.tips}>
          {TIPS.map((tip, i) => (
            <Reveal as="li" key={tip.title} delay={i * 0.08} amount={0.2}>
              <span className={styles.tipIcon}>
                <PreventionIcon name={tip.icon} size={22} />
              </span>
              <div>
                <h3 className={styles.tipTitle}>{tip.title}</h3>
                <p className={styles.tipText}>{tip.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
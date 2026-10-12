import Section from "./Section";
import Reveal from "./Reveal";
import TeamPhoto from "./TeamPhoto";
import { TEAM } from "../data/team";
import { ArrowIcon } from "./Icons";
import { WHATSAPP_LINK } from "../config";
import styles from "./Team.module.css";

function MemberCard({ member }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <TeamPhoto member={member} className={styles.mediaPhoto} />
        <span className={styles.cro}>{member.cro}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <Section
      id="equipe"
      tint
      eyebrow="Equipe"
      title="Quem cuida do seu sorriso"
      description="Dentistas com formação contínua, registro ativo no CRO-SC e foco em atendimento humanizado."
    >
      <ul className={styles.grid}>
        {TEAM.map((member, i) => (
          <Reveal as="li" key={member.id} delay={i * 0.08} amount={0.15}>
            <MemberCard member={member} />
          </Reveal>
        ))}
      </ul>

      <Reveal className={styles.footer} delay={0.1}>
        <a
          className="btn btn--outline"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer noopener"
        >
          Falar com a equipe
          <ArrowIcon size={15} />
        </a>
      </Reveal>
    </Section>
  );
}
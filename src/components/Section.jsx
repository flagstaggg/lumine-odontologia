import Reveal from "./Reveal";
import styles from "./Section.module.css";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  tint = false,
  children,
}) {
  return (
    <section id={id} className={`section ${tint ? "section--tint" : ""} ${styles.section}`}>
      <div className="section__inner">
        {(eyebrow || title || description) && (
          <Reveal className="section__head">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section__title">{title}</h2>}
            {description && <p className="section__desc">{description}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
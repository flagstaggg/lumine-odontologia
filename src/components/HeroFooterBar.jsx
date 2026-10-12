import useLocalTime from "../hooks/useLocalTime";
import { AWARD_LABEL, AWARD_YEAR, BRAND, HERO_TECH_LABEL } from "../config";
import styles from "./HeroFooterBar.module.css";

export default function HeroFooterBar() {
  const time = useLocalTime();

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <p className={styles.cell}>
          {AWARD_LABEL}
          <br />
          {AWARD_YEAR}
        </p>
        <p className={styles.cell}>
          {BRAND.city}
          <br />
          <span className={styles.time}>
            {time} GMT-3
          </span>
        </p>
        <p className={`${styles.cell} ${styles.cellRight}`}>{HERO_TECH_LABEL}</p>
      </div>
    </div>
  );
}
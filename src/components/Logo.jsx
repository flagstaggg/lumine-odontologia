import styles from "./Logo.module.css";

/** Logotipo da Lumine: quadrado azul com dente estilizado + wordmark. */
export default function Logo({ className = "", showWordmark = true }) {
  return (
    <span className={`${styles.logo} ${className}`}>
      <svg
        className={styles.mark}
        viewBox="0 0 64 64"
        width="34"
        height="34"
        role="img"
        aria-label="Lumine Odontologia"
      >
        <rect width="64" height="64" rx="16" fill="#4FB3E8" />
        <path
          d="M32 13c-4.2 0-6.3 1.6-10.2 1.6-4.6 0-8.3 3.4-8.3 9.6 0 6.4 2.2 10.8 3.6 16.1 1.3 4.8 2.2 10.7 5.4 10.7 3.3 0 3.3-9.3 6.6-9.3h5.8c3.3 0 3.3 9.3 6.6 9.3 3.2 0 4.1-5.9 5.4-10.7 1.4-5.3 3.6-9.7 3.6-16.1 0-6.2-3.7-9.6-8.3-9.6-3.9 0-6-1.6-10.2-1.6Z"
          fill="#ffffff"
        />
      </svg>
      {showWordmark && <span className={styles.word}>Lumine</span>}
    </span>
  );
}
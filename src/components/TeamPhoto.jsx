import { useState } from "react";
import { getInitials } from "../data/team";
import styles from "./TeamPhoto.module.css";

/**
 * Foto do profissional com fallback elegante (iniciais sobre azul claro)
 * caso a imagem remota não carregue.
 */
export default function TeamPhoto({ member, eager = false, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`${styles.avatar} ${className}`} aria-hidden="true">
        {getInitials(member.name)}
      </span>
    );
  }

  return (
    <img
      className={`${styles.photo} ${className}`}
      src={member.photo}
      alt={`Retrato de ${member.name}`}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
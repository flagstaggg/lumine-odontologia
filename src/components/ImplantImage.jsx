import { useEffect } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import implantImage from "../assets/implante.png";
import styles from "./ImplantImage.module.css";

/** Flutuação: sobe e desce 12px, ciclo de 4s, easeInOut em loop. */
const FLOAT_RANGE = 12;
const FLOAT_DURATION = 4;

/** Parallax: deslocamento máximo de 10px na horizontal e 8px na vertical. */
const PARALLAX_X = 10;
const PARALLAX_Y = 8;

const SPRING = { stiffness: 70, damping: 20, mass: 0.5 };

/**
 * Imagem do implante dentário com flutuação contínua, parallax suave,
 * sombra de contato no chão e degradê radial azul claro atrás.
 */
export default function ImplantImage({
  className = "",
  /** Altura visual da imagem em relação ao palco (padrão: 80% do hero). */
  height = "80%",
  /** Distância da base do implante até o fim do palco. */
  base = "13%",
  alt = "Implante dentário em render 3D",
  /** true no hero: carregamento prioritário, sem lazy. */
  priority = false,
}) {
  const reduce = useReducedMotion();

  const floatY = useMotionValue(reduce ? 0 : FLOAT_RANGE);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const parallaxX = useSpring(pointerX, SPRING);
  const parallaxY = useSpring(pointerY, SPRING);

  /* A sombra reage à flutuação: encolhe e clareia quando o implante sobe. */
  const shadowScale = useTransform(floatY, [-FLOAT_RANGE, FLOAT_RANGE], [0.74, 1]);
  const shadowOpacity = useTransform(floatY, [-FLOAT_RANGE, FLOAT_RANGE], [0.12, 0.32]);

  useEffect(() => {
    if (reduce) {
      floatY.set(0);
      return undefined;
    }
    const controls = animate(floatY, [FLOAT_RANGE, -FLOAT_RANGE], {
      duration: FLOAT_DURATION,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [floatY, reduce]);

  useEffect(() => {
    if (reduce) return undefined;

    const onMove = (event) => {
      pointerX.set(((event.clientX / window.innerWidth) * 2 - 1) * PARALLAX_X);
      pointerY.set(((event.clientY / window.innerHeight) * 2 - 1) * PARALLAX_Y);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [pointerX, pointerY, reduce]);

  return (
    <div
      className={`${styles.stage} ${className}`}
      style={{ "--implant-height": height, "--implant-base": base }}
    >
      <span className={styles.glow} aria-hidden="true" />

      <div className={styles.plinth}>
        <motion.span
          className={styles.shadow}
          aria-hidden="true"
          style={{ x: "-50%", scaleX: shadowScale, opacity: shadowOpacity }}
        />
        <motion.span className={styles.float} style={{ y: floatY }}>
          <motion.img
            className={styles.image}
            src={implantImage}
            alt={alt}
            width="568"
            height="1298"
            draggable="false"
            decoding="async"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "low"}
            style={{ x: parallaxX, y: parallaxY }}
          />
        </motion.span>
      </div>
    </div>
  );
}
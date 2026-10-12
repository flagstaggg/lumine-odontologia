import { motion, useReducedMotion } from "framer-motion";

/**
 * Revela o conteúdo com fade + deslocamento quando entra na viewport.
 * `once: true` para não repetir e respeito ao prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
  as = "div",
  amount = 0.25,
}) {
  const reduce = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
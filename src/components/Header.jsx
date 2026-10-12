import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Logo from "./Logo";
import { NAV_LINKS, WHATSAPP_LINK } from "../config";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-locked", open);
    return () => document.body.classList.remove("is-locked");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      initial={reduce ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
    >
      <div className={styles.inner}>
        <a
          className={styles.logoLink}
          href="#topo"
          aria-label="Lumine Odontologia — ir para o topo"
        >
          <Logo />
        </a>

        <motion.nav
          className={styles.nav}
          aria-label="Navegação principal"
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className={styles.navLink} href={link.href}>
                  <span className={styles.dot} aria-hidden="true" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        <motion.a
          className={`btn btn--outline ${styles.cta}`}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer noopener"
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          Agendar avaliação
        </motion.a>

        <button
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          <span className={`${styles.burgerBar} ${open ? styles.barTop : ""}`} />
          <span className={`${styles.burgerBar} ${open ? styles.barBottom : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            className={styles.panel}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: "100%" }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: "100%" }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav aria-label="Navegação mobile">
              <ul className={styles.panelList}>
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.06, duration: 0.4 }}
                  >
                    <a
                      className={styles.panelLink}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      <span className={styles.dot} aria-hidden="true" />
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <a
              className={`btn btn--solid ${styles.panelCta}`}
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => setOpen(false)}
            >
              Agendar avaliação
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
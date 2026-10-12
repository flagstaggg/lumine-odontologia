import Logo from "./Logo";
import { SocialIcon } from "./Icons";
import { BRAND, CONTACT, NAV_LINKS, WHATSAPP_LINK } from "../config";
import styles from "./Footer.module.css";

const FOOTER_LINKS = [
  ...NAV_LINKS,
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const SOCIALS = [
  { name: "instagram", label: "Instagram da Lumine Odontologia" },
  { name: "facebook", label: "Facebook da Lumine Odontologia" },
  { name: "linkedin", label: "LinkedIn da Lumine Odontologia" },
  { name: "whatsapp", label: "WhatsApp da Lumine Odontologia" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo />
          <p className={styles.tagline}>
            Cuidado moderno para o seu sorriso em {BRAND.city}.
          </p>
          <address className={styles.address}>
            {CONTACT.address} — {CONTACT.city}
          </address>
        </div>

        <nav className={styles.nav} aria-label="Links do rodapé">
          <h2 className={styles.colTitle}>Links rápidos</h2>
          <ul className={styles.linkList}>
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a className={styles.link} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.contact}>
          <h2 className={styles.colTitle}>Contato</h2>
          <ul className={styles.linkList}>
            <li>
              <a className={styles.link} href={CONTACT.phoneHref}>
                {CONTACT.phoneLabel}
              </a>
            </li>
            <li>
              <a className={styles.link} href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                className={styles.link}
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer noopener"
              >
                Agendar avaliação
              </a>
            </li>
          </ul>

          <ul className={styles.social}>
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  className={styles.socialLink}
                  href={social.name === "whatsapp" ? WHATSAPP_LINK : "#topo"}
                  target={social.name === "whatsapp" ? "_blank" : undefined}
              rel={social.name === "whatsapp" ? "noreferrer noopener" : undefined}
                  aria-label={social.label}
                >
                  <SocialIcon name={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © 2026 {BRAND.name} — Site de demonstração
        </p>
        <p className={styles.bottomNote}>Criciúma — Santa Catarina</p>
      </div>
    </footer>
  );
}
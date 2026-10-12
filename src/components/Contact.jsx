import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "./Section";
import Reveal from "./Reveal";
import { ArrowIcon } from "./Icons";
import { CONTACT, WHATSAPP_LINK } from "../config";
import styles from "./Contact.module.css";

const SERVICES_OPTIONS = [
  "Avaliação inicial",
  "Limpeza e prevenção",
  "Clareamento dental",
  "Ortodontia",
  "Implantes",
  "Restaurações e estética",
];

const EMPTY = {
  nome: "",
  telefone: "",
  servico: "",
  mensagem: "",
};

function validate(values) {
  const errors = {};
  if (values.nome.trim().length < 3) {
    errors.nome = "Informe seu nome completo.";
  }
  const digits = values.telefone.replace(/\D/g, "");
  if (digits.length < 10) {
    errors.telefone = "Informe um telefone com DDD.";
  }
  if (!values.servico) {
    errors.servico = "Selecione o serviço de interesse.";
  }
  if (values.mensagem.trim().length < 10) {
    errors.mensagem = "Conte um pouco mais (mínimo 10 caracteres).";
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field) => (event) => {
    const { value } = event.target;
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const found = validate(values);
    setErrors(found);

    if (Object.keys(found).length === 0) {
      setSent(true);
      setValues(EMPTY);
    }
  };

  return (
    <Section
      id="contato"
      tint
      eyebrow="Contato"
      title="Agende sua avaliação"
      description="Preencha o formulário ou chame no WhatsApp. Respondemos em até 1 dia útil."
    >
      <div className={styles.grid}>
        <Reveal className={styles.info} amount={0.2}>
          <h3 className={styles.infoTitle}>Lumine Odontologia</h3>
          <address className={styles.address}>
            {CONTACT.address}
            <br />
            {CONTACT.city}
          </address>

          <dl className={styles.hours}>
            {CONTACT.hours.map((row) => (
              <div className={styles.hourRow} key={row.label}>
                <dt>{row.label}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>

          <ul className={styles.links}>
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
          </ul>

          <a
            className={`btn btn--solid ${styles.whats}`}
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer noopener"
          >
            Agendar pelo WhatsApp
            <ArrowIcon size={15} />
          </a>
        </Reveal>

        <Reveal className={styles.formWrap} delay={0.1} amount={0.2}>
          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="nome">Nome completo</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  placeholder="Como podemos te chamar?"
                  value={values.nome}
                  onChange={update("nome")}
                  aria-invalid={Boolean(errors.nome)}
                  aria-describedby={errors.nome ? "erro-nome" : undefined}
                />
                {errors.nome && (
                  <p className={styles.error} id="erro-nome">
                    {errors.nome}
                  </p>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="telefone">Telefone / WhatsApp</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="(48) 99999-9999"
                  value={values.telefone}
                  onChange={update("telefone")}
                  aria-invalid={Boolean(errors.telefone)}
                  aria-describedby={errors.telefone ? "erro-telefone" : undefined}
                />
                {errors.telefone && (
                  <p className={styles.error} id="erro-telefone">
                    {errors.telefone}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="servico">Serviço de interesse</label>
              <select
                id="servico"
                name="servico"
                value={values.servico}
                onChange={update("servico")}
                aria-invalid={Boolean(errors.servico)}
                aria-describedby={errors.servico ? "erro-servico" : undefined}
              >
                <option value="">Selecione uma opção</option>
                {SERVICES_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.servico && (
                <p className={styles.error} id="erro-servico">
                  {errors.servico}
                </p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="4"
                placeholder="Conte brevemente o que você precisa."
                value={values.mensagem}
                onChange={update("mensagem")}
                aria-invalid={Boolean(errors.mensagem)}
                aria-describedby={errors.mensagem ? "erro-mensagem" : undefined}
              />
              {errors.mensagem && (
                <p className={styles.error} id="erro-mensagem">
                  {errors.mensagem}
                </p>
              )}
            </div>

            <div className={styles.actions}>
              <button className="btn btn--solid" type="submit">
                Enviar mensagem
                <ArrowIcon size={15} />
              </button>
              <p className={styles.hint} role="status" aria-live="polite">
                <AnimatePresence mode="wait">
                  {sent ? (
                    <motion.span
                      key="ok"
                      className={styles.success}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.35 }}
                    >
                      Mensagem enviada! Nossa equipe entrará em contato.
                    </motion.span>
                  ) : (
                    <motion.span key="idle" exit={{ opacity: 0 }}>
                      Seus dados são usados apenas para este atendimento.
                    </motion.span>
                  )}
                </AnimatePresence>
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
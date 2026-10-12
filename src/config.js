/* ============================================================
   Dados globais da clínica — trocar aqui
   ============================================================ */

export const BRAND = {
  name: "Lumine Odontologia",
  short: "Lumine",
  city: "Criciúma, SC",
};

/* Número fictício do WhatsApp (somente dígitos, com DDI e DDD) */
export const WHATSAPP_NUMBER = "5548999999999";

export const WHATSAPP_MESSAGE =
  "Olá! Gostaria de agendar uma avaliação";

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const CONTACT = {
  address: "Rua das Acácias, 245 — Centro",
  city: "Criciúma — SC, 88801-000",
  phoneLabel: "(48) 99999-9999",
  phoneHref: "tel:+5548999999999",
  email: "contato@lumineodontologia.com.br",
  hours: [
    { label: "Segunda a sexta", value: "08h às 19h" },
    { label: "Sábado", value: "08h às 12h" },
    { label: "Domingo", value: "Fechado" },
  ],
};

export const NAV_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Implantes", href: "#implantes" },
  { label: "Preços", href: "#precos" },
  { label: "Prevenção", href: "#prevencao" },
];

export const AWARD_LABEL = "Melhor Odontologia";
export const AWARD_YEAR = "2026";
export const HERO_TECH_LABEL = "Tecnologia Odontológica Avançada";
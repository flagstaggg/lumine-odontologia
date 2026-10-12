/* oxlint-disable react/only-export-components -- módulo de dados (traçados SVG), não de componentes */
/* Traçados (path data) dos ícones de linha usados nas seções e no rodapé. */

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export const SERVICE_ICONS = {
  sparkle: (
    <>
      <path d="M12 3.5l1.7 4.3 4.3 1.7-4.3 1.7L12 15.5l-1.7-4.3L6 9.5l4.3-1.7L12 3.5Z" {...stroke} />
      <path d="M18 14.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1Z" {...stroke} />
    </>
  ),
  drop: (
    <>
      <path d="M12 3.5c3 3.6 5 6.4 5 9a5 5 0 0 1-10 0c0-2.6 2-5.4 5-9Z" {...stroke} />
      <path d="M9.6 13.2a2.6 2.6 0 0 0 2.4 2.4" {...stroke} />
    </>
  ),
  align: (
    <>
      <path d="M5 4.5h14M5 19.5h14" {...stroke} />
      <path d="M9 4.5v6M15 4.5v6" {...stroke} />
      <path d="M7.5 13h9v3.5a1.8 1.8 0 0 1-1.8 1.8H9.3a1.8 1.8 0 0 1-1.8-1.8V13Z" {...stroke} />
      <path d="M9.5 13v1.8M12 13v1.8M14.5 13v1.8" {...stroke} />
    </>
  ),
  lens: (
    <>
      <path d="M12 20.5c-2.2-1.9-3.4-4.3-3.4-6.7A3.6 3.6 0 0 1 12 10.2a3.6 3.6 0 0 1 3.4 3.6c0 2.4-1.2 4.8-3.4 6.7Z" {...stroke} />
      <path d="M3.8 12.6c2.1-2.4 5-3.6 8.2-3.6s6.1 1.2 8.2 3.6" {...stroke} />
      <path d="M5.4 8.1C7.7 6.3 9.9 5.4 12 5.4s4.3.9 6.6 2.7" {...stroke} />
    </>
  ),
  implant: (
    <>
      <path d="M9.4 4.2h5.2c1.2 0 2.1.9 2.1 2.1 0 1.5-1 2.4-2.1 2.6v1.3h-5.2V8.9c-1.1-.2-2.1-1.1-2.1-2.6 0-1.2.9-2.1 2.1-2.1Z" {...stroke} />
      <path d="M9.6 11.4h4.8v6.4H9.6z" {...stroke} />
      <path d="M9.6 13.8h4.8M9.6 16.2h4.8" {...stroke} />
      <path d="m10.6 19.6 1.4 2.2 1.4-2.2" {...stroke} />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.6 5.5 6v5.2c0 4 2.8 7.5 6.5 8.6 3.7-1.1 6.5-4.6 6.5-8.6V6L12 3.6Z" {...stroke} />
      <path d="m9.2 11.8 2 2 3.6-3.9" {...stroke} />
    </>
  ),
};

export const PREVENTION_ICONS = {
  brush: (
    <>
      <rect x="7.5" y="9.5" width="9" height="10" rx="2.6" {...stroke} />
      <path d="M12 9.5V4.8M9.6 4.8h4.8" {...stroke} />
      <path d="M10.2 13.2v2.6M12 13.2v2.6M13.8 13.2v2.6" {...stroke} />
    </>
  ),
  floss: (
    <>
      <rect x="4.6" y="8.5" width="5.4" height="7" rx="1.8" {...stroke} />
      <rect x="14" y="8.5" width="5.4" height="7" rx="1.8" {...stroke} />
      <path d="M10 11.2c1.2.6 2.8.6 4 0" {...stroke} />
    </>
  ),
  water: (
    <>
      <path d="M12 3.6c3 3.7 5 6.4 5 9a5 5 0 0 1-10 0c0-2.6 2-5.3 5-9Z" {...stroke} />
      <path d="M9.8 13a2.3 2.3 0 0 0 2.2 2.2" {...stroke} />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="7.4" {...stroke} />
      <path d="M12 8v4.3l2.8 1.6" {...stroke} />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" {...stroke} />
      <path d="M12 4.2v2M12 17.8v2M4.2 12h2M17.8 12h2M6.6 6.6l1.4 1.4M16 16l1.4 1.4M17.4 6.6 16 8M8 16l-1.4 1.4" {...stroke} />
    </>
  ),
};

export const SOCIAL_ICONS = {
  instagram: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5" {...stroke} />
      <circle cx="12" cy="12" r="4" {...stroke} />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </>
  ),
  facebook: (
    <path
      d="M13.6 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.5-1.4h1.4V4.5c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v2.3H8.6V13h2.5v7h2.5Z"
      fill="currentColor"
    />
  ),
  linkedin: (
    <path
      d="M7 9.6v9M7 6.4v.2M11 18.6v-9M11 13.2c0-1.8 1.1-3.2 2.8-3.2s2.7 1.3 2.7 3.4v5.2"
      {...stroke}
    />
  ),
  whatsapp: (
    <path
      d="M12 4.2c-4.3 0-7.8 3.5-7.8 7.8 0 1.4.4 2.7 1 3.8L4.2 20l4.3-1.1c1.1.6 2.3.9 3.5.9 4.3 0 7.8-3.5 7.8-7.8S16.3 4.2 12 4.2Zm4.4 10.6c-.2.5-1.1 1-1.6 1-.4 0-1 .1-3-.9-2.5-1.3-3.3-3.7-3.4-3.9-.1-.2-.6-1.1-.4-1.9.2-.8.7-1.1 1-1.2.3-.1.6-.1.8 0 .2.1.5.6.6.8.2.3.2.5.1.7l-.3.4c-.1.2-.2.3-.1.5.1.3.5.8 1.1 1.3.8.7 1.4.9 1.6 1 .2.1.4.1.5-.1l.7-.8c.2-.2.3-.2.5-.1l1.3.7c.2.1.3.2.3.3.1.1.1.5-.1 1Z"
      fill="currentColor"
    />
  ),
};

export const ICON_STROKE = stroke;
import {
  ICON_STROKE as stroke,
  PREVENTION_ICONS,
  SERVICE_ICONS,
  SOCIAL_ICONS,
} from "../data/icons.jsx";

const SIZES = {
  service: { width: 28, height: 28 },
  social: { width: 18, height: 18 },
};

export function ServiceIcon({ name, size = "service" }) {
  const dims = SIZES[size] || SIZES.service;
  return (
    <svg
      viewBox="0 0 24 24"
      width={dims.width}
      height={dims.height}
      aria-hidden="true"
      focusable="false"
    >
      {SERVICE_ICONS[name]}
    </svg>
  );
}

export function PreventionIcon({ name, size = 24 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      {PREVENTION_ICONS[name]}
    </svg>
  );
}

export function SocialIcon({ name, size = 18 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      {SOCIAL_ICONS[name]}
    </svg>
  );
}

export function ArrowIcon({ size = 16, direction = "right" }) {
  const rotate = { right: 0, left: 180, up: -90, down: 90 }[direction] ?? 0;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path d="M4 12h15M13.5 6.5 19 12l-5.5 5.5" {...stroke} />
    </svg>
  );
}

export function StarIcon({ size = 14 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.8l5.9-.8L12 3.6Z"
        fill="currentColor"
      />
    </svg>
  );
}
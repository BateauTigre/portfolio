import type { SVGProps } from "react";

/** Icônes faites main : trait 1,75 px, coins ronds, couleur du texte. */
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SunriseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 18h18" />
      <path d="M7 18a5 5 0 0 1 10 0" />
      <path d="M12 4v4M9.5 6.5 12 4l2.5 2.5" />
      <path d="M4.2 11.8 5.6 13M19.8 11.8 18.4 13" />
      <path d="M6 21h12" />
    </Base>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
    </Base>
  );
}

export function SunsetIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 18h18" />
      <path d="M7 18a5 5 0 0 1 10 0" />
      <path d="M12 3.5v4.5M9.5 5.5 12 8l2.5-2.5" />
      <path d="M4.2 11.8 5.6 13M19.8 11.8 18.4 13" />
      <path d="M6 21h12" />
    </Base>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.5 6.5 0 0 0 10 10Z" />
    </Base>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </Base>
  );
}

/** Pour GitHub : un symbole de code générique (pas de logo de marque). */
export function CodeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15" />
    </Base>
  );
}

/** Pour LinkedIn : un symbole « profil pro » générique. */
export function ProfileIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="9" cy="10.5" r="2.25" />
      <path d="M5.5 16.5a3.5 3.5 0 0 1 7 0M15 9.5h3M15 13h3" />
    </Base>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5" />
      <path d="M5 19.5h14" />
    </Base>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 8c2.7-1.6 5.3-1.6 8 0s5.3 1.6 8 0" />
      <path d="M4 15c2.7-1.6 5.3-1.6 8 0s5.3 1.6 8 0" />
    </Base>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Base>
  );
}

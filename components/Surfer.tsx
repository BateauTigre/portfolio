/**
 * Silhouette de surfeur dessinée à la main (planche + surfeur accroupi).
 * Elle prend la couleur du texte (currentColor).
 */
export function Surfer({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 56" aria-hidden="true" focusable="false">
      <path d="M4 47 Q30 40 61 43 Q36 51 4 47 Z" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M35 18 L30 31" />
        <path d="M34 21 L21 18" />
        <path d="M34 21 L47 26" />
        <path d="M30 31 L39 37 L43 44" />
        <path d="M30 31 L24 38 L21 45" />
      </g>
      <circle cx="37" cy="12" r="4.5" fill="currentColor" />
    </svg>
  );
}

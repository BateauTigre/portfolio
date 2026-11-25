/**
 * Surfeur dessiné à la main : planche de la couleur du soleil de l'ambiance,
 * silhouette en position basse, gerbe d'écume derrière la planche.
 * Les couleurs viennent du CSS (.surfer__*), donc elles suivent l'ambiance.
 */
export function Surfer({ className }: { className?: string }) {
  return (
    <svg className={`surfer ${className ?? ""}`} viewBox="0 0 120 90" aria-hidden="true" focusable="false">
      {/* gerbe d'écume */}
      <g className="surfer__spray">
        <path d="M14 70 C6 62 6 50 14 42" />
        <path d="M22 66 C16 58 17 50 23 45" />
        <circle cx="6" cy="40" r="2.2" />
        <circle cx="12" cy="33" r="1.6" />
        <circle cx="20" cy="38" r="1.3" />
      </g>

      {/* planche + dérive + latte */}
      <path className="surfer__fin" d="M28 73 L23 83 L35 74 Z" />
      <path className="surfer__board" d="M10 72 C34 63 82 58 117 61 C98 70 52 79 10 72 Z" />
      <path className="surfer__stringer" d="M18 71 C46 66 84 63 108 62.5" />

      {/* surfeur */}
      <g className="surfer__body">
        <path d="M48 67 L51 52 L60 44" strokeWidth="6.5" />
        <path d="M79 61 L75 49 L60 44" strokeWidth="6.5" />
        <path d="M60 44 C63 37 67 32 71 29" strokeWidth="9" />
        <path d="M69 31 L84 34 L95 41" strokeWidth="5" />
        <path d="M68 31 L56 25 L45 28" strokeWidth="5" />
        <circle cx="76" cy="20" r="6.2" stroke="none" />
        <path d="M71 16 C67 13 63 14 60 17" strokeWidth="3" />
      </g>
    </svg>
  );
}

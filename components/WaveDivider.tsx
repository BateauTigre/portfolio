import { Surfer } from "./Surfer";

/* Trois lignes de houle entre deux sections. Calculées une fois. */
function swell(y: number, amp: number, periods: number) {
  const step = 1200 / (periods * 2);
  let d = `M0 ${y}`;
  for (let i = 0; i < periods * 2; i++) {
    const x = step * (i + 1);
    d += ` Q${x - step / 2} ${i % 2 === 0 ? y - amp : y + amp} ${x} ${y}`;
  }
  return d;
}

const LINES = [swell(22, 10, 5), swell(42, 8, 7), swell(58, 5, 10)];

/** Séparateur en vagues entre deux sections, avec parfois un surfeur sur la houle. */
export function WaveDivider({ surfer = false, flip = false }: { surfer?: boolean; flip?: boolean }) {
  return (
    <div className={`divider${flip ? " divider--flip" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 1200 70" preserveAspectRatio="none">
        {LINES.map((d, i) => (
          <path key={i} d={d} className={`divider__line divider__line--${i + 1}`} />
        ))}
      </svg>
      {surfer ? <Surfer className="divider__surfer" /> : null}
    </div>
  );
}

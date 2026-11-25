import { Surfer } from "./Surfer";

/* Une ligne de houle sur 2400 unités (2 × 1200) : décalée de -50 %, elle boucle sans raccord. */
function swell(y: number, amp: number, periods: number) {
  const step = 1200 / (periods * 2);
  let d = `M0 ${y}`;
  for (let i = 0; i < periods * 4; i++) {
    const x = step * (i + 1);
    d += ` Q${x - step / 2} ${i % 2 === 0 ? y - amp : y + amp} ${x} ${y}`;
  }
  return d;
}

const LINES = [swell(22, 10, 5), swell(42, 8, 7), swell(58, 5, 10)];

/** Séparateur entre deux sections : trois lignes de houle qui avancent, parfois un surfeur dessus. */
export function WaveDivider({ surfer = false, flip = false }: { surfer?: boolean; flip?: boolean }) {
  return (
    <div className={`divider${flip ? " divider--flip" : ""}`} aria-hidden="true">
      <div className="divider__waves">
        {LINES.map((d, i) => (
          <div key={i} className={`divider__swell divider__swell--${i + 1}`}>
            <svg viewBox="0 0 2400 70" preserveAspectRatio="none">
              <path d={d} />
            </svg>
          </div>
        ))}
      </div>
      {surfer ? (
        <div className="divider__surfer">
          <Surfer />
        </div>
      ) : null}
    </div>
  );
}

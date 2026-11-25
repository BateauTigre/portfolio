import { themes } from "@/lib/theme";

/**
 * Le décor animé du haut de page : ciel, soleil ou lune, étoiles, mer et vagues.
 * Rien d'interactif ici : tout est piloté en CSS par <html data-theme>.
 * Pour que le fondu ne touche que l'opacité, chaque ambiance a son propre ciel
 * et sa propre mer, superposés ; seul celui de l'ambiance active est visible.
 */

/* Une vague sinusoïdale sur 2880 unités (2 × 1440) : en la décalant de -50 %,
   elle boucle sans raccord visible. Calculée une seule fois au chargement du module. */
function wavePath(amplitude: number, periods: number) {
  const width = 2880;
  const mid = amplitude + 2;
  const step = width / (periods * 2);
  let d = `M0 ${mid}`;
  for (let i = 0; i < periods * 2; i++) {
    const x = step * (i + 1);
    const cx = x - step / 2;
    const cy = i % 2 === 0 ? mid - amplitude : mid + amplitude;
    d += ` Q${cx} ${cy} ${x} ${mid}`;
  }
  return `${d} V100 H0 Z`;
}

const WAVES = {
  far: wavePath(5, 12),
  mid: wavePath(10, 6),
  near: wavePath(16, 4),
  shore: wavePath(12, 3),
};

/* Étoiles placées une fois pour toutes (générateur pseudo-aléatoire fixe,
   donc identiques côté serveur et navigateur). */
function makeStars(count: number) {
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const stars: { left: number; top: number; size: number; delay: number }[] = [];
  while (stars.length < count) {
    const left = Math.round(rand() * 1000) / 10;
    const top = Math.round(rand() * 560) / 10;
    // pas d'étoile derrière le texte de l'accueil (elles ressembleraient à des points parasites)
    if (left > 8 && left < 92 && top > 14 && top < 50) continue;
    stars.push({ left, top, size: rand() > 0.85 ? 3 : 2, delay: Math.round(rand() * 60) / 10 });
  }
  return stars;
}

const STARS = makeStars(48);

function Wave({ d, className }: { d: string; className: string }) {
  return (
    <div className={`wave ${className}`}>
      <svg viewBox="0 0 2880 100" preserveAspectRatio="none" width="100%" height="100%">
        <path d={d} />
      </svg>
    </div>
  );
}

export function Horizon() {
  return (
    <div className="horizon" aria-hidden="true">
      {themes.map((t) => (
        <div key={t} className={`sky t-${t}`} data-scene={t} />
      ))}

      <div className="stars">
        {STARS.map((s, i) => (
          <span
            key={i}
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Le soleil : la position horizontale et la hauteur bougent séparément,
          avec deux courbes différentes, ce qui dessine un arc. */}
      <div className="orbit orbit--sun">
        <div className="orbit-y">
          <div className="sun">
            <span className="sun-disc t-lever" data-scene="lever" />
            <span className="sun-disc t-midi" data-scene="midi" />
            <span className="sun-disc t-coucher" data-scene="coucher" />
          </div>
        </div>
      </div>

      <div className="orbit orbit--moon">
        <div className="orbit-y">
          <div className="moon" />
        </div>
      </div>

      {/* Mer de fond opaque : pendant le fondu entre deux ambiances, elle cache ce qui est sous l'eau */}
      <div className="sea-base" />

      {themes.map((t) => (
        <div key={t} className={`sea t-${t}`} data-scene={t}>
          <Wave d={WAVES.far} className="wave--far" />
          <Wave d={WAVES.mid} className="wave--mid" />
          <Wave d={WAVES.near} className="wave--near" />
        </div>
      ))}

      {/* Reflet du soleil (ou de la lune) sur l'eau */}
      <div className="orbit orbit--glint">
        <div className="glint">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Le bord de plage : une vague de la couleur de la page */}
      <Wave d={WAVES.shore} className="wave--shore" />
    </div>
  );
}

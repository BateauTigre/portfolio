import type { Dictionary } from "@/content/site";
import { Horizon } from "./Horizon";

export function Hero({ name, hero }: { name: string; hero: Dictionary["hero"] }) {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <Horizon />
      <div className="hero__content container">
        <h1 id="hero-title" className="hero__title">
          {name}
        </h1>
        <p className="hero__role">{hero.role}</p>
        <p className="hero__lead">{hero.lead}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#projects">
            {hero.ctaProjects}
          </a>
          <a className="btn btn--secondary" href="#cv">
            {hero.ctaCv}
          </a>
        </div>
      </div>
    </section>
  );
}

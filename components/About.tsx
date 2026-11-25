import type { Dictionary } from "@/content/site";

export function About({ about }: { about: Dictionary["about"] }) {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container about">
        <div className="about__text">
          <h2 id="about-title" className="section__title">
            {about.title}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "lead" : undefined}>
              {p}
            </p>
          ))}
        </div>

        <aside className="facts surface" aria-labelledby="facts-title">
          <h3 id="facts-title" className="facts__title">
            {about.factsTitle}
          </h3>
          <dl className="facts__list">
            {about.facts.map((f) => (
              <div key={f.label} className="facts__row">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

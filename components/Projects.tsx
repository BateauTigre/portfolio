import Image from "next/image";
import type { Dictionary, Project } from "@/content/site";

type ProjectsProps = { projects: Dictionary["projects"]; newTab: string };

/* Petite vague de la couverture, calculée une fois. */
const COVER_WAVE =
  "M0 30 Q50 18 100 30 T200 30 T300 30 T400 30 T500 30 T600 30 V60 H0 Z";

/* Position du petit soleil sur chaque couverture, pour qu'elles ne soient pas toutes identiques. */
const SUN_SPOTS = [18, 72, 40, 84, 28, 60, 50, 50];

function Cover({ project, index }: { project: Project; index: number }) {
  if (project.image) {
    return (
      <div className="cover cover--image">
        <Image
          src={project.image}
          alt=""
          fill
          sizes="(min-width: 900px) 420px, 100vw"
          className="cover__img"
        />
      </div>
    );
  }

  const secret = project.status === "secret";
  return (
    <div className={`cover${secret ? " cover--secret" : ""}`} aria-hidden="true">
      <div className="cover__scene">
        <span className="cover__sun" style={{ left: `${SUN_SPOTS[index % SUN_SPOTS.length]}%` }} />
        <svg className="cover__wave" viewBox="0 0 600 60" preserveAspectRatio="none">
          <path d={COVER_WAVE} />
        </svg>
      </div>
      <span className="cover__name">{secret ? "?" : project.name}</span>
    </div>
  );
}

function ExternalLink({ href, label, newTab }: { href: string; label: string; newTab: string }) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {label}
      <span className="visually-hidden"> {newTab}</span>
    </a>
  );
}

export function Projects({ projects, newTab }: ProjectsProps) {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className="section__title">
          {projects.title}
        </h2>
        <p className="lead section__lead">{projects.lead}</p>

        <ol className="projects">
          {projects.items.map((p, i) => {
            const secret = p.status === "secret";
            return (
              <li key={p.slug} className={`project${secret ? " project--secret" : ""}`}>
                <span className="project__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="project__body">
                  <h3 className="project__name">
                    {secret ? (
                      <span className="glitch" data-text={p.name}>
                        {p.name}
                      </span>
                    ) : (
                      p.name
                    )}
                    {p.status ? <span className="badge">{projects.badges[p.status]}</span> : null}
                  </h3>

                  {secret ? (
                    <p className="project__desc">{projects.secretLine}</p>
                  ) : (
                    <p className="project__desc">{p.description}</p>
                  )}

                  {p.stack.length > 0 ? (
                    <ul className="tags" aria-label="Stack">
                      {p.stack.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  ) : null}

                  {p.links.length > 0 ? (
                    <p className="project__links">
                      {p.links.map((l) => (
                        <ExternalLink key={l.href + l.label} href={l.href} label={l.label} newTab={newTab} />
                      ))}
                    </p>
                  ) : secret ? null : (
                    <p className="project__note">{projects.noLink}</p>
                  )}

                  {p.note ? <p className="project__note">{p.note}</p> : null}
                </div>

                <Cover project={p} index={i} />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

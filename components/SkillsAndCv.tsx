import Image from "next/image";
import type { Dictionary, Locale } from "@/content/site";
import { profile } from "@/content/site";
import { DownloadIcon } from "./icons";

type Props = { locale: Locale; skills: Dictionary["skills"]; cv: Dictionary["cv"] };

/** Compétences (groupées) à gauche, CV (aperçu + téléchargement) à droite. */
export function SkillsAndCv({ locale, skills, cv }: Props) {
  const files = profile.cv[locale];
  const fileName = files.pdf.split("/").pop();

  return (
    <div className="container split">
      <section className="split__col" id="skills" aria-labelledby="skills-title">
        <h2 id="skills-title" className="section__title">
          {skills.title}
        </h2>
        <dl className="skills">
          {skills.groups.map((g) => (
            <div key={g.name} className="skills__group">
              <dt>{g.name}</dt>
              <dd>
                <ul className="tags tags--lg">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="split__col" id="cv" aria-labelledby="cv-title">
        <h2 id="cv-title" className="section__title">
          {cv.title}
        </h2>
        <p className="section__lead">{cv.lead}</p>
        <a className="cv-card surface" href={files.pdf} download={fileName}>
          <Image
            src={files.preview}
            alt={cv.previewAlt}
            width={480}
            height={679}
            sizes="(min-width: 900px) 360px, 80vw"
            className="cv-card__img"
          />
          <span className="btn btn--primary cv-card__btn">
            <DownloadIcon />
            {cv.download}
          </span>
        </a>
      </section>
    </div>
  );
}

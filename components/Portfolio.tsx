import { dictionaries, profile, type Locale } from "@/content/site";
import { About } from "./About";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Nav } from "./Nav";
import { Projects } from "./Projects";
import { SkillsAndCv } from "./SkillsAndCv";
import { WaveDivider } from "./WaveDivider";

const YEAR = new Date().getFullYear();

/** La page entière. Seuls la navigation, le sélecteur d'ambiance et le formulaire tournent côté navigateur. */
export function Portfolio({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];

  return (
    <>
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      <Nav locale={locale} name={profile.name} nav={t.nav} a11y={t.a11y} themes={t.themes} />
      <main id="main">
        <Hero name={profile.name} hero={t.hero} />
        <About about={t.about} />
        <WaveDivider />
        <Projects projects={t.projects} newTab={t.a11y.newTab} />
        <WaveDivider />
        <div className="section">
          <SkillsAndCv locale={locale} skills={t.skills} cv={t.cv} />
        </div>
        <WaveDivider flip />
        <Contact contact={t.contact} newTab={t.a11y.newTab} />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <p className="footer__name">{profile.name}</p>
          <p className="footer__made">{t.footer.made}</p>
          <p className="footer__links">
            <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub<span className="visually-hidden"> {t.a11y.newTab}</span>
            </a>
            <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn<span className="visually-hidden"> {t.a11y.newTab}</span>
            </a>
            <span>© {YEAR}</span>
          </p>
        </div>
      </footer>
    </>
  );
}

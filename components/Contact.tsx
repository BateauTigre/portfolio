import type { Dictionary } from "@/content/site";
import { profile } from "@/content/site";
import { ContactForm } from "./ContactForm";
import { CodeIcon, MailIcon, ProfileIcon } from "./icons";

export function Contact({ contact, newTab }: { contact: Dictionary["contact"]; newTab: string }) {
  const links = [
    { icon: MailIcon, label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, external: false },
    { icon: CodeIcon, label: "GitHub", value: "BateauTigre", href: profile.github, external: true },
    { icon: ProfileIcon, label: "LinkedIn", value: "arthurgoubill", href: profile.linkedin, external: true },
  ];

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container split">
        <div className="split__col">
          <h2 id="contact-title" className="section__title">
            {contact.title}
          </h2>
          <p className="lead section__lead">{contact.lead}</p>
          <h3 className="contact__subtitle">{contact.linksTitle}</h3>
          <ul className="contact-links">
            {links.map(({ icon: Icon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon />
                  <span>
                    <span className="contact-links__label">{label}</span>
                    <span className="contact-links__value">{value}</span>
                  </span>
                  {external ? <span className="visually-hidden"> {newTab}</span> : null}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="split__col">
          <ContactForm t={contact.form} email={profile.email} />
        </div>
      </div>
    </section>
  );
}

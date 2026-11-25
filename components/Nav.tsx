"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Dictionary, Locale } from "@/content/site";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { CloseIcon, MenuIcon } from "./icons";

type NavProps = {
  locale: Locale;
  name: string;
  nav: Dictionary["nav"];
  a11y: Dictionary["a11y"];
  themes: Dictionary["themes"];
};

export function Nav({ locale, name, nav, a11y, themes }: NavProps) {
  const [open, setOpen] = useState(false);

  // Échap referme le menu mobile
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);
  const links = [
    { href: "#about", label: nav.about },
    { href: "#projects", label: nav.projects },
    { href: "#skills", label: nav.skills },
    { href: "#cv", label: nav.cv },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="site-header">
      <nav className="nav container" aria-label={a11y.nav}>
        <a className="nav__brand" href="#top" onClick={close}>
          {name}
        </a>

        <button
          type="button"
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
          <span>{open ? a11y.menuClose : a11y.menuOpen}</span>
        </button>

        <div id="nav-panel" className="nav__panel" data-open={open}>
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav__tools">
            <div className="lang-switch" role="group" aria-label={a11y.language}>
              <Link href="/fr" hrefLang="fr" lang="fr" aria-current={locale === "fr" ? "page" : undefined}>
                FR
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/en" hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined}>
                EN
              </Link>
            </div>
            <ThemeSwitcher labels={themes} groupLabel={a11y.theme} />
          </div>
        </div>
      </nav>
    </header>
  );
}

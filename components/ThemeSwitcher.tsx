"use client";

import { useSyncExternalStore } from "react";
import { themes, THEME_STORAGE_KEY, type Theme } from "@/lib/theme";
import type { ThemeLabels } from "@/content/site";
import { MoonIcon, SunIcon, SunriseIcon, SunsetIcon } from "./icons";

const EVENT = "ambiance-change";

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

function getSnapshot() {
  return (document.documentElement.dataset.theme as Theme | undefined) ?? null;
}

/* Côté serveur on ne connaît pas l'heure du visiteur : aucun bouton n'est
   marqué actif, puis React met à jour juste après l'hydratation. */
function getServerSnapshot() {
  return null;
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    /* navigation privée ou stockage bloqué : le choix vaut pour cette visite */
  }
  window.dispatchEvent(new Event(EVENT));
}

const ICONS: Record<Theme, typeof SunIcon> = {
  lever: SunriseIcon,
  midi: SunIcon,
  coucher: SunsetIcon,
  nuit: MoonIcon,
};

export function ThemeSwitcher({ labels, groupLabel }: { labels: ThemeLabels; groupLabel: string }) {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <div className="theme-switcher" role="group" aria-label={groupLabel}>
      {themes.map((t) => {
        const Icon = ICONS[t];
        return (
          <button
            key={t}
            type="button"
            className="theme-switcher__btn"
            aria-label={labels[t]}
            title={labels[t]}
            aria-pressed={current === t}
            onClick={() => applyTheme(t)}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
}

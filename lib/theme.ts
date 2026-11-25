/**
 * Les 4 ambiances du site. L'ambiance est écrite dans <html data-theme="...">,
 * et tout le CSS lit cet attribut.
 */

export const themes = ["lever", "midi", "coucher", "nuit"] as const;
export type Theme = (typeof themes)[number];

/** Clé versionnée dans le localStorage (on peut la changer sans casser les anciens choix). */
export const THEME_STORAGE_KEY = "portfolio:ambiance:v1";

/**
 * Script lancé dans le <head> avant l'affichage : il choisit l'ambiance
 * (choix enregistré, sinon selon l'heure du visiteur) pour éviter tout flash.
 * 6 h–10 h lever, 10 h–17 h plein soleil, 17 h–21 h coucher, sinon nuit.
 */
export const themeInitScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(["lever","midi","coucher","nuit"].indexOf(t)<0){var h=new Date().getHours();t=h>=6&&h<10?"lever":h>=10&&h<17?"midi":h>=17&&h<21?"coucher":"nuit";}d.dataset.theme=t;}catch(e){d.dataset.theme="midi";}})();`;

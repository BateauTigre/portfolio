/**
 * TOUT LE CONTENU DU SITE EST ICI.
 * Change les textes, les liens et les projets dans ce fichier : les composants
 * n'ont pas de texte en dur. Chaque texte existe en français (fr) et en anglais (en).
 */

export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/* ---------- Infos qui ne changent pas selon la langue ---------- */

export const profile = {
  name: "Arthur Goubill",
  email: "goubill.arthur@gmail.com",
  github: "https://github.com/BateauTigre",
  linkedin: "https://www.linkedin.com/in/arthurgoubill",
  cv: {
    fr: { pdf: "/cv/arthur-goubill-cv-fr.pdf", preview: "/cv/cv-fr.webp" },
    en: { pdf: "/cv/arthur-goubill-cv-en.pdf", preview: "/cv/cv-en.webp" },
  },
};

/* ---------- Types ---------- */

export type ProjectLink = { label: string; href: string };

export type Project = {
  /** identifiant court, sert aussi pour le nom de la capture */
  slug: string;
  name: string;
  description: string;
  stack: string[];
  /** "soon" = bientôt, "wip" = en cours, "secret" = carte mystère */
  status?: "soon" | "wip" | "secret";
  links: ProjectLink[];
  /** petite précision affichée sous les liens (ex. dépôt privé) */
  note?: string;
  /**
   * Capture du projet. Mets ton image dans public/projets/ (WebP, 1600×1000)
   * puis écris son chemin ici, par exemple "/projets/foulee.webp".
   * Tant qu'il n'y a pas d'image, une couverture « horizon » est dessinée.
   */
  image?: string;
};

export type ThemeLabels = { lever: string; midi: string; coucher: string; nuit: string };

export type Dictionary = {
  meta: { title: string; description: string };
  a11y: {
    skip: string;
    nav: string;
    menuOpen: string;
    menuClose: string;
    theme: string;
    language: string;
    newTab: string;
  };
  themes: ThemeLabels;
  nav: { about: string; projects: string; skills: string; cv: string; contact: string };
  hero: { role: string; lead: string; ctaProjects: string; ctaCv: string };
  about: {
    title: string;
    paragraphs: string[];
    factsTitle: string;
    facts: { label: string; value: string }[];
  };
  projects: {
    title: string;
    lead: string;
    badges: { soon: string; wip: string; secret: string };
    noLink: string;
    secretLine: string;
    items: Project[];
  };
  skills: { title: string; groups: { name: string; items: string[] }[] };
  cv: { title: string; lead: string; download: string; previewAlt: string };
  contact: {
    title: string;
    lead: string;
    linksTitle: string;
    form: {
      title: string;
      name: string;
      email: string;
      message: string;
      messageHelp: string;
      submit: string;
      sending: string;
      success: string;
      mailto: string;
      error: string;
      errName: string;
      errEmail: string;
      errMessage: string;
      subject: string;
    };
  };
  footer: { made: string };
};

/* ---------- Français ---------- */

const fr: Dictionary = {
  meta: {
    title: "Arthur Goubill · Étudiant en BUT Informatique, développeur web",
    description:
      "Portfolio d'Arthur Goubill, étudiant en BUT Informatique à Nantes : projets web, compétences, CV et contact.",
  },
  a11y: {
    skip: "Aller au contenu",
    nav: "Navigation principale",
    menuOpen: "Menu",
    menuClose: "Fermer",
    theme: "Ambiance du site",
    language: "Langue",
    newTab: "(s'ouvre dans un nouvel onglet)",
  },
  themes: {
    lever: "Lever de soleil",
    midi: "Plein soleil",
    coucher: "Coucher de soleil",
    nuit: "Nuit",
  },
  nav: { about: "À propos", projects: "Projets", skills: "Compétences", cv: "CV", contact: "Contact" },
  hero: {
    role: "Étudiant en BUT Informatique · Développeur web",
    lead: "Je construis des sites et des applis web à Nantes, entre deux sessions de surf.",
    ctaProjects: "Voir mes projets",
    ctaCv: "Mon CV",
  },
  about: {
    title: "À propos",
    paragraphs: [
      "Je suis Arthur, étudiant en 2e année de BUT Informatique à l'IUT de Nantes. Je suis arrivé au code par les jeux vidéo, et aujourd'hui je fais surtout du développement web : des sites et des applis que j'utilise moi-même, ou que ma promo utilise.",
      "J'apprends le plus en construisant mes propres projets, de l'idée jusqu'à la mise en ligne. À terme, j'aimerais créer des jeux, et j'ai déjà commencé sur Roblox.",
      "Quand je ne code pas, je suis souvent dans l'eau : je surfe, je nage, je cours aussi, et je me mets au triathlon. J'ai voyagé au Portugal, à Tenerife, en Angleterre et en Allemagne.",
    ],
    factsTitle: "En bref",
    facts: [
      { label: "Ville", value: "Nantes" },
      { label: "Formation", value: "BUT Informatique, 2e année" },
      { label: "Langues", value: "Français, anglais B2, allemand scolaire" },
      { label: "Permis", value: "B, véhiculé" },
      { label: "Stack préférée", value: "Next.js, TypeScript, Supabase" },
      { label: "Sur l'eau", value: "Surf, natation" },
    ],
  },
  projects: {
    title: "Projets",
    lead: "Des projets perso et un projet de promo, du plus abouti au plus mystérieux.",
    badges: { soon: "Bientôt", wip: "En cours", secret: "Secret" },
    noLink: "Pas encore de lien public.",
    secretLine: "Projet secret · Bientôt",
    items: [
      {
        slug: "foulee",
        name: "Foulée",
        description:
          "Une appli de coaching course à pied. On importe son export Strava, l'appli prépare un plan d'entraînement adapté et envoie la séance du jour en notification chaque matin.",
        stack: ["Next.js", "TypeScript", "Supabase", "Web Push", "IA"],
        links: [{ label: "Voir le site", href: "https://foulee-xi.vercel.app" }],
        note: "Code dans un dépôt privé.",
      },
      {
        slug: "but-info",
        name: "BUT-INFO",
        description:
          "Le site de révision de ma promo : tous les cours du BUT au même endroit, lisibles sur PC comme sur téléphone. On l'a fait à quatre, et je me suis occupé du style.",
        stack: ["HTML", "CSS", "JavaScript", "Vercel"],
        links: [
          { label: "Voir le site", href: "https://butinfo-iutnantes.vercel.app" },
          { label: "Voir le code", href: "https://github.com/im-midnight/BUT-INFO" },
        ],
      },
      {
        slug: "memo-52",
        name: "Mémo 52",
        description:
          "Un jeu de mémoire : retenir l'ordre d'un paquet de 52 cartes, puis le retrouver carte par carte. Inscription par pseudo, scores sauvegardés et classement.",
        stack: ["HTML", "CSS", "JavaScript", "Netlify"],
        links: [
          { label: "Jouer", href: "https://memo52.netlify.app/" },
          { label: "Voir le code", href: "https://github.com/BateauTigre/Memo52" },
        ],
      },
      {
        slug: "griboulade",
        name: "Griboulade",
        description:
          "Mon remake de Gartic Phone, le jeu où une phrase passe de dessin en dessin entre les joueurs jusqu'à devenir méconnaissable.",
        stack: ["JavaScript", "Cloudflare"],
        links: [{ label: "Voir le code", href: "https://github.com/BateauTigre/griboulade" }],
      },
      {
        slug: "carte-des-films",
        name: "Carte des films",
        description:
          "Une carte de 35 000 films placés selon leur ressemblance : les films proches se retrouvent côte à côte, et on se balade dedans pour trouver quoi regarder.",
        stack: ["Python", "UMAP", "HDBSCAN", "API TMDB", "Canvas"],
        status: "soon",
        links: [{ label: "Voir le dépôt", href: "https://github.com/BateauTigre/Carte-des-films" }],
      },
      {
        slug: "redesign-deezer",
        name: "Redesign Deezer",
        description:
          "Un thème « liquid glass » pour Deezer web, installé comme une appli : navigation plus claire, lecteur plus grand, plus de pubs ni de recommandations imposées.",
        stack: ["CSS", "JavaScript", "Tampermonkey"],
        links: [{ label: "Voir le code", href: "https://github.com/BateauTigre/deezer-liquid-glass" }],
      },
      {
        slug: "meteo",
        name: "Site météo",
        description: "Un site de prévisions météo.",
        stack: [],
        status: "wip",
        links: [],
      },
      {
        slug: "secret",
        name: "???",
        description: "",
        stack: ["Roblox"],
        status: "secret",
        links: [],
      },
    ],
  },
  skills: {
    title: "Compétences",
    groups: [
      { name: "Front", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
      { name: "Back et données", items: ["Supabase", "PostgreSQL", "Java / JPA", "Kotlin", "Python"] },
      { name: "Outils et mise en ligne", items: ["Git", "GitHub", "Vercel", "Cloudflare", "Netlify"] },
    ],
  },
  cv: {
    title: "Mon CV",
    lead: "Formation, projets et expériences sur une page.",
    download: "Télécharger le CV (PDF)",
    previewAlt: "Aperçu du CV d'Arthur Goubill",
  },
  contact: {
    title: "Contact",
    lead: "Une question, un stage à proposer ? Écrivez-moi, je réponds rapidement.",
    linksTitle: "Me retrouver",
    form: {
      title: "M'envoyer un message",
      name: "Votre nom",
      email: "Votre e-mail",
      message: "Votre message",
      messageHelp: "Quelques lignes suffisent.",
      submit: "Envoyer le message",
      sending: "Envoi en cours",
      success: "Message envoyé. Je vous réponds au plus vite.",
      mailto: "Votre logiciel de mail s'ouvre avec le message prêt à partir.",
      error: "Le message n'est pas parti. Réessayez, ou écrivez-moi à goubill.arthur@gmail.com.",
      errName: "Indiquez votre nom.",
      errEmail: "Indiquez une adresse e-mail valide, par exemple nom@domaine.fr.",
      errMessage: "Écrivez un message d'au moins 10 caractères.",
      subject: "Message depuis le portfolio",
    },
  },
  footer: { made: "Co-créé avec Claude." },
};

/* ---------- English ---------- */

const en: Dictionary = {
  meta: {
    title: "Arthur Goubill · Computer science student, web developer",
    description:
      "Portfolio of Arthur Goubill, computer science student in Nantes, France: web projects, skills, resume and contact.",
  },
  a11y: {
    skip: "Skip to content",
    nav: "Main navigation",
    menuOpen: "Menu",
    menuClose: "Close",
    theme: "Site mood",
    language: "Language",
    newTab: "(opens in a new tab)",
  },
  themes: { lever: "Sunrise", midi: "Midday sun", coucher: "Sunset", nuit: "Night" },
  nav: { about: "About", projects: "Projects", skills: "Skills", cv: "Resume", contact: "Contact" },
  hero: {
    role: "Computer science student · Web developer",
    lead: "I build websites and web apps in Nantes, France, between two surf sessions.",
    ctaProjects: "See my projects",
    ctaCv: "My resume",
  },
  about: {
    title: "About",
    paragraphs: [
      "I'm Arthur, a second-year computer science student (BUT Informatique) at the IUT de Nantes. Video games got me into code, and today I mostly do web development: sites and apps that I use myself, or that my classmates use.",
      "I learn the most by building my own projects, from the first idea to going live. Later on I'd like to make games, and I've already started on Roblox.",
      "When I'm not coding, I'm usually in the water: I surf, I swim, I also run, and I'm getting into triathlon. I've travelled to Portugal, Tenerife, England and Germany.",
    ],
    factsTitle: "At a glance",
    facts: [
      { label: "City", value: "Nantes, France" },
      { label: "Studies", value: "BUT Informatique, 2nd year" },
      { label: "Languages", value: "French, English B2, school German" },
      { label: "Driving licence", value: "Yes, with a car" },
      { label: "Favourite stack", value: "Next.js, TypeScript, Supabase" },
      { label: "In the water", value: "Surfing, swimming" },
    ],
  },
  projects: {
    title: "Projects",
    lead: "Personal projects and one class project, from the most finished to the most mysterious.",
    badges: { soon: "Coming soon", wip: "In progress", secret: "Secret" },
    noLink: "No public link yet.",
    secretLine: "Secret project · Coming soon",
    items: [
      {
        slug: "foulee",
        name: "Foulée",
        description:
          "A running coach app. You import your Strava export, the app builds a training plan that fits you and sends today's session as a notification every morning.",
        stack: ["Next.js", "TypeScript", "Supabase", "Web Push", "AI"],
        links: [{ label: "Visit the site", href: "https://foulee-xi.vercel.app" }],
        note: "Code in a private repository.",
      },
      {
        slug: "but-info",
        name: "BUT-INFO",
        description:
          "The revision site for my class: every course of the degree in one place, easy to read on a computer or a phone. Four of us built it, and I handled the design.",
        stack: ["HTML", "CSS", "JavaScript", "Vercel"],
        links: [
          { label: "Visit the site", href: "https://butinfo-iutnantes.vercel.app" },
          { label: "See the code", href: "https://github.com/im-midnight/BUT-INFO" },
        ],
      },
      {
        slug: "memo-52",
        name: "Mémo 52",
        description:
          "A memory game: learn the order of a 52-card deck, then find it again card by card. Sign up with a username, saved scores and a leaderboard.",
        stack: ["HTML", "CSS", "JavaScript", "Netlify"],
        links: [
          { label: "Play", href: "https://memo52.netlify.app/" },
          { label: "See the code", href: "https://github.com/BateauTigre/Memo52" },
        ],
      },
      {
        slug: "griboulade",
        name: "Griboulade",
        description:
          "My remake of Gartic Phone, the game where a sentence travels from drawing to drawing between players until nobody recognises it.",
        stack: ["JavaScript", "Cloudflare"],
        links: [{ label: "See the code", href: "https://github.com/BateauTigre/griboulade" }],
      },
      {
        slug: "carte-des-films",
        name: "Movie map",
        description:
          "A map of 35,000 movies placed by how similar they are: close movies end up side by side, and you wander around to find something to watch.",
        stack: ["Python", "UMAP", "HDBSCAN", "TMDB API", "Canvas"],
        status: "soon",
        links: [{ label: "See the repository", href: "https://github.com/BateauTigre/Carte-des-films" }],
      },
      {
        slug: "redesign-deezer",
        name: "Deezer redesign",
        description:
          "A \"liquid glass\" theme for Deezer on the web, installed like an app: clearer navigation, a bigger player, no more ads or forced recommendations.",
        stack: ["CSS", "JavaScript", "Tampermonkey"],
        links: [{ label: "See the code", href: "https://github.com/BateauTigre/deezer-liquid-glass" }],
      },
      {
        slug: "meteo",
        name: "Weather site",
        description: "A weather forecast website.",
        stack: [],
        status: "wip",
        links: [],
      },
      {
        slug: "secret",
        name: "???",
        description: "",
        stack: ["Roblox"],
        status: "secret",
        links: [],
      },
    ],
  },
  skills: {
    title: "Skills",
    groups: [
      { name: "Front end", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
      { name: "Back end and data", items: ["Supabase", "PostgreSQL", "Java / JPA", "Kotlin", "Python"] },
      { name: "Tools and hosting", items: ["Git", "GitHub", "Vercel", "Cloudflare", "Netlify"] },
    ],
  },
  cv: {
    title: "My resume",
    lead: "Education, projects and experience on one page.",
    download: "Download the resume (PDF)",
    previewAlt: "Preview of Arthur Goubill's resume",
  },
  contact: {
    title: "Contact",
    lead: "A question, an internship to offer? Write to me, I reply quickly.",
    linksTitle: "Find me",
    form: {
      title: "Send me a message",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      messageHelp: "A few lines are enough.",
      submit: "Send the message",
      sending: "Sending",
      success: "Message sent. I'll get back to you soon.",
      mailto: "Your email app opens with the message ready to send.",
      error: "The message didn't go through. Try again, or email me at goubill.arthur@gmail.com.",
      errName: "Enter your name.",
      errEmail: "Enter a valid email address, for example name@domain.com.",
      errMessage: "Write a message of at least 10 characters.",
      subject: "Message from the portfolio",
    },
  },
  footer: { made: "Co-made with Claude." },
};

export const dictionaries: Record<Locale, Dictionary> = { fr, en };

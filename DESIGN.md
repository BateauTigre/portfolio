# DESIGN.md — Portfolio Arthur Goubill (thème surf)

Portfolio de dev pour un recruteur de stage ou un prof. Une seule page qui défile, en FR et EN, sur PC et téléphone.

**Principe :** l'audace est dans un seul endroit, l'horizon animé du haut de page. Tout le reste est calme, lisible et rangé, pour qu'on trouve une info en quelques secondes.

> Direction choisie sans comparer de vrais sites (UXKIN n'est pas connecté). Elle part de ton brief et de l'inspiration hermes-agent.nousresearch.com pour la numérotation des projets.

---

## 1. Couleurs

Quatre ambiances. Chaque ambiance remplit les **mêmes rôles**. Les composants n'utilisent que les noms de rôle, jamais un hex.

| Rôle | Usage |
|---|---|
| `--bg` | fond de page |
| `--surface` | cartes, fiche technique, formulaire |
| `--ink` | titres et texte principal |
| `--muted` | texte secondaire, légendes |
| `--primary` | boutons principaux et liens |
| `--on-primary` | texte sur un bouton principal |
| `--line` | bordures et séparateurs |
| `--sky-top`, `--sky-low` | dégradé du ciel (horizon seulement) |
| `--sea`, `--sea-deep` | les vagues (horizon seulement) |
| `--star` | soleil ou lune |

| Rôle | Lever (6 h–10 h) | Plein soleil (10 h–17 h) | Coucher (17 h–21 h) | Nuit (21 h–6 h) |
|---|---|---|---|---|
| `--bg` | `#FFF4EA` crème pêche | `#F3FAFC` blanc ciel | `#34193F` prune | `#0D1B33` marine |
| `--surface` | `#FFFFFF` | `#FFFFFF` | `#43234F` | `#15284A` |
| `--ink` | `#2A2540` | `#0F2A3D` | `#FFF3EA` | `#EAF1FF` |
| `--muted` | `#5E5672` | `#44606F` | `#E3C7D6` | `#A9B8D6` |
| `--primary` | `#1F5F8B` bleu mer | `#00707F` turquoise profond | `#FFB070` orange | `#8EC9FF` bleu lune |
| `--on-primary` | `#FFFFFF` | `#FFFFFF` | `#34193F` | `#0D1B33` |
| `--line` | `#F0DCCB` | `#D5ECF2` | `#5A3366` | `#243B63` |
| `--sky-top` | `#9FD3EE` | `#3FA9EE` | `#6B3FA0` | `#060E1F` |
| `--sky-low` | `#FFD3B6` | `#BDE9FA` | `#FF8A5B` | `#1B2F57` |
| `--sea` | `#6FB6C9` | `#1AA6B7` | `#C45A8A` | `#12315C` |
| `--sea-deep` | `#3E8AA6` | `#0B7C99` | `#5B2A6E` | `#0A1F3E` |
| `--star` | `#FFB37A` | `#FFE27A` | `#FF7A3D` | `#F4F1DC` (lune) |

Contraste vérifié (AA, 4,5:1 minimum) :

| | ink / bg | muted / bg | primary / bg | bouton |
|---|---|---|---|---|
| Lever | 13,5 | 6,4 | 6,3 | 6,8 |
| Plein soleil | 14,0 | 6,3 | 5,5 | 5,8 |
| Coucher | 14,2 | 9,9 | 8,6 | 8,6 |
| Nuit | 15,2 | 8,6 | 9,8 | 9,8 |

Deux ambiances claires, deux sombres : le changement se voit vraiment. Le pêche et le sable ne servent qu'au décor (ciel, couvertures), jamais au texte.

États : succès `#2E8B57`, erreur `#C0392B` en clair ; `#7FD8A4` et `#FF8A80` en sombre. L'erreur est toujours écrite en texte, pas seulement en couleur.

## 2. Typographie

- **Fraunces** (titres) : axe `SOFT` à 100 et `WONK` à 1 pour l'aspect rond et rétro d'affiche de surf. Graisse 600 pour les titres, 800 pour le nom dans l'accueil.
- **DM Sans** (texte) : 400 pour le texte, 500 pour les boutons, 700 pour l'emphase.
- Chargées avec `next/font/google` (pas de requête externe au chargement, pas de décalage).

Échelle (mobile → PC, avec `clamp()`) :

| Token | Taille | Interligne | Usage |
|---|---|---|---|
| `--fs-hero` | 44 → 96 px | 1,0 | ton nom |
| `--fs-h2` | 32 → 52 px | 1,1 | titres de section |
| `--fs-h3` | 22 → 28 px | 1,2 | titres de projet |
| `--fs-lead` | 18 → 21 px | 1,55 | accroche, intro de section |
| `--fs-body` | 16 → 17 px | 1,6 | texte |
| `--fs-small` | 14 px | 1,5 | légendes, badges |

Lignes de 65 caractères maximum (`max-width: 65ch`). Pas de libellés en majuscules, pas de mot isolé mis en couleur dans un titre.

## 3. Espacement et mise en page

- Échelle en base 4 : `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px (`--s-1` à `--s-10`).
- Entre sections : 96 px sur mobile, 128 px sur PC.
- Largeur du contenu : 1120 px max, marges 20 px sur mobile, 32 px sur PC.
- Texte **aligné à gauche** partout sauf le nom dans l'horizon.
- Breakpoints mobile-first : 640, 900, 1200 px.

Plan de la page :

```
┌──────────────────────────────────────────────┐
│ nav : Arthur Goubill   À propos Projets CV …  [FR|EN] [☀4 icônes] │
├──────────────────────────────────────────────┤
│              ciel (dégradé)  ☀ soleil/lune   │
│   Arthur Goubill                             │
│   Étudiant en BUT Informatique · Dev web     │
│   [Voir mes projets] [Mon CV]                │
│ ~~~~~~~~ vagues + reflet ~~~~~~~~~~~~~~~~~~~ │
├──────────────────────────────────────────────┤
│ À propos : texte (2/3)   │ fiche technique (1/3) │
├──────────────────────────────────────────────┤
│ Projets : liste numérotée 01 → 08            │
│ 01  Foulée ─────────────────── [couverture]  │
│ 02  BUT-INFO ───────────────── [couverture]  │
├──────────────────────────────────────────────┤
│ Compétences (groupées) │ CV (aperçu + DL)    │
├──────────────────────────────────────────────┤
│ Contact : liens         │ formulaire         │
└──────────────────────────────────────────────┘
```

Les projets sont une **liste en lignes** (numéro, nom, description, liens, couverture), pas une grille de cartes identiques. Sur mobile la couverture passe au-dessus du texte. La numérotation 01–08 vient de ton brief : elle donne l'ordre de présentation.

## 4. Forme et profondeur

- Rayons : `--r-sm` 8 px (badges, champs), `--r-md` 18 px (couvertures, fiche, formulaire), `--r-pill` 999 px (boutons, sélecteur d'ambiance). La forme « pill » rappelle une planche de surf.
- Une seule ombre, teintée par l'ambiance : `0 12px 32px -16px color-mix(in srgb, var(--sea-deep) 45%, transparent)`.
- Pas de verre dépoli, pas de dégradé décoratif en dehors du ciel et des couvertures.

## 5. Composants

**Boutons**
- Principal : fond `--primary`, texte `--on-primary`, pill, 48 px de haut.
- Secondaire : bordure 1,5 px `--ink`, fond transparent.
- Discret : texte `--primary` souligné au survol.
- Survol : léger assombrissement (`filter: brightness(.94)`), 150 ms. Focus : anneau 3 px `--primary` décalé de 3 px. Désactivé : opacité 0,5 et curseur interdit.

**Sélecteur d'ambiance** : 4 boutons-icônes SVG (soleil levant, soleil, soleil couchant, lune) dans un groupe pill. Chacun a un `aria-label` et `aria-pressed`. 44×44 px minimum.

**Sélecteur de langue** : lien FR / EN, la langue active en gras.

**Ligne projet** : numéro en Fraunces 600 couleur `--muted`, nom en `--fs-h3`, description en `--muted`, liens en boutons discrets. Badges « bientôt » et « en cours » en `--fs-small`, bordure `--line`.

**Projet secret (08)** : couverture floutée (`filter: blur`), texte « Projet secret · Bientôt », effet glitch au survol (désactivé avec reduced-motion). Aucun indice sur le contenu.

**Champs** : label visible au-dessus, 48 px de haut, bordure `--line`, focus `--primary`, erreur sous le champ.

**Navigation** : barre fixe en haut, fond `--bg` à 90 % d'opacité. Sur mobile, menu repliable.

**Pied de page** : nom, liens GitHub / LinkedIn, année.

## 6. Images et icônes

- Aucune photo de toi.
- Icônes : SVG faits main, trait 1,75 px, coins ronds. Pas d'emojis dans l'interface.
- Couvertures de projet (tant qu'il n'y a pas de capture) : un petit horizon simplifié (ciel + 1 vague) aux couleurs de l'ambiance, avec le nom du projet en Fraunces. Les captures se mettent dans `public/projets/` (WebP, 1600×1000).

## 7. Mouvement

- **Le moment fort :** au changement d'ambiance, le soleil (ou la lune) suit un arc dans le ciel en 1,2 s, et les couleurs du ciel et de la mer se fondent en même temps.
- Vagues : 3 couches SVG qui défilent en boucle à des vitesses différentes (18 s, 26 s, 34 s). Reflet du soleil sur l'eau qui scintille doucement.
- Étoiles : apparaissent seulement la nuit, scintillement lent.
- Pas d'apparition en fondu sur chaque section.
- `prefers-reduced-motion` : vagues figées, soleil placé sans trajet, pas de glitch.
- On anime seulement `transform` et `opacity`.

## 8. À ne pas faire

Dégradés violet-bleu, texte en dégradé, verre dépoli partout, trois cartes identiques, libellés en majuscules espacées, emojis comme icônes, flèche « → » ajoutée à chaque bouton.

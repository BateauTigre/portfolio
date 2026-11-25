# Portfolio · Arthur Goubill

Mon portfolio de développeur web, sur le thème du surf. Je suis étudiant en BUT Informatique à l'IUT de Nantes.

**Site en ligne :** https://portfolio-bateautigre.vercel.app

## Le site

- Un accueil face à la mer, avec 4 ambiances : lever de soleil, plein soleil, coucher de soleil et nuit. L'ambiance suit l'heure du visiteur, et un bouton permet de la changer. Le soleil se déplace et les vagues bougent en continu.
- Mes projets : Foulée, BUT-INFO, Mémo 52, Griboulade, la carte des films, le redesign Deezer, un site météo en cours et un projet Roblox encore secret.
- Mon CV, à consulter et télécharger en PDF.
- Un formulaire de contact.
- Le site existe en français (`/fr`) et en anglais (`/en`).
- Il s'adapte au téléphone, se navigue au clavier, et coupe ses animations si le visiteur les a désactivées sur son appareil.

## Stack

Next.js 16, React 19 et TypeScript, avec du CSS sans framework. Les polices sont Fraunces et DM Sans. Le site est hébergé sur Vercel, et le formulaire passe par Web3Forms.

## Bon à savoir

- Tous les textes et les liens sont dans `content/site.ts`, en français et en anglais.
- Le style suit `DESIGN.md` : couleurs des 4 ambiances, typographie, espacements.
- Pour que le formulaire envoie les messages par mail, ajoute la variable `NEXT_PUBLIC_WEB3FORMS_KEY` (voir `.env.example`). Sans elle, le formulaire ouvre le logiciel de mail du visiteur.

## Contact

- Mail : goubill.arthur@gmail.com
- LinkedIn : https://www.linkedin.com/in/arthurgoubill
- GitHub : https://github.com/BateauTigre

Co-créé avec Claude.

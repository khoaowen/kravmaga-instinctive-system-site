# Site web - Krav Maga Instinctive System

Site statique Astro pour l’association Krav Maga Instinctive System à Limeil-Brévannes.

## Pré-requis

- Node.js 20 ou plus récent
- Git
- Un compte GitHub
- Un compte Cloudflare

## Installation locale

```bash
npm install
npm run dev
```

Le site sera visible en local sur l’adresse indiquée par Astro, souvent `http://localhost:4321`.

## Modifier les informations de l’association

Les informations principales sont dans :

```text
src/site.config.ts
```

À modifier avant mise en ligne :

- Adresse
- Téléphone
- Email
- Horaires
- Tarifs
- Liens Facebook / Instagram / HelloAsso
- Lien Google Maps

## Modifier le domaine

Dans :

```text
astro.config.mjs
```

Remplacer :

```js
site: 'https://kmis-kravmaga.fr'
```

par le vrai domaine.

Dans :

```text
public/robots.txt
```

Remplacer aussi le domaine dans la ligne Sitemap.

## Construire le site

```bash
npm run build
```

Le site généré sera dans le dossier :

```text
dist/
```

## Déployer sur Cloudflare Pages

1. Pousser ce projet sur GitHub.
2. Aller dans Cloudflare > Workers & Pages > Create application > Pages.
3. Connecter le dépôt GitHub.
4. Choisir le framework Astro.
5. Build command :

```bash
npm run build
```

6. Output directory :

```text
dist
```

7. Déployer.

## Après déploiement

- Connecter le nom de domaine.
- Ajouter le site dans Google Search Console.
- Soumettre le sitemap.
- Créer la fiche Google Business Profile.
- Mettre le lien du site sur les pages locales et réseaux sociaux.

## Notes

Ce site évite volontairement les formulaires pour réduire les problèmes RGPD au début. Le contact se fait par email. Un lien HelloAsso peut être ajouté plus tard.

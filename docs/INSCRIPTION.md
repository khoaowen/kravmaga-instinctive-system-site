# Inscription en ligne KMIS

Objectif : remplacer le parcours papier par un formulaire en ligne simple, stocke hors de la boite OVH.

## Solution retenue

- Formulaire public : Tally.
- Stockage principal : Google Sheets, avec pieces jointes dans Google Drive si necessaire.
- Email `contact@kmis-kravmaga.fr` : notification seulement, sans PDF lourd en piece jointe.
- Page publique du site : `/inscription/`.

## Configuration

1. Creer un formulaire Tally au nom de l'association.
2. Ajouter le logo KMIS dans l'en-tete du formulaire.
3. Activer l'integration Google Sheets pour centraliser les reponses.
4. Si des fichiers sont demandes, verifier qu'ils sont stockes dans un Drive prive avec acces limite.
5. Configurer une notification email vers `contact@kmis-kravmaga.fr`, sans recopier toutes les donnees sensibles dans l'email.
6. Copier l'URL d'integration Tally dans `src/site.config.ts` :

```ts
registrationFormUrl: 'https://tally.so/embed/FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
```

## Donnees a limiter

Demander uniquement les champs utiles a l'inscription :

- identite et coordonnees de l'adherent ;
- representant legal pour les mineurs ;
- contact d'urgence ;
- choix de formule ou creneau ;
- autorisations parentales si necessaire ;
- justificatifs strictement necessaires.

## RGPD

- Restreindre l'acces aux responsables autorises.
- Eviter les pieces jointes dans la boite OVH.
- Ne pas publier de lien vers le tableau de reponses.
- Supprimer ou archiver les donnees selon les besoins reels de gestion associative.

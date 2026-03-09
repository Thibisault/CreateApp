# Forge Creative

Forge Creative est une application web PWA mobile-first en français pour apprendre, pratiquer et appliquer les structures de la créativité de manière rigoureuse. Le contenu initial est dérivé de la fiche `FICHE MAÎTRESSE D’ENTRAÎNEMENT À LA CRÉATIVITÉ`, transformée ici en base de connaissances, exercices, routines et atelier guidé.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router avec `HashRouter`
- PWA via `vite-plugin-pwa`
- Persistance locale avec `localStorage`
- Tests utilitaires avec Vitest

## Lancer en local

```bash
npm install
npm run dev
```

## Vérifier et builder

```bash
npm run typecheck
npm run test
npm run build
```

## Déploiement GitHub Pages

Le projet est prévu pour un déploiement statique sur GitHub Pages.

- Le routing utilise `HashRouter`, donc il n'y a pas de problème de routes côté Pages.
- Le `base path` est configurable via la variable d'environnement `BASE_PATH`.
- Le workflow GitHub Actions fourni calcule automatiquement `BASE_PATH` à partir du nom du dépôt.

### Déploiement automatique

1. Pousse le dépôt sur GitHub.
2. Active GitHub Pages en mode `GitHub Actions`.
3. Le workflow `.github/workflows/deploy.yml` build puis publie le contenu du dossier `dist/`.

### Déploiement manuel

```bash
$env:BASE_PATH='/CreateApp/'
npm run build
```

Publie ensuite le contenu du dossier `dist/` sur GitHub Pages.

## Modifier le contenu pédagogique

Le contenu est séparé du rendu dans `src/content/`.

- `src/content/academy-*.ts` : domaines, chapitres et notions pédagogiques.
- `src/content/exercises.ts` : exercices d'entraînement.
- `src/content/routines.ts` : routines réutilisables.
- `src/content/workshop.ts` : étapes de l'atelier et blocs de référence.
- `src/content/meta.ts` : nom, baseline et navigation principale.

Tu peux enrichir les notions, ajouter des exercices ou créer de nouveaux domaines sans modifier les composants React.

## Persistance locale

Toutes les données utilisateur sont stockées en local dans `localStorage` via `src/utils/storage.ts`.

Sont persistés :

- favoris
- notions étudiées
- notions à retravailler
- notes sur les notions
- notes d'exercices
- idées de l'atelier et réponses par étape
- historique récent
- routines suivies
- préférences d'affichage

Les réglages permettent aussi :

- export JSON
- import JSON
- reset local

## Architecture principale

```text
src/
  app/
  components/
    layout/
    ui/
  content/
  features/
    academy/
    home/
    library/
    progress/
    routines/
    settings/
    training/
    workshop/
  hooks/
  routes/
  stores/
  types/
  utils/
```

## Qualité

- Typage strict TypeScript
- Tests ciblés sur contenu, progression, recherche et persistance
- Build statique compatible GitHub Pages
- Manifest PWA, service worker et icônes d'installation

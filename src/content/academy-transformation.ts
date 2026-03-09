import type { NotionPedagogique } from '@/types/content'

const notion = (item: NotionPedagogique) => item

export const notionsTransformation: NotionPedagogique[] = [
  notion({
    id: 'freins-creatifs',
    slug: 'freins-creatifs',
    titre: 'Freins à la créativité',
    domaineId: 'transformation',
    chapitreId: 'freins-courants',
    resume: 'Identifier les blocages typiques : exigence trop précoce, jugement rapide, angle unique, manque de concret ou absence d’itération.',
    definition:
      "Les freins créatifs sont les comportements qui étouffent la matière avant qu'elle n'ait été assez produite, variée, observée, externalisée ou retravaillée.",
    but: 'Diagnostiquer rapidement la vraie cause d’un blocage pour appliquer le bon correctif.',
    pourquoiCestImportant:
      "Sans diagnostic, on répond souvent à un manque de divergence par encore plus de jugement, ou à un manque de concret par encore plus d'idées floues.",
    quandLUtiliser:
      'À chaque blocage, sensation de répétition, stagnation ou perte de confiance pendant une séance.',
    commentFaire: [
      'Passe la grille de diagnostic : production, jugement, angles, tension, concret, itération, banalité, incubation.',
      'N’essaie pas de tout corriger : choisis le frein principal du moment.',
      'Associe ensuite un exercice ou une méthode corrective ciblée.',
    ],
    questionsCles: [
      'Ai-je assez produit ?',
      'Ai-je jugé trop tôt ?',
      'Ai-je varié les angles ?',
      'Ai-je rendu concret ?',
      'Ai-je poussé assez loin ?',
    ],
    exempleSimple:
      "Vouloir être génial trop tôt bloque souvent avant même la divergence. Le correctif n'est pas une meilleure idée, mais une phase de production sans jugement.",
    erreursFrequentes: [
      'Diagnostiquer seulement au niveau émotionnel.',
      'Corriger tous les freins à la fois.',
      "Croire que le blocage vient toujours d'un manque d'inspiration.",
    ],
    miniExercice:
      'Lors du prochain blocage, choisis un seul frein principal et définis une action corrective immédiate de cinq minutes.',
    notionsLiees: ['grille-diagnostic', 'principes-travail-creatif', 'externaliser-tot'],
    tags: ['freins', 'blocage', 'diagnostic'],
    niveau: 'base',
  }),
  notion({
    id: 'externaliser-tot',
    slug: 'externaliser-tot',
    titre: 'Externaliser tôt',
    domaineId: 'transformation',
    chapitreId: 'solidifier-une-idee',
    resume: "Sortir l'idée de la tête rapidement pour mieux voir ce qu'elle vaut vraiment.",
    definition:
      "Externaliser tôt consiste à écrire, dessiner, schématiser, raconter, lister, prototyper ou résumer une piste dès son apparition.",
    but: 'Passer de l’impression intérieure à une matière visible et retravaillable.',
    pourquoiCestImportant:
      "Tant qu'une idée reste mentale, elle semble souvent plus brillante et plus cohérente qu'elle ne l'est. L'extériorisation révèle sa vraie structure.",
    quandLUtiliser:
      "Dès qu'une piste semble avoir un minimum d'intérêt, avant qu'elle ne se dissolve ou ne se mythifie.",
    commentFaire: [
      'Choisis une forme simple : phrase, schéma, liste, croquis, maquette rudimentaire.',
      'Cherche à rendre visible la logique de la piste, pas à la rendre belle.',
      'Utilise cette première trace comme base d’itération immédiate.',
    ],
    questionsCles: [
      'Puis-je la dessiner ?',
      'Puis-je la résumer en une phrase ?',
      'Puis-je la montrer simplement ?',
      "Que devient-elle quand je l'écris ?",
    ],
    exempleSimple:
      "Une idée de service paraît claire tant qu'elle reste racontée. Dès qu'on trace le parcours utilisateur, les flous et les tensions réelles apparaissent.",
    erreursFrequentes: [
      "Attendre d'avoir une version 'propre'.",
      'Confondre externalisation et finalisation.',
      'Garder tout dans la tête trop longtemps.',
    ],
    miniExercice:
      'La prochaine fois qu’une idée apparaît, force-toi à la résumer en une phrase et un schéma en moins de trois minutes.',
    notionsLiees: ['rendre-concret', 'iterer-une-idee', 'journal-creatif'],
    tags: ['externalisation', 'notes', 'prototype'],
    niveau: 'base',
  }),
  notion({
    id: 'evaluer-idee',
    slug: 'evaluer-idee',
    titre: 'Évaluer une idée sous plusieurs valeurs',
    domaineId: 'transformation',
    chapitreId: 'solidifier-une-idee',
    resume: 'Évaluer une piste avec plusieurs critères pour éviter le coup de cœur aveugle ou le rejet brutal.',
    definition:
      "Évaluer une idée consiste à la regarder selon plusieurs valeurs : originalité, clarté, cohérence, profondeur, fertilité, impact, mémorisation, applicabilité, élégance et simplicité utile.",
    but: 'Prendre une décision plus juste sur ce qui mérite du temps et ce qui doit être retravaillé.',
    pourquoiCestImportant:
      "Une piste peut être très originale mais faible en clarté, ou très applicable mais sans identité. L'évaluation multi-critères évite les jugements trop simples.",
    quandLUtiliser:
      'Après une phase de génération ou avant de choisir une piste à pousser.',
    commentFaire: [
      'Note la piste sur quelques critères clés adaptés à ton contexte.',
      'Repère surtout les déséquilibres : originale mais floue, claire mais banale, fertile mais peu incarnée.',
      'Décide ensuite si la piste doit être gardée, fusionnée, transformée ou abandonnée.',
    ],
    questionsCles: [
      'Est-ce fort ?',
      'Est-ce clair ?',
      'Est-ce vivant ?',
      'Est-ce mémorable ?',
      "Mérite-t-elle vraiment d'être développée ?",
    ],
    exempleSimple:
      "Une idée peut être moyenne en faisabilité immédiate mais excellente en fertilité. Cela peut justifier une itération au lieu d'un rejet.",
    erreursFrequentes: [
      'Évaluer avec un seul critère.',
      'Confondre faisabilité immédiate et intérêt réel.',
      'Décider trop vite sans reformuler la piste.',
    ],
    miniExercice:
      'Choisis trois idées et évalue-les sur six critères. Compare ensuite les déséquilibres plutôt que les notes globales.',
    notionsLiees: ['pensee-convergente', 'grille-evaluation', 'iterer-une-idee'],
    tags: ['evaluation', 'criteres', 'decision'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'iterer-une-idee',
    slug: 'iterer-une-idee',
    titre: 'Itérer',
    domaineId: 'transformation',
    chapitreId: 'solidifier-une-idee',
    resume: 'Retravailler une piste plusieurs fois pour faire émerger sa vraie qualité.',
    definition:
      "Itérer consiste à reprendre une idée après une ou plusieurs transformations successives afin de renforcer sa clarté, sa tension, sa singularité ou sa concrétisation.",
    but: 'Ne pas confondre première version et forme finale.',
    pourquoiCestImportant:
      "Une idée intéressante après plusieurs itérations vaut souvent plus qu'une intuition brillante laissée brute. La qualité se construit.",
    quandLUtiliser:
      'Après toute piste prometteuse, en particulier quand elle paraît vivante mais incomplète.',
    commentFaire: [
      'Choisis une version de départ clairement formulée.',
      'Applique-lui une transformation ciblée : tension, variation, simplification, concretisation, changement de point de vue.',
      'Compare les versions pour comprendre ce qui s’améliore réellement.',
    ],
    questionsCles: [
      "Que devient-elle après une transformation ?",
      'Et après trois ?',
      'Quelle version est la plus forte ?',
      "Qu'ai-je découvert en l'itérant ?",
    ],
    exempleSimple:
      "La première formulation d'une idée peut être banale. Après reformulation du problème, ajout de tension et concrétisation, elle change de nature.",
    erreursFrequentes: [
      'Arrêter après la première version acceptable.',
      'Itérer sans but clair.',
      'Perdre de vue le noyau intéressant pendant les transformations.',
    ],
    miniExercice:
      'Choisis une piste et fais-lui subir cinq itérations ciblées. Donne un nom à chaque version pour voir son évolution.',
    notionsLiees: ['variation-systematique', 'simplifier-sans-appauvrir', 'principes-travail-creatif'],
    tags: ['iteration', 'amelioration', 'versions'],
    niveau: 'base',
  }),
  notion({
    id: 'simplifier-sans-appauvrir',
    slug: 'simplifier-sans-appauvrir',
    titre: 'Simplifier sans appauvrir',
    domaineId: 'transformation',
    chapitreId: 'solidifier-une-idee',
    resume: 'Clarifier la forme sans tuer la signature, la tension ou la profondeur acquise.',
    definition:
      "Simplifier sans appauvrir consiste à retirer le bruit, clarifier le noyau et rendre l'idée lisible tout en conservant ce qui fait sa singularité.",
    but: 'Rendre une idée compréhensible sans la lisser au point de la rendre oubliable.',
    pourquoiCestImportant:
      "Beaucoup d'idées fortes meurent dans une simplification trop brutale. L'enjeu n'est pas seulement de rendre simple, mais de garder juste.",
    quandLUtiliser:
      'En fin de cycle, après plusieurs itérations ou avant de présenter clairement une piste.',
    commentFaire: [
      'Sépare le noyau essentiel du bruit accumulé.',
      'Retire ce qui n’ajoute ni sens, ni tension, ni clarté.',
      'Vérifie ensuite que la signature reste visible et que la promesse ne devient pas générique.',
    ],
    questionsCles: [
      'Qu’est-ce qui est essentiel ?',
      'Qu’est-ce qui n’est que bruit ?',
      'Ai-je gardé la signature ?',
      'Ai-je rendu cela trop lisse ?',
    ],
    exempleSimple:
      "Un concept riche peut être résumé en une phrase claire, à condition que cette phrase porte encore son trait distinctif et sa tension centrale.",
    erreursFrequentes: [
      'Retirer aussi ce qui faisait la personnalité.',
      'Confondre accessibilité et banalité.',
      'Alléger la forme sans tester la compréhension réelle.',
    ],
    miniExercice:
      'Prends une idée dense et réduis-la en une phrase, trois points clés et une scène concrète sans perdre sa singularité.',
    notionsLiees: ['eliminer-banal', 'signature-unique', 'evaluer-idee'],
    tags: ['simplification', 'clarte', 'identite'],
    niveau: 'intermediaire',
  }),
]

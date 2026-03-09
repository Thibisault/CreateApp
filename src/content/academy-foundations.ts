import type { NotionPedagogique } from '@/types/content'

const notion = (item: NotionPedagogique) => item

export const notionsFondamentales: NotionPedagogique[] = [
  notion({
    id: 'definition-creativite',
    slug: 'definition-creativite',
    titre: 'Définir la créativité',
    domaineId: 'fondements',
    chapitreId: 'ce-quest-creativite',
    resume: "La créativité combine nouveauté, pertinence, vitalité et possibilité d'incarnation.",
    definition:
      "La créativité est la capacité à produire des idées, des solutions, des formes ou des liens qui sont à la fois nouveaux, pertinents, vivants et exploitables.",
    but: "Sortir de l'idée trop pauvre selon laquelle être créatif reviendrait seulement à être original.",
    pourquoiCestImportant:
      "Cette définition évite de confondre l'étrange avec le fort, le décoratif avec le juste, et l'imagination libre avec la qualité réelle d'une idée.",
    quandLUtiliser:
      "Au début d'un projet, quand une idée semble séduisante mais floue, ou lorsqu'il faut juger si une piste mérite d'être développée.",
    commentFaire: [
      'Vérifie séparément la nouveauté, la pertinence, la vitalité et le potentiel concret de la piste.',
      "Formule l'idée en une phrase simple : si elle reste décorative ou interchangeable, retravaille-la.",
      "Demande-toi ce qu'elle ouvre : une bonne idée ne surprend pas seulement, elle rend quelque chose possible.",
    ],
    questionsCles: [
      "Qu'est-ce qui rend cette idée réellement nouvelle ?",
      "Qu'est-ce qui la rend pertinente pour la situation ?",
      'Est-elle singulière ou seulement bizarre ?',
      'Ouvre-t-elle de vraies possibilités ?',
      'Peut-elle prendre une forme claire ?',
    ],
    exempleSimple:
      "Ajouter des ailes à une voiture surprend. Repenser la mobilité à partir du vol plané, du vent et de l'économie d'énergie devient déjà plus créatif.",
    exempleApprofondi:
      "Dans un service numérique, une idée créative n'est pas 'un écran plus original', mais une manière différente et juste de guider, rassurer ou faire choisir l'utilisateur.",
    erreursFrequentes: [
      'Confondre originalité visuelle et valeur réelle.',
      'Croire qu’une idée surprenante est automatiquement forte.',
      "S'arrêter à la première formulation sans tester sa pertinence.",
    ],
    miniExercice:
      'Choisis cinq idées que tu trouves créatives et sépare, pour chacune, ce qui relève de la nouveauté, de la pertinence et du simple style.',
    exerciceApplique:
      "Analyse une idée personnelle avec les quatre critères. Réécris ensuite la promesse de l'idée en une phrase plus claire.",
    notionsLiees: ['piliers-creativite', 'evaluer-idee', 'signature-unique'],
    tags: ['fondation', 'definition', 'criteres'],
    niveau: 'base',
  }),
  notion({
    id: 'piliers-creativite',
    slug: 'piliers-creativite',
    titre: 'Les piliers de la créativité',
    domaineId: 'fondements',
    chapitreId: 'ce-quest-creativite',
    resume: 'Observer, imaginer, associer, structurer, sélectionner et concrétiser sont des muscles distincts.',
    definition:
      "La créativité repose sur plusieurs capacités complémentaires : observer, imaginer, associer, déformer, varier, symboliser, structurer, sélectionner, concrétiser et itérer.",
    but: 'Identifier les capacités à entraîner au lieu de réduire la créativité à un talent global.',
    pourquoiCestImportant:
      "On peut produire beaucoup mais mal sélectionner, ou avoir de bonnes intuitions mais ne jamais les rendre concrètes. Voir les piliers permet d'entraîner le bon manque.",
    quandLUtiliser:
      "Quand tu stagnes, quand tu répètes les mêmes idées, ou pour construire une routine d'entraînement équilibrée.",
    commentFaire: [
      'Évalue-toi honnêtement sur chaque pilier.',
      "Choisis un ou deux axes faibles à travailler pendant une semaine : divergence, concrétisation, itération, observation fine, etc.",
      'Associe chaque pilier à un exercice concret pour ne pas rester au niveau du constat.',
    ],
    questionsCles: [
      'Est-ce que je produis assez ?',
      "Est-ce que j'observe assez finement ?",
      "Est-ce que je rends mes idées concrètes ?",
      'Est-ce que je juge trop tôt ?',
      "Est-ce que j'abandonne avant itération ?",
    ],
    exempleSimple:
      "Une personne peut avoir beaucoup d'idées mais rester moyenne parce qu'elle ne structure jamais ni ne sélectionne avec exigence.",
    exempleApprofondi:
      "Dans une équipe créative, séparer les moments d'observation, de génération, d'évaluation et de prototypage permet souvent de voir quel pilier collectif manque vraiment.",
    erreursFrequentes: [
      "Penser que tout se règle par plus d'inspiration.",
      "Chercher à progresser partout en même temps au lieu de cibler un pilier faible.",
      'Confondre production abondante et progression réelle.',
    ],
    miniExercice:
      'Note-toi de 1 à 5 sur chaque pilier, puis choisis le score le plus bas et définis un exercice simple pour le travailler demain.',
    notionsLiees: ['principes-travail-creatif', 'freins-creatifs', 'variation-systematique'],
    tags: ['fondation', 'auto-diagnostic', 'progression'],
    niveau: 'base',
  }),
  notion({
    id: 'principes-travail-creatif',
    slug: 'principes-travail-creatif',
    titre: 'Principes fondamentaux du travail créatif',
    domaineId: 'philosophie',
    chapitreId: 'principes-fondamentaux',
    resume: "Produire avant de juger, pousser avant de conclure, retirer le banal et alterner ouverture et fermeture.",
    definition:
      "Le travail créatif s'appuie sur des principes de rythme et de discipline : ne pas juger trop tôt, pousser les pistes, chercher le vivant, retirer le banal, rendre concret, alterner divergence et convergence, laisser mûrir et accepter qu'une idée se construise.",
    but: 'Installer une manière de travailler fiable plutôt que dépendre de l’humeur ou de la pression.',
    pourquoiCestImportant:
      "Les blocages viennent souvent d'un mauvais timing mental : on trie pendant qu'il faudrait produire, ou on force alors qu'une piste devrait mûrir.",
    quandLUtiliser:
      "À chaque séance créative, pour cadrer le bon geste au bon moment et éviter les erreurs de rythme.",
    commentFaire: [
      'Sépare explicitement les moments de production, de tri, de maturation et de reformulation.',
      "Demande-toi souvent si tu es dans une phase d'ouverture ou de fermeture.",
      'Avant de rejeter une piste, oblige-toi à lui faire subir plusieurs transformations.',
    ],
    questionsCles: [
      "Suis-je en train d'ouvrir ou de trier ?",
      "Est-ce le moment de produire ou d'évaluer ?",
      'Ai-je assez poussé cette idée ?',
      'Ai-je gardé sa singularité en la clarifiant ?',
      "Ai-je besoin d'incubation plutôt que d'effort brut ?",
    ],
    exempleSimple:
      "Une piste banale au départ peut devenir forte après inversion, ajout de tension et concrétisation ; la rejeter trop tôt fait perdre ce potentiel.",
    exempleApprofondi:
      "Sur un concept de produit, alterner un sprint de divergence, une journée d'incubation et une session de convergence produit souvent un meilleur résultat qu'une réunion unique de décision.",
    erreursFrequentes: [
      'Chercher trop vite la bonne réponse.',
      'Confondre simplification et appauvrissement.',
      'Forcer une idée alors qu’elle a besoin de repos ou de changement de méthode.',
    ],
    miniExercice:
      "Prends une idée moyenne et force-toi à lui appliquer quatre transformations avant toute décision de rejet.",
    notionsLiees: ['pensee-divergente', 'pensee-convergente', 'incubation', 'iterer-une-idee'],
    tags: ['philosophie', 'discipline', 'rythme'],
    niveau: 'base',
  }),
]

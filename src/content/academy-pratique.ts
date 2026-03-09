import type { NotionPedagogique } from '@/types/content'

const notion = (item: NotionPedagogique) => item

export const notionsPratique: NotionPedagogique[] = [
  notion({
    id: 'protocole-seance-creative',
    slug: 'protocole-seance-creative',
    titre: 'Protocole complet d’une séance créative',
    domaineId: 'pratique',
    chapitreId: 'protocole',
    resume: 'Définir, reformuler, ouvrir, générer, enrichir, externaliser, simuler, filtrer, itérer et simplifier.',
    definition:
      "Le protocole de séance créative est une méthode complète en douze temps : définir le sujet, reformuler, ouvrir, générer par méthodes, enrichir, externaliser, simuler, filtrer, itérer, simplifier, laisser reposer si besoin, puis reformuler clairement la meilleure piste.",
    but: 'Donner une structure fiable à une séance de création, de résolution ou de développement de concept.',
    pourquoiCestImportant:
      "Un protocole évite les oublis classiques : ne pas reformuler le problème, ne pas enrichir une piste, ne pas la simuler ou converger trop tôt.",
    quandLUtiliser:
      'Pour une séance complète de travail, seul ou en équipe, quand le sujet mérite une progression méthodique.',
    commentFaire: [
      'Commence par clarifier le sujet et reformule-le plusieurs fois.',
      'Ouvre ensuite largement avant de générer avec des méthodes ciblées.',
      'Enrichis, externalise, simule puis filtre avant d’itérer et de simplifier.',
      'Prends une pause d’incubation si la piste en a besoin avant la formulation finale.',
    ],
    questionsCles: [
      'Ai-je bien défini le sujet ?',
      'Ai-je reformulé avant de chercher des solutions ?',
      'Ai-je enrichi avant de filtrer ?',
      'Ai-je simulé la piste en vrai ?',
      'Ai-je laissé la place à une itération ?',
    ],
    exempleSimple:
      "Sur une idée de service, le protocole évite de choisir trop tôt : on reformule d'abord le vrai problème, puis on génère, enrichit, prototype et seulement ensuite on décide.",
    erreursFrequentes: [
      'Sauter directement à la solution.',
      'Arrêter après la génération brute.',
      'Oublier la simulation ou la simplification finale.',
    ],
    miniExercice:
      'Prends un sujet réel et fais-le passer une fois par les douze étapes, même de manière brève, pour sentir où tu bloques le plus.',
    notionsLiees: ['reformuler-vrai-probleme', 'pensee-divergente', 'evaluer-idee', 'incubation'],
    tags: ['protocole', 'seance', 'workflow'],
    niveau: 'base',
  }),
  notion({
    id: 'grille-diagnostic',
    slug: 'grille-diagnostic',
    titre: 'Grille de diagnostic',
    domaineId: 'pratique',
    chapitreId: 'protocole',
    resume: 'Une série de questions courtes pour comprendre rapidement pourquoi une séance bloque.',
    definition:
      "La grille de diagnostic est un check rapide pour vérifier le cadrage du problème, le volume de production, la variété des angles, la présence de tension, le niveau de concret, l'externalisation, la simulation, l'itération et l'incubation.",
    but: 'Identifier le bon correctif au bon moment.',
    pourquoiCestImportant:
      "Sans diagnostic, on applique souvent des méthodes au hasard. La grille fait gagner du temps et réduit les blocages inutiles.",
    quandLUtiliser:
      'Quand une séance se bloque, s’épuise ou devient confuse.',
    commentFaire: [
      'Passe la liste de questions rapidement.',
      'Choisis le point de blocage dominant.',
      'Associe-lui un correctif ciblé : divergence, analogie, concrétisation, simulation, pause, etc.',
    ],
    questionsCles: [
      'Ai-je mal défini le problème ?',
      'Ai-je produit trop peu ?',
      'Ai-je jugé trop tôt ?',
      'Ai-je oublié la tension ?',
      'Ai-je trop peu externalisé ?',
      'Ai-je abandonné avant itération ?',
    ],
    exempleSimple:
      "Une séance bloquée n'a pas toujours besoin d'une nouvelle idée : parfois il faut simplement reformuler le problème ou externaliser ce qui est déjà là.",
    erreursFrequentes: [
      'Faire un diagnostic trop long et théorique.',
      'Rester vague sur le frein principal.',
      'Ne pas relier le diagnostic à une action concrète.',
    ],
    miniExercice:
      'Lors de ton prochain blocage, réponds à la grille en moins de deux minutes puis choisis une seule action corrective.',
    notionsLiees: ['freins-creatifs', 'protocole-seance-creative', 'checklist-ultra-courte'],
    tags: ['diagnostic', 'blocage', 'check'],
    niveau: 'base',
  }),
  notion({
    id: 'grille-evaluation',
    slug: 'grille-evaluation',
    titre: 'Grille d’évaluation',
    domaineId: 'pratique',
    chapitreId: 'protocole',
    resume: 'Check final pour vérifier si une idée est originale, claire, cohérente, fertile, mémorable et incarnable.',
    definition:
      "La grille d'évaluation est une vérification finale centrée sur l'originalité, la clarté, la cohérence, l'intérêt, la fertilité, la mémorisation, l'incarnation, l'absence de banalité et l'absence de complication artificielle.",
    but: 'Décider avec plus de justesse si une piste mérite vraiment du temps.',
    pourquoiCestImportant:
      "Une idée mérite rarement d'être développée seulement parce qu'elle plaît. La grille aide à juger plus froidement sans écraser l'intuition.",
    quandLUtiliser:
      'À la fin d’une séance ou avant de choisir la piste à approfondir.',
    commentFaire: [
      'Passe les critères un par un.',
      'Repère les déséquilibres plutôt qu’une note moyenne.',
      'Décide si la piste doit être développée, retravaillée ou mise en attente.',
    ],
    questionsCles: [
      'Est-elle originale ?',
      'Est-elle claire ?',
      'Est-elle cohérente ?',
      'Est-elle mémorable ?',
      'Est-elle incarnable ?',
      "Est-elle assez forte pour mériter du temps ?",
    ],
    exempleSimple:
      "Une idée peut être intéressante et fertile mais encore trop floue pour mériter un développement immédiat. La grille signale ce point de travail.",
    erreursFrequentes: [
      'Se contenter d’un ressenti global.',
      'Chercher une perfection impossible.',
      'Écarter une piste trop tôt alors qu’un seul critère faible peut être retravaillé.',
    ],
    miniExercice:
      'Évalue une idée récente avec la grille, puis isole les deux critères les plus faibles pour préparer la prochaine itération.',
    notionsLiees: ['evaluer-idee', 'protocole-seance-creative', 'signature-unique'],
    tags: ['evaluation', 'decision', 'check-final'],
    niveau: 'base',
  }),
  notion({
    id: 'checklist-ultra-courte',
    slug: 'checklist-ultra-courte',
    titre: 'Checklist de bureau ultra courte',
    domaineId: 'pratique',
    chapitreId: 'usage-long-terme',
    resume: 'Douze rappels de poche pour garder la bonne discipline pendant une séance.',
    definition:
      'La checklist ultra courte condense la méthode en douze rappels : vrai problème, ouverture, moteurs de pensée, association, déformation, tension, retrait du banal, signature, concrétisation, simulation, itération, simplification et incubation si besoin.',
    but: 'Avoir un repère rapide sans relire toute la méthode.',
    pourquoiCestImportant:
      'Sous pression, on oublie facilement les gestes essentiels. Une checklist courte aide à garder le cap sans lourdeur.',
    quandLUtiliser:
      'Avant une séance, au milieu d’un blocage léger, ou pour terminer un concept.',
    commentFaire: [
      'Lis-la avant de commencer.',
      'Reviens-y au milieu pour repérer ce qui manque.',
      'Coche mentalement les points vraiment réalisés, pas seulement connus.',
    ],
    questionsCles: [
      'Quel est le vrai problème ?',
      'Ai-je assez ouvert le champ ?',
      'Ai-je utilisé plusieurs moteurs ?',
      'Ai-je ajouté tension, couches et sens ?',
      'Ai-je rendu concret, simulé et itéré ?',
    ],
    exempleSimple:
      "Sur une séance courte, la checklist permet de voir immédiatement que la piste a été produite et déformée, mais jamais simulée ni simplifiée.",
    erreursFrequentes: [
      'La lire comme un mantra sans action.',
      'Tout cocher trop vite.',
      'L’utiliser comme substitut à un vrai protocole quand le sujet est complexe.',
    ],
    miniExercice:
      'Prends une idée récente et passe-la point par point dans la checklist en notant ce qui manque vraiment.',
    notionsLiees: ['grille-diagnostic', 'protocole-seance-creative', 'mode-emploi'],
    tags: ['checklist', 'memo', 'discipline'],
    niveau: 'base',
  }),
  notion({
    id: 'maximes-utiles',
    slug: 'maximes-utiles',
    titre: 'Maximes utiles',
    domaineId: 'pratique',
    chapitreId: 'usage-long-terme',
    resume: 'Quelques phrases fortes pour garder la bonne attitude face à la matière créative.',
    definition:
      "Les maximes utiles sont des rappels de posture : la créativité commence là où les réflexes finissent ; une idée brute n'est pas une mauvaise idée ; produire et juger sont deux temps différents ; créer, c'est aussi retirer.",
    but: 'Maintenir une mentalité de travail exigeante, calme et durable.',
    pourquoiCestImportant:
      'Dans les moments de doute, quelques phrases justes peuvent réorienter le geste plus vite qu’une longue explication.',
    quandLUtiliser:
      'En ouverture de séance, pendant un blocage moral, ou pour retrouver le bon rythme intérieur.',
    commentFaire: [
      'Choisis deux ou trois maximes qui te correspondent.',
      'Affiche-les dans ta routine ou au début de ton atelier.',
      'Utilise-les comme rappel de posture, pas comme formule magique.',
    ],
    questionsCles: [
      'Suis-je en train de juger au lieu de produire ?',
      'Ai-je confondu flou et échec ?',
      'Ai-je oublié que créer, c’est aussi retirer ?',
    ],
    exempleSimple:
      "Se rappeler qu'une idée brute n'est pas une mauvaise idée aide à ne pas jeter trop tôt une piste encore mal formée.",
    erreursFrequentes: [
      'Traiter les maximes comme de la motivation vide.',
      'Les réciter sans les relier à une action concrète.',
      'Choisir des phrases trop générales pour être utiles.',
    ],
    miniExercice:
      'Sélectionne trois maximes et associe chacune à une action simple : produire 10 idées, enlever un cliché, itérer une piste.',
    notionsLiees: ['principes-travail-creatif', 'freins-creatifs', 'mode-emploi'],
    tags: ['maximes', 'posture', 'rappels'],
    niveau: 'base',
  }),
  notion({
    id: 'mode-emploi',
    slug: 'mode-emploi',
    titre: "Mode d'emploi conseillé",
    domaineId: 'pratique',
    chapitreId: 'usage-long-terme',
    resume: 'Quatre usages structurés : apprentissage, séance créative, amélioration d’idée et entraînement long terme.',
    definition:
      "Le mode d'emploi transforme la fiche maîtresse en système d'usage : lire un bloc par jour, utiliser la checklist et quelques méthodes en séance, faire passer une idée brute par plusieurs transformations, et tenir un entraînement hebdomadaire ciblé.",
    but: 'Aider l’utilisateur à passer du savoir au rythme de pratique.',
    pourquoiCestImportant:
      "Une bonne ressource ne sert pas seulement à être consultée ; elle doit guider un usage récurrent, réaliste et progressif.",
    quandLUtiliser:
      "Pour construire ta manière d'utiliser l'application sur plusieurs jours ou plusieurs semaines.",
    commentFaire: [
      'Choisis un mode principal selon ton besoin du moment : apprendre, créer, améliorer, t’entraîner.',
      'Ne mobilise que quelques leviers à la fois.',
      'Observe ce qui revient dans ton travail et ajuste ta routine en conséquence.',
    ],
    questionsCles: [
      'Ai-je besoin d’apprendre, de pratiquer ou de développer une idée ?',
      'Quelle méthode est la plus utile maintenant ?',
      'Quel rythme puis-je tenir vraiment ?',
      'Quels motifs personnels émergent dans mon travail ?',
    ],
    exempleSimple:
      "Une personne peut utiliser l'application en lisant une notion par jour, en gardant la checklist pour les séances et en suivant une routine hebdomadaire sur ses points faibles.",
    erreursFrequentes: [
      'Vouloir tout faire en même temps.',
      'Utiliser trop de méthodes dans une seule séance courte.',
      'Ne jamais revenir sur ses propres motifs et blocages récurrents.',
    ],
    miniExercice:
      'Choisis un usage principal pour la semaine à venir et note trois actions réalistes que tu vas répéter.',
    notionsLiees: ['checklist-ultra-courte', 'protocole-seance-creative', 'piliers-creativite'],
    tags: ['usage', 'routine', 'progression'],
    niveau: 'base',
  }),
]

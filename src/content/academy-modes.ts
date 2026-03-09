import type { NotionPedagogique } from '@/types/content'

const notion = (item: NotionPedagogique) => item

export const notionsModesPensee: NotionPedagogique[] = [
  notion({
    id: 'pensee-divergente',
    slug: 'pensee-divergente',
    titre: 'Pensée divergente',
    domaineId: 'modes-pensee',
    chapitreId: 'ouvrir-et-trier',
    resume: 'Produire beaucoup de pistes différentes pour dépasser les réponses automatiques.',
    definition:
      'La pensée divergente consiste à ouvrir largement le champ des possibles en produisant vite, beaucoup et dans des directions variées.',
    but: 'Échapper aux premières idées, souvent les plus attendues.',
    pourquoiCestImportant:
      "Sans divergence, on réutilise surtout les réflexes les plus disponibles. La quantité crée de la diversité et la diversité augmente les chances de trouver une piste fertile.",
    quandLUtiliser:
      "Au démarrage d'un sujet, quand tu sens que tes réponses tournent en rond, ou avant une phase de tri sérieuse.",
    commentFaire: [
      'Travaille en volume : 20 à 30 pistes plutôt que 3 idées soignées.',
      'Change de direction toutes les quelques idées : fonction, émotion, contexte, point de vue, analogie.',
      "Interdis-toi le tri pendant la phase d'ouverture.",
    ],
    questionsCles: [
      'Quelles sont les dix premières idées ?',
      'Que viennent les dix suivantes après épuisement des évidences ?',
      "Quelles directions n'ai-je pas encore tentées ?",
      "Quelle piste me gêne seulement parce qu'elle est étrange ?",
    ],
    exempleSimple:
      'Pour transmettre une information, la divergence peut faire apparaître parole, image, geste, odeur, vibration, rythme, lumière ou silence.',
    erreursFrequentes: [
      'Chercher trop vite la meilleure idée.',
      'Confondre quantité et répétition de la même piste avec des variantes superficielles.',
      'Filtrer par peur du ridicule.',
    ],
    miniExercice:
      "Trouve trente façons différentes d'accomplir la même fonction sans barrer une seule proposition.",
    notionsLiees: ['pensee-convergente', 'combinaison-forcee', 'contrainte-volontaire'],
    tags: ['divergence', 'generation', 'ouverture'],
    niveau: 'base',
  }),
  notion({
    id: 'pensee-convergente',
    slug: 'pensee-convergente',
    titre: 'Pensée convergente',
    domaineId: 'modes-pensee',
    chapitreId: 'ouvrir-et-trier',
    resume: 'Sélectionner, clarifier, renforcer et simplifier pour transformer l’abondance en piste solide.',
    definition:
      "La pensée convergente consiste à regrouper, filtrer, fusionner et préciser les idées afin d'identifier ce qui mérite une itération supplémentaire.",
    but: "Transformer l'ouverture en direction claire sans détruire la singularité acquise.",
    pourquoiCestImportant:
      "Créer ne consiste pas seulement à ouvrir. Il faut aussi choisir l'essentiel, renforcer le prometteur et éliminer le faible pour faire émerger une forme forte.",
    quandLUtiliser:
      'Après une vraie phase de divergence, ou quand un ensemble de pistes doit être traduit en choix.',
    commentFaire: [
      'Classe les pistes par potentiel : à jeter, à garder, à fusionner, à transformer.',
      'Évalue avec plusieurs critères : originalité, clarté, pertinence, profondeur, faisabilité, impact.',
      "Reformule les meilleures pistes en une phrase lisible avant de décider d'aller plus loin.",
    ],
    questionsCles: [
      'Quelles idées sont réellement fortes ?',
      'Quelles idées sont claires mais banales ?',
      'Quelles idées sont originales mais floues ?',
      "Quelle piste mérite une nouvelle itération ?",
    ],
    exempleSimple:
      "Parmi vingt idées, tu peux n'en garder que trois, puis fusionner deux d'entre elles pour obtenir une version plus dense et plus claire.",
    erreursFrequentes: [
      'Converger trop tôt.',
      'Ne choisir que le plus facile au lieu du plus fertile.',
      'Simplifier à un point où toute signature disparaît.',
    ],
    miniExercice:
      'Prends vingt idées produites en divergence et classe-les en quatre catégories : jeter, garder, fusionner, transformer.',
    notionsLiees: ['pensee-divergente', 'evaluer-idee', 'simplifier-sans-appauvrir'],
    tags: ['tri', 'selection', 'clarification'],
    niveau: 'base',
  }),
  notion({
    id: 'pensee-analogique',
    slug: 'pensee-analogique',
    titre: 'Pensée analogique',
    domaineId: 'modes-pensee',
    chapitreId: 'decentrer-et-donner-sens',
    resume: "Importer la logique d'un autre domaine pour éclairer autrement un problème.",
    definition:
      "La pensée analogique consiste à chercher des structures utiles dans d'autres domaines puis à en extraire une logique opérante.",
    but: 'Sortir des réflexes habituels en forçant un décentrement fertile.',
    pourquoiCestImportant:
      'Les idées inédites naissent souvent du croisement de cadres éloignés. Une bonne analogie révèle une structure cachée, elle ne sert pas seulement de décoration.',
    quandLUtiliser:
      'Quand le problème est trop familier, que les solutions se ressemblent ou que le langage habituel appauvrit la réflexion.',
    commentFaire: [
      'Choisis un domaine étranger : jardin, organisme, ville, partition, négociation, écosystème.',
      'Liste les règles, rythmes, tensions ou cycles présents dans ce domaine.',
      'Transfère seulement les logiques utiles, pas le vernis imagé.',
    ],
    questionsCles: [
      'À quoi cela ressemble-t-il dans un autre domaine ?',
      'Quelle logique étrangère puis-je importer ?',
      'Quel spécialiste verrait ici quelque chose que je ne vois pas ?',
      'Quelle analogie révèle une structure cachée ?',
    ],
    exempleSimple:
      "Gérer un projet comme un jardin : semer, arroser, tailler, protéger, accepter les saisons et éviter d'étouffer la croissance.",
    erreursFrequentes: [
      'Utiliser une image jolie mais vide.',
      'Copier une analogie sans vérifier si la logique est vraiment transférable.',
      "Rester dans des domaines trop proches pour créer un vrai déplacement.",
    ],
    miniExercice:
      'Décris ton problème actuel comme un organisme, une ville, une forêt et une musique. Note ce que chaque analogie change dans ta compréhension.',
    notionsLiees: ['changer-point-de-vue', 'pensee-systemique', 'combinaison-forcee'],
    tags: ['analogie', 'transfert', 'decentrement'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'pensee-inversee',
    slug: 'pensee-inversee',
    titre: 'Pensée inversée',
    domaineId: 'modes-pensee',
    chapitreId: 'decentrer-et-donner-sens',
    resume: 'Retourner une logique habituelle pour faire apparaître ce que les réflexes cachent.',
    definition:
      "La pensée inversée consiste à prendre le contre-pied d'un but, d'une fonction, d'une valeur ou d'un point de vue afin de briser les rails mentaux dominants.",
    but: 'Faire apparaître des pistes invisibles dans le cadre normal du problème.',
    pourquoiCestImportant:
      "Le cerveau adore continuer dans la même direction. L'inversion est un levier simple pour débusquer les hypothèses implicites qui enferment une recherche.",
    quandLUtiliser:
      'Quand toutes les solutions semblent suivre la même logique ou quand une contrainte paraît impossible à contourner.',
    commentFaire: [
      'Inverse le but : comment échouer totalement ? comment renforcer le problème ?',
      'Inverse la valeur : et si le défaut devenait la ressource ?',
      "Inverse le point de vue : que se passe-t-il si le contrôle n'est plus la valeur centrale ?",
    ],
    questionsCles: [
      'Et si je faisais l’inverse ?',
      'Et si le problème réel était ailleurs ?',
      'Et si la faiblesse devenait la force ?',
      'Et si la solution classique empêchait la vraie solution ?',
    ],
    exempleSimple:
      "Au lieu de chercher à convaincre quelqu'un, cherche à comprendre sa résistance et conçois une réponse qui respecte cette résistance.",
    erreursFrequentes: [
      "Faire l'inverse juste pour surprendre.",
      'Prendre le contre-pied sans en tirer une logique exploitable.',
      'Confondre inversion utile et contradiction gratuite.',
    ],
    miniExercice:
      'Prends dix principes normaux de ton sujet et inverse-les un par un. Cherche ensuite lequel produit un déplacement réellement intéressant.',
    notionsLiees: ['contrainte-volontaire', 'reformuler-vrai-probleme', 'chercher-tension'],
    tags: ['inversion', 'contre-pied', 'blocage'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'pensee-symbolique',
    slug: 'pensee-symbolique',
    titre: 'Pensée symbolique',
    domaineId: 'modes-pensee',
    chapitreId: 'decentrer-et-donner-sens',
    resume: 'Chercher ce qu’une forme raconte au-delà de sa seule fonction.',
    definition:
      "La pensée symbolique explore le sens, les métaphores, la charge émotionnelle et la portée culturelle d'une idée, d'un objet ou d'un dispositif.",
    but: 'Donner profondeur, identité et résonance à une création.',
    pourquoiCestImportant:
      "Une idée forte agit souvent à plusieurs niveaux à la fois : pratique, visuel, émotionnel et symbolique. Sans cela, elle peut rester fonctionnelle mais plate.",
    quandLUtiliser:
      'Quand une idée fonctionne mais manque de présence, de sens ou de tension émotionnelle.',
    commentFaire: [
      'Demande ce que la forme représente au-delà de ce qu’elle fait.',
      'Liste les métaphores, émotions et tensions humaines qu’elle évoque.',
      'Relie ce niveau symbolique à une fonction réelle pour éviter le vide décoratif.',
    ],
    questionsCles: [
      'Qu’est-ce que cela représente ?',
      'Quelle émotion cela incarne-t-il ?',
      'Quelle tension humaine cela traduit-elle ?',
      'Que raconte cette forme au-delà de son usage ?',
    ],
    exempleSimple:
      "Une porte fermée peut représenter l'exclusion, le mystère, l'épreuve ou l'interdit, selon le contexte et le dispositif.",
    erreursFrequentes: [
      'Ajouter du symbolique déconnecté de la fonction.',
      'Empiler des signes sans cohérence.',
      'Croire que le sens profond dispense de clarté.',
    ],
    miniExercice:
      'Choisis un objet banal et note cinq choses qu’il peut symboliser. Garde seulement celles qui peuvent nourrir une création réelle.',
    notionsLiees: ['superposer-couches', 'signature-unique', 'chercher-tension'],
    tags: ['symbolique', 'profondeur', 'sens'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'pensee-systemique',
    slug: 'pensee-systemique',
    titre: 'Pensée systémique',
    domaineId: 'modes-pensee',
    chapitreId: 'decentrer-et-donner-sens',
    resume: 'Penser une idée dans son réseau de conséquences, de boucles et d’effets secondaires.',
    definition:
      "La pensée systémique consiste à voir une idée comme un élément qui agit dans un ensemble de relations plutôt que comme un bloc isolé.",
    but: 'Anticiper les effets en chaîne et concevoir des idées qui vivent bien avec leur contexte.',
    pourquoiCestImportant:
      "Une bonne idée locale peut devenir mauvaise si elle dégrade l'ensemble. La systémique permet d'anticiper pressions, dépendances, gains secondaires et coûts cachés.",
    quandLUtiliser:
      "Quand l'idée touche une organisation, un produit, un service, une communauté ou tout système avec interactions multiples.",
    commentFaire: [
      'Identifie les acteurs, ressources, contraintes et liens du système.',
      'Imagine les conséquences directes puis indirectes de l’ajout de ta piste.',
      'Repère les boucles de renforcement, de dépendance ou de friction.',
    ],
    questionsCles: [
      'Si j’ajoute cela, qu’est-ce qui change ailleurs ?',
      'Quels effets secondaires apparaissent ?',
      'Quelle dépendance est créée ?',
      'Cette idée vit-elle bien avec le reste ?',
    ],
    exempleSimple:
      "Introduire une messagerie instantanée dans une équipe modifie la vitesse, l'attention, la disponibilité, la hiérarchie implicite et l'organisation du temps.",
    erreursFrequentes: [
      'Penser une idée comme un objet fermé.',
      "Sous-estimer les conséquences indirectes parce qu'elles ne sont pas immédiates.",
      'Ne regarder que les gains sans regarder les compensations.',
    ],
    miniExercice:
      'Choisis une idée et note dix conséquences directes ou indirectes, positives et négatives.',
    notionsLiees: ['simulation-mentale', 'evaluer-idee', 'protocole-seance-creative'],
    tags: ['systemique', 'consequences', 'boucles'],
    niveau: 'intermediaire',
  }),
]

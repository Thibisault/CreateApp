import type { NotionPedagogique } from '@/types/content'

const notion = (item: NotionPedagogique) => item

export const notionsLeviers: NotionPedagogique[] = [
  notion({
    id: 'associer-idees-eloignees',
    slug: 'associer-idees-eloignees',
    titre: 'Associer des idées éloignées',
    domaineId: 'leviers',
    chapitreId: 'transformer-la-base',
    resume: 'Créer des ponts crédibles entre des éléments qui ne semblent pas aller ensemble.',
    definition:
      "Associer des idées éloignées consiste à relier plusieurs éléments par une mécanique, une contrainte ou une logique commune afin de produire une structure nouvelle.",
    but: 'Briser le banal en forçant des voisinages inattendus mais utiles.',
    pourquoiCestImportant:
      "L'association lointaine pousse à inventer une règle plus profonde qu'un simple collage de mots. Elle est au cœur de nombreuses idées vraiment neuves.",
    quandLUtiliser:
      'Quand une piste est trop convenue ou lorsque tu veux créer un concept à forte singularité.',
    commentFaire: [
      'Choisis deux à quatre éléments éloignés.',
      'Cherche leurs points communs, complémentarités ou tensions.',
      'Invente la règle qui les oblige à coexister dans un même système.',
    ],
    questionsCles: [
      'Quel lien caché pourrait exister entre eux ?',
      'Quelle fonction commune partagent-ils ?',
      "Que produisent-ils ensemble que chacun ne produit pas seul ?",
      'Quelle fusion étonnante mais crédible peut naître ?',
    ],
    exempleSimple:
      "Mémoire + architecture peut devenir un lieu dont les espaces se modifient selon les souvenirs que l'on souhaite activer.",
    erreursFrequentes: [
      'Coller deux mots sans inventer de lien réel.',
      'Choisir des éléments trop proches pour créer un déplacement net.',
      'Ignorer la règle qui rend leur coexistence crédible.',
    ],
    miniExercice:
      'Prends trois mots au hasard et invente un principe qui les relie tous dans un même dispositif.',
    notionsLiees: ['combinaison-forcee', 'pensee-analogique', 'signature-unique'],
    tags: ['association', 'fusion', 'ponts'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'deformer-existant',
    slug: 'deformer-existant',
    titre: "Déformer l'existant",
    domaineId: 'leviers',
    chapitreId: 'transformer-la-base',
    resume: 'Tordre une base connue pour faire émerger une autre nature du problème ou de la solution.',
    definition:
      "Déformer l'existant consiste à inverser, exagérer, déplacer, miniaturiser, fusionner, ralentir, accélérer ou changer la fonction d'une chose familière.",
    but: 'Créer du neuf à partir de matériaux existants au lieu d’attendre une invention pure.',
    pourquoiCestImportant:
      "Beaucoup d'idées fortes sont des transformations profondes, pas des apparitions ex nihilo. Déformer aide à sortir de la copie en surface.",
    quandLUtiliser:
      "Quand tu pars d'un objet, d'un service, d'une règle ou d'un rituel existant et que tu veux en tirer autre chose.",
    commentFaire: [
      'Liste dix déformations possibles : inverser, exagérer, déplacer, réduire, rendre vivant, changer le contexte.',
      'Choisis les transformations qui touchent la structure, pas seulement le style.',
      'Teste ensuite si la nouvelle forme produit une logique réellement différente.',
    ],
    questionsCles: [
      'Et si cela faisait l’inverse ?',
      'Et si cela changeait de fonction ?',
      'Et si cela n’agissait plus dans le même contexte ?',
      'Et si cela était poussé à l’extrême ?',
    ],
    exempleSimple:
      "Un agenda qui ne sert pas à planifier le futur mais à cartographier les motifs cachés du passé déforme profondément l'objet et son usage.",
    erreursFrequentes: [
      'Ne changer que la surface.',
      'Multiplier les déformations sans clarifier ce qu’elles produisent.',
      "Perdre tout lien lisible avec la fonction d'origine.",
    ],
    miniExercice:
      'Prends un système banal et fais-lui subir dix déformations différentes. Garde ensuite celles qui changent sa logique de fond.',
    notionsLiees: ['pensee-inversee', 'variation-systematique', 'eliminer-banal'],
    tags: ['deformation', 'transformation', 'structure'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'changer-point-de-vue',
    slug: 'changer-point-de-vue',
    titre: 'Changer de point de vue',
    domaineId: 'leviers',
    chapitreId: 'transformer-la-base',
    resume: 'Regarder la même scène depuis un autre regard pour faire apparaître des enjeux nouveaux.',
    definition:
      "Changer de point de vue consiste à observer une situation depuis l'utilisateur, l'objet, l'opposant, l'environnement, la matière, le passé ou le futur.",
    but: 'Faire émerger des besoins, tensions ou possibilités invisibles depuis son angle habituel.',
    pourquoiCestImportant:
      "Beaucoup d'idées apparaissent quand on cesse de se prendre comme centre naturel de l'analyse. Le décentrement change la matière même du problème.",
    quandLUtiliser:
      'Quand tu sens que ta lecture est trop centrée sur ton propre besoin ou quand une piste manque de finesse.',
    commentFaire: [
      'Choisis cinq points de vue radicalement différents.',
      'Décris ce que chacun perçoit, redoute, veut ou subit.',
      "Repère ensuite ce qui change dans ta compréhension de la scène ou du système.",
    ],
    questionsCles: [
      'Que voit l’objet ?',
      "Que ressent l'environnement ?",
      'Que vit l’opposant ?',
      'Que raconterait le futur de cette scène ?',
    ],
    exempleSimple:
      "Un escalier n'est pas le même objet vu par l'architecte, l'enfant, la personne âgée, l'objet transporté ou le bâtiment lui-même.",
    erreursFrequentes: [
      'Changer de voix narrative sans changer la structure du regard.',
      'Choisir des points de vue trop proches.',
      'Rester dans le commentaire au lieu de produire des conséquences créatives.',
    ],
    miniExercice:
      'Prends une situation et décris-la depuis cinq points de vue différents. Note ce que chaque regard révèle comme problème ou opportunité.',
    notionsLiees: ['pensee-analogique', 'pensee-systemique', 'reformuler-vrai-probleme'],
    tags: ['point-de-vue', 'empathie', 'decentrement'],
    niveau: 'base',
  }),
  notion({
    id: 'superposer-couches',
    slug: 'superposer-couches',
    titre: 'Superposer plusieurs couches',
    domaineId: 'leviers',
    chapitreId: 'densifier-la-piste',
    resume: 'Ajouter plusieurs dimensions à une même piste pour lui donner densité et résonance.',
    definition:
      "Superposer des couches consiste à enrichir une idée avec des dimensions fonctionnelles, émotionnelles, symboliques, narratives, sensorielles, temporelles ou sociales.",
    but: 'Passer d’une idée plate à une idée riche et plus mémorable.',
    pourquoiCestImportant:
      "Une idée qui ne fait qu'une chose a souvent peu de relief. Les couches bien choisies augmentent la profondeur sans forcément compliquer le concept.",
    quandLUtiliser:
      'Quand une piste est claire mais manque de présence, de densité ou de portée.',
    commentFaire: [
      'Commence par la couche fonctionnelle.',
      'Ajoute ensuite deux ou trois couches non fonctionnelles vraiment pertinentes.',
      'Vérifie que chaque couche renforce l’idée au lieu de la décorer.',
    ],
    questionsCles: [
      'Cette idée fait-elle seulement quelque chose ou dit-elle aussi quelque chose ?',
      'Quelle couche émotionnelle puis-je ajouter ?',
      'Quelle dimension temporelle ou sociale manque encore ?',
      'Qu’est-ce qui lui manque pour être plus dense ?',
    ],
    exempleSimple:
      "Une lampe peut être un outil, un symbole de sécurité, une source de tension, un rythme dans l'espace et un révélateur de vérité.",
    erreursFrequentes: [
      'Empiler des couches inutiles.',
      'Confondre richesse et surcharge.',
      'Ajouter des couches qui ne se répondent pas entre elles.',
    ],
    miniExercice:
      'Prends une idée simple et ajoute-lui trois couches non fonctionnelles : une émotion, un symbole et une conséquence sociale.',
    notionsLiees: ['pensee-symbolique', 'chercher-tension', 'signature-unique'],
    tags: ['couches', 'densite', 'profondeur'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'rendre-concret',
    slug: 'rendre-concret',
    titre: 'Rendre concret',
    domaineId: 'leviers',
    chapitreId: 'densifier-la-piste',
    resume: "Transformer une intuition séduisante mais vague en forme testable, explicable et montrable.",
    definition:
      "Rendre concret consiste à préciser la fonction, la forme, l'usage, les limites, les effets et le prototype minimal d'une idée.",
    but: 'Empêcher une idée de rester abstraite et donc impossible à juger correctement.',
    pourquoiCestImportant:
      "Une idée abstraite peut sembler forte tant qu'elle n'est pas confrontée à une forme. La concrétisation révèle sa vraie qualité et ouvre la voie au test.",
    quandLUtiliser:
      "Dès qu'une idée paraît prometteuse, ou quand une discussion tourne autour de formulations séduisantes mais floues.",
    commentFaire: [
      "Décris en une phrase simple ce que c'est et à quoi cela sert.",
      'Précise qui l’utilise, quand, dans quel contexte et avec quelles limites.',
      'Imagine le prototype minimal qui permet de la montrer ou de la tester rapidement.',
    ],
    questionsCles: [
      "Qu'est-ce que c'est exactement ?",
      'Qui l’utilise et quand ?',
      'Quel effet produit-elle en vrai ?',
      'Quel est le prototype minimal ?',
      "Comment l'expliquer simplement ?",
    ],
    exempleSimple:
      "Au lieu de dire 'une plateforme plus humaine', définis un rituel précis, une interface, une limite et une scène d'usage.",
    erreursFrequentes: [
      "Tomber amoureux d'une abstraction.",
      'Confondre concrétisation et solution finale figée.',
      'Ne pas montrer assez tôt la forme réelle de la piste.',
    ],
    miniExercice:
      "Pour une idée donnée, écris sa fonction, sa forme, son usage, sa limite, son effet et l'exemple de prototype le plus simple.",
    notionsLiees: ['externaliser-tot', 'simulation-mentale', 'evaluer-idee'],
    tags: ['concretisation', 'prototype', 'clarte'],
    niveau: 'base',
  }),
  notion({
    id: 'chercher-tension',
    slug: 'chercher-tension',
    titre: 'Chercher la tension',
    domaineId: 'leviers',
    chapitreId: 'densifier-la-piste',
    resume: "Identifier le prix, la contradiction ou le dilemme qui donne du relief à une idée.",
    definition:
      "Chercher la tension consiste à repérer l'opposition centrale qui rend une idée intéressante : avantage contre coût, liberté contre contrôle, vitesse contre précision, etc.",
    but: 'Donner du relief et de la force au lieu d’empiler des avantages abstraits.',
    pourquoiCestImportant:
      'Sans tension, beaucoup d’idées paraissent lisses et oublieuses. La contradiction bien choisie crée de la profondeur, de la décision et de la mémorisation.',
    quandLUtiliser:
      'Quand une idée semble trop parfaite, trop lisse ou sans vrai enjeu.',
    commentFaire: [
      'Liste ce que la piste donne et ce qu’elle retire.',
      'Cherche le prix à payer, le risque ou le dilemme qu’elle installe.',
      'Utilise cette tension pour enrichir la forme, le récit ou le choix utilisateur.',
    ],
    questionsCles: [
      'Qu’est-ce que cette idée donne ?',
      'Qu’est-ce qu’elle retire ?',
      'Quel risque l’accompagne ?',
      'Quelle opposition lui donne sa force ?',
    ],
    exempleSimple:
      "Un outil qui simplifie tout mais affaiblit peu à peu l'autonomie de celui qui l'utilise devient plus intéressant qu'un simple outil 'qui aide'.",
    erreursFrequentes: [
      'Ne chercher que des bénéfices.',
      'Ajouter une tension artificielle qui ne change rien à la structure.',
      'Confondre tension féconde et complication gratuite.',
    ],
    miniExercice:
      'Pour chaque idée importante, formule une tension centrale en une phrase : ce qu’elle apporte contre ce qu’elle exige ou fragilise.',
    notionsLiees: ['pensee-symbolique', 'evaluer-idee', 'signature-unique'],
    tags: ['tension', 'relief', 'contradiction'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'eliminer-banal',
    slug: 'eliminer-banal',
    titre: 'Éliminer le banal',
    domaineId: 'leviers',
    chapitreId: 'densifier-la-piste',
    resume: 'Retirer les réflexes, clichés et automatismes qui rendent une piste interchangeable.',
    definition:
      "Éliminer le banal consiste à identifier puis retirer ce qui relève du déjà-vu, de l'habitude ou de la solution standard sans personnalité.",
    but: 'Faire apparaître le vrai caractère de l’idée en retirant ce qui la rend générique.',
    pourquoiCestImportant:
      "Créer ne consiste pas seulement à ajouter. Enlever ce qui sent le cliché est souvent le geste qui fait émerger une identité plus nette.",
    quandLUtiliser:
      'Quand une idée paraît correcte mais oublieuse, ou quand tu sens trop de réflexes convenus dans sa forme.',
    commentFaire: [
      "Repère les éléments présents 'par réflexe'.",
      'Supprime le cliché principal et regarde ce qui reste vivant.',
      'Remplace-le ensuite par un choix plus juste, plus spécifique ou plus audacieux.',
    ],
    questionsCles: [
      'Qu’est-ce qui ressemble à tout le reste ?',
      'Quelle partie sent le déjà-vu ?',
      'Qu’ai-je mis seulement par habitude ?',
      'Quel détail rend cette idée interchangeable ?',
    ],
    exempleSimple:
      "Retirer le slogan générique d'une page d'accueil oblige à formuler une promesse précise et donc plus singulière.",
    erreursFrequentes: [
      'Ajouter encore plus au lieu de retirer.',
      'Supprimer le cliché sans proposer de remplacement plus juste.',
      'Confondre banalité et simplicité utile.',
    ],
    miniExercice:
      'Retire le cliché principal d’une idée, puis propose trois remplacements plus singuliers et plus crédibles.',
    notionsLiees: ['signature-unique', 'simplifier-sans-appauvrir', 'deformer-existant'],
    tags: ['banal', 'filtrage', 'cliches'],
    niveau: 'base',
  }),
  notion({
    id: 'signature-unique',
    slug: 'signature-unique',
    titre: 'Chercher la signature unique',
    domaineId: 'leviers',
    chapitreId: 'densifier-la-piste',
    resume: "Nommer le trait qui rend une idée reconnaissable et difficile à confondre avec une autre.",
    definition:
      "La signature unique est l'élément distinctif qui donne à une idée sa saveur propre, son empreinte mémorable et sa promesse singulière.",
    but: 'Identifier et renforcer ce qui fait la personnalité réelle d’une piste.',
    pourquoiCestImportant:
      "Retirer le banal ne suffit pas. Une idée forte affirme un noyau reconnaissable qui lui donne une présence durable.",
    quandLUtiliser:
      'Quand une piste est prometteuse mais encore trop générique, ou avant de la formuler publiquement.',
    commentFaire: [
      'Résume l’idée en une phrase d’identité.',
      'Cherche le détail, la règle ou la tension qui la rend immédiatement reconnaissable.',
      'Renforce cette signature dans la forme, le récit et l’usage concret.',
    ],
    questionsCles: [
      "Qu'est-ce qui rend cette idée reconnaissable ?",
      'Quel est son trait le plus singulier ?',
      'Que ne trouve-t-on pas ailleurs ?',
      'Quel détail la rend mémorable ?',
    ],
    exempleSimple:
      "Ce n'est pas 'un carnet'. C'est un carnet qui ne révèle son contenu qu'en fonction de la lumière et du moment de la journée.",
    erreursFrequentes: [
      'Se contenter d’un titre original sans vraie structure singulière.',
      'Confondre signature et gimmick gratuit.',
      'Ne pas relier la signature à une utilité ou à une tension réelle.',
    ],
    miniExercice:
      "Résume chacune de tes idées en une phrase qui commence par : 'Ce n'est pas seulement..., c'est...'.",
    notionsLiees: ['eliminer-banal', 'pensee-symbolique', 'associer-idees-eloignees'],
    tags: ['signature', 'identite', 'memorisation'],
    niveau: 'intermediaire',
  }),
]

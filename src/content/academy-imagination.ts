import type { NotionPedagogique } from '@/types/content'

const notion = (item: NotionPedagogique) => item

export const notionsImagination: NotionPedagogique[] = [
  notion({
    id: 'nourrir-son-esprit',
    slug: 'nourrir-son-esprit',
    titre: "Nourrir son esprit",
    domaineId: 'imagination',
    chapitreId: 'matiere-mentale',
    resume: 'Multiplier les sources pour enrichir la matière mentale qui servira aux idées futures.',
    definition:
      "Nourrir son esprit consiste à élargir volontairement ses références vers des domaines éloignés : architecture, biologie, artisanat, urbanisme, musique, mythologie, psychologie, histoire, rituels, etc.",
    but: 'Éviter une imagination pauvre parce que trop nourrie par les mêmes sources.',
    pourquoiCestImportant:
      "On ne combine que ce que l'on a déjà rencontré. Plus les matériaux mentaux sont variés, plus les analogies, symboles et structures possibles se multiplient.",
    quandLUtiliser:
      'En entretien de fond, entre les séances, ou quand tu constates que tes références tournent toujours autour des mêmes univers.',
    commentFaire: [
      'Choisis chaque semaine un domaine lointain à explorer.',
      'Note ce qui t’intéresse en termes de logiques, formes, tensions et rythmes plutôt que comme simple curiosité.',
      'Reviens ensuite à ton sujet principal avec ces matériaux en tête.',
    ],
    questionsCles: [
      'Mes références sont-elles trop étroites ?',
      'Quel domaine très différent pourrais-je explorer ?',
      "Qu'est-ce que je ne regarde jamais et qui pourrait m'enrichir ?",
    ],
    exempleSimple:
      "Observer les insectes sociaux, l'artisanat du verre ou l'urbanisme donne des logiques de structure et de relation qui peuvent nourrir un produit numérique.",
    erreursFrequentes: [
      'Consommer des références trop proches de son champ.',
      'Accumuler des inspirations sans jamais les traiter.',
      'Chercher des images au lieu de chercher des structures.',
    ],
    miniExercice:
      'Choisis un domaine que tu ignores presque totalement et note cinq logiques que tu pourrais transférer dans ton travail.',
    notionsLiees: ['pensee-analogique', 'visualisation-mentale', 'journal-creatif'],
    tags: ['references', 'matiere', 'inspiration'],
    niveau: 'base',
  }),
  notion({
    id: 'visualisation-mentale',
    slug: 'visualisation-mentale',
    titre: 'Visualisation mentale',
    domaineId: 'imagination',
    chapitreId: 'matiere-mentale',
    resume: 'Imaginer précisément une scène, un objet ou une situation pour donner chair aux idées.',
    definition:
      "La visualisation mentale consiste à décrire ce que l'on voit, remarque, ressent ou comprend dans une scène imaginée avec un fort niveau de détail.",
    but: 'Rendre les idées moins abstraites et plus incarnées avant même leur externalisation complète.',
    pourquoiCestImportant:
      "Une image mentale précise révèle des détails, manques et tensions que les formulations générales masquent souvent.",
    quandLUtiliser:
      'Quand une idée reste trop théorique ou lorsqu’il faut imaginer une scène d’usage, un espace, un objet ou un rituel.',
    commentFaire: [
      'Ferme les yeux et installe la scène.',
      'Décris ensuite ce qui apparaît en premier, ce qui bouge, ce qui te surprend et ce que tu remarques trop tard.',
      'Transforme ce matériau en notes ou en prototype sommaire.',
    ],
    questionsCles: [
      'Qu’est-ce que je vois précisément ?',
      'Quel détail frappe d’abord ?',
      'Quelle ambiance règne ?',
      'Qu’est-ce que je remarque trop tard ?',
    ],
    exempleSimple:
      "Imaginer précisément l'usage d'un objet révèle sa texture, son encombrement, son rythme et les gestes qu'il exige.",
    erreursFrequentes: [
      'Rester dans une image floue.',
      'Ne penser qu’au visuel et pas à l’atmosphère ou au rythme.',
      'Ne pas convertir la visualisation en matière exploitable.',
    ],
    miniExercice:
      'Imagine une scène simple pendant une minute puis écris-la avec le plus de détails concrets possible.',
    notionsLiees: ['simulation-mentale', 'rendre-concret', 'nourrir-son-esprit'],
    tags: ['visualisation', 'scene', 'details'],
    niveau: 'base',
  }),
  notion({
    id: 'simulation-mentale',
    slug: 'simulation-mentale',
    titre: 'Simulation mentale',
    domaineId: 'imagination',
    chapitreId: 'matiere-mentale',
    resume: 'Faire jouer l’idée dans le temps pour tester son fonctionnement réel et ses points de friction.',
    definition:
      "La simulation mentale consiste à imaginer, minute après minute, comment une idée fonctionne réellement dans le temps et dans l'usage.",
    but: 'Tester la réalité intérieure d’une piste avant même le prototype.',
    pourquoiCestImportant:
      "La simulation révèle vite où l'on s'ennuie, où ça bloque, où surgit une vraie décision ou une surprise significative.",
    quandLUtiliser:
      'Quand une idée semble bonne sur le papier mais qu’il faut vérifier sa dynamique réelle.',
    commentFaire: [
      'Choisis une scène précise.',
      'Simule cinq minutes d’usage ou de déroulement.',
      'Note les points de blocage, d’ennui, de surprise et de bascule.',
    ],
    questionsCles: [
      'Que se passe-t-il minute après minute ?',
      'À quel moment cela devient intéressant ?',
      'Où cela bloque-t-il ?',
      'Où surgit une vraie décision ?',
    ],
    exempleSimple:
      "Simuler cinq minutes d'utilisation d'un outil montre souvent que la promesse est claire mais que la mise en route est trop lourde ou trop vague.",
    erreursFrequentes: [
      'Rester au niveau de l’idée générale.',
      'Ne pas choisir une scène assez précise.',
      'Ignorer les moments faibles repérés pendant la simulation.',
    ],
    miniExercice:
      "Choisis une piste et simule mentalement cinq minutes d'usage réel en notant chaque moment d'intérêt ou de friction.",
    notionsLiees: ['visualisation-mentale', 'pensee-systemique', 'rendre-concret'],
    tags: ['simulation', 'usage', 'test'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'variation-systematique',
    slug: 'variation-systematique',
    titre: 'Variation systématique',
    domaineId: 'imagination',
    chapitreId: 'matiere-mentale',
    resume: "Créer plusieurs variantes d'une même piste pour l'enrichir sans repartir de zéro.",
    definition:
      "La variation systématique consiste à modifier méthodiquement l'intensité, le rythme, l'échelle, le contexte, le point de vue, le coût ou la conséquence d'une piste.",
    but: 'Élargir la qualité d’une idée sans dépendre uniquement de nouvelles idées brutes.',
    pourquoiCestImportant:
      "Une piste moyenne peut devenir forte par variation. Cela évite d'abandonner trop tôt ce qui n'était qu'à sa première forme.",
    quandLUtiliser:
      'Après avoir trouvé une piste intéressante mais encore insuffisante.',
    commentFaire: [
      'Garde le noyau de l’idée.',
      'Change un paramètre à la fois : échelle, rythme, intensité, contexte, public, conséquence.',
      'Compare ensuite les variantes selon leur clarté, leur tension et leur fertilité.',
    ],
    questionsCles: [
      'Quelles sont dix variantes possibles ?',
      'Que se passe-t-il si je change le rythme ou le contexte ?',
      'Quelle variante révèle le vrai potentiel de la piste ?',
    ],
    exempleSimple:
      "Une routine créative peut devenir plus forte selon qu'elle dure cinq minutes, quinze minutes, qu'elle soit solitaire ou collective, imposée ou choisie.",
    erreursFrequentes: [
      'Créer de fausses variantes trop proches.',
      'Changer plusieurs paramètres à la fois sans comprendre ce qui améliore réellement la piste.',
      'Jeter la piste de départ avant d’avoir exploré ses versions.',
    ],
    miniExercice:
      'Prends une idée et crée-en dix variantes en changeant systématiquement un seul paramètre à la fois.',
    notionsLiees: ['deformer-existant', 'iterer-une-idee', 'pensee-divergente'],
    tags: ['variation', 'itération', 'enrichissement'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'journal-creatif',
    slug: 'journal-creatif',
    titre: 'Journal créatif',
    domaineId: 'imagination',
    chapitreId: 'matiere-mentale',
    resume: 'Capturer les idées, questions, images et motifs avant qu’ils ne disparaissent.',
    definition:
      "Le journal créatif est une pratique de capture continue : idées brutes, images mentales, questions, sensations, structures étranges, liens inattendus et problèmes reformulés.",
    but: 'Constituer une matière première continue et repérer ses motifs personnels.',
    pourquoiCestImportant:
      "Les idées faibles aujourd'hui peuvent devenir très fortes plus tard si elles ont été gardées. Le journal aide aussi à repérer les thèmes récurrents qui te sont propres.",
    quandLUtiliser:
      'Au quotidien, après une séance, pendant une marche, ou dès qu’une idée traverse rapidement le champ.',
    commentFaire: [
      'Choisis un support simple et toujours accessible.',
      'Note rapidement sans chercher la forme parfaite.',
      'Relis régulièrement pour repérer les motifs, tensions et obsessions qui reviennent.',
    ],
    questionsCles: [
      "Qu'est-ce qui vaut d'être gardé ?",
      'Quels motifs personnels émergent ?',
      'Quelles questions reviennent souvent ?',
      'Quelles pistes pourraient être retravaillées ?',
    ],
    exempleSimple:
      "Une note prise sur une sensation, une analogie ou une tension observée dans la journée peut devenir le point de départ d'un concept plusieurs semaines après.",
    erreursFrequentes: [
      'Attendre que l’idée soit déjà claire pour la noter.',
      'Tout garder sans jamais relire.',
      'Faire du journal un lieu de jugement au lieu de capture.',
    ],
    miniExercice:
      'Pendant trois jours, capture cinq éléments par jour puis relis-les pour repérer deux motifs récurrents.',
    notionsLiees: ['nourrir-son-esprit', 'externaliser-tot', 'mode-emploi'],
    tags: ['capture', 'journal', 'motifs'],
    niveau: 'base',
  }),
  notion({
    id: 'incubation',
    slug: 'incubation',
    titre: 'Incubation',
    domaineId: 'imagination',
    chapitreId: 'matiere-mentale',
    resume: "Laisser une idée mûrir hors effort conscient pour permettre à l'arrière-plan mental de continuer le travail.",
    definition:
      "L'incubation consiste à faire une pause active : marche, sommeil, détour, autre tâche, afin de laisser l'esprit retravailler la matière sans pression directe.",
    but: 'Distinguer la pause fertile de l’abandon et respecter le rythme de maturation de certaines idées.',
    pourquoiCestImportant:
      "Certaines pistes se clarifient ou se transforment après un temps de latence. Forcer trop tôt peut appauvrir ou casser une idée encore en cours d'émergence.",
    quandLUtiliser:
      'Quand tu forces, quand une piste reste vivante mais refuse de se clarifier, ou après une séance de divergence dense.',
    commentFaire: [
      'Travaille la matière avant la pause pour donner quelque chose à mûrir.',
      'Éloigne-toi ensuite sans chercher à résoudre de force.',
      'Reviens plus tard et note ce qui te revient spontanément ou ce qui a changé dans ton regard.',
    ],
    questionsCles: [
      'Est-ce que je force trop ?',
      'Ai-je besoin d’une pause plutôt que d’un effort supplémentaire ?',
      'Quelle idée reste vivante après quelques heures ?',
      'Qu’est-ce qui me revient spontanément ?',
    ],
    exempleSimple:
      "Après avoir formulé un problème de plusieurs façons et généré des pistes, une marche ou une nuit de sommeil fait souvent émerger une reformulation plus juste.",
    erreursFrequentes: [
      'Confondre pause fertile et fuite.',
      'Interrompre avant d’avoir réellement travaillé la matière.',
      'Ne rien noter au retour.',
    ],
    miniExercice:
      'Travaille une idée vingt minutes, laisse-la reposer vingt-quatre heures, puis note ce qui a changé à froid.',
    notionsLiees: ['principes-travail-creatif', 'variation-systematique', 'protocole-seance-creative'],
    tags: ['incubation', 'maturation', 'rythme'],
    niveau: 'base',
  }),
]

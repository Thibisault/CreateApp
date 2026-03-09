import type { NotionPedagogique } from '@/types/content'

const notion = (item: NotionPedagogique) => item

export const notionsMethodes: NotionPedagogique[] = [
  notion({
    id: 'combinaison-forcee',
    slug: 'combinaison-forcee',
    titre: 'La combinaison forcée',
    domaineId: 'methodes',
    chapitreId: 'moteurs-de-generation',
    resume: 'Fusionner volontairement plusieurs éléments éloignés pour créer une friction fertile.',
    definition:
      "La combinaison forcée consiste à imposer la coexistence de plusieurs éléments sans rapport apparent, puis à inventer la règle qui les relie.",
    but: 'Déclencher rapidement des concepts inattendus quand le champ se ferme.',
    pourquoiCestImportant:
      'La contrainte de coexistence force le cerveau à inventer une structure nouvelle au lieu de rester dans les solutions habituelles.',
    quandLUtiliser:
      'En début de divergence, quand tu veux débloquer un sujet ou générer des concepts plus audacieux.',
    commentFaire: [
      'Choisis trois ou quatre mots très éloignés.',
      'Interdis-toi d’en sacrifier un seul.',
      'Cherche ensuite la règle, le contexte ou la tension qui rend leur coexistence crédible.',
    ],
    questionsCles: [
      'À quoi ressemble quelque chose qui est à la fois X, Y et Z ?',
      'Quelle règle les oblige à coexister ?',
      'Quelle tension naît de cette fusion ?',
      "Que se passe-t-il si aucun élément ne peut être retiré ?",
    ],
    exempleSimple:
      "Mémoire, météo et danse peuvent devenir un dispositif qui change de rythme et de contenu selon l'atmosphère du jour et les souvenirs activés par le mouvement.",
    erreursFrequentes: [
      'Produire une formule accrocheuse sans système.',
      'Choisir des mots trop proches.',
      "Abandonner avant d'avoir trouvé la vraie règle de coexistence.",
    ],
    miniExercice:
      'Choisis quatre mots sans rapport et construis un concept unique qui a sa logique propre.',
    notionsLiees: ['associer-idees-eloignees', 'pensee-divergente', 'matrice-creative'],
    tags: ['combinaison', 'friction', 'generation'],
    niveau: 'base',
  }),
  notion({
    id: 'matrice-creative',
    slug: 'matrice-creative',
    titre: 'La matrice créative',
    domaineId: 'methodes',
    chapitreId: 'moteurs-de-generation',
    resume: 'Organiser des colonnes de paramètres puis combiner les entrées pour multiplier les pistes.',
    definition:
      "La matrice créative est une méthode de combinaison organisée où l'on croise plusieurs colonnes comme le but, la contrainte, l'acteur, la ressource, l'environnement ou la perturbation.",
    but: 'Produire des pistes nombreuses sans retomber dans le chaos.',
    pourquoiCestImportant:
      "Cette méthode donne une structure de divergence utile quand l'imagination part trop dans tous les sens ou, à l'inverse, quand rien ne vient.",
    quandLUtiliser:
      'Pour générer beaucoup de variations sur un même sujet ou pour explorer un espace de solution de manière systématique.',
    commentFaire: [
      'Choisis quatre ou cinq colonnes pertinentes.',
      'Renseigne chaque colonne avec plusieurs entrées contrastées.',
      'Combine ensuite les lignes les plus surprenantes puis reformule les pistes fortes.',
    ],
    questionsCles: [
      'Quelles colonnes sont utiles ici ?',
      'Quelles combinaisons sont surprenantes mais cohérentes ?',
      'Quelle ligne révèle une piste forte ?',
      'Que manque-t-il pour rendre cette combinaison vivante ?',
    ],
    exempleSimple:
      "Croiser un but, une contrainte, un acteur et une perturbation aide à produire des concepts plus concrets qu'une simple liste d'idées.",
    erreursFrequentes: [
      'Créer trop de colonnes inutiles.',
      'Remplir la matrice avec des entrées trop proches.',
      'Ne pas retravailler les combinaisons brutes.',
    ],
    miniExercice:
      'Crée cinq colonnes de cinq entrées chacune puis explore au moins dix combinaisons inattendues.',
    notionsLiees: ['combinaison-forcee', 'pensee-divergente', 'reformuler-vrai-probleme'],
    tags: ['matrice', 'combinaisons', 'systematique'],
    niveau: 'intermediaire',
  }),
  notion({
    id: 'contrainte-volontaire',
    slug: 'contrainte-volontaire',
    titre: 'La contrainte volontaire',
    domaineId: 'methodes',
    chapitreId: 'moteurs-de-generation',
    resume: "S'imposer une limite pour forcer l'inventivité et éviter la solution évidente.",
    definition:
      "La contrainte volontaire consiste à s'interdire le moyen le plus évident ou à imposer une règle restrictive pour provoquer d'autres chemins.",
    but: 'Stimuler une créativité plus structurée que la liberté totale.',
    pourquoiCestImportant:
      'Une légère restriction oblige souvent à découvrir des solutions plus inventives, plus singulières et parfois plus élégantes.',
    quandLUtiliser:
      'Quand tu retombes systématiquement sur la même forme ou le même outil.',
    commentFaire: [
      'Supprime le levier habituel : budget, interface, matériau, canal, durée, contrôle.',
      'Formule clairement la règle du jeu.',
      'Cherche ensuite ce que cette limite rend possible plutôt que ce qu’elle empêche.',
    ],
    questionsCles: [
      'Que se passe-t-il si je m’interdis le moyen le plus évident ?',
      'Quelle contrainte rendrait ce travail plus original ?',
      "Qu'est-ce que je peux retirer pour forcer une autre voie ?",
    ],
    exempleSimple:
      "Créer une expérience d'apprentissage sans vidéo oblige à inventer d'autres rythmes, d'autres interactions et d'autres formes de preuve.",
    erreursFrequentes: [
      'Choisir une contrainte arbitraire qui ne nourrit rien.',
      'Utiliser la contrainte comme punition plutôt que comme moteur.',
      'Abandonner dès que la piste devient moins confortable.',
    ],
    miniExercice:
      'Imagine une solution sans utiliser son outil principal habituel, puis cherche ce que cette interdiction apporte de neuf.',
    notionsLiees: ['pensee-inversee', 'combinaison-forcee', 'pensee-divergente'],
    tags: ['contrainte', 'moteur', 'invention'],
    niveau: 'base',
  }),
  notion({
    id: 'reformuler-vrai-probleme',
    slug: 'reformuler-vrai-probleme',
    titre: 'Reformuler le vrai problème',
    domaineId: 'methodes',
    chapitreId: 'moteurs-de-generation',
    resume: 'Changer la manière de poser le sujet pour ouvrir de nouvelles solutions.',
    definition:
      "Reformuler le vrai problème consiste à écrire plusieurs versions du sujet pour révéler l'enjeu plus profond, plus large ou plus juste derrière la demande apparente.",
    but: 'Éviter de résoudre avec talent la mauvaise question.',
    pourquoiCestImportant:
      "De nombreuses impasses viennent d'un cadrage trop étroit ou mal formulé. Une meilleure question ouvre souvent plus qu'une meilleure réponse.",
    quandLUtiliser:
      'Au tout début, mais aussi à chaque blocage important ou quand une solution semble ne pas vraiment répondre au besoin.',
    commentFaire: [
      'Écris cinq à dix formulations du problème.',
      'Varie le niveau : plus concret, plus abstrait, plus humain, plus systémique, plus symbolique.',
      'Identifie ensuite la formulation qui ouvre le plus de pistes pertinentes.',
    ],
    questionsCles: [
      'Quel est le vrai problème derrière le problème ?',
      'Est-ce que je cherche une solution à la mauvaise question ?',
      "Qu'est-ce que j'essaie vraiment d'obtenir ?",
      'Quelle formulation est la plus fertile ?',
    ],
    exempleSimple:
      "Passer de 'comment rendre ce site plus beau ?' à 'comment rendre la décision plus claire et plus engageante ?' transforme tout l'espace de solution.",
    erreursFrequentes: [
      'Garder la formulation initiale par inertie.',
      'Rester trop abstrait après reformulation.',
      'Confondre reformulation et simple rewording cosmétique.',
    ],
    miniExercice:
      'Écris dix formulations différentes de ton problème actuel, puis choisis celle qui ouvre le plus de pistes crédibles.',
    notionsLiees: ['pensee-inversee', 'changer-point-de-vue', 'protocole-seance-creative'],
    tags: ['reformulation', 'cadrage', 'probleme'],
    niveau: 'base',
  }),
]

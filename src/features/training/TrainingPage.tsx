import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ExerciseCard } from '@/components/ui/ExerciseCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { SearchBar } from '@/components/ui/SearchBar'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { exercices } from '@/content'
import { getQuickExercise, getRandomExercise } from '@/utils/content'

export function TrainingPage() {
  const [query, setQuery] = useState('')
  const [skill, setSkill] = useState('all')
  const [difficulty, setDifficulty] = useState('all')
  const navigate = useNavigate()

  const skills = Array.from(new Set(exercices.map((exercise) => exercise.competence)))

  const filtered = useMemo(() => {
    return exercices.filter((exercise) => {
      const matchesQuery = [exercise.titre, exercise.objectif, exercise.tags.join(' ')]
        .join(' ')
        .toLowerCase()
        .includes(query.toLowerCase())
      const matchesSkill = skill === 'all' || exercise.competence === skill
      const matchesDifficulty = difficulty === 'all' || exercise.difficulte === difficulty
      return matchesQuery && matchesSkill && matchesDifficulty
    })
  }, [difficulty, query, skill])

  return (
    <PageContainer className="space-y-8">
      <Breadcrumbs items={[{ label: 'Accueil', href: '/' }, { label: 'Entraînement' }]} />
      <section>
        <SectionTitle eyebrow="Entraînement">Exercices ciblés</SectionTitle>
        <p className="max-w-reading text-sm leading-7 text-app-muted">
          Filtre par compétence, durée ou difficulté, lance un exercice aléatoire et garde une trace de tes notes.
        </p>
      </section>
      <div className="flex flex-wrap gap-3">
        <SearchBar value={query} onChange={setQuery} />
        <select
          value={skill}
          onChange={(event) => setSkill(event.target.value)}
          className="rounded-full border border-app-border/70 bg-app-surface px-4 py-3 text-sm text-app-ink"
        >
          <option value="all">Toutes les compétences</option>
          {skills.map((entry) => (
            <option key={entry} value={entry}>
              {entry}
            </option>
          ))}
        </select>
        <select
          value={difficulty}
          onChange={(event) => setDifficulty(event.target.value)}
          className="rounded-full border border-app-border/70 bg-app-surface px-4 py-3 text-sm text-app-ink"
        >
          <option value="all">Toutes les difficultés</option>
          <option value="base">Base</option>
          <option value="intermediaire">Intermédiaire</option>
        </select>
        <button
          onClick={() => navigate(`/entrainement/exercice/${getRandomExercise(query)?.slug ?? exercices[0].slug}`)}
          className="rounded-full bg-app-accent px-4 py-3 text-sm font-semibold text-white"
        >
          Exercice aléatoire
        </button>
        <button
          onClick={() => navigate(`/entrainement/exercice/${getQuickExercise().slug}`)}
          className="rounded-full border border-app-border/70 bg-app-surface px-4 py-3 text-sm font-semibold text-app-ink"
        >
          Exercice 5 min
        </button>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </PageContainer>
  )
}

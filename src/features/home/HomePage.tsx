import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Hammer, History, Sparkles, Star } from 'lucide-react'
import { notions } from '@/content'
import { ConceptCard } from '@/components/ui/ConceptCard'
import { InfoCard } from '@/components/ui/InfoCard'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { StatCard } from '@/components/ui/StatCard'
import { buildProgressSnapshot } from '@/utils/progress'
import { conceptMap, getQuickExercise, getRoutineOfDay } from '@/utils/content'
import { formatRelativeFromNow } from '@/utils/date'
import { useAppStore } from '@/stores/useAppStore'

export function HomePage() {
  const data = useAppStore((state) => state.data)
  const snapshot = buildProgressSnapshot(data)
  const routineOfDay = getRoutineOfDay()
  const quickExercise = getQuickExercise()
  const recentConcepts = data.historique
    .filter((item) => item.type === 'concept')
    .slice(0, 3)
    .map((item) => conceptMap.get(item.id))
    .filter((item): item is (typeof notions)[number] => Boolean(item))
  const favoriteConcepts = data.favoris
    .slice(0, 3)
    .map((id) => conceptMap.get(id))
    .filter((item): item is (typeof notions)[number] => Boolean(item))
  const lastIdea = [...data.ideesAtelier].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))[0]
  const revisitConcepts = data.notionsARetravailler
    .slice(0, 2)
    .map((id) => conceptMap.get(id))
    .filter((item): item is (typeof notions)[number] => Boolean(item))
  const resumePath = data.reprise?.chemin ?? '/academie'
  const studiedRatio = `${snapshot.studiedConcepts}/${snapshot.totalConcepts}`

  return (
    <PageContainer className="space-y-10">
      <section className="surface-grid overflow-hidden rounded-[2rem] border border-app-border/60 bg-app-surface/80 p-6 shadow-float">
        <p className="text-xs uppercase tracking-[0.24em] text-app-muted">Accueil</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-app-ink sm:text-5xl">
          Un atelier mobile-first pour apprendre, pratiquer et structurer la créativité.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-app-muted">
          Reprends ton parcours, lance un exercice rapide, développe une idée en plusieurs étapes et garde une
          trace locale de tout ton travail.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={resumePath}
            className="inline-flex items-center gap-2 rounded-full bg-app-accent px-5 py-3 text-sm font-semibold text-white"
          >
            Reprendre
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/atelier"
            className="inline-flex items-center gap-2 rounded-full border border-app-border/70 bg-app-surface px-5 py-3 text-sm font-semibold text-app-ink"
          >
            Ouvrir l'atelier
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Notions étudiées" value={studiedRatio} hint="Progression réelle de lecture" />
        <StatCard label="Favoris" value={String(snapshot.favoriteConcepts)} hint="Notions gardées sous la main" />
        <StatCard label="Exercices faits" value={String(snapshot.completedExercises)} hint="Traces enregistrées localement" />
        <StatCard label="Idées actives" value={String(snapshot.activeIdeas)} hint="Ateliers en cours" />
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <InfoCard title="Routine du jour" icon={<Sparkles size={18} />}>
          <p className="text-sm leading-7 text-app-muted">{routineOfDay.resume}</p>
          <p className="mt-4 text-sm font-semibold text-app-ink">{routineOfDay.objectif}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-app-surfaceMuted/50 px-3 py-1 text-xs font-semibold text-app-muted">
              {routineOfDay.duree}
            </span>
            <span className="rounded-full bg-app-surfaceMuted/50 px-3 py-1 text-xs font-semibold text-app-muted">
              {routineOfDay.frequence}
            </span>
          </div>
          <Link to={`/routines/${routineOfDay.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-app-accent">
            Voir la routine
            <ArrowRight size={16} />
          </Link>
        </InfoCard>

        <InfoCard title="Exercice rapide" icon={<BookOpen size={18} />}>
          <p className="text-sm leading-7 text-app-muted">{quickExercise.objectif}</p>
          <p className="mt-4 text-sm font-semibold text-app-ink">{quickExercise.dureeMinutes} minutes pour relancer une séance.</p>
          <Link
            to={`/entrainement/exercice/${quickExercise.slug}`}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-app-accent"
          >
            Lancer maintenant
            <ArrowRight size={16} />
          </Link>
        </InfoCard>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <InfoCard title="Dernière idée travaillée" icon={<Hammer size={18} />}>
          {lastIdea ? (
            <>
              <h3 className="text-lg font-semibold text-app-ink">{lastIdea.titre}</h3>
              <p className="mt-2 text-sm leading-7 text-app-muted">{lastIdea.descriptionInitiale || 'Aucune description initiale pour le moment.'}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.18em] text-app-muted">
                Mis à jour {formatRelativeFromNow(lastIdea.updatedAt)}
              </p>
              <Link to={`/atelier/${lastIdea.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-app-accent">
                Reprendre l'idée
                <ArrowRight size={16} />
              </Link>
            </>
          ) : (
            <p className="text-sm leading-7 text-app-muted">
              Aucun atelier démarré pour le moment. Commence une idée depuis l’atelier guidé.
            </p>
          )}
        </InfoCard>

        <InfoCard title="Progression récente" icon={<History size={18} />}>
          {data.historique.slice(0, 4).length ? (
            <div className="space-y-3">
              {data.historique.slice(0, 4).map((item) => (
                <Link key={item.chemin} to={item.chemin} className="block rounded-2xl bg-app-surfaceMuted/30 px-4 py-3">
                  <p className="text-sm font-semibold text-app-ink">{item.titre}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-app-muted">
                    {item.type} · {formatRelativeFromNow(item.dateIso)}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-sm leading-7 text-app-muted">Ton historique apparaîtra ici à mesure que tu explores l’app.</p>
          )}
        </InfoCard>
      </section>

      <section>
        <SectionTitle eyebrow="Repères">Favoris et notions à retravailler</SectionTitle>
        <div className="grid gap-5 lg:grid-cols-2">
          <InfoCard title="Favoris" icon={<Star size={18} />}>
            <div className="grid gap-4 md:grid-cols-2">
              {(favoriteConcepts.length ? favoriteConcepts : notions.slice(0, 2)).map((concept) => (
                <ConceptCard
                  key={concept.id}
                  concept={concept}
                  studied={data.notionsEtudiees.includes(concept.id)}
                  favorite={data.favoris.includes(concept.id)}
                />
              ))}
            </div>
          </InfoCard>
          <InfoCard title="À reprendre bientôt" icon={<BookOpen size={18} />}>
            <div className="grid gap-4 md:grid-cols-2">
              {(revisitConcepts.length ? revisitConcepts : recentConcepts).map((concept) => (
                <ConceptCard
                  key={concept.id}
                  concept={concept}
                  studied={data.notionsEtudiees.includes(concept.id)}
                  favorite={data.favoris.includes(concept.id)}
                />
              ))}
            </div>
          </InfoCard>
        </div>
      </section>

      <section>
        <SectionTitle eyebrow="Revenir vite">Derniers chapitres visités</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          {data.historique
            .filter((item) => item.type === 'chapitre')
            .slice(0, 3)
            .map((item) => (
              <Link key={item.chemin} to={item.chemin} className="rounded-3xl border border-app-border/60 bg-app-surface/85 p-5">
                <p className="text-sm font-semibold text-app-ink">{item.titre}</p>
                <p className="mt-2 text-sm text-app-muted">{formatRelativeFromNow(item.dateIso)}</p>
              </Link>
            ))}
          {!data.historique.filter((item) => item.type === 'chapitre').length ? (
            <InfoCard title="Explorer l'académie">
              <p className="text-sm leading-7 text-app-muted">
                Commence par les fondements ou lance un exercice pour alimenter ensuite ton parcours d’apprentissage.
              </p>
            </InfoCard>
          ) : null}
        </div>
      </section>
    </PageContainer>
  )
}

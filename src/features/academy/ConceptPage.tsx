import { Link, useParams } from 'react-router-dom'
import { Heart, RotateCcw, SquareCheckBig } from 'lucide-react'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ContentBlock } from '@/components/ui/ContentBlock'
import { EmptyState } from '@/components/ui/EmptyState'
import { ExampleBlock } from '@/components/ui/ExampleBlock'
import { ExerciseBlock } from '@/components/ui/ExerciseBlock'
import { PageContainer } from '@/components/ui/PageContainer'
import { QuestionList } from '@/components/ui/QuestionList'
import { TagChip } from '@/components/ui/TagChip'
import { chapterMap, conceptSlugMap, domainMap, getConceptNavigation, getRelatedConcepts } from '@/utils/content'
import { useAppStore } from '@/stores/useAppStore'

export function ConceptPage() {
  const { conceptSlug = '' } = useParams()
  const concept = conceptSlugMap.get(conceptSlug)
  const data = useAppStore((state) => state.data)
  const toggleFavori = useAppStore((state) => state.toggleFavori)
  const toggleEtudie = useAppStore((state) => state.toggleEtudie)
  const toggleRetravailler = useAppStore((state) => state.toggleRetravailler)
  const setNoteNotion = useAppStore((state) => state.setNoteNotion)

  if (!concept) {
    return (
      <PageContainer>
        <EmptyState title="Notion introuvable" description="Cette fiche n'existe pas ou son slug a changé." />
      </PageContainer>
    )
  }

  const chapter = chapterMap.get(concept.chapitreId)
  const domain = domainMap.get(concept.domaineId)
  const related = getRelatedConcepts(concept)
  const { precedent, suivant } = getConceptNavigation(concept.id)
  const note = data.notesNotions[concept.id] ?? ''
  const isFavorite = data.favoris.includes(concept.id)
  const isStudied = data.notionsEtudiees.includes(concept.id)
  const isRevisit = data.notionsARetravailler.includes(concept.id)

  return (
    <PageContainer className="space-y-6">
      <Breadcrumbs
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Académie', href: '/academie' },
          { label: domain?.titre ?? 'Domaine', href: domain ? `/academie/domaine/${domain.slug}` : '/academie' },
          { label: chapter?.titre ?? 'Chapitre', href: chapter ? `/academie/chapitre/${chapter.slug}` : '/academie' },
          { label: concept.titre },
        ]}
      />
      <section className="rounded-[2rem] border border-app-border/60 bg-app-surface/90 p-6 shadow-float">
        <div className="flex flex-wrap gap-2">
          {concept.tags.map((tag) => (
            <TagChip key={tag}>{tag}</TagChip>
          ))}
        </div>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-app-ink">{concept.titre}</h1>
        <p className="mt-3 max-w-reading text-sm leading-7 text-app-muted">{concept.resume}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button
            onClick={() => toggleFavori(concept.id)}
            className={`rounded-full px-4 py-3 text-sm font-semibold ${isFavorite ? 'bg-app-accent text-white' : 'border border-app-border/70 bg-app-surface'}`}
          >
            <span className="inline-flex items-center gap-2">
              <Heart size={16} />
              {isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
            </span>
          </button>
          <button
            onClick={() => toggleEtudie(concept.id)}
            className={`rounded-full px-4 py-3 text-sm font-semibold ${isStudied ? 'bg-app-success text-white' : 'border border-app-border/70 bg-app-surface'}`}
          >
            <span className="inline-flex items-center gap-2">
              <SquareCheckBig size={16} />
              {isStudied ? 'Marquée étudiée' : 'Marquer comme étudiée'}
            </span>
          </button>
          <button
            onClick={() => toggleRetravailler(concept.id)}
            className={`rounded-full px-4 py-3 text-sm font-semibold ${isRevisit ? 'bg-app-warning text-white' : 'border border-app-border/70 bg-app-surface'}`}
          >
            <span className="inline-flex items-center gap-2">
              <RotateCcw size={16} />
              {isRevisit ? 'Retirer de la reprise' : 'Ajouter à retravailler'}
            </span>
          </button>
        </div>
      </section>

      <div className="grid gap-4">
        <ContentBlock title="Définition">
          <p>{concept.definition}</p>
        </ContentBlock>
        <ContentBlock title="But">
          <p>{concept.but}</p>
        </ContentBlock>
        <ContentBlock title="Pourquoi c'est important" collapsedByDefault>
          <p>{concept.pourquoiCestImportant}</p>
        </ContentBlock>
        <ContentBlock title="Quand l'utiliser" collapsedByDefault>
          <p>{concept.quandLUtiliser}</p>
        </ContentBlock>
        <ContentBlock title="Comment faire">
          <QuestionList items={concept.commentFaire} />
        </ContentBlock>
        <ContentBlock title="Questions-clés">
          <QuestionList items={concept.questionsCles} />
        </ContentBlock>
        <ContentBlock title="Exemples" collapsedByDefault>
          <div className="space-y-3">
            <ExampleBlock label="Exemple simple" content={concept.exempleSimple} />
            {concept.exempleApprofondi ? <ExampleBlock label="Exemple approfondi" content={concept.exempleApprofondi} /> : null}
          </div>
        </ContentBlock>
        <ContentBlock title="Erreurs fréquentes" collapsedByDefault>
          <QuestionList items={concept.erreursFrequentes} />
        </ContentBlock>
        <ContentBlock title="Pratique">
          <div className="space-y-3">
            <ExerciseBlock title="Mini-exercice" description={concept.miniExercice} />
            {concept.exerciceApplique ? <ExerciseBlock title="Exercice appliqué" description={concept.exerciceApplique} /> : null}
          </div>
        </ContentBlock>
        <ContentBlock title="Notes personnelles">
          <textarea
            className="min-h-32 w-full rounded-3xl border border-app-border/60 bg-app-surface px-4 py-4 text-sm text-app-ink outline-none"
            value={note}
            onChange={(event) => setNoteNotion(concept.id, event.target.value)}
            placeholder="Écris ici ce que tu veux retenir, appliquer ou retravailler."
          />
        </ContentBlock>
      </div>

      {related.length ? (
        <section className="space-y-4">
          <h2 className="font-serif text-2xl text-app-ink">Notions liées</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <Link key={item.id} to={`/academie/notion/${item.slug}`} className="rounded-3xl border border-app-border/60 bg-app-surface/85 p-5">
                <p className="text-lg font-semibold text-app-ink">{item.titre}</p>
                <p className="mt-2 text-sm leading-7 text-app-muted">{item.resume}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="grid gap-4 md:grid-cols-2">
        {precedent ? (
          <Link to={`/academie/notion/${precedent.slug}`} className="rounded-3xl border border-app-border/60 bg-app-surface/85 p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-app-muted">Précédent</p>
            <p className="mt-2 text-lg font-semibold text-app-ink">{precedent.titre}</p>
          </Link>
        ) : <div />}
        {suivant ? (
          <Link to={`/academie/notion/${suivant.slug}`} className="rounded-3xl border border-app-border/60 bg-app-surface/85 p-5 text-right">
            <p className="text-xs uppercase tracking-[0.18em] text-app-muted">Suivant</p>
            <p className="mt-2 text-lg font-semibold text-app-ink">{suivant.titre}</p>
          </Link>
        ) : null}
      </section>
    </PageContainer>
  )
}

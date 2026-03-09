import { Link } from 'react-router-dom'
import { PageContainer } from '@/components/ui/PageContainer'

export function NotFoundPage() {
  return (
    <PageContainer className="flex min-h-[60vh] items-center justify-center">
      <div className="max-w-lg rounded-[2rem] border border-app-border/60 bg-app-surface/85 p-8 text-center shadow-float">
        <p className="text-xs uppercase tracking-[0.2em] text-app-muted">404</p>
        <h1 className="mt-3 font-serif text-4xl text-app-ink">Page introuvable</h1>
        <p className="mt-4 text-sm leading-7 text-app-muted">
          La route demandée n'existe pas. Reviens à l'accueil ou reprends ton parcours dans l'académie.
        </p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-app-accent px-5 py-3 text-sm font-semibold text-white">
          Retour à l'accueil
        </Link>
      </div>
    </PageContainer>
  )
}

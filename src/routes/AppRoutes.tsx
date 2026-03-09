import { Route, Routes } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import { AcademyHomePage } from '@/features/academy/AcademyHomePage'
import { ChapterPage } from '@/features/academy/ChapterPage'
import { ConceptPage } from '@/features/academy/ConceptPage'
import { DomainPage } from '@/features/academy/DomainPage'
import { HomePage } from '@/features/home/HomePage'
import { LibraryPage } from '@/features/library/LibraryPage'
import { NotFoundPage } from '@/features/not-found/NotFoundPage'
import { ProgressPage } from '@/features/progress/ProgressPage'
import { RoutinePage } from '@/features/routines/RoutinePage'
import { RoutinesPage } from '@/features/routines/RoutinesPage'
import { SettingsPage } from '@/features/settings/SettingsPage'
import { ExercisePage } from '@/features/training/ExercisePage'
import { TrainingPage } from '@/features/training/TrainingPage'
import { WorkshopIdeaPage } from '@/features/workshop/WorkshopIdeaPage'
import { WorkshopListPage } from '@/features/workshop/WorkshopListPage'
import { WorkshopStepPage } from '@/features/workshop/WorkshopStepPage'
import { RouteTracker } from '@/routes/RouteTracker'

export function AppRoutes() {
  return (
    <AppShell>
      <RouteTracker />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academie" element={<AcademyHomePage />} />
        <Route path="/academie/domaine/:domainSlug" element={<DomainPage />} />
        <Route path="/academie/chapitre/:chapterSlug" element={<ChapterPage />} />
        <Route path="/academie/notion/:conceptSlug" element={<ConceptPage />} />
        <Route path="/bibliotheque" element={<LibraryPage />} />
        <Route path="/atelier" element={<WorkshopListPage />} />
        <Route path="/atelier/:ideaId" element={<WorkshopIdeaPage />} />
        <Route path="/atelier/:ideaId/etape/:stepSlug" element={<WorkshopStepPage />} />
        <Route path="/entrainement" element={<TrainingPage />} />
        <Route path="/entrainement/exercice/:exerciseSlug" element={<ExercisePage />} />
        <Route path="/routines" element={<RoutinesPage />} />
        <Route path="/routines/:routineSlug" element={<RoutinePage />} />
        <Route path="/progression" element={<ProgressPage />} />
        <Route path="/reglages" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell>
  )
}

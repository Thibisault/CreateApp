import { create } from 'zustand'
import type { DonneesUtilisateur, HistoriqueItem } from '@/types/user'
import type { ReadingDensity, ThemePreference } from '@/types/user'
import { createIdea, createDefaultUserData, loadLocalUserData, resetLocalUserData, saveLocalUserData } from '@/utils/storage'

interface AppStoreState {
  data: DonneesUtilisateur
  installPromptEvent?: BeforeInstallPromptEvent | null
  setTheme: (theme: ThemePreference) => void
  setReadingDensity: (density: ReadingDensity) => void
  toggleFavori: (conceptId: string) => void
  toggleEtudie: (conceptId: string) => void
  toggleRetravailler: (conceptId: string) => void
  setNoteNotion: (conceptId: string, note: string) => void
  setExerciseNote: (exerciseId: string, note: string) => void
  completeExercise: (exerciseId: string) => void
  completeRoutine: (routineId: string) => void
  createWorkshopIdea: (title: string, description: string) => string
  updateIdeaBasics: (ideaId: string, title: string, description: string) => void
  updateIdeaResponse: (ideaId: string, stepId: string, content: string) => void
  setIdeaCurrentStep: (ideaId: string, stepId: string) => void
  deleteIdea: (ideaId: string) => void
  recordHistory: (item: HistoriqueItem) => void
  importData: (data: DonneesUtilisateur) => void
  resetData: () => void
  setInstallPromptEvent: (event: BeforeInstallPromptEvent | null) => void
}

function updateData(
  set: (partial: Partial<AppStoreState> | ((state: AppStoreState) => Partial<AppStoreState>)) => void,
  updater: (data: DonneesUtilisateur) => DonneesUtilisateur,
) {
  set((state) => {
    const data = updater(state.data)
    saveLocalUserData(data)
    return { data }
  })
}

export const useAppStore = create<AppStoreState>((set) => ({
  data: loadLocalUserData(),
  installPromptEvent: null,
  setTheme: (theme) =>
    updateData(set, (data) => ({
      ...data,
      preferences: { ...data.preferences, theme },
    })),
  setReadingDensity: (density) =>
    updateData(set, (data) => ({
      ...data,
      preferences: { ...data.preferences, densiteLecture: density },
    })),
  toggleFavori: (conceptId) =>
    updateData(set, (data) => ({
      ...data,
      favoris: data.favoris.includes(conceptId)
        ? data.favoris.filter((item) => item !== conceptId)
        : [conceptId, ...data.favoris],
    })),
  toggleEtudie: (conceptId) =>
    updateData(set, (data) => ({
      ...data,
      notionsEtudiees: data.notionsEtudiees.includes(conceptId)
        ? data.notionsEtudiees.filter((item) => item !== conceptId)
        : [conceptId, ...data.notionsEtudiees],
    })),
  toggleRetravailler: (conceptId) =>
    updateData(set, (data) => ({
      ...data,
      notionsARetravailler: data.notionsARetravailler.includes(conceptId)
        ? data.notionsARetravailler.filter((item) => item !== conceptId)
        : [conceptId, ...data.notionsARetravailler],
    })),
  setNoteNotion: (conceptId, note) =>
    updateData(set, (data) => ({
      ...data,
      notesNotions: {
        ...data.notesNotions,
        [conceptId]: note,
      },
    })),
  setExerciseNote: (exerciseId, note) =>
    updateData(set, (data) => ({
      ...data,
      notesExercices: {
        ...data.notesExercices,
        [exerciseId]: note,
      },
    })),
  completeExercise: (exerciseId) =>
    updateData(set, (data) => ({
      ...data,
      journauxExercices: [
        {
          id: crypto.randomUUID(),
          exerciceId: exerciseId,
          note: data.notesExercices[exerciseId] ?? '',
          completedAt: new Date().toISOString(),
        },
        ...data.journauxExercices,
      ],
    })),
  completeRoutine: (routineId) =>
    updateData(set, (data) => ({
      ...data,
      suivisRoutines: [
        {
          id: crypto.randomUUID(),
          routineId,
          completedAt: new Date().toISOString(),
        },
        ...data.suivisRoutines,
      ],
    })),
  createWorkshopIdea: (title, description) => {
    const idea = createIdea(title, description)
    updateData(set, (data) => ({
      ...data,
      ideesAtelier: [idea, ...data.ideesAtelier],
    }))
    return idea.id
  },
  updateIdeaBasics: (ideaId, title, description) =>
    updateData(set, (data) => ({
      ...data,
      ideesAtelier: data.ideesAtelier.map((idea) =>
        idea.id === ideaId
          ? {
              ...idea,
              titre: title,
              descriptionInitiale: description,
              updatedAt: new Date().toISOString(),
            }
          : idea,
      ),
    })),
  updateIdeaResponse: (ideaId, stepId, content) =>
    updateData(set, (data) => ({
      ...data,
      ideesAtelier: data.ideesAtelier.map((idea) => {
        if (idea.id !== ideaId) {
          return idea
        }

        const existing = idea.reponses.find((response) => response.etapeId === stepId)
        const nextResponses = existing
          ? idea.reponses.map((response) =>
              response.etapeId === stepId
                ? { ...response, contenu: content, updatedAt: new Date().toISOString() }
                : response,
            )
          : [
              ...idea.reponses,
              {
                etapeId: stepId,
                contenu: content,
                updatedAt: new Date().toISOString(),
              },
            ]

        return {
          ...idea,
          currentStepId: stepId,
          updatedAt: new Date().toISOString(),
          reponses: nextResponses,
        }
      }),
    })),
  setIdeaCurrentStep: (ideaId, stepId) =>
    updateData(set, (data) => ({
      ...data,
      ideesAtelier: data.ideesAtelier.map((idea) =>
        idea.id === ideaId
          ? {
              ...idea,
              currentStepId: stepId,
              updatedAt: new Date().toISOString(),
            }
          : idea,
      ),
    })),
  deleteIdea: (ideaId) =>
    updateData(set, (data) => ({
      ...data,
      ideesAtelier: data.ideesAtelier.filter((idea) => idea.id !== ideaId),
    })),
  recordHistory: (item) =>
    updateData(set, (data) => ({
      ...data,
      reprise: item,
      historique: [item, ...data.historique.filter((entry) => entry.chemin !== item.chemin)].slice(0, 12),
    })),
  importData: (data) => {
    saveLocalUserData(data)
    set({ data })
  },
  resetData: () => {
    const next = createDefaultUserData()
    resetLocalUserData()
    saveLocalUserData(next)
    set({ data: next })
  },
  setInstallPromptEvent: (event) => set({ installPromptEvent: event }),
}))

import { Link, NavLink } from 'react-router-dom'
import { BookOpen, BrainCircuit, Gauge, Hammer, Home, Library, Settings2, Target } from 'lucide-react'
import { appMeta } from '@/content'

const navItems = [
  { to: '/', label: 'Accueil', icon: Home },
  { to: '/academie', label: 'Académie', icon: BookOpen },
  { to: '/atelier', label: 'Atelier', icon: Hammer },
  { to: '/entrainement', label: 'Entraînement', icon: Target },
  { to: '/routines', label: 'Routines', icon: BrainCircuit },
  { to: '/bibliotheque', label: 'Bibliothèque', icon: Library },
  { to: '/progression', label: 'Progression', icon: Gauge },
  { to: '/reglages', label: 'Réglages', icon: Settings2 },
]

export function DesktopSidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-80 flex-col border-r border-app-border/60 bg-app-surface/70 px-6 py-8 backdrop-blur lg:flex">
      <Link to="/" className="rounded-3xl border border-app-border/60 bg-app-surfaceMuted/30 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-app-muted">Forge</p>
        <h1 className="mt-2 font-serif text-4xl text-app-ink">{appMeta.nom}</h1>
        <p className="mt-2 text-sm leading-7 text-app-muted">{appMeta.description}</p>
      </Link>
      <nav className="mt-8 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold ${
                  isActive ? 'bg-app-accent text-white' : 'text-app-ink hover:bg-app-surfaceMuted/40'
                }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

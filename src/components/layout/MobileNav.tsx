import { BookOpen, BrainCircuit, Gauge, Hammer, Home, Library, Settings2, Target } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Accueil', icon: Home },
  { to: '/academie', label: 'Académie', icon: BookOpen },
  { to: '/atelier', label: 'Atelier', icon: Hammer },
  { to: '/entrainement', label: 'Pratique', icon: Target },
  { to: '/routines', label: 'Routines', icon: BrainCircuit },
  { to: '/bibliotheque', label: 'Biblio', icon: Library },
  { to: '/progression', label: 'Suivi', icon: Gauge },
  { to: '/reglages', label: 'Réglages', icon: Settings2 },
]

export function MobileNav() {
  return (
    <nav className="safe-bottom safe-left safe-right fixed bottom-0 left-0 right-0 z-30 border-t border-app-border/70 bg-app-surface/95 backdrop-blur lg:hidden">
      <div className="grid min-h-[var(--mobile-nav-height)] grid-cols-4 gap-2 px-3 py-3">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center rounded-2xl px-2 py-2 text-[11px] font-semibold ${
                  isActive ? 'bg-app-accent text-white' : 'text-app-muted'
                }`
              }
            >
              <Icon size={17} />
              <span className="mt-1">{item.label}</span>
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}

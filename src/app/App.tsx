import { HashRouter } from 'react-router-dom'
import { AppRoutes } from '@/routes/AppRoutes'
import { ThemeSync } from '@/routes/ThemeSync'

export function App() {
  return (
    <HashRouter>
      <ThemeSync />
      <AppRoutes />
    </HashRouter>
  )
}

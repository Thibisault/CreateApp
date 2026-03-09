import type { PropsWithChildren } from 'react'
import { DesktopSidebar } from '@/components/layout/DesktopSidebar'
import { MobileNav } from '@/components/layout/MobileNav'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen lg:flex">
      <DesktopSidebar />
      <main className="min-h-screen flex-1 safe-top safe-left safe-right">{children}</main>
      <MobileNav />
    </div>
  )
}

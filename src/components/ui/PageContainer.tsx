import type { PropsWithChildren } from 'react'
import { clsx } from 'clsx'

interface PageContainerProps extends PropsWithChildren {
  className?: string
}

export function PageContainer({ children, className }: PageContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full max-w-6xl px-4 pb-[var(--mobile-page-bottom)] pt-6 sm:px-6 lg:px-8 lg:pb-10',
        className,
      )}
    >
      {children}
    </div>
  )
}

'use client'

import { cn } from '@/lib/utils'
import { usePathname } from '@/i18n/routing'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/' && pathname?.startsWith(href))

  return (
    <a
      href={href}
      className={cn(
        'text-sm font-medium transition-colors duration-200',
        isActive ? 'text-gold-500' : 'text-gray-400 hover:text-white',
        className
      )}
    >
      {children}
    </a>
  )
}

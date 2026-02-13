import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ className, size = 'md', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('inline-flex items-center justify-center', sizes[size], className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Icon.displayName = 'Icon'

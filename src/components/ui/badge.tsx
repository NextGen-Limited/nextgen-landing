import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

type BadgeVariant = 'default' | 'gold' | 'outline' | 'success'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-gray-700 text-gray-300',
  gold: 'bg-gold-500/20 text-gold-400 border border-gold-500/30',
  outline: 'border border-gray-600 text-gray-400',
  success: 'bg-green-500/20 text-green-400 border border-green-500/30',
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

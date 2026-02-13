import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gold' | 'glass'
  hover?: boolean
}

const variants = {
  default: 'bg-gray-900 border-gray-800',
  gold: 'bg-gray-900 border-gold-500/30 hover:border-gold-500/60',
  glass: 'bg-white/5 border-white/10 backdrop-blur-sm',
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-2xl border p-6 transition-all duration-300',
          variants[variant],
          hover && 'hover:shadow-lg hover:shadow-gold-500/5 hover:-translate-y-1',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

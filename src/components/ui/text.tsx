import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
type TextColor = 'default' | 'muted' | 'light' | 'gold'

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize
  color?: TextColor
}

const sizes: Record<TextSize, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
}

const colors: Record<TextColor, string> = {
  default: 'text-white',
  muted: 'text-gray-400',
  light: 'text-gray-300',
  gold: 'text-gold-500',
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, size = 'md', color = 'default', children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn('leading-relaxed', sizes[size], colors[color], className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Text.displayName = 'Text'

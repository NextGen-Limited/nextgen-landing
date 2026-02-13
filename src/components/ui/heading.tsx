import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4'

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel
  gradient?: boolean
}

const styles: Record<HeadingLevel, string> = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight',
  h2: 'text-3xl md:text-4xl font-bold tracking-tight',
  h3: 'text-2xl md:text-3xl font-semibold',
  h4: 'text-xl md:text-2xl font-semibold',
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, level = 'h2', gradient = false, children, ...props }, ref) => {
    const Tag = level

    return (
      <Tag
        ref={ref}
        className={cn(
          styles[level],
          gradient && 'bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent',
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

Heading.displayName = 'Heading'

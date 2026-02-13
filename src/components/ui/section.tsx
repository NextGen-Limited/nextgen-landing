import { cn } from '@/lib/utils'
import { HTMLAttributes, forwardRef } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  size?: 'sm' | 'md' | 'lg'
  background?: 'default' | 'dark' | 'gradient'
}

const sizes = {
  sm: 'py-12 md:py-16',
  md: 'py-16 md:py-24',
  lg: 'py-24 md:py-32',
}

const backgrounds = {
  default: 'bg-black',
  dark: 'bg-gray-950',
  gradient: 'bg-gradient-to-b from-black via-gray-900 to-black',
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    { className, size = 'md', background = 'default', children, ...props },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(sizes[size], backgrounds[background], className)}
        {...props}
      >
        {children}
      </section>
    )
  }
)

Section.displayName = 'Section'

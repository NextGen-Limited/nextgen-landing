'use client'

import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'

interface CategoryFilterProps {
  categories: readonly string[]
  active: string
  onChange: (category: string) => void
}

export function CategoryFilter({ categories, active, onChange }: CategoryFilterProps) {
  const t = useTranslations('portfolio.categories')

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
            active === category
              ? 'bg-gold-500 text-black'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
          )}
        >
          {t(category === 'all' ? 'all' : category)}
        </button>
      ))}
    </div>
  )
}

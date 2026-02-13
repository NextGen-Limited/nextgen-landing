import { cn } from '@/lib/utils'
import type { Tech } from '@/lib/data/tech-stack'

interface TechLogoProps {
  tech: Tech
}

export function TechLogo({ tech }: TechLogoProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 rounded-lg border border-gray-700/50">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: tech.color || '#E6B800' }}
      />
      <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  )
}

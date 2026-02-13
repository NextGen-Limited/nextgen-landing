import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <a href="/" className={cn('flex items-center gap-2', className)}>
      <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
        <span className="text-black font-bold text-xl">N</span>
      </div>
      <span className="text-xl font-bold text-white">
        NextGen<span className="text-gold-500">.</span>
      </span>
    </a>
  )
}

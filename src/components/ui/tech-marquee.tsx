'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { TechLogo } from './tech-logo'
import type { Tech } from '@/lib/data/tech-stack'

interface TechMarqueeProps {
  items: Tech[]
  direction: 'left' | 'right'
}

export function TechMarquee({ items, direction }: TechMarqueeProps) {
  const shouldReduceMotion = useReducedMotion()
  const duplicated = [...items, ...items, ...items]

  if (shouldReduceMotion) {
    return (
      <div className="flex gap-4 justify-center flex-wrap">
        {items.map((item) => (
          <TechLogo key={item.name} tech={item} />
        ))}
      </div>
    )
  }

  const translateX = direction === 'left' ? [0, -1000] : [-1000, 0]

  return (
    <div className="overflow-hidden py-4">
      <motion.div
        className="flex gap-4"
        animate={{ x: translateX }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicated.map((item, i) => (
          <TechLogo key={`${item.name}-${i}`} tech={item} />
        ))}
      </motion.div>
    </div>
  )
}

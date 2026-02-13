'use client'

import { motion } from 'framer-motion'
import { Smartphone, Code, Layers, Lightbulb } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { Service } from '@/lib/data/services'

const iconMap = {
  smartphone: Smartphone,
  code: Code,
  layers: Layers,
  lightbulb: Lightbulb,
}

interface ServiceCardProps {
  service: Service
  isWide?: boolean
}

export function ServiceCard({ service, isWide = false }: ServiceCardProps) {
  const t = useTranslations(`services.${service.id}`)
  const Icon = iconMap[service.icon as keyof typeof iconMap]

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        variant="gold"
        className={`h-full ${isWide ? 'md:col-span-3' : ''}`}
      >
        <div className="flex flex-col h-full">
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-gold-500" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-3">
            {t('title')}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-4 flex-grow">
            {t('description')}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {service.features.map((feature) => (
              <Badge key={feature} variant="outline">
                {feature}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

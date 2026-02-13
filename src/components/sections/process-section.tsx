'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Search, Clipboard, Code, CheckCircle, Rocket } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/heading'
import { steps } from '@/lib/data/process'

const icons = {
  search: Search,
  clipboard: Clipboard,
  code: Code,
  'check-circle': CheckCircle,
  rocket: Rocket,
}

export function ProcessSection() {
  const t = useTranslations('process')

  return (
    <Section id="process" background="gradient">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Heading level="h2" className="mb-4">
            {t('title')}
          </Heading>
        </motion.div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-700" />
          <motion.div
            className="absolute top-8 left-0 h-0.5 bg-gold-500"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />

          <div className="flex justify-between items-start relative">
            {steps.map((step, i) => {
              const Icon = icons[step.icon as keyof typeof icons]
              return (
                <motion.div
                  key={step.number}
                  className="flex-1 flex flex-col items-center text-center px-4 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-gold-500 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-gold-500" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {t(`steps.${step.number}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    {t(`steps.${step.number}.description`)}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Mobile: Vertical layout */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = icons[step.icon as keyof typeof icons]
            return (
              <motion.div
                key={step.number}
                className="flex gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-900 border-2 border-gold-500 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {t(`steps.${step.number}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {t(`steps.${step.number}.description`)}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

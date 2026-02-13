'use client'

import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { ServiceCard } from '@/components/ui/service-card'
import { services } from '@/lib/data/services'

export function ServicesSection() {
  const t = useTranslations('services')

  return (
    <Section id="services" background="default">
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
          <Text color="muted" className="max-w-2xl mx-auto">
            {t('subtitle')}
          </Text>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 3 ? 'md:col-span-3' : ''}
            >
              <ServiceCard service={service} isWide={index === 3} />
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

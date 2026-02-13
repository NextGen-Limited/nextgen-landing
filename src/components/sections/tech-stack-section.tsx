'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/heading'
import { TechMarquee } from '@/components/ui/tech-marquee'
import { techRow1, techRow2 } from '@/lib/data/tech-stack'

export function TechStackSection() {
  const t = useTranslations('techStack')

  return (
    <Section id="tech-stack" background="default">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Heading level="h2" className="mb-4">
            {t('title')}
          </Heading>
        </motion.div>

        <div className="space-y-4">
          <TechMarquee items={techRow1} direction="left" />
          <TechMarquee items={techRow2} direction="right" />
        </div>
      </Container>
    </Section>
  )
}

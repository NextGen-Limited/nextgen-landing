'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Github, Linkedin, Send } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Section } from '@/components/ui/section'
import { Heading } from '@/components/ui/heading'
import { ContactForm } from '@/components/ui/contact-form'
import { ContactInfo } from '@/components/ui/contact-info'

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/nextgen-limited' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/nextgen-limited' },
  { name: 'Telegram', icon: Send, href: 'https://t.me/nextgenlimited' },
]

export function ContactSection() {
  const t = useTranslations('contact')

  return (
    <Section id="contact" background="dark">
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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:pl-12"
          >
            <ContactInfo />

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500 mb-4">{t('social.title')}</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-gold-500/10 hover:text-gold-500 transition-colors"
                    aria-label={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

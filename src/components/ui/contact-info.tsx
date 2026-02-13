'use client'

import { Mail, Phone, Calendar } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export function ContactInfo() {
  const t = useTranslations('contact')

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-semibold mb-4">{t('info.title')}</h3>
      </div>

      <div className="space-y-4">
        <a
          href="mailto:contact@nextgen.limited"
          className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <span>{t('info.email')}</span>
        </a>

        <a
          href="tel:+84123456789"
          className="flex items-center gap-3 text-gray-400 hover:text-gold-500 transition-colors"
        >
          <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <span>{t('info.phone')}</span>
        </a>
      </div>

      <div className="pt-4">
        <p className="text-sm text-gray-500 mb-3">{t('info.calendly')}</p>
        <Button
          variant="outline"
          onClick={() => {
            // Opens Calendly popup - replace with actual Calendly URL
            window.open('https://calendly.com/nextgen-limited', '_blank')
          }}
          icon={<Calendar className="w-4 h-4" />}
        >
          {t('info.calendly')}
        </Button>
      </div>
    </div>
  )
}

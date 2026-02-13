'use client'

import { useTranslations } from 'next-intl'
import { Github, Linkedin, Send } from 'lucide-react'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { LanguageSwitcher } from '@/components/ui/language-switcher'

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/nextgen-limited' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/nextgen-limited' },
  { name: 'Telegram', icon: Send, href: 'https://t.me/nextgenlimited' },
]

export function Footer() {
  const t = useTranslations('footer')
  const currentYear = new Date().getFullYear()

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <Container>
        <div className="py-12">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Logo className="mb-4" />
              <p className="text-gray-400 text-sm">{t('description')}</p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('columns.services.title')}</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('#services')} className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                    {t('columns.services.mobile')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('#services')} className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                    {t('columns.services.fullstack')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('#services')} className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                    {t('columns.services.e2e')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('#services')} className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                    {t('columns.services.consulting')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('columns.company.title')}</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('#process')} className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                    {t('columns.company.process')}
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('#portfolio')} className="text-gray-400 text-sm hover:text-gold-500 transition-colors">
                    {t('columns.company.about')}
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-white font-semibold mb-4">{t('columns.connect.title')}</h4>
              <div className="flex gap-3">
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
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              {t('copyright', { year: currentYear })}
            </p>
            <LanguageSwitcher />
          </div>
        </div>
      </Container>
    </footer>
  )
}

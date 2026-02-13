import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import type { Metadata } from 'next'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  const titles = {
    en: 'NextGen Limited - Professional Software Development',
    vi: 'NextGen Limited - Dịch vụ phát triển phần mềm chuyên nghiệp',
  }

  const descriptions = {
    en: 'We build mobile apps, full-stack solutions, and end-to-end software products for businesses worldwide. Expert iOS, Android, React Native, and Next.js development.',
    vi: 'Chúng tôi xây dựng ứng dụng di động, giải pháp full-stack và sản phẩm phần mềm trọn gói cho doanh nghiệp toàn cầu.',
  }

  return {
    metadataBase: new URL('https://nextgen.limited'),
    title: {
      default: titles[locale as 'en' | 'vi'] || titles.en,
      template: '%s | NextGen Limited',
    },
    description: descriptions[locale as 'en' | 'vi'] || descriptions.en,
    keywords: [
      'software development',
      'mobile apps',
      'full-stack',
      'iOS',
      'Android',
      'React Native',
      'Next.js',
      'outsourcing',
      'Vietnam',
    ],
    authors: [{ name: 'NextGen Limited' }],
    creator: 'NextGen Limited',
    openGraph: {
      type: 'website',
      locale: locale === 'vi' ? 'vi_VN' : 'en_US',
      url: 'https://nextgen.limited',
      siteName: 'NextGen Limited',
      title: titles[locale as 'en' | 'vi'] || titles.en,
      description: descriptions[locale as 'en' | 'vi'] || descriptions.en,
      images: [
        {
          url: '/og.png',
          width: 1200,
          height: 630,
          alt: 'NextGen Limited',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale as 'en' | 'vi'] || titles.en,
      description: descriptions[locale as 'en' | 'vi'] || descriptions.en,
      images: ['/og.png'],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as 'en' | 'vi')) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages}>
      <Header />
      {children}
      <Footer />
    </NextIntlClientProvider>
  )
}

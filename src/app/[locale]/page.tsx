import { HeroSection } from '@/components/sections/hero-section'
import { ServicesSection } from '@/components/sections/services-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { TechStackSection } from '@/components/sections/tech-stack-section'
import { ProcessSection } from '@/components/sections/process-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TechStackSection />
      <ProcessSection />
      <ContactSection />
    </main>
  )
}

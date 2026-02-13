'use client'

import dynamic from 'next/dynamic'
import { HeroContent } from './hero-content'
import { ScrollIndicator } from '@/components/effects/scroll-indicator'

const Hero3D = dynamic(
  () => import('@/components/effects/hero-3d').then((mod) => mod.Hero3D),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
    ),
  }
)

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black -z-20" />

      {/* 3D Scene */}
      <Hero3D />

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center relative">
        <HeroContent />
      </div>

      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  )
}

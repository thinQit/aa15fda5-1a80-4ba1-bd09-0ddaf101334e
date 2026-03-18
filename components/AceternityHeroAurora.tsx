'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { AuroraBackground } from '@/components/ui/backgrounds/aurora-background'
import { TextGenerateEffect } from '@/components/ui/text/text-generate-effect'

interface AceternityHeroAuroraProps {
  headline: string
  subheadline: string
  imageSrc: string
}

export default function AceternityHeroAurora({
  headline = 'An Italian Evening, Perfected',
  subheadline = 'Housemade pasta, wood-fired specialties, and warm hospitality in the heart of the city.',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/10375821.jpg',
}: Partial<AceternityHeroAuroraProps>) {
  return (
    <section className="relative">
      <AuroraBackground className="min-h-[85vh]">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#DDA15E]">Bella Notte</p>
            <h1 className="font-serif text-4xl font-bold text-white md:text-6xl">
              <TextGenerateEffect words={headline} />
            </h1>
            <p className="mt-5 max-w-xl text-white/90">{subheadline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button className="bg-[#722F37] text-white hover:bg-[#5f2730]">Reserve a Table</Button>
              <Button variant="outline" className="border-[#DDA15E] text-[#DDA15E] hover:bg-[#DDA15E]/10">View Menu</Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-white/80">
              <span className="rounded-full border border-white/30 px-3 py-1">Dine-In</span>
              <span className="rounded-full border border-white/30 px-3 py-1">Takeout</span>
              <span className="rounded-full border border-white/30 px-3 py-1">Catering</span>
            </div>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            <Image src={imageSrc} alt="Bella Notte hero dish" fill unoptimized className="object-cover" />
          </div>
        </div>
      </AuroraBackground>
    </section>
  )
}

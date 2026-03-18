"use client";

import { Button } from '@/components/ui/button'

interface CTASectionProps {
  headline: string
  subheadline: string
  primaryLabel: string
  secondaryLabel: string
}

export default function CTASection({
  headline = 'Plan Your Next Italian Night Out',
  subheadline = 'Reserve a table, order takeout, or ask about private dining and catering.',
  primaryLabel = 'Reserve Now',
  secondaryLabel = 'View Menu',
}: Partial<CTASectionProps>) {
  return (
    <section className="bg-[#606C38] py-16 text-[#FEFAE0]">
      <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
        <h2 className="font-serif text-3xl md:text-5xl">{headline}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#FEFAE0]/85">{subheadline}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button className="bg-[#DDA15E] text-[#2d1f14] hover:bg-[#c78b49]">{primaryLabel}</Button>
          <Button variant="outline" className="border-[#FEFAE0]/60 text-[#FEFAE0] hover:bg-white/10">{secondaryLabel}</Button>
        </div>
      </div>
    </section>
  )
}

"use client";

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { CheckCircle2, Wine } from 'lucide-react'

interface ChefStoryProps {
  chefName: string
  imageSrc: string
}

export default function ChefStory({
  chefName = 'Chef Marco Bellini',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg',
}: Partial<ChefStoryProps>) {
  return (
    <section id="about" className="bg-[#FEFAE0] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:px-6">
        <div className="relative h-[480px] overflow-hidden rounded-2xl">
          <Image src={imageSrc} alt={chefName} fill unoptimized className="object-cover" />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-[#722F37] md:text-5xl">Meet {chefName}</h2>
          <p className="mt-4 text-[#606C38]">Raised in Emilia-Romagna, Chef Marco brings old-world Italian traditions to every plate at Bella Notte.</p>
          <ul className="mt-6 space-y-3">
            <li className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#DDA15E]" /> Seasonal sourcing from local markets</li>
            <li className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#DDA15E]" /> Handmade pasta prepared daily</li>
            <li className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-[#DDA15E]" /> Thoughtful service and pairing guidance</li>
          </ul>
          <Card className="mt-8 border-[#DDA15E]/40 bg-white p-5">
            <div className="flex items-start gap-3">
              <Wine className="mt-0.5 h-5 w-5 text-[#722F37]" />
              <div>
                <h3 className="font-semibold text-[#722F37]">Signature Pairing</h3>
                <p className="mt-1 text-sm text-muted-foreground">Pappardelle al Ragù with a glass of Chianti Classico Riserva.</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client";

import { Button } from '@/components/ui/button'
import { Car, Accessibility, Clock3, MapPin } from 'lucide-react'

interface LocationMapSectionProps {
  mapEmbedUrl: string
  address: string
}

export default function LocationMapSection({
  mapEmbedUrl = 'https://www.google.com/maps?q=Mulberry+Street+New+York&output=embed',
  address = '245 Mulberry Street, New York, NY 10012',
}: Partial<LocationMapSectionProps>) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-2 md:px-6">
        <iframe src={mapEmbedUrl} className="h-[420px] w-full rounded-xl border" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div>
          <h2 className="font-serif text-3xl text-[#722F37] md:text-5xl">Visit Bella Notte</h2>
          <p className="mt-4 flex gap-2 text-[#606C38]"><MapPin className="h-4 w-4" /> {address}</p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex gap-2"><Clock3 className="h-4 w-4 text-[#DDA15E]" /> Dinner service daily</li>
            <li className="flex gap-2"><Car className="h-4 w-4 text-[#DDA15E]" /> Nearby garage parking available</li>
            <li className="flex gap-2"><Accessibility className="h-4 w-4 text-[#DDA15E]" /> Wheelchair-accessible entrance</li>
          </ul>
          <Button className="mt-8 bg-[#722F37] text-white hover:bg-[#5f2730]">Get Directions</Button>
        </div>
      </div>
    </section>
  )
}

"use client";

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { UtensilsCrossed, ShoppingBag, CalendarCheck2 } from 'lucide-react'

interface ReservationCTAProps {
  title: string
  note: string
}

export default function ReservationCTA({
  title = 'Reserve Your Table for Tonight',
  note = 'Parties of 6+ may require a credit card hold. Please notify us of allergies when booking.',
}: Partial<ReservationCTAProps>) {
  return (
    <section id="reservations" className="bg-[#722F37] py-20 text-[#FEFAE0] md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-serif text-3xl md:text-5xl">{title}</h2>
        <p className="mt-3 max-w-3xl text-[#FEFAE0]/85">{note}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Card className="border-[#DDA15E]/40 bg-white/10 p-5"><UtensilsCrossed className="h-5 w-5" /><h3 className="mt-3 font-semibold">Dine-In</h3><p className="text-sm text-[#FEFAE0]/80">Elegant dining room service.</p></Card>
          <Card className="border-[#DDA15E]/40 bg-white/10 p-5"><ShoppingBag className="h-5 w-5" /><h3 className="mt-3 font-semibold">Takeout</h3><p className="text-sm text-[#FEFAE0]/80">Pickup-ready in under 30 minutes.</p></Card>
          <Card className="border-[#DDA15E]/40 bg-white/10 p-5"><CalendarCheck2 className="h-5 w-5" /><h3 className="mt-3 font-semibold">Catering</h3><p className="text-sm text-[#FEFAE0]/80">Family-style trays for events.</p></Card>
        </div>
        <Button className="mt-8 bg-[#DDA15E] text-[#2d1f14] hover:bg-[#c78b49]">Book Now</Button>
      </div>
    </section>
  )
}

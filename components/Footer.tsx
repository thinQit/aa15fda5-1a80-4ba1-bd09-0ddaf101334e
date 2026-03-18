"use client";

import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Instagram, Facebook, Clock3, MapPin, Phone } from 'lucide-react'

interface FooterProps {
  address: string
  hours: string[]
  phone: string
}

export default function Footer({
  address = '245 Mulberry Street, New York, NY 10012',
  hours = ['Mon-Thu: 4:00 PM - 10:00 PM', 'Fri-Sat: 4:00 PM - 11:30 PM', 'Sun: 3:00 PM - 9:30 PM'],
  phone = '(212) 555-0198',
}: Partial<FooterProps>) {
  return (
    <footer id="contact" className="border-t bg-[#722F37] text-[#FEFAE0]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4 md:px-6">
        <div>
          <h3 className="font-serif text-2xl font-bold">Bella Notte</h3>
          <p className="mt-3 text-sm text-[#FEFAE0]/80">Classic Italian dining, refined hospitality, and unforgettable evenings.</p>
        </div>

        <div>
          <h4 className="font-semibold">Visit</h4>
          <p className="mt-3 flex items-start gap-2 text-sm"><MapPin className="mt-0.5 h-4 w-4" /> {address}</p>
          <p className="mt-2 flex items-center gap-2 text-sm"><Phone className="h-4 w-4" /> {phone}</p>
        </div>

        <div>
          <h4 className="font-semibold">Hours</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {hours.map((h) => (
              <li key={h} className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> {h}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Newsletter</h4>
          <p className="mt-3 text-sm text-[#FEFAE0]/80">Seasonal menus, wine dinners, and special offers.</p>
          <div className="mt-3 flex gap-2">
            <Input placeholder="Your email" className="border-[#DDA15E]/50 bg-white text-black" />
            <Button className="bg-[#DDA15E] text-[#2d1f14] hover:bg-[#c78b49]">Join</Button>
          </div>
          <div className="mt-4 flex gap-3">
            <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></Link>
            <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
      <div className="border-t border-[#FEFAE0]/20 py-4 text-center text-xs text-[#FEFAE0]/70">
        © {new Date().getFullYear()} Bella Notte. All rights reserved.
      </div>
    </footer>
  )
}

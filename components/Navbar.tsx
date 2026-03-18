'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string;
  href: string;
}
interface NavbarProps {
  logo: string
  navItems: NavItem[]
  ctaLabel: string
  ctaHref: string
}

export default function Navbar({
  logo = 'Bella Notte',
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'Takeout', href: '/takeout' },
    { label: 'Catering', href: '/catering' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  ctaLabel = 'Reserve',
  ctaHref = '/reservations',
}: NavbarProps) {
  const [open, setOpen] = useState(false)

  // Could expose these as props for complete blueprint matching,
  // but default hard-coding for now for Austin location.
  const logoImageSrc =
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577054/site-images/restaurant/10207592.jpg'
  const phone = '(512) 555-0199'
  const directionsHref =
    'https://maps.google.com/?q=1122+E+6th+St,+Austin,+TX+78702'

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-primary/30">
            <Image src={logoImageSrc} alt={logo} fill unoptimized className="object-cover" />
          </div>
          <span className="font-serif text-xl font-bold text-foreground">{logo}</span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            asChild
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Open menu"
        >
          {open ? (
            <X className="h-5 w-5 text-primary" />
          ) : (
            <Menu className="h-5 w-5 text-primary" />
          )}
        </Button>
      </nav>

      <div className={cn('px-4 pb-4 md:hidden', open ? 'block' : 'hidden')}>
        <Card className="rounded-xl border-border bg-background/95 p-4">
          <div className="flex flex-col gap-3">
            {navItems.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={'tel:' + phone}
                className="flex items-center justify-center gap-2 rounded-lg border border-border p-2 text-sm text-foreground bg-background hover:bg-muted"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-border p-2 text-sm text-foreground bg-background hover:bg-muted"
              >
                <MapPin className="h-4 w-4" /> Directions
              </a>
            </div>
          </div>
        </Card>
      </div>
    </header>
  )
}

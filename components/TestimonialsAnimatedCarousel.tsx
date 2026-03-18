'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  source: string
}
interface TestimonialsAnimatedCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialsAnimatedCarousel({
  testimonials = [
    { quote: 'Best cacio e pepe I have had outside Rome.', name: 'Sophia M.', source: 'Google Reviews' },
    { quote: 'The service made our anniversary unforgettable.', name: 'Daniel K.', source: 'Yelp' },
    { quote: 'Catering was flawless for our office event.', name: 'Isabella R.', source: 'OpenTable' },
  ],
}: Partial<TestimonialsAnimatedCarouselProps>) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const active = testimonials[index]

  return (
    <section className="bg-[#FEFAE0] py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 className="font-serif text-3xl text-[#722F37] md:text-5xl">What Guests Are Saying</h2>
        <Card className="mt-8 rounded-xl border-[#DDA15E]/40 bg-white p-8 shadow-md">
          <div className="mb-4 flex justify-center gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[#DDA15E] text-[#DDA15E]" />)}</div>
          <p className="text-lg italic text-[#606C38]">“{active?.quote}”</p>
          <p className="mt-4 font-semibold text-[#722F37]">{active?.name}</p>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{active?.source}</p>
        </Card>
        <div className="mt-6 flex justify-center gap-3">
          <Button variant="outline" size="icon" onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}><ChevronLeft className="h-4 w-4" /></Button>
          <Button variant="outline" size="icon" onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}><ChevronRight className="h-4 w-4" /></Button>
        </div>
      </div>
    </section>
  )
}

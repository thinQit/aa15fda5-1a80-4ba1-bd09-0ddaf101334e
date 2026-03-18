'use client'

import Image from 'next/image'
import { useState } from 'react'
import { X } from 'lucide-react'

interface PhotoGalleryMasonryProps {
  images: string[]
  captions: string[]
}

export default function PhotoGalleryMasonry({
  images = [
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577064/site-images/restaurant/11236818.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577048/site-images/restaurant/12638920.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577086/site-images/restaurant/10520478.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577093/site-images/restaurant/1224789.jpg',
    'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/11236793.jpg',
  ],
  captions = ['Fresh handmade pasta', 'Intimate dining room', 'Fire-roasted specialties', 'Signature tiramisu', 'Seasonal antipasti', 'Craft cocktails'],
}: Partial<PhotoGalleryMasonryProps>) {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="gallery" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="font-serif text-3xl text-[#722F37] md:text-5xl">From Our Table</h2>
        <div className="mt-8 columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {images.map((src, i) => (
            <button key={src + i} onClick={() => setSelected(i)} className="group relative w-full overflow-hidden rounded-xl">
              <Image src={src} alt={captions[i] || 'Gallery image'} width={1200} height={800} unoptimized className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]" />
              <span className="absolute inset-x-0 bottom-0 bg-black/45 p-2 text-left text-xs text-white">{captions[i] || 'Bella Notte'}</span>
            </button>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4">
          <button onClick={() => setSelected(null)} className="absolute right-4 top-4 rounded-full bg-white p-2">
            <X className="h-4 w-4" />
          </button>
          <div className="relative w-full max-w-4xl overflow-hidden rounded-xl">
            <Image src={images[selected]} alt={captions[selected] || 'Selected gallery image'} width={1400} height={900} unoptimized className="h-auto w-full object-cover" />
          </div>
        </div>
      )}
    </section>
  )
}

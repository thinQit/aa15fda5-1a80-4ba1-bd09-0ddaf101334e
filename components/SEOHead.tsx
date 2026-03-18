"use client";

import { Metadata } from 'next'

interface SEOHeadProps {
  title: string
  description: string
  url: string
  imageSrc: string
}

export default function SEOHead({
  title = 'Bella Notte | Italian Restaurant',
  description = 'Bella Notte offers dine-in, takeout, and catering with handcrafted Italian cuisine.',
  url = 'https://bellanotte.example.com',
  imageSrc = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577053/site-images/restaurant/12387879.jpg',
}: Partial<SEOHeadProps>): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: imageSrc, width: 1200, height: 800 }],
      siteName: 'Bella Notte',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageSrc],
    },
    other: {
      'script:ld+json': JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Restaurant',
        name: 'Bella Notte',
        servesCuisine: 'Italian',
        url,
        image: imageSrc,
      }),
    },
  }
}

"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt: string;
  caption?: string;
}

interface GalleryMasonryProps {
  headline: string;
  subheadline?: string;
  images: GalleryImage[];
}

export default function GalleryMasonry({
  headline = "Gallery",
  subheadline = "A look at our seasonal dishes, warm interiors, and unforgettable evenings.",
  images = [
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577054/site-images/restaurant/10207592.jpg",
      alt: "Plated gourmet dish",
      caption: "Chef's tasting selection",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/10375821.jpg",
      alt: "Restaurant dining ambiance",
      caption: "Main dining room",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg",
      alt: "Crafted entrée",
      caption: "Seasonal entrée",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577064/site-images/restaurant/11236818.jpg",
      alt: "Wine and table setting",
      caption: "Curated wine pairings",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577048/site-images/restaurant/12638920.jpg",
      alt: "Dessert presentation",
      caption: "Dessert by our pastry chef",
    },
    {
      url: "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577086/site-images/restaurant/10520478.jpg",
      alt: "Open kitchen action",
      caption: "Evening service in motion",
    },
  ],
}: Partial<GalleryMasonryProps>) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map(function (img, i) {
              return (
                <div
                  key={i}
                  className="card-hover group relative aspect-square cursor-pointer overflow-hidden rounded-xl"
                  onClick={function () {
                    setSelectedImage(img);
                  }}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    width={700}
                    height={700}
                    unoptimized
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 transition-all group-hover:bg-foreground/30" />
                  {img.caption && (
                    <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
                      <p className="text-sm text-primary-foreground">{img.caption}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
              onClick={function () {
                setSelectedImage(null);
              }}
            >
              <Image
                src={selectedImage.url}
                alt={selectedImage.alt}
                width={1400}
                height={900}
                unoptimized
                className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

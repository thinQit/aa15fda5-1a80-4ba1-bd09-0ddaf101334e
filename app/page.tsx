export const dynamic = 'force-dynamic';

import AceternityHeroAurora from "@/components/AceternityHeroAurora";
import MenuTabsGrid from "@/components/MenuTabsGrid";
import ReservationCTA from "@/components/ReservationCTA";
import ChefStory from "@/components/ChefStory";
import PhotoGalleryMasonry from "@/components/PhotoGalleryMasonry";
import TestimonialsAnimatedCarousel from "@/components/TestimonialsAnimatedCarousel";
import LocationMapSection from "@/components/LocationMapSection";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";

export default function HomePage() {
  return (
    <div className="bg-background">
      <div className="animate-fade-in-up">
        <AceternityHeroAurora
          imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577054/site-images/restaurant/10207592.jpg"
          headline="A modern Italian night out—handmade pasta, wood-fired flavor, and a table waiting for you."
          subheadline="Bella Notte brings the warmth of a neighborhood trattoria to downtown Austin. Dine in for candlelit classics, grab takeout in minutes, or let us cater your next gathering."
          primaryCta={{ label: "Reserve a Table", href: "/reservations" }}
          secondaryCta={{ label: "View Full Menu", href: "/menu" }}
        />
      </div>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <StatsCounter
              stats={[
                { value: "4.7★", label: "Google Rating" },
                { value: "1,200+", label: "Guest Reviews" },
                { value: "2018", label: "Serving East Austin" },
                { value: "Daily", label: "Fresh Pasta Made In-House" },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <MenuTabsGrid />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <ReservationCTA />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <ChefStory />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <PhotoGalleryMasonry />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <TestimonialsAnimatedCarousel />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <LocationMapSection />
        </div>
      </ScrollReveal>
    </div>
  );
}

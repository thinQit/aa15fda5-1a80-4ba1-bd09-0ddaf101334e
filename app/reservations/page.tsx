export const dynamic = 'force-dynamic';

import ScrollReveal from "@/components/ScrollReveal";
import ReservationForm from "@/components/ReservationForm";
import CTASection from "@/components/CTASection";

export default function ReservationsPage() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577052/site-images/restaurant/12538355.jpg')",
        }}
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">Reservations at Bella Notte</h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/90">
            Book online for the quickest confirmation. For large parties and events, send us a note and we’ll tailor the experience.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <div className="py-20 md:py-28 animate-fade-in-up">
          <ReservationForm />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <CTASection />
        </div>
      </ScrollReveal>
    </div>
  );
}

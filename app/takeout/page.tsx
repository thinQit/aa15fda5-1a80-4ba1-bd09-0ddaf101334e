export const dynamic = 'force-dynamic';

import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";

export default function TakeoutPage() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577093/site-images/restaurant/1224789.jpg')",
        }}
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">Take Bella Notte home</h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/90">
            Order ahead for pickup—fresh, carefully packed, and ready when you are.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              "Choose your favorites",
              "Select pickup time",
              "Grab & go at the host stand",
            ].map((step) => (
              <Card key={step} className="p-6 bg-card text-card-foreground border-border card-hover">
                <h3 className="text-xl font-semibold">{step}</h3>
              </Card>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="animate-fade-in-up">
          <CTASection />
        </div>
      </ScrollReveal>
    </div>
  );
}

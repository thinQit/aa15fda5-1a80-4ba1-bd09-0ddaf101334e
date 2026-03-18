export const dynamic = 'force-dynamic';

import ScrollReveal from "@/components/ScrollReveal";
import CateringInquiryForm from "@/components/CateringInquiryForm";
import { Card } from "@/components/ui/card";

export default function CateringPage() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577064/site-images/restaurant/11236818.jpg')",
        }}
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">Catering that feels like a Bella Notte dinner party</h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/90">
            From office lunches to weddings, we bring Italian classics, thoughtful presentation, and reliable timing.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:gap-8 md:grid-cols-3">
            {["Trattoria Lunch — $24 / person", "Bella Notte Dinner — $38 / person", "Private Event — Starting at $2,500"].map(
              (tier) => (
                <Card key={tier} className="p-6 bg-card text-card-foreground border-border card-hover">
                  <h3 className="text-xl font-semibold">{tier}</h3>
                </Card>
              )
            )}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <div className="py-20 md:py-28 animate-fade-in-up">
          <CateringInquiryForm />
        </div>
      </ScrollReveal>
    </div>
  );
}

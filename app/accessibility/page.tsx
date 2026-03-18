export const dynamic = 'force-dynamic';

import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";

export default function AccessibilityPage() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577071/site-images/restaurant/10918163.jpg')",
        }}
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">Accessibility at Bella Notte</h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/90">
            We’re committed to making our website and dining experience welcoming to everyone.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Card className="p-8 bg-card text-card-foreground border-border card-hover">
              <h2 className="text-3xl font-semibold">Our approach</h2>
              <ul className="mt-6 space-y-3 text-muted-foreground list-disc pl-6">
                <li>Keyboard-friendly navigation and clear focus states</li>
                <li>High-contrast text on cream backgrounds</li>
                <li>Alt text for gallery images</li>
                <li>Readable typography with generous line height</li>
                <li>Step-free entry available (call ahead for seating needs)</li>
              </ul>
            </Card>
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

export const dynamic = 'force-dynamic';

import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577087/site-images/restaurant/11236793.jpg')",
        }}
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">Privacy Policy</h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/90">
            How we handle reservation requests, contact forms, and newsletter subscriptions.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <Card className="p-8 bg-card text-card-foreground border-border card-hover">
              <h2 className="text-3xl font-semibold">Summary</h2>
              <ul className="mt-6 space-y-3 text-muted-foreground list-disc pl-6">
                <li>We may collect your name, email, phone number, and reservation details when you submit forms.</li>
                <li>We do not sell your personal information.</li>
                <li>We use basic analytics to understand site traffic and improve content.</li>
                <li>You can request deletion by emailing hello@bellanotte.com.</li>
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">Effective: March 18, 2026</p>
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

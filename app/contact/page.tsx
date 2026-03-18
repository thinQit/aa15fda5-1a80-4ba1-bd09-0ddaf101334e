export const dynamic = 'force-dynamic';

import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import LocationMapSection from "@/components/LocationMapSection";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577086/site-images/restaurant/10520478.jpg')",
        }}
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">Contact Bella Notte</h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/90">
            Questions about reservations, catering, or dietary needs? Reach out—we’re happy to help.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <div className="py-20 md:py-28 animate-fade-in-up">
          <LocationMapSection />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <ContactForm
              headline="Send a message"
              subheadline="For same-day reservations, please call. For catering and events, include your date and guest count."
              contactInfo={[
                { icon: "MapPin", label: "Address", value: "1122 E 6th St, Austin, TX 78702" },
                { icon: "Phone", label: "Phone", value: "(512) 555-0199" },
                { icon: "Mail", label: "Email", value: "hello@bellanotte.com" },
              ]}
            />
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}

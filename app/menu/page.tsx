export const dynamic = 'force-dynamic';

import HeroAurora from "@/components/HeroAurora";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import { Card } from "@/components/ui/card";

export default function MenuPage() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577061/site-images/restaurant/10375821.jpg')",
        }}
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">The Bella Notte menu</h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/90">
            Handmade pasta, classic Italian comfort, and seasonal specials—crafted for sharing.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6 grid gap-6 md:gap-8 md:grid-cols-2">
            {[
              {
                title: "Antipasti",
                items: [
                  "Burrata & Heirloom Tomatoes — $16",
                  "Calamari Fritti — $15",
                  "Arancini al Tartufo — $14",
                  "Caesar alla Romana — $13",
                ],
              },
              {
                title: "Pasta (House-made)",
                items: [
                  "Spaghetti alla Carbonara — $22",
                  "Tagliatelle Bolognese — $24",
                  "Rigatoni Vodka (Spicy) — $21",
                  "Mushroom Ravioli — $25",
                ],
              },
              {
                title: "Secondi",
                items: [
                  "Chicken Parmigiana — $26",
                  "Branzino al Limone — $32",
                  "Steak Tagliata — $38",
                  "Eggplant Parmigiana — $24",
                ],
              },
              {
                title: "Dolci & Beverages",
                items: ["Tiramisu Classico — $10", "Panna Cotta — $9", "Affogato — $8", "House Red / White — $11"],
              },
            ].map((section) => (
              <Card key={section.title} className="p-6 bg-card text-card-foreground border-border card-hover">
                <h2 className="text-2xl font-semibold">{section.title}</h2>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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

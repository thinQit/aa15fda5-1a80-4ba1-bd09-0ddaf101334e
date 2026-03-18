export const dynamic = 'force-dynamic';

import ScrollReveal from "@/components/ScrollReveal";
import TeamGrid from "@/components/TeamGrid";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <section
        className="relative min-h-[80vh] flex items-center justify-center animate-fade-in-up bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577048/site-images/restaurant/12638920.jpg')",
        }}
      >
        <div className="max-w-4xl text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">A love letter to Italian hospitality</h1>
          <p className="mt-6 text-base md:text-lg text-primary-foreground/90">
            Bella Notte is built around the simple idea that great food tastes better when shared—over wine, laughter, and unhurried conversation.
          </p>
        </div>
      </section>

      <ScrollReveal>
        <section className="py-20 md:py-28 bg-muted animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <TeamGrid
              headline="Meet the team behind Bella Notte"
              subheadline="From kitchen to floor, we’re focused on craft and warm service."
              members={[
                {
                  name: "Marco Bianchi",
                  title: "Executive Chef",
                  imageUrl:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
                  bio: "Classic Italian technique with a modern, seasonal point of view.",
                },
                {
                  name: "Elena Rossi",
                  title: "General Manager",
                  imageUrl:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
                  bio: "Hospitality-first leadership and a sharp eye for details.",
                },
                {
                  name: "Sofia Conti",
                  title: "Pastry Chef",
                  imageUrl:
                    "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
                  bio: "Desserts rooted in tradition with seasonal creativity.",
                },
              ]}
            />
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

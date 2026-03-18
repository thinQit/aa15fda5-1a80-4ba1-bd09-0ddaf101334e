import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Bella Notte | Modern Italian Restaurant in Austin",
  description:
    "Bella Notte is a modern Italian restaurant in East Austin serving handmade pasta, classic secondi, and desserts. Book reservations, order takeout, or request catering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} bg-background text-foreground antialiased`}>
        <Navbar
          logo="Bella Notte"
          navItems={[
            { label: "Home", href: "/" },
            { label: "Menu", href: "/menu" },
            { label: "Reservations", href: "/reservations" },
            { label: "Takeout", href: "/takeout" },
            { label: "Catering", href: "/catering" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ]}
          ctaLabel="Reserve"
          ctaHref="/reservations"
        />
        <main>{children}</main>
        <Footer
          brand="Bella Notte"
          description="Modern Italian dining in Austin—dine in, take out, or cater your next event."
          columns={[
            {
              title: "Restaurant",
              links: [
                { label: "Menu", href: "/menu" },
                { label: "Reservations", href: "/reservations" },
                { label: "Catering", href: "/catering" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Visit",
              links: [
                { label: "1122 E 6th St, Austin, TX 78702", href: "https://maps.google.com/?q=1122+E+6th+St,+Austin,+TX+78702" },
                { label: "(512) 555-0199", href: "tel:+15125550199" },
                { label: "hello@bellanotte.com", href: "mailto:hello@bellanotte.com" },
              ],
            },
            {
              title: "Legal",
              links: [
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Accessibility", href: "/accessibility" },
              ],
            },
          ]}
          copyright="© 2026 Bella Notte. All rights reserved."
        />
      </body>
    </html>
  );
}

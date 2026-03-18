"use client";

import { CalendarDays, Clock3, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const iconMap: Record<string, React.ElementType> = { Mail, 
  Phone,
  MapPin,
  Clock3,
  CalendarDays,
};

export default function ContactForm({
  headline = "Reservations & Private Dining",
  subheadline = "Planning dinner, a celebration, or a business gathering? Send us your details and our team will confirm shortly.",
  contactInfo = [
    { icon: "Phone", label: "Reservations", value: "(212) 555-0188" },
    { icon: "MapPin", label: "Address", value: "125 Orchard Lane, New York, NY 10012" },
    { icon: "Clock3", label: "Hours", value: "Mon–Thu 5:00 PM–10:00 PM | Fri–Sun 4:30 PM–11:00 PM" },
    { icon: "CalendarDays", label: "Private Events", value: "events@restaurant.com" },
  ],
}: Partial<ContactFormProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="border bg-background rounded-xl shadow-md">
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      id="name"
                      placeholder="Full name"
                      className="h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <input
                      id="email"
                      type="email"
                      placeholder="Email address"
                      className="h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      id="date"
                      type="date"
                      className="h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                    <input
                      id="party-size"
                      type="number"
                      min={1}
                      placeholder="Party size"
                      className="h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <input
                    id="occasion"
                    placeholder="Occasion (Anniversary, Birthday, Corporate Dinner)"
                    className="h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <textarea
                    id="message"
                    placeholder="Dietary requests, seating preference, or additional notes..."
                    rows={5}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <Button type="submit" className="w-full transition-all duration-200 hover:scale-105">
                    Request Reservation
                  </Button>
                </form>
              </CardContent>
            </Card>
            {contactInfo && contactInfo.length > 0 && (
              <div className="flex flex-col justify-center space-y-8">
                {contactInfo.map(function (info, i) {
                  const Icon = iconMap[info.icon] || CalendarDays;
                  return (
                    <div key={i} className="flex items-start gap-4">
                      <span className="rounded-full bg-background p-3 text-primary shadow-sm">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

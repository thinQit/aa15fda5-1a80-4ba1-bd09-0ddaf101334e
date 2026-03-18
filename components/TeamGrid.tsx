"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface TeamMember {
  name: string;
  title: string;
  imageUrl?: string;
  bio?: string;
}

interface TeamGridProps {
  headline: string;
  subheadline?: string;
  members: TeamMember[];
}

export default function TeamGrid({
  headline = "Meet the Culinary Team",
  subheadline = "The chefs, sommeliers, and hosts who craft your dining experience each evening.",
  members = [
    {
      name: "Chef Marco Bellini",
      title: "Executive Chef",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577327/site-images/team-people/12899112.jpg",
      bio: "Seasonal tasting menus inspired by coastal Mediterranean cuisine.",
    },
    {
      name: "Elena Rossi",
      title: "Pastry Chef",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577335/site-images/team-people/1181734.jpg",
      bio: "Known for delicate plated desserts with warm spice and citrus notes.",
    },
    {
      name: "Daniel Kim",
      title: "Sous Chef",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577357/site-images/team-people/1181738.jpg",
      bio: "Leads service precision and signature wood-fire entrées.",
    },
    {
      name: "Sofia Martin",
      title: "Guest Experience Manager",
      imageUrl:
        "https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1200,h_800,g_auto/v1771577370/site-images/team-people/1181405.jpg",
      bio: "Ensures each reservation feels welcoming, seamless, and memorable.",
    },
  ],
}: Partial<TeamGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
            {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {members.map(function (member, i) {
              return (
                <Card key={i} className="card-hover overflow-hidden border-0 bg-background shadow-md text-center rounded-xl">
                  {member.imageUrl && (
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        width={600}
                        height={600}
                        unoptimized
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-sm text-primary">{member.title}</p>
                    {member.bio && <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

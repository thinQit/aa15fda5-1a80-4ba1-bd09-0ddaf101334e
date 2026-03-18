"use client";

interface Stat {
  value: string;
  label: string;
}

interface StatsCounterProps {
  stats: Stat[];
  bgColor?: string;
}

export default function StatsCounter({
  stats = [
    { value: "18+", label: "Years of Service" },
    { value: "250K+", label: "Dishes Served" },
    { value: "4.9/5", label: "Guest Rating" },
    { value: "32", label: "Seasonal Menu Items" },
  ],
  bgColor = "bg-primary text-primary-foreground",
}: Partial<StatsCounterProps>) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto max-w-7xl px-4">
        <div className="animate-fade-in-up">
          <div className={"grid gap-8 text-center " + ("grid-cols-2 md:grid-cols-" + Math.min(stats.length || 1, 4))}>
            {stats.map(function (stat, i) {
              return (
                <div key={i} className="card-hover rounded-xl p-4">
                  <p className="text-4xl font-bold md:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-wider opacity-80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

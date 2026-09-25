"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "Château Boucarut",
    subtitle:
      "Organic Winery · Indigenous yeasts · Wines not fined or filtered",
    wines: [
      {
        name: "Lirac 'Pierres Vivantes', AOC Cru Lirac",
        alcohol: "14%",
        year: "2022",
        detail: "Grenache, Syrah, Mourvèdre, Cinsault",
      },
      {
        name: "Les Petits Ducs - Côtes du Rhône",
        alcohol: "14.5%",
        year: "2022",
        detail: "Grenache & Syrah",
      },
      {
        name: "Empusa - Coteaux du Pont du Gard (Rouge)",
        alcohol: "14.5%",
        year: "2022",
        detail: "100% Grenache",
      },
      {
        name: "Tavel 'Qu'est ce qu'on attend?'",
        alcohol: "13.5%",
        year: "2023",
        detail: "Grenache & Cinsault",
      },
      {
        name: "Lirac 'd'Schlànga'",
        alcohol: "13%",
        year: "2022",
        detail: "Roussanne & Viognier",
      },
      {
        name: "Gag Blau - Coteaux du Pont du Gard (Blanc)",
        alcohol: "11.5%",
        year: "2023",
        detail: "Roussanne & Viognier",
      },
    ],
  },
  {
    name: "Domaine Dame Guilherme",
    wines: [
      {
        name: "Plan de Dieu, Côtes du Rhône Villages",
        alcohol: "15%",
        year: "2018",
        detail: "65% Grenache, 25% Syrah, 10% Mourvèdre",
      },
    ],
  },
  {
    name: "Domaine La Durbane",
    wines: [
      {
        name: "Châteauneuf-du-Pape (Rouge)",
        alcohol: "14.5%",
        year: "2018",
        detail:
          "95% Grenache, 3% Mourvèdre, 2% Syrah · Fermentation in truncated wooden vats · 18 months in stainless steel",
      },
      {
        name: "Châteauneuf-du-Pape (Blanc)",
        alcohol: "14.5%",
        year: "2023",
        detail:
          "100% Roussanne · Fermentation in demi-muids · Vinification and aging on fine lees in demi-muids for 12 months",
      },
      {
        name: "Hédoniste Rouge",
        alcohol: "13.5%",
        year: "2022",
        detail: "100% Syrah",
      },
      {
        name: "Hédoniste Blanc",
        alcohol: "14%",
        year: "2022",
        detail: "85% Viognier, 10%",
      },
    ],
  },
  {
    name: "Domaine Saint Vincent",
    wines: [
      {
        name: "Vinsobres Cuvée St. Pierre",
        alcohol: "14.5%",
        year: "2021",
        detail:
          "50% Grenache, 50% Syrah · 12 months in used barrels · 92 pts RP",
      },
      {
        name: "Vinsobres",
        alcohol: "14%",
        year: "2021",
        detail: "50% Grenache, 50% Syrah · Aged in concrete vats",
      },
      {
        name: "Côtes du Rhône Villages (Rouge)",
        alcohol: "13.5%",
        year: "2021",
        detail: "50% Grenache, 50% Syrah",
      },
      {
        name: "Côtes du Rhône (Blanc)",
        alcohol: "14%",
        year: "2023",
        detail: "80% Grenache Blanc, 10% Marsanne, 10% Viognier",
      },
    ],
  },
  {
    name: "La Vigne du Roy",
    wines: [
      {
        name: "Châteauneuf-du-Pape",
        alcohol: "14%",
        year: "2021",
        detail: "57% Grenache, 39% Syrah, 4% Cinsault",
      },
      {
        name: "Côtes du Rhône",
        alcohol: "13.5%",
        year: "2024",
        detail: "60% Grenache, 40% Syrah",
      },
      {
        name: "Costières de Nîmes Rosé",
        alcohol: "12.5%",
        year: "2024",
        detail: "80% Syrah, 20% Mourvèdre",
      },
    ],
  },
  {
    name: "Les Sources de Montmirail",
    wines: [
      {
        name: "Gigondas",
        alcohol: "14%",
        year: "2021",
        detail: "Grenache, Syrah, Mourvèdre · 91 pts James Suckling",
      },
    ],
  },
  {
    name: "Rive de Malva",
    wines: [
      {
        name: "Saint-Joseph",
        alcohol: "13.5%",
        year: "2020",
        detail: "100% Syrah · 92 pts James Suckling",
      },
    ],
  },
];

const wineCount = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function RhonePage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">
      {/* Top */}
      <section className="px-6 pt-3 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* Left */}
          <div className="flex justify-start">
            <Link
              href="/france"
              className="
                group inline-flex items-center gap-2 rounded-full
                border border-[#741C29]/15 bg-white px-4 py-2.5
                font-old-standard text-sm uppercase tracking-[0.12em]
                text-[#741C29] transition-all duration-300
                hover:border-[#741C29] hover:bg-[#741C29] hover:text-white
              "
            >
              <ArrowLeft
                size={16}
                strokeWidth={1.6}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Back
            </Link>
          </div>

          {/* Center */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#D4AF37]/60" />

              <span className="font-old-standard text-xs uppercase tracking-[0.3em] text-[#741C29]">
                France
              </span>

              <span className="h-px w-8 bg-[#D4AF37]/60" />
            </div>

            <h1 className="mt-2 whitespace-nowrap font-philosopher text-3xl leading-tight tracking-tight text-[#741C29] sm:text-4xl lg:text-5xl">
              Rhône
            </h1>
          </div>

          {/* Right spacer */}
          <div className="hidden md:block" />
        </div>
      </section>

      {/* Hero */}
      <section className="px-6 pb-12 pt-8 sm:px-10 lg:px-16 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
            Sun-soaked vineyards of the Rhône
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
            Discover our selection of wines from the Rhône, featuring
            expressive Grenache, Syrah, Mourvèdre, Roussanne and Viognier from
            distinguished vineyards across the region.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#D4AF37]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
            <span className="h-px w-16 bg-[#D4AF37]/60" />
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-[#741C29]/10 bg-[#741C29]/10 sm:grid-cols-3">
          <div className="bg-white p-6 text-center">
            <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
              Wines
            </p>

            <p className="mt-2 font-philosopher text-2xl">
              {wineCount}
            </p>
          </div>

          <div className="bg-white p-6 text-center">
            <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
              Wineries
            </p>

            <p className="mt-2 font-philosopher text-2xl">
              {producers.length}
            </p>
          </div>

          <div className="col-span-2 bg-white p-6 text-center sm:col-span-1">
            <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
              Region
            </p>

            <p className="mt-2 font-philosopher text-2xl">
              Rhône
            </p>
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        {/* <div className="mb-12 text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
            From the Vineyards
          </p>

          <h2 className="mt-1 font-philosopher text-3xl text-[#741C29] sm:text-4xl lg:text-5xl">
            Wines from Rhône
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-[#6D625B]">
            A curated selection from distinguished Rhône producers and
            vineyards.
          </p>
        </div> */}

        <div className="space-y-10">
          {producers.map((producer) => (
            <section
              key={producer.name}
              className="overflow-hidden rounded-2xl border border-[#741C29]/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Producer Header */}
              <div className="border-b border-[#741C29]/10 bg-[#F4F2EC]/50 px-6 py-7 text-center sm:px-8">
                <p className="font-great-vibes text-2xl text-[#B89B6A]">
                  From the Cellar
                </p>

                <h3 className="mt-1 font-philosopher text-2xl text-[#741C29] sm:text-3xl">
                  {producer.name}
                </h3>

                {producer.subtitle && (
                  <p className="mt-2 font-old-standard text-sm text-[#6D625B]">
                    {producer.subtitle}
                  </p>
                )}

                <p className="mt-2 font-old-standard text-sm text-[#6D625B]">
                  {producer.wines.length}{" "}
                  {producer.wines.length === 1 ? "wine" : "wines"}
                </p>
              </div>

              {/* Desktop */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-[minmax(0,1fr)_120px_120px] bg-[#741C29] text-white">
                  <div className="px-6 py-4 text-left font-old-standard text-xs font-semibold uppercase tracking-[0.12em]">
                    Wine
                  </div>

                  <div className="px-3 py-4 text-center font-old-standard text-xs font-semibold uppercase tracking-[0.12em]">
                    Year
                  </div>

                  <div className="px-3 py-4 text-center font-old-standard text-xs font-semibold uppercase tracking-[0.12em]">
                    Alcohol
                  </div>
                </div>

                {producer.wines.map((wine, index) => (
                  <div
                    key={`${wine.name}-${wine.year}-${index}`}
                    className="group grid grid-cols-[minmax(0,1fr)_120px_120px] border-b border-[#741C29]/8 last:border-0 transition-colors duration-300 hover:bg-[#F4F2EC]/60"
                  >
                    <div className="flex items-center gap-4 px-6 py-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#741C29]/5 font-old-standard text-xs text-[#741C29] transition-all duration-300 group-hover:bg-[#741C29] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="font-philosopher text-lg text-[#741C29]">
                          {wine.name}
                        </p>

                        <p className="mt-1 max-w-3xl font-old-standard text-xs leading-5 text-[#B89B6A]">
                          {wine.detail}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center px-2 py-5">
                      <span className="font-old-standard text-sm text-[#6D625B]">
                        {wine.year}
                      </span>
                    </div>

                    <div className="flex items-center justify-center px-2 py-5">
                      <span className="font-old-standard text-sm text-[#6D625B]">
                        {wine.alcohol}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile / Tablet */}
              <div className="lg:hidden">
                {producer.wines.map((wine, index) => (
                  <article
                    key={`${wine.name}-${wine.year}-${index}`}
                    className="border-b border-[#741C29]/10 p-5 last:border-0 sm:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#741C29]/5 font-old-standard text-xs text-[#741C29]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h4 className="font-philosopher text-xl leading-tight text-[#741C29]">
                          {wine.name}
                        </h4>

                        <p className="mt-1 font-old-standard text-xs leading-5 text-[#B89B6A]">
                          {wine.detail}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-[#F4F2EC] p-4 text-center">
                        <p className="font-old-standard text-[10px] uppercase tracking-[0.18em] text-[#6D625B]">
                          Year
                        </p>

                        <p className="mt-1 font-philosopher text-lg text-[#741C29]">
                          {wine.year}
                        </p>
                      </div>

                      <div className="rounded-xl bg-[#F4F2EC] p-4 text-center">
                        <p className="font-old-standard text-[10px] uppercase tracking-[0.18em] text-[#6D625B]">
                          Alcohol
                        </p>

                        <p className="mt-1 font-philosopher text-lg text-[#741C29]">
                          {wine.alcohol}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-14 border-t border-[#741C29]/10 pt-8 text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A]">
            Rhône, France
          </p>

          <p className="mt-2 font-old-standard text-sm text-[#6D625B]">
            {wineCount} wines from {producers.length} producers
          </p>
        </div>
      </section>
    </main>
  );
}
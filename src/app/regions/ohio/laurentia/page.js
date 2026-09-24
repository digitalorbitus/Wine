"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "Laurentia",
    wines: [
      {
        name: "Cabernet Sauvignon",
        year: "2021",
        alcohol: "13%",
        detail: "",
      },
      {
        name: "Cabernet Franc",
        year: "2022",
        alcohol: "12.5%",
        detail: "",
      },
      {
        name: "Merlot",
        year: "2020",
        alcohol: "12.5%",
        detail: "",
      },
      {
        name: "Pinot Noir",
        year: "2023",
        alcohol: "12.5%",
        detail: "",
      },
      {
        name: "Chardonnay",
        year: "2022",
        alcohol: "12.5%",
        detail: "",
      },
      {
        name: "Unoaked Chardonnay",
        year: "2023",
        alcohol: "12.5%",
        detail: "",
      },
      {
        name: "Pinot Grigio",
        year: "2024",
        alcohol: "12.5%",
        detail: "",
      },
      {
        name: "Riesling",
        year: "2023",
        alcohol: "12.5%",
        detail: "",
      },
      {
        name: "Riesling Clone 49",
        year: "2024",
        alcohol: "12.5%",
        detail: "",
      },
      {
        name: "Gewürztraminer",
        year: "2024",
        alcohol: "12%",
        detail: "",
      },
      {
        name: "Sparkling Rosé",
        year: "2024",
        alcohol: "12.5%",
        detail: "",
      },
      {
        name: "Vidal Blanc Ice Wine",
        year: "N/A",
        alcohol: "N/A",
        detail: "375 ML · Year and alcohol not provided",
      },
    ],
  },
];

const wineCount = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function RegionPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">
      {/* Hero */}
      <section className="px-6 pb-14 pt-20 sm:px-10 lg:px-16 lg:pb-20 lg:pt-28">
        <Link
          href="/Ohio"
          className="mb-12 inline-flex items-center gap-2 font-old-standard text-sm text-[#6D625B] transition-colors hover:text-[#741C29]"
        >
          <ArrowLeft size={16} />
          Back to Ohio
        </Link>

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]" />

            <span className="font-old-standard text-sm uppercase tracking-[0.3em]">
              Ohio
            </span>

            <span className="h-px w-10 bg-[#D4AF37]" />
          </div>

          <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
            The character of Ohio wine country
          </p>

          <h1 className="mt-3 font-philosopher text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Laurentia
          </h1>

          <p className="mx-auto mt-6 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
            Discover our selection from Laurentia, featuring classic Cabernet
            varieties, Pinot Noir, Chardonnay, Riesling and distinctive
            sparkling and ice wines from Ohio.
          </p>

          <div className="mx-auto mt-8 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#D4AF37]" />
            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />
            <span className="h-px w-16 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-[#741C29]/10 bg-[#741C29]/10 sm:grid-cols-3">
          <div className="bg-white p-6 text-center">
            <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
              Wines
            </p>

            <p className="mt-2 font-philosopher text-2xl">{wineCount}</p>
          </div>

          <div className="bg-white p-6 text-center">
            <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
              Producers
            </p>

            <p className="mt-2 font-philosopher text-2xl">
              {producers.length}
            </p>
          </div>

          <div className="col-span-2 bg-white p-6 text-center sm:col-span-1">
            <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
              Region
            </p>

            <p className="mt-2 font-philosopher text-2xl">Ohio</p>
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mb-12 text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
            From the Vineyards
          </p>

          <h2 className="mt-1 font-philosopher text-3xl text-[#741C29] sm:text-4xl lg:text-5xl">
            Wines from Laurentia
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-[#6D625B]">
            A curated selection from the Laurentia cellar.
          </p>
        </div>

        <div className="space-y-10">
          {producers.map((producer) => (
            <section
              key={producer.name}
              className="overflow-hidden rounded-2xl border border-[#741C29]/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="border-b border-[#741C29]/10 bg-[#F4F2EC]/50 px-6 py-7 text-center sm:px-8">
                <p className="font-great-vibes text-2xl text-[#B89B6A]">
                  From the Cellar
                </p>

                <h3 className="mt-1 font-philosopher text-2xl text-[#741C29] sm:text-3xl">
                  {producer.name}
                </h3>

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

                        {wine.detail && (
                          <p className="mt-1 max-w-3xl font-old-standard text-xs leading-5 text-[#B89B6A]">
                            {wine.detail}
                          </p>
                        )}
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

                        {wine.detail && (
                          <p className="mt-1 font-old-standard text-xs leading-5 text-[#B89B6A]">
                            {wine.detail}
                          </p>
                        )}
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

        <div className="mt-14 border-t border-[#741C29]/10 pt-8 text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A]">
            Ohio, USA
          </p>

          <p className="mt-2 font-old-standard text-sm text-[#6D625B]">
            {wineCount} wines from {producers.length} producer
          </p>
        </div>
      </section>
    </main>
  );
}
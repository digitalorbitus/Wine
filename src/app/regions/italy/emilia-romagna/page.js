"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "Cantina Settecani",
    wines: [
      {
        name: "Vini del Re, Lambrusco di Modena Rosato, DOC",
        year: "N/V",
        alcohol: "11%",
        detail: "Dry Sparkling Rosé",
      },
      {
        name: "Vini del Re, Lambrusco Grasparossa di Castelvetro Secco, DOP",
        year: "N/V",
        alcohol: "11%",
        detail: "Dry, Frizzante · Tre Bicchieri",
      },
      {
        name: "Lambrusco Grasparossa di Castelvetro, DOP",
        year: "N/V",
        alcohol: "8%",
        detail: "Amabile · Semi-sweet Sparkling",
      },
      {
        name: "'7 Rose' Setterose Spumante Brut, DOP",
        year: "N/V",
        alcohol: "11%",
      },
      {
        name: "Settimocielo Rosé Brut, DOP",
        year: "N/V",
        alcohol: "12%",
        detail: "Lambrusco Grasparossa Rosé · Metodo Classico",
      },
    ],
  },
];

const totalWines = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function EmiliaRomagnaPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Back */}
          <Link
            href="/regions/italy"
            className="mb-10 inline-flex items-center gap-2 font-old-standard text-sm text-[#6D625B] transition-colors hover:text-[#741C29]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Italy
          </Link>

          {/* Region Label */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#D4AF37] sm:w-20" />

            <span className="font-old-standard text-xs uppercase tracking-[0.35em] text-[#B89B6A] sm:text-sm">
              Italy
            </span>

            <div className="h-px w-12 bg-[#D4AF37] sm:w-20" />
          </div>

          {/* Decorative */}
          <p className="mt-8 text-center font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl md:text-5xl">
            From the heart of Northern Italy
          </p>

          {/* Heading */}
          <h1 className="mt-3 text-center font-philosopher text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Emilia-Romagna
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-center font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg sm:leading-8">
            Discover our selection of wines from Emilia-Romagna, featuring
            expressive Lambrusco and sparkling rosé wines from one of Italy&apos;s
            most distinctive wine regions.
          </p>

          {/* Divider */}
          <div className="mx-auto mt-10 h-px w-24 bg-[#D4AF37]" />
        </div>
      </section>

      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#741C29]/10 bg-white shadow-sm sm:grid-cols-3">
            {/* Producers */}
            <div className="border-b border-[#741C29]/10 px-6 py-7 text-center sm:border-b-0 sm:border-r">
              <p className="font-old-standard text-xs uppercase tracking-[0.25em] text-[#B89B6A]">
                Producers
              </p>

              <p className="mt-2 font-philosopher text-3xl text-[#741C29]">
                {producers.length}
              </p>
            </div>

            {/* Wines */}
            <div className="border-b border-[#741C29]/10 px-6 py-7 text-center sm:border-b-0 sm:border-r">
              <p className="font-old-standard text-xs uppercase tracking-[0.25em] text-[#B89B6A]">
                Wines
              </p>

              <p className="mt-2 font-philosopher text-3xl text-[#741C29]">
                {totalWines}
              </p>
            </div>

            {/* Region */}
            <div className="px-6 py-7 text-center">
              <p className="font-old-standard text-xs uppercase tracking-[0.25em] text-[#B89B6A]">
                Region
              </p>

              <p className="mt-2 font-philosopher text-2xl text-[#741C29]">
                Emilia-Romagna
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WINE SELECTION
      ========================================================= */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mb-10 text-center sm:mb-14">
            <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
              Our Selection
            </p>

            <h2 className="mt-2 font-philosopher text-4xl sm:text-5xl md:text-6xl">
              Wines from Emilia-Romagna
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
              A focused selection of sparkling and frizzante wines from Cantina
              Settecani, showcasing the character and versatility of Lambrusco.
            </p>
          </div>

          {/* =====================================================
              PRODUCERS
          ===================================================== */}
          <div className="space-y-8">
            {producers.map((producer) => (
              <div
                key={producer.name}
                className="overflow-hidden rounded-2xl border border-[#741C29]/10 bg-white shadow-sm"
              >
                {/* Producer Header */}
                <div className="border-b border-[#741C29]/10 bg-[#F4F2EC] px-5 py-7 text-center sm:px-8">
                  <p className="font-old-standard text-xs uppercase tracking-[0.3em] text-[#B89B6A]">
                    Producer
                  </p>

                  <h3 className="mt-2 font-philosopher text-3xl sm:text-4xl">
                    {producer.name}
                  </h3>
                </div>

                {/* =================================================
                    DESKTOP TABLE
                ================================================= */}
                <div className="hidden lg:block">
                  {/* Table Header */}
                  <div className="grid grid-cols-[1fr_180px_180px] bg-[#741C29] text-white">
                    <div className="px-6 py-4 font-old-standard text-sm uppercase tracking-[0.18em]">
                      Wine
                    </div>

                    <div className="px-6 py-4 text-center font-old-standard text-sm uppercase tracking-[0.18em]">
                      Year
                    </div>

                    <div className="px-6 py-4 text-center font-old-standard text-sm uppercase tracking-[0.18em]">
                      Alcohol
                    </div>
                  </div>

                  {/* Table Rows */}
                  {producer.wines.map((wine, index) => (
                    <div
                      key={`${wine.name}-${wine.year}-${index}`}
                      className={`grid grid-cols-[1fr_180px_180px] ${
                        index !== producer.wines.length - 1
                          ? "border-b border-[#741C29]/10"
                          : ""
                      }`}
                    >
                      {/* Wine */}
                      <div className="px-6 py-5">
                        <p className="font-old-standard text-base font-medium text-[#741C29]">
                          {wine.name}
                        </p>

                        {wine.detail && (
                          <p className="mt-1 font-old-standard text-sm leading-6 text-[#B89B6A]">
                            {wine.detail}
                          </p>
                        )}
                      </div>

                      {/* Year */}
                      <div className="flex items-center justify-center px-6 py-5 font-old-standard text-[#6D625B]">
                        {wine.year}
                      </div>

                      {/* Alcohol */}
                      <div className="flex items-center justify-center px-6 py-5 font-old-standard text-[#6D625B]">
                        {wine.alcohol}
                      </div>
                    </div>
                  ))}
                </div>

                {/* =================================================
                    MOBILE / TABLET CARDS
                ================================================= */}
                <div className="divide-y divide-[#741C29]/10 lg:hidden">
                  {producer.wines.map((wine, index) => (
                    <div
                      key={`${wine.name}-${wine.year}-${index}`}
                      className="p-5 sm:p-6"
                    >
                      {/* Wine Name */}
                      <div>
                        <p className="font-old-standard text-base font-medium leading-6 text-[#741C29] sm:text-lg">
                          {wine.name}
                        </p>

                        {wine.detail && (
                          <p className="mt-1.5 font-old-standard text-sm leading-6 text-[#B89B6A]">
                            {wine.detail}
                          </p>
                        )}
                      </div>

                      {/* Year + Alcohol */}
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-[#F4F2EC] px-4 py-3 text-center">
                          <p className="font-old-standard text-[10px] uppercase tracking-[0.2em] text-[#B89B6A]">
                            Year
                          </p>

                          <p className="mt-1 font-philosopher text-lg text-[#741C29]">
                            {wine.year}
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#F4F2EC] px-4 py-3 text-center">
                          <p className="font-old-standard text-[10px] uppercase tracking-[0.2em] text-[#B89B6A]">
                            Alcohol
                          </p>

                          <p className="mt-1 font-philosopher text-lg text-[#741C29]">
                            {wine.alcohol}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <section className="border-t border-[#741C29]/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A]">
            Emilia-Romagna, Italy
          </p>

          <p className="mt-3 font-old-standard text-sm text-[#6D625B]">
            {producers.length} Producer{producers.length !== 1 ? "s" : ""} ·{" "}
            {totalWines} Wines
          </p>
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "Cantina Miglianico",
    wines: [
      {
        name: "Il Fondatore, Montepulciano d'Abruzzo Riserva, DOP",
        alcohol: "14%",
        year: "2020",
      },
      {
        name: "Montupoli, DOP",
        alcohol: "13%",
        year: "2024",
      },
      {
        name: "Montepulciano d'Abruzzo, DOP",
        alcohol: "12.5%",
        year: "2023",
      },
      {
        name: "Pecorino, IGP",
        alcohol: "13%",
        year: "2024",
      },
      {
        name: "Trebbiano d'Abruzzo, IGP",
        alcohol: "12%",
        year: "2024",
      },
    ],
  },
  {
    name: "Marramiero",
    wines: [
      {
        name: "Dante, DOC",
        alcohol: "14.5%",
        year: "2013",
        detail:
          "Montepulciano d'Abruzzo Riserva · 100% Montepulciano d'Abruzzo · Aged 120 months in barrique and bottle · 3 Pack Wooden Box Case",
      },
      {
        name: "Inferi, DOC",
        alcohol: "14%",
        year: "2020",
        detail:
          "100% Montepulciano d'Abruzzo · 14-18 months in French and Slavonian oak",
      },
      {
        name: "Altare, DOC",
        alcohol: "14%",
        year: "2023",
        detail:
          "100% Trebbiano d'Abruzzo · 18 months in new barrels",
      },
      {
        name: "Pecorino, DOC",
        alcohol: "13%",
        year: "2024",
      },
      {
        name: "Montepulciano d'Abruzzo, DOC",
        alcohol: "14%",
        year: "2023",
      },
      {
        name: "Trebbiano d'Abruzzo, DOC",
        alcohol: "12%",
        year: "2023",
      },
      {
        name: "Cerasuolo d'Abruzzo, DOC",
        alcohol: "12.5%",
        year: "2023",
      },
      {
        name: "Inferi, DOC",
        alcohol: "14%",
        year: "2019",
        detail: "Large Format · 3L",
      },
      {
        name: "Anima, DOC",
        alcohol: "13.5%",
        year: "2018",
        detail: "Large Format · 1.5L",
      },
    ],
  },
  {
    name: "Torre dei Beati",
    subtitle: "Certified Organic Winery",
    wines: [
      {
        name: "'Mazzamurello' Montepulciano d'Abruzzo Riserva, DOC",
        alcohol: "14.5%",
        year: "2020",
        detail:
          "100% Montepulciano d'Abruzzo · 20 months in barriques",
      },
      {
        name: "'Cocciapazza' Montepulciano d'Abruzzo, DOC",
        alcohol: "14.5%",
        year: "2020",
        detail:
          "100% Montepulciano d'Abruzzo · 20 months in barriques",
      },
      {
        name: "Montepulciano d'Abruzzo, DOC",
        alcohol: "14.5%",
        year: "2022",
        detail:
          "100% Montepulciano d'Abruzzo · 15-18 months mainly in barriques",
      },
      {
        name: "'Rosa-ae' Cerasuolo d'Abruzzo, DOC",
        alcohol: "14%",
        year: "2023",
        detail: "100% Montepulciano d'Abruzzo",
      },
      {
        name: "Pecorino, DOC",
        alcohol: "13.5%",
        year: "2023",
        detail: "100% Pecorino · 6 months sur lies",
      },
      {
        name: "'Bianchi Grilli per la Testa' Trebbiano d'Abruzzo, DOC",
        alcohol: "13%",
        year: "2022",
        detail:
          "100% Trebbiano Abruzzese · 11 months on fermentation lees",
      },
    ],
  },
];

const totalWines = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function AbruzzoPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">
      {/* =====================================================
          TOP
      ===================================================== */}
      <section className="px-6 pt-3 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* Left */}
          <div className="flex justify-start">
            <Link
              href="/shop"
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
                Italy
              </span>

              <span className="h-px w-8 bg-[#D4AF37]/60" />
            </div>

            <h1 className="mt-2 whitespace-nowrap font-philosopher text-3xl leading-tight tracking-tight text-[#741C29] sm:text-4xl lg:text-5xl">
              Abruzzo
            </h1>
          </div>

          {/* Right spacer */}
          <div className="hidden md:block" />
        </div>
      </section>

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="px-6 pb-12 pt-8 sm:px-10 lg:px-16 lg:pb-16 lg:pt-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
              Where mountains meet the Adriatic
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
              Discover our selection of wines from Abruzzo, featuring the
              distinctive Montepulciano d&apos;Abruzzo, Cerasuolo, Pecorino
              and Trebbiano wines from renowned producers.
            </p>

            <div className="mx-auto mt-7 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-[#D4AF37]/60" />
              <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
              <span className="h-px w-16 bg-[#D4AF37]/60" />
            </div>
          </div>

          {/* =================================================
              STATS
          ================================================= */}
          <div
            className="
              mx-auto mt-12 grid max-w-5xl grid-cols-2
              overflow-hidden rounded-2xl
              border border-[#741C29]/10
              bg-[#741C29]/10
              sm:grid-cols-3
            "
          >
            {/* Producers */}
            <div className="bg-white p-6 text-center">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
               Wineries
              </p>

              <p className="mt-2 font-philosopher text-2xl">
                {producers.length}
              </p>
            </div>

            {/* Wines */}
            <div className="bg-white p-6 text-center">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Wines
              </p>

              <p className="mt-2 font-philosopher text-2xl">
                {totalWines}
              </p>
            </div>

            {/* Region */}
            <div className="col-span-2 bg-white p-6 text-center sm:col-span-1">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Region
              </p>

              <p className="mt-2 font-philosopher text-2xl">
                Abruzzo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WINE SELECTION
      ===================================================== */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl space-y-10">
          {producers.map((producer) => (
            <section
              key={producer.name}
              className="
                overflow-hidden rounded-2xl
                border border-[#741C29]/10
                bg-white shadow-sm
                transition-all duration-300
                hover:shadow-lg
              "
            >
              {/* =================================================
                  PRODUCER HEADER
              ================================================= */}
              <div
                className="
                  border-b border-[#741C29]/10
                  bg-[#F4F2EC]/50
                  px-6 py-7 text-center sm:px-8
                "
              >
                <p className="font-great-vibes text-2xl text-[#B89B6A]">
                  Producer
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
                  {producer.wines.length === 1 ? "Wine" : "Wines"}
                </p>
              </div>

              {/* =================================================
                  DESKTOP TABLE
              ================================================= */}
              <div className="hidden lg:block">
                <div className="grid grid-cols-[1fr_180px_180px] bg-[#741C29] text-white">
                  <div className="px-8 py-4 text-left font-old-standard text-xs font-semibold uppercase tracking-[0.18em]">
                    Wine
                  </div>

                  <div className="px-6 py-4 text-center font-old-standard text-xs font-semibold uppercase tracking-[0.18em]">
                    Year
                  </div>

                  <div className="px-6 py-4 text-center font-old-standard text-xs font-semibold uppercase tracking-[0.18em]">
                    Alcohol
                  </div>
                </div>

                {producer.wines.map((wine, index) => (
                  <div
                    key={`${wine.name}-${wine.year}-${index}`}
                    className="
                      group grid grid-cols-[1fr_180px_180px]
                      border-b border-[#741C29]/8
                      last:border-0
                      transition-colors duration-300
                      hover:bg-[#F4F2EC]/60
                    "
                  >
                    {/* Wine */}
                    <div className="flex items-center gap-4 px-8 py-5">
                      <span
                        className="
                          flex h-9 w-9 shrink-0 items-center justify-center
                          rounded-full bg-[#741C29]/5
                          font-old-standard text-xs text-[#741C29]
                          transition-all duration-300
                          group-hover:bg-[#741C29]
                          group-hover:text-white
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
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

                    {/* Year */}
                    <div className="flex items-center justify-center px-6 py-5">
                      <span className="font-old-standard text-base text-[#6D625B]">
                        {wine.year || "N/A"}
                      </span>
                    </div>

                    {/* Alcohol */}
                    <div className="flex items-center justify-center px-6 py-5">
                      <span className="font-old-standard text-base text-[#6D625B]">
                        {wine.alcohol || "N/A"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* =================================================
                  MOBILE / TABLET
              ================================================= */}
              <div className="divide-y divide-[#741C29]/10 lg:hidden">
                {producer.wines.map((wine, index) => (
                  <article
                    key={`${wine.name}-${wine.year}-${index}`}
                    className="p-5 sm:p-6"
                  >
                    <div className="flex gap-4">
                      {/* Number */}
                      <span
                        className="
                          flex h-9 w-9 shrink-0 items-center justify-center
                          rounded-full bg-[#741C29]/5
                          font-old-standard text-xs text-[#741C29]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0 flex-1">
                        {/* Wine Name */}
                        <h4 className="font-philosopher text-xl leading-tight text-[#741C29]">
                          {wine.name}
                        </h4>

                        {/* Detail */}
                        {wine.detail && (
                          <p className="mt-1 font-old-standard text-xs leading-5 text-[#B89B6A]">
                            {wine.detail}
                          </p>
                        )}

                        {/* Year + Alcohol */}
                        <div className="mt-5 grid grid-cols-2 gap-3">
                          <div className="rounded-xl bg-[#F4F2EC] p-4 text-center">
                            <p className="font-old-standard text-[10px] uppercase tracking-[0.15em] text-[#6D625B]">
                              Year
                            </p>

                            <p className="mt-1 font-philosopher text-lg text-[#741C29]">
                              {wine.year || "N/A"}
                            </p>
                          </div>

                          <div className="rounded-xl bg-[#F4F2EC] p-4 text-center">
                            <p className="font-old-standard text-[10px] uppercase tracking-[0.15em] text-[#6D625B]">
                              Alcohol
                            </p>

                            <p className="mt-1 font-philosopher text-lg text-[#741C29]">
                              {wine.alcohol || "N/A"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* =====================================================
            FOOTER INFO
        ===================================================== */}
        <div className="mx-auto mt-14 max-w-7xl border-t border-[#741C29]/10 pt-8 text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A]">
            Abruzzo, Italy
          </p>

          <p className="mt-2 font-old-standard text-sm text-[#6D625B]">
            {totalWines} wines from {producers.length} producers
          </p>
        </div>
      </section>
    </main>
  );
}
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "BellaVista - Franciacorta",
    wines: [
      {
        name: "Vittorio Moretti Riserva, DOCG",
        year: "2016",
        alcohol: "12.5%",
        detail:
          "62% Chardonnay, 38% Pinot Nero · Only created in exceptional harvest years · Manual harvest, soft pressing, fermentation in small oak barrels, long aging on yeasts with cork stopper.",
      },
      {
        name: "La Scala, DOCG",
        year: "2018",
        alcohol: "12.5%",
        detail: "75% Chardonnay, 25% Pinot Nero",
      },
      {
        name: "Alma Gran Cuvée, DOCG",
        year: "N/V",
        alcohol: "12.5%",
        detail: "90% Chardonnay, 10% Pinot Nero · JS 90 pts",
      },
      {
        name: "Satèn Brut, DOCG",
        year: "2018",
        alcohol: "12.5%",
        detail: "100% Chardonnay",
      },
      {
        name: "Brut Rosé, DOCG",
        year: "2020",
        alcohol: "12.5%",
        detail: "65% Chardonnay, 35% Pinot Nero",
      },
    ],
  },

  {
    name: "Caven - Valtellina",
    wines: [
      {
        name: "Messere - Sforzato di Valtellina, DOCG",
        year: "2015",
        alcohol: "15.5%",
        detail:
          "100% Chiavennasca (Nebbiolo) · Grapes dried on mats for 3 months · 15 months small oak barrels, then in large oak barrels",
      },
      {
        name: "Al Carmine - Valtellina Superiore Inferno Riserva, DOCG",
        year: "2017",
        alcohol: "13.5%",
      },
      {
        name: "Al Carmine - Valtellina Superiore Inferno Riserva, DOCG",
        year: "2015",
        alcohol: "13%",
      },
      {
        name: "La Priora - Valtellina Superiore Sassella Riserva, DOCG",
        year: "2016",
        alcohol: "13%",
        detail:
          "100% Chiavennasca (Nebbiolo) · 18 months small oak barrels, then large oak barrels · 8 months in bottle",
      },
      {
        name: "La Martellina Inferno Valtellina Superiore, DOCG",
        year: "2020",
        alcohol: "13.5%",
        detail:
          "Chiavennasca (Nebbiolo), Pignola, and Rossola · 12 months oak barrels",
      },
      {
        name: "La Martellina Inferno Valtellina Superiore, DOCG",
        year: "2019",
        alcohol: "13.5%",
      },
      {
        name: "Le Coppelle Sassella Valtellina Superiore, DOCG",
        year: "2020",
        alcohol: "13.5%",
        detail:
          "Chiavennasca (Nebbiolo), Pignola, and Rossola · 12 months oak barrels",
      },
      {
        name: "Le Coppelle Sassella Valtellina Superiore, DOCG",
        year: "2019",
        alcohol: "13.5%",
      },
    ],
  },

  {
    name: "Contadi Castaldi - Franciacorta",
    wines: [
      {
        name: "Brut, DOCG",
        year: "N/V",
        alcohol: "12.5%",
        detail: "80% Chardonnay, 10% Pinot Nero, 10% Pinot Bianco",
      },
      {
        name: "Rosé Brut, DOCG",
        year: "N/V",
        alcohol: "12.5%",
        detail: "65% Chardonnay, 35% Pinot Nero · WE 90 pts",
      },
    ],
  },

  {
    name: "Nera - Valtellina",
    wines: [
      {
        name: "Rosso di Valtellina Satiro, DOC",
        year: "2021",
        alcohol: "12.5%",
        detail:
          "Chiavennasca (Nebbiolo), Pignola, and Rossola · Aged 6 months in medium oak barrels and steel tanks",
      },
    ],
  },

  {
    name: "Torti",
    wines: [
      {
        name: "Pinot Noir, IGP",
        year: "2023",
        alcohol: "13%",
      },
      {
        name: "Barbera, DOC",
        year: "2019",
        alcohol: "13%",
      },
      {
        name: "Crotina, IGP",
        year: "2023",
        alcohol: "13%",
      },
      {
        name: "Blanc de Noir, DOC",
        year: "2023",
        alcohol: "12%",
        detail: "100% Pinot Nero vinified Bianco",
      },
      {
        name: "Rosé Brut 'Casaleggio'",
        year: "N/V",
        alcohol: "11.5%",
        detail: "Pinot Nero & Chardonnay",
      },
    ],
  },
];

const totalWines = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function LombardyPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">
      {/* =====================================================
          TOP
      ===================================================== */}
      <section className="px-6 pt-3 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* LEFT */}
          <div className="flex justify-start">
            <Link
              href="/italy"
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

          {/* CENTER */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-[#D4AF37]/60" />

              <span className="font-old-standard text-xs uppercase tracking-[0.3em] text-[#741C29]">
                Italy
              </span>

              <span className="h-px w-8 bg-[#D4AF37]/60" />
            </div>

            <h1 className="mt-2 whitespace-nowrap font-philosopher text-3xl leading-tight tracking-tight text-[#741C29] sm:text-4xl lg:text-5xl">
              Lombardy
            </h1>
          </div>

          {/* RIGHT SPACER */}
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
              From the lakes to the Alpine valleys
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
              Discover our selection of wines from Lombardy, featuring
              Franciacorta sparkling wines and the distinctive reds of
              Valtellina, alongside Pinot Noir, Barbera and other regional
              selections.
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
            <div className="bg-white p-6 text-center">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
               Wineries
              </p>

              <p className="mt-2 font-philosopher text-2xl">
                {producers.length}
              </p>
            </div>

            <div className="bg-white p-6 text-center">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Wines
              </p>

              <p className="mt-2 font-philosopher text-2xl">
                {totalWines}
              </p>
            </div>

            <div className="col-span-2 bg-white p-6 text-center sm:col-span-1">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Region
              </p>

              <p className="mt-2 font-philosopher text-2xl">
                Lombardy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WINE SELECTION
      ===================================================== */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          {/* =================================================
              PRODUCERS
          ================================================= */}
          <div className="space-y-10">
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
                {/* PRODUCER HEADER */}
                <div
                  className="
                    border-b border-[#741C29]/10
                    bg-[#F4F2EC]/50
                    px-6 py-7 text-center
                    sm:px-8
                  "
                >
                  <p className="font-great-vibes text-2xl text-[#B89B6A]">
                    Producer
                  </p>

                  <h3 className="mt-1 font-philosopher text-2xl text-[#741C29] sm:text-3xl">
                    {producer.name}
                  </h3>

                  <p className="mt-2 font-old-standard text-sm text-[#6D625B]">
                    {producer.wines.length}{" "}
                    {producer.wines.length === 1 ? "Wine" : "Wines"}
                  </p>
                </div>

                {/* =================================================
                    DESKTOP
                ================================================= */}
                <div className="hidden lg:block">
                  {/* TABLE HEADER */}
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

                  {/* TABLE ROWS */}
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
                      {/* WINE */}
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

                      {/* YEAR */}
                      <div className="flex items-center justify-center px-6 py-5">
                        <span className="font-old-standard text-base text-[#6D625B]">
                          {wine.year}
                        </span>
                      </div>

                      {/* ALCOHOL */}
                      <div className="flex items-center justify-center px-6 py-5">
                        <span className="font-old-standard text-base text-[#6D625B]">
                          {wine.alcohol}
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

                      {/* DETAILS */}
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="rounded-xl bg-[#F4F2EC] p-4 text-center">
                          <p className="font-old-standard text-[10px] uppercase tracking-[0.15em] text-[#6D625B]">
                            Year
                          </p>

                          <p className="mt-1 font-philosopher text-lg text-[#741C29]">
                            {wine.year}
                          </p>
                        </div>

                        <div className="rounded-xl bg-[#F4F2EC] p-4 text-center">
                          <p className="font-old-standard text-[10px] uppercase tracking-[0.15em] text-[#6D625B]">
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

          {/* =====================================================
              FOOTER INFO
          ===================================================== */}
          <div className="mt-14 border-t border-[#741C29]/10 pt-8 text-center">
            <p className="font-great-vibes text-3xl text-[#B89B6A]">
              Lombardy, Italy
            </p>

            <p className="mt-2 font-old-standard text-sm text-[#6D625B]">
              {totalWines} wines from {producers.length} producers
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
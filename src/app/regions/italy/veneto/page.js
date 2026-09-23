"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "Ca' de' Rocchi",
    wines: [
      {
        name: "Dugal, IGP",
        year: "2024",
        alcohol: "14%",
        detail: "70% Cabernet Sauvignon · 30% Merlot",
      },
    ],
  },

  {
    name: "Giuseppe Campagnola",
    wines: [
      {
        name: "Missoj Amarone Riserva, DOCG",
        year: "2017",
        alcohol: "17%",
        detail: "Single Vineyard · 93 pts James Suckling",
      },
      {
        name: "Amarone Riserva, DOCG, Caterina Zardini",
        year: "2019",
        alcohol: "16%",
        detail: "Riserva Privata Selezione",
      },
      {
        name: "Amarone, DOCG, Classico",
        year: "2021",
        alcohol: "15.5%",
        detail:
          "Grapes: 75% Corvina Veronese & Corvinone Veronese · 25% Rondinella",
      },
      {
        name: "Missoj Valpolicella Ripasso, DOC",
        year: "2021",
        alcohol: "14%",
        detail: "Single Vineyard · 91 pts James Suckling",
      },
      {
        name: "Caterina Zardini Valpolicella, DOC",
        year: "2022",
        alcohol: "14%",
        detail:
          '91 pts James Suckling · Grapes dried naturally for 20 days · A "Baby Amarone"',
      },
      {
        name: "Valpolicella Ripasso, DOC, Classico",
        year: "2023",
        alcohol: "13.5%",
        detail:
          "Made from the same grapes as Amarone · 60% Corvina · 35% Rondinella · 5% Molinara",
      },
      {
        name: 'Valpolicella Classico "Le Bine", DOC',
        year: "2024",
        alcohol: "13%",
      },
      {
        name: 'Soave Classico "Le Bine", DOC',
        year: "2024",
        alcohol: "13%",
      },
      {
        name: "Lugana, DOC",
        year: "2022",
        alcohol: "13%",
      },
      {
        name: "Custoza, DOC",
        year: "2024",
        alcohol: "12.5%",
        detail:
          "Trebbiano Toscano · Garganega · Tocai Italico · Riesling · Cortese",
      },
      {
        name: "Chardonnay, IGT",
        year: "2024",
        alcohol: "12.5%",
      },
      {
        name: "Fortificato",
        year: "N/V",
        alcohol: "19%",
        detail: "500 ML",
      },
      {
        name: "Recioto, DOCG",
        year: "2022",
        alcohol: "13%",
        detail: "500 ML",
      },
      {
        name: "Prosecco Cantico, DOC",
        year: "N/V",
        alcohol: "11%",
        detail: "200 ML · 24 Pack Case",
      },
    ],
  },

  {
    name: "Ottella",
    wines: [
      {
        name: "'Molceo' Lugana Riserva, DOC",
        year: "2022",
        alcohol: "13%",
        detail:
          "100% Turbiana (Trebbiano di Lugana) · 18 months on fine lees · Mostly in steel, remainder in barrels and barriques",
      },
      {
        name: "'Le Creete' Lugana, DOC",
        year: "2024",
        alcohol: "13%",
        detail: "100% Turbiana · 6–8 months on fine lees",
      },
      {
        name: "Lugana, DOC",
        year: "2024",
        alcohol: "12.5%",
        detail: "100% Turbiana · 5 months on fine lees",
      },
      {
        name: "Camposireso, Vino Rosso",
        year: "2020",
        alcohol: "14.5%",
        detail:
          "50% Merlot · 25% Cabernet Sauvignon · 25% Corvina Veronese · Partial drying of grapes · 24 months in barrique",
      },
      {
        name: "Gemei, Vino Rosso",
        year: "2023",
        alcohol: "14%",
        detail:
          "Corvina Veronese · Cabernet Sauvignon · Merlot · 6 months in large oak barrels",
      },
    ],
  },

  {
    name: "Poderi Campopian",
    wines: [
      {
        name: "Amarone delle Valpolicella 'Marziale' Riserva, DOCG",
        year: "2017",
        alcohol: "15.5%",
        detail:
          "80% Corvina · 15% Corvinone · 5% Rondinella · 12–18 months French oak",
      },
      {
        name: "Valpolicella Ripasso 'Lunante', DOP",
        year: "2021",
        alcohol: "15%",
        detail:
          "85% Corvina · 10% Rondinella · 5% Corvinone · 12–14 months French and American oak",
      },
      {
        name: "Valpolicella Classico Superiore 'Reguso', DOP",
        year: "2017",
        alcohol: "14%",
        detail:
          "85% Corvina · 10% Rondinella · 5% Corvinone",
      },
    ],
  },

  {
    name: "Roccolo del Lago",
    wines: [
      {
        name: "Bardolino Classico Chiaretto, DOC",
        year: "2024",
        alcohol: "12.5%",
      },
      {
        name: "Bardolino Classico, DOC",
        year: "2023",
        alcohol: "13%",
      },
    ],
  },

  {
    name: "Tenuta Valleselle",
    wines: [
      {
        name: "Aureum Acinum Amarone della Valpolicella, DOCG",
        year: "2022",
        alcohol: "15%",
        detail: "90% Corvina e Corvinone · 10% Rondinella",
      },
      {
        name: "Rovertondo Valpolicella Ripasso, DOP",
        year: "2021",
        alcohol: "14%",
        detail: "90% Corvina e Corvinone · 10% Rondinella",
      },
      {
        name: "Garda Bianco, DOP",
        year: "2024",
        alcohol: "12.5%",
        detail: "Garganega · Trebbiano · Chardonnay",
      },
    ],
  },

  {
    name: "Tinazzi",
    wines: [
      {
        name: "Amarone della Valpolicella Riserva 'A50', DOCG",
        year: "2019",
        alcohol: "15.5%",
        detail:
          "95% Corvina e Corvinone · 5% Rondinella · 12–18 months French oak barrels",
      },
      {
        name: "Valpolicella Ripasso 'G77', DOP",
        year: "2017",
        alcohol: "15%",
        detail:
          "80% Corvina · 10% Corvinone · 10% Rondinella · 12 months French and American oak",
      },
    ],
  },

  {
    name: "Villa Rocca",
    wines: [
      {
        name: "Merlot",
        year: "2023",
        alcohol: "12%",
      },
      {
        name: "Cabernet Sauvignon",
        year: "2022",
        alcohol: "12.5%",
      },
    ],
  },

  {
    name: "Ville D'Arfanta",
    wines: [
      {
        name: "Conegliano Valdobbiadene Millesimato Extra Brut, DOCG",
        year: "2024",
        alcohol: "11%",
      },
      {
        name: "Conegliano Valdobbiadene Millesimato Brut, DOCG",
        year: "2024",
        alcohol: "11%",
      },
    ],
  },

  {
    name: "Vinai Italiani",
    wines: [
      {
        name: "Amarone delle Valpolicella, DOCG",
        year: "2019",
        alcohol: "15%",
      },
      {
        name: "Gajardo Rosso Veronese, IGT",
        year: "2020",
        alcohol: "13.5%",
      },
    ],
  },

  {
    name: "Vinicola Serena",
    wines: [
      {
        name: "Serena Prosecco Treviso, DOC",
        year: "N/V",
        alcohol: "11%",
        detail: "Extra Dry",
      },
      {
        name: "Serena Valdobbiadene Prosecco Superiore, DOCG",
        year: "N/V",
        alcohol: "11%",
      },
    ],
  },
];

const totalWines = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function VenetoPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Back Link */}
          <Link
            href="/regions/italy"
            className="mb-10 inline-flex items-center gap-2 font-old-standard text-sm text-[#6D625B] transition-colors hover:text-[#741C29]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Italy
          </Link>

          {/* Italy Label */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-[#D4AF37] sm:w-20" />

            <span className="font-old-standard text-xs uppercase tracking-[0.35em] text-[#B89B6A] sm:text-sm">
              Italy
            </span>

            <div className="h-px w-12 bg-[#D4AF37] sm:w-20" />
          </div>

          {/* Decorative Text */}
          <p className="mt-8 text-center font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl md:text-5xl">
            From the vineyards of Northern Italy
          </p>

          {/* Main Heading */}
          <h1 className="mt-3 text-center font-philosopher text-5xl leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Veneto
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-3xl text-center font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg sm:leading-8">
            Discover our selection of wines from Veneto, featuring Amarone,
            Valpolicella, Lugana, Soave, Bardolino and Prosecco from some of
            the region&apos;s distinctive producers.
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
                Veneto
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
              Wines from Veneto
            </h2>

            <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
              A curated collection of Veneto wines, from elegant sparkling
              expressions to the rich and structured wines of Valpolicella.
            </p>
          </div>

          {/* =====================================================
              PRODUCER CARDS
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
                  {/* Header */}
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

                  {/* Rows */}
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
                    MOBILE / TABLET
                ================================================= */}
                <div className="divide-y divide-[#741C29]/10 lg:hidden">
                  {producer.wines.map((wine, index) => (
                    <div
                      key={`${wine.name}-${wine.year}-${index}`}
                      className="p-5 sm:p-6"
                    >
                      {/* Wine */}
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
            Veneto, Italy
          </p>

          <p className="mt-3 font-old-standard text-sm text-[#6D625B]">
            {producers.length} Producers · {totalWines} Wines
          </p>
        </div>
      </section>
    </main>
  );
}
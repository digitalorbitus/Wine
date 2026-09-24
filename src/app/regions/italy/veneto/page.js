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
        detail: "85% Corvina · 10% Rondinella · 5% Corvinone",
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
      {/* =====================================================
          TOP
      ===================================================== */}
      <section className="px-6 pt-3 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* LEFT */}
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
              Veneto
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
              From the vineyards of Northern Italy
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
              Discover our selection of wines from Veneto, featuring Amarone,
              Valpolicella, Lugana, Soave, Bardolino and Prosecco from some of
              the region&apos;s distinctive producers.
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
                Veneto
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
              Veneto, Italy
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
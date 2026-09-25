"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "Ascheri",
    wines: [
      {
        name: "Barolo Coste & Bricco, DOCG",
        year: "2019",
        alcohol: "14.5%",
      },
      {
        name: "Barolo Sorano, DOCG",
        year: "2020",
        alcohol: "14.5%",
      },
      {
        name: "Barolo Pisapola, DOCG",
        year: "2020",
        alcohol: "14.5%",
      },
      {
        name: "Barolo, DOCG",
        year: "2021",
        alcohol: "14.5%",
      },
      {
        name: "Barbera Langhe",
        year: "2023",
        alcohol: "14.5%",
      },
      {
        name: "Barbera d'Alba, DOC",
        year: "2018",
        alcohol: "14%",
      },
      {
        name: "Barbera d'Alba, DOC",
        year: "2017",
        alcohol: "14.5%",
      },
      {
        name: "Dolcetto Langhe",
        year: "2024",
        alcohol: "13%",
      },
      {
        name: "Gavi del comune di Gavi, DOCG",
        year: "2024",
        alcohol: "12.5%",
      },
      {
        name: "Arneis, DOC",
        year: "2024",
        alcohol: "13%",
      },
    ],
  },

  {
    name: "Carlo & Sylvia Soc. Agr.",
    wines: [
      {
        name: "Moscato d'Asti, DOCG",
        year: "2024",
        alcohol: "5%",
      },
      {
        name: "Chardonnay, DOC",
        year: "2024",
        alcohol: "12.5%",
      },
    ],
  },

  {
    name: "Fratelli Ferrero, La Morra",
    wines: [
      {
        name: "Barolo Manzoni Bricco, DOCG",
        year: "2017",
        alcohol: "14.5%",
      },
      {
        name: "Barolo Gattera, DOCG",
        year: "2019",
        alcohol: "14%",
      },
      {
        name: "Barolo Pinin, DOCG",
        year: "2020",
        alcohol: "14%",
      },
      {
        name: "Nebbiolo Langhe, DOC",
        year: "2021",
        alcohol: "13.5%",
      },
      {
        name: "Barbera d'Alba, DOC",
        year: "2022",
        alcohol: "13.5%",
      },
    ],
  },

  {
    name: "Punset",
    wines: [
      {
        name: "Barbaresco Riserva 'Campo Quadro', DOCG",
        year: "2016",
        alcohol: "14.5%",
      },
      {
        name: "Barbaresco Riserva 'Basarin', DOCG",
        year: "2017",
        alcohol: "14%",
      },
      {
        name: "Nebbiolo Langhe, DOC",
        year: "2022",
        alcohol: "14%",
      },
      {
        name: "Barbera d'Alba, DOC",
        year: "2021",
        alcohol: "15%",
      },
      {
        name: "Dolcetto d'Alba, DOC",
        year: "2022",
        alcohol: "12.5%",
      },
      {
        name: "Langhe Arneis, DOC",
        year: "2023",
        alcohol: "13.5%",
      },
      {
        name: "NE? Langhe Bianco, DOC",
        year: "2023",
        alcohol: "13%",
      },
      {
        name: "Arneis & Nascetta",
        year: "—",
        alcohol: "—",
      },
    ],
  },

  {
    name: "Vegis",
    wines: [
      {
        name: "Gattinara Riserva, DOCG",
        year: "2015",
        alcohol: "13.5%",
      },
    ],
  },

  /* =====================================================
     VITE COLTE
  ===================================================== */
  {
    name: "Vite Colte",
    wines: [
      {
        name: "Barolo Riserva, DOCG",
        year: "2015",
        alcohol: "14.5%",
        detail: "JS 93 pts",
      },
      {
        name: "Barolo di Serralunga d'Alba, DOCG",
        year: "2015",
        alcohol: "14.5%",
        detail: "JS 93 pts",
      },
      {
        name: "Barolo di Barolo, DOCG",
        year: "2019",
        alcohol: "14.5%",
        detail: "JS 91 pts",
      },
      {
        name: "Barolo di Monforte d'Alba, DOCG",
        year: "2013",
        alcohol: "14%",
      },
      {
        name: "Barolo 'Paesi Tuoi', DOCG",
        year: "2020",
        alcohol: "14%",
        detail: "JS 91 pts",
      },
      {
        name: "Barbaresco Riserva, DOCG",
        year: "2015",
        alcohol: "14.5%",
        detail: "JS 93 pts",
      },
      {
        name: "Barbaresco 'La Casa in Collina', DOCG",
        year: "2021",
        alcohol: "14%",
        detail: "JS 91 pts",
      },
      {
        name: "Barbera d'Asti Superiore, DOCG",
        year: "2022",
        alcohol: "14.5%",
      },
      {
        name: "Barbera d'Asti 'Rossofuoco', DOCG",
        year: "2023",
        alcohol: "13.5%",
        detail: "Vino Biologico",
      },
      {
        name: "Surpass - Rosso Passito, DOC",
        year: "2021",
        alcohol: "15%",
        detail: "Late harvest Barbera · 6 months barriques",
      },
      {
        name: "Nizza, DOCG",
        year: "2020",
        alcohol: "15%",
        detail: "JS 92 pts",
      },
      {
        name: "Barbera Riserva",
        year: "—",
        alcohol: "—",
        detail: "12 months barrique · 12 months in barrel",
      },
      {
        name: "Nebbiolo d'Alba Valdolmo, DOC",
        year: "2023",
        alcohol: "13.5%",
      },
      {
        name: "Nebbiolo Langhe, DOC",
        year: "2023",
        alcohol: "14%",
        detail: "Vino Biologico",
      },
      {
        name: "Timorasso 'Derthona', Colli Tortonesi DOC",
        year: "2023",
        alcohol: "14%",
      },
      {
        name: "Gavi, DOCG",
        year: "2024",
        alcohol: "11%",
      },
      {
        name: "Sauvignon, DOC 'Tra Donne Sole'",
        year: "2022",
        alcohol: "14%",
      },
      {
        name: "Roero Arneis, DOCG",
        year: "—",
        alcohol: "13.5%",
      },
    ],
  },
];

const totalWines = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function PiedmontPage() {
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
              Piedmont
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
              From the heart of Northern Italy
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
              Discover our selection of wines from Piedmont, featuring
              celebrated Barolo, Barbaresco, Nebbiolo, Barbera, Dolcetto,
              Arneis and other wines from this historic Italian region.
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
                Piedmont
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
                    px-6 py-7 text-center sm:px-8
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
                      key={`${wine.name}-${index}`}
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
                            <p className="mt-1 font-old-standard text-xs text-[#B89B6A]">
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
                      key={`${wine.name}-${index}`}
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
              Piedmont, Italy
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
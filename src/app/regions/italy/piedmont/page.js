
"use client";

import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

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
];

const totalWines = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function PiedmontPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="px-6 pb-14 pt-20 sm:px-10 lg:px-16 lg:pb-20 lg:pt-28">
        <div className="mx-auto max-w-7xl">

          {/* BACK BUTTON */}
          <div className="mb-12">
            <Link
              href="/italy"
              className="
                inline-flex
                items-center
                gap-2
                font-old-standard
                text-sm
                text-[#6D625B]
                transition-colors
                hover:text-[#741C29]
              "
            >
              <ArrowLeft size={16} />
              Back to Italy
            </Link>
          </div>


          {/* CENTER HERO */}
          <div className="mx-auto max-w-4xl text-center">

            {/* COUNTRY */}
            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-[#D4AF37]" />

              <span className="font-old-standard text-sm uppercase tracking-[0.3em]">
                Italy
              </span>

              <span className="h-px w-10 bg-[#D4AF37]" />

            </div>


            {/* SCRIPT */}
            <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
              From the heart of Northern Italy
            </p>


            {/* HEADING */}
            <h1 className="mt-3 font-philosopher text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Piedmont
            </h1>


            {/* DESCRIPTION */}
            <p className="mx-auto mt-6 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
              Discover our selection of wines from Piedmont, featuring
              celebrated Barolo, Barbaresco, Nebbiolo, Barbera, Dolcetto,
              Arneis and other wines from this historic Italian region.
            </p>


            {/* DIVIDER */}
            <div className="mx-auto mt-8 flex items-center justify-center gap-3">

              <span className="h-px w-16 bg-[#D4AF37]/60" />

              <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />

              <span className="h-px w-16 bg-[#D4AF37]/60" />

            </div>

          </div>


          {/* =================================================
              STATS
          ================================================= */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-[#741C29]/10 bg-[#741C29]/10 sm:grid-cols-3">

            <div className="bg-white p-6 text-center">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Producers
              </p>

              <p className="mt-2 font-philosopher text-2xl text-[#741C29]">
                {producers.length}
              </p>
            </div>


            <div className="bg-white p-6 text-center">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Wines
              </p>

              <p className="mt-2 font-philosopher text-2xl text-[#741C29]">
                {totalWines}
              </p>
            </div>


            <div className="col-span-2 bg-white p-6 text-center sm:col-span-1">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Region
              </p>

              <p className="mt-2 font-philosopher text-2xl text-[#741C29]">
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


          {/* CENTER SECTION HEADING */}
          <div className="mb-12 text-center">

            <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
              Our Selection
            </p>

            <h2 className="mt-1 font-philosopher text-3xl text-[#741C29] sm:text-4xl lg:text-5xl">
              Wines from Piedmont
            </h2>

            <p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-[#6D625B]">
              A curated selection from Piedmont producers and vineyards.
            </p>

          </div>


          {/* =================================================
              PRODUCERS
          ================================================= */}
          <div className="space-y-10">

            {producers.map((producer) => (

              <section
                key={producer.name}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#741C29]/10
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-lg
                "
              >

                {/* PRODUCER HEADING */}
                <div className="border-b border-[#741C29]/10 bg-[#F4F2EC]/50 px-6 py-7 text-center sm:px-8">

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
                    DESKTOP TABLE
                ================================================= */}
                <div className="hidden lg:block">

                  {/* TABLE HEADER */}
                  <div className="grid grid-cols-[1fr_180px_180px] border-b border-[#741C29]/10 bg-[#741C29] text-white">

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


                  {/* WINE ROWS */}
                  <div>

                    {producer.wines.map((wine, index) => (

                      <div
                        key={`${wine.name}-${index}`}
                        className="
                          group
                          grid
                          grid-cols-[1fr_180px_180px]
                          border-b
                          border-[#741C29]/8
                          last:border-0
                          transition-colors
                          duration-300
                          hover:bg-[#F4F2EC]/60
                        "
                      >

                        {/* WINE */}
                        <div className="flex items-center gap-4 px-8 py-5">

                          <span
                            className="
                              flex
                              h-9
                              w-9
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-[#741C29]/5
                              font-old-standard
                              text-xs
                              text-[#741C29]
                              transition-all
                              duration-300
                              group-hover:bg-[#741C29]
                              group-hover:text-white
                            "
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="font-philosopher text-lg text-[#741C29]">
                            {wine.name}
                          </span>

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

                        {/* NUMBER */}
                        <span
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#741C29]/5
                            font-old-standard
                            text-xs
                            text-[#741C29]
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>


                        {/* NAME */}
                        <div className="min-w-0 flex-1">

                          <h4 className="font-philosopher text-xl leading-tight text-[#741C29]">
                            {wine.name}
                          </h4>

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


          {/* =================================================
              BOTTOM
          ================================================= */}
          <div className="mt-12 border-t border-[#741C29]/10 pt-8 text-center">

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


"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "Bindella Tenuta Vallocaia",
    wines: [
      {
        name: "Vino Nobile di Montepulciano 'I Quadri', DOCG",
        year: "2019",
        alcohol: "15%",
        detail:
          "100% Sangiovese · 18–20 months French Tonneaux · 92 points James Suckling · Tre Bicchieri",
      },
      {
        name: "Vino Nobile di Montepulciano, DOCG",
        year: "2019",
        alcohol: "14%",
        detail:
          "85% Sangiovese, 15% Canaiolo, Colorino, Mammolo · 20–22 months large oak casks · 91 points James Suckling",
      },
    ],
  },

  {
    name: "Cantina del Redi",
    wines: [
      {
        name: "Orbaio, IGT",
        year: "2021",
        alcohol: "14%",
        detail: "Sangiovese, Cabernet & Merlot",
      },
      {
        name: "Vino Nobile di Montepulciano, Riserva, DOCG 'Briareo'",
        year: "2019",
        alcohol: "14%",
      },
      {
        name: "Riccio Toscana Bianco, IGT",
        year: "2024",
        alcohol: "12.5%",
      },
    ],
  },

  {
    name: "Castelli del Grevepesa",
    wines: [
      {
        name: 'Gran Selezione Chianti Classico "Lamole", DOCG',
        year: "2021",
        alcohol: "14%",
      },
      {
        name: 'Gran Selezione Chianti Classico "Panzano", DOCG',
        year: "2021",
        alcohol: "14%",
      },
      {
        name: "Clemente VII Chianti Classico Riserva, DOCG",
        year: "2020",
        alcohol: "14%",
        detail: "94 pts Wine Spectator",
      },
      {
        name: "Clemente VII Chianti Classico, DOCG",
        year: "2021",
        alcohol: "13.5%",
        detail: "92 pts James Suckling",
      },
      {
        name: "Giulio de' Medici Chianti Classico Riserva, DOCG",
        year: "2021",
        alcohol: "13.5%",
        detail: "93 pts James Suckling",
      },
      {
        name: "Giulio de' Medici Chianti, DOCG",
        year: "2023",
        alcohol: "12.5%",
      },
      {
        name: "Collerosso Chianti Colli Fiorentini, DOCG",
        year: "2023",
        alcohol: "13.5%",
      },
      {
        name: "'Elianto' Vermentino di Toscana, IGT",
        year: "2022",
        alcohol: "13%",
      },
      {
        name: "Vermut Rosso",
        year: "N/V",
        alcohol: "18%",
        detail: "750 ML",
      },
      {
        name: "Castelgreve Vin Santo del Chianti, DOC",
        year: "2020",
        alcohol: "15.5%",
        detail: "375 ML",
      },
      {
        name: "Clemente VII Vin Santo del Chianti Classico, DOC",
        year: "2015",
        alcohol: "14%",
        detail: "375 ML",
      },
      {
        name: "Santa Pazienza Vin Santo del Chianti, DOC",
        year: "2013",
        alcohol: "16%",
        detail: "375 ML",
      },
    ],
  },

  {
    name: "Castello di Bibbione",
    wines: [
      {
        name: "Chianti Classico Riserva, DOCG",
        year: "2020",
        alcohol: "13.5%",
      },
    ],
  },

  {
    name: "Castello Romitorio",
    wines: [
      {
        name: "Brunello di Montalcino, Filo di Seta, DOCG",
        year: "2020",
        alcohol: "14.5%",
        detail: "30 months in oak · 98 pts Robert Parker / Wine Advocate",
      },
      {
        name: "Romitorio, IGT",
        year: "2021",
        alcohol: "14%",
        detail: "Syrah and Petit Verdot · 93 pts James Suckling",
      },
      {
        name: "Brio Toscano, IGT",
        year: "2022",
        alcohol: "13.5%",
        detail: "100% Sangiovese · Several months in oak",
      },
      {
        name: "Brunello di Montalcino, DOCG",
        year: "2018",
        alcohol: "14.5%",
        detail: "Magnum",
      },
    ],
  },

  {
    name: "Crociani",
    wines: [
      {
        name: "Vino Nobile di Montepulciano, DOCG",
        year: "2020",
        alcohol: "13.5%",
        detail: "A 20 acre farm in Montepulciano.",
      },
    ],
  },

  {
    name: "Donna Olga",
    wines: [
      {
        name: "Brunello di Montalcino, DOCG",
        year: "2020",
        alcohol: "15%",
        detail: "92 pts James Suckling",
      },
      {
        name: "Clos degli Amodeo, IGT",
        year: "2019",
        alcohol: "14%",
        detail: "92 pts James Suckling · Cabernet Sauvignon & Sangiovese",
      },
    ],
  },

  {
    name: "Fattoria Svetoni",
    wines: [
      {
        name: "'La Croce' Vino Nobile di Montepulciano, DOCG",
        year: "2018",
        alcohol: "14%",
      },
      {
        name: "Rosso di Montepulciano, DOC",
        year: "2021",
        alcohol: "14.5%",
      },
    ],
  },

  {
    name: "Fattoria Valacchi",
    wines: [
      {
        name: "Valicaïa, IGT",
        year: "2018",
        alcohol: "14%",
        detail:
          "60% Sangiovese, 20% Cabernet Sauvignon, 20% Merlot · 18 months in 225 L French barriques",
      },
      {
        name: "Gelso Chianti Riserva, DOCG",
        year: "2020",
        alcohol: "14%",
      },
      {
        name: "Gelso Chianti, DOCG",
        year: "2020",
        alcohol: "13%",
      },
    ],
  },

  {
    name: "La Gerla",
    wines: [
      {
        name: "Brunello di Montalcino - La Pieve, DOCG",
        year: "2019",
        alcohol: "14.5%",
      },
      {
        name: "Brunello di Montalcino - La Pieve, DOCG",
        year: "2017",
        alcohol: "14%",
      },
      {
        name: "Brunello di Montalcino, DOCG",
        year: "2019",
        alcohol: "14.5%",
        detail: "JS 95 pts · RP 94 pts",
      },
      {
        name: "Birba, IGT",
        year: "2020",
        alcohol: "14%",
      },
      {
        name: "Rosso di Montalcino, DOC",
        year: "2020",
        alcohol: "14%",
      },
      {
        name: "Poggio gli Angeli, IGT",
        year: "2021",
        alcohol: "14%",
      },
    ],
  },

  {
    name: "Le Cacce degli Amodeo",
    wines: [
      {
        name: "Brunello di Montalcino, DOCG",
        year: "2020",
        alcohol: "15%",
        detail: "93 pts James Suckling",
      },
    ],
  },

  {
    name: "Nittardi",
    wines: [
      {
        name: "Nectar Dei, DOC Maremma Toscana",
        year: "2021",
        alcohol: "15%",
        detail:
          "93 JS · 93 RP · 70% Cabernet Sauvignon, 15% Merlot, 10% Petit Verdot, 5% Syrah · 24 months in French oak barriques, 30% new",
      },
      {
        name: "Ad Astra, DOC Maremma Toscana",
        year: "2023",
        alcohol: "13.5%",
        detail:
          "50% Sangiovese, 25% Cabernet Sauvignon, 25% Cabernet Franc · 14 months new & used barrique and tonneaux",
      },
      {
        name: "Chianti Classico Gran Selezione, DOCG",
        year: "2020",
        alcohol: "15%",
        detail:
          "94 RP · 93 JS · 100% Sangiovese · 28 months Austrian & French barrels",
      },
      {
        name: "Chianti Classico Riserva, DOCG",
        year: "2019",
        alcohol: "14.5%",
        detail:
          "JS 93 pts · Tre Bicchieri · 95% Sangiovese, 5% Merlot · 24 months in French barriques and tonneaux",
      },
      {
        name: "Chianti Classico 'Casanuova di Nittardi', DOCG",
        year: "2021",
        alcohol: "14.5%",
        detail:
          "RP 93 pts · JS 92 pts · 100% Sangiovese · 14 months new & used French oak barrels",
      },
      {
        name: "Chianti Classico 'Belcanto', DOCG",
        year: "2022",
        alcohol: "14%",
        detail: "92 JS · 90% Sangiovese, 10% other indigenous grapes",
      },
      {
        name: "Vermentino 'Ben', DOC",
        year: "2024",
        alcohol: "12.5%",
      },
      {
        name: "Cosmo Toscana Bianco, IGT",
        year: "2024",
        alcohol: "13%",
        detail: "100% Roussanne",
      },
    ],
  },

  {
    name: "Petra Azienda Agricola",
    wines: [
      {
        name: "Petra, IGT",
        year: "2021",
        alcohol: "14.5%",
        detail:
          "Suvereto, Maremma · Organic and sustainable vineyards · 60% Cabernet Sauvignon, 28% Merlot, 12% Cabernet Franc",
      },
      {
        name: "Potenti, IGT",
        year: "2021",
        alcohol: "14.5%",
        detail: "100% Cabernet Sauvignon",
      },
      {
        name: "Quercegobbe, IGT",
        year: "2018",
        alcohol: "14%",
        detail: "100% Merlot",
      },
      {
        name: "Hebo, IGT",
        year: "2020",
        alcohol: "14%",
        detail: "50% Cabernet Sauvignon, 40% Merlot, 10% Sangiovese",
      },
      {
        name: "Zingari, IGT",
        year: "2022",
        alcohol: "13.5%",
        detail: "25% Merlot, 25% Sangiovese, 25% Syrah, 25% Petit Verdot",
      },
    ],
  },

  {
    name: "Pietranera",
    wines: [
      {
        name: "Brunello di Montalcino, DOCG",
        year: "2020",
        alcohol: "14.5%",
        detail: "92 pts James Suckling",
      },
      {
        name: "Rosso di Montalcino, DOC",
        year: "2023",
        alcohol: "14.5%",
      },
    ],
  },

  {
    name: "Poggio Stella",
    wines: [
      {
        name: "Vino Nobile di Montepulciano Riserva, DOCG",
        year: "2017",
        alcohol: "13.5%",
        detail: "LM 94 pts · 6 Pack Wooden Box",
      },
      {
        name: "Vino Nobile di Montepulciano, DOCG",
        year: "2019",
        alcohol: "14%",
        detail: "Luca Maroni 93 pts · 6 Pack Wooden Box",
      },
    ],
  },

  {
    name: "Poggiotondo",
    wines: [
      {
        name: "Brunello di Montalcino, DOCG",
        year: "2020",
        alcohol: "14.5%",
        detail: "92 pts James Suckling",
      },
    ],
  },

  {
    name: "Tenuta Ghiaccio Forte",
    wines: [
      {
        name: "Morellino di Scansano, DOCG",
        year: "2021",
        alcohol: "14.5%",
        detail: "100% Sangiovese",
      },
    ],
  },

  {
    name: "Tenuta Friggiali",
    wines: [
      {
        name: "Brunello di Montalcino, DOCG",
        year: "2020",
        alcohol: "14.5%",
        detail: "JS 92 pts",
      },
    ],
  },

  {
    name: "Tenuta Pian del Gallo",
    wines: [
      {
        name: "Chianti Classico Riserva, DOCG",
        year: "2022",
        alcohol: "14.5%",
        detail: "100% Sangiovese · 6 months tonneaux",
      },
      {
        name: "Chianti Classico, DOCG",
        year: "2022",
        alcohol: "13%",
        detail: "100% Sangiovese",
      },
      {
        name: "Merlot Toscana 'Contessa Eletta', IGP",
        year: "2022",
        alcohol: "14%",
        detail: "100% Merlot",
      },
    ],
  },

  {
    name: "Vecchia Cantina",
    wines: [
      {
        name: "Vino Nobile di Montepulciano, DOCG",
        year: "2019",
        alcohol: "14%",
        detail: "90 pts James Suckling",
      },
      {
        name: "Rosso di Montepulciano, DOC",
        year: "2024",
        alcohol: "12.5%",
      },
      {
        name: "Chianti Classico, DOCG",
        year: "2024",
        alcohol: "13%",
      },
      {
        name: "Campaltino Toscano Rosso, IGT",
        year: "2022",
        alcohol: "13.5%",
        detail: "Sangiovese and Merlot",
      },
      {
        name: "Campaltino Toscano Bianco, IGT",
        year: "2022",
        alcohol: "12.5%",
        detail: "Trebbiano Toscano and Chardonnay",
      },
    ],
  },

  {
    name: "Vicchiomaggio",
    wines: [
      {
        name: "Ripa delle More, IGT",
        year: "2023",
        alcohol: "14%",
        detail:
          "Greve in Chianti · Sangiovese, Cabernet Sauvignon, Merlot",
      },
      {
        name: "Le Bolle Chianti Classico Gran Selezione, DOCG",
        year: "2019",
        alcohol: "13.5%",
        detail: "100% Sangiovese · 26 months new French oak",
      },
      {
        name: "Vigna La Prima Chianti Classico Riserva, DOCG",
        year: "2022",
        alcohol: "14%",
        detail: "'Gran Selezione' · 100% Sangiovese",
      },
      {
        name: "Agostino Petri Chianti Classico Riserva, DOCG",
        year: "2022",
        alcohol: "14%",
        detail: "Sangiovese & Cabernet Sauvignon",
      },
      {
        name: "Guado Alto Chianti Classico, DOCG",
        year: "2023",
        alcohol: "13.5%",
        detail: "100% Sangiovese · 10 months in oak",
      },
      {
        name: "San Jacopo Chianti Classico, DOCG",
        year: "2023",
        alcohol: "13.5%",
        detail: "100% Sangiovese",
      },
      {
        name: "Ripa delle Mandorle, IGT",
        year: "2023",
        alcohol: "13%",
        detail: '75% Sangiovese, 25% Cabernet Sauvignon · "Super Tuscan"',
      },
      {
        name: "Floreale Toscana Rosato, IGT",
        year: "2024",
        alcohol: "12.5%",
        detail: "100% Sangiovese",
      },
    ],
  },

  {
    name: "Villa Vallemaggiore",
    wines: [
      {
        name: "Poggio Re, IGT",
        year: "2022",
        alcohol: "14%",
        detail:
          "Vineyard in Maremma · 100% Cabernet Sauvignon · 14 months barriques",
      },
      {
        name: "Colle Alto, IGT",
        year: "2016",
        alcohol: "13%",
        detail:
          "65% Cabernet Sauvignon, 35% Sangiovese · 8 months in a combination of barriques and large oak casks",
      },
    ],
  },
];

const totalWines = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function TuscanyPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">
      {/* =====================================================
          TOP
      ===================================================== */}
      <section className="px-6 pt-3 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* LEFT - BACK */}
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
              Tuscany
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
              From the hills of central Italy
            </p>

            <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
              Discover our selection of wines from Tuscany, featuring
              celebrated Brunello di Montalcino, Chianti Classico, Vino Nobile
              di Montepulciano, Super Tuscans and distinctive wines from
              Maremma and across the region.
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
              mx-auto
              mt-12
              grid
              max-w-5xl
              grid-cols-2
              overflow-hidden
              rounded-2xl
              border
              border-[#741C29]/10
              bg-[#741C29]/10
              sm:grid-cols-3
            "
          >
            {/* PRODUCERS */}
            <div className="bg-white p-6 text-center">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Wineries
              </p>

              <p className="mt-2 font-philosopher text-2xl">
                {producers.length}
              </p>
            </div>

            {/* WINES */}
            <div className="bg-white p-6 text-center">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Wines
              </p>

              <p className="mt-2 font-philosopher text-2xl">
                {totalWines}
              </p>
            </div>

            {/* REGION */}
            <div className="col-span-2 bg-white p-6 text-center sm:col-span-1">
              <p className="font-old-standard text-xs uppercase tracking-[0.18em] text-[#6D625B]">
                Region
              </p>

              <p className="mt-2 font-philosopher text-2xl">
                Tuscany
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
          {/* <div className="mb-12 text-center">
            <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
              Our Selection
            </p>

            <h2 className="mt-1 font-philosopher text-3xl text-[#741C29] sm:text-4xl lg:text-5xl">
              Wines from Tuscany
            </h2>

            <p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-[#6D625B]">
              A curated selection from distinguished Tuscan producers and
              vineyards.
            </p>
          </div> */}

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
                {/* PRODUCER HEADER */}
                <div
                  className="
                    border-b
                    border-[#741C29]/10
                    bg-[#F4F2EC]/50
                    px-6
                    py-7
                    text-center
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

                        <div className="min-w-0">
                          <p className="font-philosopher text-lg text-[#741C29]">
                            {wine.name}
                          </p>

                          {wine.detail && (
                            <p className="mt-1 max-w-4xl font-old-standard text-xs leading-5 text-[#B89B6A]">
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
                      {/* WINE */}
                      <div className="flex gap-4">
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

                      {/* BASIC DETAILS */}
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        {/* YEAR */}
                        <div className="rounded-xl bg-[#F4F2EC] p-4 text-center">
                          <p className="font-old-standard text-[10px] uppercase tracking-[0.15em] text-[#6D625B]">
                            Year
                          </p>

                          <p className="mt-1 font-philosopher text-lg text-[#741C29]">
                            {wine.year}
                          </p>
                        </div>

                        {/* ALCOHOL */}
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
              Tuscany, Italy
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
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "Al-Cantàra",
    wines: [
      {
        name: "Ciuri di Strata, Sicilia Bianco",
        appellation: "DOC",
        alcohol: "13%",
        year: "2024",
        detail: "Catarratto · 4 months sur lie",
      },
      {
        name: "Occhi di Ciumi, Etna Bianco",
        appellation: "DOC",
        alcohol: "12.5%",
        year: "2024",
        detail: "90% Carricante, 10% Grecanico",
      },
      {
        name: "A Nutturna",
        appellation: "IGP",
        alcohol: "14%",
        year: "2022",
        detail: "100% Nerello Mascalese in Bianco",
      },
      {
        name: "Amuri di Fimmina e Amuri di Matri, Etna Rosato",
        appellation: "DOC",
        alcohol: "13%",
        year: "2024",
        detail: "100% Nerello Mascalese",
      },
      {
        name: "O'scuru O'scuru, Etna Rosso",
        appellation: "DOC",
        alcohol: "14%",
        year: "2021",
        detail: "100% Nerello Mascalese in Oak",
      },
      {
        name: "Cappiddazzu paga Tuttu",
        appellation: "IGP",
        alcohol: "13%",
        year: "2019",
        detail: "100% Cabernet Sauvignon · 12 months in barriques",
      },
      {
        name: "U Toccu, Pinot Nero",
        appellation: "IGT",
        alcohol: "13.5%",
        year: "2020",
        detail: "100% Pinot Nero · 12 months in barriques",
      },
      {
        name: "Un Bellissimo Novembre, Etna Rosso",
        appellation: "DOC",
        alcohol: "13.5%",
        year: "2021",
        detail: "Nerello Mascalese · 12 months in chestnut barrels",
      },
      {
        name: "Lu Veru Piaciri, Etna Rosso",
        appellation: "DOC",
        alcohol: "14.5%",
        year: "2023",
        detail: "100% Nerello Mascalese · 12 months in French oak",
      },
    ],
  },

  {
    name: "Cataldo",
    wines: [
      {
        name: "Syrah & Cabernet Sauvignon",
        appellation: "IGT",
        alcohol: "13.5%",
        year: "2022",
      },
    ],
  },

  {
    name: "Fina",
    wines: [
      {
        name: "Pas Dosé, Metodo Classico",
        appellation: "IGP",
        alcohol: "12%",
        year: "2019",
        detail: "70% Chardonnay, 30% Pinot Nero",
      },
      {
        name: "Firma del Tempo",
        appellation: "DOC",
        alcohol: "13.5%",
        year: "2023",
        detail: "Grillo Riserva · 20% fermented in barrique",
      },
      {
        name: "Fiorente Catarratto",
        appellation: "IGP",
        alcohol: "13%",
        year: "2024",
        detail: "100% Catarratto · Single vineyard",
      },
      {
        name: "Mamarì - Sauvignon Blanc",
        appellation: "IGP",
        alcohol: "12%",
        year: "2024",
      },
      {
        name: "Chardonnay",
        appellation: "IGP",
        alcohol: "13.5%",
        year: "2022",
      },
      {
        name: "Kebrilla - Grillo",
        appellation: "DOC",
        alcohol: "13.5%",
        year: "2023",
      },
      {
        name: "Kika",
        appellation: "IGP",
        alcohol: "13%",
        year: "2024",
        detail: "90% Traminer Aromatico, 10% Sauvignon Blanc",
      },
      {
        name: "Taif",
        appellation: "IGP",
        alcohol: "13.5%",
        year: "2022",
        detail: "100% Zibibbo",
      },
      {
        name: "Vola Vola Viognier",
        appellation: "IGP",
        alcohol: "13%",
        year: "2024",
      },
      {
        name: "Hanami - Rosato",
        appellation: "IGP",
        alcohol: "12.5%",
        year: "2022",
        detail: "100% Merlot · Organic",
      },
      {
        name: "Perricone",
        appellation: "IGP",
        alcohol: "13.5%",
        year: "2024",
      },
      {
        name: "Merlot",
        appellation: "IGP",
        alcohol: "14%",
        year: "2022",
        detail: "12 months in barriques & French barrels",
      },
      {
        name: "Caro Maestro",
        appellation: "IGP",
        alcohol: "14%",
        year: "2019",
        detail:
          "Cabernet Sauvignon, Merlot, Petit Verdot · 24 months in barriques",
      },
      {
        name: "Bausa - Nero d'Avola",
        appellation: "DOC",
        alcohol: "14%",
        year: "2020",
        detail: "100% Nero d'Avola · 18 months in oak",
      },
      {
        name: "Miral - Nero d'Avola",
        appellation: "DOC",
        alcohol: "13.5%",
        year: "2024",
      },
      {
        name: "Sicilian Selection",
        appellation: "IGP",
        alcohol: "13%",
        year: "2024",
        detail: "100% Syrah · Organic grapes",
      },
      {
        name: "El Aziz",
        appellation: "IGP",
        alcohol: "13%",
        year: "N/V",
        detail: "500ML · Late harvest Grillo",
      },
    ],
  },

  {
    name: "Firriato",
    wines: [
      {
        name: "Gaudensius, Blanc de Blancs",
        appellation: "Etna DOC",
        alcohol: "12%",
        year: "N/V",
        detail: "Classic Method · Chardonnay and Carricante",
      },
      {
        name: "Gaudensius, Blanc de Noir",
        appellation: "Etna DOC",
        alcohol: "12%",
        year: "N/V",
        detail: "Classic Method · Nerello Mascalese",
      },
      {
        name: "Gaudensius Rosé",
        appellation: "Etna DOC",
        alcohol: "12.5%",
        year: "N/V",
        detail: "Classic Method · Nerello Mascalese",
      },
      {
        name: "Chiaramonte Chardonnay",
        appellation: "DOC",
        alcohol: "13%",
        year: "2024",
      },
      {
        name: "Chiaramonte Nero d'Avola",
        appellation: "IGT",
        alcohol: "13.5%",
        year: "2023",
        detail: "6 months in barriques",
      },
      {
        name: "Altavilla della Corte Cabernet Sauvignon",
        appellation: "IGT",
        alcohol: "13.5%",
        year: "2022",
        detail: "7 months in American barriques",
      },
      {
        name: "Favinia Bianco 'La Muciara'",
        appellation: "IGT",
        alcohol: "13%",
        year: "2018",
        detail: "Grillo, Catarratto, Zibibbo · 6 months sur lie",
      },
      {
        name: "Favinia Rosso 'Le Sciabiche'",
        appellation: "IGT",
        alcohol: "14%",
        year: "2015",
        detail:
          "Nero d'Avola & Perricone · 4 months in barriques & barrels",
      },
      {
        name: "Quater Vitis Bianco",
        appellation: "IGT",
        alcohol: "13%",
        year: "2023",
        detail: "Catarratto, Inzolia, Carricante & Zibibbo",
      },
      {
        name: "Quarter Vitis Rosso",
        appellation: "DOC",
        alcohol: "13.5%",
        year: "2020",
        detail:
          "Nero d'Avola, Perricone, Frappato, Nerello Cappuccio",
      },
      {
        name: "Santagostino Bianco",
        appellation: "DOC",
        alcohol: "13%",
        year: "2024",
        detail: "Catarratto & Chardonnay",
      },
      {
        name: "Santagostino Rosso",
        appellation: "IGT",
        alcohol: "14%",
        year: "2020",
        detail: "Nero d'Avola & Syrah · 8 months in barriques",
      },
      {
        name: "Le Sabbie Dell'Etna - Etna Bianco",
        appellation: "DOC",
        alcohol: "13%",
        year: "2024",
        detail: "Catarratto & Carricante",
      },
      {
        name: "Le Sabbie Dell'Etna - Etna Rosato",
        appellation: "DOC",
        alcohol: "13%",
        year: "2024",
        detail: "Nerello Mascalese",
      },
      {
        name: "Le Sabbie Dell'Etna - Etna Rosso",
        appellation: "DOC",
        alcohol: "13.5%",
        year: "2021",
        detail: "Nerello Mascalese & Nerello Cappuccio",
      },
      {
        name: "Cavanera - Etna Bianco",
        appellation: "DOC",
        alcohol: "13%",
        year: "2022",
        detail: "Catarratto & Carricante",
      },
      {
        name: "Cavanera - Etna Rosso",
        appellation: "DOC",
        alcohol: "14.5%",
        year: "2021",
        detail:
          "Nerello Mascalese & Nerello Cappuccio · 9 months in oak",
      },
      {
        name: "Camelot",
        appellation: "DOC",
        alcohol: "14.5%",
        year: "2020",
        detail:
          "Cabernet Sauvignon and Merlot · 9 months in French barriques",
      },
      {
        name: "Harmonium",
        appellation: "DOC",
        alcohol: "14.5%",
        year: "2020",
        detail:
          "100% Nero d'Avola · 12 months in American & French barriques",
      },
      {
        name: "Ribeca",
        appellation: "DOC",
        alcohol: "14.5%",
        year: "2019",
        detail: "100% Perricone · 10-12 months in French barriques",
      },
      {
        name: "SIGNUM ÆTNÆ - Etna Rosso Riserva",
        appellation: "DOC",
        alcohol: "14.5%",
        year: "2016",
        detail:
          "150-year-old vines · Nerello Mascalese · 2+ years in oak",
      },
      {
        name: "Terre d'Ocra Moscato",
        appellation: "IGT",
        alcohol: "11.5%",
        year: "N/V",
        detail:
          "500ML · 100% Zibibbo · Small amount left to dry on the vines",
      },
      {
        name: "L'Ecrù Passito",
        appellation: "IGT",
        alcohol: "13%",
        year: "2022",
        detail: "500ML · 100% Zibibbo",
      },
      {
        name: "Harmonium",
        appellation: "DOC",
        alcohol: "14.5%",
        year: "2018",
        detail: "Large Format · 3L",
      },
    ],
  },

  {
    name: "Judeka",
    subtitle:
      "Organic and Eco-friendly Winery in the Vittoria Wine Region of Sicily",
    wines: [
      {
        name: "Cerasuolo di Vittoria",
        appellation: "DOCG",
        alcohol: "14%",
        year: "2021",
        detail: "60% Nero d'Avola, 40% Frappato",
      },
      {
        name: "Frappato Vittoria",
        appellation: "DOC",
        alcohol: "13%",
        year: "2021",
        detail: "100% Frappato",
      },
      {
        name: "Frarosa",
        appellation: "IGP",
        alcohol: "12%",
        year: "2022",
        detail: "100% Frappato · Naturally sparkling Rosato",
      },
      {
        name: "Blandine",
        appellation: "IGP",
        alcohol: "13.5%",
        year: "2019",
        detail: "Insolia, Chardonnay, Zibibbo",
      },
      {
        name: "Frabianco",
        appellation: "IGP",
        alcohol: "12%",
        year: "2022",
        detail: "100% Frappato · Naturally sparkling white wine",
      },
    ],
  },

  {
    name: "Navarra",
    subtitle: "Organic and Sustainable Winery",
    wines: [
      {
        name: "Nero d'Avola Riserva 'Battichiè'",
        appellation: "DOC",
        alcohol: "14%",
        year: "2019",
        detail:
          "6 months in vats · 12 months in new French barriques · another 6 months in vats",
      },
      {
        name: "Cerasuolo di Vittoria 'Maribu'",
        appellation: "DOCG",
        alcohol: "14%",
        year: "2023",
        detail:
          "Nero d'Avola & Frappato · 12 months on lees in stainless steel",
      },
      {
        name: "Frappato 'Disiato'",
        appellation: "DOC",
        alcohol: "13.5%",
        year: "2024",
        detail: "7 months on lees",
      },
      {
        name: "Sofien Bianco",
        appellation: "IGT",
        alcohol: "12.5%",
        year: "2024",
        detail: "Grillo & Chardonnay · 6 months on lees",
      },
    ],
  },
];

const wineCount = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function SicilyPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">
      {/* Top */}
      <section className="px-6 pt-3 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* Left */}
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
              Sicily
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
            Ancient vines beneath the Mediterranean sun
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
            Discover our selection of wines from Sicily, featuring expressive
            Etna wines, indigenous Nero d&apos;Avola, Frappato, Grillo,
            Carricante and distinctive wines from across the island.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#D4AF37]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
            <span className="h-px w-16 bg-[#D4AF37]/60" />
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
                Sicily
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
  

        <div className="mx-auto max-w-6xl space-y-10">
          {producers.map((producer) => (
            <section
              key={producer.name}
              className="overflow-hidden rounded-2xl border border-[#741C29]/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Producer Header */}
              <div className="border-b border-[#741C29]/10 bg-[#F4F2EC]/50 px-6 py-7 text-center sm:px-8">
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
                  {producer.wines.length} wines
                </p>
              </div>

              {/* Desktop Table */}
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
                    className="group grid grid-cols-[minmax(0,1fr)_120px_120px] border-b border-[#741C29]/8 transition-colors duration-300 last:border-0 hover:bg-[#F4F2EC]/60"
                  >
                    <div className="flex items-center gap-4 px-6 py-5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#741C29]/5 font-old-standard text-xs text-[#741C29] transition-all duration-300 group-hover:bg-[#741C29] group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div>
                        <p className="font-philosopher text-lg text-[#741C29]">
                          {wine.name}
                        </p>

                        <p className="mt-1 max-w-3xl font-old-standard text-xs leading-5 text-[#B89B6A]">
                          {wine.appellation}
                          {wine.detail ? ` · ${wine.detail}` : ""}
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
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#741C29]/5 font-old-standard text-xs text-[#741C29]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="font-philosopher text-xl leading-tight text-[#741C29]">
                          {wine.name}
                        </h4>

                        <p className="mt-1 font-old-standard text-xs leading-5 text-[#B89B6A]">
                          {wine.appellation}
                          {wine.detail ? ` · ${wine.detail}` : ""}
                        </p>

                        <div className="mt-4 grid grid-cols-2 gap-3">
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
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mx-auto mt-14 max-w-6xl border-t border-[#741C29]/10 pt-8 text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A]">
            Sicily, Italy
          </p>

          <p className="mt-2 font-old-standard text-sm text-[#6D625B]">
            {wineCount} wines from {producers.length} producers
          </p>
        </div>
      </section>
    </main>
  );
}
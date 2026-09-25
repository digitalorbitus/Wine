"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const producers = [
  {
    name: "Agnès du Couëdic",
    wines: [
      {
        name: "Mercurey 1er Cru 'Les Veleys' (Rouge)",
        alcohol: "13%",
        year: "2023",
        detail: "Mercurey 1er Cru",
      },
      {
        name: "Mercurey (Rouge)",
        alcohol: "13.5%",
        year: "2023",
        detail: "Mercurey",
      },
      {
        name: "Mercurey (Blanc)",
        alcohol: "13%",
        year: "2023",
        detail: "Mercurey",
      },
      {
        name: "Bourgogne Aligoté",
        alcohol: "12.5%",
        year: "2023",
        detail: "100% Aligoté",
      },
    ],
  },
  {
    name: "Bachey-Legros et Fils",
    wines: [
      {
        name: "Chassagne-Montrachet 1er Cru Morgeot (Blanc)",
        alcohol: "14.5%",
        year: "2023",
        detail: "Chassagne-Montrachet 1er Cru",
      },
      {
        name: "Chassagne-Montrachet 1er Cru Morgeot (Blanc)",
        alcohol: "14%",
        year: "2022",
        detail: "Chassagne-Montrachet 1er Cru",
      },
      {
        name: "Chassagne-Montrachet (Blanc)",
        alcohol: "14%",
        year: "2023",
        detail: "Chassagne-Montrachet",
      },
      {
        name: "Chassagne-Montrachet (Blanc)",
        alcohol: "14%",
        year: "2022",
        detail: "Chassagne-Montrachet",
      },
      {
        name: "Puligny-Montrachet (Blanc)",
        alcohol: "13.5%",
        year: "2023",
        detail: "Puligny-Montrachet",
      },
      {
        name: "Santenay 1er Cru 'La Comme' (Rouge)",
        alcohol: "12.5%",
        year: "2023",
        detail: "Santenay 1er Cru",
      },
      {
        name: "Santenay 1er Cru 'La Comme' (Rouge)",
        alcohol: "13.5%",
        year: "2022",
        detail: "Santenay 1er Cru",
      },
      {
        name: "Santenay 1er Cru 'Clos des Gravières' (Blanc)",
        alcohol: "14%",
        year: "2023",
        detail: "Santenay 1er Cru",
      },
      {
        name: "Santenay 1er Cru 'Clos des Gravières' (Blanc)",
        alcohol: "13.5%",
        year: "2022",
        detail: "Santenay 1er Cru",
      },
      {
        name: "Santenay 'Clos des Hâtes' (Rouge)",
        alcohol: "13.5%",
        year: "2023",
        detail: "Santenay",
      },
      {
        name: "Santenay 'Clos des Hâtes' (Rouge)",
        alcohol: "14%",
        year: "2022",
        detail: "Santenay",
      },
      {
        name: "Santenay 'Clos des Hâtes' (Rouge)",
        alcohol: "13.5%",
        year: "2021",
        detail: "Santenay",
      },
      {
        name: "Santenay Vieilles Vignes (Rouge)",
        alcohol: "13.5%",
        year: "2022",
        detail: "Santenay Vieilles Vignes",
      },
      {
        name: "Santenay 'En Charron' (Blanc)",
        alcohol: "13.5%",
        year: "2023",
        detail: "Santenay",
      },
      {
        name: "Santenay 'En Charron' (Blanc)",
        alcohol: "13.5%",
        year: "2022",
        detail: "Santenay",
      },
    ],
  },
  {
    name: "Benoît Sordet",
    wines: [
      {
        name: "Pommard 1er Cru 'La Refene'",
        alcohol: "13.5%",
        year: "2023",
        detail: "Pommard 1er Cru",
      },
      {
        name: "Pommard",
        alcohol: "13%",
        year: "2022",
        detail: "Pommard",
      },
      {
        name: "Pommard",
        alcohol: "12.5%",
        year: "2021",
        detail: "Pommard",
      },
      {
        name: "Saint Romain (Blanc)",
        alcohol: "13%",
        year: "2023",
        detail: "Saint-Romain",
      },
      {
        name: "Saint Romain (Blanc)",
        alcohol: "12.5%",
        year: "2022",
        detail: "Saint-Romain",
      },
    ],
  },
  {
    name: "Domaine Chofflet",
    wines: [
      {
        name: "Givry 1er Cru 'Les Galaffres' (Blanc)",
        alcohol: "13%",
        year: "2022",
        detail: "Givry 1er Cru",
      },
      {
        name: "Givry 1er Cru 'En Choué' (Rouge)",
        alcohol: "13.5%",
        year: "2022",
        detail: "Givry 1er Cru",
      },
      {
        name: "Givry 'La Pièce' (Blanc)",
        alcohol: "13%",
        year: "2022",
        detail: "Givry",
      },
      {
        name: "Givry Héritage (Rouge)",
        alcohol: "13%",
        year: "N/A",
        detail: "Givry",
      },
    ],
  },
  {
    name: "Domaine des Monts Luisants",
    wines: [
      {
        name: "Morey-Saint-Denis en Pierre Virant",
        alcohol: "13%",
        year: "2022",
        detail: "Morey-Saint-Denis",
      },
    ],
  },
  {
    name: "Domaine Dupré",
    wines: [
      {
        name: "Mâcon-Villages",
        alcohol: "12.5%",
        year: "2023",
        detail: "Mâcon-Villages",
      },
      {
        name: "Bourgogne Aligoté",
        alcohol: "12.5%",
        year: "2023",
        detail: "100% Aligoté",
      },
    ],
  },
  {
    name: "Domaine Gilles Morat",
    wines: [
      {
        name: "Pouilly-Fuissé 'Terroirs de Vergisson'",
        alcohol: "13%",
        year: "2023",
        detail: "Pouilly-Fuissé",
      },
    ],
  },
  {
    name: "Domaine Labry",
    wines: [
      {
        name: "Meursault 'Les Vireuils' (Blanc)",
        alcohol: "12.7%",
        year: "2017",
        detail: "Meursault",
      },
      {
        name: "Auxey-Duresses (Rouge)",
        alcohol: "13%",
        year: "2020",
        detail: "Auxey-Duresses",
      },
      {
        name: "Auxey-Duresses (Blanc)",
        alcohol: "13%",
        year: "2020",
        detail: "Auxey-Duresses",
      },
      {
        name: "Bourgogne Hautes-Côtes de Beaune (Rouge)",
        alcohol: "12.5%",
        year: "2022",
        detail: "Bourgogne Hautes-Côtes de Beaune",
      },
      {
        name: "Bourgogne Hautes-Côtes de Beaune (Rouge)",
        alcohol: "12.5%",
        year: "2021",
        detail: "Bourgogne Hautes-Côtes de Beaune",
      },
      {
        name: "Bourgogne Hautes-Côtes de Beaune (Blanc)",
        alcohol: "12.5%",
        year: "2022",
        detail: "Bourgogne Hautes-Côtes de Beaune",
      },
      {
        name: "Côtes de Beaune Villages (Rouge)",
        alcohol: "12.5%",
        year: "2022",
        detail: "Côtes de Beaune Villages",
      },
    ],
  },
  {
    name: "Domaine Lebreuil",
    wines: [
      {
        name: "Corton-Charlemagne Grand Cru",
        alcohol: "13%",
        year: "2023",
        detail:
          "100% Chardonnay · Natural malolactic fermentation in barrels · 35% aged in new barrels for 14–18 months",
      },
    ],
  },
  {
    name: "Domaine Thomas",
    wines: [
      {
        name: "Saint-Veran 'Les Charmones'",
        alcohol: "13%",
        year: "2023",
        detail: "Saint-Véran",
      },
    ],
  },
  {
    name: "Geantet-Pansiot",
    wines: [
      {
        name: "Charmes-Chambertin Grand Cru",
        alcohol: "14%",
        year: "2020",
        detail: "Charmes-Chambertin Grand Cru",
      },
      {
        name: "Gevrey-Chambertin 1er Cru 'Le Poissenot'",
        alcohol: "13.5%",
        year: "2022",
        detail: "Gevrey-Chambertin 1er Cru",
      },
      {
        name: "Gevrey-Chambertin 'Vieilles Vignes'",
        alcohol: "14%",
        year: "2021",
        detail: "Gevrey-Chambertin Vieilles Vignes",
      },
      {
        name: "Chambolle-Musigny 'Vieilles Vignes'",
        alcohol: "13.5%",
        year: "2020",
        detail: "Chambolle-Musigny Vieilles Vignes",
      },
      {
        name: "Marsannay 'Champs Perdrix'",
        alcohol: "13%",
        year: "2021",
        detail: "Marsannay",
      },
      {
        name: "Bourgogne Hautes-Côtes de Nuits (Rouge)",
        alcohol: "13%",
        year: "2022",
        detail: "Bourgogne Hautes-Côtes de Nuits",
      },
    ],
  },
  {
    name: "Notton",
    wines: [
      {
        name: "Chablis",
        alcohol: "12.5%",
        year: "2022",
        detail: "Chablis",
      },
    ],
  },
  {
    name: "Paul Thevenin",
    wines: [
      {
        name: "Gevrey-Chambertin",
        alcohol: "13%",
        year: "2018",
        detail: "Gevrey-Chambertin",
      },
    ],
  },
  {
    name: "Sébastien Dampt",
    wines: [
      {
        name: 'Chablis 1er Cru "Les Vaillons"',
        alcohol: "13%",
        year: "2023",
        detail: "Chablis 1er Cru",
      },
      {
        name: "Chablis",
        alcohol: "12.5%",
        year: "2023",
        detail: "Chablis",
      },
    ],
  },
  {
    name: "Vignerons de Bel Air",
    wines: [
      {
        name: "Coteaux Bourguignons Rouge",
        alcohol: "13%",
        year: "2022",
        detail: "100% Gamay",
      },
      {
        name: "Coteaux Bourguignons Blanc",
        alcohol: "13%",
        year: "2022",
        detail: "100% Chardonnay",
      },
      {
        name: "Bourgogne",
        alcohol: "12.5%",
        year: "2021",
        detail: "Bourgogne",
      },
      {
        name: "Mâcon-Villages",
        alcohol: "13%",
        year: "2022",
        detail: "Mâcon-Villages",
      },
      {
        name: "Le Rosé de Bel-Air",
        alcohol: "12.5%",
        year: "2023",
        detail: "Gamay Noir à Jus Blanc",
      },
    ],
  },
  {
    name: "Vignerons de Mancey",
    wines: [
      {
        name: "Crémant de Bourgogne Brut Réserve",
        alcohol: "12%",
        year: "N/V",
        detail: "40% Chardonnay, 40% Pinot Noir",
      },
    ],
  },
];

const wineCount = producers.reduce(
  (total, producer) => total + producer.wines.length,
  0
);

export default function BurgundyPage() {
  return (
    <main className="min-h-screen bg-[#F4F2EC] text-[#741C29]">
      {/* Top */}
      <section className="px-6 pt-3 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-5 md:grid-cols-[1fr_auto_1fr]">
          {/* Left */}
          <div className="flex justify-start">
            <Link
              href="/france"
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
                France
              </span>

              <span className="h-px w-8 bg-[#D4AF37]/60" />
            </div>

            <h1 className="mt-2 whitespace-nowrap font-philosopher text-3xl leading-tight tracking-tight text-[#741C29] sm:text-4xl lg:text-5xl">
              Burgundy
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
            The timeless soul of Burgundy
          </p>

          <p className="mx-auto mt-5 max-w-2xl font-old-standard text-base leading-7 text-[#6D625B] sm:text-lg">
            Discover our selection of wines from Burgundy, featuring refined
            Chardonnay and Pinot Noir from celebrated appellations including
            Chablis, Meursault, Pommard, Gevrey-Chambertin and
            Chassagne-Montrachet.
          </p>

          <div className="mx-auto mt-7 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#D4AF37]/60" />
            <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
            <span className="h-px w-16 bg-[#D4AF37]/60" />
          </div>
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
              Burgundy
            </p>
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">
        {/* <div className="mb-12 text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A] sm:text-4xl">
            From the Vineyards
          </p>

          <h2 className="mt-1 font-philosopher text-3xl text-[#741C29] sm:text-4xl lg:text-5xl">
            Wines from Burgundy
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-[#6D625B]">
            A curated selection from distinguished Burgundy producers and
            vineyards.
          </p>
        </div> */}

        <div className="space-y-10">
          {producers.map((producer) => (
            <section
              key={producer.name}
              className="overflow-hidden rounded-2xl border border-[#741C29]/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Producer Header */}
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

                        <p className="mt-1 max-w-3xl font-old-standard text-xs leading-5 text-[#B89B6A]">
                          {wine.detail}
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
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#741C29]/5 font-old-standard text-xs text-[#741C29]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="min-w-0">
                        <h4 className="font-philosopher text-xl leading-tight text-[#741C29]">
                          {wine.name}
                        </h4>

                        <p className="mt-1 font-old-standard text-xs leading-5 text-[#B89B6A]">
                          {wine.detail}
                        </p>
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

        {/* Footer Info */}
        <div className="mt-14 border-t border-[#741C29]/10 pt-8 text-center">
          <p className="font-great-vibes text-3xl text-[#B89B6A]">
            Burgundy, France
          </p>

          <p className="mt-2 font-old-standard text-sm text-[#6D625B]">
            {wineCount} wines from {producers.length} producers
          </p>
        </div>
      </section>
    </main>
  );
}
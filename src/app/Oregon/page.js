"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, Wine, Search, RefreshCw } from "lucide-react";


const wineRegions = [
  {
    id: 1,
    name: "EOLA-Amity Hills",
    country: "Oregon",
    style: "Redhawk Winery",
    image: "/Pinot Noir, Zenith Vineyard, EOLA-Amity Hills.webp",
    description:
      "Pinot Noir, Zenith Vineyard 2021 — 13.5% ABV.",
    grapes: ["Pinot Noir"],
  },

  {
    id: 2,
    name: "EOLA-Amity Hills",
    country: "Oregon",
    style: "Redhawk Winery",
    image: "/organ/Pinot Noir, Estate, EOLA-Amity Hills.webp",
    description:
      "Pinot Noir, Estate 2021 — 13.6% ABV. ",
    grapes: ["Pinot Noir"],
  },

  {
    id: 3,
    name: "Willamette Valley",
    country: "Oregon",
    style: "Redhawk Winery",
    image: "/organ/Pinot Noir, Willamette Valley.webp",
    description:
      "Pinot Noir 2023 — 14.8% ABV. ",
    grapes: ["Pinot Noir"],
  },

  {
    id: 4,
    name: "Willamette Valley",
    country: "Oregon",
    style: "Redhawk Winery",
    image: "/organ/Redhawk Red.webp",
    description:
      "Redhawk Red 2019 — 14% ABV.",
    grapes: ["Merlot", "Cabernet Sauvignon", "Barbera"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WineRegionsPage() {
  const [activeRegion, setActiveRegion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

const filteredRegions = wineRegions.filter((region) => {
  const term = searchTerm.toLowerCase().trim();

  if (!term) return true;

  const searchableText = [
    region.name,
    region.country,
    region.style,
    region.description,
    ...region.grapes,
  ]
    .join(" ")
    .toLowerCase();

  return searchableText.includes(term);
});
  return (
    <main className="min-h-screen bg-[#fbf9f6] text-[#241c1e] selection:bg-[#65002d] selection:text-white">
      {/* HERO SECTION - CENTERED */}
      <section className="relative overflow-hidden border-b border-[#e8dfdb] bg-gradient-to-b from-white via-[#fcfaf8] to-[#fbf9f6] py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[#65002d]/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#8a1c4a]/5 blur-3xl" />

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-12">
          <div className="flex max-w-3xl flex-col items-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#65002d]/15 bg-[#65002d]/5 px-4 py-1.5 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-[#65002d]" />
           <span className="text-[11px] font-philosopher tracking-[0.25em] text-[#65002d]">
  Exclusive Laurentia Wine Collection
</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-great-vibes text-[42px] font-light leading-[1.1] tracking-tight text-[#1c1517] sm:text-6xl md:text-7xl lg:text-8xl text-center"
            >
            Discover Oregon <br />
<span className="italic font-normal text-[#65002d]">
  Through Its Wines
</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-2xl text-center font-old-standard leading-relaxed text-[#6d6264] sm:text-lg"
            >
Explore the distinctive wines of Oregon. 
Discover Redhawk Winery&apos;s collection of carefully crafted Willamette Valley wines, 
featuring elegant Pinot Noir and the distinctive Redhawk Red blend of Merlot, Cabernet Sauvignon, and Barbera.
            </motion.p>
          </div>

          {/* STATS STRIP - CENTERED */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-[#ebdcd7] bg-white/70 p-2 font-philosopher shadow-xl shadow-[#65002d]/5 backdrop-blur-md sm:grid-cols-4"
>
  {[
 
  { val: "4", label: "Wines" },
  { val: "1", label: "Cellar" },
  { val: "2", label: "Wine Regions" },
  { val: "1", label: "Country" },

  ].map((stat, idx) => (
    <div
      key={idx}
      className="group rounded-xl border border-transparent p-5 text-center transition-all duration-300 hover:border-[#65002d]/10 hover:bg-white"
    >
      <p className="font-serif text-3xl font-medium text-[#65002d] transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
        {stat.val}
      </p>

      <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a7b7e]">
        {stat.label}
      </p>
    </div>
  ))}
</motion.div>
        </div>
      </section>

      {/* REGION SECTION */}
<section
  className="relative overflow-hidden"
  style={{
  backgroundImage:
  "url('https://cdn.bfldr.com/UTM69Z3S/at/4ng7jq2wc332t4r4hjjrk8w/dan-meyers-EYnLjmjCViM-unsplash-LOWRES.jpg?auto=webp&enable=upscale&fit=cover&format=pjpg&height=640&quality=60&width=960')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}
>
  {/* BACKGROUND OVERLAY */}
  <div className="absolute " />

  {/* EXTRA SOFT OVERLAY */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#faf8f5]/20 to-white/50" />

  {/* MAIN CONTENT */}
  <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">

{/* SECTION HEADER & SEARCH BAR */}
<div className="mb-14 flex flex-col items-center gap-6 text-center">

  <div>
    <span className="text-[18px] font-philosopher tracking-[0.3em] text-[#65002d]">
      Curated Terroirs
    </span>

    <h2 className="mt-2 font-great-vibes text-3xl text-[#21181a] sm:text-4xl md:text-5xl">
      Oregon Wine Collection
    </h2>

 <p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-white">
 Discover Redhawk Winery wines from Oregon&apos;s Willamette Valley,
  featuring elegant Pinot Noir from EOLA-Amity Hills and a distinctive
  Redhawk Red blend of Merlot, Cabernet Sauvignon, and Barbera.
</p>
  </div>

  {/* SEARCH BAR */}
  <div className="relative w-full max-w-md">
    <Search
      className="absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-black"
    />

    <input
      type="text"
      placeholder="Search by region, grape, or style..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full rounded-full border border-[#e0d6d3] bg-white/95 py-3.5 pl-11 pr-10 text-xs tracking-wide text-black shadow-lg shadow-[#65002d]/5 backdrop-blur-sm transition-all placeholder:text-[#9e9093] focus:border-[#65002d] focus:outline-none focus:ring-2 focus:ring-[#65002d]/20"
    />

    {searchTerm && (
      <button
        type="button"
        onClick={() => setSearchTerm("")}
        className="absolute right-3.5 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-[10px] text-[#8a7c7f] transition-colors hover:bg-[#f3ece9] hover:text-[#241c1e]"
      >
        ✕
      </button>
    )}
  </div>
</div>

    {/* CONTENT AREA */}
    {filteredRegions.length > 0 ? (

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
      >

        <AnimatePresence>

          {filteredRegions.map((region, index) => {

            const number = String(index + 1).padStart(2, "0");

            const isActive = activeRegion === index;

            return (

              <motion.article
                 key={region.id}
                variants={cardVariants}
                layout

                onMouseEnter={() => setActiveRegion(index)}
                onMouseLeave={() => setActiveRegion(null)}

                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e8dedb]/80 bg-white/95 p-6 shadow-lg shadow-[#3b202b]/5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-[#65002d]/40 hover:bg-white hover:shadow-2xl hover:shadow-[#65002d]/10"
              >

                {/* CARD GLOW */}

                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#65002d]/10 transition-all duration-500 blur-2xl ${
                    isActive
                      ? "scale-150 opacity-100"
                      : "scale-50 opacity-0"
                  }`}
                />

                {/* SMALL TOP LINE */}

                <div
                  className={`absolute left-0 top-0 h-1 bg-[#65002d] transition-all duration-500 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />

<div className="mb-5 flex h-52 w-full items-center justify-center overflow-hidden rounded-xl border border-[#eee4e1] bg-[#faf7f6]">
  <img
    src={region.image}
    alt={`${region.style} ${region.name}`}
    className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
  />
</div>

                {/* TOP HEADER */}

                <div>

                  <div className="flex items-start justify-between gap-3">

                    {/* NUMBER */}

                    <span className="font-serif text-4xl font-light text-[#d8cecb] transition-colors duration-300 group-hover:text-[#65002d]">
                      {number}
                    </span>

                    {/* STYLE */}

                    <span className="rounded-full border border-[#ebdcd8] bg-[#faf6f5] px-3 py-1 text-[12px] font-philosopher tracking-[0.15em] text-[#786a6d] transition-colors duration-300 group-hover:border-[#65002d]/20 group-hover:bg-[#65002d]/5 group-hover:text-[#65002d]">
                      {region.style}
                    </span>

                  </div>

                  {/* REGION NAME */}

                  <div className="mt-6">

                    <p className="flex items-center gap-1.5 text-[13px] font-philosopher tracking-[0.2em] text-[#65002d]">

                      <MapPin className="h-3 w-3" />

                      {region.country}

                    </p>

                    <h3 className="mt-1 font-philosopher text-2xl text-[#21191b] transition-colors duration-300 group-hover:text-[#65002d]">
                      {region.name}
                    </h3>

                  </div>

                  {/* DIVIDER */}

                  <div className="my-4 h-px w-full bg-gradient-to-r from-[#ebdcd8] via-[#e8dedb] to-transparent" />

                  {/* DESCRIPTION */}

                  <p className="text-md font-old-standard leading-relaxed text-[#6f6366]">
                    {region.description}
                  </p>

                </div>

                {/* CARD BOTTOM */}

                <div className="mt-6">

                  {/* SIGNATURE GRAPES */}

                  <div className="mb-4 rounded-xl border border-[#f3ece9] bg-[#fcfaf9]/90 p-3">
{/* 
                    <p className="mb-1.5 flex items-center gap-1 text-[11px] font-old-standard tracking-[0.18em] text-[#9b8f92]">

                      <Wine className="h-3 w-3 text-[#65002d]" />

                      Signature Grapes

                    </p> */}

                    <div className="flex flex-wrap gap-1">

                      {region.grapes.map((grape, idx) => (

                        <span
                          key={idx}
                          className="text-[15px] font-old-standard text-[#42373a] after:ml-1 after:text-[#c4b8bb] after:content-['•'] last:after:content-none"
                        >
                          {grape}
                        </span>

                      ))}

                    </div>

                  </div>

                  {/* ACTION */}

                  <div className="flex items-center justify-between border-t border-[#f0e7e4] pt-3">

                    <span className="text-[13px] font-old-standard tracking-[0.15em] text-[#8a7c7f]">
                      Explore Region
                    </span>

                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive
                          ? "rotate-45 border-[#65002d] bg-[#65002d] text-white shadow-md shadow-[#65002d]/20"
                          : "border-[#e0d5d2] text-[#65002d] group-hover:border-[#65002d]"
                      }`}
                    >

                      <ArrowUpRight className="h-4 w-4" />

                    </div>

                  </div>

                </div>

              </motion.article>

            );

          })}

        </AnimatePresence>

      </motion.div>

    ) : (

      /* NO RESULTS */

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="my-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#e3d7d3] bg-white/80 py-20 text-center shadow-xl backdrop-blur-md"
      >

        {/* SEARCH ICON */}

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#65002d]/5 text-[#65002d]">

          <Search className="h-8 w-8 opacity-60" />

        </div>

        {/* TITLE */}

        <h3 className="mt-6 font-serif text-2xl text-[#241c1e]">
          No Regions Found
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-2 max-w-sm text-xs leading-relaxed text-[#7c6f72]">

          We couldn&apos;t find any wine region matching{" "}

          <span className="font-semibold text-[#65002d]">
            &quot;{searchTerm}&quot;
          </span>

       Try searching for wines like Cabernet Sauvignon, Chardonnay, Riesling,
Pinot Noir, Gewürztraminer, or Vidal Blanc.

        </p>

        {/* RESET */}

        <button
          onClick={() => setSearchTerm("")}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#65002d] bg-[#65002d] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#8a1c4a] hover:shadow-lg"
        >

          <RefreshCw className="h-3.5 w-3.5" />

          Reset Search Filter

        </button>

      </motion.div>

    )}

  </div>
</section>

      {/* FOOTER BANNER */}
{/* PREMIUM FOOTER BANNER */}
<section className="relative isolate overflow-hidden border-t border-[#3a292e] bg-[#160f12] text-white">

  {/* Background Glow */}
  <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#65002d]/20 blur-3xl sm:h-96 sm:w-96" />

  <div className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#8a1c4a]/10 blur-3xl sm:h-96 sm:w-96" />

  {/* Subtle Center Glow */}
  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#65002d]/10 blur-[100px] sm:h-[420px] sm:w-[420px]" />

  {/* Content */}
  <div className="relative mx-auto max-w-5xl px-5 py-16 text-center sm:px-8 sm:py-20 md:py-24 lg:px-12 lg:py-28">

    {/* Eyebrow */}
    <div className="mb-6 flex items-center justify-center gap-3 sm:mb-8">
      <span className="h-px w-8 bg-[#65002d] sm:w-12" />

      <span className="font-philosopher text-[10px] uppercase tracking-[0.28em] text-[#c9aeb9] sm:text-xs sm:tracking-[0.35em]">
       The Art of Oregon Wine
      </span>

      <span className="h-px w-8 bg-[#65002d] sm:w-12" />
    </div>

    {/* Quote Mark */}
    <span className="block font-serif text-5xl leading-none text-[#65002d] sm:text-6xl md:text-7xl">
      “
    </span>

    {/* Main Quote */}
    <p className="mx-auto mt-3 max-w-4xl font-great-vibes text-3xl font-normal leading-[1.25] text-[#f8f1f3] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
      Wine is the story of a place,
      <br className="hidden sm:block" />
      expressed through the hands of its people.
    </p>

    {/* Divider */}
    <div className="mx-auto mt-8 flex items-center justify-center gap-3 sm:mt-10">
      <span className="h-px w-10 bg-[#65002d]/60 sm:w-16" />

      <span className="h-1.5 w-1.5 rotate-45 bg-[#65002d]" />

      <span className="h-px w-10 bg-[#65002d]/60 sm:w-16" />
    </div>

    {/* Bottom Text */}
    <p className="mt-7 font-philosopher text-[10px] font-medium uppercase tracking-[0.28em] text-[#a8999d] sm:mt-8 sm:text-xs sm:tracking-[0.4em]">
      Discover
      <span className="mx-2 text-[#65002d]">•</span>
      Taste
      <span className="mx-2 text-[#65002d]">•</span>
      Enjoy
    </p>

    {/* California Label */}
<p className="mt-4 font-old-standard text-xs tracking-wide text-[#716367] sm:text-sm">
  Laurentia • Ohio Wine Collection
</p>

  </div>
</section>
    </main>
  );
}
// "use client";

// import { useState } from "react";

// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowUpRight, Sparkles, MapPin, Wine, Search, RefreshCw } from "lucide-react";

// const wineRegions = [
//   {
//     name: "Trentino",
//     country: "Northern Italy",
//     description:
//       "Known for elegant mountain wines, fresh whites and sparkling wines with bright acidity.",
//     grapes: ["Chardonnay", "Pinot Noir", "Teroldego"],
//     style: "Mountain Wines",
//   },
//   {
//     name: "Friuli",
//     country: "Northern Italy",
//     description:
//       "A refined wine region famous for aromatic whites, mineral character and exceptional freshness.",
//     grapes: ["Pinot Grigio", "Friulano", "Sauvignon"],
//     style: "Elegant Whites",
//   },
//   {
//     name: "Lombardia",
//     country: "Northern Italy",
//     description:
//       "Home to Franciacorta and structured red wines, combining elegance with sophisticated winemaking.",
//     grapes: ["Chardonnay", "Pinot Noir", "Nebbiolo"],
//     style: "Premium & Sparkling",
//   },
//   {
//     name: "Veneto",
//     country: "Northern Italy",
//     description:
//       "One of Italy's most important wine regions, producing everything from Prosecco to rich Amarone.",
//     grapes: ["Glera", "Corvina", "Garganega"],
//     style: "Classic Italian",
//   },
//   {
//     name: "Piedmont",
//     country: "Northwestern Italy",
//     description:
//       "A prestigious region known for powerful Nebbiolo wines, Barolo and Barbaresco.",
//     grapes: ["Nebbiolo", "Barbera", "Dolcetto"],
//     style: "Prestige Reds",
//   },
//   {
//     name: "Emilia Romagna",
//     country: "Northern Italy",
//     description:
//       "A diverse region producing vibrant Lambrusco alongside rich reds and refreshing whites.",
//     grapes: ["Lambrusco", "Sangiovese", "Albana"],
//     style: "Food Friendly",
//   },
//   {
//     name: "Tuscany",
//     country: "Central Italy",
//     description:
//       "Famous throughout the world for elegant Sangiovese wines, rolling vineyards and historic estates.",
//     grapes: ["Sangiovese", "Cabernet", "Merlot"],
//     style: "Iconic Reds",
//   },
//   {
//     name: "Marche",
//     country: "Central Italy",
//     description:
//       "A coastal region producing crisp white wines and expressive reds with a distinctive Mediterranean character.",
//     grapes: ["Verdicchio", "Montepulciano", "Sangiovese"],
//     style: "Fresh & Coastal",
//   },
//   {
//     name: "Umbria",
//     country: "Central Italy",
//     description:
//       "A small inland region offering beautifully balanced whites and earthy, structured red wines.",
//     grapes: ["Grechetto", "Sangiovese", "Sagrantino"],
//     style: "Rustic Elegance",
//   },
//   {
//     name: "Lazio",
//     country: "Central Italy",
//     description:
//       "Known for fresh whites and traditional wines surrounding Rome, with volcanic soils adding character.",
//     grapes: ["Trebbiano", "Malvasia", "Cesanese"],
//     style: "Roman Heritage",
//   },
//   {
//     name: "Abruzzo",
//     country: "Central Italy",
//     description:
//       "A mountainous and coastal region best known for Montepulciano d'Abruzzo and fresh Pecorino.",
//     grapes: ["Montepulciano", "Pecorino", "Trebbiano"],
//     style: "Mountain & Coast",
//   },
//   {
//     name: "Molise",
//     country: "Southern Italy",
//     description:
//       "A lesser-known wine region producing distinctive local wines with an authentic Italian character.",
//     grapes: ["Tintilia", "Montepulciano", "Falanghina"],
//     style: "Hidden Gem",
//   },
//   {
//     name: "Campania",
//     country: "Southern Italy",
//     description:
//       "Ancient volcanic soils create expressive wines with depth, minerality and remarkable personality.",
//     grapes: ["Aglianico", "Fiano", "Greco"],
//     style: "Volcanic Wines",
//   },
//   {
//     name: "Puglia",
//     country: "Southern Italy",
//     description:
//       "Warm Mediterranean vineyards produce generous reds, rich Primitivo and distinctive Negroamaro.",
//     grapes: ["Primitivo", "Negroamaro", "Nero di Troia"],
//     style: "Bold & Rich",
//   },
//   {
//     name: "Basilicata",
//     country: "Southern Italy",
//     description:
//       "A rugged region famous for Aglianico del Vulture, grown on volcanic slopes.",
//     grapes: ["Aglianico", "Malvasia", "Sangiovese"],
//     style: "Volcanic Reds",
//   },
//   {
//     name: "Calabria",
//     country: "Southern Italy",
//     description:
//       "A Mediterranean wine region producing characterful reds and whites from indigenous grapes.",
//     grapes: ["Gaglioppo", "Greco", "Magliocco"],
//     style: "Mediterranean",
//   },
//   {
//     name: "Sicily",
//     country: "Italian Island",
//     description:
//       "Italy's largest island offers diverse wines shaped by sunshine, sea and volcanic Mount Etna soils.",
//     grapes: ["Nero d'Avola", "Grillo", "Nerello Mascalese"],
//     style: "Island Wines",
//   },
//   {
//     name: "Sardinia",
//     country: "Italian Island",
//     description:
//       "An island with a strong winemaking identity, known for aromatic whites and distinctive Mediterranean reds.",
//     grapes: ["Cannonau", "Vermentino", "Carignano"],
//     style: "Island Heritage",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.08,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// };

// export default function WineRegionsPage() {
//   const [activeRegion, setActiveRegion] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredRegions = wineRegions.filter((region) => {
//     const term = searchTerm.toLowerCase().trim();
//     if (!term) return true;

//     return (
//       region.name.toLowerCase().includes(term) ||
//       region.style.toLowerCase().includes(term) ||
//       region.country.toLowerCase().includes(term) ||
//       region.grapes.some((grape) => grape.toLowerCase().includes(term))
//     );
//   });

//   return (
//     <main className="min-h-screen bg-[#fbf9f6] text-[#241c1e] selection:bg-[#65002d] selection:text-white">
//       {/* HERO SECTION - CENTERED */}
//       <section className="relative overflow-hidden border-b border-[#e8dfdb] bg-gradient-to-b from-white via-[#fcfaf8] to-[#fbf9f6] py-20 lg:py-28">
//         <div className="pointer-events-none absolute -right-20 -top-20 h-[500px] w-[500px] rounded-full bg-[#65002d]/5 blur-3xl" />
//         <div className="pointer-events-none absolute -left-20 bottom-0 h-[400px] w-[400px] rounded-full bg-[#8a1c4a]/5 blur-3xl" />

//         <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-12">
//           <div className="flex max-w-3xl flex-col items-center">
//             {/* Badge */}
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#65002d]/15 bg-[#65002d]/5 px-4 py-1.5 backdrop-blur-md"
//             >
//               <Sparkles className="h-3.5 w-3.5 text-[#65002d]" />
//               <span className="text-[11px]  font-philosopher tracking-[0.25em] text-[#65002d]">
//                 Exclusive Italian Wine Collection
//               </span>
//             </motion.div>

//             {/* Title */}
//             <motion.h1
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="font-great-vibes  text-xl md:text-2xl font-light leading-[1.1] tracking-tight text-[#1c1517] sm:text-6xl md:text-7xl lg:text-8xl text-center"
//             >
//               Discover Italy <br />
//               <span className="italic font-normal text-[#65002d]">
//                 Through Its Wines
//               </span>
//             </motion.h1>

//             {/* Subtitle */}
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.2 }}
//               className="mt-6 max-w-2xl text-center font-old-standard leading-relaxed text-[#6d6264] sm:text-lg"
//             >
//               Explore the distinctive wine regions of Italy. Every terroir carries centuries of tradition, unique microclimates, and world-renowned grape varieties.
//             </motion.p>
//           </div>

//           {/* STATS STRIP - CENTERED */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="mt-16 grid w-full font-philosopher max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-[#ebdcd7] bg-white/70 p-2 shadow-xl shadow-[#65002d]/5 backdrop-blur-md sm:grid-cols-4"
//           >
//             {[
//               { val: "18", label: "Regions" },
//               { val: "20+", label: "Grape Varieties" },
//               { val: "1", label: "Heritage Country" },
//               { val: "∞", label: "Unique Terroirs" },
//             ].map((stat, idx) => (
//               <div
//                 key={idx}
//                 className="group rounded-xl border border-transparent p-5 text-center transition-all duration-300 hover:border-[#65002d]/10 hover:bg-white"
//               >
//                 <p className="font-serif text-3xl font-medium text-[#65002d] transition-transform duration-300 group-hover:scale-110 sm:text-4xl">
//                   {stat.val}
//                 </p>
//                 <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#8a7b7e]">
//                   {stat.label}
//                 </p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

//       {/* REGION SECTION */}
// <section
//   className="relative overflow-hidden"
//   style={{
//     backgroundImage: "url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundAttachment: "fixed",
//   }}
// >
//   {/* BACKGROUND OVERLAY */}
//   <div className="absolute " />

//   {/* EXTRA SOFT OVERLAY */}
//   <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#faf8f5]/20 to-white/50" />

//   {/* MAIN CONTENT */}
//   <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">

//     {/* SECTION HEADER & SEARCH BAR */}
//     <div className="mb-14 flex flex-col items-center gap-6 text-center">

//       <div>
//         <span className="text-[18px] font-philosopher tracking-[0.3em] text-[#65002d]">
//           Curated Terroirs
//         </span>

//         <h2 className="mt-2 font-great-vibes text-3xl text-[#21181a] sm:text-4xl md:text-5xl">
//           Italian Wine Regions
//         </h2>

//         <p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-[#6f6366]">
//           Discover the unique character, grapes and traditions behind
//           Italy&apos;s most remarkable wine regions.
//         </p>
//       </div>

//       {/* SEARCH BAR */}
// <div className="relative w-full max-w-md">
//   <Search
//     className="absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-black"
//   />

//   <input
//     type="text"
//     placeholder="Search by region, grape, or style..."
//     value={searchTerm}
//     onChange={(e) => setSearchTerm(e.target.value)}
//     className="w-full rounded-full border border-[#e0d6d3] bg-white/95 py-3.5 pl-11 pr-10 text-xs tracking-wide text-black shadow-lg shadow-[#65002d]/5 backdrop-blur-sm transition-all placeholder:text-[#9e9093] focus:border-[#65002d] focus:outline-none focus:ring-2 focus:ring-[#65002d]/20"
//   />

//   {searchTerm && (
//     <button
//       type="button"
//       onClick={() => setSearchTerm("")}
//       className="absolute right-3.5 top-1/2 z-10 -translate-y-1/2 rounded-full p-1 text-[10px] text-[#8a7c7f] transition-colors hover:bg-[#f3ece9] hover:text-[#241c1e]"
//     >
//       ✕
//     </button>
//   )}
// </div>
//     </div>

//     {/* CONTENT AREA */}
//     {filteredRegions.length > 0 ? (

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//       >

//         <AnimatePresence>

//           {filteredRegions.map((region, index) => {

//             const number = String(index + 1).padStart(2, "0");

//             const isActive = activeRegion === index;

//             return (

//               <motion.article
//                 key={region.name}
//                 variants={cardVariants}
//                 layout

//                 onMouseEnter={() => setActiveRegion(index)}
//                 onMouseLeave={() => setActiveRegion(null)}

//                 className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#e8dedb]/80 bg-white/95 p-6 shadow-lg shadow-[#3b202b]/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-[#65002d]/40 hover:bg-white hover:shadow-2xl hover:shadow-[#65002d]/10"
//               >

//                 {/* CARD GLOW */}

//                 <div
//                   className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#65002d]/10 transition-all duration-500 blur-2xl ${
//                     isActive
//                       ? "scale-150 opacity-100"
//                       : "scale-50 opacity-0"
//                   }`}
//                 />

//                 {/* SMALL TOP LINE */}

//                 <div
//                   className={`absolute left-0 top-0 h-1 bg-[#65002d] transition-all duration-500 ${
//                     isActive ? "w-full" : "w-0"
//                   }`}
//                 />

//                 {/* TOP HEADER */}

//                 <div>

//                   <div className="flex items-start justify-between gap-3">

//                     {/* NUMBER */}

//                     <span className="font-serif text-4xl font-light text-[#d8cecb] transition-colors duration-300 group-hover:text-[#65002d]">
//                       {number}
//                     </span>

//                     {/* STYLE */}

//                     <span className="rounded-full border border-[#ebdcd8] bg-[#faf6f5] px-3 py-1 text-[12px] font-philosopher tracking-[0.15em] text-[#786a6d] transition-colors duration-300 group-hover:border-[#65002d]/20 group-hover:bg-[#65002d]/5 group-hover:text-[#65002d]">
//                       {region.style}
//                     </span>

//                   </div>

//                   {/* REGION NAME */}

//                   <div className="mt-6">

//                     <p className="flex items-center gap-1.5 text-[13px] font-philosopher tracking-[0.2em] text-[#65002d]">

//                       <MapPin className="h-3 w-3" />

//                       {region.country}

//                     </p>

//                     <h3 className="mt-1 font-philosopher text-2xl text-[#21191b] transition-colors duration-300 group-hover:text-[#65002d]">
//                       {region.name}
//                     </h3>

//                   </div>

//                   {/* DIVIDER */}

//                   <div className="my-4 h-px w-full bg-gradient-to-r from-[#ebdcd8] via-[#e8dedb] to-transparent" />

//                   {/* DESCRIPTION */}

//                   <p className="text-md font-old-standard leading-relaxed text-[#6f6366]">
//                     {region.description}
//                   </p>

//                 </div>

//                 {/* CARD BOTTOM */}

//                 <div className="mt-6">

//                   {/* SIGNATURE GRAPES */}

//                   <div className="mb-4 rounded-xl border border-[#f3ece9] bg-[#fcfaf9]/90 p-3">

//                     <p className="mb-1.5 flex items-center gap-1 text-[11px] font-old-standard tracking-[0.18em] text-[#9b8f92]">

//                       <Wine className="h-3 w-3 text-[#65002d]" />

//                       Signature Grapes

//                     </p>

//                     <div className="flex flex-wrap gap-1">

//                       {region.grapes.map((grape, idx) => (

//                         <span
//                           key={idx}
//                           className="text-[10px] font-old-standard text-[#42373a] after:ml-1 after:text-[#c4b8bb] after:content-['•'] last:after:content-none"
//                         >
//                           {grape}
//                         </span>

//                       ))}

//                     </div>

//                   </div>

//                   {/* ACTION */}

//                   <div className="flex items-center justify-between border-t border-[#f0e7e4] pt-3">

//                     <span className="text-[13px] font-old-standard tracking-[0.15em] text-[#8a7c7f]">
//                       Explore Region
//                     </span>

//                     <div
//                       className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
//                         isActive
//                           ? "rotate-45 border-[#65002d] bg-[#65002d] text-white shadow-md shadow-[#65002d]/20"
//                           : "border-[#e0d5d2] text-[#65002d] group-hover:border-[#65002d]"
//                       }`}
//                     >

//                       <ArrowUpRight className="h-4 w-4" />

//                     </div>

//                   </div>

//                 </div>

//               </motion.article>

//             );

//           })}

//         </AnimatePresence>

//       </motion.div>

//     ) : (

//       /* NO RESULTS */

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="my-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-[#e3d7d3] bg-white/80 py-20 text-center shadow-xl backdrop-blur-md"
//       >

//         {/* SEARCH ICON */}

//         <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#65002d]/5 text-[#65002d]">

//           <Search className="h-8 w-8 opacity-60" />

//         </div>

//         {/* TITLE */}

//         <h3 className="mt-6 font-serif text-2xl text-[#241c1e]">
//           No Regions Found
//         </h3>

//         {/* DESCRIPTION */}

//         <p className="mt-2 max-w-sm text-xs leading-relaxed text-[#7c6f72]">

//           We couldn&apos;t find any wine region matching{" "}

//           <span className="font-semibold text-[#65002d]">
//             &quot;{searchTerm}&quot;
//           </span>

//           . Try searching for grape varieties like Nebbiolo or Sangiovese.

//         </p>

//         {/* RESET */}

//         <button
//           onClick={() => setSearchTerm("")}
//           className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#65002d] bg-[#65002d] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:bg-[#8a1c4a] hover:shadow-lg"
//         >

//           <RefreshCw className="h-3.5 w-3.5" />

//           Reset Search Filter

//         </button>

//       </motion.div>

//     )}

//   </div>
// </section>

//       {/* FOOTER BANNER */}
//       <section className="relative overflow-hidden bg-[#1c1517] text-white">
//         <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#65002d]/20 blur-3xl" />

//         <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
//           <span className="font-serif text-5xl text-[#65002d]">“</span>
//           <p className="mt-2 font-serif text-2xl font-light leading-relaxed sm:text-3xl lg:text-4xl">
//             Wine is the story of a place, expressed through the hands of its people.
//           </p>
//           <div className="mx-auto mt-8 h-px w-16 bg-[#65002d]" />
//           <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.3em] text-[#a8999d]">
//             Discover • Taste • Enjoy
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }












"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, MapPin, Wine, Search, RefreshCw } from "lucide-react";


// const wineRegions = [
//   {
//     name: "Barolo Coste & Bricco",
//     country: "Piedmont, Italy",
//     image: "/Barolo Coste & Bricco, DOCG.webp",
//     description:
//       "A prestigious DOCG Barolo from Ascheri, offering depth, structure and the distinctive character of Piedmont's Nebbiolo vineyards.",
//     grapes: ["Nebbiolo"],
//     style: "Barolo DOCG",
//     winery: "Ascheri",
//     year: "2019",
//     abv: "14.5%",
   
//   },
//   {
//     name: "Barolo Sorano",
//     country: "Piedmont, Italy",
//     image: "/Barolo Sorano, DOCG (1).webp",
//     description:
//       "An elegant DOCG Barolo showcasing the refined structure and expressive character associated with Piedmont's finest Nebbiolo wines.",
//     grapes: ["Nebbiolo"],
//     style: "Barolo DOCG",
//     winery: "Ascheri",
//     year: "2020",
//     abv: "14.5%",
 
//   },
//   {
//     name: "Barolo Pisapola",
//     country: "Piedmont, Italy",
//     image: "/Barolo Pisapola, DOCG.webp",
//     description:
//       "A beautifully structured 2020 Barolo DOCG with the classic elegance, complexity and age-worthy character of Nebbiolo.",
//     grapes: ["Nebbiolo"],
//     style: "Barolo DOCG",
//     winery: "Ascheri",
//     year: "2020",
//     abv: "14.5%",

//   },
//   {
//     name: "Barolo",
//     country: "Piedmont, Italy",
//     image: "/Barolo, DOCG.webp",
//     description:
//       "A classic DOCG Barolo expressing the traditional Piedmontese character of Nebbiolo with balance, structure and depth.",
//     grapes: ["Nebbiolo"],
//     style: "Barolo DOCG",
//     winery: "Ascheri",
//     year: "2021",
//     abv: "14.5%",

//   },
//   {
//     name: "Barbera Langhe",
//     country: "Piedmont, Italy",
//     image: "/Barbera Langhe.webp",
//     description:
//       "A vibrant Langhe Barbera with fresh acidity, generous fruit character and the approachable style that defines this Piedmont classic.",
//     grapes: ["Barbera"],
//     style: "Langhe Red",
//     winery: "Ascheri",
//     year: "2023",
//     abv: "14.5%",

//   },
//   {
//     name: "Barbera d'Alba",
//     country: "Piedmont, Italy",
//     image: "/Barbera d'Alba, DOC.webp",
//     description:
//       "A traditional DOC Barbera d'Alba offering bright fruit, balanced acidity and a refined expression of Piedmont's Barbera grape.",
//     grapes: ["Barbera"],
//     style: "Barbera DOC",
//     winery: "Ascheri",
//     year: "2018",
//     abv: "14%",

//   },
//   {
//     name: "Barbera d'Alba",
//     country: "Piedmont, Italy",
//     image: "/Barbera d'Alba, DOC 2.webp",
//     description:
//       "A mature 2017 Barbera d'Alba DOC showcasing the rich fruit profile and lively acidity characteristic of Piedmont.",
//     grapes: ["Barbera"],
//     style: "Barbera DOC",
//     winery: "Ascheri",
//     year: "2017",
//     abv: "14.5%",
//   },
//   {
//     name: "Dolcetto Langhe",
//     country: "Piedmont, Italy",
//     image: "/Dolcetto Langhe (1).webp",
//     description:
//       "A fresh and approachable Langhe Dolcetto with expressive fruit character and the easy-drinking style of this traditional Piedmont grape.",
//     grapes: ["Dolcetto"],
//     style: "Langhe Red",
//     winery: "Ascheri",
//     year: "2024",
//     abv: "13%",

//   },
//   {
//     name: "Gavi del Comune di Gavi",
//     country: "Piedmont, Italy",
//     image: "/Gavi del commnue di Gavi, DOCG.webp",
//     description:
//       "A refreshing DOCG Gavi made from Cortese, known for its crisp acidity, delicate aromas and elegant mineral character.",
//     grapes: ["Cortese"],
//     style: "Gavi DOCG",
//     winery: "Ascheri",
//     year: "2024",
//     abv: "12.5%",

//   },
//   {
//     name: "Arneis",
//     country: "Piedmont, Italy",
//     image: "/Arneis, DOC.webp",
//     description:
//       "A graceful Piedmontese white wine with fresh fruit, floral notes and a beautifully balanced mineral finish.",
//     grapes: ["Arneis"],
//     style: "White Wine",
//     winery: "Ascheri",
//     year: "2024",
//     abv: "13%",

//   },
//   {
//     name: "Moscato d'Asti",
//     country: "Piedmont, Italy",
//     image: "/Moscato d'Asti.webp",
//     description:
//       "A lightly sparkling DOCG Moscato d'Asti with aromatic fruit, floral character and refreshing sweetness.",
//     grapes: ["Moscato"],
//     style: "Moscato DOCG",
//     winery: "Carlo & Sylvia Soc. Agr.",
//     year: "2024",
//     abv: "5%",

//   },
//   {
//     name: "Chardonnay",
//     country: "Piedmont, Italy",
//     image: "/Chardonnay, DOC.webp",
//     description:
//       "A fresh and elegant Piedmont Chardonnay offering clean fruit character, balanced acidity and a refined finish.",
//     grapes: ["Chardonnay"],
//     style: "Italian White",
//     winery: "Carlo & Sylvia Soc. Agr.",
//     year: "2024",
//     abv: "12.5%",

//   },
// ];



const wineRegions = [
  {
    name: "Barolo Coste & Bricco",
    country: "Piedmont, Italy",
    image: "/Barolo Coste & Bricco, DOCG.webp",
    description:
      "Ascheri Barolo Coste & Bricco 2019 — 14.5% ABV. A prestigious DOCG Barolo offering depth, structure and the distinctive character of Piedmont's Nebbiolo vineyards.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
  },

  {
    name: "Barolo Sorano",
    country: "Piedmont, Italy",
    image: "/Barolo Sorano, DOCG (1).webp",
    description:
      "Ascheri Barolo Sorano 2020 — 14.5% ABV. An elegant DOCG Barolo showcasing refined structure and the expressive character associated with Piedmont's finest Nebbiolo wines.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
  },

  {
    name: "Barolo Pisapola",
    country: "Piedmont, Italy",
    image: "/Barolo Pisapola, DOCG.webp",
    description:
      "Ascheri Barolo Pisapola 2020 — 14.5% ABV. A beautifully structured DOCG Barolo with classic elegance, complexity and the age-worthy character of Nebbiolo.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
  },

  {
    name: "Barolo",
    country: "Piedmont, Italy",
    image: "/Barolo, DOCG.webp",
    description:
      "Ascheri Barolo 2021 — 14.5% ABV. A classic DOCG Barolo expressing the traditional Piedmontese character of Nebbiolo with balance, structure and depth.",
    grapes: ["Nebbiolo"],
    style: "Barolo DOCG",
  },

  {
    name: "Barbera Langhe",
    country: "Piedmont, Italy",
    image: "/Barbera Langhe.webp",
    description:
      "Ascheri Barbera Langhe 2023 — 14.5% ABV. A vibrant Langhe Barbera with fresh acidity, generous fruit character and the approachable style of this Piedmont classic.",
    grapes: ["Barbera"],
    style: "Langhe Red",
  },

  {
    name: "Barbera d'Alba",
    country: "Piedmont, Italy",
    image: "/Barbera d'Alba, DOC.webp",
    description:
      "Ascheri Barbera d'Alba 2018 — 14% ABV. A traditional DOC Barbera d'Alba offering bright fruit, balanced acidity and a refined expression of Piedmont's Barbera grape.",
    grapes: ["Barbera"],
    style: "Barbera DOC",
  },

  {
    name: "Barbera d'Alba",
    country: "Piedmont, Italy",
    image: "/Barbera d'Alba, DOC 2.webp",
    description:
      "Ascheri Barbera d'Alba 2017 — 14.5% ABV. A mature Barbera d'Alba DOC showcasing rich fruit character and the lively acidity characteristic of Piedmont.",
    grapes: ["Barbera"],
    style: "Barbera DOC",
  },

  {
    name: "Dolcetto Langhe",
    country: "Piedmont, Italy",
    image: "/Dolcetto Langhe (1).webp",
    description:
      "Ascheri Dolcetto Langhe 2024 — 13% ABV. A fresh and approachable Langhe Dolcetto with expressive fruit character and the easy-drinking style of this traditional Piedmont grape.",
    grapes: ["Dolcetto"],
    style: "Langhe Red",
  },

  {
    name: "Gavi del Comune di Gavi",
    country: "Piedmont, Italy",
    image: "/Gavi del commnue di Gavi, DOCG.webp",
    description:
      "Ascheri Gavi del Comune di Gavi 2024 — 12.5% ABV. A refreshing DOCG Gavi made from Cortese, known for crisp acidity, delicate aromas and elegant mineral character.",
    grapes: ["Cortese"],
    style: "Gavi DOCG",
  },

  {
    name: "Arneis",
    country: "Piedmont, Italy",
    image: "/Arneis, DOC.webp",
    description:
      "Ascheri Arneis 2024 — 13% ABV. A graceful Piedmontese white wine with fresh fruit, floral notes and a beautifully balanced mineral finish.",
    grapes: ["Arneis"],
    style: "White Wine",
  },

  {
    name: "Moscato d'Asti",
    country: "Piedmont, Italy",
    image: "/Moscato d'Asti.webp",
    description:
      "Carlo & Sylvia Soc. Agr. Moscato d'Asti 2024 — 5% ABV. A lightly sparkling DOCG Moscato d'Asti with aromatic fruit, floral character and refreshing sweetness.",
    grapes: ["Moscato"],
    style: "Moscato DOCG",
  },

  {
    name: "Chardonnay",
    country: "Piedmont, Italy",
    image: "/Chardonnay, DOC.webp",
    description:
      "Carlo & Sylvia Soc. Agr. Chardonnay 2024 — 12.5% ABV. A fresh and elegant Piedmont Chardonnay offering clean fruit character, balanced acidity and a refined finish.",
    grapes: ["Chardonnay"],
    style: "Italian White",
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
            Discover Italy <br />
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
Explore the distinctive wines of Italy.

Discover a curated collection of carefully crafted Italian wines,
featuring prestigious Barolo, expressive Barbera, elegant Arneis,
refreshing Gavi, and classic Moscato d&apos;Asti from the renowned Piedmont region.
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
    { val: "12", label: "Wines" },
    { val: "2", label: "Wine Houses" },
    { val: "1", label: "Wine Region" },
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
  "url('https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85')",
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
      Italy Wine Collection
    </h2>

<p className="mx-auto mt-4 max-w-xl font-old-standard text-sm leading-6 text-white">
  Discover exceptional Italian wines from Piedmont&apos;s renowned vineyards,
  featuring prestigious Barolo DOCG, expressive Barbera, elegant Arneis,
  refreshing Gavi, and classic Moscato d&apos;Asti.
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

                    <p className="mb-1.5 flex items-center gap-1 text-[11px] font-old-standard tracking-[0.18em] text-[#9b8f92]">

                      <Wine className="h-3 w-3 text-[#65002d]" />

                      Signature Grapes

                    </p>

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
       The Art of Itlay Wine
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







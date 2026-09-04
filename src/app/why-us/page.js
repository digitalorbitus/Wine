


// import React from 'react';
// import Image from 'next/image';

// export default function WineHeroSection() {
//   return (
//     <section className="relative w-full min-h-screen bg-[#0d0907] text-[#e8ded1] flex items-center overflow-hidden py-12 px-6 sm:px-12 lg:px-20">
//       {/* Background World Map Overlay */}
//       <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
//         <Image
//           src="/world-map.png" // Apno Map Asset / Background Image Source
//           alt="World Map Background"
//           fill
//           className="object-cover object-center"
//           priority
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
//         {/* Left Side Content Column */}
//         <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
          
//           {/* Subtitle / Brand Tagline */}
//           <div className="flex items-center space-x-3">
//             <span className="text-[#c5a059] text-xl">🍇</span>
//             <p className="text-xs sm:text-sm tracking-[0.25em] text-[#c5a059] uppercase font-semibold">
//               GLOBAL WINE SOURCING &amp; DISTRIBUTION
//             </p>
//           </div>

//           {/* Main Hero Headline */}
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extralight leading-tight text-white tracking-wide">
//             Wines of the World, <br className="hidden sm:inline" />
//             <span className="italic font-normal text-[#e3c287]">Delivered to </span>
//             <span className="text-[#e3c287]">America</span>
//           </h1>

//           {/* Divider Line */}
//           <div className="w-16 h-[1px] bg-[#c5a059]/50 my-2"></div>

//           {/* Description Paragraph */}
//           <p className="text-sm sm:text-base lg:text-lg text-[#bcaaa4] max-w-xl font-light leading-relaxed">
//             Exceptional wines sourced from distinguished regions across the globe and brought to the U.S. market.
//           </p>

//           {/* Wine Origin Regions List */}
//           <div className="pt-4 text-xs sm:text-sm tracking-widest text-[#a8927a] uppercase leading-relaxed font-medium">
//             ITALY • FRANCE • SPAIN • PORTUGAL • GERMANY • ARGENTINA <br />
//             NEW ZEALAND • CALIFORNIA • OREGON • OHIO
//           </div>
//         </div>

//         {/* Right Side Bottle & Glass Column */}
//         <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
//           <div className="relative w-[280px] sm:w-[350px] lg:w-[420px] aspect-[4/5]">
//             <Image
//               src="/wine-bottle-glass.png" // Wine Bottle and Glass cutout image
//               alt="Premium Wine Bottle and Glass"
//               fill
//               className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
//               priority
//             />
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WineLoader from "../../component/WineLoader";

// Luxury Icon Components (SVG)
const TrophyIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

const HandPickedIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const GuidanceIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const CaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const BusinessIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const PartnershipIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const reasons = [
  {
    icon: TrophyIcon,
    title: "26 Years of Industry Experience",
    description: "With 26 years in the wine business, we bring extensive experience and knowledge to every customer relationship.",
  },
  {
    icon: HandPickedIcon,
    title: "Handpicked Selections",
    description: "Our portfolio is carefully selected with an emphasis on quality, regional character, and distinctive producers.",
  },
  {
    icon: GlobeIcon,
    title: "European Wine Expertise",
    description: "Our portfolio places a strong emphasis on European wines, particularly regional producers from Italy and France.",
  },
  {
    icon: GuidanceIcon,
    title: "Personal Guidance",
    description: "Have a question about a producer, region, grape, or wine style? Our team is available to provide direct guidance.",
  },
  {
    icon: CaseIcon,
    title: "Curated Cases",
    description: "Our curated mixed cases provide businesses with an opportunity to explore multiple wines and regional styles.",
  },
  {
    icon: BusinessIcon,
    title: "Business-Focused Service",
    description: "We understand that restaurants, retailers, hotels, and bars have different needs. Our goal is to help you find the right fit.",
  },
  {
    icon: PartnershipIcon,
    title: "Long-Term Relationships",
    description: "We believe the best partnerships are built over time through communication, trust, and dependable service.",
  },
];

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function WhyChooseUs() {
    const [loading, setLoading] = useState(true);
    
           useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 4000);
    
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) {
        return <WineLoader />;
      }
  return (
    <main className="bg-[#120D0B] text-[#F3EFE6] min-h-screen overflow-x-hidden selection:bg-[#8C2332] selection:text-white font-sans">
      
      {/* ================= HERO HEADER ================= */}
      <section className="relative py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 overflow-hidden">
        
        {/* Background Radial Glow Effects */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#8C2332]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1300px] mx-auto">
          
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-center max-w-3xl mx-auto">
            <span className="inline-block py-1 px-4 font-philosopher rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] mb-6">
              Why Partner With CIAO DANIEL’S?
            </span>
            
            <h1 className="font-philosopher text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              More Than a Supplier. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2C792] via-[#C5A059] to-[#997334]">
                Your Strategic Wine Partner.
              </span>
            </h1>

            <p className="mt-6 text-sm sm:text-base md:text-lg text-[#A39990] leading-relaxed">
              Choosing a wine supplier is about finding someone who understands your business, your menu, and your clientele to build a tailored wine program.
            </p>
          </motion.div>

          {/* ================= MARKET-LEVEL CARDS GRID ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 p-8 hover:border-[#C5A059]/50 hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
                >
                  {/* Subtle Card Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-xl bg-[#8C2332]/20 border border-[#8C2332]/40 text-[#E2C792] group-hover:bg-[#8C2332] group-hover:text-white transition-colors duration-300">
                        <Icon />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#A39990] group-hover:text-[#C5A059] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-philosopher text-xl sm:text-2xl font-bold text-white group-hover:text-[#E2C792] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-[#A39990] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Link Indicator */}
                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                    <span>Explore Benefit</span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>

      {/* ================= BOTTOM HIGH-CONVERSION BANNER ================= */}
      <section className="relative py-20 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div className="max-w-[1300px] mx-auto rounded-3xl bg-gradient-to-r from-[#211215] via-[#8C2332]/40 to-[#211215] border border-[#8C2332]/50 p-8 sm:p-14 lg:p-16 relative overflow-hidden text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute -left-20 -top-20 w-80 h-80 bg-[#8C2332] rounded-full blur-[100px] opacity-40 pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <h2 className="font-philosopher text-2xl sm:text-4xl font-bold text-white leading-tight">
              Ready to elevate your wine portfolio?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#D4C3B5]">
              Get in touch with our team to discuss customized selections, pricing, and curated cases for your business.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/portfolio"
                className="block text-center bg-gradient-to-r from-[#C5A059] to-[#997334] text-[#120D0B] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-lg hover:brightness-110 transition-all"
              >
                Browse Selections
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="block text-center border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-white/10 transition-all"
              >
                Contact Sales
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

    </main>
  );
}
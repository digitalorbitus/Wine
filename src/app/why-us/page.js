

// "use client";

// import Image from "next/image";

// const whyUsData = [
//   {
//     id: 1,
//     title: "Expert Team",
//     desc: "Our experienced professionals deliver smart and reliable solutions tailored to your goals.",
//     icon: (
//       <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor">
//         <rect x="8" y="14" width="32" height="24" rx="3" strokeWidth="2.5" />
//         <circle cx="18" cy="24" r="5" strokeWidth="2.5" />
//         <path d="M12 34c2-5 10-5 12 0" strokeWidth="2.5" strokeLinecap="round" />
//         <line x1="28" y1="22" x2="36" y2="22" strokeWidth="2.5" strokeLinecap="round" />
//         <line x1="28" y1="28" x2="36" y2="28" strokeWidth="2.5" strokeLinecap="round" />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     title: "Quality Service",
//     desc: "We focus on uncompromised quality, accuracy, and total customer satisfaction.",
//     icon: (
//       <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor">
//         <rect x="10" y="8" width="28" height="32" rx="3" strokeWidth="2.5" />
//         <path d="M18 24l5 5 9-11" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
//         <line x1="16" y1="15" x2="32" y2="15" strokeWidth="2.5" />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     title: "Fast Support",
//     desc: "Quick response times and dedicated priority support whenever you need assistance.",
//     icon: (
//       <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor">
//         <rect x="9" y="12" width="30" height="24" rx="4" strokeWidth="2.5" />
//         <path d="M16 24h16M16 30h10" strokeWidth="2.5" strokeLinecap="round" />
//         <circle cx="33" cy="30" r="5" strokeWidth="2.5" />
//       </svg>
//     ),
//   },
//   {
//     id: 4,
//     title: "Trusted Results",
//     desc: "We build long-term value and sustainable growth with proven data-driven outcomes.",
//     icon: (
//       <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" stroke="currentColor">
//         <rect x="12" y="10" width="24" height="30" rx="3" strokeWidth="2.5" />
//         <path d="M18 30l5-6 4 4 7-9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
//         <line x1="18" y1="16" x2="30" y2="16" strokeWidth="2.5" />
//       </svg>
//     ),
//   },
// ];

// const contactCards = [
//   {
//     id: 1,
//     title: "ADDRESS",
//     lines: [
//       "164 Nguyen Xi, Binh Thanh,",
//       "Ho Chi Minh City, Vietnam"
//     ],
//     icon: (
//       <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <circle cx="12" cy="10" r="3" />
//         <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     title: "PHONE NUMBER",
//     lines: [
//       "+ 64 345 132 098",
//       "+ 75 9834 093 463"
//     ],
//     icon: (
//       <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     title: "EMAIL ID",
//     lines: [
//       "design@someemail.com",
//       "hemes@someemail.com"
//     ],
//     icon: (
//       <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <rect width="20" height="16" x="2" y="4" rx="2" />
//         <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
//       </svg>
//     ),
//   },
//   {
//     id: 4,
//     title: "OPENING HOURS",
//     lines: [
//       "Mon – Sat 9 am to 8 pm",
//       "Sun – 10 am to 3 pm"
//     ],
//     icon: (
//       <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//         <circle cx="12" cy="12" r="10" />
//         <polyline points="12 6 12 12 16 14" />
//       </svg>
//     ),
//   },
// ];

// export default function WhyUs() {
//   return (
//     <div>
//       {/* UPPER SECTION - UPDATED TO NEW MAROON (#65002d) */}
//       <section className="w-full bg-zinc-50/50 py-20 lg:py-28 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
//             {/* LEFT SIDE: Image Container */}
//             <div className="lg:col-span-5 relative">
//               <div className="relative h-[480px] sm:h-[560px] w-full rounded-3xl overflow-hidden shadow-2xl">
//                 <Image
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
//                   alt="Our professional team working together"
//                   fill
//                   className="object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
//                   sizes="(max-width: 1024px) 100vw, 40vw"
//                   priority
//                 />
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />

//                 {/* Floating Badge */}
//                 <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg">
//                   <span className="text-xs font-great-vibes text-[#65002d] tracking-wider uppercase">
//                     #1 Industry Leader
//                   </span>
//                 </div>

//                 {/* Bottom Card Content */}
//                 <div className="absolute bottom-8 philosopher left-8 right-8 text-white">
//                   <p className="text-2xl leading-tight">
//                     Driving success with innovation & clarity.
//                   </p>
//                   <div className="mt-3 flex items-center font-old-standard gap-2 text-sm text-zinc-300">
//                     <span className="inline-block w-2 h-2 rounded-full bg-[#65002d]" />
//                     <span>10+ Years of Business Excellence</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative Element */}
//               <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#65002d]/10 rounded-3xl -z-10 blur-xl pointer-events-none" />
//             </div>

//             {/* RIGHT SIDE: Content & Features Grid */}
//             <div className="lg:col-span-7">
//               {/* Header Section */}
//               <div className="max-w-xl">
//                 <div className="inline-flex items-center gap-2 px-3.5 py-1.5 font-philosopher rounded-full bg-[#65002d]/10 text-[#65002d] text-xs font-bold tracking-widest uppercase">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#65002d]" />
//                   Why Choose Us
//                 </div>

//                 <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-great-vibes text-zinc-900 leading-[1.15] tracking-tight">
//                   Why We Are The <br className="hidden sm:inline" />
//                   <span className="text-[#65002d]">Best Choice</span> For You
//                 </h2>

//                 <p className="mt-4 text-base sm:text-lg font-philosopher leading-relaxed">
//                   We provide tailored professional solutions with a relentless focus on high-end innovation, structural accuracy, and long-term client commitment.
//                 </p>
//               </div>

//               {/* Features List (2-Column Grid) */}
//               <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 {whyUsData.map((item) => (
//                   <div
//                     key={item.id}
//                     className="group relative bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm hover:shadow-xl hover:border-[#65002d]/40 transition-all duration-300 flex flex-col justify-between"
//                   >
//                     <div>
//                       {/* Icon Container */}
//                       <div className="w-12 h-12 rounded-xl bg-[#65002d]/10 text-[#65002d] flex items-center justify-center transition-all duration-300 group-hover:bg-[#65002d] group-hover:text-white group-hover:scale-110 shadow-sm">
//                         {item.icon}
//                       </div>

//                       <h3 className="mt-5 text-lg font-philosopher group-hover:text-[#65002d] transition-colors duration-200">
//                         {item.title}
//                       </h3>

//                       <p className="mt-2 text-sm leading-relaxed font-old-standard">
//                         {item.desc}
//                       </p>
//                     </div>

//                     {/* Subtle Indicator Line */}
//                     <div className="mt-6 w-8 h-[2px] bg-zinc-200 group-hover:w-full group-hover:bg-[#65002d] transition-all duration-300" />
//                   </div>
//                 ))}
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* BOTTOM SECTION - KEPT ORIGINAL COLOR (#983546) AND ORIGINAL STYLING */}
//       <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
          
//           {/* Responsive Grid Layout */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
//             {contactCards.map((card) => (
//               <div
//                 key={card.id}
//                 className="
//                   bg-[#983546] text-white 
//                   p-8 sm:p-9 
//                   flex flex-col items-center justify-center text-center 
//                   shadow-[8px_8px_0px_0px_#1e1e1e] 
//                   transition-all duration-300 
//                   hover:-translate-x-1 hover:-translate-y-1 
//                   hover:shadow-[12px_12px_0px_0px_#1e1e1e]
//                 "
//               >
//                 {/* Icon */}
//                 <div className="mb-4">
//                   {card.icon}
//                 </div>

//                 {/* Card Title */}
//                 <h3 className="text-xs sm:text-[13px] font-philosopher tracking-[0.2em] uppercase mb-5 text-white/90">
//                   {card.title}
//                 </h3>

//                 {/* Card Description Lines */}
//                 <div className="space-y-1 font-old-standard text-sm sm:text-[15px] leading-relaxed text-white/95">
//                   {card.lines.map((line, index) => (
//                     <p key={index}>{line}</p>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }



import React from 'react';
import Image from 'next/image';

export default function WineHeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#0d0907] text-[#e8ded1] flex items-center overflow-hidden py-12 px-6 sm:px-12 lg:px-20">
      {/* Background World Map Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
        <Image
          src="/world-map.png" // Apno Map Asset / Background Image Source
          alt="World Map Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8">
          
          {/* Subtitle / Brand Tagline */}
          <div className="flex items-center space-x-3">
            <span className="text-[#c5a059] text-xl">🍇</span>
            <p className="text-xs sm:text-sm tracking-[0.25em] text-[#c5a059] uppercase font-semibold">
              GLOBAL WINE SOURCING &amp; DISTRIBUTION
            </p>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extralight leading-tight text-white tracking-wide">
            Wines of the World, <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#e3c287]">Delivered to </span>
            <span className="text-[#e3c287]">America</span>
          </h1>

          {/* Divider Line */}
          <div className="w-16 h-[1px] bg-[#c5a059]/50 my-2"></div>

          {/* Description Paragraph */}
          <p className="text-sm sm:text-base lg:text-lg text-[#bcaaa4] max-w-xl font-light leading-relaxed">
            Exceptional wines sourced from distinguished regions across the globe and brought to the U.S. market.
          </p>

          {/* Wine Origin Regions List */}
          <div className="pt-4 text-xs sm:text-sm tracking-widest text-[#a8927a] uppercase leading-relaxed font-medium">
            ITALY • FRANCE • SPAIN • PORTUGAL • GERMANY • ARGENTINA <br />
            NEW ZEALAND • CALIFORNIA • OREGON • OHIO
          </div>
        </div>

        {/* Right Side Bottle & Glass Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative mt-8 lg:mt-0">
          <div className="relative w-[280px] sm:w-[350px] lg:w-[420px] aspect-[4/5]">
            <Image
              src="/wine-bottle-glass.png" // Wine Bottle and Glass cutout image
              alt="Premium Wine Bottle and Glass"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
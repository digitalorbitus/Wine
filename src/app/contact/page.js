// import React from "react";
// import Link from "next/link";

// export default function ContactInfoSection() {
//   // Type 3 Data
//   const type3Data = [
//     {
//       id: 1,
//       title: 'ADDRESS',
//       lines: ['7607 Detour Ave Cleveland OH 44103 US'],
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: 'PHONE NUMBER',
//       lines: ['440.812.3776'],
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: 'EMAIL ID',
//       lines: ['ciaodaniel@gmail.com'],
//       isLink: true,
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       title: 'OPENING HOURS',
//       lines: ['Mon – Sat 9 am to 8 pm', 'Sun – 10 am to 3 pm'],
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//     },
//   ];
//   // ==================== TYPE 4 DATA ====================
//   const type4Data = [
//     {
//       id: 1,
//       title: 'TALK TO US',
//       lines: ['7607 Detour Ave Cleveland OH 44103 US'],
//       icon: (
//         <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: 'MAIL US @',
//       lines: ['ciaodaniel@gmail.com'],
//       isLink: true,
//       icon: (
//         <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: 'OUR LOCATION',
//       lines: ['7607 Detour Ave Cleveland OH 44103 US'],
//       icon: (
//         <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       title: 'OPENING HOURS',
//       lines: ['Mon – Sat 9 am to 8 pm', 'Sun – 10 am to 3 pm'],
//       icon: (
//         <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//     },
//   ];

//   // ==================== TYPE 5 DATA ====================
//   const type5Data = [
//     {
//       id: 1,
//       title: 'BECOME A SPONSOR',
//       normalBg: 'bg-[#e77e4e]  group-hover:bg-white',            // Orange Hexagon
//       hoverBoxBg: 'hover:bg-[#e77e4e]', // Hover Full Box Orange
//       hoverIconColor: "group-hover:text-[#e77e4e]",
//       icon: (
//         <svg className="w-10 h-10 transition-colors duration-300 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor">
//           <rect x="12" y="10" width="26" height="18" rx="2" strokeWidth="2.5" />
//           <circle cx="17" cy="19" r="2" fill="currentColor" />
//           <line x1="22" y1="16" x2="33" y2="16" strokeWidth="2.5" strokeLinecap="round" />
//           <line x1="22" y1="22" x2="30" y2="22" strokeWidth="2.5" strokeLinecap="round" />
//           <rect x="8" y="18" width="26" height="18" rx="2" className=" duration-300" stroke="currentColor" strokeWidth="2.5" />
//           <circle cx="13" cy="27" r="2.5" fill="currentColor" />
//           <line x1="19" y1="24" x2="30" y2="24" strokeWidth="2.5" strokeLinecap="round" />
//           <line x1="19" y1="30" x2="27" y2="30" strokeWidth="2.5" strokeLinecap="round" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: 'PARTNER WITH US',
//       normalBg: 'bg-[#3498db] group-hover:bg-white',            // Blue Hexagon
//       hoverBoxBg: 'hover:bg-[#3498db] group-hover:bg-white', // Hover Full Box Blue
//       hoverIconColor: "group-hover:text-[#3498db]",
//       icon: (
//         <svg className="w-10 h-10 transition-colors duration-300 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor">
//           <circle cx="18" cy="16" r="5" strokeWidth="2.5" />
//           <path d="M10 32c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeWidth="2.5" strokeLinecap="round" />
//           <circle cx="30" cy="20" r="4.5" strokeWidth="2.5" />
//           <path d="M25 34c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeWidth="2.5" strokeLinecap="round" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: 'BECOME A SPEAKER',
//       normalBg: 'bg-[#f05a88] group-hover:bg-white',            // Pink Hexagon
//       hoverBoxBg: 'hover:bg-[#f05a88]', // Hover Full Box Pink
//       hoverIconColor: "group-hover:text-[#f05a88]",
//       icon: (
//         <svg className="w-10 h-10 transition-colors duration-300 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor">
//           <circle cx="24" cy="16" r="7" strokeWidth="2.5" />
//           <line x1="20" y1="16" x2="28" y2="16" strokeWidth="2" />
//           <line x1="24" y1="12" x2="24" y2="20" strokeWidth="2" />
//           <path d="M15 20c0 5 4 9 9 9s9-4 9-9" strokeWidth="2.5" strokeLinecap="round" />
//           <line x1="24" y1="29" x2="24" y2="37" strokeWidth="2.5" />
//           <line x1="18" y1="37" x2="30" y2="37" strokeWidth="2.5" strokeLinecap="round" />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       title: 'GIVE US IDEAS',
//       normalBg: 'bg-[#5fb059] group-hover:bg-white ',            // Green Hexagon
//       hoverBoxBg: 'hover:bg-[#5fb059]', // Hover Full Box Green
//       hoverIconColor: "group-hover:text-[#5fb059]",
//       icon: (
//         <svg className="w-10 h-10 transition-colors duration-300 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor">
//           <path d="M16 22c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.3-2 6.2-5 7.3V32h-6v-2.7c-3-1.1-5-4-5-7.3z" strokeWidth="2.5" strokeLinejoin="round" />
//           <line x1="21" y1="36" x2="27" y2="36" strokeWidth="2.5" strokeLinecap="round" />
//           <line x1="24" y1="18" x2="24" y2="22" strokeWidth="2" strokeLinecap="round" />
//         </svg>
//       ),
//     },
//   ];
//   // ==================== TYPE 6 DATA ====================
//   const type6Data = [
//     {
//       id: 1,
//       title: 'ADDRESS',
//       lines: ['164 Nguyen Xi, Binh Thanh,', 'Ho Chi Minh City, Vietnam'],
//       icon: (
//         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: 'PHONE NUMBER',
//       lines: ['+ 64 345 132 098', '+ 75 9834 093 463'],
//       icon: (
//         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: 'EMAIL ID',
//       lines: ['design@someemail.com', 'hemes@someemail.com'],
//       isLink: true,
//       icon: (
//         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       title: 'OPENING HOURS',
//       lines: ['Mon – Sat 9 am to 8 pm', 'Sun – 10 am to 3 pm'],
//       icon: (
//         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//     },
//   ];

//   // ==================== TYPE 7 DATA ====================
//   const type7Data = [
//     {
//       id: 1,
//       title: 'TALK TO US',
//       lines: ['Toll Free: 1224 2234 LAW', 'Fax: 1224 2235 225'],
//       icon: (
//         <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: 'MAIL US @',
//       lines: ['admin@thelaw.com', 'support@thelaw.com'],
//       isLink: true,
//       icon: (
//         <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: 'OUR LOCATION',
//       lines: ['625 @ David Blake Road,', 'Adventure, LA 14536, USA'],
//       icon: (
//         <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//         </svg>
//       ),
//     },
//     {
//       id: 4,
//       title: 'OPENING HOURS',
//       lines: ['Mon – Sat 9 am to 8 pm', 'Sun – 10 am to 3 pm'],
//       icon: (
//         <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       ),
//     },
//   ];
//   // TYPE 8 DATA
//   const type8Data = [
//     {
//       id: 1,
//       title: 'TALK TO US',
//       lines: ['Toll Free: 440.812.3776'],
//       iconBg: 'bg-black', // Black Circle
//       icon: (
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//         </svg>
//       ),
//     },
//     {
//       id: 2,
//       title: 'MAIL US @',
//       lines: ['ciaodaniel@gmail.com'],
//       isLink: true,
//       iconBg: 'bg-black', // Black Circle
//       icon: (
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//         </svg>
//       ),
//     },
//     {
//       id: 3,
//       title: 'OUR LOCATION',
//       lines: ['7607 Detour Ave Cleveland OH 44103 US'],
//       iconBg: 'bg-[#9c3545]', // Maroon/Red Circle
//       icon: (
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//         </svg>
//       ),
//     },
//   ];
//   return (
//     <div>

//       <section className="w-full bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
//         <div className="max-w-6xl mx-auto space-y-12">

//           {/* TOP BREADCRUMB HEADER */}
//           <div className="text-center space-y-1">
//             <h1 className="text-2xl sm:text-3xl font-philosopher  text-zinc-900 tracking-wider uppercase font-medium">
//               CONTACT INFO
//             </h1>

//             <p className="text-xs sm:text-sm text-zinc-400 font-serif tracking-wide">
//               <Link href="/" className="hover:underline cursor-pointer">
//                 Home
//               </Link>

//               <span className="mx-1">/</span>

//               <Link href="/shortcodes" className="hover:underline cursor-pointer">
//                 Shortcodes
//               </Link>

//               <span className="mx-1">/</span>

//               <span className="text-zinc-500">Contact Info</span>
//             </p>
//           </div>


//           {/* MAIN LAYOUT */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

//             {/* MAP */}
//             <div className="w-full h-[380px] sm:h-[430px] bg-transparent border border-zinc-200 overflow-hidden shadow-sm">
//               <iframe
//                 title="Google Map"
//                 src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                 className="w-full h-full border-0"
//                 loading="lazy"
//               ></iframe>
//             </div>


//             {/* CONTACT */}
//             <div className="flex flex-col space-y-5">

//               <div>
//                 <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>

//                 <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes">
//                   Type 1
//                 </h2>
//               </div>


//               <div className="divide-y divide-dashed divide-zinc-300 text-zinc-600 font-old-standard">

//                 <div className="py-4">
//                   <p>Toll Free: 440.812.3776</p>

//                 </div>


//                 <div className="py-4 text-[#9c3545]">
//                   <p>ciaodaniel@gmail.com</p>

//                 </div>


//                 <div className="py-4">
//                   <p>7607 Detour Ave Cleveland OH 44103 US</p>

//                 </div>


//                 <div className="py-4">
//                   <p>Mon – Sat 9 am to 8 pm</p>
//                   <p>Sun – 10 am to 3 pm</p>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* second  or third section start */}
//       <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 font-serif">
//         <div className="max-w-6xl mx-auto space-y-16">

//           {/* ==================== TYPE 2 ==================== */}
//           <div className="space-y-6">
//             {/* Header */}
//             <div>
//               <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
//               <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
//                 Type 2
//               </h2>
//             </div>

//             {/* Type 2 Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//               {/* Box 1: Talk To Us */}
//               <div className="flex border border-zinc-300 bg-white shadow-sm">
//                 <div className="bg-black text-white p-4 flex items-center justify-center w-14 sm:w-16 flex-shrink-0">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
//                   </svg>
//                 </div>
//                 <div className="p-4 flex flex-col justify-center text-xs sm:text-sm">
//                   <span className="text-[11px] font-philosopher  uppercase tracking-widest block mb-1">TALK TO US</span>
//                   <p className="text-zinc-700"><span className="font-old-standard ">Toll Free:</span> 440.812.3776</p>
//                   {/* <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Fax:</span> 1224 2235 225</p> */}
//                 </div>
//               </div>

//               {/* Box 2: Mail Us */}
//               <div className="flex border border-zinc-300 bg-white shadow-sm">
//                 <div className="bg-black text-white p-4 flex items-center justify-center w-14 sm:w-16 flex-shrink-0">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
//                   </svg>
//                 </div>
//                 <div className="p-4 flex flex-col justify-center text-xs sm:text-sm">
//                   <span className="text-[11px] font-philosopher uppercase tracking-widest block mb-1">MAIL US @</span>
//                   <p className="text-[#9c3545] font-old-standard cursor-pointer hover:underline">ciaodaniel@gmail.com</p>
//                   {/* <p className="text-[#9c3545] cursor-pointer hover:underline">admin@livecon.com</p> */}
//                 </div>
//               </div>

//               {/* Box 3: Our Location */}
//               <div className="flex border border-zinc-300 bg-white shadow-sm">
//                 <div className="bg-black text-white p-4 flex items-center justify-center w-14 sm:w-16 flex-shrink-0">
//                   <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
//                   </svg>
//                 </div>
//                 <div className="p-4 flex flex-col justify-center text-xs sm:text-sm">
//                   <span className="text-[11px] font-philosopher uppercase tracking-widest block mb-1">OUR LOCATION</span>
//                   <p className="font-old-standard leading-snug">7607 Detour Ave Cleveland OH 44103 US</p>
//                   {/* <p className="text-zinc-600 leading-snug">Adventureland, LA 14536, USA</p> */}
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* ==================== TYPE 3 ==================== */}
//           <div className="space-y-6 pt-6">
//             {/* Header */}
//             <div>
//               <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
//               <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
//                 Type 3
//               </h2>
//             </div>

//             {/* Type 3 Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//               {type3Data.map((card) => (
//                 <div key={card.id} className="flex flex-col items-center">

//                   {/* Maroon Box */}
//                   <div className="w-full bg-[#9c3545] text-white pt-8 pb-10 px-5 text-center relative shadow-sm">

//                     {/* Inner White Frame Line */}
//                     <div className="absolute inset-3 border border-white/25 pointer-events-none"></div>

//                     <h3 className="text-xs sm:text-sm uppercase font-philosopher tracking-[0.2em]  mb-4 text-white/90">
//                       {card.title}
//                     </h3>

//                     <div className="space-y-1 font-old-standard text-xs sm:text-sm text-white/95 leading-relaxed">
//                       {card.lines.map((line, idx) => (
//                         <p
//                           key={idx}
//                           className={card.isLink ? 'cursor-pointer hover:underline' : ''}
//                         >
//                           {line}
//                         </p>
//                       ))}
//                     </div>

//                     {/* Bottom Triangle Cutout (Notch) */}
//                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[18px] border-b-white"></div>
//                   </div>

//                   {/* Bottom Icon */}
//                   <div className="mt-3 text-[#9c3545]">
//                     {card.icon}
//                   </div>

//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>
//       {/* second  or third section end */}
//       {/* fourth or five section satrt */}
//       <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 font-serif">
//         <div className="max-w-6xl mx-auto space-y-20">

//           {/* ==================== TYPE 4 SECTION ==================== */}
//           <div className="space-y-8">
//             <div>
//               <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
//               <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
//                 TYPE 4
//               </h2>
//             </div>

//             <div className="border border-[#9c3545] relative bg-white">
//               {/* Desktop Diamond Intersections */}
//               <div className="hidden lg:block absolute inset-0 pointer-events-none">
//                 <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#9c3545] rotate-45"></div>
//                 <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#9c3545] rotate-45"></div>
//                 <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#9c3545] rotate-45"></div>
//               </div>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#9c3545]">
//                 {type4Data.map((item) => (
//                   <div key={item.id} className="p-8 flex flex-col items-center text-center">
//                     <div className="w-9 h-9 bg-[#9c3545] rotate-45 flex items-center justify-center mb-6 shadow-sm">
//                       {item.icon}
//                     </div>
//                     <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-zinc-800 mb-3">
//                       {item.title}
//                     </h3>
//                     <div className="space-y-1 text-xs sm:text-sm text-zinc-500 font-serif leading-relaxed">
//                       {item.lines.map((line, idx) => (
//                         <p key={idx} className={item.isLink ? 'text-[#9c3545] cursor-pointer hover:underline' : ''}>
//                           {line}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* ==================== TYPE 5 SECTION ==================== */}
//           <div className="space-y-10">
//             <div>
//               <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
//               <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
//                 TYPE 5
//               </h2>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
//               {type5Data.map((item) => (
//                 <div
//                   key={item.id}
//                   className={`group relative w-full aspect-square max-w-[260px] p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 bg-transparent ${item.hoverBoxBg}`}
//                 >
//                   {/* Background Honeycomb Pattern (Visible on Hover) */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none">
//                     <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
//                       <defs>
//                         <pattern id={`hex-pattern-${item.id}`} width="28" height="48.5" patternUnits="userSpaceOnUse">
//                           <path d="M14 0 L28 8.08 L28 24.25 L14 32.33 L0 24.25 L0 8.08 Z M14 48.5 L28 40.42 L28 24.25 L14 32.33 L0 24.25 L0 40.42 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
//                         </pattern>
//                       </defs>
//                       <rect width="100%" height="100%" fill={`url(#hex-pattern-${item.id})`} />
//                     </svg>
//                   </div>

//                   {/* Central Hexagon */}
//                   <div
//                     className={`relative z-10 w-24 h-28 flex items-center justify-center transition-all duration-300 ${item.normalBg} shadow-sm`}
//                     style={{
//                       clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//                     }}
//                   >
//                     {React.cloneElement(item.icon, {
//                       className: `w-10 h-10 transition-colors duration-300 text-white ${item.hoverIconColor}`,
//                     })}
//                   </div>

//                   {/* Card Title */}
//                   {/* <h3 className="relative z-10 mt-6 text-xs sm:text-[13px] uppercase tracking-wider font-sans font-bold text-zinc-800 hover:text-white text-center transition-colors duration-300">
//                   {item.title}
//                 </h3> */}
//                   <h3
//                     className="
//     mt-4 
//     text-white 
//   font-philosopher
//     text-sm
//     transition-colors 
//     duration-300
//     group-hover:text-white
//   "
//                   >
//                     {item.title}
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>
//       {/* fourth or five section end  */}

//       {/*six or seven section start */}
//       <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 font-serif space-y-24">

//         {/* ==================== TYPE 6 ==================== */}
//         <div className="max-w-6xl mx-auto space-y-10">
//           <div>
//             <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
//             <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
//               TYPE 6
//             </h2>
//           </div>

//           {/* Grid for Type 6 */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {type6Data.map((item) => (
//               <div key={item.id} className="relative group">
//                 {/* Black Offset Shadow Box */}
//                 <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#1e1e1e] rounded-none"></div>

//                 {/* Main Maroon Card */}
//                 <div className="relative bg-[#9c3545] p-6 sm:p-8 flex flex-col items-center text-center text-white h-full">
//                   {/* Icon */}
//                   <div className="mb-4">
//                     {item.icon}
//                   </div>

//                   {/* Title */}
//                   <h3 className="text-xs uppercase font-philosopher tracking-[0.2em] mb-4 text-white">
//                     {item.title}
//                   </h3>

//                   {/* Lines */}
//                   <div className="space-y-1 text-xs sm:text-sm font-old-standard leading-relaxed text-zinc-100">
//                     {item.lines.map((line, idx) => (
//                       <p key={idx} className={item.isLink ? 'hover:underline cursor-pointer' : ''}>
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ==================== TYPE 7 ==================== */}
//         <div className="max-w-6xl mx-auto space-y-10">
//           <div>
//             <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
//             <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
//               TYPE 7
//             </h2>
//           </div>

//           {/* Grid for Type 7 */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
//             {type7Data.map((item) => (
//               <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">

//                 {/* Diamond Icon Container */}
//                 <div className="w-10 h-10 bg-[#9c3545] rotate-45 flex-shrink-0 flex items-center justify-center my-2 sm:my-0 shadow-sm">
//                   {item.icon}
//                 </div>

//                 {/* Content Box */}
//                 <div className="space-y-1">
//                   <h3 className="text-[11px] uppercase tracking-[0.2em] font-philosopher font-bold text-zinc-900">
//                     {item.title}
//                   </h3>
//                   <div className="space-y-0.5 text-xs sm:text-sm text-zinc-500 font-old-standard leading-relaxed">
//                     {item.lines.map((line, idx) => (
//                       <p key={idx} className={item.isLink ? 'text-[#9c3545] cursor-pointer hover:underline' : ''}>
//                         {line}
//                       </p>
//                     ))}
//                   </div>
//                 </div>

//               </div>
//             ))}
//           </div>
//         </div>

//       </section>
//       {/*six or seven section end */}
//       {/* eight section start */}
//       <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 font-serif">
//         <div className="max-w-6xl mx-auto space-y-12">

//           {/* Section Title Header */}
//           <div>
//             <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
//             <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
//               TYPE 8
//             </h2>
//           </div>

//           {/* Responsive Grid: 1 col on mobile, 3 cols on desktop */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
//             {type8Data.map((item) => (
//               <div key={item.id} className="flex flex-col items-center">

//                 {/* Top Circle Icon */}
//                 <div className={`w-16 h-16 rounded-full ${item.iconBg} flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 hover:scale-105`}>
//                   {item.icon}
//                 </div>

//                 {/* Rectangular Border Box */}
//                 <div className="w-full border border-black p-6 sm:p-8 flex flex-col items-center justify-center text-center flex-grow bg-white">

//                   {/* Title */}
//                   <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-philosopher font-bold text-zinc-900 mb-3">
//                     {item.title}
//                   </h3>

//                   {/* Sub lines */}
//                   <div className="space-y-1 text-xs sm:text-sm text-zinc-500 font-old-standard leading-relaxed">
//                     {item.lines.map((line, idx) => (
//                       <p key={idx} className={item.isLink ? 'text-[#9c3545] cursor-pointer hover:underline' : ''}>
//                         {line}
//                       </p>
//                     ))}
//                   </div>

//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </section>
//       {/* eight section end */}
//     </div>
//   );
// }






"use client";

import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import WineLoader from "../../component/WineLoader";


// SVG Icons
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-[#E2C792]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

// Motion Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const interestOptions = [
  "Italian", "French", "Argentine", "California", 
  "Oregon", "Spanish", "Portuguese", "Curated Cases", "Other"
];

const businessTypes = [
  "Restaurant", "Hotel & Hospitality", "Wine Retailer", 
  "Bar", "Catering & Events", "Other"
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    interests: [],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Interest Multi-select Toggle Handler
  const toggleInterest = (option) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(option);
      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== option)
          : [...prev.interests, option],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
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
    <main className="bg-[#120D0B] text-[#F3EFE6] min-h-screen font-sans selection:bg-[#8C2332] selection:text-white overflow-x-hidden">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">
        
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8C2332]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="inline-block py-1.5 px-4 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] mb-6">
              05. Contact Us
            </span>

            <h1 className="font-philosopher text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Let&apos;s Talk Wine
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#A39990] max-w-2xl mx-auto leading-relaxed">
              Interested in our portfolio? Whether you&apos;re looking for specific wines, exploring new selections, or interested in wholesale pricing, our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= FORM & BOOK CALL GRID ================= */}
      <section className="pb-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT: REQUEST WHOLESALE FORM ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="lg:col-span-8 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-6 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-xl shadow-2xl relative"
          >
            <div className="mb-8">
              <h2 className="font-philosopher text-2xl sm:text-3xl font-bold text-white">
                Request Wholesale Information
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#A39990]">
                Complete the form below and tell us a little about your business and what you&apos;re looking for.
              </p>
            </div>

            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                <div className="w-16 h-16 bg-[#C5A059]/20 border border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059]">
                  <CheckIcon />
                </div>
                <h3 className="font-philosopher text-2xl font-bold text-white">Thank You for Reaching Out</h3>
                <p className="mt-2 text-sm text-[#A39990] max-w-md mx-auto">
                  We have received your wholesale inquiry. A member of our team will review your business needs and contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Business Name & Contact Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Business Name"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                {/* Business Type Select */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
                    Business Type *
                  </label>
                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full bg-[#1A1310] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-all"
                  >
                    <option value="" disabled>Select Business Type</option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#120D0B] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Interest Multi-Select Pills */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-3">
                    What are you interested in?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {interestOptions.map((option) => {
                      const isSelected = formData.interests.includes(option);
                      return (
                        <button
                          type="button"
                          key={option}
                          onClick={() => toggleInterest(option)}
                          className={`px-4 py-2 rounded-lg text-xs font-medium transition-all border ${
                            isSelected
                              ? "bg-[#C5A059] border-[#C5A059] text-[#120D0B] font-bold shadow-md"
                              : "bg-white/5 border-white/10 text-[#A39990] hover:border-white/30 hover:text-white"
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#C5A059] via-[#D8B674] to-[#997334] text-[#120D0B] font-bold text-xs sm:text-sm uppercase tracking-wider py-4 rounded-xl shadow-xl hover:brightness-110 transition-all"
                >
                  Request Wholesale Pricing
                </motion.button>

              </form>
            )}

          </motion.div>

          {/* ================= RIGHT: PREFER TO SPEAK / BOOK A CALL ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="lg:col-span-4 space-y-8"
          >
            
            {/* Book A Call Box */}
            <div className="bg-gradient-to-b from-[#8C2332]/30 via-[#211215] to-[#120D0B] border border-[#8C2332]/50 p-8 rounded-3xl backdrop-blur-md relative overflow-hidden shadow-2xl">
              <div className="p-3.5 rounded-xl bg-[#8C2332] text-white w-fit mb-6">
                <CalendarIcon />
              </div>

              <h3 className="font-serif text-2xl font-bold text-white">
                Prefer to Speak With Us?
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#D4C3B5] leading-relaxed">
                If you&apos;d rather discuss your needs directly, schedule a conversation with our team. We&apos;ll be happy to discuss your business, your wine program, and the selections that may be right for you.
              </p>

              <div className="mt-8 pt-6 border-t border-white/10">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="#"
                    className="flex items-center justify-center gap-3 w-full border border-[#C5A059] bg-[#C5A059]/10 text-[#E2C792] hover:bg-[#C5A059] hover:text-[#120D0B] font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300"
                  >
                    <PhoneIcon />
                    Book A Call
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Direct Support Card */}
            <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl">
              <h4 className="font-serif text-lg font-bold text-white mb-2">Direct Wine Desk</h4>
              <p className="text-xs text-[#A39990] leading-relaxed mb-4">
                Our portfolio managers are available Monday – Friday to answer questions regarding regional selections and current vintages.
              </p>
              <div className="text-xs font-mono text-[#C5A059]">
                Mon - Fri: 9:00 AM – 6:00 PM EST
              </div>
            </div>

          </motion.div>

        </div>
      </section>

    </main>
  );
}
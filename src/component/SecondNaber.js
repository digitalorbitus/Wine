


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("Home");
//   const [mobileSubmenu, setMobileSubmenu] = useState(null);

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "About Us", href: "/about" },
//     {
//       label: "Portfolio",
//       href: "/shop",
//       heading: "OUR COUNTRY WINES",
//       countries: [
//         { label: "Italy", href: "/italy" },
//              { label: "Spain", href: "/Spain" },
//                  { label: "Argentina", href: "/Argentina" },
//         { label: "France", href: "/france" },
//               { label: "California", href: "/california" },
//         { label: "Oregon", href: "/Oregon" },
//             { label: "Portugal", href: "/Portugal" },
//         { label: "Germany", href: "/Germany" },
//         { label: "Ohio", href: "/Ohio" },
  
        
    
   
//         { label: "New Zealand", href: "/New-Zealand" },
    
//       ],
//     },
//     { label: "Contact", href: "/contact" },
//     { label: "Why Choose Us", href: "/why-us" },
//   ];

//   const toggleMobileSubmenu = (label) => {
//     setMobileSubmenu((prev) => (prev === label ? null : label));
//   };

//   return (
// //     <header className="sticky top-0 z-50 w-full bg-[#fbf9f5] font-serif text-[#741C29] shadow-md">
// //       <div className="relative border-y border-dashed border-[#741C29]/40">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           {/* Single Row: Logo (Left) | Nav Links (Center) | Contact (Right) */}
// //           <div className="flex items-center justify-between h-20 gap-4">
            
// //             {/* Left: Logo */}
// // <Link href="/" className="flex-shrink-0 flex items-center">
// //   <Image
// //     src="/Logo_CD1-removebg-preview.png"
// //     alt="Ciao Daniel Logo"
// //     width={220}
// //     height={80}
// //     priority
// //     quality={100}
// //     className="
// //       h-20
// //       sm:h-20
// //       md:h-22
// //       lg:h-26
// //       w-auto
// //       object-contain
// //       block
// //     "
// //   />
// // </Link>

// //             {/* Center: Desktop Navigation */}
// //        <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 z-20">
// //   {navItems.map((item) => {
// //     const isActive = activeItem === item.label;
// //     const hasCountries = Boolean(
// //       item.countries && item.countries.length > 0
// //     );

// //     return (
// //       <div key={item.label} className="group py-6 relative">
// //         <Link
// //           href={item.href}
// //           onClick={() => setActiveItem(item.label)}
// //           className={`relative text-base xl:text-lg transition-colors duration-200 font-philosopher tracking-wide flex items-center gap-1.5
// //             ${
// //               isActive
// //                 ? "text-[#790214]"
// //                 : "text-[#1a1a1a] hover:text-[#790214]"
// //             }

// //             after:absolute
// //             after:left-0
// //             after:-bottom-2
// //             after:h-[2px]
// //             after:bg-[#790214]
// //             after:transition-all
// //             after:duration-300
// //             ${
// //               isActive
// //                 ? "after:w-full"
// //                 : "after:w-0 group-hover:after:w-full"
// //             }
// //           `}
// //         >
// //           {item.label}

// //           {hasCountries && (
// //             <svg
// //               className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
// //               fill="none"
// //               stroke="currentColor"
// //               viewBox="0 0 24 24"
// //             >
// //               <path
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth={2}
// //                 d="M19 9l-7 7-7-7"
// //               />
// //             </svg>
// //           )}
// //         </Link>

// //         {hasCountries && (
// //           <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-60 bg-[#363543] text-white shadow-xl z-50 rounded-b-md overflow-hidden">
// //             <ul className="py-3">
// //               <li>
// //                 <div className="px-5 py-2.5 text-xs tracking-[0.25em] text-white border-b border-white/20">
// //                   <Link href="/shop">{item.heading}</Link>
// //                 </div>
// //               </li>

// //               {item.countries.map((country, idx) => (
// //                 <li key={idx}>
// //                   <Link
// //                     href={country.href}
// //                     onClick={() => setActiveItem(item.label)}
// //                     className="px-5 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-[#8b263e]/80 transition-all duration-150 flex items-center gap-2"
// //                   >
// //                     <span className="text-xs opacity-70">&rsaquo;</span>
// //                     {country.label}
// //                   </Link>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>
// //         )}
// //       </div>
// //     );
// //   })}
// // </nav>

// //             {/* Right: Contact Details (Phone & Email) */}
// //             <div className="hidden lg:flex items-center gap-4 xl:gap-6 font-serif  text-xs xl:text-sm text-[#2a110b] flex-shrink-0">
// //               <a
// //                 href="tel:+1234567890"
// //                 className="flex items-center gap-1.5 font-normal  hover:text-[#790214] transition-colors"
// //               >
// //                 <svg
// //                   className="w-4 h-4 text-[#790214]"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
// //                   />
// //                 </svg>
// //                 <span>440.812.3776</span>
// //               </a>

// //               <a
// //                 href="mailto:ciaodaniel@gmail.com"
// //                 className="flex items-center gap-1.5 hover:text-[#790214] transition-colors"
// //               >
// //                 <svg
// //                   className="w-4 h-4 text-[#8b263e]"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   viewBox="0 0 24 24"
// //                 >
// //                   <path
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                     strokeWidth={2}
// //                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
// //                   />
// //                 </svg>
// //                 <span>ciaodaniel@gmail.com</span>
// //               </a>
// //             </div>

// //             {/* Mobile Menu Toggle Button */}
// //             <div className="flex lg:hidden items-center justify-between w-full">
// //               <Link href="/" className="flex items-center">
              
// //               </Link>

// //               <button
// //                 onClick={() => setIsOpen(!isOpen)}
// //                 type="button"
// //                 className="p-2 rounded-md text-[#2a110b] hover:text-[#790214] focus:outline-none"
// //                 aria-label="Toggle Menu"
// //               >
// //                 <svg
// //                   className="h-7 w-7"
// //                   fill="none"
// //                   viewBox="0 0 24 24"
// //                   stroke="currentColor"
// //                 >
// //                   {isOpen ? (
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M6 18L18 6M6 6l12 12"
// //                     />
// //                   ) : (
// //                     <path
// //                       strokeLinecap="round"
// //                       strokeLinejoin="round"
// //                       strokeWidth={2}
// //                       d="M4 6h16M4 12h16M4 18h16"
// //                     />
// //                   )}
// //                 </svg>
// //               </button>
// //             </div>

// //           </div>
// //         </div>

// //         {/* Mobile View Drawer */}
// //         {isOpen && (
// //           <div className="lg:hidden border-t border-dashed border-[#8b263e]/40 bg-[#fbf9f5] z-30 relative">
// //             <div className="px-4 py-3 border-b border-gray-200 flex flex-col gap-2 text-sm text-[#2a110b]">
// //               <a href="tel:+1234567890" className="flex items-center gap-2">
// //                 <span className="text-[#790214]">📞</span> +1 (234) 567-890
// //               </a>
// //               <a href="mailto:info@winestore.com" className="flex items-center gap-2">
// //                 <span className="text-[#790214]">✉️</span> info@winestore.com
// //               </a>
// //             </div>

// //             <div className="px-4 pt-2 pb-4 space-y-2">
// //               {navItems.map((item) => {
// //                 const isActive = activeItem === item.label;
// //                 const hasCountries = Boolean(
// //                   item.countries && item.countries.length > 0
// //                 );
// //                 const isSubOpen = mobileSubmenu === item.label;

// //                 return (
// //                   <div
// //                     key={item.label}
// //                     className="border-b border-dashed border-gray-300 pb-2"
// //                   >
// //                     <div className="flex items-center justify-between py-1">
// //                       <Link
// //                         href={item.href}
// //                         onClick={() => {
// //                           setActiveItem(item.label);
// //                           if (!hasCountries) setIsOpen(false);
// //                         }}
// //                         className={`text-base font-medium transition-colors ${
// //                           isActive
// //                             ? "text-[#790214] font-semibold"
// //                             : "text-[#1a1a1a] hover:text-[#790214]"
// //                         }`}
// //                       >
// //                         {item.label}
// //                       </Link>

// //                       {hasCountries && (
// //                         <button
// //                           onClick={() => toggleMobileSubmenu(item.label)}
// //                           className="p-1 text-[#790214] focus:outline-none"
// //                         >
// //                           <svg
// //                             className={`w-5 h-5 transition-transform duration-200 ${
// //                               isSubOpen ? "rotate-180" : ""
// //                             }`}
// //                             fill="none"
// //                             stroke="currentColor"
// //                             viewBox="0 0 24 24"
// //                           >
// //                             <path
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                               strokeWidth={2}
// //                               d="M19 9l-7 7-7-7"
// //                             />
// //                           </svg>
// //                         </button>
// //                       )}
// //                     </div>

// //                     {hasCountries && isSubOpen && (
// //                       <div className="mt-2 bg-[#363543] p-3 rounded-md text-white">
// //                         <ul className="space-y-1">
// //                           {item.countries.map((country, idx) => (
// //                             <li key={idx}>
// //                               <Link
// //                                 href={country.href}
// //                                 onClick={() => {
// //                                   setActiveItem(item.label);
// //                                   setIsOpen(false);
// //                                 }}
// //                                 className="text-sm text-gray-300 hover:text-white block py-1 px-2 rounded hover:bg-[#8b263e]/50"
// //                               >
// //                                 &rsaquo; {country.label}
// //                               </Link>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                     )}
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </header>

// <header className="sticky top-0 z-50 w-full bg-[#fbf9f5] text-[#741C29] shadow-md">

//   {/* =========================================================
//       HEADER MAIN BORDER
//   ========================================================== */}
//   <div className="relative border-y border-dashed border-[#741C29]/40">

//     <div className="mx-auto w-full max-w-[1600px] px-3 xs:px-4 sm:px-5 md:px-7 lg:px-8 xl:px-10 2xl:px-12">

//       {/* =====================================================
//           DESKTOP / TABLET MAIN ROW
//       ====================================================== */}
//       <div
//         className="
//           relative
//           flex
//           min-h-[68px]
//           items-center
//           justify-between
//           gap-3
//           sm:min-h-[72px]
//           sm:gap-4
//           md:min-h-[76px]
//           md:gap-5
//           lg:min-h-[82px]
//           lg:gap-6
//           xl:min-h-[88px]
//           xl:gap-8
//           2xl:min-h-[92px]
//         "
//       >

//         {/* ===================================================
//             LEFT — LOGO
//         ==================================================== */}
//         <Link
//           href="/"
//           className="
//             relative
//             z-30
//             flex
//             flex-shrink-0
//             items-center
//             justify-start
//             outline-none
//           "
//         >
//           <Image
//             src="/Logo_CD1-removebg-preview.png"
//             alt="Ciao Daniel Logo"
//             width={220}
//             height={80}
//             priority
//             quality={100}
//             className="
//               block
//               h-auto
//               w-[125px]
//               object-contain

//               xs:w-[135px]

//               sm:w-[150px]

//               md:w-[165px]

//               lg:w-[180px]

//               xl:w-[205px]

//               2xl:w-[220px]
//             "
//           />
//         </Link>


//         {/* ===================================================
//             CENTER — DESKTOP NAVIGATION
//         ==================================================== */}
//         <nav
//           className="
//             hidden
//             flex-1
//             items-center
//             justify-center
//             lg:flex
//             lg:gap-4
//             xl:gap-6
//             2xl:gap-8
//           "
//         >

//           {navItems.map((item) => {

//             const isActive = activeItem === item.label;

//             const hasCountries = Boolean(
//               item.countries &&
//               item.countries.length > 0
//             );

//             return (
//               <div
//                 key={item.label}
//                 className="
//                   group
//                   relative
//                   flex
//                   h-full
//                   items-center
//                   py-6
//                   lg:py-7
//                   xl:py-8
//                 "
//               >

//                 {/* ==========================================
//                     NAV LINK
//                 =========================================== */}
//                 <Link
//                   href={item.href}
//                   onClick={() => setActiveItem(item.label)}
//                   className={`
//                     relative
//                     flex
//                     items-center
//                     gap-1
//                     whitespace-nowrap
//                     font-philosopher
//                     tracking-wide
//                     transition-colors
//                     duration-200

//                     text-sm
//                     lg:text-[15px]
//                     xl:text-base
//                     2xl:text-lg

//                     ${
//                       isActive
//                         ? "text-[#790214]"
//                         : "text-[#1a1a1a] hover:text-[#790214]"
//                     }

//                     after:absolute
//                     after:-bottom-2
//                     after:left-0
//                     after:h-[2px]
//                     after:bg-[#790214]
//                     after:transition-all
//                     after:duration-300

//                     ${
//                       isActive
//                         ? "after:w-full"
//                         : "after:w-0 group-hover:after:w-full"
//                     }
//                   `}
//                 >

//                   {item.label}

//                   {/* Dropdown Arrow */}
//                   {hasCountries && (
//                     <svg
//                       className="
//                         h-3.5
//                         w-3.5
//                         flex-shrink-0
//                         transition-transform
//                         duration-300
//                         group-hover:rotate-180
//                         xl:h-4
//                         xl:w-4
//                       "
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M19 9l-7 7-7-7"
//                       />
//                     </svg>
//                   )}

//                 </Link>


//                 {/* ==========================================
//                     DESKTOP DROPDOWN
//                 =========================================== */}
//                 {hasCountries && (
//                   <div
//                     className="
//                       invisible
//                       absolute
//                       left-1/2
//                       top-full
//                       z-[100]
//                       w-52
//                       -translate-x-1/2
//                       translate-y-2
//                       overflow-hidden
//                       rounded-b-lg
//                       bg-[#363543]
//                       opacity-0
//                       shadow-2xl
//                       transition-all
//                       duration-200
//                       group-hover:visible
//                       group-hover:translate-y-0
//                       group-hover:opacity-100

//                       xl:w-56
//                       2xl:w-60
//                     "
//                   >

//                     <ul className="py-2.5">

//                       {/* Heading */}
//                       <li>
//                         <div
//                           className="
//                             border-b
//                             border-white/20
//                             px-5
//                             py-2.5
//                             font-philosopher
//                             text-[10px]
//                             tracking-[0.22em]
//                             text-white
//                             xl:text-xs
//                           "
//                         >
//                           <Link href="/shop">
//                             {item.heading}
//                           </Link>
//                         </div>
//                       </li>


//                       {/* Countries */}
//                       {item.countries.map((country, idx) => (
//                         <li key={idx}>

//                           <Link
//                             href={country.href}
//                             onClick={() =>
//                               setActiveItem(item.label)
//                             }
//                             className="
//                               flex
//                               items-center
//                               gap-2
//                               px-5
//                               py-2.5
//                               text-xs
//                               text-gray-300
//                               transition-all
//                               duration-150
//                               hover:bg-[#8b263e]/80
//                               hover:text-white

//                               xl:text-sm
//                             "
//                           >

//                             <span className="text-xs opacity-70">
//                               &rsaquo;
//                             </span>

//                             {country.label}

//                           </Link>

//                         </li>
//                       ))}

//                     </ul>

//                   </div>
//                 )}

//               </div>
//             );
//           })}

//         </nav>


//         {/* ===================================================
//             RIGHT — CONTACT DESKTOP
//         ==================================================== */}
//         <div
//           className="
//             hidden
//             flex-shrink-0
//             items-center
//             justify-end
//             font-serif
//             lg:flex
//             lg:gap-3
//             lg:text-[10px]
//             xl:gap-5
//             xl:text-xs
//             2xl:gap-6
//             2xl:text-sm
//           "
//         >

//           {/* Phone */}
//           <a
//             href="tel:+1234567890"
//             className="
//               flex
//               items-center
//               gap-1.5
//               whitespace-nowrap
//               font-normal
//               text-[#2a110b]
//               transition-colors
//               hover:text-[#790214]
//             "
//           >

//             <svg
//               className="
//                 h-3.5
//                 w-3.5
//                 flex-shrink-0
//                 text-[#790214]

//                 xl:h-4
//                 xl:w-4
//               "
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a2 2 0 011.298 1.897V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//               />
//             </svg>

//             <span>
//               440.812.3776
//             </span>

//           </a>


//           {/* Email */}
//           <a
//             href="mailto:ciaodaniel@gmail.com"
//             className="
//               flex
//               items-center
//               gap-1.5
//               whitespace-nowrap
//               text-[#2a110b]
//               transition-colors
//               hover:text-[#790214]
//             "
//           >

//             <svg
//               className="
//                 h-3.5
//                 w-3.5
//                 flex-shrink-0
//                 text-[#8b263e]

//                 xl:h-4
//                 xl:w-4
//               "
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//               />
//             </svg>

//             <span>
//               ciaodaniel@gmail.com
//             </span>

//           </a>

//         </div>


//         {/* ===================================================
//             MOBILE / TABLET MENU BUTTON
//         ==================================================== */}
//         <div
//           className="
//             flex
//             flex-shrink-0
//             items-center
//             lg:hidden
//           "
//         >

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             type="button"
//             aria-label="Toggle Menu"
//             aria-expanded={isOpen}
//             className="
//               flex
//               h-10
//               w-10
//               items-center
//               justify-center
//               rounded-md
//               text-[#2a110b]
//               transition-all
//               duration-200
//               hover:bg-[#790214]/5
//               hover:text-[#790214]
//               focus:outline-none

//               sm:h-11
//               sm:w-11

//               md:h-12
//               md:w-12
//             "
//           >

//             <svg
//               className="
//                 h-6
//                 w-6

//                 sm:h-7
//                 sm:w-7

//                 md:h-7
//                 md:w-7
//               "
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >

//               {isOpen ? (

//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.8}
//                   d="M6 18L18 6M6 6l12 12"
//                 />

//               ) : (

//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={1.8}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />

//               )}

//             </svg>

//           </button>

//         </div>

//       </div>
//     </div>


//     {/* =======================================================
//         MOBILE / TABLET DRAWER
//     ======================================================== */}
//     {isOpen && (

//       <div
//         className="
//           relative
//           z-40
//           border-t
//           border-dashed
//           border-[#8b263e]/40
//           bg-[#fbf9f5]
//           shadow-lg
//           lg:hidden
//         "
//       >

//         {/* ===================================================
//             CONTACT MOBILE / TABLET
//         ==================================================== */}
//         <div
//           className="
//             grid
//             grid-cols-1
//             gap-2
//             border-b
//             border-[#741C29]/10
//             px-4
//             py-3
//             font-serif
//             text-sm
//             text-[#2a110b]

//             sm:grid-cols-2
//             sm:gap-4
//             sm:px-6
//             sm:py-4

//             md:px-8
//           "
//         >

//           {/* Phone */}
//           <a
//             href="tel:+1234567890"
//             className="
//               flex
//               items-center
//               gap-2
//               rounded-md
//               px-2
//               py-2
//               transition-colors
//               hover:bg-[#790214]/5
//               hover:text-[#790214]
//             "
//           >

//             <svg
//               className="h-4 w-4 text-[#790214]"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a11.042 11.042 0 005.516 5.516l1.13-2.257a2 2 0 012.847-.936l4.493 1.498A2 2 0 0121 19v1a2 2 0 01-2 2h-1C9.716 22 3 15.284 3 7V5z"
//               />
//             </svg>

//             <span>
//               440.812.3776
//             </span>

//           </a>


//           {/* Email */}
//           <a
//             href="mailto:ciaodaniel@gmail.com"
//             className="
//               flex
//               items-center
//               gap-2
//               rounded-md
//               px-2
//               py-2
//               transition-colors
//               hover:bg-[#790214]/5
//               hover:text-[#790214]
//             "
//           >

//             <svg
//               className="h-4 w-4 text-[#8b263e]"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
//               />
//             </svg>

//             <span className="break-all">
//               ciaodaniel@gmail.com
//             </span>

//           </a>

//         </div>


//         {/* ===================================================
//             MOBILE / TABLET NAV
//         ==================================================== */}
//         <div
//           className="
//             px-4
//             py-3

//             sm:px-6
//             sm:py-4

//             md:px-8
//             md:py-5
//           "
//         >

//           <div className="mx-auto w-full max-w-3xl space-y-1">

//             {navItems.map((item) => {

//               const isActive =
//                 activeItem === item.label;

//               const hasCountries = Boolean(
//                 item.countries &&
//                 item.countries.length > 0
//               );

//               const isSubOpen =
//                 mobileSubmenu === item.label;

//               return (

//                 <div
//                   key={item.label}
//                   className="
//                     border-b
//                     border-dashed
//                     border-gray-300
//                     last:border-b-0
//                   "
//                 >

//                   {/* ========================================
//                       MAIN MOBILE NAV ROW
//                   ========================================= */}
//                   <div
//                     className="
//                       flex
//                       min-h-[48px]
//                       items-center
//                       justify-between
//                       gap-3
//                     "
//                   >

//                     {/* Main Link */}
//                     <Link
//                       href={item.href}
//                       onClick={() => {

//                         setActiveItem(item.label);

//                         if (!hasCountries) {
//                           setIsOpen(false);
//                         }

//                       }}
//                       className={`
//                         flex-1
//                         py-3
//                         font-philosopher
//                         text-base
//                         tracking-wide
//                         transition-colors

//                         sm:text-[17px]

//                         md:text-lg

//                         ${
//                           isActive
//                             ? "font-semibold text-[#790214]"
//                             : "text-[#1a1a1a] hover:text-[#790214]"
//                         }
//                       `}
//                     >

//                       {item.label}

//                     </Link>


//                     {/* Submenu Toggle */}
//                     {hasCountries && (

//                       <button
//                         type="button"
//                         onClick={() =>
//                           toggleMobileSubmenu(item.label)
//                         }
//                         aria-label={`Toggle ${item.label} submenu`}
//                         aria-expanded={isSubOpen}
//                         className="
//                           flex
//                           h-9
//                           w-9
//                           flex-shrink-0
//                           items-center
//                           justify-center
//                           rounded-md
//                           text-[#790214]
//                           transition-colors
//                           hover:bg-[#790214]/5
//                           focus:outline-none

//                           sm:h-10
//                           sm:w-10
//                         "
//                       >

//                         <svg
//                           className={`
//                             h-5
//                             w-5
//                             transition-transform
//                             duration-300

//                             ${
//                               isSubOpen
//                                 ? "rotate-180"
//                                 : ""
//                             }
//                           `}
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>

//                       </button>

//                     )}

//                   </div>


//                   {/* ========================================
//                       MOBILE SUBMENU
//                   ========================================= */}
//                   {hasCountries && isSubOpen && (

//                     <div
//                       className="
//                         mb-3
//                         overflow-hidden
//                         rounded-md
//                         bg-[#363543]
//                         shadow-md
//                       "
//                     >

//                       {/* Heading */}
//                       {item.heading && (

//                         <Link
//                           href="/shop"
//                           onClick={() => setIsOpen(false)}
//                           className="
//                             block
//                             border-b
//                             border-white/15
//                             px-4
//                             py-3
//                             font-philosopher
//                             text-[10px]
//                             tracking-[0.2em]
//                             text-white
//                             transition-colors
//                             hover:bg-white/5

//                             sm:text-xs
//                           "
//                         >
//                           {item.heading}
//                         </Link>

//                       )}


//                       {/* Countries */}
//                       <ul className="p-2">

//                         {item.countries.map(
//                           (country, idx) => (

//                             <li key={idx}>

//                               <Link
//                                 href={country.href}
//                                 onClick={() => {

//                                   setActiveItem(
//                                     item.label
//                                   );

//                                   setIsOpen(false);

//                                 }}
//                                 className="
//                                   flex
//                                   items-center
//                                   gap-2
//                                   rounded
//                                   px-3
//                                   py-2.5
//                                   text-sm
//                                   text-gray-300
//                                   transition-all
//                                   duration-150
//                                   hover:bg-[#8b263e]/60
//                                   hover:text-white

//                                   sm:text-[15px]
//                                 "
//                               >

//                                 <span className="text-xs opacity-70">
//                                   &rsaquo;
//                                 </span>

//                                 {country.label}

//                               </Link>

//                             </li>

//                           )
//                         )}

//                       </ul>

//                     </div>

//                   )}

//                 </div>

//               );

//             })}

//           </div>

//         </div>

//       </div>

//     )}

//   </div>

// </header>
//   );
// }






"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  // =========================================================
  // NAV ITEMS
  // =========================================================
  const navItems = [
    {
      label: "Home",
      href: "/",
    },

    {
      label: "About Us",
      href: "/about",
    },

    {
      label: "Portfolio",
      href: "/shop",
      heading: "OUR COUNTRY WINES",

      countries: [
        {
          label: "Italy",
          href: "/italy",
        },
        {
          label: "Spain",
          href: "/Spain",
        },
        {
          label: "Argentina",
          href: "/Argentina",
        },
        {
          label: "France",
          href: "/france",
        },
        {
          label: "California",
          href: "/california",
        },
        {
          label: "Oregon",
          href: "/Oregon",
        },
        {
          label: "Portugal",
          href: "/Portugal",
        },
        {
          label: "Germany",
          href: "/Germany",
        },
        {
          label: "Ohio",
          href: "/Ohio",
        },
        {
          label: "New Zealand",
          href: "/New-Zealand",
        },
      ],
    },

    {
      label: "Contact",
      href: "/contact",
    },

    {
      label: "Why Choose Us",
      href: "/why-us",
    },
  ];

  // =========================================================
  // NORMALIZE URL
  // =========================================================
  const normalizePath = (path) => {
    if (!path) return "/";

    const normalized = path
      .replace(/\/+$/, "")
      .toLowerCase();

    return normalized || "/";
  };

  // =========================================================
  // CHECK MAIN NAV ACTIVE
  // =========================================================
  const isPathActive = (item) => {
    const currentPath = normalizePath(pathname);
    const itemPath = normalizePath(item.href);

    // -------------------------------------------------------
    // HOME
    // -------------------------------------------------------
    if (itemPath === "/") {
      return currentPath === "/";
    }

    // -------------------------------------------------------
    // PORTFOLIO
    // -------------------------------------------------------
    if (itemPath === "/shop") {
      // /shop
      if (
        currentPath === "/shop" ||
        currentPath.startsWith("/shop/")
      ) {
        return true;
      }

      // Country pages
      if (item.countries?.length) {
        return item.countries.some((country) => {
          const countryPath = normalizePath(country.href);

          return (
            currentPath === countryPath ||
            currentPath.startsWith(`${countryPath}/`)
          );
        });
      }

      return false;
    }

    // -------------------------------------------------------
    // OTHER PAGES
    // -------------------------------------------------------
    return (
      currentPath === itemPath ||
      currentPath.startsWith(`${itemPath}/`)
    );
  };

  // =========================================================
  // CHECK COUNTRY ACTIVE
  // =========================================================
  const isCountryActive = (country) => {
    const currentPath = normalizePath(pathname);
    const countryPath = normalizePath(country.href);

    return (
      currentPath === countryPath ||
      currentPath.startsWith(`${countryPath}/`)
    );
  };

  // =========================================================
  // MOBILE SUBMENU
  // =========================================================
  const toggleMobileSubmenu = (label) => {
    setMobileSubmenu((prev) =>
      prev === label ? null : label
    );
  };

  // =========================================================
  // CLOSE MOBILE MENU
  // =========================================================
  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobileSubmenu(null);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        bg-[#fbf9f5]
        text-[#741C29]
        shadow-md
      "
    >
      {/* =====================================================
          HEADER MAIN BORDER
      ====================================================== */}
      <div
        className="
          relative
          border-y
          border-dashed
          border-[#741C29]/40
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-3
            xs:px-4
            sm:px-5
            md:px-7
            lg:px-8
            xl:px-10
            2xl:px-12
          "
        >
          {/* =================================================
              MAIN HEADER ROW
          ================================================== */}
          <div
            className="
              relative
              flex
              min-h-[68px]
              items-center
              justify-between
              gap-3

              sm:min-h-[72px]
              sm:gap-4

              md:min-h-[76px]
              md:gap-5

              lg:min-h-[82px]
              lg:gap-6

              xl:min-h-[88px]
              xl:gap-8

              2xl:min-h-[92px]
            "
          >
            {/* =================================================
                LOGO
            ================================================== */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="
                relative
                z-30
                flex
                flex-shrink-0
                items-center
                justify-start
                outline-none
              "
            >
              <Image
                src="/Logo_CD1-removebg-preview.png"
                alt="Ciao Daniel Logo"
                width={220}
                height={80}
                priority
                quality={100}
                className="
                  block
                  h-auto
                  w-[125px]
                  object-contain

                  xs:w-[135px]

                  sm:w-[150px]

                  md:w-[165px]

                  lg:w-[180px]

                  xl:w-[205px]

                  2xl:w-[220px]
                "
              />
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================== */}
            <nav
              className="
                hidden
                flex-1
                items-center
                justify-center
                lg:flex
                lg:gap-4
                xl:gap-6
                2xl:gap-8
              "
            >
              {navItems.map((item) => {
                const isActive = isPathActive(item);

                const hasCountries = Boolean(
                  item.countries &&
                    item.countries.length > 0
                );

                return (
                  <div
                    key={item.label}
                    className="
                      group
                      relative
                      flex
                      h-full
                      items-center
                      py-6

                      lg:py-7

                      xl:py-8
                    "
                  >
                    {/* =========================================
                        MAIN NAV LINK
                    ========================================== */}
                    <Link
                      href={item.href}
                      className={`
                        relative
                        flex
                        items-center
                        gap-1
                        whitespace-nowrap
                        font-philosopher
                        tracking-wide
                        transition-all
                        duration-300

                        text-sm

                        lg:text-[15px]

                        xl:text-base

                        2xl:text-lg

                        ${
                          isActive
                            ? "text-[#790214] font-medium"
                            : "text-[#1a1a1a] hover:text-[#790214]"
                        }

                        after:absolute
                        after:-bottom-2
                        after:left-0
                        after:h-[2px]
                        after:rounded-full
                        after:bg-[#790214]
                        after:transition-all
                        after:duration-300

                        ${
                          isActive
                            ? "after:w-full"
                            : "after:w-0 group-hover:after:w-full"
                        }
                      `}
                    >
                      {item.label}

                      {/* Dropdown Arrow */}
                      {hasCountries && (
                        <svg
                          className="
                            h-3.5
                            w-3.5
                            flex-shrink-0
                            transition-transform
                            duration-300
                            group-hover:rotate-180

                            xl:h-4
                            xl:w-4
                          "
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>

                    {/* =========================================
                        DESKTOP PORTFOLIO DROPDOWN
                    ========================================== */}
                    {hasCountries && (
                      <div
                        className="
                          invisible
                          absolute
                          left-1/2
                          top-full
                          z-[100]
                          w-52
                          -translate-x-1/2
                          translate-y-2
                          overflow-hidden
                          rounded-b-lg
                          bg-[#363543]
                          opacity-0
                          shadow-2xl
                          transition-all
                          duration-200

                          group-hover:visible
                          group-hover:translate-y-0
                          group-hover:opacity-100

                          xl:w-56

                          2xl:w-60
                        "
                      >
                        <ul className="py-2.5">
                          {/* Dropdown Heading */}
                          <li>
                            <Link
                              href="/shop"
                              className="
                                block
                                border-b
                                border-white/20
                                px-5
                                py-2.5
                                font-philosopher
                                text-[10px]
                                tracking-[0.22em]
                                text-white
                                transition-colors
                                hover:bg-white/5

                                xl:text-xs
                              "
                            >
                              {item.heading}
                            </Link>
                          </li>

                          {/* Countries */}
                          {item.countries.map(
                            (country) => {
                              const countryActive =
                                isCountryActive(country);

                              return (
                                <li
                                  key={country.label}
                                >
                                  <Link
                                    href={country.href}
                                    className={`
                                      flex
                                      items-center
                                      gap-2
                                      px-5
                                      py-2.5
                                      text-xs
                                      transition-all
                                      duration-200

                                      xl:text-sm

                                      ${
                                        countryActive
                                          ? "bg-[#8b263e] text-white font-medium"
                                          : "text-gray-300 hover:bg-[#8b263e]/80 hover:text-white"
                                      }
                                    `}
                                  >
                                    <span
                                      className={`
                                        text-xs
                                        transition-transform
                                        duration-200
                                        ${
                                          countryActive
                                            ? "translate-x-1 opacity-100"
                                            : "opacity-70"
                                        }
                                      `}
                                    >
                                      &rsaquo;
                                    </span>

                                    {country.label}
                                  </Link>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* =================================================
                RIGHT — DESKTOP CONTACT
            ================================================== */}
            <div
              className="
                hidden
                flex-shrink-0
                items-center
                justify-end
                font-serif

                lg:flex
                lg:gap-3
                lg:text-[10px]

                xl:gap-5
                xl:text-xs

                2xl:gap-6
                2xl:text-sm
              "
            >
              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="
                  flex
                  items-center
                  gap-1.5
                  whitespace-nowrap
                  font-normal
                  text-[#2a110b]
                  transition-colors
                  hover:text-[#790214]
                "
              >
                <svg
                  className="
                    h-3.5
                    w-3.5
                    flex-shrink-0
                    text-[#790214]

                    xl:h-4
                    xl:w-4
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A2 2 0 0121 7.51V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <span>
                  440.812.3776
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:ciaodaniel@gmail.com"
                className="
                  flex
                  items-center
                  gap-1.5
                  whitespace-nowrap
                  text-[#2a110b]
                  transition-colors
                  hover:text-[#790214]
                "
              >
                <svg
                  className="
                    h-3.5
                    w-3.5
                    flex-shrink-0
                    text-[#8b263e]

                    xl:h-4
                    xl:w-4
                  "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span>
                  ciaodaniel@gmail.com
                </span>
              </a>
            </div>

            {/* =================================================
                MOBILE / TABLET MENU BUTTON
            ================================================== */}
            <div
              className="
                flex
                flex-shrink-0
                items-center
                lg:hidden
              "
            >
              <button
                onClick={() =>
                  setIsOpen((prev) => !prev)
                }
                type="button"
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-md
                  text-[#2a110b]
                  transition-all
                  duration-200
                  hover:bg-[#790214]/5
                  hover:text-[#790214]
                  focus:outline-none

                  sm:h-11
                  sm:w-11

                  md:h-12
                  md:w-12
                "
              >
                <svg
                  className="
                    h-6
                    w-6

                    sm:h-7
                    sm:w-7

                    md:h-7
                    md:w-7
                  "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE / TABLET DRAWER
        ====================================================== */}
        {isOpen && (
          <div
            className="
              relative
              z-40
              border-t
              border-dashed
              border-[#8b263e]/40
              bg-[#fbf9f5]
              shadow-lg
              lg:hidden
            "
          >
            {/* =================================================
                MOBILE CONTACT
            ================================================== */}
            <div
              className="
                grid
                grid-cols-1
                gap-2
                border-b
                border-[#741C29]/10
                px-4
                py-3
                font-serif
                text-sm
                text-[#2a110b]

                sm:grid-cols-2
                sm:gap-4
                sm:px-6
                sm:py-4

                md:px-8
              "
            >
              {/* Phone */}
              <a
                href="tel:+1234567890"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  px-2
                  py-2
                  transition-colors
                  hover:bg-[#790214]/5
                  hover:text-[#790214]
                "
              >
                <svg
                  className="h-4 w-4 text-[#790214]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a11.042 11.042 0 011.13-2.257l4.493 1.498A2 2 0 0121 19v1a2 2 0 01-2 2h-1C9.716 22 3 15.284 3 7V5z"
                  />
                </svg>

                <span>
                  440.812.3776
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:ciaodaniel@gmail.com"
                className="
                  flex
                  items-center
                  gap-2
                  rounded-md
                  px-2
                  py-2
                  transition-colors
                  hover:bg-[#790214]/5
                  hover:text-[#790214]
                "
              >
                <svg
                  className="h-4 w-4 text-[#8b263e]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <span className="break-all">
                  ciaodaniel@gmail.com
                </span>
              </a>
            </div>

            {/* =================================================
                MOBILE NAVIGATION
            ================================================== */}
            <div
              className="
                px-4
                py-3

                sm:px-6
                sm:py-4

                md:px-8
                md:py-5
              "
            >
              <div
                className="
                  mx-auto
                  w-full
                  max-w-3xl
                  space-y-1
                "
              >
                {navItems.map((item) => {
                  const isActive =
                    isPathActive(item);

                  const hasCountries = Boolean(
                    item.countries &&
                      item.countries.length > 0
                  );

                  const isSubOpen =
                    mobileSubmenu === item.label;

                  return (
                    <div
                      key={item.label}
                      className="
                        border-b
                        border-dashed
                        border-gray-300
                        last:border-b-0
                      "
                    >
                      {/* =====================================
                          MOBILE MAIN ROW
                      ====================================== */}
                      <div
                        className="
                          flex
                          min-h-[48px]
                          items-center
                          justify-between
                          gap-3
                        "
                      >
                        {/* Main Link */}
                        <Link
                          href={item.href}
                          onClick={() => {
                            if (!hasCountries) {
                              closeMobileMenu();
                            }
                          }}
                          className={`
                            relative
                            flex-1
                            py-3
                            font-philosopher
                            text-base
                            tracking-wide
                            transition-all
                            duration-300

                            sm:text-[17px]

                            md:text-lg

                            ${
                              isActive
                                ? "font-semibold text-[#790214]"
                                : "text-[#1a1a1a] hover:text-[#790214]"
                            }

                            after:absolute
                            after:bottom-[7px]
                            after:left-0
                            after:h-[2px]
                            after:rounded-full
                            after:bg-[#790214]
                            after:transition-all
                            after:duration-300

                            ${
                              isActive
                                ? "after:w-10"
                                : "after:w-0"
                            }
                          `}
                        >
                          {item.label}
                        </Link>

                        {/* Submenu Toggle */}
                        {hasCountries && (
                          <button
                            type="button"
                            onClick={() =>
                              toggleMobileSubmenu(
                                item.label
                              )
                            }
                            aria-label={`Toggle ${item.label} submenu`}
                            aria-expanded={isSubOpen}
                            className="
                              flex
                              h-9
                              w-9
                              flex-shrink-0
                              items-center
                              justify-center
                              rounded-md
                              text-[#790214]
                              transition-colors
                              hover:bg-[#790214]/5
                              focus:outline-none

                              sm:h-10
                              sm:w-10
                            "
                          >
                            <svg
                              className={`
                                h-5
                                w-5
                                transition-transform
                                duration-300

                                ${
                                  isSubOpen
                                    ? "rotate-180"
                                    : ""
                                }
                              `}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {/* =====================================
                          MOBILE COUNTRY SUBMENU
                      ====================================== */}
                      {hasCountries &&
                        isSubOpen && (
                          <div
                            className="
                              mb-3
                              overflow-hidden
                              rounded-md
                              bg-[#363543]
                              shadow-md
                            "
                          >
                            {/* Heading */}
                            {item.heading && (
                              <Link
                                href="/shop"
                                onClick={
                                  closeMobileMenu
                                }
                                className="
                                  block
                                  border-b
                                  border-white/15
                                  px-4
                                  py-3
                                  font-philosopher
                                  text-[10px]
                                  tracking-[0.2em]
                                  text-white
                                  transition-colors
                                  hover:bg-white/5

                                  sm:text-xs
                                "
                              >
                                {item.heading}
                              </Link>
                            )}

                            {/* Countries */}
                            <ul className="p-2">
                              {item.countries.map(
                                (country) => {
                                  const countryActive =
                                    isCountryActive(
                                      country
                                    );

                                  return (
                                    <li
                                      key={
                                        country.label
                                      }
                                    >
                                      <Link
                                        href={
                                          country.href
                                        }
                                        onClick={
                                          closeMobileMenu
                                        }
                                        className={`
                                          flex
                                          items-center
                                          gap-2
                                          rounded
                                          px-3
                                          py-2.5
                                          text-sm
                                          transition-all
                                          duration-200

                                          sm:text-[15px]

                                          ${
                                            countryActive
                                              ? "bg-[#8b263e] font-medium text-white"
                                              : "text-gray-300 hover:bg-[#8b263e]/60 hover:text-white"
                                          }
                                        `}
                                      >
                                        <span
                                          className={`
                                            text-xs
                                            ${
                                              countryActive
                                                ? "translate-x-1 opacity-100"
                                                : "opacity-70"
                                            }
                                          `}
                                        >
                                          &rsaquo;
                                        </span>

                                        {
                                          country.label
                                        }
                                      </Link>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
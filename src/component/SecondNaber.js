// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("Home");

//   const navItems = [
//     { label: "Home", href: "/" },
//     // { label: "Club", href: "#" },
//     { label: "About Us", href: "/about" },
//     // { label: "Wine Making", href: "#" },
//     // { label: "Pages", href: "#" },
//     // { label: "Elements", href: "#" },
//     { label: "Shop", href: "/shop" },
//     { label: "Visit Us", href: "/contact" },
//     { label: "why Choose Us", href: "/why-us" },
//   ];

//   return (
// <header className="sticky top-0 z-50 w-full bg-[#fbf9f5] font-serif text-[#2a110b] shadow-md">
//       {/* Dashed Top and Bottom Border Container */}
//       <div className="relative border-y border-dashed border-[#8b263e]/40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
            
//             {/* Vine Leaf Decoration (Visible on Left) */}
//             <div className="absolute left-0 top-1/2 -translate-y-1/2 h-28 w-28 pointer-events-none overflow-hidden z-10 hidden sm:block">
//               {/* Apni vine leaf PNG image yahan use karein */}
//               {/* <div className="w-full h-full relative opacity-90">
//                 <Image
//                   src="/vine-leaf.png" 
//                   alt="Vine Leaf"
//                   fill
//                   className="object-contain object-left"
//                 />
//               </div> */}
//             </div>

//             {/* Desktop Navigation Links (lg breakpoint & up) */}
//             <nav className="hidden font-philosopher lg:flex items-center  justify-center w-full space-x-8 xl:space-x-12 z-20">
//               {navItems.map((item) => {
//                 const isActive = activeItem === item.label;
//                 return (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     onClick={() => setActiveItem(item.label)}
//                     className={`text-lg transition-colors duration-200 tracking-wide font-medium ${
//                       isActive
//                         ? "text-[#8b263e] font-semibold"
//                         : "text-[#1a1a1a] hover:text-[#8b263e]"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </nav>

//             {/* Mobile & Tablet Header Controls (sm, md) */}
//             <div className="flex lg:hidden justify-between items-center w-full z-20">
//               <span className="text-xl font-semibold text-[#8b263e]">Menu</span>
              
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="p-2 rounded-md text-[#2a110b] hover:text-[#8b263e] focus:outline-none"
//                 aria-label="Toggle Menu"
//               >
//                 <svg
//                   className="h-7 w-7"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   {isOpen ? (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   ) : (
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   )}
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu (sm & md) */}
//         {isOpen && (
//           <div className="lg:hidden border-t border-dashed border-[#8b263e]/40 bg-[#fbf9f5] z-30 relative">
//             <div className="px-4 pt-2 pb-4 space-y-2 text-center">
//               {navItems.map((item) => {
//                 const isActive = activeItem === item.label;
//                 return (
//                   <Link
//                     key={item.label}
//                     href={item.href}
//                     onClick={() => {
//                       setActiveItem(item.label);
//                       setIsOpen(false);
//                     }}
//                     className={`block py-2 text-base font-medium transition-colors ${
//                       isActive
//                         ? "text-[#8b263e] font-semibold"
//                         : "text-[#1a1a1a] hover:text-[#8b263e]"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }



// "use client";

// import React, { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeItem, setActiveItem] = useState("Home");
//   const [mobileSubmenu, setMobileSubmenu] = useState(null);

//   // Navigation Data Structure - Shop menu me sirf 7 Countries hain
//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "About Us", href: "/about" },
//     {
//       label: "OURS WINES",
//       href: "/shop",
//       //  heading: "OUR COUNTRY WINES",
      
//   heading: "OUR COUNTRY WINES",
//   link: "/shop",

      
//       countries: [
//    { label: "Ohio", href: "/Ohio" },
//         { label: "California", href: "/california" },
//          { label: "Oregon", href: "/Oregon" },
//         { label: "Italy", href: "/italy" },
//            { label: "Argentina", href: "/Argentina" },
     
//         { label: "France", href: "/france" },
//         { label: "Spain", href: "/Spain" },
//           { label: "New Zealand", href: "/New-Zealand" },
//         { label: "Portugal", href: "/Portugal" },
    
//           { label: "Germany", href: "/Germany" },
//       ],
//     },
//     { label: "contact", href: "/contact" },
//     { label: "Why Choose Us", href: "/why-us" },
//   ];

//   const toggleMobileSubmenu = (label) => {
//     setMobileSubmenu((prev) => (prev === label ? null : label));
//   };

//   return (
// //     <header className="sticky top-0 z-50 w-full bg-[#fbf9f5] font-serif text-[#2a110b] shadow-md">
// //       {/* Dashed Border Container */}

// //       <div className="relative border-y border-dashed border-[#8b263e]/40">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
// //           <div className="flex items-center justify-between h-20">
            
// //             {/* Desktop Navigation Links */}
// //             <nav className="hidden lg:flex items-center justify-center w-full space-x-8 xl:space-x-12 z-20">
// //               {navItems.map((item) => {
// //                 const isActive = activeItem === item.label;
// //                 const hasCountries = Boolean(item.countries && item.countries.length > 0);

// //                 return (
// //                   <div key={item.label} className="group py-6 relative">
// //                     {/* Top Main Link */}
// //                     <Link
// //                       href={item.href}
// //                       onClick={() => setActiveItem(item.label)}
// //                       className={`text-lg transition-colors duration-200 font-philosopher  tracking-wide flex items-center gap-1.5 ${
// //                         isActive
// //                           ? "text-[#8b263e]"
// //                           : "text-[#1a1a1a] hover:text-rgb(165, 62, 76)"
// //                       }`}
// //                     >
// //                       {item.label}
// //                       {hasCountries && (
// //                         <svg
// //                           className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
// //                           fill="none"
// //                           stroke="currentColor"
// //                           viewBox="0 0 24 24"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth={2}
// //                             d="M19 9l-7 7-7-7"
// //                           />
// //                         </svg>
// //                       )}
// //                     </Link>

// //                     {/* Simple Dropdown for 7 Countries (Centered under Shop) */}
// //                     {hasCountries && (
// //                       <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-60 bg-[#363543] text-white shadow-xl z-50 rounded-b-md overflow-hidden transition-all duration-300">
// //                         <ul className="py-3">
// //      <li>
// // <div className="px-5 py-2.5 text-xs tracking-[0.25em] text-white border-b border-white/20">
// //   <Link href="/shop">
// //     {item.heading}
// //   </Link>
// // </div>
// // </li>
// //                           {item.countries.map((country, idx) => (
// //                             <li key={idx}>
// //                               <Link
// //                                 href={country.href}
// //                                 onClick={() => setActiveItem(item.label)}
// //                                 className="px-5 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-[#8b263e]/80 transition-all duration-150 flex items-center gap-2"
// //                               >
// //                                 <span className="text-xs opacity-70">&rsaquo;</span>
// //                                 {country.label}
// //                               </Link>
// //                             </li>
// //                           ))}
// //                         </ul>
// //                       </div>
// //                     )}
// //                   </div>
// //                 );
// //               })}
// //             </nav>

// //             {/* Mobile & Tablet Header Controls */}
// //             <div className="flex lg:hidden justify-between items-center w-full z-20">
// //               <span className="text-xl font-semibold text-[#8b263e]">Menu</span>
              
// //               <button
// //                 onClick={() => setIsOpen(!isOpen)}
// //                 type="button"
// //                 className="p-2 rounded-md text-[#2a110b] hover:text-[#8b263e] focus:outline-none"
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

// //         {/* Mobile Dropdown Menu */}
// //         {isOpen && (
// //           <div className="lg:hidden border-t border-dashed border-[#8b263e]/40 bg-[#fbf9f5] z-30 relative">
// //             <div className="px-4 pt-2 pb-4 space-y-2">
// //               {navItems.map((item) => {
// //                 const isActive = activeItem === item.label;
// //                 const hasCountries = Boolean(item.countries && item.countries.length > 0);
// //                 const isSubOpen = mobileSubmenu === item.label;

// //                 return (
// //                   <div key={item.label} className="border-b border-dashed border-gray-300 pb-2">
// //                     <div className="flex items-center justify-between py-1">
// //                       <Link
// //                         href={item.href}
// //                         onClick={() => {
// //                           setActiveItem(item.label);
// //                           if (!hasCountries) setIsOpen(false);
// //                         }}
// //                         className={`text-base font-medium transition-colors ${
// //                           isActive
// //                             ? "text-[#8b263e] font-semibold"
// //                             : "text-[#1a1a1a] hover:text-[#8b263e]"
// //                         }`}
// //                       >
// //                         {item.label}
// //                       </Link>

// //                       {hasCountries && (
// //                         <button
// //                           onClick={() => toggleMobileSubmenu(item.label)}
// //                           className="p-1 text-[#8b263e] focus:outline-none"
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

// //                     {/* Mobile Submenu for Countries */}
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




// <header className="sticky top-0 z-50 w-full bg-[rgb(84_1_34)] font-serif text-white shadow-md">
//   {/* Dashed Border Container */}
//   <div className="relative border-y border-dashed border-[#8b263e]/40">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

//       <div className="flex items-center justify-between h-20">

//         {/* LEFT SIDE - LOGO */}
//         <div className="hidden lg:flex  items-center w-48 z-30">
//           <Link href="/" className="flex items-center">
//             <img
//               src="https://winesfromitaly.com/cdn/shop/files/logo.png?v=1730282032&width=265"
//               alt="Logo"
//               className="h-12 w-auto object-contain"
//             />
//           </Link>
//         </div>

//         {/* DESKTOP NAVIGATION */}
//         <nav className="hidden lg:flex items-center justify-center flex-1 space-x-8 xl:space-x-12 z-20">
//           {navItems.map((item) => {
//             const isActive = activeItem === item.label;
//             const hasCountries = Boolean(
//               item.countries && item.countries.length > 0
//             );

//             return (
//               <div key={item.label} className="group py-6 relative">

//                 <Link
//                   href={item.href}
//                   onClick={() => setActiveItem(item.label)}
//       className={`text-lg transition-colors duration-200 font-philosopher tracking-wide flex items-center gap-1.5 ${
//   isActive
//     ? "text-white border-b-2 border-white pb-2"
//     : "text-white hover:text-gray-200"
// }`}
//                 >
//                   {item.label}

//                   {hasCountries && (
//                     <svg
//                       className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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

//                 {/* Desktop Dropdown */}
//                 {hasCountries && (
//                   <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-60 bg-[#363543] text-white shadow-xl z-50 rounded-b-md overflow-hidden">
//                     <ul className="py-3">

//                       <li>
//                         <div className="px-5 py-2.5 text-xs tracking-[0.25em] text-white border-b border-white/20">
//                           <Link href="/shop">
//                             {item.heading}
//                           </Link>
//                         </div>
//                       </li>

//                       {item.countries.map((country, idx) => (
//                         <li key={idx}>
//                           <Link
//                             href={country.href}
//                             onClick={() => setActiveItem(item.label)}
//                             className="px-5 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-[#8b263e]/80 transition-all duration-150 flex items-center gap-2"
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

//         {/* RIGHT SIDE - PHONE + LOGO/ICON */}
//         <div className="hidden lg:flex items-center justify-end gap-4 w-48 z-30">

//           {/* Phone */}
//           <a
//             href="tel:+1234567890"
//             className="flex items-center gap-2 text-sm font-philosopher text-white hover:text-white transition-colors"
//           >
//             <svg
//               className="w-5 h-5 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.8}
//                 d="M3 5.5C3 4.67 3.67 4 4.5 4h2.1c.6 0 1.13.4 1.3.98l.76 2.67c.16.55-.02 1.14-.45 1.5l-1.35 1.1a13.5 13.5 0 0 0 5.89 5.89l1.1-1.35c.36-.43.95-.61 1.5-.45l2.67.76c.58.17.98.7.98 1.3v2.1c0 .83-.67 1.5-1.5 1.5C10.04 20 4 13.96 4 6.5"
//               />
//             </svg>

//             <span>+1 234 567 890</span>
//           </a>

//           {/* Small Logo / Icon */}
//           {/* <Link href="/" className="flex-shrink-0">
//             <img
//               src="/logo-icon.png"
//               alt="Logo"
//               className="h-10 w-10 object-contain"
//             />
//           </Link> */}

//         </div>

//         {/* MOBILE & TABLET HEADER */}
//         <div className="flex lg:hidden justify-between items-center w-full z-20">

//           {/* Mobile Logo */}
//           <Link href="/" className="flex items-center">
//             <img
//               src="/logo.png"
//               alt="Logo"
//               className="h-10 w-auto object-contain"
//             />
//           </Link>

//           <div className="flex items-center gap-3">

//             {/* Mobile Phone */}
//             <a
//               href="tel:+1234567890"
//               className="text-white"
//               aria-label="Call us"
//             >
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M3 5.5C3 4.67 3.67 4 4.5 4h2.1c.6 0 1.13.4 1.3.98l.76 2.67c.16.55-.02 1.14-.45 1.5l-1.35 1.1a13.5 13.5 0 0 0 5.89 5.89l1.1-1.35c.36-.43.95-.61 1.5-.45l2.67.76c.58.17.98.7.98 1.3v2.1c0 .83-.67 1.5-1.5 1.5C10.04 20 4 13.96 4 6.5"
//                 />
//               </svg>
//             </a>

//             {/* Menu Button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="p-2 rounded-md text-white hover:text-white focus:outline-none"
//               aria-label="Toggle Menu"
//             >
//               <svg
//                 className="h-7 w-7"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 {isOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>

//           </div>
//         </div>

//       </div>
//     </div>

//     {/* MOBILE DROPDOWN */}
//     {isOpen && (
//       <div className="lg:hidden border-t border-dashed border-[#8b263e]/40 bg-[#fbf9f5] z-30 relative">
//         <div className="px-4 pt-2 pb-4 space-y-2">

//           {navItems.map((item) => {
//             const isActive = activeItem === item.label;
//             const hasCountries = Boolean(
//               item.countries && item.countries.length > 0
//             );
//             const isSubOpen = mobileSubmenu === item.label;

//             return (
//               <div
//                 key={item.label}
//                 className="border-b border-dashed border-gray-300 pb-2"
//               >

//                 <div className="flex items-center justify-between py-1">

//                   <Link
//                     href={item.href}
//                     onClick={() => {
//                       setActiveItem(item.label);
//                       if (!hasCountries) setIsOpen(false);
//                     }}
//                     className={`text-base font-medium transition-colors ${
//                       isActive
//                         ? "text-[#8b263e] font-semibold"
//                         : "text-[#1a1a1a] hover:text-[#8b263e]"
//                     }`}
//                   >
//                     {item.label}
//                   </Link>

//                   {hasCountries && (
//                     <button
//                       onClick={() => toggleMobileSubmenu(item.label)}
//                       className="p-1 text-[#8b263e] focus:outline-none"
//                     >
//                       <svg
//                         className={`w-5 h-5 transition-transform duration-200 ${
//                           isSubOpen ? "rotate-180" : ""
//                         }`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M19 9l-7 7-7-7"
//                         />
//                       </svg>
//                     </button>
//                   )}

//                 </div>

//                 {hasCountries && isSubOpen && (
//                   <div className="mt-2 bg-[#363543] p-3 rounded-md text-white">
//                     <ul className="space-y-1">

//                       {item.countries.map((country, idx) => (
//                         <li key={idx}>
//                           <Link
//                             href={country.href}
//                             onClick={() => {
//                               setActiveItem(item.label);
//                               setIsOpen(false);
//                             }}
//                             className="text-sm text-gray-300 hover:text-white block py-1 px-2 rounded hover:bg-[#8b263e]/50"
//                           >
//                             &rsaquo; {country.label}
//                           </Link>
//                         </li>
//                       ))}

//                     </ul>
//                   </div>
//                 )}

//               </div>
//             );
//           })}

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const navItems = [
    { label: "Home", href: "/" },
  
    {
      label: "SHOP WINES",
      href: "",
      children: [
        { label: "Browse All Wines", href: "/shop" },
        { label: "Cabernet Sauvignon", href: "/shop/cabernet-sauvignon" },
        { label: "Chardonnay", href: "/shop/chardonnay" },
        { label: "Prosecco", href: "/shop/prosecco" },
        { label: "Champagne & Sparkling", href: "/shop/champagne-sparkling" },
        { label: "Organic | Biodynamic", href: "/shop/organic-biodynamic" },
        { label: "Dessert Wines", href: "/shop/dessert-wines" },
        { label: "Liqueurs & Vermouth", href: "/shop/liqueurs-vermouth" },
      ],
    },
    {
      label: "ITALY",
      href: "/italy",
      children: [
        { label: "Regions of Italy", href: "/italy/regions" },
        { label: "Italian Wine Map", href: "/italy/map" },
        { label: "Our Wineries", href: "/italy/wineries" },
        { label: "Barolo", href: "/italy/barolo" },
        { label: "Barbaresco", href: "/italy/barbaresco" },
        { label: "Brunello", href: "/italy/brunello" },
        { label: "Chianti Classico", href: "/italy/chianti-classico" },
        { label: "Super Tuscans", href: "/italy/super-tuscans" },
        { label: "Amarone", href: "/italy/amarone" },
        { label: "Montepulciano d'Abruzzo", href: "/italy/montepulciano" },
        { label: "Mt. Etna", href: "/italy/mt-etna" },
        { label: "Sicily", href: "/italy/sicily" },
        { label: "Valtellina", href: "/italy/valtellina" },
        { label: "Vino Nobile di Montepulciano", href: "/italy/vino-nobile" },
        { label: "Gambero Rosso", href: "/italy/gambero-rosso" },
      ],
    },
    {
      label: "WORLD WINES",
      href: "/world-wines",
      children: [
        { label: "French Wines", href: "/france" },
        { label: "Argentina", href: "/Argentina" },
        { label: "California+", href: "/california" },
        { label: "Other World Wines", href: "/world-wines/other" },
      ],
    },
    {
      label: "BUNDLES",
      href: "/bundles",
      children: [
        { label: "Elite Select Bundles", href: "/bundles/elite-select" },
        { label: "High-Quality Bundles", href: "/bundles/high-quality" },
        { label: "Everyday Wine Bundles", href: "/bundles/everyday" },
      ],
    },
    
    {
      label: "LARGE BOTTLES",
      href: "/large-bottles",
      children: [
        { label: "Large Format Wines", href: "/large-bottles/format" },
      ],
    },

    {
      label: "SPECIALS & GIFTS",
      href: "/specials-gifts",
      children: [
        { label: "Closeouts | Specials", href: "/specials/closeouts" },
        { label: "Gift Cards", href: "/gifts/cards" },
        { label: "Gifts", href: "/gifts" },
      ],
    },
    {
      label: "MORE",
      href: "/more",
      children: [
        { label: "Wine Reviews", href: "/reviews" },
        { label: "Limoncello", href: "/limoncello" },
        { label: "Olive Oil | EVOO", href: "/evoo" },
      ],
    },
      {
  label: "ULTRA PREMIUM",
  href: "/ultra-premium",
  className: "bg-[#C9A227] text-white px-3 py-2 rounded-sm",
  children: [
    {
      label: "Ultra Premium Collection",
      href: "/ultra-premium/collection",
    },
  ],
},
 
  ];

  const toggleMobileSubmenu = (label) => {
    setMobileSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[rgb(84_1_34)] font-serif text-white shadow-md">
      <div className="relative border-y border-dashed border-[#8b263e]/40">
        <div className="max-w-[1536px] mx-auto px-2 sm:px-4 lg:px-6 relative">
          
          {/* Main Bar Height Fixed to 28 (7rem / 112px) */}
          <div className="flex items-center justify-between h-28">
            
            {/* LOGO */}
            <div className="flex items-center shrink-0 z-30 pr-2 xl:pr-4">
              <Link href="/" className="flex items-center">
                <img
                  src="https://winesfromitaly.com/cdn/shop/files/logo.png?v=1730282032&width=265"
                  alt="Logo"
                  className="h-12 w-auto object-contain"
                />
              </Link>
            </div>

{/* =================================================
    DESKTOP NAVIGATION - TWO LINES
================================================= */}

<nav
  className="
    hidden
    xl:flex
    flex-col
    items-center
    justify-center
    flex-1
    min-w-0
    z-20
    gap-1
  "
>
  {/* ================= FIRST LINE ================= */}
  <div
    className="
      flex
      items-center
      justify-center
      gap-x-4
      2xl:gap-x-7
      w-full
    "
  >
    {navItems.slice(0, 5).map((item) => {
      const isActive = activeItem === item.label;

      const hasChildren = Boolean(
        item.children && item.children.length > 0
      );

      return (
        <div
          key={item.label}
          className="
            group
            relative
            py-2
            px-1
            shrink-0
          "
        >
          <Link
            href={item.href}
            onClick={() => setActiveItem(item.label)}
            className={`
              text-[15px]
              2xl:text-[11px]

              uppercase
              font-semibold

              tracking-[0.04em]

              flex
              items-center
              justify-center
              gap-1

              whitespace-nowrap

              transition-all
              duration-200

              ${
                isActive
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-gray-200 hover:text-white"
              }
            `}
          >
            <span>{item.label}</span>

            {hasChildren && (
              <svg
                className="
                  w-2.5
                  h-2.5
                  shrink-0
                  opacity-70
                  transition-transform
                  duration-200
                  group-hover:rotate-180
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

          {/* DROPDOWN */}
          {hasChildren && (
            <div
              className="
                absolute
                left-0
                top-full
                pt-1

                opacity-0
                invisible

                group-hover:opacity-100
                group-hover:visible

                transition-all
                duration-200

                z-[100]
              "
            >
              <div
                className="
                  w-56
                  bg-[#363543]
                  text-white
                  shadow-xl
                  rounded-b-md
                  p-4
                  border-t-2
                  border-[#8b263e]
                  max-h-[70vh]
                  overflow-y-auto
                "
              >
                <ul className="space-y-2">
                  {item.children.map((child, idx) => (
                    <li key={idx}>
                      <Link
                        href={child.href}
                        onClick={() =>
                          setActiveItem(item.label)
                        }
                        className="
                          text-xs
                          text-gray-300
                          hover:text-white
                          hover:translate-x-1
                          transition-all
                          duration-150
                          flex
                          items-center
                          gap-1.5
                          py-1
                          whitespace-nowrap
                        "
                      >
                        <span className="opacity-40">
                          &rsaquo;
                        </span>

                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>

  {/* ================= SECOND LINE ================= */}
  <div
    className="
      flex
      items-center
      justify-center
      gap-x-4
      2xl:gap-x-7
      w-full
    "
  >
    {navItems.slice(5).map((item) => {
      const isActive = activeItem === item.label;

      const hasChildren = Boolean(
        item.children && item.children.length > 0
      );

      return (
        <div
          key={item.label}
          className="
            group
            relative
            py-2
            px-1
            shrink-0
          "
        >
          <Link
            href={item.href}
            onClick={() => setActiveItem(item.label)}
            className={`
              text-[15px]
              2xl:text-[11px]

              uppercase
              font-semibold

              tracking-[0.04em]

              flex
              items-center
              justify-center
              gap-1

              whitespace-nowrap

              transition-all
              duration-200

              ${
                isActive
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-gray-200 hover:text-white"
              }
            `}
          >
            <span>{item.label}</span>

            {hasChildren && (
              <svg
                className="
                  w-2.5
                  h-2.5
                  shrink-0
                  opacity-70
                  transition-transform
                  duration-200
                  group-hover:rotate-180
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

          {/* DROPDOWN */}
          {hasChildren && (
            <div
              className="
                absolute
                left-0
                top-full
                pt-1

                opacity-0
                invisible

                group-hover:opacity-100
                group-hover:visible

                transition-all
                duration-200

                z-[100]
              "
            >
              <div
                className="
                  w-56
                  bg-[#363543]
                  text-white
                  shadow-xl
                  rounded-b-md
                  p-4
                  border-t-2
                  border-[#8b263e]
                  max-h-[70vh]
                  overflow-y-auto
                "
              >
                <ul className="space-y-2">
                  {item.children.map((child, idx) => (
                    <li key={idx}>
                      <Link
                        href={child.href}
                        onClick={() =>
                          setActiveItem(item.label)
                        }
                        className="
                          text-xs
                          text-gray-300
                          hover:text-white
                          hover:translate-x-1
                          transition-all
                          duration-150
                          flex
                          items-center
                          gap-1.5
                          py-1
                          whitespace-nowrap
                        "
                      >
                        <span className="opacity-40">
                          &rsaquo;
                        </span>

                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      );
    })}
  </div>
</nav>
            {/* PHONE SECTION */}
            <div className="hidden xl:flex items-center justify-end shrink-0 z-30 pl-2 xl:pl-4">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-1.5 text-xs text-white hover:text-gray-200 transition-colors whitespace-nowrap"
              >
                <svg
                  className="w-4 h-4 text-white shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 5.5C3 4.67 3.67 4 4.5 4h2.1c.6 0 1.13.4 1.3.98l.76 2.67c.16.55-.02 1.14-.45 1.5l-1.35 1.1a13.5 13.5 0 0 0 5.89 5.89l1.1-1.35c.36-.43.95-.61 1.5-.45l2.67.76c.58.17.98.7.98 1.3v2.1c0 .83-.67 1.5-1.5 1.5C10.04 20 4 13.96 4 6.5"
                  />
                </svg>
                <span className="text-xl">+1 234 567 890</span>
              </a>
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <div className="flex xl:hidden justify-between items-center w-full z-20">
              <Link href="/" className="flex items-center">
                <img
                  src="https://winesfromitaly.com/cdn/shop/files/logo.png?v=1730282032&width=265"
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-md text-white hover:text-gray-200 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        {isOpen && (
          <div className="xl:hidden border-t border-dashed border-[#8b263e]/40 bg-[#fbf9f5] z-30 relative max-h-[80vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isSubOpen = mobileSubmenu === item.label;

                return (
                  <div key={item.label} className="border-b border-dashed border-gray-200 pb-1">
                    <div className="flex items-center justify-between py-2">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveItem(item.label);
                          if (!hasChildren) setIsOpen(false);
                        }}
                        className={`text-sm font-medium transition-colors ${
                          isActive
                            ? "text-[#8b263e] font-semibold"
                            : "text-[#1a1a1a] hover:text-[#8b263e]"
                        }`}
                      >
                        {item.label}
                      </Link>

                      {hasChildren && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.label)}
                          className="p-1 text-[#8b263e] focus:outline-none"
                        >
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSubOpen ? "rotate-180" : ""
                            }`}
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

                    {hasChildren && isSubOpen && (
                      <div className="mt-1 bg-[#363543] p-3 rounded-md text-white space-y-2 mb-2">
                        <ul className="space-y-1">
                          {item.children.map((child, idx) => (
                            <li key={idx}>
                              <Link
                                href={child.href}
                                onClick={() => {
                                  setActiveItem(item.label);
                                  setIsOpen(false);
                                }}
                                className="text-xs text-gray-300 hover:text-white block py-1 pl-2 border-l border-white/20"
                              >
                                &rsaquo; {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
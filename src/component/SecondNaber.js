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



"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  // Navigation Data Structure - Shop menu me sirf 7 Countries hain
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    {
      label: "OURS WINES",
      href: "/shop",
       heading: "OUR COUNTRY WINES",
      countries: [

        { label: "Italy", href: "/italy" },
        { label: "France", href: "/shop/france" },
        { label: "Spain", href: "/shop/spain" },
        { label: "Portugal", href: "/shop/portugal" },
        { label: "Argentina", href: "/shop/argentina" },
        { label: "USA", href: "/shop/usa" },
        { label: "Australia", href: "/shop/australia" },
      ],
    },
    { label: "contact", href: "/contact" },
    { label: "Why Choose Us", href: "/why-us" },
  ];

  const toggleMobileSubmenu = (label) => {
    setMobileSubmenu((prev) => (prev === label ? null : label));
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbf9f5] font-serif text-[#2a110b] shadow-md">
      {/* Dashed Border Container */}
      <div className="relative border-y border-dashed border-[#8b263e]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            
            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center justify-center w-full space-x-8 xl:space-x-12 z-20">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                const hasCountries = Boolean(item.countries && item.countries.length > 0);

                return (
                  <div key={item.label} className="group py-6 relative">
                    {/* Top Main Link */}
                    <Link
                      href={item.href}
                      onClick={() => setActiveItem(item.label)}
                      className={`text-lg transition-colors duration-200 font-philosopher  tracking-wide flex items-center gap-1.5 ${
                        isActive
                          ? "text-[#8b263e]"
                          : "text-[#1a1a1a] hover:text-rgb(165, 62, 76)"
                      }`}
                    >
                      {item.label}
                      {hasCountries && (
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
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

                    {/* Simple Dropdown for 7 Countries (Centered under Shop) */}
                    {hasCountries && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full hidden group-hover:block w-60 bg-[#363543] text-white shadow-xl z-50 rounded-b-md overflow-hidden transition-all duration-300">
                        <ul className="py-3">
     <li>
  <div className="px-5 py-2.5 text-xs tracking-[0.25em] text-white border-b border-white/20">
    {item.heading}
  </div>
</li>
                          {item.countries.map((country, idx) => (
                            <li key={idx}>
                              <Link
                                href={country.href}
                                onClick={() => setActiveItem(item.label)}
                                className="px-5 py-2.5 text-sm text-gray-200 hover:text-white hover:bg-[#8b263e]/80 transition-all duration-150 flex items-center gap-2"
                              >
                                <span className="text-xs opacity-70">&rsaquo;</span>
                                {country.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Mobile & Tablet Header Controls */}
            <div className="flex lg:hidden justify-between items-center w-full z-20">
              <span className="text-xl font-semibold text-[#8b263e]">Menu</span>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-md text-[#2a110b] hover:text-[#8b263e] focus:outline-none"
                aria-label="Toggle Menu"
              >
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-dashed border-[#8b263e]/40 bg-[#fbf9f5] z-30 relative">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                const hasCountries = Boolean(item.countries && item.countries.length > 0);
                const isSubOpen = mobileSubmenu === item.label;

                return (
                  <div key={item.label} className="border-b border-dashed border-gray-300 pb-2">
                    <div className="flex items-center justify-between py-1">
                      <Link
                        href={item.href}
                        onClick={() => {
                          setActiveItem(item.label);
                          if (!hasCountries) setIsOpen(false);
                        }}
                        className={`text-base font-medium transition-colors ${
                          isActive
                            ? "text-[#8b263e] font-semibold"
                            : "text-[#1a1a1a] hover:text-[#8b263e]"
                        }`}
                      >
                        {item.label}
                      </Link>

                      {hasCountries && (
                        <button
                          onClick={() => toggleMobileSubmenu(item.label)}
                          className="p-1 text-[#8b263e] focus:outline-none"
                        >
                          <svg
                            className={`w-5 h-5 transition-transform duration-200 ${
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

                    {/* Mobile Submenu for Countries */}
                    {hasCountries && isSubOpen && (
                      <div className="mt-2 bg-[#363543] p-3 rounded-md text-white">
                        <ul className="space-y-1">
                          {item.countries.map((country, idx) => (
                            <li key={idx}>
                              <Link
                                href={country.href}
                                onClick={() => {
                                  setActiveItem(item.label);
                                  setIsOpen(false);
                                }}
                                className="text-sm text-gray-300 hover:text-white block py-1 px-2 rounded hover:bg-[#8b263e]/50"
                              >
                                &rsaquo; {country.label}
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
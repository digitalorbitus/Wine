"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Club", href: "#" },
    { label: "About Us", href: "/about" },
    { label: "Wine Making", href: "#" },
    { label: "Pages", href: "#" },
    { label: "Elements", href: "#" },
    { label: "Shop", href: "/shop" },
    { label: "Visit Us", href: "/contact" },
    { label: "Our Events", href: "#" },
  ];

  return (
<header className="sticky top-0 z-50 w-full bg-[#fbf9f5] font-serif text-[#2a110b] shadow-md">
      {/* Dashed Top and Bottom Border Container */}
      <div className="relative border-y border-dashed border-[#8b263e]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Vine Leaf Decoration (Visible on Left) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 h-28 w-28 pointer-events-none overflow-hidden z-10 hidden sm:block">
              {/* Apni vine leaf PNG image yahan use karein */}
              {/* <div className="w-full h-full relative opacity-90">
                <Image
                  src="/vine-leaf.png" 
                  alt="Vine Leaf"
                  fill
                  className="object-contain object-left"
                />
              </div> */}
            </div>

            {/* Desktop Navigation Links (lg breakpoint & up) */}
            <nav className="hidden lg:flex items-center justify-center w-full space-x-8 xl:space-x-12 z-20">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setActiveItem(item.label)}
                    className={`text-lg transition-colors duration-200 tracking-wide font-medium ${
                      isActive
                        ? "text-[#8b263e] font-semibold"
                        : "text-[#1a1a1a] hover:text-[#8b263e]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile & Tablet Header Controls (sm, md) */}
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

        {/* Mobile Dropdown Menu (sm & md) */}
        {isOpen && (
          <div className="lg:hidden border-t border-dashed border-[#8b263e]/40 bg-[#fbf9f5] z-30 relative">
            <div className="px-4 pt-2 pb-4 space-y-2 text-center">
              {navItems.map((item) => {
                const isActive = activeItem === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => {
                      setActiveItem(item.label);
                      setIsOpen(false);
                    }}
                    className={`block py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#8b263e] font-semibold"
                        : "text-[#1a1a1a] hover:text-[#8b263e]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
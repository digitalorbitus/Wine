
"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function NewsletterSection() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/Portfolio" },
    { name: "Contact", href: "/contact" },
    { name: "Why Choose Us", href: "/why-us" },
  ];

  return (
    <div>
      <footer className="w-full bg-[#4e0215] text-stone-300 font-serif pt-12 pb-6 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          {/* Upper Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12">

            {/* Left Column: Logo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-80">
                <Image
                  src="/white logo.png"
                  alt="Best Wine Since 1903"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8 text-center lg:text-left">

              {/* Navigation Links */}
              <nav className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm sm:text-base">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Address & Contact Info */}
              <div className="text-xs sm:text-lg text-white space-y-1.5 leading-relaxed font-old-standard">
                <p>
                  7607 Shoreway Commerce Rd, Cleveland, Ohio 44103
                </p>

                <p>
                  Call us{" "}
                  <a
                    href="tel:4408123776"
                    className="hover:text-[#D4AF37] hover:underline transition-colors duration-200"
                  >
                    440.812.3776
                  </a>
                  .
                </p>

                <p>
                  <a
                    href="mailto:ciaodaniel@gmail.com"
                    className="hover:text-[#D4AF37] hover:underline transition-colors duration-200"
                  >
                    ciaodaniel@gmail.com
                  </a>
                </p>
              </div>

              {/* Email Subscription Form */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="w-full pt-4"
              >
                <div className="relative font-old-standard flex items-center border-b border-stone-600 focus-within:border-[#D4AF37] transition-colors pb-2">

                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="w-full bg-transparent text-xl sm:text-2xl md:text-3xl text-stone-100 placeholder-stone-400 font-serif focus:outline-none pr-20"
                    required
                  />

                  <button
                    type="submit"
                    className="absolute right-0 text-xs sm:text-sm hover:text-[#D4AF37] uppercase transition-colors font-old-standard cursor-pointer"
                  >
                    SUBMIT
                  </button>

                </div>
              </form>

            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-stone-800/80 my-4" />

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-xs sm:text-sm text-stone-400">

            {/* Copyright */}
            <div className="text-center sm:text-left">
              Copyright © 2026{" "}
              <Link
                href="https://digitalorbit.us"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] hover:underline transition-colors duration-200"
              >
                Digital Orbit
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-dashed border-stone-500 hover:border-[#D4AF37] flex items-center justify-center text-stone-300 hover:text-[#D4AF37] transition-all duration-200"
              >
                <FaFacebookF className="text-xs" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full border border-dashed border-stone-500 hover:border-[#D4AF37] flex items-center justify-center text-stone-300 hover:text-[#D4AF37] transition-all duration-200"
              >
                <FaYoutube className="text-xs" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-dashed border-stone-500 hover:border-[#D4AF37] flex items-center justify-center text-stone-300 hover:text-[#D4AF37] transition-all duration-200"
              >
                <FaInstagram className="text-sm" />
              </a>

            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}


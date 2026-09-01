"use client";
import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';


export default function NewsletterSection() {
    const navLinks = [
    'HOME',
    'ABOUT US',
    'CLUB',
    'WINE MAKING',
    'VISIT US',
  ];
  return (
    <div>
  
    <footer className="w-full bg-[rgb(84_1_34)] text-stone-300 font-serif pt-12 pb-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Upper Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12">
          
          {/* Left Column: Logo / Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-80">
              <Image
                src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/08/footer-element.png"
                alt="Best Wine Since 1903"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Navigation, Info & Form */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8 text-center lg:text-left">
            
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm  sm:text-base   ">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-amber-500 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </nav>

            {/* Address & Contact Info */}
            <div className="text-xs sm:text-sm text-stone-400 space-y-1.5 leading-relaxed font-old-standard">
              <p>Designed and developed in New York City.</p>
              <p>Call us 1-888-814-5411. 10:00am - 5.00px ET M-F.</p>
              <p>Copyright © 2017, DesignThemes. All right reserved Privacy Terms.</p>
            </div>

            {/* Email Subscription Form */}
            <form onSubmit={(e) => e.preventDefault()} className="w-full pt-4">
              <div className="relative font-old-standard  flex items-center border-b border-stone-600 focus-within:border-stone-200 transition-colors pb-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-transparent text-xl sm:text-2xl md:text-3xl text-stone-100 placeholder-stone-400 font-serif focus:outline-none pr-20"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 text-xs sm:text-sm  hover:text-white uppercase transition-colors font-old-standard cursor-pointer"
                >
                  SUBMIT
                </button>
              </div>
            </form>

          </div>
        </div>

        {/* Divider Line */}
        <div className="border-t border-stone-800/80 my-4" />

        {/* Bottom Bar Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-xs sm:text-sm text-stone-400">
          
          {/* Copyright Text */}
          <div className="text-center sm:text-left">
            Copyright © 2017, DesignThemes
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-dashed border-stone-500 hover:border-white flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200"
            >
              <FaFacebookF className="text-xs" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 rounded-full border border-dashed border-stone-500 hover:border-white flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200"
            >
              <FaYoutube className="text-xs" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-dashed border-stone-500 hover:border-white flex items-center justify-center text-stone-300 hover:text-white transition-all duration-200"
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
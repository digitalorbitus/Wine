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
    <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-black/80 text-white overflow-hidden py-16 px-4">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
        style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-3xl w-full mx-auto text-center flex flex-col items-center justify-center">
        
        {/* Cursive / Serif Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic tracking-wide text-stone-100 mb-4">
          Subscribe to Stay Informed
        </h2>

        {/* Subtitle / Description Text */}
        <p className="text-sm sm:text-base md:text-lg text-stone-300 font-serif max-w-lg mb-8 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden sm:inline" />
          Morbi torquent per conubia nostra.
        </p>

        {/* Newsletter Form */}
        <form 
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-xl flex flex-col sm:flex-row items-center justify-between border border-white/70 rounded-full p-1.5 sm:p-2 bg-black/20 backdrop-blur-sm gap-2 sm:gap-0"
        >
          {/* Input Field */}
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="w-full bg-transparent px-6 py-2.5 sm:py-3 text-stone-200 placeholder-stone-400 font-serif focus:outline-none text-center sm:text-left text-sm md:text-base"
            required
          />

          {/* Subscribe Button */}
          <button 
            type="submit" 
            className="w-full sm:w-auto bg-white hover:bg-stone-200 text-stone-800 font-serif text-sm sm:text-base px-8 py-2.5 sm:py-3 rounded-full transition-colors duration-300 font-medium whitespace-nowrap cursor-pointer"
          >
            Subscribe!
          </button>
        </form>

      </div>
    </section>
    <footer className="w-full bg-[#1b1b1b] text-stone-300 font-serif pt-12 pb-6 px-6 md:px-12 lg:px-20">
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
            <nav className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm sm:text-base tracking-widest font-light text-stone-200">
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
            <div className="text-xs sm:text-sm text-stone-400 space-y-1.5 leading-relaxed font-sans">
              <p>Designed and developed in New York City.</p>
              <p>Call us 1-888-814-5411. 10:00am - 5.00px ET M-F.</p>
              <p>Copyright © 2017, DesignThemes. All right reserved Privacy Terms.</p>
            </div>

            {/* Email Subscription Form */}
            <form onSubmit={(e) => e.preventDefault()} className="w-full pt-4">
              <div className="relative flex items-center border-b border-stone-600 focus-within:border-stone-200 transition-colors pb-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-transparent text-xl sm:text-2xl md:text-3xl text-stone-100 placeholder-stone-400 font-serif focus:outline-none pr-20"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-0 text-xs sm:text-sm tracking-widest text-stone-400 hover:text-white uppercase transition-colors font-sans cursor-pointer"
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
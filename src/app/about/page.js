"use client";

import Image from "next/image";
// import { motion } from "framer-motion";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";



const features = [
  {
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/i1.jpg",
    title: "HISTORY REWRITTEN",
    description:
      "Sed eget sit ame egestas, cursus felis quis, vestibulum. Lorem ipsum dolor sit amet.",
  },
  {
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/i2.jpg",
    title: "STEADY EVOLUTION",
    description:
      "Consectetur adipiscing elit. Nullam id. Sed eget sit ame egestas.",
  },
  {
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/i4.jpg",
    title: "CONSISTENT QUALITY",
    description:
      "Nullam id sed eget sit ame egestas, cursus felis quis.",
  },
  {
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/i3.jpg",
    title: "VINTAGE GRAPES",
    description:
      "Cursus felis quis, vestibulum. Lorem ipsum dolor sit amet.",
  },
];

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};


// 2017 Wine Festivities start
const historyTimeline = [
  { id: "1920-1940", label: "1920 - 1940" },
  { id: "1940-1960", label: "1940 - 1960" },
  { id: "1960-1980", label: "1960 - 1980" },
  { id: "1980-2000", label: "1980 .... 2000" },
  { id: "2000-present", label: "2000 - Present" },
];

// 2017 Wine Festivities end

// fourth section code start

const testimonials = [
  {
    id: 1,
    quote:
      "Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
    author: "Renee Myers",
    role: "Director, ABC Inc",
    avatar: "https://dtwine.wpenginepowered.com/wp-content/uploads/2015/06/testimonial7.jpg",
  },
  {
    id: 2,
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.",
    author: "John Doe",
    role: "CEO, WineCraft",
    avatar: "https://dtwine.wpenginepowered.com/wp-content/uploads/2015/06/testimonial7.jpg",
  },
];

// --- Horizontal + Back-to-Front Depth Animation Variants ---
const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 120 : -120, // Horizontal Slide (Right/Left)
    scale: 0.8,                     // Back to Front Effect (Peeche se Chhota hokar aayega)
    opacity: 0,
  }),
  center: {
    x: 0,
    scale: 1,                       // Front par 100% full scale
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 120 : -120, // Opposite direction exit
    scale: 0.8,                    // Front se Back chhota ho jayega
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.5, 0, 0.75, 0],
    },
  }),
}; 
// fourth section end

// five section  start
const wineMenu = [
  {
    id: 1,
    title: "IRISH ALE",
    tags: "Organic raw/vegan/vegetarian",
    desc: "chocolate smoothie, you'll enjoy it.",
    image: "https://dtwine.wpengine.com/wp-content/uploads/2013/06/product13.png",
  },
  {
    id: 2,
    title: "MOURVEDRE",
    tags: "Organic raw/vegan/vegetarian",
    desc: "chocolate smoothie, you'll enjoy it.",
    image: "https://dtwine.wpengine.com/wp-content/uploads/2013/06/product17.png",
  },
  {
    id: 3,
    title: "BARBERA",
    tags: "Organic raw/vegan/vegetarian",
    desc: "chocolate smoothie, you'll enjoy it.",
    image: "https://dtwine.wpengine.com/wp-content/uploads/2013/06/product15.png",
  },
  {
    id: 4,
    title: "SYRAH",
    tags: "Organic raw/vegan/vegetarian",
    desc: "chocolate smoothie, you'll enjoy it.",
    image: "https://dtwine.wpengine.com/wp-content/uploads/2013/06/product18.png",
  },
  {
    id: 5,
    title: "MERLOT",
    tags: "Organic raw/vegan/vegetarian",
    desc: "chocolate smoothie, you'll enjoy it.",
    image: "https://dtwine.wpengine.com/wp-content/uploads/2013/06/product14.png",
  },
  {
    id: 6,
    title: "CHARDONNAY",
    tags: "Organic raw/vegan/vegetarian",
    desc: "chocolate smoothie, you'll enjoy it.",
    image: "https://dtwine.wpengine.com/wp-content/uploads/2013/06/product19.png",
  },
  {
    id: 7,
    title: "ZINFANDEL",
    tags: "Organic raw/vegan/vegetarian",
    desc: "chocolate smoothie, you'll enjoy it.",
    image: "https://dtwine.wpengine.com/wp-content/uploads/2013/06/product16.png",
  },
  {
    id: 8,
    title: "UGNI BLANC",
    tags: "Organic raw/vegan/vegetarian",
    desc: "chocolate smoothie, you'll enjoy it.",
    image: "https://dtwine.wpengine.com/wp-content/uploads/2013/06/product20.png",
  },
];
// five section end
// seven section start
const newsPosts = [
  {
    id: 1,
    title: "The history of wine drinking",
    date: "18 Jun 2015",
    comments: "2 Comments",
    author: "ram",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2015/06/blog7-1024x696.jpg",
    excerpt:
      "Rooted in tradition and inspired by nature, our journey is dedicated to creating wines that bring people together. From carefully chosen grapes to thoughtful craftsmanship, every bottle reflects our passion and commitment to quality.",
  },
  {
    id: 2,
    title: "Champagne is not only for the Royalty",
    date: "18 Jun 2015",
    comments: "0 Comments",
    author: "ram",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2015/06/blog6-1024x696.jpg",
    excerpt:
      "We believe great wine is more than a drink—it is an experience meant to be shared. With respect for tradition and an eye for modern excellence, we create wines designed to turn everyday moments into lasting memories.",
  },
  {
    id: 3,
    title: "A wine drinker will never be an alcoholic!",
    date: "18 Jun 2015",
    comments: "0 Comments",
    author: "ram",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2015/06/blog1-1024x696.jpg",
    excerpt:
      "Explore a collection of distinctive wines crafted with character, balance, and elegance. Each selection captures the unique essence of its grapes, offering a memorable experience with every glass.",
  },
];  
// seven section end
const BRANDS_DATA = [
  { id: 1, name: 'Brand 1', logoUrl: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/8-2.png' },
  { id: 2, name: 'Brand 2', logoUrl: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/7-2.png' },
  { id: 3, name: 'Brand 3', logoUrl: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/9-2.png' },
  { id: 4, name: 'Brand 4', logoUrl: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/10-1.png' },
  { id: 5, name: 'Brand 5', logoUrl: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/5-1.png' },
];
    // eight section end

export default function AboutUs() {
  // Sample Brands Data with Image Links

  
  const [activeTab, setActiveTab] = useState("1920-1940");
  // fourth section part 2 start
const [[currentIndex, direction], setPage] = useState([0, 0]);

  const handleNext = () => {
    setPage(([prevIndex]) => [
      (prevIndex + 1) % testimonials.length,
      1, // Right to Left direction
    ]);
  };

  const handlePrev = () => {
    setPage(([prevIndex]) => [
      (prevIndex - 1 + testimonials.length) % testimonials.length,
      -1, // Left to Right direction
    ]);
  };

  const current = testimonials[currentIndex];
  // fourth section end

  const brands = BRANDS_DATA.map((brand) => ({
    ...brand,
    image: (
      <div className="relative w-28 sm:w-32 h-16 flex items-center justify-center">
        <Image
          src={brand.logoUrl}
          alt={brand.name}
          fill
          unoptimized
          className="object-contain"
        />
      </div>
    ),
  }));

  const [brandIndex, setBrandIndex] = useState(0);

  const handleBrandNext = () => {
    setBrandIndex((prev) => (prev + 1) % brands.length);
  };

  const handleBrandPrev = () => {
    setBrandIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const visibleBrands = Array.from({ length: Math.min(brands.length, 5) }, (_, index) =>
    brands[(brandIndex + index) % brands.length]
  );
  
  return (
    <div>

    <section className="relative w-full bg-white  overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Bada Heading Font */}
        <h2 className=" mt-3 text-[28px] font-old-standard   tracking-wider ">
          ABOUT US
        </h2>

        {/* Bada Breadcrumb Font */}
    <p className="text-sm sm:text-base text-gray-400 font-serif mt-2">
  <Link href="/" className="cursor-pointer hover:underline">
    Home
  </Link>{" "}
  /{" "}
  <span className="text-gray-600">About Us</span>
</p>
      </motion.div>

      {/* Main Content */}
   <div className=" mx-auto bg-white  overflow-hidden grid grid-cols-1 lg:grid-cols-14 items-center gap-8 relative">
  {/* Left Image */}
  <motion.div
    className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] lg:h-[600px]"

  >
   <Image
  src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/bg-1.jpg"
  alt="Wine Barrel and Grapes"
  fill
  quality={100}
  unoptimized
  priority
  className="object-cover object-left"
  sizes="(max-width: 1024px) 100vw, 50vw"
/>

    {/* Fade Effect Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white hidden lg:block pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden pointer-events-none" />
  </motion.div>

  {/* Right Features */}
  <motion.div
    className="lg:col-span-9 p-4 sm:p-6  grid grid-cols-1 sm:grid-cols-2 gap-8"
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {features.map((feature, index) => (
      <motion.div
        key={index}
        variants={fadeInUp}
        className="flex items-start space-x-4 p-2 group"
      >
        {/* Feature Icon Container */}
        <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300 pt-1 w-[60px] h-[60px] relative">
          <Image
            src={feature.image}
            alt={feature.title}
            width={120} // Retina display ke liye 2x resolution
            height={120}
            quality={100}
            unoptimized
            className="object-contain w-full h-full"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-[28px] font-philosopher font-bold tracking-wide text-zinc-900 uppercase mb-2">
            {feature.title}
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed font-sans">
            {feature.description}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</div>
    </section>

    {/* second section start */}
    <section className="relative w-full min-h-screen bg-zinc-950 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden flex items-center justify-center">
      
      {/* Dark Grapes Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/24.jpg"
          alt="Dark Grapes Background"
          fill
          priority
          quality={90}
          className="object-cover opacity-25 mix-blend-luminosity"
        />
        {/* Extra Gradient Overlays for Vignette Effect */}
        <div className="absolute inset-0 bg-radial from-transparent via-zinc-950/80 to-zinc-950" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-12 sm:space-y-16 lg:space-y-20">
        
        {/* --- ROW 1: Image Left | Text Right --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Wine Bottles Image */}
          <div className="relative w-full h-[240px] sm:h-[300px] lg:h-[320px] rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/25.jpg"
              alt="Only the finest bottles for the wine"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content Right */}
          <div className="text-center md:text-left text-[34px]  font-philosopher space-y-3 sm:space-y-4 px-2 sm:px-0">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-amber-50 tracking-wide font-medium">
              Only the finest bottles for the wine!
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300  leading-relaxed font-light">
              <p>
               Discover a world of exceptional wines crafted with passion, tradition,
                and the finest grapes. Every bottle is carefully produced to deliver rich flavors,
                elegant aromas, 
                and a memorable tasting experience that celebrates the true art of winemaking.
              </p>
              <p>
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </motion.div>

        {/* --- ROW 2: Text Left | Image Right --- */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Text Content Left (Mobile par pehle dikhega, Desktop par left dikhega) */}
          <div className="order-2 md:order-1 text-center md:text-left space-y-3 sm:space-y-4 px-2 sm:px-0">
            <h3 className="text-xl sm:text-2xl text-[34px]  font-philosopher lg:text-3xl font-serif text-amber-50 tracking-wide font-medium">
              The best wine is always with friends!
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-gray-300 font-serif leading-relaxed font-light">
              <p>
                Discover a world of exceptional wines crafted with passion, tradition,
                and the finest grapes. Every bottle is carefully produced to deliver rich flavors,
                elegant aromas, 
                and a memorable tasting experience that celebrates the true art of winemaking.
              </p>
              <p>
                Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Friends Wine Image */}
          <div className="order-1 md:order-2 relative w-full h-[240px] sm:h-[300px] lg:h-[320px] rounded-sm overflow-hidden shadow-2xl border border-white/10 group">
            <Image
              src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/26.jpg"
              alt="The best wine is always with friends"
              fill
              unoptimized
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

      </div>
    </section>

    {/* section section end */}

    {/* third section start */}
    <section className="w-full bg-white overflow-hidden">
      {/* 1. TOP HISTORY TIMELINE BAR */}
      <div className="bg-[#a03848] text-white w-full shadow-md">
        <div className=" mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
          
          {/* "History:" Label */}
          <div className="py-3 px-6 text-xl sm:text-2xl font-serif font-normal tracking-wide border-b md:border-b-0 md:border-r border-white/20 w-full md:w-auto text-center">
            History:
          </div>

          {/* Years Timeline List */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center w-full md:w-auto py-2 md:py-0">
            {historyTimeline.map((item, index) => {
              const isActive = activeTab === item.id;
              return (
                <div key={item.id} className="relative flex items-center">
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`px-5 sm:px-7 py-3 text-xs sm:text-sm font-serif whitespace-nowrap transition-colors duration-200 hover:text-rose-200 ${
                      isActive ? "font-bold text-white" : "text-white/80"
                    }`}
                  >
                    {item.label}
                  </button>

                  {/* Vertical Divider */}
                  {index < historyTimeline.length - 1 && (
                    <div className="hidden " />
                  )}

                  {/* Active Downward Arrow Indicator */}
                  {isActive && (
                    <div className="absolute -bottom-2 md:-bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#a03848] z-10" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Vintage Sketch & Cursive Caption */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-[500px] h-[220px] sm:h-[280px] lg:h-[320px]">
              <Image
                src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/28.png"
                alt="Our Farm John Miller Vintage Sketch"
                fill
                unoptimized
                priority
                className="object-contain"
              />
            </div>

            {/* Cursive Subtitle below Sketch */}
         
          </motion.div>

          {/* RIGHT COLUMN: Text & Action Button */}
          <motion.div
            className="lg:col-span-6 text-center lg:text-left space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Red Cursive Script Heading */}
            <span className="text-2xl sm:text-4xl great-vibes text-[#a03848] block">
              2017 Wine Festivities
            </span>

            {/* Main Section Heading */}
            <h3 className="text-3xl sm:text-3xl text-[30px] font-philosopher lg:text-4xl tracking-wide">
              Invited by Wine Maker!
            </h3>

            {/* Description Body */}
            <div className="space-y-3 text-xs sm:text-sm text-gray-500 font-serif leading-relaxed font-light pt-2">
              <p>
               Join us for an unforgettable journey through the vineyards,
                where every bottle is crafted with dedication, expertise,
                 and a commitment to excellence. Experience authentic flavors,
                rich aromas, and the timeless traditions that make every sip truly memorable.
              </p>
              <p>
                luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Pill Button */}
            <div className="pt-4 flex justify-center lg:justify-start">
              <button className="bg-[#a03848] hover:bg-[#882d3b] text-white px-6 py-3 rounded-full flex items-center space-x-3 transition-colors duration-300 group shadow-md">
                <span className="text-xs sm:text-sm font-serif font-medium tracking-wide">
                  Find Out More
                </span>
                <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <span className="text-white text-xs">➔</span>
                </div>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* third section end */}

    {/* fourth section start */}

<section className="relative w-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px] flex items-center justify-center overflow-hidden py-16 px-4 sm:px-8">
      {/* 1. VINEYARD BACKGROUND WITH GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/29.jpg"
          alt="Vineyard Background"
          fill
          priority
          quality={95}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d110b]/80 via-black/40 to-[#1a0a07]/80" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* 2. TESTIMONIAL CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center flex flex-col items-center overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={current.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="flex flex-col items-center space-y-6 w-full"
          >
            {/* Quote Text */}
            <div className="relative max-w-3xl px-6 sm:px-10">
              <span className="text-white font-serif text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose tracking-wide font-light drop-shadow-md">
                <span className="text-2xl sm:text-3xl font-serif font-bold inline-block mr-2">
                  “
                </span>
                {current.quote}
                <span className="text-2xl sm:text-3xl font-serif font-bold inline-block ml-2">
                  ”
                </span>
              </span>
            </div>

            {/* Circular Author Avatar */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white/90 shadow-2xl my-2">
              <Image
                src={current.avatar}
                alt={current.author}
                fill
                className="object-cover"
              />
            </div>

            {/* Author Name & Role */}
            <div className="text-white font-serif tracking-wider text-xs sm:text-sm font-medium drop-shadow-sm">
              <span className="font-bold">{current.author}</span>
              {" - "}
              <span className="text-gray-200">{current.role}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 3. CIRCULAR NAVIGATION BUTTONS */}
        <div className="flex items-center space-x-4 mt-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white/20 hover:border-white transition-all duration-300 group shadow-md"
          >
            <span className="text-xs sm:text-sm group-hover:-translate-x-0.5 transition-transform">
              ❮
            </span>
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white/20 hover:border-white transition-all duration-300 group shadow-md"
          >
            <span className="text-xs sm:text-sm group-hover:translate-x-0.5 transition-transform">
              ❯
            </span>
          </button>
        </div>
      </div>
    </section>
    {/* fourth section end  */}

    {/* five section start */}
   <section className="w-full bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-8 lg:px-16 flex justify-center items-center">
  <div className="max-w-5xl w-full mx-auto">
    {/* Responsive Grid: Perfectly Centered */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-16 lg:gap-x-20 gap-y-10 lg:gap-y-12 items-center justify-center">
      {wineMenu.map((item) => (
        <div 
          key={item.id} 
          className="flex items-center space-x-4 sm:space-x-6 w-full max-w-md mx-auto"
        >
          {/* Bottle Image */}
          <div className="relative w-12 sm:w-16 h-36 sm:h-44 flex-shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              fill
              unoptimized
              className="object-contain"
            />
          </div>

          {/* Content Block */}
          <div className="flex-1 min-w-0">
            {/* Title + Dotted Leader Line + Price */}
            <div className="flex items-baseline w-full">
              {/* Wine Title */}
              <h3 className="text-sm sm:text-base font-philosopher  tracking-wider text-zinc-800 uppercase flex-shrink-0">
                {item.title}
              </h3>

              {/* Dotted Leader Line */}
              <div className="flex-1 mx-2 sm:mx-3 border-b-2 border-dotted border-gray-300" />

              {/* Price Box with Dotted Border */}
              {/* <div className="flex-shrink-0 px-2 py-0.5 border border-dotted border-[#a03848] rounded-[2px]">
                <span className="text-xs sm:text-sm font-old-standard text-[#a03848]">
                  {item.price}
                </span>
              </div> */}
            </div>

            {/* Tagline / Subtitle */}
            <p className="mt-1.5 text-[11px] sm:text-xs text-gray-400 font-serif capitalize">
              {item.tags}
            </p>

            {/* Description */}
            <p className="text-[11px] sm:text-xs text-gray-400 font-serif italic">
              {item.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    {/* five section end */}
    {/* six section start */}
<section className="relative w-full min-h-[600px] lg:min-h-[680px] bg-zinc-900 overflow-hidden flex items-center">
  {/* 1. BACKGROUND CELLAR IMAGE */}
  <div className="absolute inset-0 z-0">
    <Image
      src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/30-1.jpg"
      alt="Wine Cellar Background"
      fill
      priority
      quality={90}
      className="object-cover object-center brightness-90"
    />
    {/* Soft Overlay for readability on smaller screens */}
    <div className="absolute inset-0 bg-black/20 lg:bg-transparent" />
  </div>

  {/* 2. RESPONSIVE CONTAINER & TRANSPARENT RED OVERLAY BOX */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-0 flex justify-center lg:justify-end">
    
    {/* Transparent Wine Red Text Box (Added bg-[#9c3545]/80 + backdrop-blur-md) */}
    <div className="w-full sm:max-w-md lg:max-w-[420px] bg-[#9c3545]/80 text-white p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-md border border-white/10 lg:mr-16 rounded-xs">
      
      {/* Main Title */}
      <h2 className="text-2xl font-philosopher sm:text-3xl font-serif tracking-wide mb-5 font-normal">
        The older The better!
      </h2>

      {/* Paragraph 1 */}
      <p className="text-xs sm:text-sm font-serif leading-relaxed text-white/95">
      Join us for an unforgettable journey through the vineyards,
       where every bottle is crafted with dedication, expertise,
        and a commitment to excellence. Experience authentic flavors.
       
      </p>

      {/* Divider Line 1 */}
      <hr className="my-5 border-t border-white/30" />

      {/* Paragraph 2 (Italic) */}
      <p className="text-xs sm:text-sm font-serif italic leading-relaxed text-white/95">
        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
        ullamcorper ultricies nisi.
      </p>

      {/* Divider Line 2 */}
      <hr className="my-5 border-t border-white/30" />

      {/* Paragraph 3 */}
      <p className="text-xs sm:text-sm font-serif leading-relaxed text-white/95 mb-4">
        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
        fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
        consequat, leo eget bibendum sodales, augue velit cursus nunc, Donec
        vitae sapien ut libero venenatis faucibus. Nullam quis ante.
      </p>

      {/* Paragraph 4 */}
      <p className="text-xs sm:text-sm font-serif leading-relaxed text-white/95 mb-6">
      Discover the passion behind every bottle as our expert wine
       makers combine generations of tradition with modern craftsmanship to create exceptional wines.
       From carefully selected vineyards to the final pour,
       every step reflects our dedication to quality,rich flavor,
        and an unforgettable tasting experience that celebrates the true art of winemaking.
      </p>

      {/* Authentic Cursive Signature SVG */}
      <div className="pt-2 flex justify-start items-center">
        <svg
          className="w-36 sm:w-44 h-12 text-white/90"
          viewBox="0 0 300 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Detailed Cursive Signature Flow */}
          <path d="M15 50 C 25 30, 30 20, 45 45 C 55 60, 65 30, 75 45 C 80 52, 85 40, 95 25 C 105 45, 115 55, 130 35 C 145 15, 155 50, 170 30 C 185 10, 195 45, 210 35 C 225 25, 240 45, 260 30 C 275 15, 280 45, 290 40" />
          {/* Signature Underline Sweep */}
          <path d="M20 65 Q 120 75, 280 55" strokeWidth="1.5" />
        </svg>
      </div>

    </div>
  </div>
</section>
    {/* six section end  */}
    {/* seven section  start */}

    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          {/* Top Cursive Subtitle */}
          <span className="text-3xl sm:text-4xl great-vibes  text-[#9c3545] block">
            Winery
          </span>
          {/* Main Title */}
          <h2 className="text-2xl font-philosopher sm:text-3xl lg:text-3xl  tracking-wider uppercase ">
            News from the World of Winery
          </h2>
        </div>

        {/* --- CARDS GRID (1 Col Mobile, 2 Col Tablet, 3 Col Desktop) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {newsPosts.map((post) => (
            <div key={post.id} className="flex flex-col group">
              
              {/* Feature Image */}
              <div className="relative w-full h-56 sm:h-60 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Meta Info Strip (Wine Red Bar) */}
              <div className="bg-[#9c3545] text-white text-[11px] sm:text-xs font-serif px-3 py-1.5 flex items-center space-x-1 whitespace-nowrap overflow-x-auto">
                <span>Posted on {post.date}</span>
                <span>/</span>
                <span className="flex items-center gap-1">
                  💬 {post.comments}
                </span>
                <span>/</span>
                <span className="flex items-center gap-1">
                  👤 {post.author}
                </span>
              </div>

              {/* Content Body */}
              <div className="pt-4 flex flex-col flex-1">
                {/* Blog Title */}
                <h3 className="text-lg sm:text-xl font-serif text-zinc-800 font-medium group-hover:text-[#9c3545] transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-xs sm:text-sm text-gray-500 font-serif leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Button */}
                <div className="mt-5 pt-auto">
                  <button className="bg-[#9c3545] hover:bg-[#802a37] text-white text-xs font-serif px-4 py-2 transition-colors flex items-center space-x-2 group/btn shadow-xs">
                    <span>Read More</span>
                    <span className="group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
    {/* seven section end */}

    {/* eight section satrt */}
<section className="w-full bg-white py-14 sm:py-18 lg:py-22 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center space-y-2 mb-12 sm:mb-16">
          <span className="text-3xl sm:text-4xl lg:text-5xl great-vibes text-[#801b2c] block  tracking-wide">
            Wine Maker
          </span>
          <h2 className="text-2xl font-philosopher sm:text-3xl lg:text-3xl tracking-[0.15em]  uppercase ">
            Our Brands & Co Brands
          </h2>
        </div>

        {/* --- LOGOS GRID WITH IMG TAGS --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 items-center justify-items-center">
          {visibleBrands.map((brand) => (
            <div
              key={brand.id}
              className="w-full h-28 sm:h-32 relative flex items-center justify-center p-3 rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={brand.logoUrl || brand.imageSrc}
                alt={brand.name || "Brand Logo"}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* --- DOTTED NAVIGATION BUTTONS --- */}
        <div className="flex items-center justify-center space-x-3 mt-12 sm:mt-16">
          <button
            onClick={handleBrandPrev}
            aria-label="Previous Brand"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-dotted border-[#9c3545] text-[#9c3545] flex items-center justify-center hover:bg-[#9c3545] hover:text-white transition-colors duration-200"
          >
            <span className="text-sm sm:text-base font-serif leading-none pr-0.5 font-bold">‹</span>
          </button>

          <button
            onClick={handleBrandNext}
            aria-label="Next Brand"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-dotted border-[#9c3545] text-[#9c3545] flex items-center justify-center hover:bg-[#9c3545] hover:text-white transition-colors duration-200"
          >
            <span className="text-sm sm:text-base font-serif leading-none pl-0.5 font-bold">›</span>
          </button>
        </div>

      </div>
    </section>
    </div>
  );
}
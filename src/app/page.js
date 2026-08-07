
"use client";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link as LinkIcon, Search } from 'lucide-react'; // icons ke liye lucide-react (optional)

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Alex_Brush, Playfair_Display } from 'next/font/google';

// The Process of WineMaking  items or data  start
const processSteps = [
  {
    id: 1,
    title: 'Harvesting',
    description: 'Carefully selected grapes are hand-harvested at their peak, preserving the natural flavors and quality that define our wines.',
    icon: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/icon1.png', // Apni icon path change karein
  },
  {
    id: 2,
    title: 'Crushing & Pressing',
    description: 'Freshly harvested grapes are gently crushed and pressed to extract their finest flavors while preserving their natural character.',
    icon: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/icon2.png',
  },
  {
    id: 3,
    title: 'Fermentation',
    description: 'Through a careful fermentation process, grape juices transform into refined wines with rich aromas and balanced taste.',
    icon: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/icon3.png',
  },
  {
    id: 4,
    title: 'Ageing & Bottling',
    description: 'Our wines are carefully aged to develop depth and elegance before being perfectly bottled for a memorable experience.',
    icon: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/icon4.png',
  },
];
// The Process of WineMaking  items or data  end

// // Discovery
// That Gets Better with Ageing  start
const galleryItems = [
  {
    id: 1,
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2014/01/1.jpg', // Apni image path lagayein
    title: 'Quisque id maximus leo',
    category: 'Red Wine',
  },
  {
    id: 2,
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2014/01/2.jpg',
    title: 'Quisque id maximus leo',
    category: 'Bottled Wine',
  },
  {
    id: 3,
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2014/01/3.jpg',
    title: 'Quisque id maximus leo',
    category: 'White Wine',
  },
  {
    id: 4,
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2014/01/4.jpg',
    title: 'Quisque id maximus leo',
    category: 'Traditional Process',
  },
  {
    id: 5,
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2014/01/5.jpg',
    title: 'Quisque id maximus leo',
    category: 'Fresh Grapes',
  },
  {
    id: 6,
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2014/01/6.jpg',
    title: 'Quisque id maximus leo',
    category: 'Vintage Selection',
  },
  {
    id: 7,
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2014/01/7.jpg',
    title: 'Quisque id maximus leo',
    category: 'Pouring Wine',
  },
  {
    id: 8,
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2014/01/8.jpg',
    title: 'Quisque id maximus leo',
    category: 'Cellar Bottles',
  },
];
// // Discovery
// That Gets Better with Ageing  end
// ============= SWIPER PRODUCTS START ===============
const wineProducts = [
  {
    id: 1,
    name: 'A BOTTLE OF RIESLING',
    price: '$ 78.05',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img7.png', // Apni image path lagayein
  },
  {
    id: 2,
    name: 'GEWÜRZTRAMINER',
    price: '$ 88.02',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img8.png',
  },
  {
    id: 3,
    name: 'CHARDONNAY',
    price: '$ 45.10',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img9.png',
  },
  {
    id: 4,
    name: 'PINOT NOIR VINTAGE',
    price: '$ 95.00',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img11.png',
  },
  {
    id: 5,
    name: 'CABERNET SAUVIGNON',
    price: '$ 65.50',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img10.png',
  },
    {
    id: 6,
    name: 'CABERNET SAUVIGNON',
    price: '$ 65.50',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img11.png',
  },
    {
    id: 7,
    name: 'CABERNET SAUVIGNON',
    price: '$ 65.50',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img12.png',
  },
    {
    id: 8,
    name: 'CABERNET SAUVIGNON',
    price: '$ 65.50',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img8.png',
  },

];
// ============= SWIPER PRODUCTS END ===============
// Google Fonts setup
const scriptFont = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
});

const serifFont = Playfair_Display({
  subsets: ['latin'],
});

const categories = [
  {
    id: 1,
    title: 'BURGUNDY',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg', // Aapki image ka path
    link: '#',
  },
  {
    id: 2,
    title: 'RED WINE',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'WHITE WINE',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'FINEST RED WINE',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'CLASSIC VINTAGE',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
  {
    id: 6,
    title: 'FRENCH WINE',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
];

const images = [
  {
    id: 1,
    src: "https://dtwine.wpenginepowered.com/wp-content/uploads/revslider/winery/slider1-1.jpg",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "https://dtwine.wpenginepowered.com/wp-content/uploads/revslider/winery/slider3-2.jpg",
    alt: "Slide 2",
  },
  {
    id: 3,
    src: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/slider4.jpg",
    alt: "Slide 3",
  },

];

// Tastefully Yours  start
const categorie = [
  {
    id: 1,
    name: "RED\nWINE",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon1.png",
  },
  {
    id: 2,
    name: "WHITE\nWINE",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon2.png",
  },
  {
    id: 3,
    name: "CHAMPAGNE",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon4.png",
  },
  {
    id: 4,
    name: "ROSE\nWINE",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon3.png",
  },
  {
    id: 5,
    name: "SPARKLING",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon5.png",
  },
];

// Products Data
const products = [
  {
    id: 1,
    title: 'Chandon Brut Rose',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img11.png', // Apni image path dynamic karein
    oldPrice: '$15.00',
    price: '$12.00',
    sale: true,
    rating: 5,
  },
  {
    id: 2,
    title: 'Champagne Classic',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img10.png',
    oldPrice: null,
    price: '$15.00',
    sale: false,
    rating: 5,
  },
  {
    id: 3,
    title: 'Rose Majeur Champagne',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img9.png',
    oldPrice: '$15.00',
    price: '$12.00',
    sale: true,
    rating: 5,
  },
  {
    id: 4,
    title: 'Chandon Brut',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img8.png',
    oldPrice: null,
    price: '$15.00',
    sale: false,
    rating: 5,
  },
];
// Tastefully Yours ends

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
   <div className="w-full">

<section className="relative w-full h-screen overflow-hidden group bg-white">
  {/* Background Image */}
  <Image
    src={images[currentIndex].src}
    alt={images[currentIndex].alt}
    fill
    priority
    className="object-contain bg-white transition-all duration-700"
  />

  {/* Content for Slide 1 */}
  {currentIndex === 0 && (
    <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
      <div className="relative w-full max-w-5xl h-full flex flex-col md:flex-row items-center justify-center text-center">

  {/* Top Text */}
<motion.h3
  initial={{ opacity: 0, y: -40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 1,
    duration: 0.8,
  }}
  className="
    georgia-font
    static md:absolute
    md:top-[22%]
    md:left-[25%]
    text-[#B20A2F]
    text-[18px] sm:text-[24px] md:text-[30px]
    leading-[30px] md:leading-[60px]
    font-normal
    uppercase
    tracking-[3px] sm:tracking-[6px]
  "
>
  DELIGHTFULL
</motion.h3>

        {/* Big Text */}
<TypeAnimation
  sequence={["Wine", 5000]}
  wrapper="h1"
  speed={50}
  cursor={false}
  className="
    philosopher
    text-black
    text-5xl
    sm:text-7xl
    md:text-[11rem]
    lg:text-[250px]
    font-bold
    leading-none
  "
/>

        {/* Bottom Text */}
<motion.p
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 2,
    duration: 0.8,
  }}
  className="
    static
    md:absolute
    md:bottom-[28%]
    md:right-[24%]

    font-[Georgia,serif]
    font-normal

    text-[#B20A2F]

    text-[18px]
    sm:text-[24px]
    md:text-[30px]

    leading-[30px]
    sm:leading-[40px]
    md:leading-[50px]

    uppercase
    tracking-[4px]
    text-center
  "
>
  EST - 1942
</motion.p>

      </div>
    </div>
  )}

  {/* Content for Slide 2 */}
  {currentIndex === 1 && (
  <div
    key={currentIndex}
    className="absolute inset-0 z-10 flex items-center justify-center md:justify-end px-6 sm:px-10 md:pr-16 lg:pr-28"
  >
    <div className="max-w-xl text-center flex flex-col items-center justify-center">

      {/* Top Text - Second */}
      <motion.h3
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="
          mt-4
          text-[#b20a2f]
          text-[18px]
          sm:text-[24px]
          md:text-[30px]
          leading-[40px]
          md:leading-[60px]
          font-[100]
          uppercase
          tracking-[3px]
          sm:tracking-[6px]
          font-serif
        "
        style={{
          fontFamily: "Georgia, serif",
        }}
      >
        A Perfect Blend
      </motion.h3>

      {/* Center Big Text - First */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center"
      >
        <TypeAnimation
          sequence={["in a Bottle", 5000]}
          wrapper="h1"
          speed={50}
          cursor={false}
          className="
            font-['Philosopher']
            font-bold
            text-[#111111]
            text-[40px]
            sm:text-[60px]
            md:text-[90px]
            lg:text-[120px]
            leading-[50px]
            sm:leading-[80px]
            md:leading-[110px]
            lg:leading-[150px]
            text-center
          "
        />
      </motion.div>

      {/* Bottom Description - Third */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="
          mt-6
          text-[#111111]
          text-[16px]
          sm:text-[17px]
          md:text-[18px]
          leading-[28px]
          md:leading-[30px]
          font-[100]
          max-w-xl
          mx-auto
          text-center
        "
        style={{
          fontFamily: "Georgia, serif",
        }}
      >
        Wine improves with age, The older it gets, the better you like it....
      </motion.p>

    </div>
  </div>
)}

  {/* Content for Slide 3 */}
{/* ================= Slide 3 (Mobile Optimized) ================= */}
{/* ================= Slide 3 (Narrow & Compact - Full Right) ================= */}
{currentIndex === 2 && (
  <div className="absolute inset-0 z-10 flex items-center justify-end pl-4 pr-2 sm:pr-6 md:pr-10 lg:pr-16 py-6 sm:py-10">
    
    {/* Main Responsive Container - Decreased max-widths */}
    <div className="relative w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[560px] ml-auto mr-0 flex items-center justify-center transition-all duration-300">

      {/* Polygon Background Container */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">

        {/* Main Polygon Base */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(6% 0%, 100% 8%, 100% 92%, 6% 100%, 0% 50%)",
            background: "#97B97A",
          }}
        />

        {/* Overlapping Polygon Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0% 12%, 50% 0%, 100% 12%, 100% 88%, 50% 100%, 0% 88%)",
              background: "#8FB077",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0% 12%, 50% 0%, 100% 12%, 100% 28%, 50% 16%, 0% 28%)",
              background: "#A8C58C",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0% 72%, 50% 84%, 100% 72%, 100% 88%, 50% 100%, 0% 88%)",
              background: "#A8C58C",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0% 28%, 50% 16%, 100% 28%, 100% 72%, 50% 84%, 0% 72%)",
              background: "#84A868",
            }}
          />
          <div
            className="absolute left-0 top-0 w-1/2 h-full"
            style={{
              clipPath: "polygon(0% 12%, 100% 22%, 100% 78%, 0% 88%)",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            className="absolute right-0 top-0 w-1/2 h-full"
            style={{
              clipPath: "polygon(0% 22%, 100% 12%, 100% 88%, 0% 78%)",
              background: "rgba(0,0,0,0.05)",
            }}
          />
        </div>

        {/* Right Light Accent */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(55% 12%, 100% 0%, 100% 100%, 55% 88%)",
            background: "#A8C58C",
          }}
        />

        {/* Center Shadow Overlay */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(8% 25%, 50% 12%, 100% 25%, 100% 75%, 50% 88%, 8% 75%)",
            background: "#89AA6E",
          }}
        />

        {/* Top Light Accent */}
        <div
          className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-32 pointer-events-none"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
            background: "rgba(255,255,255,.12)",
          }}
        />

        {/* Bottom Light Accent */}
        <div
          className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-32 pointer-events-none"
          style={{
            clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
            background: "rgba(255,255,255,.08)",
          }}
        />

        {/* Ambient Glows */}
        <div className="absolute -left-10 top-10 w-20 h-20 sm:w-36 sm:h-36 rounded-full bg-white/20 blur-2xl pointer-events-none" />
        <div className="absolute -right-10 bottom-10 w-20 h-20 sm:w-36 sm:h-36 rounded-full bg-black/15 blur-2xl pointer-events-none" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-3 sm:px-6 md:px-8 py-6 sm:py-10 md:py-12">

 <motion.h3
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.2, duration: 0.8 }}
  className="
    uppercase
    tracking-[2px] sm:tracking-[4px] md:tracking-[6px]
    text-[11px] sm:text-[16px] md:text-[20px]
    leading-[16px] sm:leading-[20px] md:leading-[20px]
    text-[#B20A2F]
    font-normal
    [font-family:Georgia,serif]
  "
>
  BOTTLED POETRY
</motion.h3>

        {/* Premium Icon Circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 2.2,
            duration: 0.8,
            type: "spring",
          }}
          className="my-2 sm:my-3 flex h-9 w-9 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#B72E3B] to-[#7D1420] shadow-md shrink-0"
        >
          <div className="relative w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8">
            <Image
              src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/icon.png"
              alt="Wine Icon"
              fill
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Animated Title */}
   {/* Animated Title */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="w-full"
>
  <TypeAnimation
    sequence={["Vineyard & Winery", 5000]}
    wrapper="h1"
    speed={40}
    cursor={false}
    className="
      font-['Philosopher']
      font-bold
      text-white
      text-[32px]
      sm:text-[40px]
      md:text-[60px]
      lg:text-[90px]
      leading-[40px]
      sm:leading-[65px]
      md:leading-[100px]
      lg:leading-[150px]
      text-center
    "
  />
</motion.div>
        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.8 }}
          className="mt-2 sm:mt-3 text-white/90 text-[10px] sm:text-xs md:text-sm leading-relaxed"
        >
          Experience handcrafted wines created with passion,
          tradition and generations of excellence.
        </motion.p>

      </div>

    </div>
  </div>
)}

  <div className="absolute inset-0"></div>

  {/* Navigation Arrows (Mobile me opacity hamesha visible ki hai context ke liye) */}
  <button
    onClick={prevSlide}
    className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 z-20
    bg-red-800/80 hover:bg-red-900 text-white
    p-2 sm:p-3 rounded-full
    opacity-100 md:opacity-0 md:group-hover:opacity-100
    transition-all duration-300"
  >
    <FiChevronLeft size={15} />
  </button>

  <button
    onClick={nextSlide}
    className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-20
    bg-red-800/80 hover:bg-red-900 text-white
    p-2 sm:p-3 rounded-full
    opacity-100 md:opacity-0 md:group-hover:opacity-100
    transition-all duration-300"
  >
    <FiChevronRight size={15} />
  </button>
</section>

    <section className="w-full py-12 px-4 sm:px-6  text-center bg-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Script / Cursive Top Heading */}
      <span
  className={`
    ${scriptFont.className}
    text-[28px]
    sm:text-[36px]
    md:text-[48px]
    leading-[48px]
    text-[#a3485e]
    tracking-wide
    mb-1
  `}
>
  Discover the
</span>

        {/* Main Serif Heading */}
    <h2
  className={`
   font-philosopher
    text-[38px]
    leading-normal
    font-normal
    text-[#111111]
    tracking-wider
    uppercase
    mb-4
  `}
>
  Wine Collection
</h2>
        {/* Description Paragraph */}
        <p className="text-gray-500 text-18px sm:text-base md:text-lg leading-relaxed max-w-2xl font-serif">
        Experience the art of winemaking through our carefully selected collection. 
Every bottle carries a story of heritage, craftsmanship, and unforgettable taste.
        </p>
      </div>
    </section>
{/* Wine Collection start */}

<section className="w-full bg-white">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

    {categories.map((item) => (
      <Link
        key={item.id}
        href={item.link}
        className="group relative h-[420px] overflow-hidden"
      >
        {/* Image */}
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45 transition-all duration-500 group-hover:bg-transparent" />

        {/* Default Text - Hover par Hide */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center transition-opacity duration-500 group-hover:opacity-0">
          <h3 className="text-black text-2xl font-serif uppercase">
            {item.title}
          </h3>

          <span className="mt-3 text-white font-semibold border-b border-white pb-1">
            SHOP NOW
          </span>
        </div>

      </Link>
    ))}

  </div>
</section>

{/* Wine Collection end */}

{/* Message from Wine Maker Upgrade to the latest!  start*/}

<section className="relative w-full min-h-[500px] md:min-h-[650px] overflow-hidden">

  {/* Background Image */}
  <Image
    src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/men-img-2.jpg"
    alt="Background"
    fill
    priority
    className="absolute inset-0 object-cover object-left md:object-left z-0"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-10"></div>

  {/* Content */}
  <div className="relative z-20 flex items-center min-h-[500px] md:min-h-[650px] px-5 sm:px-8 md:px-16">

    <div className="w-full md:max-w-xl md:ml-auto text-center md:text-left text-black">

      {/* Small Heading */}
     <span
  className={`
    ${scriptFont.className}
    italic
    text-[14px]
    sm:text-[16px]
    md:text-[40px]
    leading-[34px]
    md:leading-[28px]
    font-normal
    text-[#a3485e]
  `}
>
  Message from Wine Maker
</span>

      {/* Main Heading */}
  <h2
  className="
    mt-2
    mb-4
    md:mb-6
    text-[30px]
    sm:text-[36px]
    md:text-[38px]
    leading-normal
    font-normal
    text-[#111111]
  "
  style={{
    fontFamily: '"Old Standard TT", serif',
  }}
>
  Upgrade to the latest!
</h2>

      {/* Paragraph */}
      <p className="text-sm sm:text-base md:text-lg leading-6 md:leading-8 mb-4">
      Discover the elegance of our handcrafted wines, created with passion and dedication. 
Every bottle reflects a story of tradition, quality, and timeless craftsmanship.


      </p>

      <p className="text-sm sm:text-base md:text-lg leading-6 md:leading-8">
      From carefully selected grapes to the finest aging process, we bring you a collection 
that celebrates exceptional taste and unforgettable moments.
      </p>

      {/* Signature */}
      <div className="relative w-28 h-12 sm:w-36 sm:h-16 md:w-44 md:h-20 mt-6 md:mt-8 mx-auto md:mx-0">
        <Image
          src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/signature-1.png"
          alt="Signature"
          fill
          className="object-contain"
        />
      </div>

    </div>

  </div>

</section>

    {/* Message from Wine Maker Upgrade to the latest! end*/}


{/* The Process of WineMaking start */}
<section className="w-full bg-white py-12 px-4 sm:px-6 md:py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
       <span
  className={`
    ${scriptFont.className}
    block
    text-[28px]
    sm:text-[36px]
    md:text-[48px]
    leading-[48px]
    text-[#a3485e]
    tracking-wide
    mb-2
  `}
>
  Discover
</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-900 font-philosopher tracking-wide mb-4">
            The Process of WineMaking
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-serif px-4">
          Discover our traditional winemaking process,
           where passion and craftsmanship 
           come together to create exceptional wines.
          </p>
        </div>

        {/* Content Section: Image + Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Wine Bottle & Grapes Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-full aspect-square">
              <Image
                src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/bottle-1.jpg" 
                alt="Wine Bottle with Grapes"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Column: Process List */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            {processSteps.map((step) => (
              <div 
                key={step.id} 
                className="flex items-start gap-4 sm:gap-6 text-left"
              >
                {/* Icon Container */}
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Text Content */}
                <div>
               <h3 className="font-philosopher text-[28px] font-normal text-[#111111] mb-1">
  {step.title}
</h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-serif leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
{/* The Process of WineMaking end  */}





{/* IN THE HEART OF NAPA VALLEY start */}

<section className="group relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden flex items-center justify-center">
      
      {/* 1. Background Image with Hover Zoom effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/parallax-img1.jpg" // Image path yahan add karein
          alt="Our Manor Vineyard"
          fill
          priority
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:bg-black/35" />
      </div>

      {/* 2. Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
        
        {/* Cursive Subtitle */}
      <span
  className={`
    ${scriptFont.className}
    block
    text-[28px]
    sm:text-[36px]
    md:text-[48px]
    leading-[48px]
    text-white
    tracking-wide
    mb-2
    drop-shadow-md
  `}
>
  Our Manor
</span>

        {/* Main Heading */}
        <h2 className="text-white text-sm sm:text-base font-philosopher md:text-lg lg:text-xl font-light tracking-[0.25em] uppercase mb-8 drop-shadow-sm">
          In the heart of napa valley
        </h2>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#A04355] hover:bg-[#853444] text-white px-6 py-3 rounded-full text-xs sm:text-sm tracking-wider font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <span>Visit our farm</span>
          <span className="text-base leading-none">→</span>
        </a>

      </div>

    </section>
    {/* IN THE HEART OF NAPA VALLEY end */}

{/* ===================Tastefully Yours  start ===================*/}
    <section className="relative w-full bg-[#FFFFFF] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Decorative Vine/Leaf Effect (Optional) */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 pointer-events-none opacity-30">
        <Image
          src="/images/leaf-bg.png"
          alt="Vine Leaf"
          fill
          className="object-contain object-top-left"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        
        {/* ==================== 1. HEADER SECTION ==================== */}
        <div className="text-center max-w-xl mx-auto mb-10">
        <span
  className={`
    ${scriptFont.className}
    block
    text-[28px]
    sm:text-[36px]
    md:text-[48px]
    leading-[48px]
    text-[#a3485e]
    tracking-wide
    mb-1
  `}
>
  Our Delightful offerings
</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-philosopher text-[#2D2B2A] tracking-wide mb-3">
            Tastefully Yours
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans px-4">
           Savor the finest selection of wines crafted with passion, tradition, and elegance. 
Every bottle delivers a unique taste experience made to be remembered.
          </p>
        </div>

        {/* ==================== 2. CIRCULAR CATEGORIES FILTER ==================== */}
<div className="flex flex-wrap justify-center items-center gap-8 mb-16">
  {categorie.map((cat, idx) => (
    <div key={cat.id} className="flex items-center">

      <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">

        {/* Background Image */}
        <Image
          src={cat.image}
          alt={cat.name}
          fill
          className="object-contain"
        />

        {/* Text Inside Image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] sm:text-xs font-bold text-center text-black whitespace-pre-line leading-4">
            {cat.name}
          </span>
        </div>

      </div>

      {idx !== categorie.length - 1 && (
        <span className="hidden lg:block mx-5 text-gray-300">|</span>
      )}

    </div>
  ))}
</div>

        {/* ==================== 3. PRODUCTS GRID ==================== */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
  {products.map((product) => (
    <div
      key={product.id}
      className="group flex flex-col items-center text-center p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 relative bg-white"
    >
      {/* SALE Badge */}
      {product.sale && (
        <span className="absolute top-4 right-4 sm:right-6 bg-[#689F38] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm z-10">
          SALE
        </span>
      )}

      {/* Product Image Wrapper */}
      <div className="relative w-full h-64 sm:h-72 mb-4 overflow-hidden group">
        {/* Product Image */}
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />

        {/* Bottom Hover Icons */}
        <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {/* Shopping Cart */}
          <button className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#A04355] transition-all duration-300 shadow-md">
            <FiShoppingCart size={20} />
          </button>

          {/* Favorite */}
          <button className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#A04355] transition-all duration-300 shadow-md">
            <FiHeart size={20} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <h3 className="text-sm sm:text-base font-serif text-gray-800 mb-2 border-b border-gray-200 pb-2 w-full">
        {product.title}
      </h3>

      {/* Price */}
      <div className="flex items-center gap-2 mb-2 text-xs sm:text-sm">
        {product.oldPrice && (
          <span className="text-gray-400 line-through">{product.oldPrice}</span>
        )}
        <span className="text-gray-900 font-semibold">{product.price}</span>
      </div>

      {/* Rating Stars */}
      <div className="flex text-amber-400 text-xs">
        {Array.from({ length: product.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
    </div>
  ))}
</div>
        {/* ==================== 4. BOTTOM DISCOVERY SECTION ==================== */}
        <div className="text-center max-w-xl mx-auto pt-8 border-t border-gray-100">
       <span
  className={`
    ${scriptFont.className}
    block
    text-[28px]
    sm:text-[36px]
    md:text-[48px]
    leading-[48px]
    text-[#a3485e]
    tracking-wide
    mb-1
  `}
>
  Discovery
</span>
          <h2 className="text-2xl sm:text-3xl font-philosopher text-[#2D2B2A] tracking-wide mb-3">
            That Gets Better with Ageing
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans px-4">
           Like a fine wine, every moment becomes more refined with time. 
Our carefully aged collection captures depth, character, and exceptional flavor in every bottle.
          </p>
        </div>

      </div>
    </section>
{/* ===================Tastefully Yours  end ===================*/}
{/* That Gets Better with Ageing  start */}
<section className="w-full bg-white">
      {/* Header Section */}
      {/* <div className="text-center  px-4 max-w-2xl mx-auto">
        <span 
          className="block text-3xl text-[#d75c6d] mb-1 font-serif italic"
          style={{ fontFamily: "'Dancing Script', 'Great Vibes', cursive" }}
        >
          Discovery
        </span>
        <h2 className="text-2xl md:text-3xl font-serif text-gray-800 tracking-wide font-medium mb-3">
          That Gets Better with Ageing
        </h2>
        <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div> */}

      {/* Grid Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {galleryItems.map((item) => (
          <div 
            key={item.id} 
            className="relative group overflow-hidden h-72 sm:h-80 md:h-72 lg:h-80 cursor-pointer"
          >
            {/* Background Image */}
            <div className="w-full h-full relative">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* HOVER OVERLAY WRAPPER */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              
              {/* 1. Main Overlay Background */}
              <div className="absolute inset-0 bg-[#d75c6d]/85" />

              {/* 2. Diagonal Polygon Shape Left Side (Darker Tint) */}
              <div 
                className="absolute inset-0 bg-[#bd4556]/40 pointer-events-none"
                style={{ clipPath: 'polygon(0 0, 70% 0, 40% 100%, 0% 100%)' }}
              />

              {/* 3. Diagonal Shape Right Side (Lighter Tint) */}
              <div 
                className="absolute inset-0 bg-white/10 pointer-events-none"
                style={{ clipPath: 'polygon(55% 0, 100% 0, 100% 100%, 75% 100%)' }}
              />

              {/* OVERLAY CONTENT */}
              <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 text-white">
                
                {/* Top Action Icons */}
                <div className="flex items-center gap-3">
                  <button 
                    aria-label="Link"
                    className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-[#d75c6d] transition-all duration-300"
                  >
                    <LinkIcon className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    aria-label="Zoom"
                    className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center hover:bg-white hover:text-[#d75c6d] transition-all duration-300"
                  >
                    <Search className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Bottom Text Content */}
                <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 
                    className="text-lg md:text-xl font-normal italic tracking-wide font-serif"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[11px] tracking-wider uppercase opacity-90 font-light mt-0.5">
                    {item.category}
                  </p>
                </div>

              </div>

            </div>

          </div>
        ))}
      </div>
    </section>
    {/* That Gets Better with Ageing  end */}

<section 
      className="relative w-full py-16 sm:py-20 md:py-24  bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        // Dark Wooden Texture Background
        backgroundImage: "url('https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/bg.jpg')", // Dark wooden background image path
      }}
    >
      {/* Subtle Overlay to make text and bottles pop */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 md:mb-16">
       <span
  className={`
    ${scriptFont.className}
    block
    text-[28px]
    sm:text-[36px]
    md:text-[48px]
    leading-[48px]
    text-[#E8B87D]
    mb-1
  `}
>
  Discover
</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-philosopher text-white uppercase tracking-widest mb-3">
            Our Vintage Wines
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 font-serif leading-relaxed px-4 opacity-80">
          Explore our vintage collection, where time, tradition, and craftsmanship blend together to create wines of exceptional quality and unforgettable taste.
          </p>
        </div>

        {/* Swiper Auto Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            // Mobile (sm)
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Tablet (md)
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // Desktop (lg)
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="wine-swiper !pb-14"
        >
          {wineProducts.map((wine) => (
            <SwiperSlide key={wine.id}>
              <div className="flex flex-col items-center text-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                
                {/* Wine Bottle Image Container */}
                <div className="relative w-full h-72 sm:h-80 md:h-96 mb-6 flex items-center justify-center">
                  <Image
                    src={wine.image}
                    alt={wine.name}
                    fill
                    className="object-contain filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]"
                    priority
                  />
                </div>

                {/* Wine Title */}
                <h3 className="text-xs sm:text-sm md:text-base font-serif text-white tracking-widest uppercase mb-1 font-semibold group-hover:text-[#E8B87D] transition-colors">
                  {wine.name}
                </h3>

                {/* Wine Price */}
                <span className="text-xs sm:text-sm font-serif text-[#E8B87D] font-bold">
                  {wine.price}
                </span>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      {/* Pagination Bullet Styling */}
      <style jsx global>{`
        .wine-swiper .swiper-pagination-bullet {
          background: #ffffff !important;
          opacity: 0.4;
        }
        .wine-swiper .swiper-pagination-bullet-active {
          background: #e8b87d !important;
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
      `}</style>
    </section>

    {/* HOME EMAIL SEND START */}
  <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center bg-black/80 text-white overflow-hidden py-16 px-4">
      
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0" 
        style={{ backgroundImage: "url('https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/13-2.jpg')" }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-3xl w-full mx-auto text-center flex flex-col items-center justify-center">
        
        {/* Cursive / Serif Title */}
     <h2
  className={`
    ${scriptFont.className}
    text-[28px]
    sm:text-[36px]
    md:text-[48px]
    leading-[48px]
    tracking-wide
    text-stone-100
    mb-4
  `}
>
  Subscribe to Stay Informed
</h2>

        {/* Subtitle / Description Text */}
        <p className="text-sm sm:text-base md:text-lg text-stone-300 font-serif max-w-lg mb-8 leading-relaxed">
         Stay updated with our latest wines, exclusive releases, and stories from our vineyard. 
Join our community and discover the world of fine winemaking.
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
     {/* HOME EMAIL SEND START */}
    </div>
  );
}
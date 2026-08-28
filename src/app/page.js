
"use client";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion,AnimatePresence  } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ShoppingBag,  Heart } from 'lucide-react';
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







// Data Structure
const wineData = {
  "red-wine": {
    title: "Red Wine",
    description:
      "Elementum nibh tellus molestie nunc. Accumsan lacus vel facilisis volutpat est velit. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Purus in massa tempor nec feugiat. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Interdum varius sit amet mattis.",
    image: "https://dt-winey.myshopify.com/cdn/shop/files/grid01.jpg?v=1654160115", // Replace with your image path
  },
  "rose-wine": {
    title: "Rosé Wine",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://dt-winey.myshopify.com/cdn/shop/files/grid01.jpg?v=1654160115", // Replace with your image path
  },
  fortified: {
    title: "Fortified",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://dt-winey.myshopify.com/cdn/shop/files/grid01.jpg?v=1654160115", // Replace with your image path
  },
};

// ============= SWIPER PRODUCTS END ===============



const products = [
  { id: 1, name: 'Amber Aroma', price: '$60.00', originalPrice: '$70.00', image: 'https://wineryn-store-demo.myshopify.com/cdn/shop/files/product1.jpg?v=1761194208&width=480', sale: true },
  { id: 2, name: 'Blush Bloom', price: '$60.00', originalPrice: '$70.00', image: 'https://wineryn-store-demo.myshopify.com/cdn/shop/files/product33-variant.jpg?v=1761194209&width=480', sale: true },
  { id: 3, name: 'Crimson Cloud', price: '$60.00', originalPrice: '$70.00', image: 'https://wineryn-store-demo.myshopify.com/cdn/shop/files/product34-variant.jpg?v=1761194209&width=480', sale: true },
  { id: 4, name: 'Elegant Essence', price: '$60.00', originalPrice: '$70.00', image: 'https://wineryn-store-demo.myshopify.com/cdn/shop/files/product35-variant.jpg?v=1761194209&width=480', sale: true },
];


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


// Tastefully Yours  start
const categorie = [
  {
    id: 1,
    name: "BURGUNDY",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon1.png",
  },
  {
    id: 2,
    name: "WHITEWINE",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon2.png",
  },
  {
    id: 3,
    name: "CHAMPAGNE",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon4.png",
  },
  {
    id: 4,
    name: "CHAMPAGNE",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon3.png",
  },
  {
    id: 5,
    name: "VINTAGE WINES",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon5.png",
  },
];

// Products Data
// const products = [
//   {
//     id: 1,
//     title: 'Chandon Brut Rose',
//     image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img11.png', // Apni image path dynamic karein
//     oldPrice: '$15.00',
//     price: '$12.00',
//     sale: true,
//     rating: 5,
//   },
//   {
//     id: 2,
//     title: 'Champagne Classic',
//     image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img10.png',
//     oldPrice: null,
//     price: '$15.00',
//     sale: false,
//     rating: 5,
//   },
//   {
//     id: 3,
//     title: 'Rose Majeur Champagne',
//     image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img9.png',
//     oldPrice: '$15.00',
//     price: '$12.00',
//     sale: true,
//     rating: 5,
//   },
//   {
//     id: 4,
//     title: 'Chandon Brut',
//     image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img8.png',
//     oldPrice: null,
//     price: '$15.00',
//     sale: false,
//     rating: 5,
//   },
// ];
// Tastefully Yours ends

export default function HeroSlider() {

// Pehle state initialize karein
  const [activeTab, setActiveTab] = useState("red-wine");

  // Ab activeTab ko access karein
  const currentContent = wineData[activeTab];

  const images = [
  {
    id: 1,
    src: "/image-1.png",
    mobileSrc: "/image-1-mobile.png",
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "/image-3.png",
    mobileSrc: "/image-3.png-mobile.png",
    alt: "Slide 2",
  },
];


  const [current, setCurrent] = useState(0);

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);


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

  // Target End Date set karein (e.g., Target date set for 45 days in future)
  // Apni real offer end date yahan replace kar sakte hain: new Date('2026-12-31T23:59:59')
  const [targetDate] = useState(() => {
    const target = new Date();
    target.setDate(target.getDate() + 45); // Current date se 45 din aage
    return target.getTime();
  });

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0, isExpired: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
        isExpired: false,
      });
    };

    // Run initial calculation
    calculateTimeLeft();

    // Live update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
   <div className="w-full">

<section className="relative w-full overflow-hidden">
  <div className="relative w-full">

    <motion.picture
      key={images[current].id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative block w-full"
    >
      {/* Mobile */}
      <source
        media="(max-width: 767px)"
        srcSet={images[current].mobileSrc}
      />

      {/* Desktop */}
      <Image
        src={images[current].src}
        alt={images[current].alt}
        width={1920}
        height={800}
        priority
        className="block w-full h-auto"
        sizes="100vw"
      />
    </motion.picture>

    {/* Left Arrow */}
    <button
      onClick={prevSlide}
      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20
                 w-10 h-10 md:w-12 md:h-12 rounded-full
                 bg-black/20 backdrop-blur-md
                 border border-white/40 text-white
                 flex items-center justify-center
                 hover:bg-white hover:text-black
                 transition-all duration-300"
    >
      ←
    </button>

    {/* Right Arrow */}
    <button
      onClick={nextSlide}
      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20
                 w-10 h-10 md:w-12 md:h-12 rounded-full
                 bg-black/20 backdrop-blur-md
                 border border-white/40 text-white
                 flex items-center justify-center
                 hover:bg-white hover:text-black
                 transition-all duration-300"
    >
      →
    </button>

    {/* Dots */}
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
      {images.map((image, index) => (
        <button
          key={image.id}
          onClick={() => setCurrent(index)}
          className={`h-2.5 rounded-full transition-all ${
            current === index
              ? "w-8 bg-white"
              : "w-2.5 bg-white/50"
          }`}
        />
      ))}
    </div>

  </div>
</section>

{/* ==================== start product list start ===================== */}

<section className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider text-black">
          Our Best Seller
        </h2>
        <div className="w-12 h-0.5 bg-red-800 mx-auto mt-2 mb-6"></div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setActiveTab('BURGUNDY')}
            className={`px-6 py-2 border text-sm font-semibold tracking-wider transition ${
              activeTab === 'BURGUNDY'
                ? 'bg-[#983241] text-white border-[#983241]'
                : 'border-red-900 text-red-900 hover:bg-red-50'
            }`}
          >
            BURGUNDY
          </button>
          <button
            onClick={() => setActiveTab('CHAMPAGNE')}
            className={`px-6 py-2 border text-sm font-semibold tracking-wider transition ${
              activeTab === 'CHAMPAGNE'
                ? 'bg-[#983241] text-white border-[#983241]'
                : 'border-red-900 text-red-900 hover:bg-red-50'
            }`}
          >
            CHAMPAGNE
          </button>
        </div>
      </div>

      {/* Grid: 1 col (Mobile), 2 col (Sm), 3 col (Md), 4 col (Lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            {/* Card Container */}
            <div className="relative bg-[#f8f8f8] aspect-square flex items-center justify-center p-6 overflow-hidden">
              {/* Sale Badge */}
              {product.sale && (
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
                  <div className="bg-[#e53935] text-white font-bold text-xs py-1 text-center rotate-45 translate-x-7 translate-y-3 shadow-md w-32">
                    Sale
                  </div>
                </div>
              )}

              {/* Product Image */}
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Action Buttons (Hover State) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button className="p-2.5 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#983241] hover:text-white transition">
                  <ShoppingBag size={18} />
                </button>
                <button className="p-2.5 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#983241] hover:text-white transition">
                  <Search size={18} />
                </button>
                <button className="p-2.5 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#983241] hover:text-white transition">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center mt-4">
              <h3 className="font-semibold text-gray-900 text-base">{product.name}</h3>
              <div className="mt-1 space-x-2">
                <span className="text-[#983241] font-semibold">{product.price}</span>
                <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            {/* Card Container */}
            <div className="relative bg-[#f8f8f8] aspect-square flex items-center justify-center p-6 overflow-hidden">
              {/* Sale Badge */}
              {product.sale && (
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none z-10">
                  <div className="bg-[#e53935] text-white font-bold text-xs py-1 text-center rotate-45 translate-x-7 translate-y-3 shadow-md w-32">
                    Sale
                  </div>
                </div>
              )}

              {/* Product Image */}
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Action Buttons (Hover State) */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button className="p-2.5 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#983241] hover:text-white transition">
                  <ShoppingBag size={18} />
                </button>
                <button className="p-2.5 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#983241] hover:text-white transition">
                  <Search size={18} />
                </button>
                <button className="p-2.5 bg-white rounded-full shadow-md text-gray-700 hover:bg-[#983241] hover:text-white transition">
                  <Heart size={18} />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="text-center mt-4">
              <h3 className="font-semibold text-gray-900 text-base">{product.name}</h3>
              <div className="mt-1 space-x-2">
                <span className="text-[#983241] font-semibold">{product.price}</span>
                <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

{/* ==================== start product list end ===================== */}

{/*=================== product deal timer start  ===========*/}

<section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Product Image Section */}
<div className="lg:col-span-6 flex justify-center items-center">
  <motion.div
    className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[700px] max-w-[700px]"
    animate={{
      opacity: [0.4, 1, 0.4],
      y: [20, -10, 20],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <Image
      src="https://wineryn-store-demo.myshopify.com/cdn/shop/files/countdownV1-img.png?v=1643078022&width=480"
      alt="Amber Affair Wine Bottle with Decorative Holder"
      fill
      className="object-contain"
      priority
    />
  </motion.div>
</div>

        {/* Product Details & Deal Section */}
        <div className="lg:col-span-6 space-y-4 md:space-y-6 text-center lg:text-left">
          
          <p className="text-gray-500 text-sm md:text-base font-normal">
            Hot deal of the day
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
            Winery Store On Sale 10% Offer
          </h1>

          <h2 className="text-lg md:text-xl text-gray-800 font-medium">
            Amber Affair
          </h2>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="text-xl md:text-2xl font-bold text-black">$40.00</span>
            <span className="text-gray-400 line-through text-sm md:text-base">$50.00</span>
          </div>

          {/* Dynamic Countdown Timer Block */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6">
            
            <div className="flex items-center gap-4">
              <span className="text-gray-500 font-medium text-sm md:text-base">
                {timeLeft.isExpired ? 'Expired' : 'Ends In'}
              </span>
              <div className="hidden sm:block w-[1px] h-12 bg-gray-300"></div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {/* Days */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#983241] text-white flex items-center justify-center text-base sm:text-lg md:text-xl font-bold shadow-sm">
                  {String(timeLeft.days).padStart(2, '0')}
                </div>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase mt-2">
                  Days
                </span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#983241] text-white flex items-center justify-center text-base sm:text-lg md:text-xl font-bold shadow-sm">
                  {String(timeLeft.hours).padStart(2, '0')}
                </div>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase mt-2">
                  Hours
                </span>
              </div>

              {/* Mins */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#983241] text-white flex items-center justify-center text-base sm:text-lg md:text-xl font-bold shadow-sm">
                  {String(timeLeft.mins).padStart(2, '0')}
                </div>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase mt-2">
                  Mins
                </span>
              </div>

              {/* Secs */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#983241] text-white flex items-center justify-center text-base sm:text-lg md:text-xl font-bold shadow-sm">
                  {String(timeLeft.secs).padStart(2, '0')}
                </div>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-gray-500 uppercase mt-2">
                  Secs
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-center lg:justify-start">
            <button 
              disabled={timeLeft.isExpired}
              className="bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-semibold text-xs md:text-sm uppercase tracking-widest px-8 py-3.5 transition-colors duration-200"
            >
              Shop Now
            </button>
          </div>

        </div>

      </div>
    </section>









<section className="w-full max-w-6xl mx-auto px-4 py-12">
      {/* Top Navigation Tabs */}
      <div className="flex justify-center items-center gap-6 sm:gap-10 border-b border-gray-100 pb-4 mb-10 sm:mb-16">
        <button
          onClick={() => setActiveTab("red-wine")}
          className={`text-xs sm:text-sm md:text-base font-semibold tracking-wider transition-all duration-300 pb-1 ${
            activeTab === "red-wine"
              ? "bg-[#F3EFEA] text-red-950 px-3 py-1 font-bold"
              : "text-gray-700 hover:text-black"
          }`}
        >
          RED WINE
        </button>

        <button
          onClick={() => setActiveTab("rose-wine")}
          className={`text-xs sm:text-sm md:text-base font-semibold tracking-wider transition-all duration-300 pb-1 ${
            activeTab === "rose-wine"
              ? "bg-[#F3EFEA] text-red-950 px-3 py-1 font-bold"
              : "text-gray-700 hover:text-black"
          }`}
        >
          ROSE WINE
        </button>

        <button
          onClick={() => setActiveTab("fortified")}
          className={`text-xs sm:text-sm md:text-base font-semibold tracking-wider transition-all duration-300 pb-1 ${
            activeTab === "fortified"
              ? "bg-[#F3EFEA] text-red-950 px-3 py-1 font-bold"
              : "text-gray-700 hover:text-black"
          }`}
        >
          FORTIFIED
        </button>
      </div>

      {/* Dynamic Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Text Content */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 lg:pr-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 tracking-tight">
            {currentContent.title}
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
            {currentContent.description}
          </p>

          <div className="pt-2">
            <button className="bg-[#F3EFEA] hover:bg-[#e7e1d8] text-gray-900 text-xs font-bold tracking-widest px-6 py-3.5 transition-colors uppercase">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Side: Image with Offset Background Card */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
          {/* Subtle beige offset box behind the image */}
          <div className="relative w-full max-w-[500px]">
            <div className="absolute -top-4 -left-4 w-full h-full bg-[#F3EFEA] -z-10 hidden sm:block" />

            <div className="relative w-full h-[320px] sm:h-[400px] md:h-[450px]">
              <Image
                src={currentContent.image}
                alt={currentContent.title}
                fill
                priority
                className="object-cover shadow-sm transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>




<section className="relative w-full min-h-[600px] overflow-hidden">

  {/* Fixed / Sticky Background */}
  <div className="absolute inset-0">
    <div className="sticky top-0 h-screen w-full overflow-hidden">

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <Image
          src="https://wineryn-store-demo.myshopify.com/cdn/shop/files/bg-infoV1.jpg?v=1643020282&width=922"
          alt="Winery Background"
          fill
          priority
          className="object-cover object-center"
        />
      </motion.div>

    </div>
  </div>

  {/* Content */}
  <div className="relative z-10 min-h-[600px] flex items-center justify-center py-20">

    <motion.div
      className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4 md:space-y-6"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >

      <p className="text-gray-700 font-serif italic text-base sm:text-lg md:text-xl">
        Wellcom To Wineryn Market
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black uppercase tracking-wider">
        Made With Love
      </h1>

      <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
        In our wine racks, you will find a vast selection of different wines
        from the four corners of the globe. We firmly believe that the wine
        we make and sell is capable of competing with world famous brands.
      </p>

      <div className="pt-4">
        <a
          href="#about"
          className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-black border-b-2 border-black pb-1"
        >
          More About Us
        </a>
      </div>

    </motion.div>

  </div>
</section>


 
{/* Wine Collection start */}



{/* Wine Collection end */}

{/* Message from Wine Maker Upgrade to the latest!  start*/}


    {/* Message from Wine Maker Upgrade to the latest! end*/}


{/* The Process of WineMaking start */}

{/* The Process of WineMaking end  */}





{/* IN THE HEART OF NAPA VALLEY start */}


    {/* IN THE HEART OF NAPA VALLEY end */}

{/* ===================Tastefully Yours  start ===================*/}

{/* ===================Tastefully Yours  end ===================*/}
{/* That Gets Better with Ageing  start */}

    {/* That Gets Better with Ageing  end */}



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
        <p className="text-sm sm:text-base md:text-lg text-stone-300 font-old-standard  max-w-lg mb-8 leading-relaxed">
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
  className="
    w-auto
    bg-white
    hover:bg-stone-200
    text-stone-800
    font-serif
    text-xs
    sm:text-sm
    md:text-base
    px-5
    sm:px-7
    md:px-8
    py-2
    sm:py-2.5
    md:py-3
    rounded-full
    transition-colors
    duration-300
    font-medium
    whitespace-nowrap
    cursor-pointer
    mx-auto
    sm:mx-0
  "
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
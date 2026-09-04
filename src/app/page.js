
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
import WineLoader from "../component/WineLoader"; // WineLoader component ko import karein
// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Alex_Brush, Playfair_Display } from 'next/font/google';

// The Process of WineMaking  items or data  start

const navbarCountries = [
{
  id: "01",
  name: "ITALY",
  link: "/italy",
  flag: "https://flagcdn.com/w40/it.png",
},
  {
    id: "02",
    name: "FRANCE",
    link: "/france",
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    id: "03",
    name: "ARGENTINA",
    link: "/argentina",
    flag: "https://flagcdn.com/w40/ar.png",
  },
{
  id: "04",
  name: "CALIFORNIA",
  link: "/california",
  flag: "https://flagcdn.com/w40/us-ca.png",
},
  {
    id: "05",
    name: "SPAIN",
    link: "/spain",
    flag: "https://flagcdn.com/w40/es.png",
  },
  {
    id: "06",
    name: "PORTUGAL",
    link: "/portugal",
    flag: "https://flagcdn.com/w40/pt.png",
  },
  {
    id: "07",
    name: "NEW ZEALAND",
    link: "/New-Zealand",
    flag: "https://flagcdn.com/w40/nz.png",
  },
  {
    id: "08",
    name: "GERMANY",
    link: "/Germany",
    flag: "https://flagcdn.com/w40/de.png",
  },
{
  id: "09",
  name: "OHIO",
  link: "/Ohio",
  flag: "https://flagcdn.com/w40/us-oh.png",
},
{
  id: "10",
  name: "OREGON",
  link: "/Oregon",
  flag: "https://flagcdn.com/w40/us-or.png",
},
];


const regions = [
  {
    name: "Italy",
    count: "20 Regional Selections",
    description:
      "Italy is home to one of the world's most diverse wine cultures, with each region offering its own grapes, traditions, and styles.",
    href: "/portfolio/italy",
  },
  {
    name: "France",
    count: "4 Regional Selections",
    description:
      "Discover wines from 4 regional selections, representing the heritage and diversity of French winemaking.",
    href: "/portfolio/france",
  },
  {
    name: "Argentina",
    description:
      "Discover our selection from Argentina and wines shaped by distinctive growing regions and winemaking traditions.",
    href: "/portfolio/argentina",
  },
  {
    name: "California",
    description:
      "Discover selected California wines representing the state's diverse wine-growing regions and styles.",
    href: "/portfolio/california",
  },
  {
    name: "Oregon",
    description:
      "Explore distinctive wines from Oregon and selections from one of America's emerging wine regions.",
    href: "/portfolio/oregon",
  },
  {
    name: "Spain",
    description:
      "Discover wines reflecting Spain's diverse regions, indigenous grapes, and winemaking traditions.",
    href: "/portfolio/spain",
  },
  {
    name: "Portugal",
    description:
      "Explore wines that showcase Portugal's unique grape varieties and rich winemaking heritage.",
    href: "/portfolio/portugal",
  },
];

const reasons = [
  {
    title: "26 Years in the Wine Business",
    description:
      "Our decades of experience have helped us develop a strong understanding of producers, regions, wine styles, and the needs of business customers.",
  },
  {
    title: "Carefully Selected Portfolio",
    description:
      "We don't simply offer wines—we curate a portfolio of selections we believe are worth bringing to your business.",
  },
  {
    title: "Regional Expertise",
    description:
      "Our portfolio allows businesses to explore wines from distinctive regions while understanding the story and character behind each selection.",
  },
  {
    title: "Personal Service",
    description:
      "We're available to answer questions, provide recommendations, and help businesses identify wines that fit their specific needs.",
  },
  {
    title: "Curated Cases",
    description:
      "Our curated cases provide businesses with an opportunity to explore multiple wines and regional styles in one selection.",
  },
];

const offers = [
  {
    title: "Handpicked Selections",
    description:
      "We carefully select wines from regional European winemakers and other respected producers, focusing on wines with quality, character, and a strong connection to their region.",
  },
  {
    title: "Personal Guidance",
    description:
      "Choosing the right wines for your business can be challenging. Our team provides personal recommendations and answers questions to help you make informed selections for your wine program.",
  },
  {
    title: "Curated Cases",
    description:
      "Looking to explore several wines at once? Our curated cases bring together thoughtfully selected bottles representing different regions and styles.",
  },
  {
    title: "Wholesale Opportunities",
    description:
      "Interested in carrying our wines? Contact our team to learn about wholesale pricing, availability, and ordering options.",
  },
];

const solutions = [
  {
    number: "01",
    title: "Restaurants",
    description:
      "Build or expand your wine list with selections that complement your cuisine and customer base.",
  },
  {
    number: "02",
    title: "Hotels & Hospitality",
    description:
      "Source wines for restaurants, lounges, events, banquets, and hospitality programs.",
  },
  {
    number: "03",
    title: "Wine Retailers",
    description:
      "Discover distinctive wines that can add variety and value to your retail selection.",
  },
  {
    number: "04",
    title: "Bars & Wine Programs",
    description:
      "Explore wines suitable for by-the-glass programs, bottle service, and curated wine menus.",
  },
  {
    number: "05",
    title: "Catering & Events",
    description:
      "Create wine selections for private events, corporate functions, and special occasions.",
  },
];

// Duplicate array for infinite slider
const loopCountries = [...navbarCountries, ...navbarCountries];


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
    src: "https://dtwine.wpenginepowered.com/wp-content/uploads/revslider/winery/slider1-1.jpg", // Desktop
    mobileSrc: "https://dtwine.wpenginepowered.com/wp-content/uploads/revslider/winery/slider1-1.jpg", // Mobile (ya mobile portrait image ka link)
    alt: "Slide 1",
  },
  {
    id: 2,
    src: "https://dtwine.wpenginepowered.com/wp-content/uploads/revslider/winery/slider3-2.jpg",
    mobileSrc: "https://dtwine.wpenginepowered.com/wp-content/uploads/revslider/winery/slider3-2.jpg",
    alt: "Slide 2",
  },
  {
    id: 3,
    src: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/slider4.jpg",
    mobileSrc: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/slider4.jpg",
    alt: "Slide 3",
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



const product = [
  {
    id: 1,
    name: 'De Barlow Grape Wine',
    category: 'italy',
    image: '/italy/Ascheri/Arneis, DOC.webp', // apni image ka path lagayein
    badge: 'SAVE 10%',
    badgeColor: 'bg-green-600',
  },
  {
    id: 2,
    name: 'Champion Red Wine',
    category: 'France',
    
    image: '/France/Bordeaux - Château Le Grand Verdus/Bordeaux Blanc.webp',
  },
  {
    id: 3,
    name: 'Britain White Wine',
    category: 'Argentina',
    
    image: '/Argentina/Cabernet Sauvignon Reserva.webp',
    badge: 'SOLD OUT',
    badgeColor: 'bg-red-600',
    isSoldOut: true,
  },
  {
    id: 4,
    name: 'Alho American Wine',
    category: 'Germany',
   
    image: '/Germany/Piesporter Goldtröpfchen Riesling Spätlese.webp',
  },
];
// Tastefully Yours ends

export default function HeroSlider() {
   const [loading, setLoading] = useState(true);
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
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <WineLoader />;
  }

  return (
   <div className="w-full">

<section className="relative w-full h-[100dvh] min-h-[100dvh] overflow-hidden group bg-white m-0 p-0">
  {/* Background Image - Optimized for Mobile & Desktop */}
  <Image
    src={images[currentIndex].src}
    alt={images[currentIndex].alt}
    fill
    priority
    sizes="100vw"
    className="object-cover object-[center_top] sm:object-center transition-all duration-700"
  />

  {/* Content for Slide 1 */}
  {currentIndex === 0 && (
    <div className="absolute inset-0 z-10 flex items-center justify-center px-4">
      <div className="relative w-full max-w-5xl h-full flex flex-col md:flex-row items-center justify-center text-center">

        {/* Top Text */}
        <motion.h3
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="
            georgia-font
            static md:absolute
            md:top-[22%] md:left-[25%]
            text-[#B20A2F]
            text-[18px] sm:text-[24px] md:text-[30px]
            leading-snug
            font-normal uppercase
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
            text-5xl sm:text-7xl md:text-[11rem] lg:text-[250px]
            font-bold
            leading-none
          "
        />

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="
            static md:absolute
            md:bottom-[28%] md:right-[24%]
            font-[Georgia,serif] font-normal
            text-[#B20A2F]
            text-[18px] sm:text-[24px] md:text-[30px]
            leading-snug
            uppercase tracking-[4px] text-center
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

        {/* Top Text */}
        <motion.h3
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="
            text-[#b20a2f]
            text-[18px] sm:text-[24px] md:text-[30px]
            leading-snug
            font-[100] uppercase
            tracking-[3px] sm:tracking-[6px]
            font-serif
          "
          style={{ fontFamily: "Georgia, serif" }}
        >
          A Perfect Blend
        </motion.h3>

        {/* Center Big Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center my-2"
        >
          <TypeAnimation
            sequence={["in a Bottle", 5000]}
            wrapper="h1"
            speed={50}
            cursor={false}
            className="
              font-['Philosopher'] font-bold
              text-[#111111]
              text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px]
              leading-none
              text-center
            "
          />
        </motion.div>

        {/* Bottom Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="
            text-[#111111]
            text-[16px] sm:text-[17px] md:text-[18px]
            leading-relaxed
            font-[100] max-w-xl mx-auto text-center
          "
          style={{ fontFamily: "Georgia, serif" }}
        >
          Wine improves with age, The older it gets, the better you like it....
        </motion.p>

      </div>
    </div>
  )}

  {/* Content for Slide 3 */}
  {currentIndex === 2 && (
    <div className="absolute inset-0 z-10 flex items-center justify-end pl-4 pr-2 sm:pr-6 md:pr-10 lg:pr-16">
      
      {/* Container */}
      <div className="relative w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[560px] ml-auto mr-0 flex items-center justify-center">

        {/* Polygon Background Container */}
        <div className="absolute inset-0 overflow-hidden rounded-xl">
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(6% 0%, 100% 8%, 100% 92%, 6% 100%, 0% 50%)",
              background: "#97B97A",
            }}
          />
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

          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(55% 12%, 100% 0%, 100% 100%, 55% 88%)",
              background: "#A8C58C",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(8% 25%, 50% 12%, 100% 25%, 100% 75%, 50% 88%, 8% 75%)",
              background: "#89AA6E",
            }}
          />

          <div
            className="absolute top-0 left-0 w-full h-16 sm:h-24 md:h-32 pointer-events-none"
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              background: "rgba(255,255,255,.12)",
            }}
          />

          <div
            className="absolute bottom-0 left-0 w-full h-16 sm:h-24 md:h-32 pointer-events-none"
            style={{
              clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
              background: "rgba(255,255,255,.08)",
            }}
          />

          <div className="absolute -left-10 top-10 w-20 h-20 sm:w-36 sm:h-36 rounded-full bg-white/20 blur-2xl pointer-events-none" />
          <div className="absolute -right-10 bottom-10 w-20 h-20 sm:w-36 sm:h-36 rounded-full bg-black/15 blur-2xl pointer-events-none" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-20 w-full flex flex-col items-center justify-center text-center px-3 sm:px-6 md:px-8 py-6">

          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="
              uppercase
              tracking-[2px] sm:tracking-[4px] md:tracking-[6px]
              text-[11px] sm:text-[16px] md:text-[20px]
              leading-normal
              text-[#B20A2F]
              font-normal
              [font-family:Georgia,serif]
            "
          >
            BOTTLED POETRY
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 2.2,
              duration: 0.8,
              type: "spring",
            }}
            className="my-2 sm:my-3 flex h-9 w-9 sm:h-12 sm:w-12 md:h-16 md:w-16 items-center justify-center "
          >
            <div className="relative w-15 h-15 sm:w-20 sm:h-20 md:w-24 md:h-24">
              <Image
                src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/icon.png"
                alt="Wine Icon"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

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
                text-[28px]
                sm:text-[40px]
                md:text-[50px]
                lg:text-[70px]
                leading-tight
                text-center
              "
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.8 }}
            className="mt-2 text-white/90 text-[10px] sm:text-xs md:text-sm leading-relaxed"
          >
            Experience handcrafted wines created with passion,
            tradition and generations of excellence.
          </motion.p>

        </div>

      </div>
    </div>
  )}

  {/* Navigation Arrows */}
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

   {/* ====================  inderduded your self start   =========================*/}
  

{/* =========================================================
    PROFESSIONAL WINE INTRO SECTION
========================================================= */}

<section className="w-full font-philosopher overflow-hidden bg-[#F4F2EC]">

  <div
    className="
      mx-auto
      w-full
      font-philosopher
      max-w-[1600px]
      px-5
      py-14

      sm:px-8
      sm:py-16

      md:px-10
      md:py-20

      lg:px-14
      lg:py-24

      xl:px-20
      xl:py-28

      2xl:px-24
      2xl:py-32
    "
  >

    <div
      className="
        grid
        grid-cols-1
        items-center

        gap-12

        sm:gap-14

        md:gap-16

        lg:grid-cols-2
        lg:gap-16

        xl:gap-24

        2xl:gap-32
      "
    >

      {/* =====================================================
          LEFT — IMAGE
      ====================================================== */}

 
{/* LEFT SIDE IMAGE */}

<div className="flex w-full justify-center lg:justify-start">

  <div
    className="
      relative
      flex
      w-full
      max-w-[430px]
      items-center
      justify-center

      h-[440px]

      sm:h-[520px]
      sm:max-w-[500px]

      md:h-[580px]
      md:max-w-[540px]

      lg:h-[620px]
      lg:max-w-[560px]

      xl:h-[680px]
      xl:max-w-[610px]

      2xl:h-[740px]
      2xl:max-w-[660px]
    "
  >

    <img
      src="/image-removebg-preview.png"
      alt="Premium Wine"
      className="
        block
        h-full
        w-full
        object-contain
        object-center
        select-none
      "
    />

  </div>

</div>




      {/* =====================================================
          RIGHT — CONTENT
      ====================================================== */}

      <div
        className="
          flex
          w-full
          flex-col
          items-start
          text-left

          lg:max-w-xl

          xl:max-w-2xl
        "
      >

        {/* ===================================================
            TOP LABEL
        ==================================================== */}

        <div
          className="
            mb-5
            flex
            items-center
            gap-3

            sm:mb-6
            sm:gap-4

            md:mb-7
          "
        >

          <span
            className="
              h-px
              w-8
              bg-[#71111B]

              sm:w-10

              md:w-12
            "
          />

          <span
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-gray-500

              sm:text-[10px]
              sm:tracking-[0.3em]

              md:text-xs
            "
          >
            Welcome to our wine world
          </span>

        </div>


        {/* ===================================================
            MAIN HEADING
        ==================================================== */}

        <h1
          className="
            max-w-3xl
        font-philosopher
            leading-[1.08]
            tracking-[-0.025em]
            text-gray-900

            text-[2.3rem]

            sm:text-[3rem]

            md:text-[3.7rem]

            lg:text-[3.5rem]

            xl:text-[4.25rem]

            2xl:text-[4.7rem]
          "
        >

          Our wines are

          <br />

          <span className="italic font-Philosopher text-[#71111B]">
            made with passion
          </span>

          <br />

          and crafted with care.

        </h1>


        {/* ===================================================
            DESCRIPTION
        ==================================================== */}

        <p
          className="
            mt-6
            max-w-xl
            text-sm
            font-light
            leading-7
            text-gray-500

            sm:mt-7
            sm:text-[15px]
            sm:leading-7

            md:mt-8
            md:text-base
            md:leading-8
             font-philosopher

            xl:max-w-2xl
          "
        >
          Discover wines created from carefully selected grapes,
          traditional craftsmanship and a passion for unforgettable
          taste. Every bottle is made to refresh your mind and
          elevate every moment.
        </p>


        {/* ===================================================
            BUTTONS
        ==================================================== */}

        <div
          className="
            mt-8
            flex
            w-full
            flex-col
            gap-3

            sm:mt-9
            sm:w-auto
            sm:flex-row
            sm:gap-4

            md:mt-10
          "
        >

          {/* SHOP WINES */}

          <button
            type="button"
            className="
              w-full
              rounded-sm
              bg-[#71111B]
              px-8
              py-4

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-white

              transition-all
              duration-300

              hover:bg-[#5A0D15]
              hover:shadow-xl

              active:scale-[0.98]

              sm:w-auto
              sm:px-9
            "
          >
            Shop Wines
          </button>


          {/* DISCOVER MORE */}

          <button
            type="button"
            className="
              w-full
              rounded-sm
              border
              border-gray-400
              bg-transparent
              px-8
              py-4

              text-[10px]
              font-semibold
              uppercase
              tracking-[0.24em]
              text-gray-700

              transition-all
              duration-300

              hover:border-[#71111B]
              hover:bg-white
              hover:text-[#71111B]

              active:scale-[0.98]

              sm:w-auto
              sm:px-9
            "
          >
            Discover More
          </button>

        </div>


        {/* ===================================================
            QUALITY INFORMATION
        ==================================================== */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-x-6
            gap-y-3

            sm:mt-9

            md:mt-10
          "
        >

          {/* QUALITY */}

          <div className="flex items-center gap-2.5">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#71111B]
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-gray-400

                sm:text-[9px]

                md:text-[10px]
              "
            >
              Premium Quality
            </span>

          </div>


          {/* CRAFT */}

          <div className="flex items-center gap-2.5">

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#71111B]
              "
            />

            <span
              className="
                text-[8px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-gray-400

                sm:text-[9px]

                md:text-[10px]
              "
            >
              Crafted With Care
            </span>

          </div>

        </div>


        {/* ===================================================
            DECORATIVE BOTTOM LINE
        ==================================================== */}

        <div
          className="
            mt-8
            h-px
            w-16
            bg-gray-300

            sm:mt-10
            sm:w-20

            md:mt-12
          "
        />

      </div>

    </div>

  </div>

</section>






 {/* ====================  inderduded your self end   =========================*/}


   
{/* New Arrival start */}

<section className="py-16 px-4 max-w-7xl mx-auto bg-white text-center">
      {/* Header Section */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif tracking-widest text-gray-900 uppercase mb-3">
        NEW ARRIVALS
      </h2>
      <p className="text-xs sm:text-sm text-gray-500 max-w-lg mx-auto mb-12 font-light leading-relaxed">
        Tempus quam pellentesque nec nam aliquam sem et tortor.
        <br className="hidden sm:inline" />
        Massa enim nec dui nunc volutpat commodo.
      </p>

      {/* Grid Layout (Responsive sm, md, lg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {product.map((product) => (
          <div key={product.id} className="flex flex-col items-center group">
            {/* Image Container */}
            <div className="relative w-full h-80 bg-gray-50 flex items-center justify-center p-4 mb-4 rounded-sm overflow-hidden">
              {/* Badge */}
              {product.badge && (
                <span
                  className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider z-10`}
                >
                  {product.badge}
                </span>
              )}

              {/* Product Image */}
              <div className={`relative w-full h-full transition-transform duration-300 group-hover:scale-105 ${product.isSoldOut ? 'opacity-60' : ''}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Content Details */}
            <h3 className="font-serif text-sm font-semibold text-gray-800 mb-1">
              {product.name}
            </h3>
            <p className="text-xs text-gray-400 mb-2">{product.category}</p>
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">
                {product.price}
              </span>
              {product.oldPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Button */}
      <button className="bg-[#EAE6DE] hover:bg-[#dfd9cd] text-gray-800 text-xs font-semibold uppercase tracking-wider py-3 px-8 transition-colors duration-200">
        VIEW ALL COLLECTIONS
      </button>
    </section>

{/* New Arrival end */}

{/* ================== country slider start ====================  */}
  <section className="w-full overflow-hidden bg-white py-8">
        <div className="overflow-hidden">

          <motion.div
            className="flex w-max items-center gap-10 whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
       transition={{
  duration: 45,
  ease: "linear",
  repeat: Infinity,
}}
          >
            {loopCountries.map((country, index) => (
              <Link
                key={`${country.id}-${index}`}
                href={country.link}
                className="group flex shrink-0 items-center gap-3"
              >

                {/* Number Circle */}
                <div
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#8b263e]
                    transition-all
                    duration-300
                    group-hover:bg-[#8b263e]

                    md:h-8
                    md:w-8
                  "
                >
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      text-[#8b263e]
                      transition-colors
                      duration-300
                      group-hover:text-white

                      md:text-xs
                    "
                  >
                    {country.id}
                  </span>
                </div>

                {/* Country Flag */}
                <div
                  className="
                    relative
                    h-4
                    w-6
                    flex-shrink-0
                    overflow-hidden
                    rounded-sm
                    border
                    border-gray-100
                    shadow-sm

                    sm:h-5
                    sm:w-7
                  "
                >
                  <Image
                    src={country.flag}
                    alt={`${country.name} flag`}
                    fill
                    sizes="28px"
                    className="
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Country Name */}
                <h2
                  className="
                    font-philosopher
                    text-sm
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-black
                    transition-colors
                    duration-300
                    group-hover:text-[#8b263e]

                    sm:text-base
                    md:text-lg
                  "
                >
                  {country.name}
                </h2>

              </Link>
            ))}
          </motion.div>

        </div>
      </section>
{/* ================== country slider end ====================  */}

{/* ==================== wine logo data start  ==========================*/}
<div className="w-full bg-white text-gray-800">
  {/* Upper Hero Banner */}
  <section className="relative bg-[#F4F2EC] py-20 px-4 flex flex-col items-center justify-center text-center overflow-hidden">

    {/* Animated Top Flow Line + Rain Drops */}
    <div className="relative w-[2px] h-10 bg-gray-300 overflow-visible mb-6 rain-line">
      <div className="absolute inset-0 bg-red-700/80 animate-lineFlow"></div>

      <span className="rain-drop rain-drop-1"></span>
      <span className="rain-drop rain-drop-2"></span>
    </div>

    <h1 className="font-philosopher text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight max-w-2xl mb-8 font-normal">
      Our wines are very <br />
      well-made to refresh <br />
      your mind and taste
    </h1>

    <button className="bg-[#E2DDD3] hover:bg-[#d5cfc3] text-gray-800 text-xs Our wines are very uppercase tracking-widest py-3 px-8 transition-colors duration-200 rounded-sm">
      SHOP NOW
    </button>

    {/* Animated Middle Line + Rain Drops */}
    <div className="relative w-[1px] h-10 bg-gray-300 overflow-visible mt-8 rain-line">
      <div className="absolute inset-0 bg-black animate-lineFlow"></div>

      <span className="rain-drop rain-drop-black rain-drop-3"></span>
      <span className="rain-drop rain-drop-black rain-drop-4"></span>
    </div>

    {/* Animated Drop + W Logo Container */}
    <div className="relative flex flex-col items-center my-2">

      {/* Animated Wine Drop */}
      <div className="wine-main-drop animate-wineDrop"></div>

      {/* W Logo Image */}
      <div className="relative w-24 h-24 sm:w-32 sm:h-32">
        <img
          src="https://dt-winey.myshopify.com/cdn/shop/files/Wine-animation-W-2.gif?v=1654685848"
          alt="W Wine Logo"
          className="w-full h-full object-contain animate-liquidFill select-none"
        />
      </div>

    </div>

    {/* Animated Bottom Line + Rain Drops */}
    <div className="relative w-[2px] h-10 bg-gray-300 overflow-visible rain-line">
      <div className="absolute inset-0 bg-red-700/80 animate-lineFlow"></div>

      <span className="rain-drop rain-drop-5"></span>
      <span className="rain-drop rain-drop-6"></span>
    </div>

  </section>


  {/* Feature Section: New Grape Wine */}
  <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Left Text Column */}
      <div className="flex flex-col items-start text-left z-10">

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight uppercase mb-6 tracking-wide">
          NEW <br />
          GRAPE <br />
          WINE
        </h2>

        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm mb-8 font-light">
          Solicitudin aliquam ultrices sagittis orci a. Vulputate enim nulla aliquet porttitor lacus.
          Vitae semper quis lectus nulla at volutpat diam ut venenatis. Sed viverra ipsum nunc aliquet bibendum enim.
          Vulputate dignissim suspendisse in est ante in.
        </p>

        <button className="bg-[#E2DDD3] hover:bg-[#d5cfc3] text-gray-800 text-xs font-semibold uppercase tracking-widest py-3 px-8 transition-colors duration-200 rounded-sm">
          SHOP NOW
        </button>

      </div>


      {/* Right Image Composition */}
      <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[450px]">

        {/* Background Main Image */}
        <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-sm overflow-hidden shadow-lg z-0">
          <Image
            src="/wine-main.jpg"
            alt="Premium Wine Bottle"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlapping Bottom Left Image */}
        <div className="absolute left-2 bottom-0 sm:left-6 w-40 h-44 sm:w-48 sm:h-52 rounded-sm overflow-hidden border-4 border-white shadow-xl z-10">
          <Image
            src="/wine-sub1.jpg"
            alt="Wine Glass & Grapes"
            fill
            className="object-cover"
          />
        </div>

        {/* Overlapping Bottom Right Image */}
        <div className="absolute right-0 -bottom-6 w-36 h-36 sm:w-44 sm:h-44 rounded-sm overflow-hidden border-4 border-white shadow-xl z-20">
          <Image
            src="/wine-sub2.jpg"
            alt="Wine Corks Collection"
            fill
            className="object-cover"
          />
        </div>

      </div>

    </div>

  </section>


  {/* Animations */}
  <style jsx global>{`

    /* ==========================================
       ORIGINAL LINE FLOW
    ========================================== */

    @keyframes lineFlow {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(100%);
      }
    }

    .animate-lineFlow {
      animation: lineFlow 2s infinite linear;
    }


    /* ==========================================
       REALISTIC RAIN / WINE DROP
    ========================================== */

    .rain-line {
      overflow: visible !important;
    }


    .rain-drop {
      position: absolute;

      left: 50%;
      top: -4px;

      width: 6px;
      height: 10px;

      border-radius:
        65% 65% 70% 70% /
        45% 45% 80% 80%;

      opacity: 0;

      z-index: 30;

      transform:
        translateX(-50%)
        scale(0.25, 0.4);

      background:
        radial-gradient(
          circle at 28% 18%,
          rgba(255,255,255,0.95) 0%,
          rgba(255,130,145,0.95) 12%,
          rgba(190,5,35,1) 38%,
          rgba(125,0,20,1) 65%,
          rgba(65,0,8,1) 100%
        );

      box-shadow:
        inset 1px 1px 2px rgba(255,255,255,0.65),
        inset -1px -2px 2px rgba(40,0,5,0.5),
        0 2px 5px rgba(80,0,10,0.35);

      animation:
        realRainDrop
        2.4s
        infinite
        cubic-bezier(.35,0,.2,1);

      pointer-events: none;
    }


    /* Black line drops */

    .rain-drop-black {
      background:
        radial-gradient(
          circle at 28% 18%,
          rgba(255,255,255,0.85) 0%,
          rgba(150,150,150,0.8) 12%,
          rgba(30,30,30,1) 40%,
          rgba(0,0,0,1) 70%,
          rgba(0,0,0,1) 100%
        );

      box-shadow:
        inset 1px 1px 2px rgba(255,255,255,0.5),
        inset -1px -2px 2px rgba(0,0,0,0.6),
        0 2px 5px rgba(0,0,0,0.35);
    }


    /* ==========================================
       NATURAL DROP FALL
    ========================================== */

    @keyframes realRainDrop {

      0% {
        transform:
          translate(-50%, -6px)
          scale(0.2, 0.35);

        opacity: 0;
      }

      8% {
        opacity: 1;

        transform:
          translate(-50%, 0px)
          scale(0.55, 0.85);
      }

      20% {
        transform:
          translate(-50%, 7px)
          scale(0.8, 1.15);

        opacity: 1;
      }

      38% {
        transform:
          translate(-50%, 18px)
          scale(0.75, 1.3);

        opacity: 1;
      }

      55% {
        transform:
          translate(-50%, 30px)
          scale(0.65, 1.25);

        opacity: 0.95;
      }

      72% {
        transform:
          translate(-50%, 43px)
          scale(0.5, 1.05);

        opacity: 0.7;
      }

      86% {
        transform:
          translate(-50%, 56px)
          scale(0.3, 0.65);

        opacity: 0.4;
      }

      100% {
        transform:
          translate(-50%, 70px)
          scale(0.1, 0.2);

        opacity: 0;
      }
    }


    /* ==========================================
       DROP TIMING
    ========================================== */

    .rain-drop-1 {
      animation-delay: 0s;
    }

    .rain-drop-2 {
      width: 4px;
      height: 7px;
      animation-delay: 1.2s;
    }

    .rain-drop-3 {
      animation-delay: 0.55s;
    }

    .rain-drop-4 {
      width: 4px;
      height: 7px;
      animation-delay: 1.8s;
    }

    .rain-drop-5 {
      animation-delay: 0.9s;
    }

    .rain-drop-6 {
      width: 4px;
      height: 7px;
      animation-delay: 2.05s;
    }


    /* ==========================================
       MAIN WINE DROP
    ========================================== */

    .wine-main-drop {
      width: 10px;
      height: 15px;

      margin-bottom: -2px;

      background:
        radial-gradient(
          circle at 28% 18%,
          #ffb0b0 0%,
          #e00035 18%,
          #a50022 48%,
          #62000f 75%,
          #3b0008 100%
        );

      border-radius:
        65% 65% 70% 70% /
        45% 45% 85% 85%;

      box-shadow:
        inset 2px 2px 3px rgba(255,255,255,0.5),
        inset -2px -2px 3px rgba(40,0,5,0.5),
        0 3px 6px rgba(80,0,10,0.3);
    }


    @keyframes wineDrop {

      0% {
        transform:
          translateY(-8px)
          scaleY(0.7);

        opacity: 0;
      }

      25% {
        opacity: 1;
      }

      50% {
        transform:
          translateY(4px)
          scaleY(1.15);

        opacity: 1;
      }

      75% {
        transform:
          translateY(12px)
          scaleY(1.25);

        opacity: 0.8;
      }

      100% {
        transform:
          translateY(18px)
          scaleY(0.6);

        opacity: 0;
      }
    }

    .animate-wineDrop {
      animation:
        wineDrop
        2s
        infinite
        ease-in-out;
    }


    /* ==========================================
       LIQUID FILL
    ========================================== */

    @keyframes liquidFill {

      0% {
        transform: translateY(0);
      }

      50% {
        transform: translateY(2px);
      }

      100% {
        transform: translateY(0);
      }
    }

    .animate-liquidFill {
      animation:
        liquidFill
        4s
        infinite
        ease-in-out;
    }


    /* ==========================================
       MOBILE
    ========================================== */

    @media (max-width: 640px) {

      .rain-drop {
        width: 5px;
        height: 9px;
      }

      .rain-drop-2,
      .rain-drop-4,
      .rain-drop-6 {
        width: 4px;
        height: 7px;
      }

    }

  `}</style>
</div>









{/* Message from Wine Maker Upgrade to the latest!  start*/}

<section className="relative w-full min-h-[500px] md:min-h-[650px] overflow-hidden">

  {/* Background Image - Mobile Alignment Fixed */}
  <Image
    src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/men-img-2.jpg"
    alt="Background"
    fill
    priority
    quality={90}
    sizes="100vw"
    className="absolute inset-0 object-cover  object-[25%_center] sm:object-[20%_center] md:object-left z-0"
  />

  {/* Overlay - Mobile par light kar diya taake image nazar aaye */}
  <div className="absolute inset-0 bg-black/10 "></div>

  {/* Content */}
  <div className="relative z-20 flex items-center min-h-[500px] md:min-h-[650px] px-5 sm:px-8 md:px-16 py-10 md:py-0">

    <div className="w-full md:max-w-xl md:ml-auto text-center md:text-left text-black">

      {/* Small Heading */}
      <span
        className={`
          ${scriptFont.className}
          italic
          text-[30px]
          sm:text-[16px]
          md:text-[40px]
          leading-[34px]
          md:leading-[28px]
          font-normal
          text-[#a3485e]
          block
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

      {/* Paragraphs */}
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
          sizes="(max-width: 768px) 112px, 176px"
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
          <span className="text-[10px] sm:text-xs font-old-standard text-center text-black whitespace-pre-line leading-4">
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
        {/* <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"> */}
          {/* Shopping Cart */}
          {/* <button className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#A04355] transition-all duration-300 shadow-md">
            <FiShoppingCart size={20} />
          </button> */}

          {/* Favorite */}
          {/* <button className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#A04355] transition-all duration-300 shadow-md">
            <FiHeart size={20} />
          </button> */}
        {/* </div> */}
      </div>

      {/* Product Info */}
      <h3 className="text-sm sm:text-base font-serif text-gray-800 mb-2 border-b border-gray-200 pb-2 w-full">
        {product.title}
      </h3>

      {/* Price */}
      {/* <div className="flex items-center gap-2 mb-2 text-xs sm:text-sm">
        {product.oldPrice && (
          <span className="text-gray-400 line-through">{product.oldPrice}</span>
        )}
        <span className="text-gray-900 font-semibold">{product.price}</span>
      </div> */}

      {/* Rating Stars */}
      {/* <div className="flex text-amber-400 text-xs">
        {Array.from({ length: product.rating }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div> */}
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




{/* ===================  What CIAO DANIEL'S  Offers  start  =======================*/}
<section className="relative overflow-hidden px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-28 lg:py-32 bg-[#F4F2EC]">
  <div className="mx-auto max-w-[1500px]">

    {/* Section Header */}
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-20 items-end">

      <div>
        <div className="flex items-center gap-3 mb-5">
          <span className="h-px w-10 bg-[#7B1E2B]" />
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-[#7B1E2B]">
            Our Services
          </p>
        </div>

        <h2 className="font-philosopher text-4xl xs:text-5xl sm:text-6xl lg:text-7xl leading-[0.95] font-bold text-[#241B16]">
          What CIAO DANIEL&apos;S
          <span className="block text-[#7B1E2B]">
            Offers
          </span>
        </h2>
      </div>

      <div className="lg:max-w-xl lg:ml-auto">
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#6D625B]">
          From carefully selected wines to tailored wholesale solutions,
          we help hospitality businesses build exceptional wine programs
          with confidence and consistency.
        </p>
      </div>
    </div>


    {/* Services Grid */}
    <div className="mt-14 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px bg-[#CFC5B7] border border-[#CFC5B7]">

      {offers.map((offer, index) => (
        <div
          key={offer.title}
          className="
            group relative
            min-h-[330px]
            sm:min-h-[360px]
            lg:min-h-[390px]
            flex flex-col justify-between
            bg-[#F4F2EC]
            p-7 sm:p-9 lg:p-10
            overflow-hidden
            transition-all duration-500
            hover:bg-white
          "
        >

          {/* Hover Accent */}
          <div
            className="
              absolute top-0 left-0
              h-[3px] w-0
              bg-[#7B1E2B]
              transition-all duration-500
              group-hover:w-full
            "
          />

          {/* Decorative Number */}
          <div className="relative z-10 flex items-start justify-between">

            <span className="
              font-philosopher
              text-5xl sm:text-6xl
              leading-none
              text-[#A98552]/30
              transition-all duration-500
              group-hover:text-[#7B1E2B]/20
            ">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="
              mt-2
              h-2 w-2
              rounded-full
              bg-[#A98552]
              opacity-60
              transition-all duration-500
              group-hover:scale-150
              group-hover:opacity-100
            " />
          </div>


          {/* Content */}
          <div className="relative z-10 mt-10">

            <h3 className="
              font-philosopher
              text-2xl sm:text-3xl lg:text-[32px]
              leading-tight
              font-bold
              text-[#241B16]
              transition-colors duration-300
              group-hover:text-[#7B1E2B]
            ">
              {offer.title}
            </h3>

            <p className="
              mt-5
              max-w-sm
              text-sm sm:text-[15px]
              leading-7
              text-[#6D625B]
            ">
              {offer.description}
            </p>

          </div>


          {/* Bottom Action */}
          <div className="relative z-10 mt-8">

            {offer.title === "Wholesale Opportunities" ? (
              <Link
                href="/wholesale"
                className="
                  inline-flex items-center gap-3
                  border-b border-[#7B1E2B]
                  pb-2
                  text-[11px] sm:text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#7B1E2B]
                  transition-all duration-300
                  hover:gap-5
                "
              >
                Request Information
                <span className="text-base leading-none">
                  →
                </span>
              </Link>
            ) : (
              <span className="
                inline-flex items-center gap-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#A98552]
                opacity-70
              ">
                CIAO DANIEL&apos;S
                <span className="h-px w-6 bg-[#A98552]" />
              </span>
            )}

          </div>


          {/* Large Background Number */}
          <span className="
            pointer-events-none
            absolute
            -right-5
            -bottom-10
            font-philosopher
            text-[150px]
            sm:text-[180px]
            leading-none
            text-[#241B16]/[0.025]
            transition-all duration-700
            group-hover:text-[#7B1E2B]/[0.04]
            group-hover:-translate-y-2
          ">
            {String(index + 1).padStart(2, "0")}
          </span>

        </div>
      ))}

    </div>


    {/* Bottom Statement */}
    <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-[#CFC5B7] pt-6">

      <p className="text-xs sm:text-sm uppercase tracking-[0.16em] text-[#8A7D73]">
        Experience · Selection · Partnership
      </p>

      <div className="flex items-center gap-3">
        <span className="h-px w-10 bg-[#A98552]" />
        <span className="font-philosopher text-lg text-[#7B1E2B]">
          26 Years
        </span>
      </div>

    </div>

  </div>
</section>
{/* ===================  What CIAO DANIEL'S  Offers  end  =======================*/}


{/*======================= Discover Wines by Country & Region start ================ */}
<section className="relative overflow-hidden bg-[#EAE2D5] px-4 py-20 xs:px-6 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16 lg:py-32 xl:py-36">
  <div className="mx-auto max-w-[1500px]">

    {/* ================= HEADER ================= */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 xl:gap-24">

      <div>
        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3 sm:mb-6">
          <span className="h-px w-10 bg-[#7B1E2B] sm:w-14" />

          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7B1E2B] xs:text-[11px] sm:text-xs sm:tracking-[0.32em]">
            Explore Our Portfolio
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="font-philosopher text-4xl font-bold leading-[0.98] tracking-[-0.02em] text-[#241B16] xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[80px]">
          Discover Wines
          <span className="mt-1 block text-[#7B1E2B]">
            by Country &amp; Region
          </span>
        </h2>
      </div>

      {/* Intro */}
      <div className="max-w-xl lg:ml-auto">
        <p className="text-sm leading-7 text-[#685D54] xs:text-base sm:text-lg sm:leading-8">
          Our portfolio brings together wines from carefully selected
          producers across several renowned wine-producing regions.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-8 bg-[#A98552] sm:w-12" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8A7A6C]">
            Curated Selection
          </span>
        </div>
      </div>

    </div>


    {/* ================= REGION GRID ================= */}
    <div className="mt-14 grid grid-cols-1 gap-4 xs:mt-16 sm:grid-cols-2 sm:gap-5 md:mt-20 lg:grid-cols-3 lg:gap-6 xl:gap-7">

      {regions.map((region, index) => (
        <Link
          key={region.name}
          href={region.href}
          className="
            group relative
            min-h-[320px]
            overflow-hidden
            border border-[#C8BBAA]
            bg-[#F5F1E8]
            p-6
            transition-all duration-500 ease-out

            xs:min-h-[340px]
            xs:p-7

            sm:min-h-[360px]
            sm:p-8

            md:min-h-[380px]
            md:p-9

            lg:min-h-[400px]
            lg:p-9

            xl:min-h-[420px]
            xl:p-10

            hover:-translate-y-2
            hover:border-[#741C29]
            hover:bg-[#741C29]
            hover:shadow-[0_25px_60px_rgba(49,32,24,0.18)]
          "
        >

          {/* Top Burgundy Line */}
          <span
            className="
              absolute left-0 top-0
              h-[3px] w-0
              bg-[#D8BB85]
              transition-all duration-500
              group-hover:w-full
            "
          />

          {/* Large Background Number */}
          <span
            className="
              pointer-events-none
              absolute -bottom-12 -right-4
              font-philosopher
              text-[150px]
              font-bold
              leading-none
              text-[#241B16]/[0.035]
              transition-all duration-700

              sm:text-[170px]
              md:text-[180px]
              lg:text-[190px]
              xl:text-[210px]

              group-hover:-translate-y-4
              group-hover:text-white/[0.045]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>


          {/* ================= CARD TOP ================= */}
          <div className="relative z-10 flex items-center justify-between">

            {/* Number */}
            <span
              className="
                font-philosopher
                text-3xl
                font-bold
                leading-none
                text-[#A98552]
                transition-colors duration-300

                sm:text-4xl

                group-hover:text-[#D8BB85]
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Arrow Circle */}
            <span
              className="
                flex h-9 w-9
                items-center justify-center
                border border-[#C8BBAA]
                text-base
                text-[#7B1E2B]
                transition-all duration-500

                sm:h-10 sm:w-10 sm:text-lg

                group-hover:translate-x-1
                group-hover:border-[#D8BB85]
                group-hover:text-[#D8BB85]
              "
            >
              →
            </span>

          </div>


          {/* ================= CARD CONTENT ================= */}
          <div className="relative z-10 mt-12 sm:mt-14">

            {/* Region Name */}
            <h3
              className="
                font-philosopher
                text-3xl
                font-bold
                leading-[1.05]
                text-[#241B16]
                transition-colors duration-300

                xs:text-4xl
                sm:text-[38px]
                md:text-[40px]
                lg:text-[38px]
                xl:text-[44px]

                group-hover:text-white
              "
            >
              {region.name}
            </h3>


            {/* Wine Count */}
            {region.count && (
              <p
                className="
                  mt-4
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#7B1E2B]
                  transition-colors duration-300

                  sm:text-xs

                  group-hover:text-[#D8BB85]
                "
              >
                {region.count}
              </p>
            )}


            {/* Description */}
            <p
              className="
                mt-5
                max-w-md
                text-xs
                leading-6
                text-[#6D625B]
                transition-colors duration-300

                xs:text-sm
                sm:text-[15px]
                sm:leading-7

                group-hover:text-[#E9DFD6]
              "
            >
              {region.description}
            </p>

          </div>


          {/* ================= CARD FOOTER ================= */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between xs:bottom-7 xs:left-7 xs:right-7 sm:bottom-8 sm:left-8 sm:right-8 lg:bottom-9 lg:left-9 lg:right-9 xl:bottom-10 xl:left-10 xl:right-10">

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#A98552]
                transition-colors duration-300

                sm:text-[10px]

                group-hover:text-[#D8BB85]
              "
            >
              Explore Region
            </span>

            <span
              className="
                h-px w-8
                bg-[#C8BBAA]
                transition-all duration-500

                sm:w-12

                group-hover:w-20
                group-hover:bg-[#D8BB85]
              "
            />

          </div>

        </Link>
      ))}

    </div>


    {/* ================= BOTTOM STATEMENT ================= */}
    <div className="mt-12 flex flex-col gap-5 border-t border-[#C8BBAA] pt-6 xs:mt-14 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">

      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#82756B] sm:text-xs">
        From Vineyard to Market
      </p>

      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-[#A98552] sm:w-12" />

        <span className="font-philosopher text-base text-[#7B1E2B] sm:text-lg">
          Exceptional Wines. Curated.
        </span>
      </div>

    </div>

  </div>
</section>
{/*======================= Discover Wines by Country & Region end ================ */}






     {/* ============================ EXPERIENCE SECTION  start  ======================== */}
     <section className="bg-[#241B16] px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 text-[#F5F1E8]">
        <div className="mx-auto max-w-[1500px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 relative text-center lg:text-left">
            <p className="text-xs sm:text-sm font-philosopher  uppercase tracking-[0.3em] text-[#C7A66A]">
              Our Experience
            </p>
            <div className="mt-2 font-philosopher  text-[100px] xs:text-[130px] sm:text-[160px] lg:text-[180px] xl:text-[200px] leading-none text-[#F5F1E8] font-bold select-none">
              26
            </div>
            <p className="text-base sm:text-lg font-philosopher  uppercase tracking-[0.25em] text-[#C7A66A] -mt-2 sm:-mt-6">
              Years of Excellence
            </p>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-philosopher text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
              26 Years of Wine Industry Experience
            </h2>

            <div className="mt-6 font-philosopher  sm:mt-8 space-y-4 sm:space-y-6 text-sm xs:text-base md:text-lg leading-relaxed text-[#D7CDC4]">
              <p>
                For more than 26 years, CIAO DANIEL&apos;S has been building relationships within the wine industry and developing a portfolio of carefully selected wines from distinctive producers and regions.
              </p>
              <p>
                Our focus is simple: help businesses find the right wines for their customers.
              </p>
              <p>
                From established European wine regions to carefully selected wines from the United States and South America, our portfolio offers a variety of styles, regions, and producers.
              </p>
              <p>
                Explore our portfolio and contact our team for wholesale pricing, availability, and recommendations.
              </p>
            </div>
          </div>

        </div>
      </section> 
       {/* ============================ EXPERIENCE SECTION  end  ======================== */}


{/*======================= Wine Solutions for Businesses start ================ */}
<section className="relative overflow-hidden bg-[#F4F2EC] px-4 py-20 xs:px-6 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16 lg:py-32 xl:py-36">
  <div className="mx-auto max-w-[1500px]">

    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">

      {/* ================= LEFT SIDE ================= */}
      <div className="lg:col-span-5">

        <div className="lg:sticky lg:top-10">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-10 bg-[#7B1E2B] sm:w-14" />

            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#7B1E2B] xs:text-[11px] sm:text-xs sm:tracking-[0.32em]">
              Built for Business
            </p>
          </div>


          {/* Heading */}
          <h2
            className="
              font-philosopher
              text-4xl
              font-bold
              leading-[0.98]
              tracking-[-0.02em]
              text-[#241B16]

              xs:text-5xl
              sm:text-6xl
              md:text-6xl
              lg:text-7xl
              xl:text-[78px]
            "
          >
            Wine Solutions
            <span className="mt-1 block text-[#7B1E2B]">
              for Businesses
            </span>
          </h2>


          {/* Supporting Text */}
          <p className="mt-7 max-w-lg text-sm leading-7 text-[#6D625B] xs:text-base sm:mt-8 sm:text-lg sm:leading-8">
            Thoughtfully selected wines and practical support designed
            around the needs of restaurants, hotels, retailers, bars,
            and hospitality businesses.
          </p>


          {/* Decorative Detail */}
          <div className="mt-8 flex items-center gap-4 sm:mt-10">
            <span className="h-px w-10 bg-[#A98552] sm:w-14" />

            <span className="font-philosopher text-lg text-[#7B1E2B] sm:text-xl">
              26 Years
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A7B70]">
              Experience
            </span>
          </div>

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="lg:col-span-7">

        <div className="border-y border-[#CEC3B5]">

          {solutions.map((solution, index) => (
            <div
              key={solution.number}
              className="
                group relative
                grid grid-cols-1
                gap-5
                border-b border-[#CEC3B5]
                px-1
                py-7
                transition-all duration-500

                xs:py-8

                sm:grid-cols-12
                sm:gap-5
                sm:px-3
                sm:py-9

                md:py-10

                lg:px-4
                lg:py-10

                xl:py-11

                hover:bg-white/60
              "
            >

              {/* Active Line */}
              <span
                className="
                  absolute left-0 top-0
                  h-full w-[2px]
                  origin-top
                  scale-y-0
                  bg-[#7B1E2B]
                  transition-transform duration-500
                  group-hover:scale-y-100
                "
              />


              {/* Number */}
              <div className="sm:col-span-2">

                <span
                  className="
                    font-philosopher
                    text-3xl
                    font-bold
                    leading-none
                    text-[#A98552]
                    transition-colors duration-300

                    sm:text-4xl

                    group-hover:text-[#7B1E2B]
                  "
                >
                  {solution.number}
                </span>

              </div>


              {/* Title */}
              <div className="sm:col-span-4">

                <h3
                  className="
                    font-philosopher
                    text-2xl
                    font-bold
                    leading-tight
                    text-[#241B16]
                    transition-colors duration-300

                    xs:text-[26px]
                    sm:text-2xl
                    md:text-[27px]
                    lg:text-[28px]

                    group-hover:text-[#7B1E2B]
                  "
                >
                  {solution.title}
                </h3>

              </div>


              {/* Description */}
              <div className="sm:col-span-6">

                <p
                  className="
                    max-w-xl
                    text-xs
                    leading-6
                    text-[#6D625B]

                    xs:text-sm
                    sm:text-[15px]
                    sm:leading-7

                    md:text-base

                    group-hover:text-[#4F443D]
                  "
                >
                  {solution.description}
                </p>

              </div>


              {/* Bottom Arrow */}
              <div
                className="
                  absolute
                  bottom-5
                  right-3
                  hidden
                  h-8 w-8
                  items-center
                  justify-center
                  border
                  border-[#CEC3B5]
                  text-[#7B1E2B]
                  opacity-0
                  transition-all duration-500

                  sm:flex

                  group-hover:translate-x-1
                  group-hover:border-[#A98552]
                  group-hover:opacity-100
                "
              >
                →
              </div>

            </div>
          ))}

        </div>


        {/* Bottom Label */}
        <div className="mt-7 flex items-center justify-between gap-4 sm:mt-8">

          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A7B70] sm:text-[10px]">
            Tailored for Your Business
          </span>

          <div className="flex items-center gap-2">
            <span className="h-px w-6 bg-[#A98552] sm:w-10" />
            <span className="text-xs text-[#7B1E2B]">
              →
            </span>
          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/*======================= Wine Solutions for Businesses end ================ */}


{/*======================= Why CIAO DANIEL’S? start ================ */}

<section className="relative overflow-hidden bg-[#241B16] px-4 py-20 text-[#F5F1E8] xs:px-6 sm:px-8 sm:py-24 md:px-12 md:py-28 lg:px-16 lg:py-32 xl:py-36">

  {/* Decorative Background */}
  <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-[#C7A66A]/10 sm:h-[550px] sm:w-[550px]" />

  <div className="mx-auto max-w-[1500px]">

    {/* ================= HEADER ================= */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-20">

      <div>

        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3 sm:mb-6">
          <span className="h-px w-10 bg-[#C7A66A] sm:w-14" />

          <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#C7A66A] xs:text-[11px] sm:text-xs sm:tracking-[0.32em]">
            The CIAO DANIEL&apos;S Difference
          </p>
        </div>


        {/* Heading */}
        <h2
          className="
            font-philosopher
            text-4xl
            font-bold
            leading-[0.98]
            tracking-[-0.02em]
            text-[#F5F1E8]

            xs:text-5xl
            sm:text-6xl
            md:text-6xl
            lg:text-7xl
            xl:text-[80px]
          "
        >
          Why CIAO
          <span className="block text-[#C7A66A]">
            DANIEL&apos;S?
          </span>
        </h2>

      </div>


      {/* Intro */}
      <div className="max-w-lg lg:ml-auto">

        <p className="text-sm leading-7 text-[#CFC4BB] xs:text-base sm:text-lg sm:leading-8">
          More than a wine portfolio. We bring experience, careful
          selection, and personal service together to help businesses
          make better wine choices.
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span className="h-px w-8 bg-[#C7A66A] sm:w-12" />

          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9F9187]">
            Experience · Selection · Service
          </span>
        </div>

      </div>

    </div>


    {/* ================= REASONS ================= */}
    <div className="mt-14 grid grid-cols-1 gap-px border border-[#5A4B42] bg-[#5A4B42] xs:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">

      {reasons.map((reason, index) => (
        <div
          key={reason.title}
          className="
            group relative
            min-h-[290px]
            overflow-hidden
            bg-[#241B16]
            p-7
            transition-all duration-500

            xs:min-h-[310px]
            xs:p-8

            sm:min-h-[330px]
            sm:p-9

            md:min-h-[350px]
            md:p-10

            lg:min-h-[380px]
            lg:p-10

            xl:min-h-[400px]
            xl:p-11

            hover:bg-[#2C211C]
          "
        >

          {/* Gold Top Accent */}
          <span
            className="
              absolute left-0 top-0
              h-[3px] w-0
              bg-[#C7A66A]
              transition-all duration-500
              group-hover:w-full
            "
          />


          {/* Large Background Number */}
          <span
            className="
              pointer-events-none
              absolute -bottom-12 -right-2
              font-philosopher
              text-[150px]
              font-bold
              leading-none
              text-[#C7A66A]/[0.035]
              transition-all duration-700

              sm:text-[175px]
              lg:text-[200px]

              group-hover:-translate-y-3
              group-hover:text-[#C7A66A]/[0.07]
            "
          >
            {String(index + 1).padStart(2, "0")}
          </span>


          {/* Number */}
          <div className="relative z-10 flex items-center justify-between">

            <span
              className="
                font-philosopher
                text-3xl
                font-bold
                leading-none
                text-[#C7A66A]
                transition-all duration-300

                sm:text-4xl

                group-hover:translate-x-1
              "
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span
              className="
                h-px w-8
                bg-[#C7A66A]/40
                transition-all duration-500

                sm:w-10

                group-hover:w-16
                group-hover:bg-[#C7A66A]
              "
            />

          </div>


          {/* Content */}
          <div className="relative z-10 mt-14 sm:mt-16">

            <h3
              className="
                font-philosopher
                text-2xl
                font-bold
                leading-tight
                text-[#F5F1E8]
                transition-colors duration-300

                xs:text-[26px]
                sm:text-2xl
                md:text-[27px]
                lg:text-[29px]
                xl:text-[31px]

                group-hover:text-[#C7A66A]
              "
            >
              {reason.title}
            </h3>


            <p
              className="
                mt-5
                max-w-md
                text-xs
                leading-6
                text-[#CFC4BB]

                xs:text-sm
                sm:text-[15px]
                sm:leading-7

                md:text-base

                group-hover:text-[#E3D9D1]
              "
            >
              {reason.description}
            </p>

          </div>


          {/* Bottom Detail */}
          <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between xs:bottom-8 xs:left-8 xs:right-8 sm:bottom-9 sm:left-9 sm:right-9 lg:bottom-10 lg:left-10 lg:right-10">

            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8F8076] sm:text-[10px]">
              Ciao Daniel&apos;s
            </span>

            <span
              className="
                text-sm
                text-[#C7A66A]
                opacity-0
                transition-all duration-500

                group-hover:translate-x-1
                group-hover:opacity-100
              "
            >
              →
            </span>

          </div>

        </div>
      ))}

    </div>


    {/* ================= BOTTOM STATEMENT ================= */}
    <div className="mt-12 flex flex-col gap-6 border-t border-[#5A4B42] pt-7 xs:mt-14 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">

      <div>
        <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#8F8076] sm:text-[10px]">
          Built on Experience
        </p>

        <p className="mt-2 font-philosopher text-xl text-[#F5F1E8] sm:text-2xl">
          Wine chosen with purpose.
        </p>
      </div>


      <div className="flex items-center gap-4">
        <span className="h-px w-10 bg-[#C7A66A] sm:w-14" />

        <span className="font-philosopher text-base text-[#C7A66A] sm:text-lg">
          26 Years
        </span>
      </div>

    </div>

  </div>
</section>


{/*======================= Why CIAO DANIEL’S? end ================ */}

{/*======================= Final Home CTA start ================ */}

<section className="relative overflow-hidden bg-[#741C29] px-4 py-20 text-center text-white xs:px-6 sm:px-8 sm:py-28 md:px-12 md:py-32 lg:py-36 xl:py-40">

  {/* ================= DECORATIVE CIRCLES ================= */}

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08] xs:h-[350px] xs:w-[350px] sm:h-[500px] sm:w-[500px] md:h-[650px] md:w-[650px] lg:h-[750px] lg:w-[750px]" />

  <div className="pointer-events-none absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E2CFA8]/[0.12] xs:h-[240px] xs:w-[240px] sm:h-[360px] sm:w-[360px] md:h-[460px] md:w-[460px]" />

  {/* Corner Details */}
  <span className="pointer-events-none absolute left-6 top-6 h-10 w-10 border-l border-t border-[#E2CFA8]/30 sm:left-10 sm:top-10 sm:h-14 sm:w-14" />

  <span className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 border-b border-r border-[#E2CFA8]/30 sm:bottom-10 sm:right-10 sm:h-14 sm:w-14" />


  {/* ================= CONTENT ================= */}

  <div className="relative z-10 mx-auto max-w-5xl">

    {/* Eyebrow */}
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-[#E2CFA8] sm:w-12" />

      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#E2CFA8] xs:text-[11px] sm:text-xs sm:tracking-[0.34em]">
        Let&apos;s Work Together
      </p>

      <span className="h-px w-8 bg-[#E2CFA8] sm:w-12" />
    </div>


    {/* Heading */}
    <h2
      className="
        mx-auto
        mt-6
        max-w-4xl
        font-philosopher
        text-4xl
        font-bold
        leading-[1]
        tracking-[-0.02em]

        xs:text-5xl
        sm:mt-7
        sm:text-6xl
        md:text-7xl
        lg:text-[76px]
        xl:text-[84px]
      "
    >
      Looking for the Right
      <span className="block text-[#E2CFA8]">
        Wines for Your Business?
      </span>
    </h2>


    {/* Description */}
    <p
      className="
        mx-auto
        mt-7
        max-w-2xl
        text-sm
        leading-7
        text-white/75

        xs:text-base
        sm:mt-8
        sm:text-lg
        sm:leading-8

        md:text-[18px]
      "
    >
      Explore our portfolio and discover wines that could be the next
      addition to your restaurant, retail store, hotel, bar, or
      hospitality program.
    </p>


    {/* Availability Note */}
    <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3">

      <span className="h-px w-5 bg-[#E2CFA8]/60 sm:w-8" />

      <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#E2CFA8] xs:text-[10px] sm:text-xs sm:tracking-[0.18em]">
        Wholesale pricing &amp; availability upon request
      </p>

      <span className="h-px w-5 bg-[#E2CFA8]/60 sm:w-8" />

    </div>


    {/* ================= BUTTONS ================= */}

    <div className="mt-9 flex w-full flex-col items-stretch justify-center gap-3 xs:flex-row xs:items-center xs:gap-4 sm:mt-11">

      {/* Primary */}
      <Link
        href="/wholesale"
        className="
          group
          inline-flex
          min-h-[54px]
          w-full
          items-center
          justify-center
          gap-3
          bg-[#F5F1E8]
          px-7
          py-4
          text-[10px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#741C29]
          shadow-[0_15px_40px_rgba(0,0,0,0.18)]
          transition-all
          duration-300

          xs:w-auto
          xs:px-8

          sm:min-h-[58px]
          sm:px-9
          sm:text-xs

          hover:-translate-y-1
          hover:bg-[#E2CFA8]
          hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]

          active:scale-[0.97]
        "
      >
        Request Wholesale Pricing

        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>


      {/* Secondary */}
      <Link
        href="/contact"
        className="
          group
          inline-flex
          min-h-[54px]
          w-full
          items-center
          justify-center
          gap-3
          border
          border-white/60
          px-7
          py-4
          text-[10px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-white
          transition-all
          duration-300

          xs:w-auto
          xs:px-8

          sm:min-h-[58px]
          sm:px-9
          sm:text-xs

          hover:-translate-y-1
          hover:border-[#E2CFA8]
          hover:bg-white
          hover:text-[#741C29]

          active:scale-[0.97]
        "
      >
        Book a Call

        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>

    </div>


    {/* Bottom Trust Line */}
    <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:mt-14 sm:flex-row sm:gap-5">

      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
        Restaurants
      </span>

      <span className="hidden h-1 w-1 rounded-full bg-[#E2CFA8]/50 sm:block" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
        Hotels
      </span>

      <span className="hidden h-1 w-1 rounded-full bg-[#E2CFA8]/50 sm:block" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
        Retail
      </span>

      <span className="hidden h-1 w-1 rounded-full bg-[#E2CFA8]/50 sm:block" />

      <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45 sm:text-[10px]">
        Hospitality
      </span>

    </div>

  </div>

</section>

{/*======================= Final Home CTA end ================ */}




  


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
          <p className="text-xs sm:text-sm text-gray-300 font-old-standard leading-relaxed px-4 opacity-80">
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
                <h3 className="text-xs sm:text-sm md:text-base font-philosopher  text-white tracking-widest uppercase mb-1  group-hover:text-[#E8B87D] transition-colors">
                  {wine.name}
                </h3>

                {/* Wine Price */}
                {/* <span className="text-xs sm:text-sm  font-philosopher text-[#E8B87D] ">
                  {wine.price}
                </span> */}

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































// "use client";

// import Link from "next/link";

// const regions = [
//   {
//     name: "Italy",
//     count: "20 Regional Selections",
//     description:
//       "Italy is home to one of the world's most diverse wine cultures, with each region offering its own grapes, traditions, and styles.",
//     href: "/portfolio/italy",
//   },
//   {
//     name: "France",
//     count: "4 Regional Selections",
//     description:
//       "Discover wines from 4 regional selections, representing the heritage and diversity of French winemaking.",
//     href: "/portfolio/france",
//   },
//   {
//     name: "Argentina",
//     description:
//       "Discover our selection from Argentina and wines shaped by distinctive growing regions and winemaking traditions.",
//     href: "/portfolio/argentina",
//   },
//   {
//     name: "California",
//     description:
//       "Discover selected California wines representing the state's diverse wine-growing regions and styles.",
//     href: "/portfolio/california",
//   },
//   {
//     name: "Oregon",
//     description:
//       "Explore distinctive wines from Oregon and selections from one of America's emerging wine regions.",
//     href: "/portfolio/oregon",
//   },
//   {
//     name: "Spain",
//     description:
//       "Discover wines reflecting Spain's diverse regions, indigenous grapes, and winemaking traditions.",
//     href: "/portfolio/spain",
//   },
//   {
//     name: "Portugal",
//     description:
//       "Explore wines that showcase Portugal's unique grape varieties and rich winemaking heritage.",
//     href: "/portfolio/portugal",
//   },
// ];

// const solutions = [
//   {
//     number: "01",
//     title: "Restaurants",
//     description:
//       "Build or expand your wine list with selections that complement your cuisine and customer base.",
//   },
//   {
//     number: "02",
//     title: "Hotels & Hospitality",
//     description:
//       "Source wines for restaurants, lounges, events, banquets, and hospitality programs.",
//   },
//   {
//     number: "03",
//     title: "Wine Retailers",
//     description:
//       "Discover distinctive wines that can add variety and value to your retail selection.",
//   },
//   {
//     number: "04",
//     title: "Bars & Wine Programs",
//     description:
//       "Explore wines suitable for by-the-glass programs, bottle service, and curated wine menus.",
//   },
//   {
//     number: "05",
//     title: "Catering & Events",
//     description:
//       "Create wine selections for private events, corporate functions, and special occasions.",
//   },
// ];

// const offers = [
//   {
//     title: "Handpicked Selections",
//     description:
//       "We carefully select wines from regional European winemakers and other respected producers, focusing on wines with quality, character, and a strong connection to their region.",
//   },
//   {
//     title: "Personal Guidance",
//     description:
//       "Choosing the right wines for your business can be challenging. Our team provides personal recommendations and answers questions to help you make informed selections for your wine program.",
//   },
//   {
//     title: "Curated Cases",
//     description:
//       "Looking to explore several wines at once? Our curated cases bring together thoughtfully selected bottles representing different regions and styles.",
//   },
//   {
//     title: "Wholesale Opportunities",
//     description:
//       "Interested in carrying our wines? Contact our team to learn about wholesale pricing, availability, and ordering options.",
//   },
// ];

// const reasons = [
//   {
//     title: "26 Years in the Wine Business",
//     description:
//       "Our decades of experience have helped us develop a strong understanding of producers, regions, wine styles, and the needs of business customers.",
//   },
//   {
//     title: "Carefully Selected Portfolio",
//     description:
//       "We don't simply offer wines—we curate a portfolio of selections we believe are worth bringing to your business.",
//   },
//   {
//     title: "Regional Expertise",
//     description:
//       "Our portfolio allows businesses to explore wines from distinctive regions while understanding the story and character behind each selection.",
//   },
//   {
//     title: "Personal Service",
//     description:
//       "We're available to answer questions, provide recommendations, and help businesses identify wines that fit their specific needs.",
//   },
//   {
//     title: "Curated Cases",
//     description:
//       "Our curated cases provide businesses with an opportunity to explore multiple wines and regional styles in one selection.",
//   },
// ];

// export default function Home() {
//   return (
//     <main className="bg-[#F5F1E8] text-[#241B16] overflow-x-hidden selection:bg-[#741C29] selection:text-white">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 xs:py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
        
//         {/* Background Gradients */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute -right-20 -top-20 xs:-right-40 xs:-top-40 h-[300px] w-[300px] xs:h-[500px] xs:w-[500px] lg:h-[700px] lg:w-[700px] rounded-full bg-[#6F1824]/10 blur-[80px] lg:blur-[120px]" />
//           <div className="absolute -left-20 -bottom-20 xs:-left-40 xs:-bottom-40 h-[250px] w-[250px] xs:h-[450px] xs:w-[450px] lg:h-[600px] lg:w-[600px] rounded-full bg-[#B08A55]/15 blur-[70px] lg:blur-[100px]" />
//         </div>

//         <div className="relative z-10 mx-auto w-full max-w-[1500px] px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

//           {/* Hero Left Content */}
//           <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
//             <p className="mb-3 sm:mb-4 text-xs xs:text-sm font-semibold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#7B1E2B]">
//               CIAO DANIEL&apos;S
//             </p>

//             <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-[88px] leading-[1.05] sm:leading-[1] tracking-tight font-bold">
//               Exceptional Wines.
//               <span className="mt-1 sm:mt-2 block text-[#7B1E2B]">
//                 Built for Your Business.
//               </span>
//             </h1>

//             <p className="mt-5 sm:mt-8 max-w-2xl mx-auto lg:mx-0 text-sm xs:text-base md:text-lg leading-relaxed sm:leading-8 text-[#665950]">
//               A carefully selected portfolio of wines from renowned regions and producers, backed by 26 years of experience in the wine industry.
//             </p>

//             <p className="mt-3 sm:mt-4 max-w-2xl mx-auto lg:mx-0 text-sm xs:text-base md:text-lg leading-relaxed sm:leading-8 text-[#665950]">
//               Whether you&apos;re a restaurant, hotel, wine retailer, bar, or hospitality business, CIAO DANIEL&apos;S helps you discover wines that fit your customers, menu, and business.
//             </p>

//             {/* CTA Buttons */}
//             <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center lg:justify-start w-full xs:w-auto">
//               <Link
//                 href="/portfolio"
//                 className="group w-full xs:w-auto inline-flex items-center justify-center bg-[#741C29] px-6 xs:px-8 py-3.5 sm:py-4 text-xs xs:text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#52121C] hover:shadow-lg shadow-md active:scale-95"
//               >
//                 Explore Our Portfolio
//                 <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
//                   →
//                 </span>
//               </Link>

//               <Link
//                 href="/wholesale"
//                 className="w-full xs:w-auto inline-flex items-center justify-center border-2 border-[#741C29] px-6 xs:px-8 py-3.5 sm:py-4 text-xs xs:text-sm font-semibold uppercase tracking-[0.12em] text-[#741C29] transition-all duration-300 hover:bg-[#741C29] hover:text-white active:scale-95"
//               >
//                 Request Wholesale Pricing
//               </Link>
//             </div>
//           </div>

//           {/* Hero Right Visual */}
//           <div className="lg:col-span-5 relative mx-auto w-full max-w-[350px] xs:max-w-[420px] sm:max-w-[480px] lg:max-w-none h-[380px] xs:h-[450px] sm:h-[520px] lg:h-[580px] xl:h-[620px] flex items-center justify-center mt-6 lg:mt-0">
//             <div className="absolute right-0 top-0 h-[75%] w-[75%] border border-[#B08A55]/40 rounded-sm" />

//             <div className="absolute bottom-0 left-0 h-[80%] w-[78%] overflow-hidden bg-[#5B1520] shadow-2xl rounded-sm transition-transform duration-500 hover:scale-[1.01]">
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="relative h-[280px] xs:h-[320px] sm:h-[380px] w-[130px] xs:w-[150px] sm:w-[170px]">
//                   {/* Bottle Design */}
//                   <div className="absolute left-1/2 top-0 h-[70px] sm:h-[95px] w-[40px] sm:w-[52px] -translate-x-1/2 rounded-t-[16px] sm:rounded-t-[20px] bg-[#35100F]" />
//                   <div className="absolute left-1/2 top-[55px] sm:top-[75px] h-[225px] sm:h-[300px] w-[110px] sm:w-[145px] -translate-x-1/2 rounded-[36px_36px_18px_18px] sm:rounded-[48px_48px_22px_22px] bg-gradient-to-r from-[#270D0D] via-[#5E201D] to-[#220909] shadow-2xl" />
                  
//                   {/* Bottle Label */}
//                   <div className="absolute left-1/2 top-[130px] sm:top-[175px] flex h-[100px] sm:h-[135px] w-[80px] sm:w-[105px] -translate-x-1/2 flex-col items-center justify-center bg-[#E8D8B9] text-center p-2 shadow-inner">
//                     <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] text-[#241B16]">
//                       CIAO
//                     </span>
//                     <span className="font-serif text-base sm:text-xl font-bold text-[#741C29]">
//                       Daniel&apos;s
//                     </span>
//                     <span className="mt-1 sm:mt-2 text-[6px] sm:text-[7px] font-medium uppercase tracking-[0.15em] text-[#665950]">
//                       Fine Wine
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="absolute bottom-6 right-2 sm:bottom-10 sm:right-4 h-20 w-20 sm:h-28 sm:w-28 rounded-full border border-[#B08A55]/60 animate-pulse" />
//             <div className="absolute bottom-12 right-8 sm:bottom-16 sm:right-10 h-12 w-12 sm:h-16 sm:w-16 rounded-full border border-[#B08A55]/40" />
//           </div>

//         </div>
//       </section>

//       {/* ================= EXPERIENCE SECTION ================= */}
//       <section className="bg-[#241B16] px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 text-[#F5F1E8]">
//         <div className="mx-auto max-w-[1500px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
//           <div className="lg:col-span-5 relative text-center lg:text-left">
//             <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A66A]">
//               Our Experience
//             </p>
//             <div className="mt-2 font-serif text-[100px] xs:text-[130px] sm:text-[160px] lg:text-[180px] xl:text-[200px] leading-none text-[#F5F1E8] font-bold select-none">
//               26
//             </div>
//             <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.25em] text-[#C7A66A] -mt-2 sm:-mt-6">
//               Years of Excellence
//             </p>
//           </div>

//           <div className="lg:col-span-7">
//             <h2 className="font-serif text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold">
//               26 Years of Wine Industry Experience
//             </h2>

//             <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6 text-sm xs:text-base md:text-lg leading-relaxed text-[#D7CDC4]">
//               <p>
//                 For more than 26 years, CIAO DANIEL&apos;S has been building relationships within the wine industry and developing a portfolio of carefully selected wines from distinctive producers and regions.
//               </p>
//               <p>
//                 Our focus is simple: help businesses find the right wines for their customers.
//               </p>
//               <p>
//                 From established European wine regions to carefully selected wines from the United States and South America, our portfolio offers a variety of styles, regions, and producers.
//               </p>
//               <p>
//                 Explore our portfolio and contact our team for wholesale pricing, availability, and recommendations.
//               </p>
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* ================= OFFERS SECTION ================= */}
//       <section className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24">
//         <div className="mx-auto max-w-[1500px]">
//           <div className="max-w-3xl">
//             <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#7B1E2B]">
//               Our Services
//             </p>
//             <h2 className="mt-3 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-tight font-bold">
//               What CIAO DANIEL&apos;S Offers
//             </h2>
//           </div>

//           <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
//             {offers.map((offer, index) => (
//               <div
//                 key={offer.title}
//                 className="group relative flex flex-col justify-between bg-white/60 backdrop-blur-sm border border-[#CFC5B7] p-6 xs:p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
//               >
//                 <div>
//                   <span className="text-xs sm:text-sm font-bold text-[#A98552]">
//                     0{index + 1}
//                   </span>
//                   <h3 className="mt-4 font-serif text-xl xs:text-2xl sm:text-3xl font-bold text-[#241B16]">
//                     {offer.title}
//                   </h3>
//                   <p className="mt-4 text-xs xs:text-sm sm:text-base leading-relaxed text-[#6D625B]">
//                     {offer.description}
//                   </p>
//                 </div>

//                 {offer.title === "Wholesale Opportunities" && (
//                   <Link
//                     href="/wholesale"
//                     className="mt-6 inline-flex items-center gap-2 border-b-2 border-[#741C29] pb-1 text-xs xs:text-sm font-bold uppercase tracking-[0.1em] text-[#741C29] transition-all hover:gap-3"
//                   >
//                     Request Information <span>→</span>
//                   </Link>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= REGIONS SECTION ================= */}
//       <section className="bg-[#EAE2D5] px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24">
//         <div className="mx-auto max-w-[1500px]">
//           <div className="max-w-3xl">
//             <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#7B1E2B]">
//               Explore Our Portfolio
//             </p>
//             <h2 className="mt-3 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-tight font-bold">
//               Discover Wines by Country &amp; Region
//             </h2>
//             <p className="mt-4 text-sm xs:text-base sm:text-lg leading-relaxed text-[#685D54]">
//               Our portfolio brings together wines from carefully selected producers across several renowned wine-producing regions.
//             </p>
//           </div>

//           <div className="mt-10 sm:mt-14 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
//             {regions.map((region, index) => (
//               <Link
//                 key={region.name}
//                 href={region.href}
//                 className="group relative flex flex-col justify-between min-h-[280px] xs:min-h-[300px] border border-[#C8BBAA] bg-[#F5F1E8] p-6 xs:p-8 transition-all duration-500 hover:-translate-y-1.5 hover:bg-[#741C29] hover:text-white hover:shadow-2xl"
//               >
//                 <div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A98552] group-hover:text-[#D8BB85]">
//                       0{index + 1}
//                     </span>
//                     <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
//                       →
//                     </span>
//                   </div>

//                   <h3 className="mt-6 sm:mt-8 font-serif text-3xl sm:text-4xl font-bold">
//                     {region.name}
//                   </h3>

//                   {region.count && (
//                     <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#7B1E2B] group-hover:text-[#D8BB85]">
//                       {region.count}
//                     </p>
//                   )}

//                   <p className="mt-4 text-xs xs:text-sm sm:text-base leading-relaxed text-[#6D625B] group-hover:text-[#E9DFD6]">
//                     {region.description}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= BUSINESS SOLUTIONS SECTION ================= */}
//       <section className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24">
//         <div className="mx-auto max-w-[1500px]">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
//             <div className="lg:col-span-5">
//               <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#7B1E2B]">
//                 Built for Business
//               </p>
//               <h2 className="mt-3 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-tight font-bold lg:sticky lg:top-10">
//                 Wine Solutions for Businesses
//               </h2>
//             </div>

//             <div className="lg:col-span-7 divide-y divide-[#CEC3B5] border-y border-[#CEC3B5]">
//               {solutions.map((solution) => (
//                 <div
//                   key={solution.number}
//                   className="group py-6 xs:py-8 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start transition-colors duration-300 hover:bg-white/40 px-2"
//                 >
//                   <span className="sm:col-span-2 text-xs sm:text-sm font-bold text-[#A98552]">
//                     {solution.number}
//                   </span>
//                   <h3 className="sm:col-span-4 font-serif text-xl sm:text-2xl font-bold transition-colors duration-300 group-hover:text-[#7B1E2B]">
//                     {solution.title}
//                   </h3>
//                   <p className="sm:col-span-6 text-xs xs:text-sm sm:text-base leading-relaxed text-[#6D625B]">
//                     {solution.description}
//                   </p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* ================= WHY US SECTION ================= */}
//       <section className="bg-[#241B16] px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 text-[#F5F1E8]">
//         <div className="mx-auto max-w-[1500px]">
//           <div className="max-w-3xl">
//             <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#C7A66A]">
//               The CIAO DANIEL&apos;S Difference
//             </p>
//             <h2 className="mt-3 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl leading-tight font-bold">
//               Why CIAO DANIEL&apos;S?
//             </h2>
//           </div>

//           <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
//             {reasons.map((reason, index) => (
//               <div key={reason.title} className="flex flex-col">
//                 <span className="text-xs sm:text-sm font-bold text-[#C7A66A]">
//                   0{index + 1}
//                 </span>
//                 <h3 className="mt-3 font-serif text-xl sm:text-2xl font-bold">
//                   {reason.title}
//                 </h3>
//                 <p className="mt-3 text-xs xs:text-sm sm:text-base leading-relaxed text-[#CFC4BB]">
//                   {reason.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FINAL CTA SECTION ================= */}
//       <section className="relative overflow-hidden bg-[#741C29] px-4 xs:px-6 sm:px-8 md:px-12 py-20 sm:py-28 text-center text-white">
//         <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 pointer-events-none" />

//         <div className="relative z-10 mx-auto max-w-4xl">
//           <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#E2CFA8]">
//             Let&apos;s Work Together
//           </p>

//           <h2 className="mt-4 font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-bold">
//             Looking for the Right Wines for Your Business?
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
//             Explore our portfolio and discover wines that could be the next addition to your restaurant, retail store, hotel, bar, or hospitality program.
//           </p>

//           <p className="mt-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.1em] text-[#E2CFA8]">
//             Wholesale pricing and availability are available upon request.
//           </p>

//           <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row justify-center gap-3 xs:gap-4 w-full xs:w-auto">
//             <Link
//               href="/wholesale"
//               className="w-full xs:w-auto bg-white px-8 py-4 text-xs xs:text-sm font-semibold uppercase tracking-[0.12em] text-[#741C29] transition-all duration-300 hover:bg-[#E8DCC8] shadow-lg active:scale-95"
//             >
//               Request Wholesale Pricing
//             </Link>

//             <Link
//               href="/contact"
//               className="w-full xs:w-auto border-2 border-white/80 px-8 py-4 text-xs xs:text-sm font-semibold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-white hover:text-[#741C29] active:scale-95"
//             >
//               Book a Call
//             </Link>
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }
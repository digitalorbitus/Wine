
"use client";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { ArrowRight, Compass, ShieldCheck, Globe, Wine } from 'lucide-react';
import { Link as LinkIcon, Search } from 'lucide-react'; // icons ke liye lucide-react (optional)
import WineLoader from "../component/WineLoader"; // WineLoader component ko import karein
import ReviewsPage from "../component/ReviewsSection";
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
    href: "/italy",
  },
  {
    name: "France",
    count: "4 Regional Selections",
    description:
      "Discover wines from 4 regional selections, representing the heritage and diversity of French winemaking.",
    href: "/france",
  },
  {
    name: "Argentina",
    description:
      "Discover our selection from Argentina and wines shaped by distinctive growing regions and winemaking traditions.",
    href: "/Argentina",
  },
  {
    name: "California",
    description:
      "Discover selected California wines representing the state's diverse wine-growing regions and styles.",
    href: "/california",
  },
  {
    name: "Oregon",
    description:
      "Explore distinctive wines from Oregon and selections from one of America's emerging wine regions.",
    href: "/Oregon",
  },
  {
    name: "Spain",
    description:
      "Discover wines reflecting Spain's diverse regions, indigenous grapes, and winemaking traditions.",
    href: "/Spain",
  },
  {
    name: "Portugal",
    description:
      "Explore wines that showcase Portugal's unique grape varieties and rich winemaking heritage.",
    href: "/Portugal",
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
    title: 'Italy',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg', // Aapki image ka path
    link: '#',
  },
  {
    id: 2,
    title: 'Spain',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Organ',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Portugal',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'France',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
  {
    id: 6,
    title: 'Argentina',
    image: 'https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/img4-1.jpg',
    link: '#',
  },
];

const images = [
  {
    id: 1,
    src: "/1790013370228-t37fk3-Wine_New_bnner.webp", // Desktop
    mobileSrc: "/1790013370228-t37fk3-Wine_New_bnner.webp", // Mobile (ya mobile portrait image ka link)
    alt: "Slide 1",
  },
  // {
  //   id: 2,
  //   src: "https://dtwine.wpenginepowered.com/wp-content/uploads/revslider/winery/slider3-2.jpg",
  //   mobileSrc: "https://dtwine.wpenginepowered.com/wp-content/uploads/revslider/winery/slider3-2.jpg",
  //   alt: "Slide 2",
  // },
  // {
  //   id: 3,
  //   src: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/slider4.jpg",
  //   mobileSrc: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/slider4.jpg",
  //   alt: "Slide 3",
  // },
];
// Tastefully Yours  start
// Tastefully Yours start
const categorie = [
  {
    id: 1,
    name: "Italy",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon1.png",
    href: "/italy",
  },
  {
    id: 2,
    name: "France",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon2.png",
    href: "/france",
  },
  {
    id: 3,
    name: "Argentina",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon4.png",
    href: "/Argentina",
  },
  {
    id: 4,
    name: "Oregon",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon3.png",
    href: "/Oregon",
  },
  {
    id: 5,
    name: "California",
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/tab-icon5.png",
    href: "/california",
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
  const [showMore, setShowMore] = useState(false);

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
<section className="relative w-full overflow-hidden bg-[#F4F2EC] m-0 p-0 group">
  <div
    className="
      relative
      w-full
      min-h-[520px]
      h-[72vh]
      sm:h-[68vh]
      md:h-[70vh]
      lg:h-[53vh]
      xl:h-[65vh]
      2xl:h-[78vh]
      max-h-[820px]
    "
  >
    {/* HERO IMAGE */}
    {images.length > 0 && images[currentIndex] && (
      <Image
        src={images[currentIndex].src}
        alt={
          images[currentIndex].alt ||
          "Wines LLC wine wholesale"
        }
        fill
        priority
        sizes="100vw"
        className="
          object-cover
          object-center
          transition-all
          duration-700
        "
      />
    )}

    {/* HERO CONTENT - ALL LEFT SIDE */}
    <div
      className="
        absolute
        inset-0
        z-20

        flex
        items-center
        justify-start

        px-4
        py-5

        sm:px-6
        sm:py-6

        md:px-8
        md:py-8

        lg:px-12
        lg:py-10

        xl:px-16
        xl:py-12

        2xl:px-20
        2xl:py-16
      "
    >
      {/* CONTENT INNER CONTAINER */}
      <div
        key={currentIndex}
        className="
          w-full
          max-w-4xl

          flex
          flex-col
          items-start
          justify-center

          text-left

          gap-2
          sm:gap-2
          md:gap-2.5
          lg:gap-3
        "
      >
        {/* =====================================================
            SMALL LABEL
        ===================================================== */}
        <div
          className="
            hero-item
            animate-slide-in-left
            [animation-delay:100ms]

            inline-block
            w-fit
            max-w-[95%]

            text-[clamp(9px,1.2vw,14px)]

            tracking-[0.12em]
            sm:tracking-[0.18em]
            md:tracking-[0.22em]
            lg:tracking-[0.25em]

            uppercase

            font-philosopher
            font-semibold

            text-white
            bg-black

            border
            border-[#D4AF37]

            rounded-full

            px-3
            py-1.5

            sm:px-4
            sm:py-2

            md:px-5
            md:py-2

            leading-normal

            outline
            outline-1
            outline-[#D4AF37]/40
            outline-offset-1
          "
        >
          PREMIUM WINE WHOLESALER
        </div>

        {/* =====================================================
            MAIN HEADING
        ===================================================== */}
        <h1
          className="
            hero-item
            animate-slide-in-left
            [animation-delay:250ms]

            font-philosopher
            font-bold

            leading-[1.15]
            sm:leading-[1.1]

            text-[clamp(22px,4vw,64px)]

            max-w-3xl

            text-[#741C29]
            text-left

            drop-shadow-[0_2px_5px_rgba(255,255,255,0.6)]

            m-0
          "
        >
          YOUR TRUSTED WINE 
          <br />
          PARTNER IN OHIO
        </h1>

        {/* =====================================================
            DESCRIPTION
        ===================================================== */}
        <p
          className="
            hero-item
            animate-slide-in-left
            [animation-delay:400ms]

            w-full
            max-w-2xl
            text-[clamp(11px,1.5vw,18px)]
            leading-[1.7]
            font-philosopher
            font-light
            text-black
            text-left
            drop-shadow-[0_1px_4px_rgba(255,255,255,0.6)]
            m-0
          "
        >
          <span className="
            inline-block
            w-fit
            text-white
            bg-[#741C29]
            text-xl
            md:text-2xl

            px-4
            py-2
            rounded-full
            border
            border-[#741C29]
            shadow-sm
          ">
            26+ Years of Experience | 100+ Satisfied Clients
          </span>

          <span className="block mt-3">
            From{" "}
            <span className="text-[#741C29] font-semibold">
              Restaurants, Hotels, Bars, Country Clubs, Retailers
            </span>
          </span>

          <span className="block mt-2">
            and{" "}
            <span className="text-[#741C29] font-semibold">
              Hospitality Businesses
            </span>
            , we provide quality wines backed by
          </span>

          <span className="block mt-2">
            reliable service and long-standing relationships.
          </span>
        </p>

        {/* =====================================================
            BUTTONS
        ===================================================== */}
        <div
          className="
            hero-item
            animate-slide-in-left
            [animation-delay:550ms]

            flex
            flex-wrap
            items-center
            justify-start

            gap-2
            sm:gap-3
            md:gap-4

            pt-1

            m-0
          "
        >
          {/* REQUEST WHOLESALE PRICING */}
          <button
            onClick={() => {
              window.location.href = "/contact";
            }}
            className="
              inline-flex
              items-center
              justify-center

              px-3.5
              py-2

              sm:px-5
              sm:py-2.5

              md:px-6
              md:py-3

              lg:px-7
              lg:py-3.5

              text-[clamp(9.5px,1.1vw,14px)]

              font-philosopher
              font-semibold

              bg-transparent

              border
              border-[#741C29]

              text-[#741C29]

              rounded-md

              shadow-md

              transition-all
              duration-300

              hover:bg-[#741C29]
              hover:text-white
              hover:scale-105
              hover:shadow-xl

              whitespace-nowrap
              cursor-pointer
            "
          >
            REQUEST WHOLESALE PRICING
          </button>

          {/* EXPLORE PORTFOLIO */}
          <Link
            href="/shop"
            className="
              inline-flex
              items-center
              justify-center

              px-3.5
              py-2

              sm:px-5
              sm:py-2.5

              md:px-6
              md:py-3

              lg:px-7
              lg:py-3.5

              text-[clamp(9.5px,1.1vw,14px)]

              font-philosopher
              font-semibold

              bg-[#741C29]

              hover:bg-[#5c1621]

              text-white

              rounded-md

              shadow-lg

              transition-all
              duration-300

              hover:scale-105
              hover:shadow-xl

              whitespace-nowrap
              cursor-pointer
            "
          >
            EXPLORE OUR PORTFOLIO
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>
   {/* ====================  inderduded your self start   =========================*/}
  

{/* =========================================================
    PROFESSIONAL WINE INTRO SECTION
========================================================= */}

<section className="w-full overflow-hidden bg-[#F4F2EC] font-philosopher">
  <div
    className="
      mx-auto w-full max-w-[1600px]
      px-5 py-10
      sm:px-8 sm:py-12
      md:px-10 md:py-14
      lg:px-14 lg:py-16
      xl:px-20 xl:py-20
      2xl:px-24 2xl:py-24
    "
  >
    <div
      className="
        grid grid-cols-1 items-center
        gap-10
        sm:gap-12
        md:gap-14
        lg:grid-cols-2
        lg:gap-12
        xl:gap-16
        2xl:gap-20
      "
    >

      {/* =====================================================
          LEFT COLUMN
          MOBILE:
          IMAGE = ORDER 1
          BUTTONS = ORDER 3
          DISCOVER = ORDER 4

          DESKTOP:
          IMAGE + BUTTONS + DISCOVER = LEFT SIDE
      ====================================================== */}

<div className="contents lg:block">

  {/* =====================================================
      IMAGE
  ====================================================== */}

  <div
    className="
      order-1
      flex w-full
      justify-center
      lg:order-none
      lg:justify-start
    "
  >
    <div
      className="
        relative
        w-full
        max-w-[430px]

        sm:max-w-[500px]
        md:max-w-[540px]
        lg:max-w-[560px]
        xl:max-w-[610px]
        2xl:max-w-[660px]
      "
    >

      {/* IMAGE CONTAINER */}
      <div
        className="
          relative
          w-full
          overflow-visible
          bg-transparent
        "
      >

        {/* =================================================
            MAIN IMAGE
        ================================================== */}

        <img
          src="/wm 1.png"
          alt="Premium Wine"
          className="
            block
            w-full

            h-[300px]
            sm:h-[380px]
            md:h-[400px]
            lg:h-[420px]
            xl:h-[470px]
            2xl:h-[510px]

            object-contain
            object-center

            select-none

            transition-transform
            duration-700
            hover:scale-[1.015]
          "
        />


        {/* =================================================
            26 YEARS LOGO
            RESPONSIVE UPPER-RIGHT
        ================================================== */}

   <div
  className="
    pointer-events-none
    absolute
    right-[-2%]
    top-[8%]
    z-30
    sm:right-[-1%]
    sm:top-[7%]
    md:right-[0%]
    md:top-[6%]
    lg:right-[1%]
    lg:top-[5%]
    xl:right-[1%]
    xl:top-[5%]
    2xl:right-[2%]
    2xl:top-[5%]
  "
>
  {/* <Image
    src="/26 YEARS.png"
    alt="26 Years of Wine Excellence"
    width={300}
    height={120}
    priority
    quality={100}
    unoptimized
    className="
      block
      h-auto
      object-contain
      w-[85px]
      sm:w-[105px]
      md:w-[120px]
      lg:w-[135px]
      xl:w-[150px]
      2xl:w-[165px]
    "
  /> */}
</div>

      </div>
    </div>
  </div>


  {/* =====================================================
      BUTTONS

      MOBILE = AFTER TEXT
      DESKTOP = UNDER IMAGE
  ====================================================== */}

  <div
    className="
      order-3
      mt-7
      flex w-full
      flex-col
      gap-2.5

      sm:mt-8
      sm:flex-row
      sm:items-center
      sm:gap-2

      md:mt-9

      lg:order-none
      lg:mt-7
      lg:pl-11

      xl:pl-22
      2xl:pl-16
    "
  >

    {/* EXPLORE OUR PORTFOLIO */}

    <Link
      href="/shop"
      className="
        inline-flex
        w-full
        items-center
        justify-center

        rounded-sm
        bg-[#71111B]

        px-6
        py-3.5

        text-center
        text-[10px]
        font-semibold
        uppercase
        tracking-[0.22em]
        text-white

        transition-all
        duration-300

        hover:bg-[#5A0D15]
        hover:shadow-[0_8px_24px_rgba(113,17,27,0.16)]

        active:scale-[0.98]

        sm:w-auto
        sm:px-9
        sm:py-4

        md:px-10
      "
    >
      EXPLORE OUR PORTFOLIO
    </Link>


    {/* DISCOVER MORE */}

<Link
  href="/contact"
  className="
    inline-flex
    w-fit
    items-center
    justify-center
    rounded-sm
    border
    border-[#BDB4A9]
    bg-transparent
    px-6
    py-3.5
    text-[10px]
    font-semibold
    uppercase
    tracking-[0.22em]
    text-[#5E554F]
    transition-all
    duration-300
    hover:border-[#71111B]
    hover:bg-[#71111B]
    hover:text-white
    sm:px-7
    sm:py-4
  "
>
  WORK WITH US
</Link>

  </div>


  {/* =====================================================
      DISCOVER MORE CONTENT
  ====================================================== */}



</div>


      {/* =====================================================
          RIGHT CONTENT
          MOBILE = ORDER 2
          DESKTOP = RIGHT SIDE
      ====================================================== */}

      <div
        className="
          contents
          lg:block
        "
      >

        {/* =====================================================
            TEXT CONTENT WRAPPER
            MOBILE = ORDER 2
            DESKTOP = RIGHT COLUMN
        ====================================================== */}

        <div
          className="
            order-2
            flex w-full
            flex-col
            items-start
            text-left

            lg:order-none
            lg:max-w-xl
            xl:max-w-2xl
          "
        >

          {/* TOP LABEL */}

          <div
            className="
              mb-4
              flex items-center gap-3

              sm:mb-5
            "
          >
            <span
              className="
                h-px
                w-8
                bg-[#71111B]

                sm:w-10
              "
            />

            <span
              className="
                text-[9px]
                font-medium
                font-bold
                uppercase
                tracking-[0.24em]
              text-black

                sm:text-[12px]
                sm:tracking-[0.28em]
              "
            >
              Welcome to Our Wine World
            </span>
          </div>


          {/* =====================================================
              HEADING
          ====================================================== */}

          <h1
            className="
              max-w-3xl
              font-philosopher

              text-[2rem]
              leading-[1.08]
              tracking-[-0.025em]
              text-[#241B16]

              sm:text-[1.6rem]
              md:text-[2.2rem]
              lg:text-[2.25rem]
              xl:text-[2.9rem]
              2xl:text-[4.3rem]
            "
          >
            26 Years of Wine
            <br />

            <span className="italic text-[#71111B]">
              Industry Experience
            </span>
          </h1>


          {/* DIVIDER */}

          <div
            className="
              mt-5
              h-px
              w-14
              bg-[#B89B6A]

              sm:mt-6
              sm:w-20
            "
          />


          {/* =====================================================
              DESCRIPTION
          ====================================================== */}

          <div
            className="
              mt-5
              w-full
              max-w-xl

              sm:mt-6
              md:max-w-2xl
              xl:max-w-3xl
            "
          >

            {/* PARAGRAPH 1 */}

            <p
              className="
                text-sm
                leading-6
                font-light
                text-[#6D625B]

                sm:text-[15px]
                sm:leading-7

                md:text-base
                md:leading-8

                lg:text-[17px]
              "
            >
              For over 26 years, <span className="text-[#741C29] font-semibold text-xl text-bold"> Wines LLC</span> has connected quality wineries with wholesale customers through a direct-import model.

Rather than buying through multiple distribution layers, we work directly with wineries, import their wines, and maintain inventory in our own warehouses—ready for wholesale.

This more direct approach helps us reduce unnecessary costs and pass the value on to our customers, offering quality wines at competitive wholesale prices. <br/>

 <span className=" text-[#741C29] font-semibold">Direct from the winery. Ready for wholesale. Built on 26+ years of experience.</span>
            </p>


            {/* PARAGRAPH 2 */}

            {/* <p
              className="
               

                text-sm
                leading-6
                font-light
                text-[#6D625B]

                
                sm:text-[15px]
                sm:leading-7

               
                md:text-base
                md:leading-8

                lg:text-[17px]
              "
            >
              Our focus is simple: help businesses find the right wines
              for their customers.
            </p> */}


            {/* PARAGRAPH 3 */}

            {/* <p
              className="
              

                text-sm
                leading-6
                font-light
                text-[#6D625B]

              
                sm:text-[15px]
                sm:leading-7

              
                md:text-base
                md:leading-8

                lg:text-[17px]
              "
            >
              From established European wine regions to carefully selected
              wines from the United States and South America, our portfolio
              offers a variety of styles, regions, and producers.
            </p> */}


            {/* PARAGRAPH 4 */}

            {/* <p
              className="
              

                text-sm
                leading-6
                font-light
                text-[#6D625B]

              
                sm:text-[15px]
                sm:leading-7

             
                md:text-base
                md:leading-8

                lg:text-[17px]
              "
            >
              Explore our portfolio and contact our team for wholesale
              pricing, availability, and recommendations.
            </p> */}

          </div>

        </div>

      </div>

    </div>
  </div>
</section>





 {/* ====================  inderduded your self end   =========================*/}


   
{/* New Arrival start */}





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

   <ReviewsPage />









{/* The Process of WineMaking start */}

{/* The Process of WineMaking end  */}





{/* IN THE HEART OF NAPA VALLEY start */}


    {/* IN THE HEART OF NAPA VALLEY end */}

{/* ===================Tastefully Yours  start ===================*/}
    




{/* ===================  What CIAO DANIEL'S  Offers  start  =======================*/}


<section className="min-h-screen bg-[#EAE3DA] text-[#2C2421] px-4 py-8 md:px-12 md:py-16 font-sans antialiased selection:bg-[#5A2D23] selection:text-white">
      {/* Top Floating Metallic Navigation Bar */}
      
      {/* Hero Header Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
        <div className="md:col-span-7 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#741C29] font-bold block">
            Boutique Wine Selection
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-[1.05] text-[#1C1514] tracking-tight">
            What <span className="font-semibold">Wines</span><br />
            <span class="italic font-light">LLC</span><br />
            Offers
          </h1>
        </div>

        {/* Top Right Floating Detail Box */}
        <div className="md:col-span-5 bg-[#DFD6CB]/80 backdrop-blur-md p-6 rounded-2xl border border-[#C2B7A8] shadow-sm space-y-4">
          <p className="text-xs leading-relaxed text-[#544640] font-normal">
            From carefully selected wines to tailored wholesale solutions, we help hospitality businesses create exceptional wine programs with confidence and consistency.
          </p>
          <div className="pt-4 border-t border-[#C2B7A8]/60 flex items-center justify-between">
            <div>
              <span className="text-4xl font-serif font-bold text-[#1C1514] leading-none">26</span>
              <span className="text-[10px] tracking-widest uppercase text-[#741C29] block mt-1">Years in Hospitality</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-[7a0218]/40 flex items-center justify-center text-[#8C6B5D]">
              <Wine className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      {/* Main 4 Cards Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card 01: Rich Mahogany Wood Texture */}
        <div className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-[#4A241C] via-[#331711] to-[#1F0C08] text-[#F3EEEA] shadow-2xl border border-[#6E3A2E]/50 flex flex-col justify-between h-80 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start z-10">
            <span className="text-3xl font-serif text-amber-200/90 font-light">01</span>
            <div className="flex items-center space-x-2 bg-amber-950/40 px-3 py-1 rounded-full border border-amber-500/20">
              <Wine className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[10px] tracking-widest uppercase text-amber-200/80">Wine Family's</span>
            </div>
          </div>

          <div className="z-10 space-y-2">
            <h3 className="text-2xl font-serif font-medium tracking-wide text-amber-100">
            Direct Winery Sourcing
            </h3>
            <p className="text-xs text-amber-100/70 leading-relaxed max-w-sm">
Wines sourced directly from wineries and brought to our Ohio warehouse, helping us offer quality and competitive pricing.
            </p>
            <div className="pt-3">
              <a href="#" className="inline-flex items-center text-xs tracking-widest uppercase font-medium text-amber-200 group-hover:text-amber-300 transition-colors space-x-2">
                <span>Explore Selection</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Background Watermark */}
          <span className="absolute right-4 -bottom-6 text-9xl font-serif text-white/[0.04] select-none pointer-events-none font-bold">
            01
          </span>
        </div>

        {/* Card 02: Dark Marble / Slate Surface */}
        <div className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-[#212429] via-[#16181C] to-[#0B0C0E] text-[#E0E2E5] shadow-2xl border border-[#3A3E47]/60 flex flex-col justify-between h-80 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start z-10">
            <span className="text-3xl font-serif text-gray-300/90 font-light">02</span>
            <div className="flex items-center space-x-2 bg-gray-800/40 px-3 py-1 rounded-full border border-gray-500/20">
              <Compass className="w-3.5 h-3.5 text-gray-300" />
              <span className="text-[10px] tracking-widest uppercase text-gray-300/80">Wine Family's</span>
            </div>
          </div>

          <div className="z-10 space-y-2">
            <h3 className="text-2xl font-serif font-medium tracking-wide text-gray-100">
              Everyday to High-End
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
From reliable everyday wines to occasional high-end selections, our portfolio covers a range of quality and price points.
            </p>
            <div className="pt-3">
              <a href="#" className="inline-flex items-center text-xs tracking-widest uppercase font-medium text-gray-200 group-hover:text-white transition-colors space-x-2">
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Background Watermark */}
          <span className="absolute right-4 -bottom-6 text-9xl font-serif text-white/[0.04] select-none pointer-events-none font-bold">
            02
          </span>
        </div>

        {/* Card 03: Carved Dark Wood / Leather Finish */}
        <div className="group relative overflow-hidden rounded-3xl p-8 bg-gradient-to-br from-[#382119] via-[#24130E] to-[#120805] text-[#EADBD3] shadow-2xl border border-[#523328]/60 flex flex-col justify-between h-80 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start z-10">
            <span className="text-3xl font-serif text-amber-300/80 font-light">03</span>
            <div className="flex items-center space-x-2 bg-amber-950/30 px-3 py-1 rounded-full border border-amber-600/20">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-200/80" />
              <span className="text-[10px] tracking-widest uppercase text-amber-200/70">Wine Family's</span>
            </div>
          </div>

          <div className="z-10 space-y-2">
            <h3 className="text-2xl font-serif font-medium tracking-wide text-amber-50">
             Quality & Value
            </h3>
            <p className="text-xs text-amber-100/60 leading-relaxed max-w-sm">
             A thoughtfully built portfolio focused on strong wines, dependable value, and selections that make sense for the market.
            </p>
            <div className="pt-3">
              <a href="#" className="inline-flex items-center text-xs tracking-widest uppercase font-medium text-amber-200 group-hover:text-amber-100 transition-colors space-x-2">
                <span>View Cases</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Background Watermark */}
          <span className="absolute right-4 -bottom-6 text-9xl font-serif text-white/[0.04] select-none pointer-events-none font-bold">
            03
          </span>
        </div>

        {/* Card 04: Frosted Glassmorphism Overlay */}
        <div className="group relative overflow-hidden rounded-3xl p-8 bg-white/40 backdrop-blur-xl text-[#1C1514] shadow-2xl border border-white/70 flex flex-col justify-between h-80 transition-transform duration-300 hover:-translate-y-1">
          <div className="flex justify-between items-start z-10">
            <span className="text-3xl font-serif text-[#4A3A33] font-light">04</span>
            <div className="flex items-center space-x-2 bg-white/60 px-3 py-1 rounded-full border border-black/10">
              <Globe className="w-3.5 h-3.5 text-[#5A4A42]" />
              <span className="text-[10px] tracking-widest uppercase text-[#5A4A42]">Wine Family's</span>
            </div>
          </div>

          <div className="z-10 space-y-2">
            <h3 className="text-2xl font-serif font-medium tracking-wide text-[#1C1514]">
              Ohio Wholesale
            </h3>
            <p className="text-xs text-[#5A4A42] leading-relaxed max-w-sm">
Local warehousing and wholesale distribution for Ohio retailers, restaurants, and trade partners.
            </p>
            <div className="pt-3">
              <a href="#" className="inline-flex items-center text-xs tracking-widest uppercase font-bold text-[#1C1514] group-hover:text-black transition-colors space-x-2">
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Background Watermark */}
          <span className="absolute right-4 -bottom-6 text-9xl font-serif text-black/[0.05] select-none pointer-events-none font-bold">
            04
          </span>
        </div>

      </div>

      {/* Footer Meta Details */}
      {/* <footer className="max-w-6xl mx-auto mt-16 pt-6 border-t border-[#C2B7A8]/60 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-[#8C6B5D] gap-4">
        <div className="flex space-x-6">
          <span>Contact</span>
          <span>/</span>
          <span>Consultation</span>
          <span>/</span>
          <span>Membership</span>
        </div>
        <div>
          Est. 2026 — Wine Collective
        </div>
      </footer> */}
    </section>



{/* ===================  What CIAO DANIEL'S  Offers  end  =======================*/}


{/*======================= Discover Wines by Country & Region start ================ */}
<section
  className="relative overflow-hidden bg-[#F6F4F0] bg-cover bg-center bg-no-repeat px-4 py-16 xs:px-6 sm:px-8 md:px-12 lg:px-16 lg:py-20 xl:py-24"
  style={{
    backgroundImage: "url('/wines_all.png')",
  }}
>
  {/* ================= BACKGROUND OVERLAY ================= */}
  <div className="pointer-events-none absolute inset-0 bg-[#F6F4F0]/70" />

  {/* Soft Decorative Glow */}
  <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#741C29]/5 blur-3xl" />
  <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#C2A385]/10 blur-3xl" />

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 mx-auto max-w-[1400px]">

    {/* ================= HEADER ================= */}
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">

      {/* LEFT HEADER */}
      <div className="lg:col-span-7">

        {/* Eyebrow */}
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-[#741C29]" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#741C29]">
            Explore Our Collection
          </p>
        </div>

        {/* Main Heading */}
        <h2 className="font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-[#1A1A1A] sm:text-5xl lg:text-6xl xl:text-[68px]">
          Discover Wines
          <br />

          <span className="italic text-[#741C29]">
            by Country & Region
          </span>
        </h2>

        {/* Subtext */}
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#6D625B] sm:text-base">
          From the rolling vineyards of Europe to the sun-kissed valleys of
          the New World, explore exceptional wines from the world's most
          renowned regions.
        </p>
      </div>

      {/* RIGHT Cursive Statement */}
      <div className="hidden justify-end lg:col-span-5 lg:flex">
        <div className="relative pr-6">

          {/* Small decorative line */}
          <span className="absolute -left-8 top-4 h-px w-5 bg-[#C2A385]" />

          <p className="font-serif text-3xl italic leading-relaxed tracking-wide text-[#C2A385] opacity-90 -rotate-3 xl:text-4xl">
            Exceptional Wines,
            <br />

            <span className="ml-10">
              Global Origins.
            </span>
          </p>

          {/* Small number */}
          <span className="absolute -bottom-6 right-0 text-[9px] uppercase tracking-[0.3em] text-[#741C29]/60">
            Est. Collection
          </span>
        </div>
      </div>
    </div>

    {/* ================= REGION GRID ================= */}
    <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {regions.map((region) => (
        <Link
          key={region.name}
          href={region.href}
          className="
            group relative flex h-[220px] min-h-[220px] w-full
            overflow-hidden rounded-2xl
            border border-black/[0.06]
            bg-white/95
            shadow-[0_8px_30px_rgba(40,20,10,0.06)]
            transition-all duration-500
            hover:-translate-y-2
            hover:border-[#741C29]
            hover:bg-[#741C29]
            hover:shadow-[0_20px_45px_rgba(116,28,41,0.22)]
          "
        >

          {/* ================= CARD IMAGE ================= */}
          <div className="absolute inset-y-0 right-0 w-[47%] overflow-hidden">

            <Image
              src={region.image}
              alt={region.name}
              fill
              className="
                object-cover object-center
                opacity-95
                transition-all duration-700
                group-hover:scale-110
                group-hover:opacity-75
              "
            />

            {/* Normal Gradient */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-white
                via-white/50
                to-transparent
                transition-opacity duration-500
                group-hover:opacity-0
              "
            />

            {/* Hover Wine Overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-r
                from-[#741C29]/20
                via-[#741C29]/10
                to-[#741C29]/30
                opacity-0
                transition-opacity duration-500
                group-hover:opacity-100
              "
            />
          </div>

          {/* ================= CARD TEXT ================= */}
          <div
            className="
              relative z-10
              flex w-[68%]
              flex-col justify-between
              p-6
              transition-all duration-500
            "
          >

            <div>

              {/* Region Number */}
              <div className="mb-2 flex items-center gap-2">

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#741C29]
                    transition-colors duration-500
                    group-hover:text-[#F4E9DF]
                  "
                >
                  {region.id}
                </span>

                <span
                  className="
                    h-px w-5
                    bg-[#741C29]/40
                    transition-all duration-500
                    group-hover:w-8
                    group-hover:bg-[#F4E9DF]/50
                  "
                />
              </div>

              {/* Country Name */}
              <h3
                className="
                  font-serif
                  text-[27px]
                  font-normal
                  leading-tight
                  text-[#1A1A1A]
                  transition-colors duration-500
                  group-hover:text-white
                "
              >
                {region.name}
              </h3>

              {/* Description */}
              <p
                className="
                  mt-2
                  line-clamp-3
                  max-w-[250px]
                  text-[11px]
                  leading-[1.65]
                  text-[#6D625B]
                  transition-colors duration-500
                  group-hover:text-white/75
                "
              >
                {region.description}
              </p>
            </div>

            {/* ================= EXPLORE ================= */}
            <div
              className="
                mt-3
                flex items-center gap-2
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#741C29]
                transition-colors duration-500
                group-hover:text-white
              "
            >
              <span>
                Explore Wines
              </span>

              {/* Arrow Circle */}
              <span
                className="
                  flex h-6 w-6
                  items-center justify-center
                  rounded-full
                  bg-[#741C29]
                  text-white
                  transition-all duration-500
                  group-hover:bg-white
                  group-hover:text-[#741C29]
                  group-hover:translate-x-1
                "
              >
                <ArrowRight
                  size={11}
                  strokeWidth={2}
                />
              </span>
            </div>
          </div>

          {/* ================= HOVER EDGE ================= */}
          <div
            className="
              pointer-events-none
              absolute bottom-0 left-0
              h-[3px] w-0
              bg-[#C2A385]
              transition-all duration-500
              group-hover:w-full
            "
          />

          {/* ================= CORNER DETAIL ================= */}
          <div
            className="
              pointer-events-none
              absolute right-4 top-4
              h-7 w-7
              border-r border-t
              border-transparent
              transition-all duration-500
              group-hover:border-[#C2A385]/70
            "
          />

        </Link>
      ))}
    </div>

    {/* ================= BOTTOM STATEMENT ================= */}
    <div className="mt-16 flex items-center justify-end gap-3">

      <span className="h-px w-10 bg-[#741C29]/50" />

      <span
        className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.25em]
          text-[#741C29]
        "
      >
        Exceptional Wines, Global Origins.
      </span>
    </div>

  </div>
</section>
{/*======================= Discover Wines by Country & Region end ================ */}






     {/* ============================ EXPERIENCE SECTION  start  ======================== */}
     {/* <section className="bg-[#241B16] px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 text-[#F5F1E8]">
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
      </section>  */}
       {/* ============================ EXPERIENCE SECTION  end  ======================== */}


{/*======================= Wine Solutions for Businesses start ================ */}
<section className="relative overflow-hidden bg-[#F4F2EC] px-14 py-12">
  <div className="mx-auto max-w-[1500px]">

    <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">

      {/* ================= LEFT SIDE ================= */}
      <div className="lg:col-span-5">

        <div className="lg:sticky lg:top-10">

          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3 sm:mb-6">
            <span className="h-px w-10 bg-[#7B1E2B] sm:w-14" />

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#7B1E2B]
                xs:text-[11px]
                sm:text-xs
                sm:tracking-[0.32em]
              "
            >
              Built for Business
            </p>
          </div>


          {/* Heading */}
          <h2
            className="
              font-philosopher
              text-xl
              font-bold
              leading-[0.98]
              tracking-[-0.02em]
              text-[#241B16]

              xs:text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              xl:text-[58px]
            "
          >
            Wine Solutions

            <span className="mt-1 block text-[#7B1E2B]">
              for Businesses
            </span>
          </h2>


          {/* Supporting Text */}
          <p
            className="
              mt-7
              max-w-lg
              text-sm
              leading-7
              text-[#6D625B]

              xs:text-base
              sm:mt-8
              sm:text-lg
              sm:leading-8
            "
          >
            Thoughtfully selected wines and practical support designed
            around the needs of restaurants, hotels, retailers, bars,
            and hospitality businesses.
          </p>


          {/* ================= 26 YEARS IMAGE LOGO ================= */}
          <div className="mt-8 sm:mt-10">

            <img
              src="/26%20YEARS.png"
              alt="26 Years"
              className="
                h-auto
                w-[110px]
                object-contain
                sm:w-[135px]
              "
            />

          </div>

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="flex lg:col-span-7">

        <div className="flex w-full flex-col">

          {/* Solutions */}
          <div className="border-y border-[#CEC3B5]">

            {solutions.map((solution, index) => (

              <div
                key={solution.number}
                className="
                  group
                  relative
                  grid
                  grid-cols-1
                  gap-3
                  border-b
                  border-[#CEC3B5]
                  px-1
                  py-4
                  transition-all
                  duration-500

                  sm:grid-cols-12
                  sm:gap-4
                  sm:px-3
                  sm:py-5

                  lg:px-4
                  lg:py-6

                  hover:bg-white/60
                "
              >

                {/* Active Line */}
                <span
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[2px]
                    origin-top
                    scale-y-0
                    bg-[#7B1E2B]
                    transition-transform
                    duration-500
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
                      transition-colors
                      duration-300
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
                      transition-colors
                      duration-300

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
                      leading-5
                      text-[#6D625B]

                      sm:text-[14px]
                      sm:leading-6

                      md:text-[15px]

                      group-hover:text-[#4F443D]
                    "
                  >
                    {solution.description}
                  </p>

                </div>


                {/* Arrow */}
                <div
                  className="
                    absolute
                    bottom-3
                    right-3
                    hidden
                    h-7
                    w-7
                    items-center
                    justify-center
                    border
                    border-[#CEC3B5]
                    text-[#7B1E2B]
                    opacity-0
                    transition-all
                    duration-500

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
          <div className="mt-5 flex items-center justify-between gap-4">

            <span
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#8A7B70]
                sm:text-[10px]
              "
            >
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

  </div>
</section>
{/*======================= Wine Solutions for Businesses end ================ */}


{/*======================= Why CIAO DANIEL’S? start ================ */}




{/*======================= Why CIAO DANIEL’S? end ================ */}

{/*======================= Final Home CTA start ================ */}



{/*======================= Final Home CTA end ================ */}




  


{/* ===================Tastefully Yours  end ===================*/}
{/* That Gets Better with Ageing  start */}

    {/* That Gets Better with Ageing  end */}



    {/* HOME EMAIL SEND START */}

     {/* HOME EMAIL SEND START */}
    </div>
  );
}



















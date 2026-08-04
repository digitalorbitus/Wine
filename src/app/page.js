// "use client";
// import Image from "next/image";

// import { useState } from "react";

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const images = [
//   { id: 1, src: "/images/slide1.jpg", alt: "Delightfull Wine Banner" },
//   { id: 2, src: "/images/slide2.jpg", alt: "Slider Image 2" },
//   { id: 3, src: "/images/slide3.jpg", alt: "Slider Image 3" },
//   { id: 4, src: "/images/slide4.jpg", alt: "Slider Image 4" },
// ];

// export default function Home() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const nextSlide = () => {
//     const isLastSlide = currentIndex === images.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };
//   return (
//     <div className="relative w-full max-w-[1200px] h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px] mx-auto my-6 px-4 group">
//       {/* Main Image Container */}
//       <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500 relative overflow-hidden shadow-lg border border-gray-100">
//         <Image
//           src={images[currentIndex].src}
//           alt={images[currentIndex].alt}
//           fill
//           priority
//           className="object-cover duration-500 ease-in-out"
//         />
//       </div>

//       {/* Left Arrow */}
//       <button
//         onClick={prevSlide}
//         aria-label="Previous Slide"
//         className="absolute top-[50%] -translate-y-[50%] left-6 text-xl sm:text-2xl md:text-3xl rounded-full p-2 bg-black/40 hover:bg-black/70 text-white cursor-pointer transition duration-300 opacity-80 sm:opacity-0 group-hover:opacity-100"
//       >
//         <FiChevronLeft />
//       </button>

//       {/* Right Arrow */}
//       <button
//         onClick={nextSlide}
//         aria-label="Next Slide"
//         className="absolute top-[50%] -translate-y-[50%] right-6 text-xl sm:text-2xl md:text-3xl rounded-full p-2 bg-black/40 hover:bg-black/70 text-white cursor-pointer transition duration-300 opacity-80 sm:opacity-0 group-hover:opacity-100"
//       >
//         <FiChevronRight />
//       </button>

//       {/* Bottom Navigation Dots */}
//       <div className="flex justify-center py-3 gap-2">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//             className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
//               currentIndex === index
//                 ? "bg-red-800 w-6 sm:w-8"
//                 : "bg-gray-300 w-2.5 sm:w-3 hover:bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Alex_Brush, Playfair_Display } from 'next/font/google';

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
    <div>

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
  <div className="absolute inset-0 z-10 flex items-center justify-center">
    <div className="relative w-full max-w-5xl h-full flex items-center justify-center">

      {/* Top Text */}
      <h3 className="absolute top-[22%] left-[25%] heading-animation text-[#a3485e] text-xl md:text-4xl uppercase tracking-[6px] font-medium">
        DELIGHTFULL
      </h3>

      {/* Big Text */}
      <TypeAnimation
        sequence={["Wine", 1000]}
        wrapper="h1"
        speed={50}
        repeat={Infinity}
        cursor={false}
        className="text-black text-7xl md:text-[11rem] font-bold leading-none"
      />

      {/* Bottom Text */}
      <p className="absolute bottom-[28%] right-[24%] text-[#a3485e] text-lg md:text-4xl uppercase tracking-[4px]">
        EST - 1942
      </p>

    </div>
  </div>
)}
{/* Content for Slide 2 */}
{currentIndex === 1 && (
  <div
    key={currentIndex}
    className="absolute inset-0 z-10 flex items-center justify-end"
  >
    <div className="max-w-xl mr-16 text-center">

      {/* Top Text */}
{/* Top Text */}
<h3 className="heading-animation text-[#a3485e] text-xl md:text-3xl uppercase tracking-[6px]">
  A Perfect Blend
</h3>

{/* Center Big Text */}
<TypeAnimation
  sequence={[
    "in a Bottle",
    1000,
  ]}
  wrapper="h1"
  speed={50}
  cursor={true}
  className="mt-3 text-black text-6xl md:text-8xl italic font-semibold"
/>

{/* Bottom Small Text */}
<p className="desc-animation mt-6 text-gray-700 text-sm md:text-lg leading-7">
  Wine improves with age, and so do we. Discover our exquisite
  collection of wines, each telling a story of passion,
  tradition, and craftsmanship.
</p>

    </div>
  </div>
)}


{/*  
    id 3 logic */}

{/* Content for Slide 3 */}
{currentIndex === 2 && (
  <div className="absolute inset-0 z-10 flex items-center justify-end px-6 md:px-16">

    <div className="relative w-full max-w-[650px] h-[650px]">

      {/* Main Shape */}
      <div
        className="absolute inset-0 bg-[#8EAF73] shadow-2xl"
        style={{
          clipPath:
            "polygon(8% 0%,100% 10%,100% 90%,8% 100%,0% 50%)",
        }}
      />

      {/* Top Shape */}
      <div
        className="absolute top-0 left-0 w-full h-40 bg-[#A7C38F]/70"
        style={{
          clipPath: "polygon(0 0,100% 0,100% 100%,0 40%)",
        }}
      />

      {/* Bottom Shape */}
      <div
        className="absolute bottom-0 left-0 w-full h-40 bg-[#7FA164]/70"
        style={{
          clipPath: "polygon(0 60%,100% 0,100% 100%,0 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center text-center px-12">

        {/* Small Heading */}
        <h3 className="uppercase tracking-[8px] text-[#9D2030] text-2xl font-light mb-8 animate-fade-in">
          BOTTLED POETRY
        </h3>

        {/* Icon */}
        <div className="mb-10 flex h-28 w-28 items-center justify-center rounded-full bg-[#A82028] shadow-xl">
          <span className="text-6xl">🍷</span>
        </div>

        {/* Title */}
        <TypeAnimation
          sequence={[
            "Vineyard",
            1000,
            "Vineyard & Winery",
            2000,
          ]}
          wrapper="h1"
          speed={40}
          repeat={Infinity}
          cursor={false}
          className="font-serif text-white text-6xl md:text-8xl leading-[1.05] drop-shadow-xl"
        />

        {/* Description */}
        <p className="mt-8 max-w-md text-white/90 leading-8 text-lg">
          Experience handcrafted wines created with passion,
          tradition and generations of excellence.
        </p>

        {/* Button */}
        <button className="mt-10 rounded-full border border-white px-8 py-3 text-white transition-all duration-300 hover:bg-white hover:text-[#7FA164]">
          Explore Collection
        </button>

      </div>

    </div>

  </div>
)}
      <div className="absolute inset-0 "></div>



      {/* Content */}
      {/* <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold">
          Delightfull Wine
        </h1>

        <p className="text-white text-lg md:text-2xl mt-5 max-w-2xl">
          Discover premium wines crafted with passion and tradition.
        </p>

        <button className="mt-8 bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded-md transition duration-300">
          Shop Now
        </button>
      </div> */}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20
        bg-red-800 hover:bg-red-900 text-white
        p-3 rounded-full
        opacity-0 group-hover:opacity-100
        transition-all duration-300"
      >
        <FiChevronLeft size={30} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20
        bg-red-800 hover:bg-red-900 text-white
        p-3 rounded-full
        opacity-0 group-hover:opacity-100
        transition-all duration-300"
      >
        <FiChevronRight size={30} />
      </button>

      {/* Dots */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 h-3 bg-red-800"
                : "w-3 h-3 bg-white"
            }`}
          />
        ))}
      </div> */}
    </section>
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 text-center bg-white">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Script / Cursive Top Heading */}
        <span
          className={`${scriptFont.className} text-3xl sm:text-4xl md:text-5xl text-[#a3485e] tracking-wide mb-1`}
        >
          Discover the
        </span>

        {/* Main Serif Heading */}
        <h2
          className={`${serifFont.className} text-3xl sm:text-2xl md:text-4xl font-normal text-[#1a202c] tracking-wider uppercase mb-4`}
        >
          Wine Collection
        </h2>

        {/* Description Paragraph */}
        <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-serif">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
    </section>

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
    </div>
  );
}
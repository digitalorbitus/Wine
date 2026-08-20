// import Image from "next/image";
// import { ShoppingBag, Heart } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     name: "Burgundy Wine",
//     price: "£20.00",
//     rating: 5,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
//   },
//   {
//     id: 2,
//     name: "Champagne Classic",
//     price: "£15.00",
//     rating: 0,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product3.png",
//   },
//   {
//     id: 3,
//     name: "Chandon Brut",
//     price: null,
//     rating: 4,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product6.png",
//   },
//   {
//     id: 4,
//     name: "Burgundy Wine",
//     price: "£20.00",
//     rating: 5,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
//     onSale: true,
//   },
//   {
//     id: 5,
//     name: "Burgundy Wine",
//     price: "£20.00",
//     rating: 5,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
//   },
// ];

// export default function ShopPage() {
//   return (
//     <div className="min-h-screen bg-white font-serif text-gray-800">
//       {/* Hero / Banner Header */}
//       <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-stone-100 to-white py-12 md:py-16 text-center">
//         <h1 className="text-2xl font-light tracking-widest text-black md:text-3xl uppercase">
//           Shop
//         </h1>
//         <p className="mt-1 text-xs text-gray-500 tracking-wide">
//           Home <span className="mx-1">/</span> Products
//         </p>
//       </div>

//       <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Top Control Bar */}
//         <div className="mb-10 flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
//           <span>Showing 1–12 of 16 results</span>
//           <div>
//             <select
//               defaultValue="default"
//               className="border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-600 outline-none focus:border-gray-400"
//             >
//               <option value="default">Default sorting</option>
//               <option value="popularity">Sort by popularity</option>
//               <option value="rating">Sort by average rating</option>
//               <option value="latest">Sort by latest</option>
//               <option value="price-low">Sort by price: low to high</option>
//               <option value="price-high">Sort by price: high to low</option>
//             </select>
//           </div>
//         </div>

//         {/* Product Grid: 1 col on mobile, 2 on sm/md, 3 on lg */}
//         <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="group flex flex-col items-center text-center p-4 bg-white rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//             >
//               {/* Product Image Wrapper */}
//               <div className="relative mb-4 flex h-80 w-full items-center justify-center overflow-hidden rounded-md">
                
//                 {/* Top-Right Sale Tag */}
//                 {product.onSale && (
//                   <span className="absolute top-2 right-2 z-10 bg-emerald-500 text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-sm">
//                     Sale!
//                   </span>
//                 )}

//                 {/* Product Image */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
//                 />

//                 {/* Bottom Hover Icons */}
//                 <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-3 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
//                   <button 
//                     aria-label="Add to Cart"
//                     className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-md transition-colors hover:bg-pink-700 hover:text-white"
//                   >
//                     <ShoppingBag className="h-4 w-4" />
//                   </button>
                  
//                   <button 
//                     aria-label="Add to Wishlist"
//                     className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-md transition-colors hover:bg-pink-700 hover:text-white"
//                   >
//                     <Heart className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Title & Divider */}
//               <div className="w-full max-w-[200px]">
//                 <h3 className="text-sm font-normal text-gray-800">
//                   {product.name}
//                 </h3>
//                 <div className="my-2 border-b border-gray-200" />
//               </div>

//               {/* Price */}
//               {product.price && (
//                 <span className="text-xs font-bold text-gray-900">
//                   {product.price}
//                 </span>
//               )}

//               {/* Star Rating */}
//               {product.rating > 0 && (
//                 <div className="mt-2 flex text-amber-400 text-xs">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i}>
//                       {i < product.rating ? "★" : "☆"}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// 'use client';

// import { useState } from "react";
// import Image from "next/image";
// import { ShoppingBag, Heart } from "lucide-react";
// import Link from "next/link";


// const products = [
//   {
//     id: 1,
//     name: "Burgundy Wine",
//     price: "£20.00",
//     rating: 5,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
//   },
//   {
//     id: 2,
//     name: "Champagne Classic",
//     price: "£15.00",
//     rating: 0,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product3.png",
//   },
//   {
//     id: 3,
//     name: "Chandon Brut",
//     price: null,
//     rating: 4,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product6.png",
//   },
//   {
//     id: 4,
//     name: "Burgundy Wine",
//     price: "£20.00",
//     rating: 5,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
//     onSale: true,
//   },
//   {
//     id: 5,
//     name: "Burgundy Wine",
//     price: "£20.00",
//     rating: 5,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
//   },
//   {
//     id: 6,
//     name: "Burgundy Wine",
//     price: "£20.00",
//     rating: 5,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
//     outOfStock: true, // Out of stock property add ki hai
//   },
//    {
//     id: 6,
//     name: "Burgundy Wine",
//     price: "£20.00",
//     rating: 5,
//     image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
   
//   },
// ];

// export default function ShopPage() {
//   // Pagination State
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // Dynamic Pagination Calculations
//   const totalPages = Math.ceil(products.length / itemsPerPage);
//   const indexOfLastProduct = currentPage * itemsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) {
//       handlePageChange(currentPage - 1);
//     }
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) {
//       handlePageChange(currentPage + 1);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white font-serif text-gray-800">
//       {/* Hero / Banner Header */}
//       <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-stone-100 to-white py-12 md:py-16 text-center">
//         <h1 className="text-2xl font-light tracking-widest text-black md:text-3xl uppercase">
//           Shop
//         </h1>
//        <p className="mt-1 text-xs text-gray-500 tracking-wide">
//   <Link href="/" className="hover:text-black">
//     Home
//   </Link>
//   <span className="mx-1">/</span>
//   <Link href="/shop" className="hover:text-black">
//     Products
//   </Link>
// </p>
//       </div>

//       <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
//         {/* Top Control Bar */}
//         <div className="mb-10 flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
//           <span>
//             Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, products.length)} of {products.length} results
//           </span>
//           <div>
//             <select
//               defaultValue="default"
//               className="border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-600 outline-none focus:border-gray-400"
//             >
//               <option value="default">Default sorting</option>
//               <option value="popularity">Sort by popularity</option>
//               <option value="rating">Sort by average rating</option>
//               <option value="latest">Sort by latest</option>
//               <option value="price-low">Sort by price: low to high</option>
//               <option value="price-high">Sort by price: high to low</option>
//             </select>
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
//           {currentProducts.map((product) => (
//             <div
//               key={product.id}
//               className="group flex flex-col items-center text-center p-4 bg-white rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//             >
//               {/* Product Image Wrapper */}
//               <div className="relative mb-4 flex h-80 w-full items-center justify-center overflow-hidden rounded-md">
                
//                 {/* Top-Right Tags Container */}
//                 <div className="absolute top-2 right-2 z-10 flex flex-col items-end gap-1">
//                   {/* Sale Tag */}
//                   {product.onSale && (
//                     <span className="bg-emerald-500 text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-sm">
//                       Sale!
//                     </span>
//                   )}

//                   {/* Out of Stock Tag */}
//                   {product.outOfStock && (
//                     <span className="bg-red-500 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-sm shadow-sm">
//                       Out of stock
//                     </span>
//                   )}
//                 </div>

//                 {/* Product Image */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className={`h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
//                     product.outOfStock ? 'opacity-60' : ''
//                   }`}
//                 />

//                 {/* Bottom Hover Icons */}
//                 <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-3 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
//                   <button 
//                     disabled={product.outOfStock}
//                     aria-label="Add to Cart"
//                     className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition-colors ${
//                       product.outOfStock 
//                         ? 'bg-gray-400 cursor-not-allowed' 
//                         : 'bg-black hover:bg-pink-700'
//                     }`}
//                   >
//                     <ShoppingBag className="h-4 w-4" />
//                   </button>
                  
//                   <button 
//                     aria-label="Add to Wishlist"
//                     className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-md transition-colors hover:bg-pink-700 hover:text-white"
//                   >
//                     <Heart className="h-4 w-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Title & Divider */}
//               <div className="w-full max-w-[200px]">
//                 <h3 className="text-sm font-normal text-gray-800">
//                   {product.name}
//                 </h3>
//                 <div className="my-2 border-b border-gray-200" />
//               </div>

//               {/* Price */}
//               {product.price && (
//                 <span className="text-xs font-bold text-gray-900">
//                   {product.price}
//                 </span>
//               )}

//               {/* Star Rating */}
//               {product.rating > 0 && (
//                 <div className="mt-2 flex text-amber-400 text-xs">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i}>
//                       {i < product.rating ? "★" : "☆"}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Pagination Section */}
//         <div className="mt-14 flex items-center justify-center space-x-2 font-serif">
//           {/* Previous (Back) Button */}
//           {currentPage > 1 && (
//             <button
//               onClick={handlePrev}
//               className="h-10 px-4 border border-black bg-white text-black font-bold text-xs tracking-wider flex items-center justify-center hover:bg-gray-100 uppercase transition-colors duration-200"
//             >
//               « PREV
//             </button>
//           )}

//           {/* Page Numbers */}
//           {Array.from({ length: totalPages }, (_, index) => {
//             const page = index + 1;
//             const isActive = currentPage === page;

//             return (
//               <button
//                 key={page}
//                 onClick={() => handlePageChange(page)}
//                 className={`w-10 h-10 border border-black flex items-center justify-center font-bold text-sm transition-colors duration-200 ${
//                   isActive
//                     ? 'bg-[#a34351] text-white border-[#a34351]'
//                     : 'bg-white text-black hover:bg-gray-100'
//                 }`}
//               >
//                 {page}
//               </button>
//             );
//           })}

//           {/* Next Button */}
//           {currentPage < totalPages && (
//             <button
//               onClick={handleNext}
//               className="h-10 px-4 border border-black bg-white text-black font-bold text-xs tracking-wider flex items-center justify-center hover:bg-gray-100 uppercase transition-colors duration-200"
//             >
//               NEXT »
//             </button>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }



'use client';

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Heart, Pin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Burgundy Wine",
    price: "£20.00",
    rating: 5,
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
  },
  {
    id: 2,
    name: "Champagne Classic",
    price: "£15.00",
    rating: 0,
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product3.png",
  },
  {
    id: 3,
    name: "Chandon Brut",
    price: null,
    rating: 4,
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product6.png",
  },
  {
    id: 4,
    name: "Burgundy Wine",
    price: "£20.00",
    rating: 5,
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
    onSale: true,
  },
  {
    id: 5,
    name: "Burgundy Wine",
    price: "£20.00",
    rating: 5,
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
  },
  {
    id: 6,
    name: "Burgundy Wine",
    price: "£20.00",
    rating: 5,
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
    outOfStock: true,
  },
  {
    id: 7, // Fixed Duplicate ID
    name: "Perignon Champagne 2000",
    price: "£20.00",
    rating: 5,
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
    isFeatured: true, // Featured tag for ID 7
  },
    {
    id: 8,
    name: "Burgundy Wine",
    price: "£20.00",
    rating: 5,
    image: "https://dtwine.wpenginepowered.com/wp-content/uploads/2013/06/product2-500x500.png",
  },
];
//==================== Navber start ======================
const countries = [
    { id: "01", name: "ITALY", link: "/italy", flag: "https://flagcdn.com/w40/it.png" },
    { id: "02", name: "FRANCE", link: "/france", flag: "https://flagcdn.com/w40/fr.png" },
    { id: "03", name: "ARGENTINA", link: "/argentina", flag: "https://flagcdn.com/w40/ar.png" },
    { id: "04", name: "CALIFORNIA", link: "/california", flag: "https://flagcdn.com/w40/us.png" },
    { id: "05", name: "URUGUAY", link: "/uruguay", flag: "https://flagcdn.com/w40/uy.png" },
    { id: "06", name: "SPAIN", link: "/spain", flag: "https://flagcdn.com/w40/es.png" },
    { id: "07", name: "PORTUGAL", link: "/portugal", flag: "https://flagcdn.com/w40/pt.png" },
  ];

  const loopCountries = [...countries, ...countries];

// =============== Navber end  ==========================
export default function ShopPage() {
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Dynamic Pagination Calculations
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const handlePrev = () => {
  //   if (currentPage > 1) {
  //     handlePageChange(currentPage - 1);
  //   }
  // };

  // const handleNext = () => {
  //   if (currentPage < totalPages) {
  //     handlePageChange(currentPage + 1);
  //   }
  // };
  

  const countries = [
  {
    name: "Italy",
    count: 20,
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85",
    route: "/italy",
  },
  {
    name: "France",
    count: 4,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    route: "/places/france",
  },
  {
    name: "Argentina",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=85",
    route: "/places/argentina",
  },
  {
    name: "California",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=85",
    route: "/california",
  },
  {
    name: "Ohio",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    route: "/Ohio",
  },
  {
    name: "Spain",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=85",
    route: "/places/spain",
  },
  {
    name: "Portugal",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85",
    route: "/places/portugal",
  },
    {
    name: "Oregon",
    count: 1,
    image:
      "https://cdn.bfldr.com/UTM69Z3S/at/4ng7jq2wc332t4r4hjjrk8w/dan-meyers-EYnLjmjCViM-unsplash-LOWRES.jpg?auto=webp&enable=upscale&fit=cover&format=pjpg&height=640&quality=60&width=960",
    route: "/Oregon",
  },
];

  return (
    <div className="min-h-screen bg-white font-serif text-gray-800">

  <section className="w-full bg-white py-8 overflow-hidden">
      <div className="overflow-hidden">
        <motion.div
          className="flex items-center gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopCountries.map((country, index) => (
            <Link
              key={index}
              href={country.link}
              className="flex items-center gap-3 shrink-0 group"
            >
              {/* Number Circle */}
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#8b263e] flex items-center justify-center transition-all duration-300 group-hover:bg-[#8b263e]">
                <span className="text-[10px] md:text-xs font-semibold text-[#8b263e] group-hover:text-white">
                  {country.id}
                </span>
              </div>

              {/* Country Flag */}
              <div className="relative w-6 h-4 sm:w-7 sm:h-5 overflow-hidden rounded-sm shadow-sm flex-shrink-0 border border-gray-100">
                <Image
                  src={country.flag}
                  alt={`${country.name} flag`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Country Name */}
              <h2 className="text-sm sm:text-base font-philosopher md:text-lg font-bold uppercase tracking-[0.15em] text-black transition-all duration-300 group-hover:text-[#8b263e]">
                {country.name}
              </h2>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
      {/* Hero / Banner Header */}

        <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-xl md:text-4xl font-great-vibes">
            Explore The World
          </p>

          <h2 className="text-3xl font-philosopher sm:text-4xl md:text-5xl">
            Famous Places
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-old-standard sm:text-base">
            Discover famous places around the world.
          </p>
        </div>

        {/* ================= COUNTRY GRID ================= */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {countries.map((country) => (
            <Link
              key={country.name}
              href={country.route}
              className="
                group
                relative
                block
                h-64
                overflow-hidden
                rounded-2xl
                shadow-lg
                sm:h-72
                md:h-80
                lg:h-96
              "
            >

              {/* ================= BACKGROUND IMAGE ================= */}
              <img
                src={country.image}
                alt={`${country.name} famous place`}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* ================= DARK OVERLAY ================= */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/25
                  transition-all
                  duration-500
                  group-hover:bg-black/50
                "
              />

              {/* ================= BOTTOM GRADIENT ================= */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-1/2
                  bg-gradient-to-t
                  from-black/85
                  via-black/30
                  to-transparent
                "
              />

              {/* ================= CONTENT ================= */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7 md:p-8">

                <div className="flex items-center justify-between gap-4">

                  {/* Country Name */}
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-white
                      drop-shadow-lg
                      sm:text-3xl
                      md:text-4xl
                    "
                  >
                    {country.name}
                  </h3>

                  {/* Count */}
                  <span
                    className="
                      flex
                      h-10
                      min-w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white
                      px-3
                      text-sm
                      font-bold
                      text-gray-900
                      shadow-xl
                    "
                  >
                    {country.count}
                  </span>

                </div>

                {/* Hover Line */}
                <div
                  className="
                    mt-3
                    h-1
                    w-8
                    rounded-full
                    bg-white
                    transition-all
                    duration-500
                    group-hover:w-16
                  "
                />

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>

   
    </div>
  );
}
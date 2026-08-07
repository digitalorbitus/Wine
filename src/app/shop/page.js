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

  const handlePrev = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white font-serif text-gray-800">
      {/* Hero / Banner Header */}
      <div className="relative flex flex-col items-center justify-center bg-gradient-to-b from-stone-100 to-white py-12 md:py-16 text-center">
        <h1 className="text-2xl font-light tracking-widest text-black md:text-3xl uppercase">
          Shop
        </h1>
        <p className="mt-1 text-xs text-gray-500 tracking-wide">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span className="mx-1">/</span>
          <Link href="/shop" className="hover:text-black">
            Products
          </Link>
        </p>
      </div>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Top Control Bar */}
        <div className="mb-10 flex flex-col items-center justify-between gap-4 text-xs text-gray-500 sm:flex-row">
          <span>
            Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, products.length)} of {products.length} results
          </span>
          <div>
            <select
              defaultValue="default"
              className="border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-600 outline-none focus:border-gray-400"
            >
              <option value="default">Default sorting</option>
              <option value="popularity">Sort by popularity</option>
              <option value="rating">Sort by average rating</option>
              <option value="latest">Sort by latest</option>
              <option value="price-low">Sort by price: low to high</option>
              <option value="price-high">Sort by price: high to low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col items-center text-center p-4 bg-white rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Product Image Wrapper */}
              <div className="relative mb-4 flex h-80 w-full items-center justify-center overflow-hidden rounded-md border border-gray-100">
                
                {/* Top-Left Featured Pin Tag */}
                {product.isFeatured && (
                  <>
                    {/* Without Hover: Only Pin Icon */}
                    <div className="absolute top-2 left-2 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-black text-white shadow-md group-hover:hidden transition-all duration-200">
                      <Pin className="h-3.5 w-3.5 fill-white" />
                    </div>

                    {/* On Hover: Full Banner with Arrow Tail */}
                    <div className="absolute top-2 left-0 z-20 hidden group-hover:flex items-center bg-black text-white px-3 py-1 text-xs font-semibold tracking-wider">
                      <span>Featured</span>
                      <Pin className="ml-1.5 h-3.5 w-3.5 fill-white" />
                      {/* Ribbon Tail (V-notch cut) */}
                      <div 
                        className="absolute right-[-8px] top-0 h-full w-2 bg-black"
                        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 50%)' }}
                      />
                    </div>
                  </>
                )}

                {/* Top-Right Tags Container (Sale / Out of Stock) */}
                <div className="absolute top-2 right-2 z-10 flex flex-col items-end gap-1">
                  {/* Sale Tag */}
                  {product.onSale && (
                    <span className="bg-emerald-500 text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-sm shadow-sm">
                      Sale!
                    </span>
                  )}

                  {/* Out of Stock Tag */}
                  {product.outOfStock && (
                    <span className="bg-red-500 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-1 rounded-sm shadow-sm">
                      Out of stock
                    </span>
                  )}
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className={`h-full object-contain transition-transform duration-300 group-hover:scale-105 ${
                    product.outOfStock ? 'opacity-60' : ''
                  }`}
                />

                {/* Bottom Hover Icons */}
                <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-3 opacity-0 transition-all duration-300 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
                  <button 
                    disabled={product.outOfStock}
                    aria-label="Add to Cart"
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md transition-colors ${
                      product.outOfStock 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-black hover:bg-[#a34351]'
                    }`}
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                  
                  <button 
                    aria-label="Add to Wishlist"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-md transition-colors hover:bg-[#a34351] hover:text-white"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Title & Divider */}
              <div className="w-full max-w-[200px]">
                <h3 className="text-sm font-normal text-gray-800">
                  {product.name}
                </h3>
                <div className="my-2 border-b border-gray-200" />
              </div>

              {/* Price */}
              {product.price && (
                <span className="text-xs font-bold text-gray-900">
                  {product.price}
                </span>
              )}

              {/* Star Rating */}
              {product.rating > 0 && (
                <div className="mt-2 flex text-amber-400 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < product.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="mt-14 flex items-center justify-center space-x-2 font-serif">
          {/* Previous (Back) Button */}
          {currentPage > 1 && (
            <button
              onClick={handlePrev}
              className="h-10 px-4 border border-black bg-white text-black font-bold text-xs tracking-wider flex items-center justify-center hover:bg-gray-100 uppercase transition-colors duration-200"
            >
              « PREV
            </button>
          )}

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;
            const isActive = currentPage === page;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 border border-black flex items-center justify-center font-bold text-sm transition-colors duration-200 ${
                  isActive
                    ? 'bg-[#a34351] text-white border-[#a34351]'
                    : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            );
          })}

          {/* Next Button */}
          {currentPage < totalPages && (
            <button
              onClick={handleNext}
              className="h-10 px-4 border border-black bg-white text-black font-bold text-xs tracking-wider flex items-center justify-center hover:bg-gray-100 uppercase transition-colors duration-200"
            >
              NEXT »
            </button>
          )}
        </div>
      </main>
    </div>
  );
}
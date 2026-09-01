
// "use client";

// import Link from "next/link";
// import { Phone, ShoppingCart } from "lucide-react";

// export default function Header() {
//   return (
//     <header className="w-full bg-[#faf8f7]">
//       <div className="max-w-7xl mx-auto px-4 lg:px-8">

//         <div className="flex flex-col lg:flex-row items-center justify-between py-8">

//           {/* Left */}
//           <div className="flex items-center gap-4 w-full lg:w-1/3 justify-center lg:justify-start mb-6 lg:mb-0">

//             <div className="w-14 h-14 rounded-full border border-black flex items-center justify-center">
//               <Phone size={24} />
//             </div>

//             <div>
//               <h3 className="text-[#9d3030] text-xl tracking-wide">
//                 +123 456 7890 08
//               </h3>

//               <p className="text-[#9d3030] text-sm">
//                 info@winery.com
//               </p>
//             </div>

//           </div>

//           {/* Center Logo */}

//           <div className="flex justify-center w-full lg:w-1/3 mb-6 lg:mb-0">

//             <Link href="/">
//               <img
//                 src="https://dtwine.wpenginepowered.com/wp-content/themes/winemaker/images/logo.png"
//                 alt="logo"
//                 className="w-56 object-contain"
//               />
//             </Link>

//           </div>

//           {/* Right */}

//           {/* <div className="flex justify-center lg:justify-end items-center w-full lg:w-1/3">

//             <div className="relative flex items-center gap-2 cursor-pointer">

//               <div className="relative">

//                 <ShoppingCart size={30} />

//                 <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   0
//                 </span>

//               </div>

//               <span className="text-[#9d3030] text-xl">
//                 £0.00
//               </span>

//             </div>

//           </div> */}

//         </div>

//       </div>
//     </header>
//   );
// }














'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WineLoader from "../../component/WineLoader";

// ==================== NAVBAR COUNTRIES ====================

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
    link: "/Portugal",
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

// Duplicate array for infinite slider
const loopCountries = [...navbarCountries, ...navbarCountries];

// ==================== FAMOUS PLACES ====================

const famousPlaces = [
  {
    name: "Italy",
    // count: ,
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=85",
    route: "/italy",
  },
  {
    name: "France",
    // count: 97,
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
    route: "/france",
  },
  {
    name: "Argentina",
    // count: 14,
    image:
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=85",
    route: "/Argentina",
  },
  {
    name: "California",
    // count: 13,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=85",
    route: "/california",
  },
  {
    name: "Ohio",
    // count: 12,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    route: "/Ohio",
  },
  {
    name: "Spain",
    // count: 21,
    image:
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=85",
    route: "/spain",
  },
  {
    name: "Portugal",
    // count: 8,
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1200&q=85",
    route: "/Portugal",
  },
  {
    name: "Oregon",
    // count: 4,
    image:
      "https://cdn.bfldr.com/UTM69Z3S/at/4ng7jq2wc332t4r4hjjrk8w/dan-meyers-EYnLjmjCViM-unsplash-LOWRES.jpg?auto=webp&enable=upscale&fit=cover&format=pjpg&height=640&quality=60&width=960",
    route: "/Oregon",
  },
  {
    name: "Germany",
    // count: 1,
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=85",
    route: "/Germany",
  },
  {
    name: "New Zealand",
    // count: 11,
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1600&q=85",
    route: "/New-Zealand",
  },
];


 
// ==================== SHOP PAGE ====================

export default function ShopPage() {
    const [loading, setLoading] = useState(true);

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
    <main className="min-h-screen bg-white font-serif text-gray-800">

      {/* =========================================================
          COUNTRY NAVIGATION SLIDER
      ========================================================= */}

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


      {/* =========================================================
          HERO / HEADER
      ========================================================= */}

      <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 lg:px-12">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-10 text-center">

            <p
              className="
                mb-2
                text-xl
               font-philosopher

                md:text-4xl
              "
            >
              DISCOVER THE ORIGINS
            </p>

            <h2
              className="
                font-philosopher
                text-3xl

                sm:text-4xl
                md:text-5xl
              "
            >
              Explore Our Wine Regions
            </h2>

            <p
              className="
                mx-auto
                mt-3
                max-w-2xl
                text-sm
                font-old-standard

                sm:text-base
              "
            >
             Browse our selection by country and discover wines from the regions and wineries behind them.
            </p>

          </div>


          {/* =====================================================
              COUNTRY GRID
          ===================================================== */}

          <div
            className="
              grid
              grid-cols-1
              gap-5

              md:grid-cols-3
            "
          >

            {famousPlaces.map((country) => (

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

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    p-5

                    sm:p-7
                    md:p-8
                  "
                >

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

    </main>
  );
}
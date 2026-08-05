"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

export default function AboutUs() {
  return (
    <section className="relative w-full bg-white py-10 overflow-hidden">
      {/* Header */}
      <motion.div
        className="text-center mb-10 md:mb-14"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Bada Heading Font */}
        <h2 className="text-4xl sm:text-5xl font-serif text-zinc-900 tracking-wider font-bold">
          ABOUT US
        </h2>

        {/* Bada Breadcrumb Font */}
        <p className="text-sm sm:text-base text-gray-400 font-serif mt-2">
          <span className="cursor-pointer hover:underline">Home</span> /{" "}
          <span className="text-gray-600">About Us</span>
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center gap-8 relative">
        {/* Left Image */}
        <motion.div
          className="lg:col-span-5 relative w-full h-[320px] sm:h-[420px] lg:h-[480px]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://dtwine.wpenginepowered.com/wp-content/uploads/2017/06/bg-1.jpg"
            alt="Wine Barrel and Grapes"
            fill
            className="object-cover object-left"
            sizes="(max-width: 1024px) 100vw, 40vw"
            priority
          />

          {/* Fade Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent lg:hidden" />
        </motion.div>

        {/* Right Features */}
        <motion.div
          className="lg:col-span-7 p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-8"
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
              {/* Feature Icon/Image */}
              <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300 pt-1">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div>
                {/* Bada Title Font */}
                <h3 className="text-base sm:text-lg font-serif font-bold tracking-wide text-zinc-900 uppercase mb-2">
                  {feature.title}
                </h3>

                {/* Bada Paragraph Font */}
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
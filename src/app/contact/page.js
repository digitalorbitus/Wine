



// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import WineLoader from "../../component/WineLoader";

// // =========================
// // SVG Icons
// // =========================

// const PhoneIcon = () => (
//   <svg
//     className="w-5 h-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={1.5}
//       d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//     />
//   </svg>
// );

// const CalendarIcon = () => (
//   <svg
//     className="w-5 h-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={1.5}
//       d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//     />
//   </svg>
// );

// const CheckIcon = () => (
//   <svg
//     className="w-4 h-4 text-[#E2C792]"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M5 13l4 4L19 7"
//     />
//   </svg>
// );

// // =========================
// // Motion Variants
// // =========================

// const fadeInUp = {
//   hidden: {
//     opacity: 0,
//     y: 30,
//   },

//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       ease: [0.215, 0.61, 0.355, 1],
//     },
//   },
// };

// const staggerContainer = {
//   hidden: {
//     opacity: 0,
//   },

//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// // =========================
// // Options
// // =========================

// const interestOptions = [
//   "Italian",
//   "French",
//   "Argentine",
//   "California",
//   "Oregon",
//   "Spanish",
//   "Portuguese",
//   "Curated Cases",
//   "Other",
// ];

// const businessTypes = [
//   "Restaurant",
//   "Hotel & Hospitality",
//   "Wine Retailer",
//   "Bar",
//   "Catering & Events",
//   "Other",
// ];

// // =========================
// // Contact Us Component
// // =========================

// export default function ContactUs() {
//   const [formData, setFormData] = useState({
//     businessName: "",
//     contactName: "",
//     email: "",
//     phone: "",
//     businessType: "",
//     interests: [],
//     message: "",
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [sending, setSending] = useState(false);
//   const [error, setError] = useState("");

//   // =========================
//   // Interest Toggle
//   // =========================

//   const toggleInterest = (option) => {
//     setFormData((prev) => {
//       const exists = prev.interests.includes(option);

//       return {
//         ...prev,

//         interests: exists
//           ? prev.interests.filter((item) => item !== option)
//           : [...prev.interests, option],
//       };
//     });
//   };

//   // =========================
//   // Submit Form
//   // =========================

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setSending(true);
//     setError("");

//     try {
//       const response = await fetch("/api/send-email", {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(
//           data.message || "Something went wrong. Please try again."
//         );
//       }

//       // Success
//       setSubmitted(true);

//       // Reset form
//       setFormData({
//         businessName: "",
//         contactName: "",
//         email: "",
//         phone: "",
//         businessType: "",
//         interests: [],
//         message: "",
//       });
//     } catch (err) {
//       console.error("Form submit error:", err);

//       setError(
//         err.message || "Failed to send your request. Please try again."
//       );
//     } finally {
//       setSending(false);
//     }
//   };

//   // =========================
//   // Wine Loader
//   // =========================

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <WineLoader />;
//   }

//   // =========================
//   // UI
//   // =========================

//   return (
//     <main className="bg-[#120D0B] text-[#F3EFE6] min-h-screen font-sans selection:bg-[#8C2332] selection:text-white overflow-x-hidden">

//       {/* ================= HERO SECTION ================= */}

//       <section className="relative py-20 sm:py-28 px-4 sm:px-8 lg:px-16 overflow-hidden">

//         {/* Glow Effects */}

//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8C2332]/20 rounded-full blur-[140px] pointer-events-none" />

//         <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />

//         <div className="relative z-10 max-w-[1200px] mx-auto text-center">

//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={fadeInUp}
//           >

//             <span className="inline-block py-1.5 px-4 rounded-full border border-[#C5A059]/30 bg-[#C5A059]/5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A059] mb-6">
//               05. Contact Us
//             </span>

//             <h1 className="font-philosopher text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
//               Let&apos;s Talk Wine
//             </h1>

//             <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#A39990] max-w-2xl mx-auto leading-relaxed">
//               Interested in our portfolio? Whether you&apos;re looking for
//               specific wines, exploring new selections, or interested in
//               wholesale pricing, our team is ready to help.
//             </p>

//           </motion.div>

//         </div>

//       </section>

//       {/* ================= FORM & BOOK CALL GRID ================= */}

//       <section className="pb-24 px-4 sm:px-8 lg:px-16">

//         <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

//           {/* ================= LEFT FORM ================= */}

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeInUp}
//             className="lg:col-span-8 bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-6 sm:p-10 lg:p-12 rounded-3xl backdrop-blur-xl shadow-2xl relative"
//           >

//             <div className="mb-8">

//               <h2 className="font-philosopher text-2xl sm:text-3xl font-bold text-white">
//                 Request Wholesale Information
//               </h2>

//               <p className="mt-2 text-xs sm:text-sm text-[#A39990]">
//                 Complete the form below and tell us a little about your
//                 business and what you&apos;re looking for.
//               </p>

//             </div>

//             {/* ================= SUCCESS MESSAGE ================= */}

//             {submitted ? (

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.95,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 className="py-16 text-center"
//               >

//                 <div className="w-16 h-16 bg-[#C5A059]/20 border border-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A059]">
//                   <CheckIcon />
//                 </div>

//                 <h3 className="font-philosopher text-2xl font-bold text-white">
//                   Thank You for Reaching Out
//                 </h3>

//                 <p className="mt-2 text-sm text-[#A39990] max-w-md mx-auto">
//                   We have received your wholesale inquiry. A member of our
//                   team will review your business needs and contact you shortly.
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => {
//                     setSubmitted(false);
//                     setError("");
//                   }}
//                   className="mt-8 px-6 py-3 border border-[#C5A059] text-[#C5A059] rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#120D0B] transition-all"
//                 >
//                   Submit Another Request
//                 </button>

//               </motion.div>

//             ) : (

//               <form
//                 onSubmit={handleSubmit}
//                 className="space-y-6"
//               >

//                 {/* ================= ERROR ================= */}

//                 {error && (
//                   <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm">
//                     {error}
//                   </div>
//                 )}

//                 {/* ================= BUSINESS NAME & CONTACT NAME ================= */}

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//                   {/* Business Name */}

//                   <div>

//                     <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
//                       Business Name *
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="Enter Business Name"
//                       value={formData.businessName}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           businessName: e.target.value,
//                         })
//                       }
//                       className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all"
//                     />

//                   </div>

//                   {/* Contact Name */}

//                   <div>

//                     <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
//                       Contact Name *
//                     </label>

//                     <input
//                       type="text"
//                       required
//                       placeholder="Enter Your Name"
//                       value={formData.contactName}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           contactName: e.target.value,
//                         })
//                       }
//                       className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all"
//                     />

//                   </div>

//                 </div>

//                 {/* ================= EMAIL & PHONE ================= */}

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

//                   {/* Email */}

//                   <div>

//                     <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
//                       Email Address *
//                     </label>

//                     <input
//                       type="email"
//                       required
//                       placeholder="Enter Email Address"
//                       value={formData.email}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           email: e.target.value,
//                         })
//                       }
//                       className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all"
//                     />

//                   </div>

//                   {/* Phone */}

//                   <div>

//                     <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
//                       Phone Number *
//                     </label>

//                     <input
//                       type="tel"
//                       required
//                       placeholder="Enter Phone Number"
//                       value={formData.phone}
//                       onChange={(e) =>
//                         setFormData({
//                           ...formData,
//                           phone: e.target.value,
//                         })
//                       }
//                       className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all"
//                     />

//                   </div>

//                 </div>

//                 {/* ================= BUSINESS TYPE ================= */}

//                 <div>

//                   <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
//                     Business Type *
//                   </label>

//                   <select
//                     required
//                     value={formData.businessType}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         businessType: e.target.value,
//                       })
//                     }
//                     className="w-full bg-[#1A1310] border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition-all"
//                   >

//                     <option
//                       value=""
//                       disabled
//                     >
//                       Select Business Type
//                     </option>

//                     {businessTypes.map((type) => (
//                       <option
//                         key={type}
//                         value={type}
//                         className="bg-[#120D0B] text-white"
//                       >
//                         {type}
//                       </option>
//                     ))}

//                   </select>

//                 </div>

//                 {/* ================= INTERESTS ================= */}

//                 <div>

//                   <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-3">
//                     What are you interested in?
//                   </label>

//                   <div className="flex flex-wrap gap-2.5">

//                     {interestOptions.map((option) => {

//                       const isSelected =
//                         formData.interests.includes(option);

//                       return (
//                         <button
//                           type="button"
//                           key={option}
//                           onClick={() => toggleInterest(option)}
//                           className={`px-4 py-2 rounded-lg text-xs font-medium transition-all border ${
//                             isSelected
//                               ? "bg-[#C5A059] border-[#C5A059] text-[#120D0B] font-bold shadow-md"
//                               : "bg-white/5 border-white/10 text-[#A39990] hover:border-white/30 hover:text-white"
//                           }`}
//                         >
//                           {option}
//                         </button>
//                       );

//                     })}

//                   </div>

//                 </div>

//                 {/* ================= MESSAGE ================= */}

//                 <div>

//                   <label className="block text-xs font-semibold uppercase tracking-wider text-[#D4C3B5] mb-2">
//                     Message
//                   </label>

//                   <textarea
//                     rows={4}
//                     placeholder="Tell us what you're looking for..."
//                     value={formData.message}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         message: e.target.value,
//                       })
//                     }
//                     className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder-[#6E655F] focus:outline-none focus:border-[#C5A059] focus:bg-white/10 transition-all resize-none"
//                   />

//                 </div>

//                 {/* ================= SUBMIT BUTTON ================= */}

//                 <motion.button
//                   whileHover={{
//                     scale: sending ? 1 : 1.01,
//                   }}
//                   whileTap={{
//                     scale: sending ? 1 : 0.98,
//                   }}
//                   type="submit"
//                   disabled={sending}
//                   className={`w-full bg-gradient-to-r from-[#C5A059] via-[#D8B674] to-[#997334] text-[#120D0B] font-bold text-xs sm:text-sm uppercase tracking-wider py-4 rounded-xl shadow-xl transition-all ${
//                     sending
//                       ? "opacity-60 cursor-not-allowed"
//                       : "hover:brightness-110"
//                   }`}
//                 >

//                   {sending ? (
//                     <span className="flex items-center justify-center gap-3">

//                       <span className="w-4 h-4 border-2 cursor-pointer border-[#120D0B]/30 border-t-[#120D0B] rounded-full animate-spin" />

//                       Sending Request...

//                     </span >
//                   ) : (
//                     "Request Wholesale Pricing"
//                   )}

//                 </motion.button>

//               </form>

//             )}

//           </motion.div>

//           {/* ================= RIGHT SIDE ================= */}

//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={staggerContainer}
//             className="lg:col-span-4 space-y-8"
//           >

//             {/* ================= BOOK A CALL ================= */}

//             <div className="bg-gradient-to-b from-[#8C2332]/30 via-[#211215] to-[#120D0B] border border-[#8C2332]/50 p-8 rounded-3xl backdrop-blur-md relative overflow-hidden shadow-2xl">

//               <div className="p-3.5 rounded-xl bg-[#8C2332] text-white w-fit mb-6">
//                 <CalendarIcon />
//               </div>

//               <h3 className="font-serif text-2xl font-bold text-white">
//                 Prefer to Speak With Us?
//               </h3>

//               <p className="mt-3 text-xs sm:text-sm text-[#D4C3B5] leading-relaxed">
//                 If you&apos;d rather discuss your needs directly, schedule a
//                 conversation with our team. We&apos;ll be happy to discuss your
//                 business, your wine program, and the selections that may be
//                 right for you.
//               </p>

//               <div className="mt-8 pt-6 border-t border-white/10">

//                 <motion.div
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                 >

//                   <Link
//                     href="/contact"
//                     className="flex items-center justify-center gap-3 w-full border border-[#C5A059] bg-[#C5A059]/10 text-[#E2C792] hover:bg-[#C5A059] hover:text-[#120D0B] font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300"
//                   >
//                     <PhoneIcon />
//                     Book A Call
//                   </Link>

//                 </motion.div>

//               </div>

//             </div>

//             {/* ================= DIRECT SUPPORT ================= */}

//             <div className="bg-white/[0.03] border border-white/10 p-8 rounded-3xl">

//               <h4 className="font-serif text-lg font-bold text-white mb-2">
//                 Direct Wine Desk
//               </h4>

//               <p className="text-xs text-[#A39990] leading-relaxed mb-4">
//                 Our portfolio managers are available Monday – Friday to answer
//                 questions regarding regional selections and current vintages.
//               </p>

//               <div className="text-xs font-mono text-[#C5A059]">
//                 Mon - Fri: 9:00 AM – 6:00 PM EST
//               </div>

//             </div>

//           </motion.div>

//         </div>

//       </section>

//     </main>
//   );
// }















"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WineLoader from "../../component/WineLoader";

// =========================
// SVG Icons
// =========================

const PhoneIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const CalendarIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

// =========================
// Motion Variants
// =========================

const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const staggerContainer = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.1,
    },
  },
};

// =========================
// Options
// =========================

const interestOptions = [
  "Italian",
  "French",
  "Argentine",
  "California",
  "Oregon",
  "Spanish",
  "Portuguese",
  "Curated Cases",
  "Other",
];

const businessTypes = [
  "Restaurant",
  "Hotel & Hospitality",
  "Wine Retailer",
  "Bar",
  "Catering & Events",
  "Other",
];

// =========================
// Time Options
// =========================

const callTimeOptions = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
];

// =========================
// Contact Us Component
// =========================

export default function ContactUs() {
  // =========================
  // Wholesale Form
  // =========================

  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    interests: [],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  // =========================
  // Book A Call
  // =========================

  const [callName, setCallName] = useState("");
  const [callPhone, setCallPhone] = useState("");
  const [callEmail, setCallEmail] = useState("");
  const [callDate, setCallDate] = useState("");
  const [callTime, setCallTime] = useState("");
  const [callBooked, setCallBooked] = useState(false);

  // =========================
  // Interest Toggle
  // =========================

  const toggleInterest = (option) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(option);

      return {
        ...prev,

        interests: exists
          ? prev.interests.filter((item) => item !== option)
          : [...prev.interests, option],
      };
    });
  };

  // =========================
  // Submit Wholesale Form
  // =========================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);

      setFormData({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        businessType: "",
        interests: [],
        message: "",
      });
    } catch (err) {
      console.error("Form submit error:", err);

      setError(
        err.message || "Failed to send your request. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  // =========================
  // Minimum Date
  // =========================

  const getTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  // =========================
  // Format Selected Date
  // =========================

  const formatCallDate = (date) => {
    if (!date) return "";

    return new Date(`${date}T12:00:00`).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // =========================
  // Book Call
  // =========================

  const handleBookCall = () => {
    if (
      !callName.trim() ||
      !callPhone.trim() ||
      !callEmail.trim() ||
      !callDate ||
      !callTime
    ) {
      return;
    }

    const bookingData = {
      name: callName,
      phone: callPhone,
      email: callEmail,
      date: callDate,
      formattedDate: formatCallDate(callDate),
      time: callTime,
    };

    console.log("CALL BOOKING:", bookingData);

    setCallBooked(true);
  };

  // =========================
  // Wine Loader
  // =========================

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  // =========================
  // Loader
  // =========================

  if (loading) {
    return <WineLoader />;
  }

  // =========================
  // UI
  // =========================

  return (
    <main
      className="
        bg-[#120D0B]
        text-[#F3EFE6]
        min-h-screen
        font-sans
        selection:bg-[#8C2332]
        selection:text-white
        overflow-x-hidden
      "
    >
      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        className="
          relative
          py-20
          sm:py-28
          px-4
          sm:px-8
          lg:px-16
          overflow-hidden
        "
      >
        {/* Glow Effects */}

        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2
            w-[600px]
            h-[400px]
            bg-[#8C2332]/20
            rounded-full
            blur-[140px]
            pointer-events-none
          "
        />

        <div
          className="
            absolute
            bottom-10
            right-10
            w-[350px]
            h-[350px]
            bg-[#C5A059]/10
            rounded-full
            blur-[120px]
            pointer-events-none
          "
        />

        <div
          className="
            relative
            z-10
            max-w-[1200px]
            mx-auto
            text-center
          "
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span
              className="
                inline-block
                py-1.5
                px-4
                rounded-full
                border
                border-[#C5A059]/30
                bg-[#C5A059]/5
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-[#C5A059]
                mb-6
              "
            >
              05. Contact Us
            </span>

            <h1
              className="
                font-philosopher
                text-4xl
                sm:text-6xl
                lg:text-7xl
                font-extrabold
                text-white
                tracking-tight
                leading-tight
              "
            >
              Let&apos;s Talk Wine
            </h1>

            <p
              className="
                mt-6
                text-base
                sm:text-lg
                lg:text-xl
                text-[#A39990]
                max-w-2xl
                mx-auto
                leading-relaxed
              "
            >
              Interested in our portfolio? Whether you&apos;re looking for
              specific wines, exploring new selections, or interested in
              wholesale pricing, our team is ready to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FORM & BOOK CALL GRID
      ====================================================== */}

      <section
        className="
          pb-24
          px-4
          sm:px-8
          lg:px-16
        "
      >
        <div
          className="
            max-w-[1300px]
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-12
            lg:gap-16
            items-start
          "
        >
          {/* =================================================
              LEFT FORM
          ================================================= */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="
              lg:col-span-8
              bg-gradient-to-b
              from-white/[0.06]
              to-white/[0.02]
              border
              border-white/10
              p-6
              sm:p-10
              lg:p-12
              rounded-3xl
              backdrop-blur-xl
              shadow-2xl
              relative
            "
          >
            <div className="mb-8">
              <h2
                className="
                  font-philosopher
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-white
                "
              >
                Request Wholesale Information
              </h2>

              <p
                className="
                  mt-2
                  text-xs
                  sm:text-sm
                  text-[#A39990]
                "
              >
                Complete the form below and tell us a little about your
                business and what you&apos;re looking for.
              </p>
            </div>

            {/* =================================================
                SUCCESS MESSAGE
            ================================================== */}

            {submitted ? (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                className="py-16 text-center"
              >
                <div
                  className="
                    w-16
                    h-16
                    bg-[#C5A059]/20
                    border
                    border-[#C5A059]
                    rounded-full
                    flex
                    items-center
                    justify-center
                    mx-auto
                    mb-6
                    text-[#C5A059]
                  "
                >
                  <CheckIcon />
                </div>

                <h3
                  className="
                    font-philosopher
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  Thank You for Reaching Out
                </h3>

                <p
                  className="
                    mt-2
                    text-sm
                    text-[#A39990]
                    max-w-md
                    mx-auto
                  "
                >
                  We have received your wholesale inquiry. A member of our
                  team will review your business needs and contact you shortly.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setError("");
                  }}
                  className="
                    mt-8
                    px-6
                    py-3
                    border
                    border-[#C5A059]
                    text-[#C5A059]
                    rounded-xl
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    hover:bg-[#C5A059]
                    hover:text-[#120D0B]
                    transition-all
                  "
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* ERROR */}

                {error && (
                  <div
                    className="
                      bg-red-500/10
                      border
                      border-red-500/30
                      text-red-300
                      px-4
                      py-3
                      rounded-xl
                      text-sm
                    "
                  >
                    {error}
                  </div>
                )}

                {/* BUSINESS NAME & CONTACT NAME */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-6
                  "
                >
                  {/* Business Name */}

                  <div>
                    <label
                      className="
                        block
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#D4C3B5]
                        mb-2
                      "
                    >
                      Business Name *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter Business Name"
                      value={formData.businessName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          businessName: e.target.value,
                        })
                      }
                      className="
                        w-full
                        bg-white/5
                        border
                        border-white/15
                        rounded-xl
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        placeholder-[#6E655F]
                        focus:outline-none
                        focus:border-[#C5A059]
                        focus:bg-white/10
                        transition-all
                      "
                    />
                  </div>

                  {/* Contact Name */}

                  <div>
                    <label
                      className="
                        block
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#D4C3B5]
                        mb-2
                      "
                    >
                      Contact Name *
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="Enter Your Name"
                      value={formData.contactName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactName: e.target.value,
                        })
                      }
                      className="
                        w-full
                        bg-white/5
                        border
                        border-white/15
                        rounded-xl
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        placeholder-[#6E655F]
                        focus:outline-none
                        focus:border-[#C5A059]
                        focus:bg-white/10
                        transition-all
                      "
                    />
                  </div>
                </div>

                {/* EMAIL & PHONE */}

                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-6
                  "
                >
                  {/* Email */}

                  <div>
                    <label
                      className="
                        block
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#D4C3B5]
                        mb-2
                      "
                    >
                      Email Address *
                    </label>

                    <input
                      type="email"
                      required
                      placeholder="Enter Email Address"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          email: e.target.value,
                        })
                      }
                      className="
                        w-full
                        bg-white/5
                        border
                        border-white/15
                        rounded-xl
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        placeholder-[#6E655F]
                        focus:outline-none
                        focus:border-[#C5A059]
                        focus:bg-white/10
                        transition-all
                      "
                    />
                  </div>

                  {/* Phone */}

                  <div>
                    <label
                      className="
                        block
                        text-xs
                        font-semibold
                        uppercase
                        tracking-wider
                        text-[#D4C3B5]
                        mb-2
                      "
                    >
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      required
                      placeholder="Enter Phone Number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="
                        w-full
                        bg-white/5
                        border
                        border-white/15
                        rounded-xl
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        placeholder-[#6E655F]
                        focus:outline-none
                        focus:border-[#C5A059]
                        focus:bg-white/10
                        transition-all
                      "
                    />
                  </div>
                </div>

                {/* BUSINESS TYPE */}

                <div>
                  <label
                    className="
                      block
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#D4C3B5]
                      mb-2
                    "
                  >
                    Business Type *
                  </label>

                  <select
                    required
                    value={formData.businessType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        businessType: e.target.value,
                      })
                    }
                    className="
                      w-full
                      bg-[#1A1310]
                      border
                      border-white/15
                      rounded-xl
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      focus:outline-none
                      focus:border-[#C5A059]
                      transition-all
                    "
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select Business Type
                    </option>

                    {businessTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-[#120D0B] text-white"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* INTERESTS */}

                <div>
                  <label
                    className="
                      block
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#D4C3B5]
                      mb-3
                    "
                  >
                    What are you interested in?
                  </label>

                  <div className="flex flex-wrap gap-2.5">
                    {interestOptions.map((option) => {
                      const isSelected =
                        formData.interests.includes(option);

                      return (
                        <button
                          type="button"
                          key={option}
                          onClick={() => toggleInterest(option)}
                          className={`
                            px-4
                            py-2
                            rounded-lg
                            text-xs
                            font-medium
                            transition-all
                            border

                            ${
                              isSelected
                                ? "bg-[#C5A059] border-[#C5A059] text-[#120D0B] font-bold shadow-md"
                                : "bg-white/5 border-white/10 text-[#A39990] hover:border-white/30 hover:text-white"
                            }
                          `}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    className="
                      block
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[#D4C3B5]
                      mb-2
                    "
                  >
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="
                      w-full
                      bg-white/5
                      border
                      border-white/15
                      rounded-xl
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      placeholder-[#6E655F]
                      focus:outline-none
                      focus:border-[#C5A059]
                      focus:bg-white/10
                      transition-all
                      resize-none
                    "
                  />
                </div>

                {/* SUBMIT BUTTON */}

                <motion.button
                  whileHover={{
                    scale: sending ? 1 : 1.01,
                  }}
                  whileTap={{
                    scale: sending ? 1 : 0.98,
                  }}
                  type="submit"
                  disabled={sending}
                  className={`
                    w-full
                    bg-gradient-to-r
                    from-[#C5A059]
                    via-[#D8B674]
                    to-[#997334]
                    text-[#120D0B]
                    font-bold
                    text-xs
                    sm:text-sm
                    uppercase
                    tracking-wider
                    py-4
                    rounded-xl
                    shadow-xl
                    transition-all

                    ${
                      sending
                        ? "opacity-60 cursor-not-allowed"
                        : "hover:brightness-110"
                    }
                  `}
                >
                  {sending ? (
                    <span
                      className="
                        flex
                        items-center
                        justify-center
                        gap-3
                      "
                    >
                      <span
                        className="
                          w-4
                          h-4
                          border-2
                          border-[#120D0B]/30
                          border-t-[#120D0B]
                          rounded-full
                          animate-spin
                        "
                      />

                      Sending Request...
                    </span>
                  ) : (
                    "Request Wholesale Pricing"
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* =================================================
              RIGHT SIDE
          ================================================== */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="
              lg:col-span-4
              space-y-8
            "
          >
            {/* =================================================
                BOOK A CALL CARD
            ================================================== */}

            <motion.div
              variants={fadeInUp}
              className="
                bg-gradient-to-b
                from-[#8C2332]/30
                via-[#211215]
                to-[#120D0B]
                border
                border-[#8C2332]/50
                p-6
                sm:p-8
                rounded-3xl
                backdrop-blur-md
                relative
                overflow-hidden
                shadow-2xl
              "
            >
              {/* Decorative Glow */}

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-40
                  h-40
                  rounded-full
                  bg-[#C5A059]/10
                  blur-3xl
                  pointer-events-none
                "
              />

              {/* Icon */}

              <div
                className="
                  relative
                  p-3.5
                  rounded-xl
                  bg-[#8C2332]
                  text-white
                  w-fit
                  mb-6
                "
              >
                <CalendarIcon />
              </div>

              {/* Heading */}

              <h3
                className="
                  font-philosopher
                  text-2xl
                  font-bold
                  text-white
                "
              >
                Prefer to Speak With Us?
              </h3>

              {/* Description */}

              <p
                className="
                  mt-3
                  text-xs
                  sm:text-sm
                  text-[#D4C3B5]
                  leading-relaxed
                "
              >
                If you&apos;d rather discuss your needs directly, schedule a
                conversation with our team. Choose your preferred date and
                time between 9:00 AM and 5:00 PM.
              </p>

              {/* =================================================
                  BOOKING SUCCESS
              ================================================== */}

              {callBooked ? (
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  className="
                    mt-7
                    rounded-2xl
                    border
                    border-[#C5A059]/30
                    bg-[#C5A059]/5
                    p-5
                  "
                >
                  {/* Success Icon */}

                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-[#C5A059]/20
                      border
                      border-[#C5A059]
                      flex
                      items-center
                      justify-center
                      mx-auto
                      text-[#C5A059]
                    "
                  >
                    <CheckIcon />
                  </div>

                  <h4
                    className="
                      mt-4
                      text-center
                      font-philosopher
                      text-lg
                      font-bold
                      text-white
                    "
                  >
                    Call Request Selected
                  </h4>

                  <p
                    className="
                      mt-2
                      text-center
                      text-xs
                      text-[#A39990]
                    "
                  >
                    Your preferred time has been selected.
                  </p>

                  {/* Name */}

                  <div
                    className="
                      mt-4
                      rounded-xl
                      bg-black/20
                      border
                      border-white/10
                      p-4
                    "
                  >
                    <p
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.2em]
                        text-[#A39990]
                      "
                    >
                      Name
                    </p>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-[#E2C792]
                      "
                    >
                      {callName}
                    </p>

                    {/* Phone */}

                    <div
                      className="
                        mt-3
                        border-t
                        border-white/10
                        pt-3
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-[#A39990]
                        "
                      >
                        Phone
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-[#E2C792]
                        "
                      >
                        {callPhone}
                      </p>
                    </div>

                    {/* Email */}

                    <div
                      className="
                        mt-3
                        border-t
                        border-white/10
                        pt-3
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-[#A39990]
                        "
                      >
                        Email
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-[#E2C792]
                          break-all
                        "
                      >
                        {callEmail}
                      </p>
                    </div>

                    {/* Date */}

                    <div
                      className="
                        mt-3
                        border-t
                        border-white/10
                        pt-3
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-[#A39990]
                        "
                      >
                        Date
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-[#E2C792]
                        "
                      >
                        {formatCallDate(callDate)}
                      </p>
                    </div>

                    {/* Time */}

                    <div
                      className="
                        mt-3
                        border-t
                        border-white/10
                        pt-3
                      "
                    >
                      <p
                        className="
                          text-[9px]
                          uppercase
                          tracking-[0.2em]
                          text-[#A39990]
                        "
                      >
                        Time
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          font-semibold
                          text-[#E2C792]
                        "
                      >
                        {callTime}
                      </p>
                    </div>
                  </div>

                  {/* Change Selection */}

                  <button
                    type="button"
                    onClick={() => setCallBooked(false)}
                    className="
                      mt-4
                      w-full
                      py-3
                      rounded-xl
                      border
                      border-[#C5A059]/40
                      text-[#C5A059]
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-wider
                      hover:bg-[#C5A059]/10
                      transition-all
                    "
                  >
                    Change Date &amp; Time
                  </button>
                </motion.div>
              ) : (
                <>
                  {/* =================================================
                      CONTACT DETAILS
                  ================================================== */}

                  <div className="mt-7 space-y-4">
                    {/* NAME */}

                    <div>
                      <label
                        className="
                          block
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#D4C3B5]
                          mb-2
                        "
                      >
                        Full Name *
                      </label>

                      <input
                        type="text"
                        required
                        value={callName}
                        onChange={(e) => {
                          setCallName(e.target.value);
                          setCallBooked(false);
                        }}
                        placeholder="Enter your full name"
                        className="
                          w-full
                          bg-[#1A1310]
                          border
                          border-white/15
                          rounded-xl
                          px-4
                          py-3.5
                          text-sm
                          text-white
                          placeholder:text-[#6E655F]
                          focus:outline-none
                          focus:border-[#C5A059]
                          transition-all
                        "
                      />
                    </div>

                    {/* PHONE */}

                    <div>
                      <label
                        className="
                          block
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#D4C3B5]
                          mb-2
                        "
                      >
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        required
                        value={callPhone}
                        onChange={(e) => {
                          setCallPhone(e.target.value);
                          setCallBooked(false);
                        }}
                        placeholder="Enter your phone number"
                        className="
                          w-full
                          bg-[#1A1310]
                          border
                          border-white/15
                          rounded-xl
                          px-4
                          py-3.5
                          text-sm
                          text-white
                          placeholder:text-[#6E655F]
                          focus:outline-none
                          focus:border-[#C5A059]
                          transition-all
                        "
                      />
                    </div>

                    {/* EMAIL */}

                    <div>
                      <label
                        className="
                          block
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-[0.2em]
                          text-[#D4C3B5]
                          mb-2
                        "
                      >
                        Email Address *
                      </label>

                      <input
                        type="email"
                        required
                        value={callEmail}
                        onChange={(e) => {
                          setCallEmail(e.target.value);
                          setCallBooked(false);
                        }}
                        placeholder="Enter your email address"
                        className="
                          w-full
                          bg-[#1A1310]
                          border
                          border-white/15
                          rounded-xl
                          px-4
                          py-3.5
                          text-sm
                          text-white
                          placeholder:text-[#6E655F]
                          focus:outline-none
                          focus:border-[#C5A059]
                          transition-all
                        "
                      />
                    </div>
                  </div>

                  {/* =================================================
                      DATE
                  ================================================== */}

                  <div className="mt-6">
                    <label
                      className="
                        block
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#D4C3B5]
                        mb-2
                      "
                    >
                      Select Date *
                    </label>

                    <input
                      type="date"
                      value={callDate}
                      min={getTodayDate()}
                      onChange={(e) => {
                        setCallDate(e.target.value);
                        setCallBooked(false);
                      }}
                      className="
                        w-full
                        bg-[#1A1310]
                        border
                        border-white/15
                        rounded-xl
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        focus:outline-none
                        focus:border-[#C5A059]
                        transition-all
                        [color-scheme:dark]
                      "
                    />
                  </div>

                  {/* =================================================
                      DAY PREVIEW
                  ================================================== */}

                  {callDate && (
                    <div className="mt-3">
                      <div
                        className="
                          rounded-xl
                          border
                          border-[#C5A059]/20
                          bg-[#C5A059]/5
                          px-4
                          py-3
                        "
                      >
                        <p
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.2em]
                            text-[#A39990]
                          "
                        >
                          Selected Day
                        </p>

                        <p
                          className="
                            mt-1
                            text-sm
                            font-semibold
                            text-[#E2C792]
                          "
                        >
                          {formatCallDate(callDate)}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* =================================================
                      TIME
                  ================================================== */}

                  <div className="mt-5">
                    <label
                      className="
                        block
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.2em]
                        text-[#D4C3B5]
                        mb-2
                      "
                    >
                      Select Time *
                    </label>

                    <select
                      value={callTime}
                      onChange={(e) => {
                        setCallTime(e.target.value);
                        setCallBooked(false);
                      }}
                      className="
                        w-full
                        bg-[#1A1310]
                        border
                        border-white/15
                        rounded-xl
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        focus:outline-none
                        focus:border-[#C5A059]
                        transition-all
                      "
                    >
                      <option
                        value=""
                        disabled
                        className="bg-[#120D0B]"
                      >
                        Select Available Time
                      </option>

                      {callTimeOptions.map((time) => (
                        <option
                          key={time}
                          value={time}
                          className="bg-[#120D0B]"
                        >
                          {time}
                        </option>
                      ))}
                    </select>

                    <p
                      className="
                        mt-2
                        text-[10px]
                        text-[#7F756E]
                      "
                    >
                      Available Monday – Friday, 9:00 AM – 5:00 PM EST.
                    </p>
                  </div>

                  {/* =================================================
                      BOOK BUTTON
                  ================================================== */}

                  <div
                    className="
                      mt-8
                      pt-6
                      border-t
                      border-white/10
                    "
                  >
                    <motion.div
                      whileHover={{
                        scale:
                          callName.trim() &&
                          callPhone.trim() &&
                          callEmail.trim() &&
                          callDate &&
                          callTime
                            ? 1.02
                            : 1,
                      }}
                      whileTap={{
                        scale:
                          callName.trim() &&
                          callPhone.trim() &&
                          callEmail.trim() &&
                          callDate &&
                          callTime
                            ? 0.98
                            : 1,
                      }}
                    >
                      <button
                        type="button"
                        disabled={
                          !callName.trim() ||
                          !callPhone.trim() ||
                          !callEmail.trim() ||
                          !callDate ||
                          !callTime
                        }
                        onClick={handleBookCall}
                        className={`
                          flex
                          items-center
                          justify-center
                          gap-3
                          w-full
                          font-bold
                          text-xs
                          uppercase
                          tracking-wider
                          py-4
                          rounded-xl
                          transition-all
                          duration-300

                          ${
                            callName.trim() &&
                            callPhone.trim() &&
                            callEmail.trim() &&
                            callDate &&
                            callTime
                              ? "border border-[#C5A059] bg-[#C5A059]/10 text-[#E2C792] hover:bg-[#C5A059] hover:text-[#120D0B] cursor-pointer"
                              : "border border-white/10 bg-white/5 text-[#6E655F] cursor-not-allowed"
                          }
                        `}
                      >
                        <PhoneIcon />

                        {callName.trim() &&
                        callPhone.trim() &&
                        callEmail.trim() &&
                        callDate &&
                        callTime
                          ? "Book A Call"
                          : "Complete Your Details"}
                      </button>
                    </motion.div>
                  </div>
                </>
              )}
            </motion.div>

            {/* =================================================
                DIRECT SUPPORT
            ================================================== */}

            <motion.div
              variants={fadeInUp}
              className="
                bg-white/[0.03]
                border
                border-white/10
                p-8
                rounded-3xl
              "
            >
              <h4
                className="
                  font-philosopher
                  text-lg
                  font-bold
                  text-white
                  mb-2
                "
              >
                Direct Wine Desk
              </h4>

              <p
                className="
                  text-xs
                  text-[#A39990]
                  leading-relaxed
                  mb-4
                "
              >
                Our portfolio managers are available Monday – Friday to
                answer questions regarding regional selections and current
                vintages.
              </p>

              <div
                className="
                  text-xs
                  font-mono
                  text-[#C5A059]
                "
              >
                Mon - Fri: 9:00 AM – 6:00 PM EST
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}


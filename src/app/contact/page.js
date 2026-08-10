import React from "react";

export default function ContactInfoSection() {
 // Type 3 Data
  const type3Data = [
    {
      id: 1,
      title: 'ADDRESS',
      lines: ['7607 Detour Ave Cleveland OH 44103 US'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'PHONE NUMBER',
      lines: ['440.812.3776'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'EMAIL ID',
      lines: ['ciaodaniel@gmail.com'],
      isLink: true,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'OPENING HOURS',
      lines: ['Mon – Sat 9 am to 8 pm', 'Sun – 10 am to 3 pm'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];
// ==================== TYPE 4 DATA ====================
  const type4Data = [
    {
      id: 1,
      title: 'TALK TO US',
      lines: ['Toll Free: 1224 2234 LAW', 'Fax: 1224 2235 225'],
      icon: (
        <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'MAIL US @',
      lines: ['support@livecon.com', 'admin@livecon.com'],
      isLink: true,
      icon: (
        <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'OUR LOCATION',
      lines: ['625 @ David Blake Road,', 'Adventureland, LA 14536, USA'],
      icon: (
        <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'OPENING HOURS',
      lines: ['Mon – Sat 9 am to 8 pm', 'Sun – 10 am to 3 pm'],
      icon: (
        <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // ==================== TYPE 5 DATA ====================
  const type5Data = [
    {
      id: 1,
      title: 'BECOME A SPONSOR',
      normalBg: 'bg-[#e77e4e]  group-hover:bg-white',            // Orange Hexagon
      hoverBoxBg: 'hover:bg-[#e77e4e]', // Hover Full Box Orange
    hoverIconColor: "group-hover:text-[#e77e4e]",
      icon: (
        <svg className="w-10 h-10 transition-colors duration-300 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <rect x="12" y="10" width="26" height="18" rx="2" strokeWidth="2.5" />
          <circle cx="17" cy="19" r="2" fill="currentColor" />
          <line x1="22" y1="16" x2="33" y2="16" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="22" y1="22" x2="30" y2="22" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="8" y="18" width="26" height="18" rx="2" className=" duration-300" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="13" cy="27" r="2.5" fill="currentColor" />
          <line x1="19" y1="24" x2="30" y2="24" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="19" y1="30" x2="27" y2="30" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'PARTNER WITH US',
      normalBg: 'bg-[#3498db] group-hover:bg-white',            // Blue Hexagon
      hoverBoxBg: 'hover:bg-[#3498db] group-hover:bg-white', // Hover Full Box Blue
      hoverIconColor: "group-hover:text-[#3498db]",
      icon: (
        <svg className="w-10 h-10 transition-colors duration-300 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <circle cx="18" cy="16" r="5" strokeWidth="2.5" />
          <path d="M10 32c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="30" cy="20" r="4.5" strokeWidth="2.5" />
          <path d="M25 34c0-3.3 2.7-6 6-6s6 2.7 6 6" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'BECOME A SPEAKER',
      normalBg: 'bg-[#f05a88] group-hover:bg-white',            // Pink Hexagon
      hoverBoxBg: 'hover:bg-[#f05a88]', // Hover Full Box Pink
      hoverIconColor:"group-hover:text-[#f05a88]",
      icon: (
        <svg className="w-10 h-10 transition-colors duration-300 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <circle cx="24" cy="16" r="7" strokeWidth="2.5" />
          <line x1="20" y1="16" x2="28" y2="16" strokeWidth="2" />
          <line x1="24" y1="12" x2="24" y2="20" strokeWidth="2" />
          <path d="M15 20c0 5 4 9 9 9s9-4 9-9" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="29" x2="24" y2="37" strokeWidth="2.5" />
          <line x1="18" y1="37" x2="30" y2="37" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'GIVE US IDEAS',
      normalBg: 'bg-[#5fb059] group-hover:bg-white ',            // Green Hexagon
      hoverBoxBg: 'hover:bg-[#5fb059]', // Hover Full Box Green
      hoverIconColor: "group-hover:text-[#5fb059]",
      icon: (
        <svg className="w-10 h-10 transition-colors duration-300 text-white" viewBox="0 0 48 48" fill="none" stroke="currentColor">
          <path d="M16 22c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.3-2 6.2-5 7.3V32h-6v-2.7c-3-1.1-5-4-5-7.3z" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="21" y1="36" x2="27" y2="36" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="18" x2="24" y2="22" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];
  // ==================== TYPE 6 DATA ====================
  const type6Data = [
    {
      id: 1,
      title: 'ADDRESS',
      lines: ['164 Nguyen Xi, Binh Thanh,', 'Ho Chi Minh City, Vietnam'],
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'PHONE NUMBER',
      lines: ['+ 64 345 132 098', '+ 75 9834 093 463'],
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'EMAIL ID',
      lines: ['design@someemail.com', 'hemes@someemail.com'],
      isLink: true,
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'OPENING HOURS',
      lines: ['Mon – Sat 9 am to 8 pm', 'Sun – 10 am to 3 pm'],
      icon: (
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // ==================== TYPE 7 DATA ====================
  const type7Data = [
    {
      id: 1,
      title: 'TALK TO US',
      lines: ['Toll Free: 1224 2234 LAW', 'Fax: 1224 2235 225'],
      icon: (
        <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'MAIL US @',
      lines: ['admin@thelaw.com', 'support@thelaw.com'],
      isLink: true,
      icon: (
        <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'OUR LOCATION',
      lines: ['625 @ David Blake Road,', 'Adventure, LA 14536, USA'],
      icon: (
        <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'OPENING HOURS',
      lines: ['Mon – Sat 9 am to 8 pm', 'Sun – 10 am to 3 pm'],
      icon: (
        <svg className="w-4 h-4 text-white -rotate-45" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];
  // TYPE 8 DATA
  const type8Data = [
    {
      id: 1,
      title: 'TALK TO US',
      lines: ['Toll Free: 440.812.3776'],
      iconBg: 'bg-black', // Black Circle
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'MAIL US @',
      lines: ['ciaodaniel@gmail.com'],
      isLink: true,
      iconBg: 'bg-black', // Black Circle
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'OUR LOCATION',
      lines: ['7607 Detour Ave Cleveland OH 44103 US'],
      iconBg: 'bg-[#9c3545]', // Maroon/Red Circle
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ];
  return (
    <div>

    <section className="w-full bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* TOP BREADCRUMB HEADER */}
        <div className="text-center space-y-1">
          <h1 className="text-2xl sm:text-3xl font-philosopher  text-zinc-900 tracking-wider uppercase font-medium">
            CONTACT INFO
          </h1>

          <p className="text-xs sm:text-sm text-zinc-400 font-serif tracking-wide">
            Home <span className="mx-1">/</span> Shortcodes 
            <span className="mx-1">/</span>
            <span className="text-zinc-500"> Contact Info</span>
          </p>
        </div>


        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* MAP */}
       <div className="w-full h-[380px] sm:h-[430px] bg-transparent border border-zinc-200 overflow-hidden shadow-sm">
        <iframe
  title="Google Map"
  src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
></iframe>
          </div>


          {/* CONTACT */}
          <div className="flex flex-col space-y-5">

            <div>
              <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>

              <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes">
                Type 1
              </h2>
            </div>


            <div className="divide-y divide-dashed divide-zinc-300 text-zinc-600 font-old-standard">

              <div className="py-4">
                <p>Toll Free: 440.812.3776</p>
            
              </div>


              <div className="py-4 text-[#9c3545]">
                <p>ciaodaniel@gmail.com</p>
             
              </div>


              <div className="py-4">
                <p>7607 Detour Ave Cleveland OH 44103 US</p>
              
              </div>


              <div className="py-4">
                <p>Mon – Sat 9 am to 8 pm</p>
                <p>Sun – 10 am to 3 pm</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>

    {/* second  or third section start */}
 <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12 font-serif">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* ==================== TYPE 2 ==================== */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
            <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
              Type 2
            </h2>
          </div>

          {/* Type 2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1: Talk To Us */}
            <div className="flex border border-zinc-300 bg-white shadow-sm">
              <div className="bg-black text-white p-4 flex items-center justify-center w-14 sm:w-16 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.828-1.41-5.122-3.704-6.532-6.532l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div className="p-4 flex flex-col justify-center text-xs sm:text-sm">
                <span className="text-[11px] font-philosopher  uppercase tracking-widest block mb-1">TALK TO US</span>
                <p className="text-zinc-700"><span className="font-old-standard ">Toll Free:</span> 440.812.3776</p>
                {/* <p className="text-zinc-700"><span className="font-semibold text-zinc-900">Fax:</span> 1224 2235 225</p> */}
              </div>
            </div>

            {/* Box 2: Mail Us */}
            <div className="flex border border-zinc-300 bg-white shadow-sm">
              <div className="bg-black text-white p-4 flex items-center justify-center w-14 sm:w-16 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <div className="p-4 flex flex-col justify-center text-xs sm:text-sm">
                <span className="text-[11px] font-philosopher uppercase tracking-widest block mb-1">MAIL US @</span>
                <p className="text-[#9c3545] font-old-standard cursor-pointer hover:underline">ciaodaniel@gmail.com</p>
                {/* <p className="text-[#9c3545] cursor-pointer hover:underline">admin@livecon.com</p> */}
              </div>
            </div>

            {/* Box 3: Our Location */}
            <div className="flex border border-zinc-300 bg-white shadow-sm">
              <div className="bg-black text-white p-4 flex items-center justify-center w-14 sm:w-16 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div className="p-4 flex flex-col justify-center text-xs sm:text-sm">
                <span className="text-[11px] font-philosopher uppercase tracking-widest block mb-1">OUR LOCATION</span>
                <p className="font-old-standard leading-snug">7607 Detour Ave Cleveland OH 44103 US</p>
                {/* <p className="text-zinc-600 leading-snug">Adventureland, LA 14536, USA</p> */}
              </div>
            </div>

          </div>
        </div>

        {/* ==================== TYPE 3 ==================== */}
        <div className="space-y-6 pt-6">
          {/* Header */}
          <div>
            <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
            <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
              Type 3
            </h2>
          </div>

          {/* Type 3 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {type3Data.map((card) => (
              <div key={card.id} className="flex flex-col items-center">
                
                {/* Maroon Box */}
                <div className="w-full bg-[#9c3545] text-white pt-8 pb-10 px-5 text-center relative shadow-sm">
                  
                  {/* Inner White Frame Line */}
                  <div className="absolute inset-3 border border-white/25 pointer-events-none"></div>

                  <h3 className="text-xs sm:text-sm uppercase font-philosopher tracking-[0.2em]  mb-4 text-white/90">
                    {card.title}
                  </h3>

                  <div className="space-y-1 font-old-standard text-xs sm:text-sm text-white/95 leading-relaxed">
                    {card.lines.map((line, idx) => (
                      <p
                        key={idx}
                        className={card.isLink ? 'cursor-pointer hover:underline' : ''}
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  {/* Bottom Triangle Cutout (Notch) */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-b-[18px] border-b-white"></div>
                </div>

                {/* Bottom Icon */}
                <div className="mt-3 text-[#9c3545]">
                  {card.icon}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
     {/* second  or third section end */}
     {/* fourth or five section satrt */}
<section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 font-serif">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* ==================== TYPE 4 SECTION ==================== */}
        <div className="space-y-8">
          <div>
            <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
            <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
              TYPE 4
            </h2>
          </div>

          <div className="border border-[#9c3545] relative bg-white">
            {/* Desktop Diamond Intersections */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#9c3545] rotate-45"></div>
              <div className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#9c3545] rotate-45"></div>
              <div className="absolute top-1/2 left-[75%] -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-[#9c3545] rotate-45"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#9c3545]">
              {type4Data.map((item) => (
                <div key={item.id} className="p-8 flex flex-col items-center text-center">
                  <div className="w-9 h-9 bg-[#9c3545] rotate-45 flex items-center justify-center mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-medium text-zinc-800 mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-1 text-xs sm:text-sm text-zinc-500 font-serif leading-relaxed">
                    {item.lines.map((line, idx) => (
                      <p key={idx} className={item.isLink ? 'text-[#9c3545] cursor-pointer hover:underline' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ==================== TYPE 5 SECTION ==================== */}
        <div className="space-y-10">
          <div>
            <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
            <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
              TYPE 5
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-items-center">
            {type5Data.map((item) => (
              <div
                key={item.id}
                className={`group relative w-full aspect-square max-w-[260px] p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 bg-transparent ${item.hoverBoxBg}`}
              >
                {/* Background Honeycomb Pattern (Visible on Hover) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none">
                  <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`hex-pattern-${item.id}`} width="28" height="48.5" patternUnits="userSpaceOnUse">
                        <path d="M14 0 L28 8.08 L28 24.25 L14 32.33 L0 24.25 L0 8.08 Z M14 48.5 L28 40.42 L28 24.25 L14 32.33 L0 24.25 L0 40.42 Z" fill="none" stroke="#ffffff" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#hex-pattern-${item.id})`} />
                  </svg>
                </div>

                {/* Central Hexagon */}
                <div
                  className={`relative z-10 w-24 h-28 flex items-center justify-center transition-all duration-300 ${item.normalBg} shadow-sm`}
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                >
              {React.cloneElement(item.icon, {
  className: `w-10 h-10 transition-colors duration-300 text-white ${item.hoverIconColor}`,
})}
                </div>

                {/* Card Title */}
                {/* <h3 className="relative z-10 mt-6 text-xs sm:text-[13px] uppercase tracking-wider font-sans font-bold text-zinc-800 hover:text-white text-center transition-colors duration-300">
                  {item.title}
                </h3> */}
                <h3
  className="
    mt-4 
    text-white 
  font-philosopher
    text-sm
    transition-colors 
    duration-300
    group-hover:text-white
  "
>
  {item.title}
</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
       {/* fourth or five section end  */}

       {/*six or seven section start */}
       <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 font-serif space-y-24">
      
      {/* ==================== TYPE 6 ==================== */}
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
          <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
            TYPE 6
          </h2>
        </div>

        {/* Grid for Type 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {type6Data.map((item) => (
            <div key={item.id} className="relative group">
              {/* Black Offset Shadow Box */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 bg-[#1e1e1e] rounded-none"></div>

              {/* Main Maroon Card */}
              <div className="relative bg-[#9c3545] p-6 sm:p-8 flex flex-col items-center text-center text-white h-full">
                {/* Icon */}
                <div className="mb-4">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-xs uppercase font-philosopher tracking-[0.2em] mb-4 text-white">
                  {item.title}
                </h3>

                {/* Lines */}
                <div className="space-y-1 text-xs sm:text-sm font-old-standard leading-relaxed text-zinc-100">
                  {item.lines.map((line, idx) => (
                    <p key={idx} className={item.isLink ? 'hover:underline cursor-pointer' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== TYPE 7 ==================== */}
      <div className="max-w-6xl mx-auto space-y-10">
        <div>
          <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
          <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
            TYPE 7
          </h2>
        </div>

        {/* Grid for Type 7 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {type7Data.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4">
              
              {/* Diamond Icon Container */}
              <div className="w-10 h-10 bg-[#9c3545] rotate-45 flex-shrink-0 flex items-center justify-center my-2 sm:my-0 shadow-sm">
                {item.icon}
              </div>

              {/* Content Box */}
              <div className="space-y-1">
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-philosopher font-bold text-zinc-900">
                  {item.title}
                </h3>
                <div className="space-y-0.5 text-xs sm:text-sm text-zinc-500 font-old-standard leading-relaxed">
                  {item.lines.map((line, idx) => (
                    <p key={idx} className={item.isLink ? 'text-[#9c3545] cursor-pointer hover:underline' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
    {/*six or seven section end */}
      {/* eight section start */}
    <section className="w-full bg-white py-14 px-4 sm:px-6 lg:px-12 font-serif">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Section Title Header */}
        <div>
          <div className="w-10 h-[2px] bg-[#9c3545] mb-2"></div>
          <h2 className="text-3xl sm:text-4xl italic text-[#9c3545] font-great-vibes tracking-wider font-light">
            TYPE 8
          </h2>
        </div>

        {/* Responsive Grid: 1 col on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          {type8Data.map((item) => (
            <div key={item.id} className="flex flex-col items-center">
              
              {/* Top Circle Icon */}
              <div className={`w-16 h-16 rounded-full ${item.iconBg} flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 hover:scale-105`}>
                {item.icon}
              </div>

              {/* Rectangular Border Box */}
              <div className="w-full border border-black p-6 sm:p-8 flex flex-col items-center justify-center text-center flex-grow bg-white">
                
                {/* Title */}
                <h3 className="text-[11px] sm:text-xs uppercase tracking-[0.2em] font-philosopher font-bold text-zinc-900 mb-3">
                  {item.title}
                </h3>

                {/* Sub lines */}
                <div className="space-y-1 text-xs sm:text-sm text-zinc-500 font-old-standard leading-relaxed">
                  {item.lines.map((line, idx) => (
                    <p key={idx} className={item.isLink ? 'text-[#9c3545] cursor-pointer hover:underline' : ''}>
                      {line}
                    </p>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
         {/* eight section end */}
    </div>
  );
}
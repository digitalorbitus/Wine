"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);

        if (timer.current) clearTimeout(timer.current);

        timer.current = setTimeout(() => {
          setShow(false);
        }, 3000); // 3 sec baad hide
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ${
        show
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-5 scale-90 pointer-events-none"
      }`}
    >
      <Image
        src="https://dtwine.wpenginepowered.com/wp-content/themes/winemaker/images/totop.png"
        alt="Scroll To Top"
        width={25}
        height={25}
        className="hover:scale-110 transition-transform duration-300"
      />
    </button>
  );
}
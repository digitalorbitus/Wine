"use client";

export default function WineLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <img
        src="https://dt-winey.myshopify.com/cdn/shop/files/Wine-animation-W-2.gif?v=1654685848"
        alt="Wine Loading"
        className="w-[220px] h-auto object-contain"
      />
    </div>
  );
}
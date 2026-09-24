"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Quote,
  Heart,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Andrew J. DiLiddo, Jr",
    role: "Local Guide",
    reviews: "78 reviews",
    photos: "23 photos",
    time: "a year ago",
    text: "I have been buying Wines From Italy here for some time. I can call anytime and speak directly with the owner who travels to Italy and forms partnerships directly with the vineyards and their owners. I don’t buy wine at the grocery store.",
    initials: "AD",
  },
  {
    id: 2,
    name: "ben p",
    role: "Local Guide",
    reviews: "153 reviews",
    photos: "23 photos",
    time: "3 years ago",
    text: "Overnight parking, delivery was quick, open at 7:30",
    initials: "BP",
  },
  {
    id: 3,
    name: "Scot Bailey",
    role: "Local Guide",
    reviews: "81 reviews",
    photos: "12 photos",
    time: "8 years ago",
    text: "Best wine and best prices.",
    initials: "SB",
  },
  {
    id: 4,
    name: "Robert Smith",
    role: "Local Guide",
    reviews: "310 reviews",
    photos: "",
    time: "a year ago",
    text: "Ed Tompkins.",
    initials: "RS",
  },
  {
    id: 5,
    name: "Ray Laporte",
    role: "",
    reviews: "2 reviews",
    photos: "",
    time: "5 months ago",
    text: "",
    initials: "RL",
  },
  {
    id: 6,
    name: "Aramy Hoffman",
    role: "Local Guide",
    reviews: "137 reviews",
    photos: "24 photos",
    time: "4 years ago",
    text: "",
    initials: "AH",
  },
  {
    id: 7,
    name: "Arthur Gaston",
    role: "",
    reviews: "3 reviews",
    photos: "",
    time: "5 years ago",
    text: "",
    initials: "AG",
  },
];

function GoogleStars({ size = 17 }) {
  return (
    <div className="flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#D4AF37]"
        >
          <path d="M12 2.5l2.95 5.98 6.6.96-4.77 4.65 1.13 6.57L12 17.55l-5.91 3.11 1.13-6.57-4.77-4.65 6.6-.96L12 2.5z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article
      className="
        relative flex h-full min-h-[245px] flex-col
        rounded-[22px]
        border border-[#741C29]/10
        bg-white
        p-5
        shadow-[0_10px_35px_rgba(116,28,41,0.06)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(116,28,41,0.10)]
      "
    >
      {/* Quote */}
      <Quote
        size={40}
        strokeWidth={1}
        className="absolute right-5 top-5 text-[#741C29]/8"
      />

      {/* User */}
      <div className="relative z-10 flex items-center gap-3">
        <div
          className="
            flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full bg-[#741C29]
            font-old-standard text-xs font-semibold
            text-white
          "
        >
          {review.initials}
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-old-standard text-[14px] font-semibold text-[#741C29]">
            {review.name}
          </h3>

          <div className="mt-0.5 flex flex-wrap items-center gap-1 text-[11px] text-[#6D625B]">
            {review.role && <span>{review.role}</span>}

            {review.role && review.reviews && (
              <span className="opacity-40">·</span>
            )}

            {review.reviews && <span>{review.reviews}</span>}

            {review.photos && (
              <>
                <span className="opacity-40">·</span>
                <span>{review.photos}</span>
              </>
            )}
          </div>
        </div>

        {/* Google */}
        <div className="ml-auto shrink-0">
          <svg width="22" height="22" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.6 32.9 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 16.1 18.9 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.2 0 9.8-2 13.3-5.2l-6.2-5.2C29.4 35.1 26.8 36 24 36c-5.2 0-9.6-3.1-11.3-8H6.1v5C9.5 39.5 16.1 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.2 5.5-6.2 7.2l6.2 5.2C39.1 36.9 44 31.1 44 24c0-1.2-.1-2.4-.4-3.5z"
            />
          </svg>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-3">
        <GoogleStars size={14} />
        <span className="font-old-standard text-[11px] text-[#6D625B]">
          {review.time}
        </span>
      </div>

      {/* Text */}
      <div className="mt-4 flex-1">
        {review.text ? (
          <p className="line-clamp-4 font-old-standard text-[14px] leading-6 text-[#4F4844]">
            {review.text}
          </p>
        ) : (
          <p className="font-old-standard text-sm italic text-[#6D625B]/40">
            No written review.
          </p>
        )}
      </div>

      {/* Bottom */}
      <div className="mt-4 flex items-center justify-between border-t border-[#741C29]/8 pt-3">
        <span className="font-old-standard text-[10px] uppercase tracking-[0.14em] text-[#6D625B]/60">
          Google Review
        </span>

        <Heart
          size={15}
          strokeWidth={1.5}
          className="text-[#741C29]/30"
        />
      </div>
    </article>
  );
}

export default function ReviewsPage() {
  const [current, setCurrent] = useState(0);

  const visible = 2;
  const maxIndex = Math.max(0, reviews.length - visible);

  const next = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const previous = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <main className="bg-[#F4F2EC]">

      {/* =========================
          REVIEWS MAIN SECTION
      ========================== */}
      <section className="px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto max-w-7xl">

          <div
            className="
              grid
              items-center
              gap-8
              lg:grid-cols-[270px_minmax(0,1fr)]
              lg:gap-10
            "
          >

            {/* =====================
                LEFT FIXED INFO
            ====================== */}
            <div
              className="
                relative
                lg:border-r
                lg:border-[#741C29]/10
                lg:pr-9
              "
            >
              {/* Small heading */}
              <div className="flex items-center gap-2">
                <span className="h-px w-7 bg-[#D4AF37]" />

                <span
                  className="
                    font-old-standard
                    text-[10px]
                    uppercase
                    tracking-[0.28em]
                    text-[#741C29]
                  "
                >
                  Google Rating
                </span>
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-4">
                <span
                  className="
                    font-philosopher
                    text-6xl
                    leading-none
                    text-[#741C29]
                  "
                >
                  4.4
                </span>

                <div>
                  <GoogleStars size={17} />

                  <p
                    className="
                      mt-1
                      whitespace-nowrap
                      font-old-standard
                      text-xs
                      text-[#6D625B]
                    "
                  >
                    Customer reviews
                  </p>
                </div>
              </div>

              {/* Business */}
              <div className="mt-7 border-t border-[#741C29]/10 pt-6">
                <div className="flex items-start gap-3">
                  <div
                    className="
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-full
                      bg-white
                      text-[#741C29]
                      shadow-sm
                    "
                  >
                    <MapPin size={18} strokeWidth={1.5} />
                  </div>

                  <div>
                    <h2
                      className="
                        font-philosopher
                        text-2xl
                        leading-tight
                        text-[#741C29]
                      "
                    >
                      Wines, LLC
                    </h2>

                    <p
                      className="
                        mt-1
                        font-old-standard
                        text-sm
                        text-[#6D625B]
                      "
                    >
                      Wholesale Wine Distributor
                    </p>

                    <p
                      className="
                        mt-0.5
                        font-old-standard
                        text-xs
                        text-[#6D625B]/75
                      "
                    >
                      Cleveland, Ohio
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* =====================
                RIGHT REVIEWS
            ====================== */}
            <div className="min-w-0">

              {/* Review heading + arrows SAME LINE */}
              <div className="mb-5 flex items-center justify-between gap-4">

                <div>
                  <p
                    className="
                      font-great-vibes
                      text-2xl
                      text-[#B89B6A]
                    "
                  >
                    From our customers
                  </p>

                  <h2
                    className="
                      mt-0.5
                      font-philosopher
                      text-xl
                      text-[#741C29]
                      sm:text-2xl
                    "
                  >
                    What Our Customers Say
                  </h2>
                </div>

                {/* Arrows */}
                <div className="flex shrink-0 gap-2">
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous review"
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-[#741C29]/15
                      bg-white
                      text-[#741C29]
                      transition-all duration-300
                      hover:bg-[#741C29]
                      hover:text-white
                      active:scale-95
                    "
                  >
                    <ChevronLeft
                      size={18}
                      strokeWidth={1.5}
                    />
                  </button>

                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next review"
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-full
                      border border-[#741C29]/15
                      bg-white
                      text-[#741C29]
                      transition-all duration-300
                      hover:bg-[#741C29]
                      hover:text-white
                      active:scale-95
                    "
                  >
                    <ChevronRight
                      size={18}
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
              </div>

              {/* Carousel */}
              <div className="overflow-hidden">
                <div
                  className="
                    flex
                    gap-5
                    transition-transform
                    duration-700
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                  "
                  style={{
                    transform: `translateX(calc(-${current} * (50% + 10px)))`,
                  }}
                >
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="
                        w-full
                        shrink-0
                        sm:w-[calc(50%-10px)]
                      "
                    >
                      <ReviewCard review={review} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="mt-5 flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map(
                  (_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={`Review slide ${index + 1}`}
                      className={`
                        h-1.5 rounded-full transition-all duration-300
                        ${
                          current === index
                            ? "w-7 bg-[#741C29]"
                            : "w-1.5 bg-[#741C29]/20"
                        }
                      `}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
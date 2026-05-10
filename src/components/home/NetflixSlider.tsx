import { useRef, useState } from "react";
import { Button } from "@heroui/react";
import { MdArrowForwardIos } from "react-icons/md";

import { movies } from "./movies";

export default function NetflixSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const CARD_WIDTH = 180;
  const GAP = 28;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    const visibleCards = Math.floor(
      slider.clientWidth / (CARD_WIDTH + GAP)
    );

    const scrollAmount = visibleCards * (CARD_WIDTH + GAP);

    slider.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const activeMovie = openIndex !== null ? movies[openIndex] : null;

  return (
    <div className="relative mt-6 group">

      {/* LEFT BUTTON */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-[-18px] top-1/2 -translate-y-1/2 z-20 w-8 h-20 bg-white/10 hover:bg-white/20 flex items-center justify-center"
      >
        <span className="text-white text-2xl">‹</span>
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-[-18px] top-1/2 -translate-y-1/2 z-20 w-8 h-20 bg-white/10 hover:bg-white/20 flex items-center justify-center"
      >
        <span className="text-white text-2xl">›</span>
      </button>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-7 overflow-x-scroll scrollbar-hide select-none scroll-smooth py-1 pl-6 pr-6"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
      >
        {movies.map((movie, index) => (
          <Button
            key={index}
            onClick={() => setOpenIndex(index)}
            variant="ghost"
            className="
              min-w-[160px]
              md:min-w-[180px]
              lg:min-w-[200px]
              h-[300px]
              p-0
              relative
              rounded-xl
              overflow-visible
              hover:scale-105
              transition-transform duration-300
            "
          >
            <img
              src={movie.image}
              className="w-full h-full object-contain bg-black rounded-xl"
            />

            <h1
              className="absolute bottom-3 left-[-14px] text-[60px] lg:text-[88px] font-black text-black"
              style={{ WebkitTextStroke: "2px white" }}
            >
              {index + 1}
            </h1>
          </Button>
        ))}
      </div>

      {/* MODAL */}
      {activeMovie && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          {/* BACKDROP */}
          <div
            className="absolute inset-0 bg-black/90"
            onClick={() => setOpenIndex(null)}
          />

          {/* MODAL */}
          <div className="relative z-50 sm:max-w-[620px] w-full bg-[#141414] text-white overflow-hidden rounded-xl shadow-2xl">

            {/* CLOSE */}
            <button
              onClick={() => setOpenIndex(null)}
              className="
                absolute top-4 right-4
                w-10 h-10
                rounded-full
                bg-black/40
                border border-white/30
                hover:bg-black/70
                text-white
                flex items-center justify-center
                text-xl
                cursor-pointer
                z-50
              "
            >
              ✕
            </button>

            {/* HERO */}
            <div className="relative w-full h-[420px]">

              <img
                src={activeMovie.background}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#141414]" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-transparent to-transparent" />

              {/* TAGS ONLY */}
              <div className="absolute bottom-6 left-6 flex gap-2 flex-wrap max-w-[70%]">
                {activeMovie.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-2 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

            {/* BODY */}
            <div className="px-6 py-1 space-y-5">

              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl">
                {activeMovie.description}
              </p>

              <div className="flex items-center gap-4 pb-10 pt-5">
                <Button className="bg-red-600 hover:bg-red-700 text-white text-lg h-12 px-6 rounded-sm flex items-center gap-2">
                  Get Started <MdArrowForwardIos />
                </Button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
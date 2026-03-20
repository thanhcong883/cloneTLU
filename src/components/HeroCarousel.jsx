import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1920",
      caption: "Trường Đại học Thủy Lợi - Nơi ươm mầm tài năng"
    },
    {
      src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1920",
      caption: "Môi trường học tập hiện đại, năng động"
    },
    {
      src: "https://images.unsplash.com/photo-1519452285022-eb3a71b2d308?auto=format&fit=crop&q=80&w=1920",
      caption: "Nghiên cứu khoa học và chuyển giao công nghệ"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={img.src}
            alt={img.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 z-20 text-white text-center w-full px-4">
            <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg mb-4 uppercase tracking-wider">
              {img.caption}
            </h2>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-tluBlue text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-tluBlue text-white rounded-full opacity-0 group-hover:opacity-100 transition-all"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${
              idx === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

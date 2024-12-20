'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/client';
import { Bodoni_Moda, Lato } from 'next/font/google';
import Link from 'next/link';
import Card from './Card';
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
export default function GalleryTwo({ persons }: { persons: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
 
  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, persons.length - visibleCards) : prev - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= Math.max(0, persons.length - visibleCards) ? 0 : prev + 1
    );
  };
  return (
    <div className="mt-32 text-center mx-auto max-w-[390px] md:max-w-[670px] lg:max-w-[960px] xl:max-w-[1260px] px-4">
      <h3 className="font-bodoni text-5xl mb-4 sm:text-5xl hover:text-[#F90002]">Meet the Team</h3>
      <div className="redline mb-10 h-[3px] w-[120px] bg-red-500 rounded mx-auto"></div>
      <div className="relative px-6">
        {/* Button: Previous */}
        <button
          className="absolute left-[1px] md:left-[-8px] lg:left-[-8px] top-[55%] transform -translate-y-1/2 z-10 p-2"
          onClick={handlePrev}
        >
          <Image
            src="/assets/arrow_left.png"
            alt="Previous Arrow"
            width={22}
            height={22}
          />
        </button>
        {/* Carousel Track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-1"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {persons.map((person, index) => (
             <Card person={person} />
            ))}
          </div>
        </div>
        {/* Button: Next */}
        <button
          className="absolute right-[2px] md:right-[-8px] lg:right-[-12px] xl:right-[-10px] top-[55%] transform -translate-y-1/2 text-black z-10 p-2"
          onClick={handleNext}
        >
          <Image
            src="/assets/arrow_right.png"
            alt="Next Arrow"
            width={22}
            height={22}
          />
        </button>
      </div>
    </div>
  );
}
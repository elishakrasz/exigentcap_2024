'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlForImage } from '../../sanity/lib/client';
import { Bodoni_Moda, Lato } from 'next/font/google';
import Link from 'next/link';
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});
const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
export default function MeetTheTeam({ persons }: { persons: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  // Update visible cards based on screen size
  const updateVisibleCards = () => {
    if (window.innerWidth >= 1280) setVisibleCards(4); // Large screens
    else if (window.innerWidth >= 1024) setVisibleCards(3); // Desktop
    else if (window.innerWidth >= 768) setVisibleCards(2); // Tablet
    else setVisibleCards(1); // Mobile
  };
  useEffect(() => {
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);
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
      <h3 className="font-bodoni text-5xl mb-5 sm:text-5xl">Meet the Team</h3>
      <div className="redline mb-8 h-[3px] w-[120px] bg-red-500 rounded mx-auto"></div>
      <div className="relative px-6">
        {/* Button: Previous */}
        <button
          className="absolute left-[1px] md:left-[-8px] lg:left-[-8px] top-[65%] transform -translate-y-1/2 z-10 p-2"
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
              <div
                key={index}
                className="flex-none px-0.5"
                style={{
                  width: `calc(${100 / visibleCards}% - 3px)`,
                }}
              >
                <Link href={`/team?slug=${person.slug.current}`}>
                  <div className="border border-gray-300 h-[350px] w-[275px] px-2 mx-auto hover:border-l-4 hover:border-l-[#F5101E]">
                    <div className={bodoni.className}>
                      <div className="mt-10 w-full flex justify-center">
                        <Image
                          src={urlForImage(person.image).quality(100).url()}
                          alt={person.name}
                          width={175}
                          height={150}
                          className="object-contain mx-auto"
                        />
                      </div>
                      <p className="text-3xl font-normal mt-2">{person.name}</p>
                      <div className={lato.className}>
                        <p className="text-[18px] font-light italic mt-2 text-gray-600">
                          {person.title}
                        </p>
                        <p className="text-[18px] font-light mb-12 text-gray-600">
                          {person.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* Button: Next */}
        <button
          className="absolute right-[2px] md:right-[-8px] lg:right-[-12px] xl:right-[-10px] top-[65%] transform -translate-y-1/2 text-black z-10 p-2"
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
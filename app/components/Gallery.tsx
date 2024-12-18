'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Card from './Card';

export default function Gallery({ persons }: { persons: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const searchParams = useSearchParams();
  const slugTwo = searchParams.get('slug'); // Retrieve slug from query parameters

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? persons.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === persons.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (slugTwo && persons.length > 0) {
      // Find the index of the team member based on the slug
      const index = persons.findIndex((person) => person.slug.current === slugTwo);
      if (index !== -1) {
        setCurrentIndex(index);
      } else {
        console.warn(`Slug not found in persons: "${slugTwo}"`);
      }
    } else {
      console.warn('Slug or persons not available', { slugTwo, persons });
    }
  }, [slugTwo, persons]);

  return (
    <div className="mt-16 text-center mx-auto max-w-[390px] md:max-w-[670px] lg:max-w-[940px] xl:max-w-[1220px] px-4">
      <div className="relative px-6">
        {/* Button: Previous */}
        <button
          className="absolute left-[19px] md:left-[2px] lg:left-[78px] xl:left-[198px] top-[18%] md:top-[40%] transform -translate-y-1/2 z-10 p-2"
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
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {persons.map((person, index) => (
              <div
                key={index}
                className="flex-none px-0.5"
                style={{
                  width: '100%',
                }}
              >
                <Card person={person} />
              </div>
            ))}
          </div>
        </div>

        {/* Button: Next */}
        <button
          className="absolute right-[10px] md:right-[-4px] lg:right-[36px] xl:right-[156px] top-[18%] md:top-[40%] transform -translate-y-1/2 text-black z-10 p-2"
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

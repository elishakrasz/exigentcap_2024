'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Card from './Card';

export default function Gallery({ persons }: { persons: any[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const searchParams = useSearchParams();
    const slug = searchParams.get('slug'); // Retrieve the slug from query parameters

    // Update the current index based on the slug
    useEffect(() => {
        if (slug && persons.length > 0) {
            const index = persons.findIndex((person) => person.slug.current === slug);
            if (index !== -1) {
                setCurrentIndex(index);
            } else {
                console.warn(`Slug not found in persons: "${slug}"`);
            }
        }
    }, [slug, persons]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? persons.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === persons.length - 1 ? 0 : prev + 1));
    };

    // Expose an external function to update the index dynamically
    const setIndex = (index: number) => {
        if (index >= 0 && index < persons.length) {
            setCurrentIndex(index);
        } else {
            console.warn(`Invalid index passed: "${index}"`);
        }
    };

    return (
        <div className="flex justify-center items-center mt-16 mx-auto max-w-[480px] md:max-w-[740px] lg:max-w-[880px] h-[700px] md:h-full relative">
            {/* Previous Button */}
            <button
                     className="absolute left-[1px] md:left-[-8px] lg:left-[-8px] md:top-[45%] transform -translate-y-1/2 z-10 p-2"
                     onClick={handlePrev}
                   >
                     <Image
                       src="/assets/arrow_left.png"
                       alt="Previous Arrow"
                       width={22}
                       height={22}
                     />
                   </button>

            {/* Visible Card */}
            <div className="w-full max-w-[400px] md:max-w-[640px] lg:max-w-[720px] flex justify-center">
                <Card person={persons[currentIndex]} />
            </div>

            {/* Next Button */}
             <button
                      className="absolute right-[2px] md:right-[-8px] lg:right-[-12px] xl:right-[-10px] md:top-[45%] transform -translate-y-1/2 text-black z-10 p-2"
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
    );
}

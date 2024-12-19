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
        <div className="flex justify-center items-center min-h-screen relative">
            {/* Previous Button */}
            <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2"
                onClick={handlePrev}
            >
                <Image
                    src="/assets/arrow_left.png"
                    alt="Previous"
                    width={24}
                    height={24}
                />
            </button>

            {/* Visible Card */}
            <div className="w-full max-w-[400px] md:max-w-[640px] lg:max-w-[720px] flex justify-center">
                <Card person={persons[currentIndex]} />
            </div>

            {/* Next Button */}
            <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2"
                onClick={handleNext}
            >
                <Image
                    src="/assets/arrow_right.png"
                    alt="Next"
                    width={24}
                    height={24}
                />
            </button>
        </div>
    );
}

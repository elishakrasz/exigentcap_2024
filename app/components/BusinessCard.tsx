import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./utilities/Button";

const text = 'Learn More'
const BusinessCard = () => {
  return (
    <div className="text-center mx-auto max-w-[460px] mt-16 px-4 md:max-w-3xl lg:max-w-6xl lg:mt-16  xl:mt-24">
      {/* Business Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Family Office */}
        <div className="flex flex-col items-center">
          <h4 className="text-4xl font-bodoni text-gray-800 md:text-3xl lg:text-3xl xl:text-3xl">Family Office</h4>
          <p className="text-xl sm:text-xl text-gray-400 mt-1">For high-net-worth families</p>
          <Image
            src="/assets/Birds.png"
            alt="Family Office"
            width={200}
            height={200}
            className="w-2/3 mt-6 md:mt-9 lg:w-[250px] object-contain"
          />
        <div>
         <Link
          href="/family"
          className="text-base inline-block mt-4 hover:bg-[#F5101E] hover:text-white hover:border-0 font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn More
        </Link>
    </div>
        </div>

        {/* Investment Products */}
        <div className="mt-10 flex flex-col items-center md:mt-0">
          <h4 className="text-4xl sm:text-4xl font-bodoni text-gray-800 md:text-3xl lg:text-3xl xl:text-3xl">Investment Products</h4>
          <p className="text-xl sm:text-xl text-gray-400 mt-2">For qualified investors</p>
          <Image
            src="/assets/ShipA.jpg"
            alt="Investment Products"
            width={200}
            height={200}
            className="w-2/3 mt-2 md:mt-1 lg:w-[250px] object-contain"
          />
          
          <div>
         <Link
          href="/special"
          className="text-base inline-block mt-4 hover:bg-[#F5101E] hover:text-white hover:border-0 font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn More
        </Link>
    </div>
        </div>

        {/* Strategic Advisory */}
        <div className="mt-10 flex flex-col items-center md:mt-12 lg:mt-0 md:mx-auto md:text-center md:col-span-2 lg:col-span-1">
          <h4 className="text-4xl sm:text-4xl font-bodoni text-gray-800 md:text-3xl">Strategic Advisory</h4>
          <p className="text-xl sm:text-xl text-gray-400 mt-2">For businesses and corporates</p>
          <Image
            src="/assets/Cufflink.jpg"
            alt="Strategic Advisory"
            width={200}
            height={200}
            className="w-2/3 mt-6 md:mt-6 lg:mt-9 lg:w-[210px] object-contain"
          />
         <div>
         <Link
          href="/strategic"
          className="text-base inline-block mt-4 hover:bg-[#F5101E] hover:text-white hover:border-0 font-sans font-normal md:text-base border-2 border-gray-400 py-1 rounded-full px-6"
        >
          Learn More
        </Link>
    </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;

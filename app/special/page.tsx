import Image from "next/image";
import { Bodoni_Moda, Lato } from "next/font/google";
import Button from "../components/utilities/Button";
import Link from "next/link";
import Investments from "../components/Investments";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
});
const lato = Lato({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Special = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="max-w-7xl lg:max-w-[1100px] lg:mx-auto mt-10">
        <div className="">
          {/* Text Section */}
          <div className="">
            <div className="lg:grid lg:grid-cols-6 mt-8">
              <div className="lg:col-span-4 lg:max-w-[850px] xl:max-w-[1200px] md:mt-12">
                <div className="max-w-[380px] md:max-w-[600px] mx-auto md:text-5xl lg:max-w-7xl md:text-center leading-10">
                  <h3 className="font-bodoni text-center text-5xl md:font-normal md:text-6xl">
                  Special Situation Investing
                  </h3>
                  <p className="text-center text-lg md:text-xl font-light mt-2 text-gray-500 leading-relaxed">
                  For qualified investors
                  </p>
                  <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
                </div>

                
                {/* Image Section */}
              <div className="mt-6 lg:hidden">
                <div className="w-3/4 justify-center mx-auto text-center ">
                  <Image
                   src="/assets/ShipA.jpg"
                                    alt="Ship"
                    width={300}
                    height={200}
                    className="object-contain mx-auto md:w-[350px]"
                  />
                </div>
              </div>
                <div className="font-lato mt-8 px-6 max-w-[510px] mx-auto md:ml-8 md:max-w-[820px] lg:max-w-[1120px]">
                <p className="px-2 text-lg font-light text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">
                  Exigent Capital Group
                  </span>{" "}
                  leverages a proprietary investment pipeline, strong
            underwriting capabilities, and a world-class network of
            strategic relationships to deliver timely and thematic
            investment products to a global investor base.
                </p>
                <p className="px-2 mt-2 text-lg font-light text-gray-500">
                  We provide a range of services that include:
                </p>
              </div>
              </div>
              
              
              {/* Image Section */}
              <div className="hidden lg:block md:col-span-2" >
                <div className="lg:w-[375px] mx-auto">
                  <Image
                    src="/assets/ShipA.jpg"
                                    alt="Ship"
                    width={300}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>

              
            </div>
           
          </div>
        </div>

      
      </div>

{/* Services Grid */}
<div className="mx-auto max-w-[400px] lg:grid lg:grid-cols-4 lg:max-w-[1100px] mt-8 md:mt-4 lg:mt-8 text-center md:gap-0 px-2 md:px-0 xl:max-w-[1200px] lg:divide-y-0 lg:divide-x-2 divide-slate-600 text-gray-900">
{[
    "Secondaries, GP Stakes, Growth Equity and Real Estate",
                        "Structured as Single-Asset SPVs, Funds and Co-Investment Vehicles",
                        "Geographic Coverage of North America, Europe/UK and Israel",
  ].map((service, index) => (
    <div
      key={index}
      className={`${lato.className} flex flex-col items-center mt-14 lg:my-4 h-8`}
    >
      <h1 className="text-lg md:text-lg lg:text-base px-2"> {service} <p className={`border-b-2 mx-auto mt-4  border-slate-700 w-16 lg:border-b-0 ${index === 2 ? "last:border-b-0 md:border-b-0" : "border-b-2"} `}></p></h1>
    </div>
  ))}
</div>

<Investments />
       {/* Disclaimer */}
       <div className="font-lato">
          <h1 className="mx-auto max-w-[380px] md:max-w-full text-center py-32 px-8 italic font-light font-sans text-gray-400 text-xs md:text-sm">
            Services provided by Exigent Family Office Ltd. (Israel) in conjunction with professional third parties.
          </h1>
        </div>

          
    </div>
  );
};

export default Special;
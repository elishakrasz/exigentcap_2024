import Image from "next/image";
import { Bodoni_Moda, Lato } from "next/font/google";
import Button from "../components/utilities/Button";
import Link from "next/link";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
});
const lato = Lato({
  weight: ["300", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const Family = () => {
  return (
    <div>
      {/* Main Section */}
      <div className="max-w-7xl lg:max-w-[1100px] lg:mx-auto mt-10">
        <div className="">
          {/* Text Section */}
          <div className="">
            <div className="lg:grid lg:grid-cols-6 mt-8">
              <div className="lg:col-span-4 lg:max-w-[850px] xl:max-w-[1200px] md:mt-12">
                <div className="md:text-5xl md:text-center leading-10">
                  <h3 className="font-bodoni text-center text-5xl md:font-normal lg:text-6xl hover:text-[#F90002]">
                    Family Office
                  </h3>
                  <p className="text-center text-lg font-light mt-2 text-gray-500 leading-relaxed">
                    For high-net-worth families
                  </p>
                  <div className="border-b-4 border-red-500 rounded-full w-24 mt-4 mx-auto"></div>
                </div>

                
                {/* Image Section */}
              <div className="mt-6 lg:hidden">
                <div className="w-1/2 justify-center mx-auto text-center ">
                  <Image
                    src="/assets/Birds.png"
                    alt="Map"
                    width={300}
                    height={200}
                    className="object-contain mx-auto md:w-[350px]"
                  />
                </div>
              </div>
                <div className="font-lato mt-8 px-6 max-w-[510px] mx-auto md:ml-8 md:max-w-[820px] lg:max-w-[1120px]">
                <p className="px-2 text-lg font-light text-gray-500 leading-relaxed">
                  <span className="font-semibold text-gray-600">
                    Exigent Family Office
                  </span>{" "}
                  is purpose-built for families who are seeking to create a
                  stronger alignment between their capital and their values.
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
                    src="/assets/Birds.png"
                    alt="Map"
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

      <div className="flex flex-row  text-sm  lg:mt-16 space-x-4 max-w-[960px] align-top mx-auto text-center border-slate-600">
  <p className="px-2">Investment and Wealth Management</p>
  <p className="px-4 border-l-2 border-slate-600 h-10">Comprehensive Reporting</p>
  <p className="pl-4 border-l-2 border-slate-600">Tax and Estate Planning</p>
  <p className="pl-4 border-l-2 border-slate-600">Philanthropic Advisory</p>
  <p className="px-2 border-l-2 border-slate-600">Family Governance and Succession Planning</p>
  <p className="px-2 border-l-2 border-slate-600">Networking and Unique Events</p>
</div>

 

{/* Services Grid */}
{/* <div className="mx-auto lg:grid lg:grid-cols-6 lg:max-w-[1100px] mt-8 md:mt-4 lg:mt-8 text-center md:gap-0 px-2 md:px-0 xl:max-w-[1200px] md:divide-y-0 md:divide-x-2 divide-slate-600 text-gray-900">
  {[
    "Investment and Wealth Management",
    "Comprehensive Reporting",
    "Tax and Estate Planning",
    "Philanthropic Advisory",
    "Family Governance and Succession Planning",
    "Networking and Unique Events",
  ].map((service, index) => (
    <div
      key={index}
      className={`${lato.className} flex flex-col items-center justify-center my-8 lg:my-4 h-10`}
    >
      <h1 className="text-lg md:text-lg lg:text-base px-2"> {service} <p className={`border-b-2 mx-auto mt-5 border-slate-700 w-16 lg:border-b-0 ${index === 5 ? "last:border-b-0 md:border-b-0" : "border-b-2"} `}></p></h1>
    </div>
  ))}
</div> */}

      {/* Leadership Section */}
<div>
  <div className="mt-10 mb:mt-16 lg:mt-20 text-center mx-auto justify-items-center">
    <div className="mb:mt-8 mb-12">
      <Link
        href="/contact"
        className="hover:bg-red-500 hover:text-white font-lato font-normal hover:border-0 text-lg border-2 border-gray-400 py-1 rounded-full px-6"
      >
        Contact Us
      </Link>
    </div>
    <h3 className="md:mt-24 font-bodoni text-4xl sm:text-5xl md:text-6xl mb-4 hover:text-[#F90002]">Leadership Team</h3>
    <div className="border-b-4 border-red-500 rounded-full w-24 lg:w-48 mt-4 mx-auto"></div>
    {/* Team Member */}
    <div className="h-[350px] mx-auto text-center lg:mt-16">
      <div className={bodoni.className}>
        <Image
          src="/assets/team/Hoenlein.png"
          alt="Hon. Malcolm Hoenlein"
          width={250}
          height={250}
          className="w-[325px] object-contain mx-auto"
        />
        <p className="text-4xl mb:text-3xl font-semibold">
          Malcolm Hoenlein
        </p>
        <div className="font-lato">
          <p className="text-2xl font-light italic mt-2 text-gray-600">
          Global Ambassador
          </p>
          <p className="text-2xl font-light mb-12 text-gray-600">
            Exigent Family Office
          </p>
        </div>
      </div>
    </div>
    {/* Disclaimer */}
    <div className="font-lato">
      <h1 className="py-32 mt-24 italic font-light text-gray-400 text-base max-w-[360px] mx-auto md:max-w-[600px]">
        Services provided by Exigent Family Office Ltd. (Israel) in conjunction
        with professional third parties.
      </h1>
    </div>
  </div>
</div>

          
    </div>
  );
};

export default Family;
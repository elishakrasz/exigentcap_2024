import Link from 'next/link';
import Image from 'next/image';
import { Lato } from 'next/font/google';


const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default async function Contact() {

  return (
    <div className="mt-12">
      {/* Contact Title Section */}
      <div className="mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bodoni">Contact</h1>
        <div className="border-b-4 border-red-500 rounded-full w-24 md:w-28 mt-4 mx-auto"></div>
        {/* <div className="hidden mt-1 pb-24 space-x-2 md:space-x-1 md:text-center mx-auto items-center md:mt-1  md:flex lg:hidden">
          <Link
            href="https://www.linkedin.com/company/exigentcapitalgroup/"
            className="mr-3"
            target="_blank"
          >
            <Image
              src="/assets/LinkedIn.png"
              alt="LinkedIn"
              width={112}
              height={28}
              className="w-24 md:w-26 ml-1"
            />
          </Link>
          <Link
            href="mailto:info@exigentcapitalgroup.com"
            className="mr-3 group relative"
          >
            <Image
              src="/assets/Email.png"
              alt="Email Icon"
              width={24}
              height={24}
              className=""
            />
          </Link>
        </div> */}

<div className="hidden md:flex lg:hidden mt-4 md:space-x-0 justify-center items-center">
  <Link
    href="https://www.linkedin.com/company/exigentcapitalgroup/"
    className="mr-3"
    target="_blank"
  >
    <Image
      src="/assets/LinkedIn.png"
      alt="LinkedIn"
      width={112}
      height={28}
      className="w-24 md:w-26 ml-1"
    />
  </Link>
  <Link
    href="mailto:info@exigentcapitalgroup.com"
    className="mr-3 group relative"
  >
    <Image
      src="/assets/Email.png"
      alt="Email Icon"
      width={24}
      height={24}
      className=""
    />
  </Link>
</div>
      </div>



      {/* Main Content */}
      <div className="grid grid-cols-1 items-center lg:grid lg:grid-cols-12 lg:gap-2 pt-8 mx-auto md:max-w-7xl">
        
        <div className='lg:col-span-1'/>
        {/* Left Section: Image */}
        <div className="items-center text-center max-auto lg:col-span-4">
          <Image
            src="/assets/Bunting.jpeg"
            alt="Bunting"
            width={400}
            height={300}
            className="w-3/4 sm:w-[400px] lg:w-[550px] mx-auto"
          />
        </div>

        

        {/* Right Section: Contact Details */}
        <div className="text-center lg:col-span-6 lg:mx-auto lg:ml-14 ">
          <h1 className={`font-lato text-xl font-semibold mt-8 md:text-2xl lg: lg:text-center`}>Be in touch</h1>
          <div className="lg:grid lg:grid-cols-2 lg:text-right lg:mt-6 mb-8 lg:space-x-12">
            <div className="font-lato font-light mt-4">
              <p className="text-base lg:text-lg"><span className='font-normal'>Israel</span> 972-2-500-9450</p>
              <p className="lg:mb-8 text-base lg:text-lg"><span className='font-normal'>US</span>  1-646-506-9450</p>
            </div>
            <h1 className="my-3 text-[17px] lg:text-[20px] text-red-500 font-sans font-light lg:text-left ">
              info@exigentcap.com
            </h1>
          </div>

          {/* Offices Section */}
          <h1 className={`font-lato text-xl font-semibold md:text-2xl`}>Offices</h1>
          <div className="border-b-4 border-red-500 rounded-full mt-2 w-12 mx-auto"></div>

          <div className="grid grid-cols-2 gap-4 text-right mt-6">
            {/* Jerusalem Office */}
            <div className="font-lato">
              <p className="text-lg">Jerusalem</p>
              <p className="text-base md:text-lg font-light">Wyndham Deedes Street #5</p>
              <p className="text-base  md:text-lg font-light">Jerusalem, Israel</p>
            </div>

            {/* Herzliya Office */}
            <div className="font-lato text-left pl-6 pb-36">
              <p className="text-lg font-normal">Herzliya</p>
              <p className="text-base  md:text-lg font-light">Arik Einstein #3</p>
              <p className="text-base  md:text-lg font-light">Herzliya, Israel</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

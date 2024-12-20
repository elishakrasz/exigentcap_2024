import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="mt-16">
      {/* Contact Title Section */}
      <div className="mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bodoni hover:text-[#F90002]">Contact</h1>
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
      <div className="grid grid-cols-1 items-center lg:grid lg:grid-cols-10 lg:mt-6 lg:gap-2 mx-auto md:max-w-7xl">
        
        <div className="items-center text-center max-auto lg:col-span-5 lg:text-right ">
          <Image
            src="/assets/Bunting.jpeg"
            alt="Bunting"
            width={400}
            height={300}
            className="w-3/4 sm:w-[400px] lg:w-[550px] mx-auto"
          />
        </div>
    
      
        {/* Left Section: Image */}
        

        

        {/* Right Section: Contact Details */}
        <div className="text-center lg:col-span-5 lg:mx-auto lg:ml-2">
          <h1 className={`font-lato text-xl font-semibold mt-8 md:text-2xl lg:text-center`}>Be in touch</h1>
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
    // <div className="mt-28 text-center mx-auto justify-items-center max-w-7xl">
    //   <h3 className="font-bodoni text-5xl md:text-5xl mb-4">Contact</h3>
    //   <div className="h-[3px] w-[80px] md:w-[80px] lg:w-[120px] bg-red-500 rounded mx-auto md:mb-12"></div>
    //   <div className="items-center text-center max-auto lg:hidden">
    //               <Image
    //                 src="/assets/Bunting.jpeg"
    //                 alt="Bunting"
    //                 width={400}
    //                 height={300}
    //                 className="w-3/4 sm:w-[400px] md:w-[450px] mx-auto"
    //               />
    //             </div>
    //   <div className="mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-0 ">

       


    //     {/* Locations */}
    //     <div className="mt-10 md:text-right lg:flex lg:col-span-2">
    //     <div className="text-right max-auto hidden lg:block">
    //               <Image
    //                 src="/assets/Bunting.jpeg"
    //                 alt="Bunting"
    //                 width={400}
    //                 height={300}
    //                 className="w-3/4 sm:w-[400px] md:w-[550px] lg:w-[400px] mx-auto"
    //               />
    //             </div>
    //       <div className="font-lato">
    //         <h1 className="text-2xl font-normal">Jerusalem</h1>
    //         <p className="text-lg font-light">
    //           Wyndham Deeds Street #5
    //         </p>
    //         <p className="mb-8 text-lg font-light">Jerusalem, Israel</p>

    //         <h1 className="text-2xl font-normal font-sans">Herzliya</h1>
    //         <p className="text-lg font-light">Arik Einstein #3</p>
    //         <p className="text-lg font-light md:mb-36">
    //           Herzliya, Israel
    //         </p>
    //       </div>
    //     </div>

    //     {/* Contact Information */}
    //     <div className="font-lato mt-8 md:mt-10 md:text-left md:col-span-0 lg:col-span-1">
    //       <div>
    //         <p className="text-xl font-light"><span className="font-normal">Israel{' '}</span>972-2-500-9450</p>
    //         <p className="mb-8 text-xl md:py-1 md:mb-0 font-light"><span className="font-normal">US{' '}</span> 1-646-506-9450</p>
          
    //         <h1 className="text-[22px] md:text-[22px] md:mt-14 lg:text-[18px] text-red-500 font-sans font-light">
    //           info@exigentcap.com
    //         </h1>
    //       </div>
    //       <div className="mt-1 pb-24 text-left space-x-2 md:space-x-1 mx-auto items-center md:mt-1 hidden md:flex">
    //       <Link
    //         href="https://www.linkedin.com/company/exigentcapitalgroup/"
    //         className="mr-3"
    //         target="_blank"
    //       >
    //         <Image
    //           src="/assets/LinkedIn.png"
    //           alt="LinkedIn"
    //           width={112}
    //           height={28}
    //           className="w-24 md:w-26 ml-1"
    //         />
    //       </Link>
    //       <Link
    //         href="mailto:info@exigentcapitalgroup.com"
    //         className="mr-3 group relative"
    //       >
    //         <Image
    //           src="/assets/Email.png"
    //           alt="Email Icon"
    //           width={24}
    //           height={24}
    //           className=""
    //         />
    //       </Link>
    //       <Link
    //         href="tel:info@exigentcapitalgroup.com"
    //         className="mr-3 group relative"
    //       >
    //         <Image
    //           src="/assets/Phone Icon.png"
    //           alt="Phone Icon"
    //           width={16}
    //           height={16}
    //           className=""
    //         />
    //       </Link>
    //       <Link
    //         href="mailto:info@exigentcapitalgroup.com"
    //         className="mr-3"
    //       >
    //         <Image
    //           src="/assets/Location Icon.png"
    //           alt="Location Icon"
    //           width={16}
    //           height={16}
    //           className=""
    //         />
    //       </Link>
    //     </div>
    //     </div>

    //     {/* Social and Contact Icons */}
    //             {/* Social and Contact Icons */}
    //             <div className="mt-3 pb-24 flex flex-wrap justify-center space-x-2 mx-auto items-center text-center md:mt-0 md:hidden">
    //       <Link
    //         href="https://www.linkedin.com/company/exigentcapitalgroup/"
    //         className="mr-3"
    //         target="_blank"
    //       >
    //         <Image
    //           src="/assets/LinkedIn.png"
    //           alt="LinkedIn"
    //           width={112}
    //           height={28}
    //           className="w-24 md:w-26 ml-1"
    //         />
    //       </Link>
    //       <Link
    //         href="mailto:info@exigentcapitalgroup.com"
    //         className="mr-3 group relative"
    //       >
    //         <Image
    //           src="/assets/Email.png"
    //           alt="Email Icon"
    //           width={24}
    //           height={24}
    //           className=""
    //         />
    //       </Link>
    //       <Link
    //         href="tel:info@exigentcapitalgroup.com"
    //         className="mr-3 group relative"
    //       >
    //         <Image
    //           src="/assets/Phone Icon.png"
    //           alt="Phone Icon"
    //           width={16}
    //           height={16}
    //           className="w-5"
    //         />
    //       </Link>
    //       <Link
    //         href="mailto:info@exigentcapitalgroup.com"
    //         className="mr-3"
    //       >
    //         <Image
    //           src="/assets/Location Icon.png"
    //           alt="Location Icon"
    //           width={16}
    //           height={16}
    //           className="w-4"
    //         />
    //       </Link>
    //     </div>

    //   </div>
    // </div>
  );
};

export default Contact;

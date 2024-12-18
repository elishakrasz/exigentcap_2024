import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="mt-28 text-center mx-auto justify-items-center max-w-7xl">
      <h3 className="font-bodoni text-5xl md:text-5xl mb-4">Contact</h3>
      <div className="h-[3px] w-[60px] md:w-[80px] lg:w-[120px] bg-red-500 rounded mx-auto md:mb-12"></div>
      <div className="mt-12 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10 lg:gap-24 ">
        {/* Locations */}
        <div className="md:text-right">
          <div className="font-lato">
            <h1 className="text-2xl font-normal">Jerusalem</h1>
            <p className="text-lg font-light">
              Wyndham Deeds Street #5
            </p>
            <p className="mb-8 text-lg font-light">Jerusalem, Israel</p>

            <h1 className="text-2xl font-normal font-sans">Herzliya</h1>
            <p className="text-lg font-light">Arik Einstein #3</p>
            <p className="text-lg font-light md:mb-36">
              Herzliya, Israel
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="font-lato mt-8 md:mt-1 md:text-left md:col-span-0">
          <div>
            <p className="text-xl ">Israel 972-2-500-9450</p>
            <p className="mb-8 text-xl md:py-1 md:mb-0">US 1-646-506-9450</p>
            <h1 className="text-xl md:text-[22px] lg:text-[18px] text-red-500 font-sans font-light">
              info@exigentcap.com
            </h1>
          </div>
          <div className="mt-1 pb-24 text-left space-x-3 mx-auto items-center md:mt-0 hidden md:flex">
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
          <Link
            href="tel:info@exigentcapitalgroup.com"
            className="mr-3 group relative"
          >
            <Image
              src="/assets/Phone Icon.png"
              alt="Phone Icon"
              width={16}
              height={16}
              className=""
            />
          </Link>
          <Link
            href="mailto:info@exigentcapitalgroup.com"
            className="mr-3"
          >
            <Image
              src="/assets/Location Icon.png"
              alt="Location Icon"
              width={16}
              height={16}
              className=""
            />
          </Link>
        </div>
        </div>

        {/* Social and Contact Icons */}
                {/* Social and Contact Icons */}
                <div className="mt-1 pb-24 flex flex-wrap justify-center space-x-3 mx-auto items-center text-center md:mt-0 md:hidden">
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
          <Link
            href="tel:info@exigentcapitalgroup.com"
            className="mr-3 group relative"
          >
            <Image
              src="/assets/Phone Icon.png"
              alt="Phone Icon"
              width={16}
              height={16}
              className=""
            />
          </Link>
          <Link
            href="mailto:info@exigentcapitalgroup.com"
            className="mr-3"
          >
            <Image
              src="/assets/Location Icon.png"
              alt="Location Icon"
              width={16}
              height={16}
              className=""
            />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Contact;

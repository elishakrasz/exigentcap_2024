import Image from "next/image";
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
export default function About() {
  return (
    <main className="px-12 py-16 min-h-screen flex items-center justify-center mx-auto max-w-6xl sm:py-12 md:py-16 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 md:px-4">
      <div className="lg:hidden">
            <h2 className="text-6xl font-bodoni md:text-6xl font-normal text-center lg:text-left lg:text-5xl">About</h2>
            <div className="h-1 w-14 md:w-16 bg-red-500 rounded mt-2 md:mt-4 mx-auto lg:mx-0"></div>
          </div>
        <div className="text-center md:col-span-1 mt-8">
          <h1 className="sr-only">About Exigent</h1>
          <p  className={`font-bodoni inline px-1 mt-4 text-[44px] lg:text-4xl tracking-wider `}>
            e
            <span className="inline-block align-baseline">
              <Image src="/assets/small-x.svg" alt="" width={12} height={12} className="w-4 lg:w-4 mx-1"/>
            </span>
            igent <span className="font-lato font-light text-2xl lg:text-xl normal-case">adjective</span>
          </p>
          <p className="font-lato mt-2 text-lg font-light lg:text-lg">
            ex
            <span className="text-red-500">-</span>i
            <span className="text-red-500">-</span>gent{' '}
            <span className="text-red-500">|</span> /ˈekzəjənt/ <br />
            pressing; demanding; requiring urgent attention.
          </p>
          <Image
            src="/assets/map.svg"
            alt="Global presence map"
            width={340}
            height={340}
            className="mt-8 mx-auto md:md:w-[420px]"
          />
        </div>
        <section className="flex flex-col items-center sm:px-8 md:items-start md:mt-6 md:col-span-1 md:max-w-[580px] lg:max-w-[580px]">
        <div className="hidden lg:block lg:text-left ">
            <h2 className="font-bodoni text-4xl font-normal text-center md:text-left lg:text-6xl lg:text-left">About</h2>
            <div className="h-1 w-16 md:w-32 lg:mt-4 md:mx-auto bg-red-500 rounded mt-2 mx-auto lg:text-left"></div>
          </div>
          <p className="font-lato text-lg font-light sm:max-w-[540px] text-left md:text-lg lg:mt-16 lg:leading-7 text-gray-600 mt-16 md:mt-6 max-w-xl leading-relaxed md:text-left lg:text-base">
            Founded in 2009 during the depths of the financial crisis. Driven by relationships, core values and a strong work ethic. Led by a team of senior executives with robust experience and expertise.<br />
            Deploy a thesis driven approach to generate ideas and provide timely products and solutions. Ability to leverage a remarkable relationship network on behalf of our clients.
          </p>
          
          <Link
            href="/contact"
            className="mt-8 lg:mt-16 inline-block mx-auto text-lg  rounded-full border px-6 py-1 border-gray-400 hover:bg-[#F90002] hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </main>
  );
}







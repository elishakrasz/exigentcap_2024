import { Bodoni_Moda, Lato } from 'next/font/google';
import Image from 'next/image';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  display: 'swap',
});

const lato = Lato({
  weight: ['300', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const StrategicAdvisors = () => {
  return (
    <div className="mt-24 max-w-[85%] text-center mx-auto justify-items-center sm:max-w-[420px] md:max-w-3xl lg:max-w-5xl">
      <h3 className="font-bodoni text-4xl justify-self-center mb-6 md:text-5xl">
        Strategic Advisors & Domain Experts
      </h3>
      <div className="w-24 mx-auto justify-self-center mb-8 h-[3px] md:w-[160px] bg-red-500 rounded"></div>

      <div className="mt-8 max-w-[300px] mx-auto md:max-w-3xl md:px-4 md:grid md:grid-cols-8 lg:grid-cols-11 md:gap-4 lg:max-w-[980px]">
        {/* Sir General Nick Carter */}
        <div className="my-6 md:my-0 md:col-span-4 border border-gray-300 px-2 h-[400px]">
          <div className={bodoni.className}>
            <div className="mt-10 w-3/5 mx-auto">
              <Image
                src="/assets/team/Carter.png"
                alt="Sir General Nick Carter"
                width={200}
                height={200}
              />
            </div>
            <p className="text-3xl mt-2 font-normal">Sir General Nick Carter</p>
            <div className={lato.className}>
              <p className="text-[18px] font-light italic mt-2 text-gray-600">Strategic Advisory</p>
              <p className="text-[18px] font-light mb-12 text-gray-600">Aerospace & Defence</p>
            </div>
          </div>
        </div>

        {/* Dr. Elie David */}
        <div className="my-6 md:my-0 md:col-span-4 lg:col-span-3 border border-gray-300 px-2  h-[400px] lg:mb-4">
          <div className={bodoni.className}>
            <div className="mt-14 md:mt-10 md:full mx-auto w-[188px]">
              <Image
                src="/assets/team/David.png"
                alt="Dr. Elie David"
                width={188}
                height={188}
              />
            </div>
            <p className="text-3xl mt-4 font-normal">Dr. Elie David</p>
            <div className={lato.className}>
              <p className="text-[18px] font-light italic mt-2 lg:mt-9 text-gray-600">Strategic Advisory</p>
              <p className="text-[18px] font-light mb-12 text-gray-600">Artificial Intelligence</p>
            </div>
          </div>
        </div>

        {/* Hon. Malcolm Hoenlein */}
        <div className="md:col-span-8 md:mx-auto md:w-[375px] lg:w-full lg:col-span-4 md:mt-0 border border-gray-300 px-2 h-[400px]">
          <div className={bodoni.className}>
            <div className="mt-10 w-3/5 mx-auto">
              <Image
                src="/assets/team/Hoenlein.png"
                alt="Hon. Malcolm Hoenlein"
                width={200}
                height={200}
                className=''
              />
            </div>
            <p className="text-3xl mt-2 font-normal">Hon. Malcolm Hoenlein</p>
            <div className={lato.className}>
              <p className="text-[18px] font-light italic mt-2 text-gray-600">Global Ambassador</p>
              <p className="text-[18px] font-light mb-12 text-gray-600">Exigent Family Office</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicAdvisors;
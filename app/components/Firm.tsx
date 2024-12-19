import Image from "next/image";

const Firm = () => {
  return (
    <div className="text-center justify-items-center mx-auto mt-16">
      <h3 className="text-5xl font-bodoni mb-4 sm:text-5xl lg:text-6xl">Our Firm</h3>

      <div className="h-[3px] w-[80px] md:w-[120px] bg-red-500 rounded mx-auto mt-4"></div>

      <div className="text-xl md:text-xl md:max-w-[460px] font-lato font-light max-w-[360px] mx-auto sm:max-w-[380px] justify-self-center mt-6 ">
        <p className="text-center md:max-w-[560px] text-left">
          The Exigent symbol marks our striving for e
          <span>
              <Image
                src="/assets/small-x.svg"
                alt="x"
                width={16}
                height={16}
                className="w-4 mx-[1px] inline"
              />
          </span>
          cellence.
        {/* </p>
        <p className="text-center md:text-left"> */}
          {' '}It also signifies a destination of value.
        </p>
      </div>

      <div className="w-5/6 px-2 md:w-2/3 mt-12 mx-auto">
        <Image
          src="/assets/Asset12.png"
          alt="Map"
          width={500}
          height={300}
          className="mx-auto w-full md:w-[525px] lg:w-[580px] px-4"
        />
      </div>
    </div>
  );
};

export default Firm;

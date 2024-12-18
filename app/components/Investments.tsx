import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({
    weight: ["300", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
});

const Investments = () => {
    return (
        <div className="text-center mx-auto max-w-[460px] mt-24 md:max-w-5xl lg:mt-24 lg:max-w-6xl xl:max-w-6xl">
            <h3 className="font-bodoni text-5xl px-6 md:px-36 md:text-5xl lg:text-5xl">
                Notable Investments & Partnerships
            </h3>

            <div className="h-[3px] w-[120px] bg-red-500 rounded mx-auto mt-6"></div>

            <div className="mt-16 mx-auto text-base max-w-[330px] md:max-w-4xl md:px-5 md:mx-auto md:text-lg md:grid md:grid-cols-2 lg:grid-col-3 lg:flex lg:max-w-6xl space-x-5">
                {/* Investment 1 */}
                <div className="mt-6 text-base  lg:mt-0">
                    <div>
                        <Image
                            src="/assets/investments/XAI.png"
                            alt="xAI Logo"
                            width={64}
                            height={64}
                            className="mx-auto"
                        />
                    </div>
                    <div className="mt-6 tracking-wide text-[18px] md:mt-9 md:text-xl md:w-full md:px-2 lg:text-xl xl:text-xl xl:w-full xl:leading-7">
                        <h1 className={lato.className}>
                            <span className="font-light italic">
                                We are early backers of Elon Musk in his mission to build the
                                worlds leading artificial intelligence company, xAI
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Investment 2 */}
                <div className="mt-16 px-4 md:mt-8 lg:mt-0">
                    <div>
                        <Image
                            src="/assets/investments/HP.png"
                            alt="HighPost Capital Logo"
                            width={56}
                            height={56}
                            className="mx-auto"
                        />
                    </div>
                    <div className="mt-6 tracking-wide text-[18px] md:px-2 lg:mt-8 lg:w-[93%] xl:px-0 xl:leading-7">
                        <h1 className={lato.className}>
                            <span className="font-light md:text-xl lg:text-xl md:leading-7 xl:text-xl italic">
                                We are GP partners with Bezos and Moros families in HighPost
                                Capital and anchor investors in the firms consumer-focused
                                investment funds
                            </span>
                        </h1>
                    </div>
                </div>
                {/* Investment 3 */}
                <div className="mt-16 md:col-span-2 md:mx-auto lg:col-span-0 lg:mt-7 text-center">
                    <div className="md:mx-auto md:text-center lg:w-64 px-4">
                        <Image
                            src="/assets/investments/Insightec.png"
                            alt="Insightec Logo"
                            width={160}
                            height={100}
                            className="mx-auto"
                        />
                    </div>
                    <div className="mt-6 text-[18px] lg:mt-12 md:max-w-[400px] md:mx-auto xl:w-full">
                        <h1 className={lato.className}>
                            <span className="font-light md:text-xl md:leading-7 xl:text-xl italic">
                                We are board members and major shareholders in Insightec, the
                                world leader in incisionless brain surgery
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Investment 3 */}
                {/* <div className="mt-16  md:mx-auto md:items-center md:col-span-2 md:max-w-[380px] lg:col-span-0 lg:max-w-[400px] lg:mt-0">
          <div className="lg:w-64 px-4">
            <Image
              src="/assets/investments/Insightec.png"
              alt="Insightec Logo"
              width={160}
              height={100}
              className="mx-auto mt-6"
            />
          </div>
          <div className="mt-6 text-[18px] lg:mt-12">
            <h1 className={lato.className}>
              <span className="font-light md:text-lg lg:text-lg md:leading-6 xl:text-[18px] italic">
                We are board members and major shareholders in Insightec, the
                world leader in incisionless brain surgery
              </span>
            </h1>
          </div>
        </div> */}
            </div>
        </div>
    );
};

export default Investments;

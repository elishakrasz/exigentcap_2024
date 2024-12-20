import { urlForImage } from '../../sanity/lib/client';
import Image from 'next/image';
import { Bodoni_Moda, Lato } from 'next/font/google';
import { PortableText } from 'next-sanity';

const bodoni = Bodoni_Moda({
    subsets: ['latin'],
    display: 'swap',
});
const lato = Lato({
    weight: ['300', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

const CustomPortableText = ({ value }: { value: any }) => {
    return (
        <PortableText
            value={value}
            components={{
                block: {
                    normal: ({ children }) => (
                        <p className="text-[12px] md:text-sm font-lato text-gray-600 py-2">{children}</p>
                    ),
                },
                marks: {
                    strong: ({ children }) => (
                        <strong className="font-bold">{children}</strong>
                    ),
                    em: ({ children }) => (
                        <em className="italic text-gray-600">{children}</em>
                    ),
                },
                listItem: ({ children }) => (
                    <li className="text-[12px] md:text-xs text-gray-600">{children}</li>
                ),
            }}
        />
    );
};

const Card = ({ person }) => {
    return (
        <div className="flex justify-center items-center">
            <div className=" py-6 w-[400px] md:w-[640px] lg:w-[780px]">
                <div className="md:mx-auto md:grid md:grid-cols-4">
                    {/* Left Column */}
                    <div className="mx-auto md:col-span-1 flex justify-center items-center">
                        <div className="">
                            <div className={`font-bodoni mx-auto items-center`}>
                                <div className="flex justify-center items-center">
                                    <Image
                                        src={urlForImage(person.image).quality(100).url()}
                                        alt={person.name}
                                        width={225} // Increased by 50%
                                        height={225} // Increased by 50%
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <p className="text-3xl font-normal mt-1 text-center">{person.name}</p>
                                <div className="font-lato text-center">
                                    <p className="text-[18px] font-light italic text-gray-600 mt-2">
                                        {person.title}
                                    </p>
                                    <p className="text-[18px] font-light text-gray-600">
                                        {person.subtitle}
                                    </p>
                                    <div className="flex items-center justify-center my-2 px-6">
                                        {/* Add LinkedIn Section */}
                                        <div className="h-[2px] bg-gray-300 w-12"></div>
                                        <span className="mx-2">
                                            <Image
                                                alt="linkedin in"
                                                src="/assets/in.png"
                                                width={12}
                                                height={12}
                                                className="pb-2"
                                            />
                                        </span>
                                        <div className="h-[2px] bg-gray-300 w-12"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Right Column */}
                    <div className="max-w-[400px] px-4 mx-auto text-left md:mx-0 md:col-span-3 md:max-w-full md:h-64 md:px-10">
                        {/* Render description using PortableText */}
                        <div className="h-full md:h-76 overflow-auto">
                            {person.description?.map((block, index) => (
                                <CustomPortableText key={block._key || index} value={[block]} />
                            ))}
                        </div>
                        <div className="mt-6 flex flex-row space-x-4 overflow-x-auto">
                            {person.gallery.map((image, index) => (
                                <div key={index} className="image-container">
                                    <Image
                                        src={urlForImage(image.asset).url()}
                                        alt={image.caption || 'Gallery image'}
                                        width={400}
                                        height={250}
                                        layout="responsive"
                                        className="object-fill max-h-7 w-14"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

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
                    // Custom rendering for "normal" blocks
                    normal: ({ children }) => (
                        <p className="text-[12px] md:text-xs font-lato text-gray-600 py-2">{children}</p>
                        // <p className="text-sm text-gray-800 my-2">{children}</p>
                    ),
                },
                marks: {
                    // Custom rendering for "strong" (bold) text
                    strong: ({ children }) => (
                        <strong className="font-bold">{children}</strong>
                    ),
                    // Custom rendering for "em" (italic) text
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
        <div className="">
            <div className="md:mx-auto md:grid md:grid-cols-4 md:max-w-[680px] lg:max-w-[720px]">
                {/* Left Column */}
                <div className="mx-auto">
                    <div className="">
                        <div className={`font-bodoni w-48 mx-auto items-center`}>
                            <div className="">
                                <Image
                                    src={urlForImage(person.image).quality(100).url()}
                                    alt={person.name}
                                    width={150}
                                    height={150}
                                    className=""
                                />
                            </div>
                            <p className="text-xl font-normal mt-1">{person.name}</p>
                            <div className="font-lato">
                                <p className="text-[14px] font-light italic  text-gray-600 mt-2">
                                    {person.title}
                                </p>
                                <p className="text-[14px] font-light text-gray-600">
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
                <div className="max-w-[300px] mx-auto text-left md:mx-0 md:col-span-3 md:max-w-full md:h-48 md:px-10">
                    {/* Render description using PortableText */}
                    <div className="h-full md:h-74
           overflow-auto">
                        {person.description?.map((block, index) => (
                            <CustomPortableText key={block._key || index} value={[block]} />
                        ))}
                    </div>
                    <div className="mt-6 flex flex-row space-x-4">
                        {person.gallery.map((image, index) => (
                            <div key={index} className="image-container">
                                <Image
                                    src={urlForImage(image.asset).url()}
                                    alt={image.caption || 'Gallery image'}
                                    width={400}
                                    height={250}
                                    layout="responsive"
                                    className='object-fill max-h-7 w-14'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card
import Image from 'next/image';
export const tabs = [
    {
        title: "Product",
        value: "product",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Product Tab</p>
                <Image
                    src="/assets/pexels-xxss-is-back-777001.jpg"
                    alt="dummy image"
                    width="1000"
                    height="1000"
                    className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                />
            </div>
        ),
    },
    {
        title: "Services",
        value: "services",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Services tab</p>
                <Image
                    src="/assets/pexels-stephan-müller-1473215.jpg"
                    alt="dummy image"
                    width="1000"
                    height="1000"
                    className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                />
            </div>
        ),
    },
    {
        title: "Playground",
        value: "playground",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Playground tab</p>
                <Image
                    src="/assets/pexels-james-wheeler-417074.jpg"
                    alt="dummy image"
                    width="1000"
                    height="1000"
                    className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                />
            </div>
        ),
    },
    {
        title: "Content",
        value: "content",
        content: (
            <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                <p>Content tab</p>
                <Image
                    src="/assets/pexels-eberhard-grossgasteiger-443446.jpg"
                    alt="dummy image"
                    width="1000"
                    height="1000"
                    className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
                />
            </div>
        ),
    },
];


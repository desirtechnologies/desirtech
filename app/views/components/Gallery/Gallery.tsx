import type { GalleryProps } from "@typings/Gallery"


const Gallery = () => {
    return (
        <div>
            <section className="p-8 pb-0 font-mono font-medium">
                <div className="relative z-10 py-24 2xl:py-44 rounded-t-10xl">


                    <div className="container px-4 mx-auto">
                        <h2 className="mb-16 leading-tight xl:mb-28 font-heading text-9xl md:text-10xl xl:text-11xl">
                            Works
                        </h2>

                        <div className="px-5 py-6 mb-20 text-xl leading-7 xl:py-3 font-heading bg-gray-50 rounded-8xl">
                            <div className="md:grid md:grid-cols-2 xl:grid-cols-5 md:text-center xl:max-w-max xl:mx-auto">
                                <a className="block px-8 py-5 2xl:px-14 hover:opacity-70" href="#">
                                    Mobile Apps
                                </a>
                                <a
                                    className="block px-8 py-5 bg-white shadow-lg 2xl:px-14 rounded-5xl"
                                    href="#"
                                >
                                    Web Design
                                </a>
                                <a className="block px-8 py-5 2xl:px-14 hover:opacity-70" href="#">
                                    Commercial
                                </a>
                                <a className="block px-8 py-5 2xl:px-14 hover:opacity-70" href="#">
                                    Social media
                                </a>
                                <a className="block px-8 py-5 2xl:px-14 hover:opacity-70" href="#">
                                    UX Design
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap mb-20 -mx-4 xl:mb-36">
                            <div className="w-full px-4 mb-6 lg:w-6/12 lg:mb-0">
                                <div className="relative max-w-max" >
                                    <img
                                        src="uinel-assets/images/portfolio/portfolio5-glass.png"
                                        alt=""
                                    />
                                    <div className="h-32 bg-gray-50 bg-opacity-70 rounded-b-9xl" />
                                    <div className="absolute w-full px-2 bottom-12">
                                        <div className="px-6 py-12 bg-white shadow-md md:px-14 rounded-5xl">
                                            <a
                                                className="block mb-3 text-lg leading-5 text-purple-500 font-heading hover:text-purple-600"
                                                href="#"
                                            >
                                                XAOS LTD
                                            </a>
                                            <a
                                                className="text-3xl leading-normal font-heading xl:text-7xl hover:underline"
                                                href="#"
                                            >
                                                Xaos Redesign
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 mb-6 md:w-1/2 lg:w-3/12 md:mb-0">
                                <div className="relative mx-auto max-w-max">
                                    <img
                                        src="uinel-assets/images/portfolio/portfolio5-man.png"
                                        alt=""
                                    />
                                    <div className="h-32 bg-gray-50 bg-opacity-70 rounded-b-9xl" />
                                    <div className="absolute w-full px-2 bottom-12">
                                        <div className="px-6 py-12 bg-white md:px-14 rounded-5xl hadow-md">
                                            <a
                                                className="block mb-3 text-lg leading-5 text-purple-500 font-heading hover:text-purple-600"
                                                href="#"
                                            >
                                                ASOS LTD
                                            </a>
                                            <a
                                                className="text-3xl leading-normal font-heading xl:text-7xl hover:underline"
                                                href="#"
                                            >
                                                New site for asos
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 lg:w-3/12">
                                <div className="relative mx-auto max-w-max" >
                                    <img
                                        src="uinel-assets/images/portfolio/portfolio5-dark.png"
                                        alt=""
                                    />
                                    <div className="h-32 bg-gray-50 bg-opacity-70 rounded-b-9xl" />
                                    <div className="absolute w-full px-2 bottom-12">
                                        <div className="px-6 py-12 bg-white md:px-14 rounded-5xl hadow-md">
                                            <a
                                                className="block mb-3 text-lg leading-5 text-purple-500 font-heading hover:text-purple-600"
                                                href="#"
                                            >
                                                UNF CO
                                            </a>
                                            <a
                                                className="text-3xl leading-normal font-heading xl:text-7xl hover:underline"
                                                href="#"
                                            >
                                                New site for UNF
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mx-auto max-w-max">
                            <a className="mr-8 md:mr-48" href="#">
                                <img
                                    src="uinel-assets/elements/portfolio/arrow-left-black.svg"
                                    alt=""
                                />
                            </a>
                            <div className="flex h-1 mx-auto bg-gray-100 w-44">
                                <a className="w-1/3 bg-indigo-500" href="#" />
                                <a className="w-1/2 bg-transparent" href="#" />
                            </div>
                            <a className="ml-8 md:ml-48" href="#">
                                <img
                                    src="uinel-assets/elements/portfolio/arrow-right-black.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                    </div>



                </div>
            </section>
        </div>

    )
}

export default Gallery
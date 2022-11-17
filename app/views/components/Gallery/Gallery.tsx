const Gallery = () => {
    return (
        <div>
            <section className="p-8 pb-0 font-medium bg-blueGray-100">
                <div className="relative py-24 2xl:py-44 bg-white z-10 rounded-t-10xl">
                    <div className="container px-4 mx-auto">
                        <h2 className="mb-16 xl:mb-28 font-heading text-9xl md:text-10xl xl:text-11xl leading-tight">
                            Works
                        </h2>
                        <div className="py-6 px-5 mb-20 xl:py-3 font-heading text-xl leading-7 bg-gray-50 rounded-8xl">
                            <div className="md:grid md:grid-cols-2 xl:grid-cols-5 md:text-center xl:max-w-max xl:mx-auto">
                                <a className="block py-5 px-8 2xl:px-14 hover:opacity-70" href="#">
                                    Mobile Apps
                                </a>
                                <a
                                    className="block bg-white py-5 2xl:px-14 rounded-5xl px-8 shadow-lg"
                                    href="#"
                                >
                                    Web Design
                                </a>
                                <a className="block py-5 px-8 2xl:px-14 hover:opacity-70" href="#">
                                    Commercial
                                </a>
                                <a className="block py-5 px-8 2xl:px-14 hover:opacity-70" href="#">
                                    Social media
                                </a>
                                <a className="block py-5 px-8 2xl:px-14 hover:opacity-70" href="#">
                                    UX Design
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-4 mb-20 xl:mb-36">
                            <div className="w-full lg:w-6/12 px-4 mb-6 lg:mb-0">
                                <div className="relative max-w-max" >
                                    <img
                                        src="uinel-assets/images/portfolio/portfolio5-glass.png"
                                        alt=""
                                    />
                                    <div className="h-32 bg-gray-50 bg-opacity-70 rounded-b-9xl" />
                                    <div className="absolute bottom-12 w-full px-2">
                                        <div className="py-12 px-6 md:px-14 bg-white rounded-5xl shadow-md">
                                            <a
                                                className="block mb-3 text-lg font-heading leading-5 text-purple-500 hover:text-purple-600"
                                                href="#"
                                            >
                                                XAOS LTD
                                            </a>
                                            <a
                                                className="font-heading leading-normal text-3xl xl:text-7xl hover:underline"
                                                href="#"
                                            >
                                                Xaos Redesign
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-6 md:mb-0">
                                <div className="relative mx-auto max-w-max">
                                    <img
                                        src="uinel-assets/images/portfolio/portfolio5-man.png"
                                        alt=""
                                    />
                                    <div className="h-32 bg-gray-50 bg-opacity-70 rounded-b-9xl" />
                                    <div className="absolute bottom-12 w-full px-2">
                                        <div className="py-12 px-6 md:px-14 bg-white rounded-5xl hadow-md">
                                            <a
                                                className="block mb-3 text-lg font-heading leading-5 text-purple-500 hover:text-purple-600"
                                                href="#"
                                            >
                                                ASOS LTD
                                            </a>
                                            <a
                                                className="font-heading leading-normal text-3xl xl:text-7xl hover:underline"
                                                href="#"
                                            >
                                                New site for asos
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-3/12 px-4">
                                <div className="relative mx-auto max-w-max" >
                                    <img
                                        src="uinel-assets/images/portfolio/portfolio5-dark.png"
                                        alt=""
                                    />
                                    <div className="h-32 bg-gray-50 bg-opacity-70 rounded-b-9xl" />
                                    <div className="absolute bottom-12 w-full px-2">
                                        <div className="py-12 px-6 md:px-14 bg-white rounded-5xl hadow-md">
                                            <a
                                                className="block mb-3 text-lg font-heading leading-5 text-purple-500 hover:text-purple-600"
                                                href="#"
                                            >
                                                UNF CO
                                            </a>
                                            <a
                                                className="font-heading leading-normal text-3xl xl:text-7xl hover:underline"
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
                            <div className="flex w-44 h-1 bg-gray-100 mx-auto">
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
            <div className="h-24 bg-yellow-500 -mt-16" />
        </div>

    )
}

export default Gallery
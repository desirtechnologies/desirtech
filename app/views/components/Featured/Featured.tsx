const Featured = () => {
    return (
        <section className="font-medium bg-blueGray-100 py-24 2xl:py-44 overflow-hidden rounded-b-10xl">
            <div className="container px-4 mx-auto">
                <span className="block mb-9 uppercase tracking-widest text-xs leading-4 text-gray-300">
                    Discover out blog
                </span>
                <h2 className="mb-36 md:mb-20 xl:mb-32 font-heading text-9xl md:text-10xl xl:text-11xl leading-tight">
                    Latest blog
                </h2>
                <div className="flex flex-wrap items-start -mx-4">
                    <div className="relative md:-mt-0 w-full lg:w-2/3 px-4 mb-52 md:mb-12 -mt-20">
                        <img
                            className="w-full"
                            src="uinel-assets/images/blog/blog2-learning.png"
                            alt=""
                        />
                        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-40 md:bottom-12 px-6 w-full">
                            <div className="py-12 px-6 md:px-14 bg-white z-10 rounded-5xl shadow-md">
                                <div className="flex items-center mb-4">
                                    <a
                                        className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600"
                                        href="#"
                                    >
                                        New in Uinel
                                    </a>
                                    <div className="mx-4 w-px h-6 bg-gray-50" />
                                    <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                                        2 june
                                    </p>
                                </div>
                                <h3 className="mb-4 font-heading leading-normal text-3xl xl:text-7xl">
                                    Get inspired from the all designers
                                </h3>
                                <p className="xl:max-w-md mb-4 xl:mb-0 font-heading font-normal text-base leading-8 text-gray-500">
                                    I haretra neque non mi aliquam, finibus hart bibendum molestie.
                                    Vestibulum suscipit sagittis dignissim mauris.
                                </p>
                                <button
                                    className="block py-5 px-10 md:ml-auto md:w-auto w-full text-xl leading-6 text-white font-medium tracking-tighter font-heading bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                    type="button"
                                >
                                    Learn more
                                </button>
                            </div>
                        </div>
                        <div className="h-40 xl:h-80 bg-gray-50 rounded-b-9xl" />
                    </div>
                    <div className="relative w-full lg:w-1/3 px-4">
                        <div className="flex flex-wrap -mx-4">
                            <div className="relative w-full md:w-1/2 lg:w-full px-4 mb-12 md:mb-0 lg:mb-12">
                                <img
                                    className="w-full"
                                    src="uinel-assets/images/blog/blog2-woman.png"
                                    alt=""
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-7 w-full px-6">
                                    <div className="py-12 px-6 md:px-14 bg-white rounded-5xl shadow-md">
                                        <div className="flex items-center mb-4">
                                            <a
                                                className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600"
                                                href="#"
                                            >
                                                UX Design
                                            </a>
                                            <div className="mx-4 w-px h-6 bg-gray-50" />
                                            <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                                                1 june
                                            </p>
                                        </div>
                                        <a className="inline-block hover:underline" href="#">
                                            <h3 className="font-heading leading-normal text-3xl xl:text-7xl">
                                                Get inspired from the all designers
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="h-40 bg-gray-50 rounded-b-9xl" />
                            </div>
                            <div className="relative w-full md:w-1/2 lg:w-full px-4">
                                <img
                                    className="w-full"
                                    src="uinel-assets/images/blog/blog2-travel.png"
                                    alt=""
                                />
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-7 w-full px-6">
                                    <div className="py-12 px-6 md:px-14 bg-white rounded-5xl shadow-md">
                                        <div className="flex items-center mb-4">
                                            <a
                                                className="inline-block font-heading text-lg leading-5 text-purple-500 hover:text-purple-600"
                                                href="#"
                                            >
                                                Community
                                            </a>
                                            <div className="mx-4 w-px h-6 bg-gray-50" />
                                            <p className="relative top-px uppercase tracking-widest text-xs text-gray-300">
                                                1 june
                                            </p>
                                        </div>
                                        <a className="inline-block hover:underline" href="#">
                                            <h3 className="font-heading leading-normal text-3xl xl:text-7xl">
                                                Get inspired from the all designers
                                            </h3>
                                        </a>
                                    </div>
                                </div>
                                <div className="h-40 bg-gray-50 rounded-b-9xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Featured
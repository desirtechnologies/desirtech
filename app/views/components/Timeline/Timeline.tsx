const Timeline = () => {
    return (
        <section className="py-24 overflow-hidden font-mono font-medium 2xl:pt-52 ">
            <div className="container px-4 mx-auto">
                <span className="block text-xs leading-4 tracking-widest text-center text-gray-300 uppercase mb-9">
                    Discover out blog
                </span>
                <h2 className="mb-20 leading-tight text-center xl:mb-32 text-9xl md:text-10xl xl:text-11xl">
                    Latest blog
                </h2>
                <div className="lg:relative lg:grid lg:grid-cols-12 lg:top-96 lg:-mt-96">
                    <div className="mb-8 lg:col-start-1 lg:col-end-6 lg:mb-0">
                        <div className="relative mx-auto mb-8 lg:mb-20 max-w-max">
                            <img src="uinel-assets/images/blog/blog4-learning.png" alt="" />
                            <div className="absolute w-full px-2 transform -translate-x-1/2 left-1/2 bottom-12">
                                <div className="px-6 py-12 bg-white shadow-md md:px-14 rounded-5xl">
                                    <div className="flex items-center mb-4">
                                        <a
                                            className="inline-block text-lg leading-5 text-purple-500 font-heading hover:text-purple-600"
                                            href="#"
                                        >
                                            New in Uinel
                                        </a>
                                        <div className="w-px h-6 mx-4 bg-gray-50" />
                                        <p className="relative text-xs tracking-widest text-gray-300 uppercase top-px">
                                            2 june
                                        </p>
                                    </div>
                                    <a className="inline-block hover:underline" href="#">
                                        <h3 className="text-3xl leading-normal font-heading xl:text-7xl">
                                            Get inspired from the all designers
                                        </h3>
                                    </a>
                                </div>
                            </div>
                            <div className="h-48 bg-gray-50 rounded-b-9xl" />
                        </div>
                        <div className="relative mx-auto mb-8 lg:mb-20 max-w-max">
                            <img src="uinel-assets/images/blog/blog4-meeting.png" alt="" />
                            <div className="absolute w-full px-2 transform -translate-x-1/2 left-1/2 bottom-12">
                                <div className="px-6 py-12 bg-white shadow-md md:px-14 rounded-5xl">
                                    <div className="flex items-center mb-4">
                                        <a
                                            className="inline-block text-lg leading-5 text-purple-500 font-heading hover:text-purple-600"
                                            href="#"
                                        >
                                            New in Uinel
                                        </a>
                                        <div className="w-px h-6 mx-4 bg-gray-50" />
                                        <p className="relative text-xs tracking-widest text-gray-300 uppercase top-px">
                                            2 june
                                        </p>
                                    </div>
                                    <a className="inline-block hover:underline" href="#">
                                        <h3 className="text-3xl leading-normal font-heading xl:text-7xl">
                                            Get inspired from the all designers
                                        </h3>
                                    </a>
                                </div>
                            </div>
                            <div className="h-48 bg-gray-50 rounded-b-9xl" />
                        </div>
                    </div>
                    <div className="lg:col-start-6 lg:col-end-8 lg:relative">
                        <img
                            className="absolute z-10 hidden ml-px transform -translate-x-1/2 left-1/2 lg:block"
                            src="uinel-assets/elements/blog/circle.svg"
                            alt=""
                        />
                        <img
                            className="absolute z-10 hidden ml-px transform -translate-x-1/2 left-1/2 top-52 lg:block"
                            src="uinel-assets/elements/blog/circle.svg"
                            alt=""
                        />
                        <img
                            className="absolute z-10 hidden mb-48 ml-px transform -translate-x-1/2 left-1/2 bottom-96 lg:block"
                            src="uinel-assets/elements/blog/circle.svg"
                            alt=""
                        />
                        <div className="hidden w-1 h-full bg-blue-400 lg:absolute lg:left-1/2 lg:transform lg:-transform-x-1/2 lg:block" />
                    </div>
                    <div className="lg:col-start-8 lg:col-end-13 lg:mt-52">
                        <div className="relative mx-auto max-w-max">
                            <img src="uinel-assets/images/blog/blog4-meeting.png" alt="" />
                            <div className="absolute w-full px-2 transform -translate-x-1/2 left-1/2 bottom-12">
                                <div className="px-6 py-12 bg-white shadow-md md:px-14 rounded-5xl">
                                    <div className="flex items-center mb-4">
                                        <a
                                            className="inline-block text-lg leading-5 text-purple-500 font-heading hover:text-purple-600"
                                            href="#"
                                        >
                                            Community
                                        </a>
                                        <div className="w-px h-6 mx-4 bg-gray-50" />
                                        <p className="relative text-xs tracking-widest text-gray-300 uppercase top-px">
                                            2 june
                                        </p>
                                    </div>
                                    <a className="inline-block hover:underline" href="#">
                                        <h3 className="text-3xl leading-normal font-heading xl:text-7xl">
                                            Get inspired from the all designers
                                        </h3>
                                    </a>
                                </div>
                            </div>
                            <div className="h-48 bg-gray-50 rounded-b-9xl" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Timeline
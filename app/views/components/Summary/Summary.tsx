const Summary = () => {
    return (
        <section className="py-24 font-mono font-medium 2xl:pt-64 2xl:pb-48">
            <div className="container px-4 mx-auto">
                <span className="block text-xs leading-4 tracking-widest uppercase mb-9">
                    The Most popular
                </span>
                <h2 className="mb-20 leading-tight xl:mb-24 font-heading text-9xl md:text-10xl xl:text-11xl">
                    FAQ’s
                </h2>
                <div className="relative flex justify-between mb-16 md:hidden">
                    <div className="relative z-10 w-12 h-12 bg-white rounded-full">
                        <span className="absolute text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            1
                        </span>
                    </div>
                    <div className="relative z-10 w-12 h-12 bg-white rounded-full">
                        <span className="absolute text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            2
                        </span>
                    </div>
                    <div className="relative z-10 w-12 h-12 bg-white rounded-full">
                        <span className="absolute text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            3
                        </span>
                    </div>
                    <div className="absolute w-full bg-black top-1/2" style={{ height: 2 }} />
                </div>
                <div className="flex mx-auto max-w-max">
                    <div className="relative hidden mr-12 md:top-12 md:flex md:flex-col">
                        <div className="relative z-10 w-12 h-12 bg-white rounded-full mb-44 lg:mb-32">
                            <span className="absolute text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                                1
                            </span>
                        </div>
                        <div className="relative z-10 w-12 h-12 mb-20 bg-white rounded-full lg:mb-11">
                            <span className="absolute text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                                2
                            </span>
                        </div>
                        <div className="relative z-10 w-12 h-12 bg-white rounded-full">
                            <span className="absolute text-2xl font-bold transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                                3
                            </span>
                        </div>
                        <div
                            className="absolute transform bg-black top-4 left-1/2 -transform-x-1/2 h-96 lg:h-72"
                            style={{ width: 2 }}
                        />
                    </div>
                    <div className="max-w-max">
                        <a
                            className="flex items-start justify-between px-8 mb-12 bg-white md:px-14 py-9 max-w-max rounded-3xl"
                            href="#"
                        >
                            <div>
                                <h2 className="mb-5 text-3xl font-heading md:text-5xl xl:text-8xl leading-tighter">
                                    How should i develop my workflow over time?
                                </h2>
                                <p className="text-lg font-normal leading-6">
                                    The nulla commodo, commodo eros a, tristique lectus.
                                </p>
                            </div>
                            <img
                                className="relative ml-10 top-7"
                                src="uinel-assets/elements/faqs/arrow-down-black.svg"
                                alt=""
                            />
                        </a>
                        <a
                            className="flex items-start justify-between px-8 md:px-14 mb-9 md:mb-16 xl:mb-9 max-w-max"
                            href="#"
                        >
                            <div>
                                <h2 className="text-3xl font-heading md:text-5xl xl:text-8xl leading-tighter">
                                    How often should the app be updated?
                                </h2>
                                <p className="hidden text-lg font-normal leading-6">
                                    The nulla commodo, commodo eros a, tristique lectus.
                                </p>
                            </div>
                            <img
                                className="relative ml-10 top-7"
                                src="uinel-assets/elements/faqs/arrow-down-black.svg"
                                alt=""
                            />
                        </a>
                        <a
                            className="flex items-start justify-between px-8 mb-28 md:px-14 max-w-max"
                            href="#"
                        >
                            <div>
                                <h2 className="text-3xl font-heading md:text-5xl xl:text-8xl leading-tighter">
                                    Can i pay by credit card?
                                </h2>
                                <p className="hidden text-lg font-normal leading-6">
                                    The nulla commodo, commodo eros a, tristique lectus.
                                </p>
                            </div>
                            <img
                                className="relative ml-10 top-7"
                                src="uinel-assets/elements/faqs/arrow-down-black.svg"
                                alt=""
                            />
                        </a>
                        <div className="flex justify-center">
                            <a
                                className="inline-block px-10 py-5 text-xl font-medium leading-6 tracking-tighter text-white bg-blue-500 font-heading hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                            >
                                Show more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Summary
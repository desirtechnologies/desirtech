const Contact = () => {
    return (
        <section>
            <div className="pt-24 pb-12 font-mono 2xl:pt-40 rounded-b-4xl">
                <div className="container px-4 mx-auto">
                    <div className="text-center">
                        <h2 className="mb-12 font-medium leading-tight text-9xl md:text-10xl xl:text-11xl font-heading">
                            Have a question?
                        </h2>
                        <p className="mb-20 text-lg text-darkBlueGray-400">
                            Sed porttitor turpis sit amet malesuada porta lobortis.
                        </p>
                        <div className="flex flex-wrap items-center">
                            <div className="w-full pb-4 mb-8 border-b border-gray-200 border-opacity-50 lg:w-1/3 lg:mb-0 lg:pb-0 md:px-8 xl:px-16 lg:border-b-0 lg:border-r">
                                <div className="flex items-center">
                                    <img
                                        className="mr-6 h-14"
                                        src="uinel-assets/images/contacts/icon1.svg"
                                        alt=""
                                    />
                                    <a className="text-xl font-medium lg:text-3xl" href="#">
                                        + 44 1447881709
                                    </a>
                                </div>
                            </div>
                            <div className="w-full pb-4 mb-8 border-b border-gray-200 border-opacity-50 lg:w-1/3 lg:mb-0 lg:pb-0 md:px-8 xl:px-16 lg:border-b-0 lg:border-r">
                                <div className="flex items-center">
                                    <img
                                        className="mr-6 h-14"
                                        src="uinel-assets/images/contacts/icon3.svg"
                                        alt=""
                                    />
                                    <a className="text-xl font-medium lg:text-3xl" href="#">
                                        help@uinel
                                    </a>
                                </div>
                            </div>
                            <div className="w-full pb-8 lg:w-1/3 lg:pb-0 md:px-8 xl:px-16">
                                <div className="flex items-center">
                                    <img
                                        className="mr-6 h-14"
                                        src="uinel-assets/images/contacts/icon2.svg"
                                        alt=""
                                    />
                                    <a className="text-xl font-medium lg:text-3xl" href="#">
                                        uinelchat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-6 pt-20 pb-24 mx-auto">
                <div className="flex flex-wrap items-center justify-center">
                    <a
                        className="inline-block w-full px-10 py-5 mb-6 text-xl font-medium leading-6 tracking-tighter text-center text-white bg-blue-500 md:mb-0 md:mr-12 md:w-auto font-heading hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                        type="button"
                    >
                        Book now
                    </a>
                    <a
                        className="inline-flex items-center pb-2 text-xl font-bold leading-6 tracking-tight text-green-600 border-b border-green-600 hover:text-green-700 hover:border-green-700"
                        href="#"
                    >
                        <span className="mr-3">More information</span>
                        <svg
                            width={16}
                            height={13}
                            viewBox="0 0 16 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.8 1L15 7H1"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M11 12L15 7"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>


    )
}

export default Contact
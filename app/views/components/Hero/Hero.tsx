const Hero = () => {

    return (
        <section className="pb-16 overflow-hidden font-mono text-white 2xl:pb-20">
            <div className="relative bg-blueGray-100 rounded-b-10xl">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center pt-16 pb-20 -mx-4">
                        <div className="w-full px-4 mb-24 lg:w-1/2 lg:mb-0">
                            <span className="block text-sm font-medium tracking-widest text-gray-300 uppercase mb-9">
                                Better communication and work
                            </span>
                            <h1 className="max-w-xl mb-16 font-medium leading-none font-heading text-9xl md:text-10xl xl:text-13xl">
                                <span>Desir Tech</span>
                                <span className="relative inline-block">
                                    <span className="absolute inset-0 xl:-left-8 xl:-right-8">
                                        <img
                                            className="absolute inset-0 w-full max-w-non"
                                            src="uinel-assets/elements/heroes/lines-blue1.svg"
                                            alt=""
                                        />
                                        <img
                                            className="absolute inset-0 w-full mt-1 lg:mt-2 xl:ml-4 max-w-none"
                                            src="uinel-assets/elements/heroes/lines-blue2.svg"
                                            alt=""
                                        />
                                    </span>
                                    <span className="relative z-10"></span>
                                </span>
                            </h1>
                            <p className="mb-16 text-xl leading-snug lg:mb-24 text-darkBlueGray-400">
                                Fusce sem lectus, pretium at pellentesque a sagittis non.
                            </p>
                            <div className="flex flex-col sm:flex-row">
                                <input
                                    className="px-10 py-5 text-xl outline-none text-darkBlueGray-400 placeholder-darkBlueGray-400 rounded-xl"
                                    type="text"
                                    placeholder="Enter email"
                                />
                                <button className="px-10 py-5 mt-3 text-xl font-medium tracking-tighter text-center text-white bg-blue-500 sm:mt-0 sm:-ml-4 font-heading focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl">
                                    Get started
                                </button>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2">
                            <div className="relative max-w-sm mx-auto xl:max-w-none">
                                <img
                                    className="relative z-10 xl:max-w-max"
                                    src="uinel-assets/images/heroes/widget.png"
                                    alt=""
                                />
                                <img
                                    className="absolute -top-3 -left-24 xl:max-w-max"
                                    src="uinel-assets/images/heroes/elipse.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Hero
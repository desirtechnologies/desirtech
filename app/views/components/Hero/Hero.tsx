const Hero = () => {

    return (
        <section className="pb-16 2xl:pb-20 overflow-hidden text-white">
            <div className="relative bg-blueGray-100 rounded-b-10xl">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-wrap items-center -mx-4 pt-16 pb-20">
                        <div className="w-full lg:w-1/2 px-4 mb-24 lg:mb-0">
                            <span className="block mb-9 font-medium tracking-widest uppercase text-sm text-gray-300">
                                Better communication and work
                            </span>
                            <h1 className="max-w-xl mb-16 font-heading font-medium text-9xl md:text-10xl xl:text-13xl leading-none">
                                <span>A thousand tools for</span>
                                <span className="relative inline-block">
                                    <span className="absolute inset-0 xl:-left-8 xl:-right-8">
                                        <img
                                            className="absolute inset-0 w-full max-w-non"
                                            src="uinel-assets/elements/heroes/lines-blue1.svg"
                                            alt=""
                                        />
                                        <img
                                            className="absolute inset-0 mt-1 lg:mt-2 xl:ml-4 w-full max-w-none"
                                            src="uinel-assets/elements/heroes/lines-blue2.svg"
                                            alt=""
                                        />
                                    </span>
                                    <span className="relative z-10">design</span>
                                </span>
                            </h1>
                            <p className="mb-16 lg:mb-24 text-xl text-darkBlueGray-400 leading-snug">
                                Fusce sem lectus, pretium at pellentesque a sagittis non.
                            </p>
                            <div className="flex flex-col sm:flex-row">
                                <input
                                    className="py-5 px-10 text-xl text-darkBlueGray-400 placeholder-darkBlueGray-400 outline-none rounded-xl"
                                    type="text"
                                    placeholder="Enter email"
                                />
                                <button className="py-5 px-10 mt-3 sm:mt-0 sm:-ml-4 font-heading font-medium tracking-tighter text-xl text-white text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl">
                                    Get started
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="relative max-w-sm xl:max-w-none mx-auto">
                                <img
                                    className="relative xl:max-w-max z-10"
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
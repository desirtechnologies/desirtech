const DataGrid = () => {
    return (
        <section>
            <div className="font-medium py-24 2xl:py-44 bg-blueGray-100">
                <div className="container px-4 mx-auto">
                    <h2 className="font-heading text-9xl md:text-10xl xl:text-11xl leading-tight mb-12 text-center">
                        Select software
                    </h2>
                    <p className="text-lg leading-6 font-normal text-darkBlueGray-400 mb-20 text-center">
                        Sed porttitor turpis sit amet malesuada porta vivamus lobortis.
                    </p>
                    <div className="md:grid md:grid-cols-2 md:gap-x-16 gap-8 max-w-6xl mx-auto">
                        <div className="p-8 md:p-14 mb-8 md:mb-0 shadow-2xl rounded-5xl bg-white">
                            <img
                                className="mb-9 w-10 h-10"
                                src="uinel-assets/elements/pricing/circle10-small.svg"
                                alt=""
                            />
                            <div className="flex flex-wrap items-center justify-between -mb-4">
                                <h3 className="mb-4 font-heading text-7xl leading-10 tracking-tight">
                                    Beginner
                                </h3>
                                <div className="mb-4 font-heading pl-4 text-3xl flex items-center leading-5 tracking-tighter">
                                    <span className="text-base mr-2 -mb-1">$</span>
                                    <span>8.80</span>
                                </div>
                            </div>
                            <p className="font-normal font-heading text-base leading-loose text-darkBlueGray-400 mt-6 mb-10">
                                I haretra neque non me, finibus hart bibendum molestie.
                            </p>
                            <a
                                className="block py-3 px-10 md:mr-auto w-full md:max-w-max text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                            >
                                Buy now
                            </a>
                        </div>
                        <div className="p-8 md:p-14 mb-8 md:mb-0 shadow-2xl rounded-5xl bg-white">
                            <img
                                className="mb-9 w-10 h-10"
                                src="uinel-assets/elements/pricing/circle11-small.svg"
                                alt=""
                            />
                            <div className="flex flex-wrap items-center justify-between -mb-4">
                                <h3 className="mb-4 font-heading text-7xl leading-10 tracking-tight">
                                    Students
                                </h3>
                                <div className="mb-4 font-heading pl-4 text-3xl flex items-center leading-5 tracking-tighter">
                                    <span className="text-base mr-2 -mb-1">$</span>
                                    <span>15.90</span>
                                </div>
                            </div>
                            <p className="font-normal font-heading text-base leading-loose text-darkBlueGray-400 mt-6 mb-10">
                                I haretra neque non me, finibus hart bibendum molestie.
                            </p>
                            <a
                                className="block py-3 px-10 md:mr-auto w-full md:max-w-max text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                            >
                                Buy now
                            </a>
                        </div>
                        <div className="p-8 md:p-14 mb-8 md:mb-0 shadow-2xl rounded-5xl bg-white">
                            <img
                                className="mb-9 w-10 h-10"
                                src="uinel-assets/elements/pricing/circle12-small.svg"
                                alt=""
                            />
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-heading text-7xl leading-10 tracking-tight">
                                    Team
                                </h3>
                                <div className="font-heading pl-4 text-3xl flex items-center leading-5 tracking-tighter">
                                    <span className="text-base mr-2 -mb-1">$</span>
                                    <span>21.90</span>
                                </div>
                            </div>
                            <p className="font-normal font-heading text-base leading-loose text-darkBlueGray-400 mb-10">
                                I haretra neque non me, finibus hart bibendum molestie.
                            </p>
                            <a
                                className="block py-3 px-10 md:mr-auto w-full md:max-w-max text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                            >
                                Buy now
                            </a>
                        </div>
                        <div className="p-8 md:p-14 shadow-2xl rounded-5xl bg-white">
                            <img
                                className="mb-9 w-10 h-10"
                                src="uinel-assets/elements/pricing/circle13-small.svg"
                                alt=""
                            />
                            <div className="flex items-center justify-between -mb-4">
                                <h3 className="mb-4 font-heading text-7xl leading-10 tracking-tight">
                                    Business
                                </h3>
                                <div className="mb-4 font-heading pl-4 text-3xl flex items-center leading-5 tracking-tighter">
                                    <span className="text-base mr-2 -mb-1">$</span>
                                    <span>29.90</span>
                                </div>
                            </div>
                            <p className="font-normal font-heading text-base leading-loose text-darkBlueGray-400 mt-6 mb-10">
                                I haretra neque non me, finibus hart bibendum molestie.
                            </p>
                            <a
                                className="block py-3 px-10 md:mr-auto w-full md:max-w-max text-xl leading-7 text-white font-medium tracking-tighter font-heading text-center bg-purple-500 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                                href="#"
                            >
                                Buy now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default DataGrid
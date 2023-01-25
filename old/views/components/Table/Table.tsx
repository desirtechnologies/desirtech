const Table = () => {

    return (
        <section className="py-24 font-mono font-medium 2xl:py-44">
            <div className="container px-4 mx-auto">
                <h2 className="mb-10 leading-tight font-heading text-9xl md:text-10xl xl:text-11xl">
                    Plans
                </h2>
                <p className="mb-20 text-lg font-normal leading-6 text-darkBlueGray-400 lg:mb-36">
                    Sed porttitor turpis sit amet malesuada porta. Vivamus lobortis blandit
                    lorem ut posuere.
                </p>
                <div className="overflow-hidden border border-gray-100 md:grid md:grid-cols-2 xl:grid-cols-4 rounded-5xl">
                    <div className="flex flex-col justify-between px-6 py-16 border-gray-100 md:px-10 md:border-b xl:border-b-0">
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="mr-2 text-6xl leading-10 tracking-tight font-heading md:text-7xl">
                                    Beginner
                                </h3>
                                <div className="relative max-w-max">
                                    <img
                                        className="w-14 h-14"
                                        src="uinel-assets/elements/pricing/circle1.svg"
                                        alt=""
                                    />
                                    <span className="absolute text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-6xl">
                                        X
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center text-3xl font-heading mb-14">
                                <span className="mr-2 -mb-1 text-base">$</span>
                                <span>8.80</span>
                            </div>
                            <h3 className="mb-6 text-base leading-5 tracking-tighter font-heading">
                                What's included
                            </h3>
                            <ul className="mb-14 xl:mb-36">
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>Complete tools</span>
                                </li>
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>10GB cloud storage</span>
                                </li>
                                <li className="flex items-start font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>5 team members</span>
                                </li>
                            </ul>
                        </div>
                        <a
                            className="block w-full px-10 py-3 text-xl font-medium leading-7 tracking-tighter text-center text-white bg-purple-500 md:mx-auto md:w-auto font-heading hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                            href="#"
                        >
                            Get started
                        </a>
                    </div>
                    <div className="flex flex-col justify-between px-6 py-16 border-gray-100 bg-gray-50 md:px-10 md:border-b xl:border-b-0">
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-6xl leading-10 tracking-tight font-heading md:text-7xl">
                                    Students
                                </h3>
                                <div className="relative max-w-max">
                                    <img
                                        className="w-14 h-14"
                                        src="uinel-assets/elements/pricing/circle2.svg"
                                        alt=""
                                    />
                                    <span className="absolute text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-6xl">
                                        I
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mb-14">
                                <div className="flex items-center text-3xl font-heading">
                                    <span className="mr-2 -mb-1 text-base">$</span>
                                    <span>15.90</span>
                                </div>
                                <div className="px-3 py-2 text-xs font-bold tracking-wider text-gray-300 uppercase bg-white rounded-8xl">
                                    20% off
                                </div>
                            </div>
                            <h3 className="mb-6 text-base leading-5 tracking-tighter font-heading">
                                What's included
                            </h3>
                            <ul className="mb-14 xl:mb-36">
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>Complete tools</span>
                                </li>
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>10GB cloud storage</span>
                                </li>
                                <li className="flex items-start font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>Unlimited anonymous board editors</span>
                                </li>
                            </ul>
                        </div>
                        <a
                            className="block w-full px-10 py-3 text-xl font-medium leading-7 tracking-tighter text-center text-white bg-purple-500 md:mx-auto md:w-auto font-heading hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                            href="#"
                        >
                            Let's go
                        </a>
                    </div>
                    <div className="flex flex-col justify-between px-6 py-16 md:px-10">
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-6xl leading-10 tracking-tight font-heading md:text-7xl">
                                    Team
                                </h3>
                                <div className="relative max-w-max">
                                    <img
                                        className="w-14 h-14"
                                        src="uinel-assets/elements/pricing/circle3.svg"
                                        alt=""
                                    />
                                    <span className="absolute text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-6xl">
                                        Y
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center text-3xl font-heading mb-14">
                                <span className="mr-2 -mb-1 text-base">$</span>
                                <span>29.90</span>
                            </div>
                            <h3 className="mb-6 text-base leading-5 tracking-tighter font-heading">
                                What's included
                            </h3>
                            <ul className="mb-14 xl:mb-36">
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>Complete tools</span>
                                </li>
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>35 plugins for Designers</span>
                                </li>
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>200GB cloud storage</span>
                                </li>
                                <li className="flex items-start font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>100+ team members</span>
                                </li>
                            </ul>
                        </div>
                        <a
                            className="block w-full px-10 py-3 text-xl font-medium leading-7 tracking-tighter text-center text-white bg-purple-500 md:mx-auto md:w-auto font-heading hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                            href="#"
                        >
                            Buy now
                        </a>
                    </div>
                    <div className="flex flex-col justify-between px-6 py-16 bg-gray-50 md:px-10">
                        <div>
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-6xl leading-10 tracking-tight font-heading md:text-7xl">
                                    Business
                                </h3>
                                <div className="relative max-w-max">
                                    <img
                                        className="w-14 h-14"
                                        src="uinel-assets/elements/pricing/circle4.svg"
                                        alt=""
                                    />
                                    <span className="absolute text-3xl text-white transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:text-6xl">
                                        O
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center text-3xl font-heading mb-14">
                                <span className="mr-2 -mb-1 text-base">$</span>
                                <span>44.90</span>
                            </div>
                            <h3 className="mb-6 text-base leading-5 tracking-tighter font-heading">
                                What's included
                            </h3>
                            <ul className="mb-14 xl:mb-36">
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>Complete tools</span>
                                </li>
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>35 plugins for Designers</span>
                                </li>
                                <li className="flex items-start mb-3 font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>500GB cloud storage</span>
                                </li>
                                <li className="flex items-start font-normal leading-6 text-darkBlueGray-400">
                                    <img
                                        className="relative pt-px mr-6 top-1"
                                        src="uinel-assets/elements/pricing/checked.svg"
                                        alt=""
                                    />
                                    <span>200+ team members</span>
                                </li>
                            </ul>
                        </div>
                        <a
                            className="block w-full px-10 py-3 text-xl font-medium leading-7 tracking-tighter text-center text-white bg-purple-500 md:mx-auto md:w-auto font-heading hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 rounded-xl"
                            href="#"
                        >
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Table
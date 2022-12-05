import type { FeaturedProps } from "@typings/Featured"
import type { ComponentType } from "@typings/Component"


const Featured: ComponentType<FeaturedProps> = ({ heading, title, cover, description, features }: FeaturedProps) => {


    const Primary = () => {


        return (
            features?.primary ?
                <div className="w-full px-3 cursor-pointer xl:w-1/2">
                    <div className="relative flex flex-col justify-end h-full">
                        <img
                            loading="lazy"
                            className="absolute object-cover w-full h-full rounded-7xl"
                            src={features.primary.cover.src ? features.primary.cover.src : "IMAGE_NOT_FOUND"}
                            alt={features.primary.cover.src ? features.primary.cover.alt : "IMAGE_NOT_FOUND"}
                        />
                        <div className="relative z-10 p-10 xl:px-24 xl:pb-44 xl:pt-24">
                            <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-blue-500 bg-white border border-blue-500 font-heading rounded-3xl">
                                -5%
                            </div>
                            <a
                                className="block mb-5 text-6xl font-medium xl:text-10xl font-heading hover:underline"
                                href="#"
                            >

                                {features?.primary?.title ? title : "TITLE_NOT_FOUND"}

                            </a>
                            <p className="flex items-center text-xl font-medium tracking-tighter text-blue-500 font-heading">
                                <span className="mr-2 text-xs">$</span>
                                <span>544.90</span>
                            </p>
                        </div>
                    </div>
                </div> :

                <>PRIMARY_FEATURE_NOT_FOUND</>

        )
    }

    const Secondary = () => {


        return (
            features?.secondary ?
                <div className="w-full px-3 mb-6 sm:w-1/2 xl:w-full">
                    <div className="relative h-full">
                        <img
                            className="absolute object-cover w-full h-full rounded-7xl"
                            src="uinel-assets/images/ecommerce-newest-products/smartphone.jpg"
                            alt=""
                        />
                        <div className="relative z-10 p-10 xl:px-24 xl:pb-14 xl:pt-24">
                            <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold text-blue-500 bg-white border border-blue-500 font-heading rounded-3xl">
                                -10%
                            </div>
                            <a
                                className="block mb-5 text-6xl font-medium font-heading hover:underline"
                                href="#"
                            >
                                {features?.secondary?.title ? features.secondary.title : "SECONDARY_FEATURE_TITLE_NOT_FOUND"}
                            </a>
                            <p className="flex items-center mb-6 text-xl font-medium tracking-tighter text-blue-500 xl:mb-14 font-heading">
                                <span className="mr-2 text-xs">$</span>
                                <span>544.90</span>
                            </p>
                            <div className="sm:max-w-max">
                                <a
                                    className="block w-full px-10 py-5 text-xl font-medium leading-6 tracking-tighter text-center text-white bg-blue-500 font-heading hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                    href="#"
                                >
                                    Buy
                                </a>
                            </div>
                        </div>
                    </div>
                </div> :
                <>SECONDARY_FEATURE_NOT_FOUND</>

        )
    }

    const Tertiary = () => {


        return (
            features?.tertiary ?
                <div className="w-full px-3 mb-6 sm:w-1/2 xl:w-full xl:mb-0">
                    <div className="relative h-full">
                        <img
                            className="absolute object-cover w-full h-full rounded-7xl"
                            src="uinel-assets/images/ecommerce-newest-products/woman.jpg"
                            alt=""
                        />
                        <div className="relative z-10 p-10 xl:px-24 xl:pb-14 xl:pt-24">
                            <a
                                className="block mb-5 text-6xl font-medium font-heading hover:underline"
                                href="#"
                            >
                                Headphones Blacksaint 3
                            </a>
                            <p className="flex items-center mb-6 text-xl font-medium tracking-tighter text-blue-500 xl:mb-14 font-heading">
                                <span className="mr-2 text-xs">$</span>
                                <span>544.90</span>
                            </p>
                            <div className="sm:max-w-max">
                                <a
                                    className="block w-full px-10 py-4 text-xl font-medium leading-8 tracking-tighter text-center text-white bg-blue-500 font-heading hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                                    href="#"
                                >
                                    Buy
                                </a>
                            </div>
                        </div>
                    </div>
                </div> :
                <>TERTIARY_FEATURE_NOT_FOUND</>

        )
    }

    const Header = () => {


        return (
            <div className="text-center cursor-pointer mb-14 xl:mb-24">
                <span className="inline-block py-3 text-2xl font-medium leading-5 text-green-500 border border-green-500 px-7 mb-7 font-heading rounded-4xl">
                    {heading ? heading : "HEADING_NOT_FOUND"}
                </span>
                <h2 className="mb-8 font-medium xl:mb-12 text-9xl md:text-10xl xl:text-12xl font-heading">
                    {title ? title : "TITLE_NOT_FOUND"}
                </h2>
                <p className="text-xl text-darkBlueGray-400">
                    {description ? description : "DESCRIPTION_NOT_FOUND"}
                </p>
            </div>

        )
    }


    return (

        <section className="py-24 font-mono text-white 2xl:py-44">
            <div className="container px-4 mx-auto">
                <Header />
                <div className="flex flex-wrap items-stretch -mx-3">
                    <div className="w-full px-3 xl:w-1/2">
                        <div className="-mx-3 sm:flex xl:flex-col">
                            <Secondary />
                            <Tertiary />
                        </div>
                    </div>
                    <Primary />
                </div>
            </div>
        </section>
    )
}

export default Featured
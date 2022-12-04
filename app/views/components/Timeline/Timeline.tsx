import type { ComponentType } from "@typings/Component"
import type { TimelineProps } from "@typings/Timeline"


const Timeline: ComponentType<TimelineProps> = ({ heading, title }: TimelineProps) => {

    const Header = () => {

        return (
            <>
                <span className="block text-xs leading-4 tracking-widest text-center text-gray-300 uppercase mb-9">
                    Discover out blog
                </span>
                <h2 className="mb-20 leading-tight text-center text-white xl:mb-32 text-9xl md:text-10xl xl:text-11xl">
                    Latest blog
                </h2>
            </>
        )
    }


    return (
        <section className="py-24 m-auto overflow-hidden font-mono font-medium 2xl:pt-52">
            <div className="container px-4 m-auto mx-auto">

                <Header />


                <div className="items-center self-center m-auto overflow-x-scroll lg:relative lg:grid lg:grid-cols-12 lg:top-96 lg:-mt-96">

                    <div className="mb-8 lg:col-start-1 lg:col-end-6 lg:mb-0">
                        <div className="relative mx-auto mb-8 lg:mb-20 max-w-max">
                            <img src="https://picsum.photos/800" alt="" />
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

                    <div className="mb-8 lg:col-start-1 lg:col-end-6 lg:mb-0">
                        <div className="relative mx-auto mb-8 lg:mb-20 max-w-max">
                            <img src="https://picsum.photos/800" alt="" />
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

                    <div className="mb-8 lg:col-start-1 lg:col-end-6 lg:mb-0">
                        <div className="relative mx-auto mb-8 lg:mb-20 max-w-max">
                            <img src="https://picsum.photos/800" alt="" />
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

                </div>


            </div>
        </section>

    )
}

export default Timeline
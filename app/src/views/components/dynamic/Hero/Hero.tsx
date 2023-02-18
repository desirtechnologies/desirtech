import HackerSVG from "@components/dynamic/HackerSVG";

export default function Hero() {

    return (
        <section className="pt-6 pb-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className=" overflow-hidden rounded-t-3xl">
                    <div className="px-8 pt-20">
                        <div className="md:max-w-2xl text-center mx-auto">
                            <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                                Best caption here
                            </span>
                            <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                                Build what you imagine
                            </h1>
                            <p className="mb-8 text-xl font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                venenatis volutpat velit, quis iaculis velit bibendum a. Maecenas
                                accumsan fermentum nisl.
                            </p>

                        </div>
                    </div>
                    <div className="relative">
                        <div className="relative z-20 px-8 max-w-max mx-auto">
                            <HackerSVG />
                            <a
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-lg text-center text-gray-900 font-bold bg-gray-50 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                                href="#"
                            >
                                Watch Video
                            </a>
                        </div>
                        <div className="absolute left-0 top-0 w-full h-1/2">
                            <div className="h-full  rounded-b-3xl" />
                        </div>
                        <div className="absolute left-0 bottom-0 w-full h-1/2" />
                    </div>
                </div>
            </div>
        </section>

    )
}
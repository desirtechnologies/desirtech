import HackerSVG from "@components/dynamic/HackerSVG";

export default function Hero() {

    return (
        <section className="pt-6 pb-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className=" overflow-hidden rounded-t-3xl">

                    <div className="relative mt-20 flex items-center justify-center">
                        <div className="relative z-20 px-8 mx-auto">
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
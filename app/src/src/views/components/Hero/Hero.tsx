import HackerSVG from "@components/HackerSVG";


export const defaultProps = {
    title: "Technomancer"
}

export default function Hero(props: any) {

    let { title } = props

    return (
        <section className="pt-6 pb-20 overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="overflow-hidden rounded-t-3xl">

                    <div className="relative flex items-center justify-center mt-20">
                        <div className="relative z-20 object-scale-down group">
                            <HackerSVG />
                            <a
                                className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-lg text-center text-gray-200 font-bold font-mono backdrop-blur-sm border-white border-2 border-opacity-25 box-shadow-lg hover:bg-black duration-500 ease-in-out focus:ring-4 focus:ring-gray-200 rounded-full"
                                href="#"
                            >
                                Technomancer
                            </a>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-1/2">
                            <div className="h-full rounded-b-3xl" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2" />
                    </div>
                </div>
            </div>
        </section>

    )
}
import HackerSVG from "@components/dynamic/HackerSVG";

export default function Hero() {

    return (
        <section className="z-0 h-full w-full relative mt-24">
            <div className="flex flex-col items-center justify-center" >
                <div className="container px-4 mx-auto flex items-center justify-center">
                    <HackerSVG />
                </div>
            </div>
        </section>
    )
}

import type { ComponentType } from "@typings/Component"
import type { HeroProps } from "@typings/Hero"


const Hero: ComponentType<HeroProps> = ({ title, heading, cover }: HeroProps) => {

    return (
        <section className="h-full -mt-20"  >
            <div className="flex flex-col justify-center align-middle m-auto font-mono text-white items-center">
                <div className="container px-4 mx-auto">
                    <div className="relative z-20 pt-24 mb-16 xl:mb-0 h-full">
                        <span className="block text-sm font-medium tracking-widest text-center text-gray-300 uppercase mb-9">
                            {heading ? heading : "HEADING_NOT_FOUND"}
                        </span>
                        <h1 className="max-w-lg mx-auto font-medium leading-tight text-center font-heading text-9xl md:text-10xl">
                            {title ? title : "TITLE_NOT_FOUND"}
                        </h1>

                    </div>


                </div>
                {
                    cover ? <div className="flex-1 relative self-center h-full w-full m-auto xl:-mt-6">
                        <img className="self-center m-auto h-full" src={cover?.src ?? "IMAGE_NOT_FOUND"} alt={cover?.alt ?? "IMAGE_ALT_NOT_FOUND"} />
                    </div> : <>COVER_NOT_FOUND</>
                }
            </div>
        </section>

    )
}

export default Hero
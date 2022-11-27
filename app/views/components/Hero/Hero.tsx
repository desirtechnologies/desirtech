
import type { ComponentType } from "@typings/Component"
import type { HeroProps } from "@typings/Hero"


const Hero: ComponentType<HeroProps> = ({ title, heading, cover }: HeroProps) => {

    return (
        <section className="z-0 h-full -mt-20"  >
            <div className="flex flex-col items-center justify-center m-auto font-mono text-white align-middle">
                <div className="container px-4 mx-auto">
                    <div className="relative z-0 h-full pt-24 mb-16 xl:mb-0">
                        <span className="block -mb-5 text-lg font-medium tracking-widest text-center text-gray-300 uppercase">
                            {heading ? heading : "HEADING_NOT_FOUND"}
                        </span>

                    </div>
                    {
                        cover ? <div className="relative self-center flex-1 w-full h-full m-auto -mt-1 xl:-mt-6">
                            <img loading="lazy" className="self-center h-full m-auto" src={cover?.src ?? "IMAGE_NOT_FOUND"} alt={cover?.alt ?? "IMAGE_ALT_NOT_FOUND"} />
                        </div> : <>COVER_NOT_FOUND</>
                    }

                </div>

            </div>
        </section>

    )
}

export default Hero
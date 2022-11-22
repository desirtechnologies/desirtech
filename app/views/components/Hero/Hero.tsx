
import type { ComponentType } from "@typings/Component"
import type { HeroProps } from "@typings/Hero"


const Hero: ComponentType<HeroProps> = ({ title, heading, cover }: HeroProps) => {

    return (
        <section>
            <div className="flex flex-col justify-center font-mono text-white rounded-b-9xl">
                <div className="container px-4 mx-auto">
                    <div className="relative z-20 pt-24 mb-16 xl:mb-0">
                        <span className="block text-sm font-medium tracking-widest text-center text-gray-300 uppercase mb-9">
                            Better communication and work
                        </span>
                        <h1 className="max-w-lg mx-auto font-medium leading-tight text-center font-heading text-9xl md:text-10xl">
                            Desir Tech
                        </h1>
                    </div>
                </div>
                <div className="relative self-center w-full m-auto xl:-mt-16">
                    <img src="/assets/images/hacker.svg" alt="" />
                </div>
            </div>
        </section>

    )
}

export default Hero
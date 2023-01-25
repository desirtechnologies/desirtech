
import type { ComponentType } from "@typings/Component"
import type { HeroProps } from "@typings/Hero"
import TextScrambler from 'react-scramble-text'
import HackerSVG from "@components/HackerSVG"

const Hero: ComponentType<HeroProps> = ({ title, heading, obfuscator }: HeroProps) => {

    return (
        <section className="z-0 h-full -mt-20"  >
            <div className="flex flex-col items-center justify-center m-auto font-mono text-white align-middle">
                <div className="container px-4 mx-auto">
                    <div className="relative z-0 h-full pt-24 mb-16 xl:mb-0">
                        <span className="block -mb-5 text-4xl font-bold tracking-widest text-center text-gray-300 uppercase text-shadow-lg shadow-white">
                            {
                                heading ? <TextScrambler
                                    phrases={heading}
                                    speed={75}
                                    chars={obfuscator ?? "⊗∵⊙∦∋⋉∑∅"}
                                    pauseTime={1800} />
                                    : <>HEADING_NOT_FOUND</>
                            }
                        </span>
                    </div>
                    <div className="relative self-center flex-1 w-full h-full m-auto -mt-1 xl:h-3/4 xl:w-3/4 xl:-mt-6">
                        <HackerSVG style={{ width: "inherit", height: "inherit" }} className={" self-center h-full m-auto cursor-pointer"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
import HackerSVG from "@components/dynamic/HackerSVG";

import type { IComponent } from "@typings/Hero";

export interface IHero extends IComponent {

}

export default function Hero() {

    return (
        <section class="z-0 h-full w-full relative">
            <div class="flex flex-col items-center justify-center" >
                <div class="container px-4 mx-auto flex items-center justify-center">
                    <HackerSVG />
                </div>
            </div>
        </section>
    )
}
import type { ComponentType } from "@typings/Component";
import type { HeaderProps } from "@typings/Header";
import Headroom from "react-headroom";


const Header: ComponentType<HeaderProps> = ({ favicon, links, sX }: HeaderProps) => {

    return (
        <Headroom>
            <section className="relative font-mono text-lg font-bold text-white backdrop-blur-sm">
                <nav className="flex justify-between px-6 py-8 lg:px-12">


                    <div className="flex items-center justify-between w-full">
                        <a href="#">
                            <img
                                className="h-12"
                                src="/assets/images/logo.png"
                                alt=""
                            />
                        </a>

                        <div className="flex items-center">
                            <button className="hidden px-4 mx-auto mr-20 navbar-burger xl:block focus:outline-none">
                                <svg
                                    width={25}
                                    height={16}
                                    viewBox="0 0 25 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <rect width={25} height={2} fill="white" />
                                    <rect y={14} width={25} height={2} fill="white" />
                                </svg>
                            </button>
                            <ul className="hidden px-4 mx-auto tracking-tight xl:flex">
                                <li className="pb-px border-b border-blue-500 mr-11 border-opacity-40">
                                    <a className="hover:opacity-80" href="#">
                                        Product
                                    </a>
                                </li>
                                <li className="pb-px border-b border-blue-500 mr-11 border-opacity-40">
                                    <a className="hover:opacity-80" href="#">
                                        Download
                                    </a>
                                </li>
                                <li className="pb-px border-b border-blue-500 mr-11 border-opacity-40">
                                    <a className="hover:opacity-80" href="#">
                                        Pricing
                                    </a>
                                </li>
                                <li className="pb-px border-b border-blue-500 mr-11 border-opacity-40">
                                    <a className="hover:opacity-80" href="#">
                                        Reviews
                                    </a>
                                </li>
                                <li className="pb-px border-b border-blue-500 border-opacity-40">
                                    <a className="hover:opacity-80" href="#">
                                        Help
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="relative hidden xl:block">
                            <img
                                className="absolute pl-6 mt-px transform top-1/2 -translate-y-2/4"
                                src="uinel-assets/elements/navigations/search-gray-icon.svg"
                                alt=""
                            />

                            <input
                                className="py-3 pl-12 pr-5 text-base font-medium text-gray-300 bg-transparent rounded-full outline-none font-heading ring-2 ring-green-500 focus:ring-opacity-50"
                                style={{ width: 250 }}
                            />
                        </div>
                    </div>


                    <button className="self-center navbar-burger xl:hidden focus:outline-none">
                        <svg
                            width={25}
                            height={16}
                            viewBox="0 0 25 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width={25} height={2} fill="currentColor" />
                            <rect y={14} width={25} height={2} fill="currentColor" />
                        </svg>
                    </button>

                    
                </nav>
            </section>
        </Headroom>

    )
}

export default Header
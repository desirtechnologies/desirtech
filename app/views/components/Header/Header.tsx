import Headroom from "react-headroom"
import type { ComponentType } from "@typings/Component"
import type { HeaderProps } from "@typings/Header"

import MenuIcon from '@mui/icons-material/Menu';
const Header: ComponentType<HeaderProps> = ({ favicon, sX }: HeaderProps) => {

    return (
        <Headroom>
            <section className="relative font-medium backdrop-blur-md text-gray-50 font-heading bg-blueGray-100">
            <div className="hidden md:block">
            <button className="flex-1 navbar-burger self-baseline  text-body focus:outline-none">
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
                    </div>
                    <nav className="flex justify-between w-full px-6 py-8 lg:px-12">
                        <div className="flex items-center justify-between w-full pr-12">
                            <a
                                className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-y-1/2 md:-translate-x-1/2"
                                href="#"
                            >
                                <img
                                    className="h-24 shadow-2xl  cursor-pointer"
                                    src="/assets/images/logo.png"
                                    alt=""
                                />
                            </a>
                            <div className="relative hidden ml-auto md:block">
                           
                                <input
                                    className="py-3 pl-12 pr-5 text-base font-medium text-gray-300 bg-transparent rounded-full outline-none font-heading ring-2 focus:ring-green-500 focus:ring-opacity-50"
                                    style={{ width: 250 }}
                                />
                            </div>
                        </div>
                        <button className="self-center navbar-burger md:hidden text-body focus:outline-none">
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
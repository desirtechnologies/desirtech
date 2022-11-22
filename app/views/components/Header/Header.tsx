import Headroom from "react-headroom"
import type { ComponentType } from "@typings/Component"
import type { HeaderProps } from "@typings/Header"

import MenuIcon from '@mui/icons-material/Menu';
const Header: ComponentType<HeaderProps> = ({ favicon, sX }: HeaderProps) => {

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
                                style={{ width: 145 }}
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
                <div className="fixed top-0 bottom-0 left-0 z-50 hidden w-5/6 max-w-sm navbar-menu">
                    <div className="fixed inset-0 bg-gray-800 navbar-backdrop opacity-80" />
                    <nav className="relative flex flex-col w-full h-full py-8 overflow-y-auto bg-white">
                        <div className="flex items-center pl-16 mb-8">
                            <a className="text-2xl font-bold text-gray-800" href="#">
                                <img
                                    className="h-12"
                                    src="uinel-assets/logos/uinel-gray-black.svg"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="flex items-center px-10 mb-10">
                            <a className="flex items-center ml-1" href="#">
                                <img
                                    className="ml-6"
                                    src="uinel-assets/elements/navigations/avatar-online.png"
                                    alt=""
                                />
                                <img
                                    className="ml-6"
                                    src="uinel-assets/elements/navigations/arrow-down-gray.svg"
                                    alt=""
                                />
                            </a>
                            <a className="ml-auto text-gray-400 hover:text-gray-500" href="#">
                                <svg
                                    width={20}
                                    height={23}
                                    viewBox="0 0 20 23"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.5219 18.016H2.70312V8.5933C2.70313 6.719 3.48375 4.92147 4.87328 3.59614C6.2628 2.27081 8.1474 1.52625 10.1125 1.52625C12.0776 1.52625 13.9622 2.27081 15.3517 3.59614C16.7412 4.92147 17.5219 6.719 17.5219 8.5933V18.016Z"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M1 18.0121H19"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8.87891 22H10.8789"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div>
                            <ul>
                                <li className="px-10 mb-1">
                                    <a
                                        className="block py-4 pl-8 text-lg rounded-full text-body hover:shadow-2xl"
                                        href="#"
                                    >
                                        New tools
                                    </a>
                                </li>
                                <li className="px-10 mb-1">
                                    <a
                                        className="flex items-center py-4 pl-8 text-lg rounded-full text-body hover:shadow-2xl"
                                        href="#"
                                    >
                                        <span>Products</span>
                                        <svg
                                            className="ml-4"
                                            width={8}
                                            height={5}
                                            viewBox="0 0 8 5"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li className="px-10 mb-1">
                                    <a
                                        className="block py-4 pl-8 text-lg rounded-full text-body hover:shadow-2xl"
                                        href="#"
                                    >
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="px-10 mt-auto">
                            <button className="w-full px-5 py-3 mt-6 text-sm font-bold tracking-wide uppercase border-2 border-gray-200 border-opacity-50 rounded-full font-body hover:border-gray-300">
                                <span className="block mt-px">New project</span>
                            </button>
                            <p className="mt-6 mb-4 text-center">
                                <span className="text-sm text-darkBlueGray-400">
                                    2021 © Uinel. All rights reserved.
                                </span>
                            </p>
                        </div>
                    </nav>
                    <button className="absolute p-6 navbar-close top-5 right-5">
                        <div className="absolute top-3">
                            <span className="absolute w-px h-6 transform -rotate-45 bg-black" />
                            <span className="absolute w-px h-6 transform rotate-45 bg-black" />
                        </div>
                    </button>
                </div>
            </section>

        </Headroom>

    )
}

export default Header
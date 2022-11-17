import Headroom from "react-headroom"


const Header = () => {
    return (
        <Headroom>
            <nav className="flex justify-between  backdrop-blur-sm text-white px-6 lg:px-12 py-8">
                <div className="flex w-full items-center">
                    <a href="#">
                        <img
                            className="h-12"
                            src="uinel-assets/logos/uinel-gray-black.svg"
                            alt=""
                        />
                    </a>
                    <ul className="hidden xl:flex px-4 ml-32">
                        <li className="mr-16">
                            <a className="text-gray-400 hover:text-gray-500" href="#">
                                New tools
                            </a>
                        </li>
                        <li className="mr-16">
                            <a
                                className="flex items-center text-gray-400 hover:text-gray-500"
                                href="#"
                            >
                                <span className="mr-4">Products</span>
                                <svg
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
                        <li>
                            <a className="text-gray-400 hover:text-gray-500" href="#">
                                Pricing
                            </a>
                        </li>
                    </ul>
                    <div className="hidden xl:flex items-center ml-auto">
                        <a className="text-gray-400 hover:text-gray-500" href="#">
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
                        <div className="w-px h-12 bg-gray-200 bg-opacity-50 ml-9 mr-11" />
                        <a className="flex items-center mr-12" href="#">
                            <span>Sona</span>
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
                        <button className="uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300">
                            <span className="block mt-px">New project</span>
                        </button>
                    </div>
                </div>
                <button className="navbar-burger self-center xl:hidden text-gray-400 hover:text-gray-500 focus:outline-none">
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
        </Headroom>


    )
}

export default Header
export type FaviconProps = {
    url?: string;
    image?: {
        src?: string;
        alt?: string;
    }
}

export interface IHeader extends JSX.Element {
    favicon?: FaviconProps;
}

export default function Header({ favicon }): IHeader {


    const Favicon = () => {
        return (
            <div className="w-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-auto">
                        <a href="#">
                            <img src="zanrly-assets/logos/zanrly-logo-white.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    const Links = () => {
        return (
            <div className="w-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-auto hidden lg:block">
                        <ul className="flex items-center justify-center">
                            <li className="mr-9">
                                <a
                                    className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                    href="#"
                                >
                                    Features
                                </a>
                            </li>
                            <li className="mr-9">
                                <a
                                    className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                    href="#"
                                >
                                    Solutions
                                </a>
                            </li>
                            <li className="mr-9">
                                <a
                                    className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                    href="#"
                                >
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a
                                    className="inline-block text-sm font-bold text-gray-200 hover:text-gray-300"
                                    href="#"
                                >
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    const CallToAction = () => {
        return (
            <div className="w-auto">
                <div className="flex flex-wrap items-center">
                    <div className="w-auto hidden lg:block">
                        <div className="flex flex-wrap -m-2">
                            <div className="w-full md:w-auto p-2">
                                <a
                                    className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold hover:bg-gray-900 focus:ring-4 focus:ring-gray-500 border border-gray-800 rounded-full"
                                    href="#"
                                >
                                    Log In
                                </a>
                            </div>
                            <div className="w-full md:w-auto p-2">
                                <a
                                    className="block w-full px-4 py-2.5 text-sm text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                    href="#"
                                >
                                    Get Started
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto lg:hidden">
                        <a className="inline-block" href="#">
                            <svg
                                className="navbar-burger text-green-700 opacity-50 backdrop-blur-sm"
                                width={45}
                                height={45}
                                viewBox="0 0 56 56"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <rect width={56} height={56} rx={28} fill="currentColor" />
                                <path
                                    d="M37 32H19M37 24H19"
                                    stroke="white"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="py-6 fixed top-0 w-full z-50 font-mono">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between px-6 py-3.5 backdrop-blur-lg border-2 border-opacity-25 hover:border-opacity-50 cursor-pointer hover:shadow-xl shadow-white duration-500 will-change-scroll ease-in-out border-white rounded-full">
                    <Favicon />
                    <Links />
                    <CallToAction />
                </div>
            </div>
        </section>
    )
}
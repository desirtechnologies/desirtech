import Notifications from "@includes/dynamic/Notifications"
import Breadcrumbs from "@components/dynamic/Breadcrumbs"


export default function NavBar() {

    return (
        <section className="overflow-hidden w-full fixed top-0 bg-black">

            <Notifications />
            <nav className="py-3.5 xl:pb-0 px-7">
                <div className="flex items-center justify-between xl:mb-5">
                    <div className="w-full xl:w-auto px-2 xl:mr-10">
                        <div className="flex items-center justify-between">
                            <a className="inline-flex items-center h-7" href="#">
                                <img src="dashy-assets/logos/dashy-logo-light.svg" alt="" />
                            </a>
                            <div className="xl:hidden">
                                <button className="navbar-burger text-gray-400 hover:text-gray-300 focus:outline-none">
                                    <svg
                                        width={20}
                                        height={12}
                                        viewBox="0 0 20 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:block w-full md:w-auto px-2 mr-auto">
                        <div className="flex items-center pr-4 border border-neutral-500 rounded-lg focus-within:border-neutral-400">
                            <div className="pl-4 pr-3.5">
                                <svg
                                    width={19}
                                    height={18}
                                    viewBox="0 0 19 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.4999 16.2803C15.7928 16.5732 16.2677 16.5732 16.5606 16.2803C16.8535 15.9874 16.8535 15.5126 16.5606 15.2197L15.4999 16.2803ZM12.0606 10.7197C11.7677 10.4268 11.2928 10.4268 10.9999 10.7197C10.7071 11.0126 10.7071 11.4874 10.9999 11.7803L12.0606 10.7197ZM12.2803 7.5C12.2803 9.98528 10.2656 12 7.78027 12V13.5C11.094 13.5 13.7803 10.8137 13.7803 7.5H12.2803ZM7.78027 12C5.29499 12 3.28027 9.98528 3.28027 7.5H1.78027C1.78027 10.8137 4.46656 13.5 7.78027 13.5V12ZM3.28027 7.5C3.28027 5.01472 5.29499 3 7.78027 3V1.5C4.46656 1.5 1.78027 4.18629 1.78027 7.5H3.28027ZM7.78027 3C10.2656 3 12.2803 5.01472 12.2803 7.5H13.7803C13.7803 4.18629 11.094 1.5 7.78027 1.5V3ZM16.5606 15.2197L12.0606 10.7197L10.9999 11.7803L15.4999 16.2803L16.5606 15.2197Z"
                                        fill="#495460"
                                    />
                                </svg>
                            </div>
                            <input
                                className="py-2 text-sm text-neutral-400 placeholder-neutral-400 bg-transparent outline-none"
                                id="horizontalNav3-1"
                                type="text"
                                placeholder="Type to search"
                            />
                        </div>
                    </div>
                    <div className="hidden xl:block w-full md:w-auto px-2">
                        <div className="md:flex items-center">
                            <div className="w-full md:w-auto mb-6 md:mb-0">
                                <div className="flex flex-wrap items-center">
                                    <a
                                        className="mr-5 px-3 py-1.5 text-sm font-medium text-white hover:text-neutral-200"
                                        href="#"
                                    >
                                        Create account
                                    </a>
                                    <a
                                        className="px-3 py-1.5 text-sm font-medium text-white bg-gradient-purple-left focus:ring-4 focus:ring-purple-300 rounded-lg"
                                        href="#"
                                    >
                                        Sign In
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden xl:flex xl:flex-wrap">
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Home
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-transparent font-medium bg-clip-text bg-gradient-purple-top">
                            Payments
                        </span>
                        <div className="h-0.5 bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Business operations
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Financial services
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Developer tools
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            Security
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                    <a className="group inline-block mr-7" href="#">
                        <span className="inline-block pb-3.5 text-sm text-neutral-200 group-hover:text-transparent font-medium bg-clip-text group-hover:bg-gradient-purple-top">
                            All products
                        </span>
                        <div className="h-0.5 group-hover:bg-gradient-purple-left" />
                    </a>
                </div>
            </nav>
            <Breadcrumbs />

        </section>

    )
}
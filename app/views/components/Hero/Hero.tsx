const Hero = () => {

    return (
        <section className="relative pb-12 overflow-hidden">
            <nav>
                <div className="flex h-20 py-3 px-6 items-center relative">
                    <a className="inline-block text-2xl font-bold" href="#">
                        <img src="shopal-assets/logos/shopal-logo.svg" alt="" />
                    </a>
                    <div className="hidden lg:inline-flex h-10 w-full max-w-sm px-4 py-2 items-center justify-between border-2 border-black rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <input
                            className="text-black text-sm font-bold placeholder-black outline-none bg-transparent"
                            type="search"
                            placeholder="Search now..."
                        />
                        <button className="inline-block" type="submit">
                            <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M18.9299 20.6898C19.4599 22.2898 20.6699 22.4498 21.5999 21.0498C22.4499 19.7698 21.8899 18.7198 20.3499 18.7198C19.2099 18.7098 18.5699 19.5998 18.9299 20.6898Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="w-auto ml-auto">
                        <div className="inline-flex items-center">
                            <div className="hidden md:flex">
                                <a
                                    className="inline-block mr-6 text-gray-900 hover:text-indigo-500 transition duration-300"
                                    href="#"
                                >
                                    <svg
                                        width={20}
                                        height={24}
                                        viewBox="0 0 20 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.44 0.100006C12.63 0.100006 11.01 0.980006 10 2.33001C8.99 0.980006 7.37 0.100006 5.56 0.100006C2.49 0.100006 0 2.60001 0 5.69001C0 6.88001 0.19 7.98001 0.52 9.00001C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 9.00001C19.81 7.98001 20 6.88001 20 5.69001C20 2.60001 17.51 0.100006 14.44 0.100006Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="inline-block mr-6 text-gray-900 hover:text-indigo-500 transition duration-300"
                                    href="#"
                                >
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19.24 5.58H18.84L15.46 2.2C15.19 1.93 14.75 1.93 14.47 2.2C14.2 2.47 14.2 2.91 14.47 3.19L16.86 5.58H7.14L9.53 3.19C9.8 2.92 9.8 2.48 9.53 2.2C9.26 1.93 8.82 1.93 8.54 2.2L5.17 5.58H4.77C3.87 5.58 2 5.58 2 8.14C2 9.11 2.2 9.75 2.62 10.17C2.86 10.42 3.15 10.55 3.46 10.62C3.75 10.69 4.06 10.7 4.36 10.7H19.64C19.95 10.7 20.24 10.68 20.52 10.62C21.36 10.42 22 9.82 22 8.14C22 5.58 20.13 5.58 19.24 5.58Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M19.0499 12H4.86991C4.24991 12 3.77991 12.55 3.87991 13.16L4.71991 18.3C4.99991 20.02 5.74991 22 9.07991 22H14.6899C18.0599 22 18.6599 20.31 19.0199 18.42L20.0299 13.19C20.1499 12.57 19.6799 12 19.0499 12ZM10.6099 18.45C10.6099 18.84 10.2999 19.15 9.91991 19.15C9.52991 19.15 9.21991 18.84 9.21991 18.45V15.15C9.21991 14.77 9.52991 14.45 9.91991 14.45C10.2999 14.45 10.6099 14.77 10.6099 15.15V18.45ZM14.8899 18.45C14.8899 18.84 14.5799 19.15 14.1899 19.15C13.8099 19.15 13.4899 18.84 13.4899 18.45V15.15C13.4899 14.77 13.8099 14.45 14.1899 14.45C14.5799 14.45 14.8899 14.77 14.8899 15.15V18.45Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="inline-block mr-6 text-gray-900 hover:text-indigo-500 transition duration-300"
                                    href="#"
                                >
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.01 20.02C15.9861 20.02 20.02 15.9861 20.02 11.01C20.02 6.03391 15.9861 2 11.01 2C6.03391 2 2 6.03391 2 11.01C2 15.9861 6.03391 20.02 11.01 20.02Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M21.9901 18.95C21.6601 18.34 20.9601 18 20.0201 18C19.3101 18 18.7001 18.29 18.3401 18.79C17.9801 19.29 17.9001 19.96 18.1201 20.63C18.5501 21.93 19.3001 22.22 19.7101 22.27C19.7701 22.28 19.8301 22.28 19.9001 22.28C20.3401 22.28 21.0201 22.09 21.6801 21.1C22.2101 20.33 22.3101 19.56 21.9901 18.95Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                                <a
                                    className="inline-block mr-6 text-gray-900 hover:text-indigo-500 transition duration-300"
                                    href="#"
                                >
                                    <svg
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            d="M11.9999 14.5C6.98991 14.5 2.90991 17.86 2.90991 22C2.90991 22.28 3.12991 22.5 3.40991 22.5H20.5899C20.8699 22.5 21.0899 22.28 21.0899 22C21.0899 17.86 17.0099 14.5 11.9999 14.5Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <button className="navbar-burger flex p-1 items-center text-gray-900 hover:text-indigo-500 transition duration-300">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3 18H21"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 12H21"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M3 6H21"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-green-500">
                    <div className="container px-4 md:px-10 mx-auto">
                        <div className="flex h-12 py-6 items-center justify-between">
                            <a
                                className="hidden sm:inline-flex mr-6 h-9 px-12 items-center justify-center font-bold text-sm text-white bg-black hover:bg-white hover:text-black rounded-md transition duration-300"
                                href="#"
                            >
                                <span className="mr-2">
                                    <svg
                                        width={16}
                                        height={16}
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.6667 5.68004V2.65337C14.6667 1.71337 14.24 1.33337 13.18 1.33337H10.4867C9.42667 1.33337 9 1.71337 9 2.65337V5.67337C9 6.62004 9.42667 6.99337 10.4867 6.99337H13.18C14.24 7.00004 14.6667 6.62004 14.6667 5.68004Z"
                                            fill="#C6FF53"
                                        />
                                        <path
                                            d="M14.6667 13.18V10.4867C14.6667 9.42667 14.24 9 13.18 9H10.4867C9.42667 9 9 9.42667 9 10.4867V13.18C9 14.24 9.42667 14.6667 10.4867 14.6667H13.18C14.24 14.6667 14.6667 14.24 14.6667 13.18Z"
                                            fill="#C6FF53"
                                        />
                                        <path
                                            d="M6.99967 5.68004V2.65337C6.99967 1.71337 6.57301 1.33337 5.51301 1.33337H2.81967C1.75967 1.33337 1.33301 1.71337 1.33301 2.65337V5.67337C1.33301 6.62004 1.75967 6.99337 2.81967 6.99337H5.51301C6.57301 7.00004 6.99967 6.62004 6.99967 5.68004Z"
                                            fill="#C6FF53"
                                        />
                                        <path
                                            d="M6.99967 13.18V10.4867C6.99967 9.42667 6.57301 9 5.51301 9H2.81967C1.75967 9 1.33301 9.42667 1.33301 10.4867V13.18C1.33301 14.24 1.75967 14.6667 2.81967 14.6667H5.51301C6.57301 14.6667 6.99967 14.24 6.99967 13.18Z"
                                            fill="#C6FF53"
                                        />
                                    </svg>
                                </span>
                                <span>All Categories</span>
                            </a>
                            <ul className="hidden lg:flex items-center">
                                <li className="mr-6">
                                    <button className="relative group inline-flex items-center text-left text-base font-bold text-black hover:text-indigo-500">
                                        <span className="mr-2">Category</span>
                                        <svg
                                            width={8}
                                            height={6}
                                            viewBox="0 0 8 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <div className="hidden group-hover:block absolute z-50 bottom-0 left-0 transform translate-y-full w-56 pt-6">
                                            <div className="p-2 bg-white border-2 border-black rounded-md shadow">
                                                <a
                                                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                                    href="#"
                                                >
                                                    Category 1
                                                </a>
                                                <a
                                                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                                    href="#"
                                                >
                                                    Category 1
                                                </a>
                                                <a
                                                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                                    href="#"
                                                >
                                                    Category 1
                                                </a>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                                <li className="mr-6">
                                    <button className="relative group inline-flex items-center text-left text-base font-bold text-black hover:text-indigo-500">
                                        <span className="mr-2">Collection</span>
                                        <svg
                                            width={8}
                                            height={6}
                                            viewBox="0 0 8 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <div className="hidden group-hover:block absolute z-50 bottom-0 left-0 transform translate-y-full w-56 pt-6">
                                            <div className="p-2 bg-white border-2 border-black rounded-md shadow">
                                                <a
                                                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                                    href="#"
                                                >
                                                    Category 1
                                                </a>
                                                <a
                                                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                                    href="#"
                                                >
                                                    Category 1
                                                </a>
                                                <a
                                                    className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                                    href="#"
                                                >
                                                    Category 1
                                                </a>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                                <li className="mr-6">
                                    <a
                                        className="inline-block font-bold text-gray-900 hover:text-indigo-500"
                                        href="#"
                                    >
                                        Story
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="inline-block font-bold text-gray-900 hover:text-indigo-500"
                                        href="#"
                                    >
                                        Brand
                                    </a>
                                </li>
                            </ul>
                            <a
                                className="inline-flex ml-auto h-9 px-12 items-center justify-center font-bold text-sm text-white bg-indigo-500 hover:bg-indigo-600 rounded-md transition duration-200"
                                href="#"
                            >
                                <span className="mr-2">
                                    <svg
                                        width={17}
                                        height={16}
                                        viewBox="0 0 17 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.71297 8.85331H8.77297V13.6533C8.77297 14.36 9.65297 14.6933 10.1196 14.16L15.1663 8.42665C15.6063 7.92665 15.253 7.14665 14.5863 7.14665H12.5263V2.34665C12.5263 1.63998 11.6463 1.30665 11.1796 1.83998L6.13297 7.57331C5.69963 8.07331 6.05297 8.85331 6.71297 8.85331Z"
                                            fill="#C6FF53"
                                        />
                                        <path
                                            d="M6.16667 3.16663H1.5C1.22667 3.16663 1 2.93996 1 2.66663C1 2.39329 1.22667 2.16663 1.5 2.16663H6.16667C6.44 2.16663 6.66667 2.39329 6.66667 2.66663C6.66667 2.93996 6.44 3.16663 6.16667 3.16663Z"
                                            fill="#C6FF53"
                                        />
                                        <path
                                            d="M5.5 13.8334H1.5C1.22667 13.8334 1 13.6067 1 13.3334C1 13.06 1.22667 12.8334 1.5 12.8334H5.5C5.77333 12.8334 6 13.06 6 13.3334C6 13.6067 5.77333 13.8334 5.5 13.8334Z"
                                            fill="#C6FF53"
                                        />
                                        <path
                                            d="M3.5 8.5H1.5C1.22667 8.5 1 8.27333 1 8C1 7.72667 1.22667 7.5 1.5 7.5H3.5C3.77333 7.5 4 7.72667 4 8C4 8.27333 3.77333 8.5 3.5 8.5Z"
                                            fill="#C6FF53"
                                        />
                                    </svg>
                                </span>
                                <span>Hot offers</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="relative pt-6 pb-10">
                <div className="flex justify-center">
                    <img
                        className="hidden md:block flex-shrink-0 img-fluid h-118"
                        src="shopal-assets/images/slider-photos-bg.png"
                        alt=""
                    />
                    <div className="flex-shrink-0 container px-4 md:px-10 md:mx-6 2xl:mx-10 mx-auto">
                        <div className="relative">
                            <div className="hidden lg:block absolute top-1/2 left-0 transform -translate-y-1/2 -ml-6 z-10">
                                <a
                                    className="group flex items-center justify-center transform -translate-y-1 -translate-x-1 transition duration-500 h-16 w-16 rounded-full bg-gray-900"
                                    href="#"
                                >
                                    <div className="inline-flex z-10 items-center justify-center absolute top-0 left-0 h-16 w-16 transform -translate-y-1 -translate-x-1 group-hover:-translate-y-0 group-hover:-translate-x-0 bg-indigo-500 rounded-full transition-all duration-300">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM13.5 10.75H8.31L10.03 12.47C10.32 12.76 10.32 13.24 10.03 13.53C9.88 13.68 9.69 13.75 9.5 13.75C9.31 13.75 9.12 13.68 8.97 13.53L5.97 10.53C5.68 10.24 5.68 9.76 5.97 9.47L8.97 6.47C9.26 6.18 9.74 6.18 10.03 6.47C10.32 6.76 10.32 7.24 10.03 7.53L8.31 9.25H13.5C13.91 9.25 14.25 9.59 14.25 10C14.25 10.41 13.91 10.75 13.5 10.75Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div className="relative md:h-118 border-2 border-black rounded-md shadow">
                                <img
                                    className="absolute top-0 left-0 img-fluid h-full w-full object-cover"
                                    src="shopal-assets/images/slider-photos-bg.png"
                                    alt=""
                                />
                                <div className="relative px-6 md:pl-24 pt-12 lg:pt-18 pb-20 md:pb-10">
                                    <div className="max-w-xs sm:max-w-md mx-auto md:mx-0">
                                        <span className="inline-flex h-8 px-1 mb-3 items-center justify-center text-sm font-black uppercase bg-orange-500 border border-black rounded-md shadow-sm">
                                            Label
                                        </span>
                                        <h1 className="font-heading text-3xl md:text-4xl font-black text-white mb-2">
                                            Take care of your performance every day.
                                        </h1>
                                        <p className="text-lg font-bold text-white mb-6">
                                            Build a well-presented brand that everyone will love.
                                        </p>
                                        <span className="block text-4xl md:text-5xl font-black text-white mb-7">
                                            $499.00
                                        </span>
                                        <a
                                            className="group relative inline-block h-12 w-full sm:w-48 mb-2 sm:mb-0 sm:mr-6 bg-blueGray-900 rounded-md"
                                            href="#"
                                        >
                                            <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                                                <div className="flex h-full w-full items-center justify-center bg-green-600 border-2 border-black rounded-md">
                                                    <span className="text-base font-black text-black">
                                                        Check our Catalog
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block absolute top-1/2 right-0 transform -translate-y-1/2 -mr-7 z-10">
                                <a
                                    className="group flex items-center justify-center transform -translate-y-1 -translate-x-1 transition duration-500 h-16 w-16 rounded-full bg-gray-900"
                                    href="#"
                                >
                                    <div className="inline-flex z-10 items-center justify-center absolute top-0 left-0 h-16 w-16 transform -translate-y-1 -translate-x-1 group-hover:-translate-y-0 group-hover:-translate-x-0 bg-indigo-500 rounded-full transition-all duration-300">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 3.91654e-07 10 8.74228e-07C4.48 1.3568e-06 -1.3568e-06 4.48 -8.74228e-07 10C-3.91654e-07 15.52 4.48 20 10 20ZM6.5 9.25L11.69 9.25L9.97 7.53C9.68 7.24 9.68 6.76 9.97 6.47C10.12 6.32 10.31 6.25 10.5 6.25C10.69 6.25 10.88 6.32 11.03 6.47L14.03 9.47C14.32 9.76 14.32 10.24 14.03 10.53L11.03 13.53C10.74 13.82 10.26 13.82 9.97 13.53C9.68 13.24 9.68 12.76 9.97 12.47L11.69 10.75L6.5 10.75C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="lg:hidden relative flex items-center justify-center -mt-8">
                            <a
                                className="group flex mr-4 items-center justify-center transform -translate-y-1 -translate-x-1 transition duration-500 h-14 w-14 rounded-full bg-gray-900"
                                href="#"
                            >
                                <div className="inline-flex z-10 items-center justify-center absolute top-0 left-0 h-14 w-14 transform -translate-y-1 -translate-x-1 group-hover:-translate-y-0 group-hover:-translate-x-0 bg-indigo-500 rounded-full transition-all duration-300">
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM13.5 10.75H8.31L10.03 12.47C10.32 12.76 10.32 13.24 10.03 13.53C9.88 13.68 9.69 13.75 9.5 13.75C9.31 13.75 9.12 13.68 8.97 13.53L5.97 10.53C5.68 10.24 5.68 9.76 5.97 9.47L8.97 6.47C9.26 6.18 9.74 6.18 10.03 6.47C10.32 6.76 10.32 7.24 10.03 7.53L8.31 9.25H13.5C13.91 9.25 14.25 9.59 14.25 10C14.25 10.41 13.91 10.75 13.5 10.75Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </a>
                            <a
                                className="group flex items-center justify-center transform -translate-y-1 -translate-x-1 transition duration-500 h-14 w-14 rounded-full bg-gray-900"
                                href="#"
                            >
                                <div className="inline-flex z-10 items-center justify-center absolute top-0 left-0 h-14 w-14 transform -translate-y-1 -translate-x-1 group-hover:-translate-y-0 group-hover:-translate-x-0 bg-indigo-500 rounded-full transition-all duration-300">
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 3.91654e-07 10 8.74228e-07C4.48 1.3568e-06 -1.3568e-06 4.48 -8.74228e-07 10C-3.91654e-07 15.52 4.48 20 10 20ZM6.5 9.25L11.69 9.25L9.97 7.53C9.68 7.24 9.68 6.76 9.97 6.47C10.12 6.32 10.31 6.25 10.5 6.25C10.69 6.25 10.88 6.32 11.03 6.47L14.03 9.47C14.32 9.76 14.32 10.24 14.03 10.53L11.03 13.53C10.74 13.82 10.26 13.82 9.97 13.53C9.68 13.24 9.68 12.76 9.97 12.47L11.69 10.75L6.5 10.75C6.09 10.75 5.75 10.41 5.75 10C5.75 9.59 6.09 9.25 6.5 9.25Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>
                    <img
                        className="hidden md:block flex-shrink-0 img-fluid h-118"
                        src="shopal-assets/images/slider-photos-bg.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="container px-4 md:px-10 mx-auto">
                <div className="flex flex-wrap items-center justify-center -mx-4 -mb-6">
                    <div className="w-full sm:w-1/2 xl:w-1/4 px-4 mb-6">
                        <div className="flex max-w-xs mx-auto">
                            <div className="flex mr-6 items-center justify-center w-12 h-12 rounded-full bg-gray-900">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M20.2102 7.81994L12.5102 12.2799C12.2002 12.4599 11.8102 12.4599 11.4902 12.2799L3.79021 7.81994C3.24021 7.49994 3.10021 6.74994 3.52021 6.27994C3.81021 5.94994 4.14021 5.67994 4.49021 5.48994L9.91021 2.48994C11.0702 1.83994 12.9502 1.83994 14.1102 2.48994L19.5302 5.48994C19.8802 5.67994 20.2102 5.95994 20.5002 6.27994C20.9002 6.74994 20.7602 7.49994 20.2102 7.81994Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M11.4305 14.1399V20.9599C11.4305 21.7199 10.6605 22.2199 9.98047 21.8899C7.92047 20.8799 4.45047 18.9899 4.45047 18.9899C3.23047 18.2999 2.23047 16.5599 2.23047 15.1299V9.96988C2.23047 9.17988 3.06047 8.67988 3.74047 9.06988L10.9305 13.2399C11.2305 13.4299 11.4305 13.7699 11.4305 14.1399Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M12.5703 14.1399V20.9599C12.5703 21.7199 13.3403 22.2199 14.0203 21.8899C16.0803 20.8799 19.5503 18.9899 19.5503 18.9899C20.7703 18.2999 21.7703 16.5599 21.7703 15.1299V9.96988C21.7703 9.17988 20.9403 8.67988 20.2603 9.06988L13.0703 13.2399C12.7703 13.4299 12.5703 13.7699 12.5703 14.1399Z"
                                        fill="#C6FF53"
                                    />
                                </svg>
                            </div>
                            <div className="pt-1">
                                <h4 className="text-xl font-bold text-indigo-500">Free Shipping</h4>
                                <span className="text-lg font-bold text-gray-900">From 99$</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 xl:w-1/4 px-4 mb-6">
                        <div className="flex max-w-xs mx-auto">
                            <div className="flex mr-6 items-center justify-center w-12 h-12 rounded-full bg-gray-900">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.0002 22.75C14.7302 22.75 14.4802 22.6 14.3502 22.37C14.2202 22.13 14.2202 21.85 14.3602 21.61L15.4102 19.86C15.6202 19.51 16.0802 19.39 16.4402 19.6C16.8002 19.81 16.9102 20.27 16.7002 20.63L16.4302 21.08C19.1902 20.43 21.2602 17.95 21.2602 14.99C21.2602 14.58 21.6002 14.24 22.0102 14.24C22.4202 14.24 22.7602 14.58 22.7602 14.99C22.7502 19.27 19.2702 22.75 15.0002 22.75Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M2 9.75C1.59 9.75 1.25 9.41 1.25 9C1.25 4.73 4.73 1.25 9 1.25C9.27 1.25 9.52 1.4 9.65 1.63C9.78 1.87 9.78 2.15 9.64 2.39L8.59 4.14C8.38 4.49 7.92 4.61 7.56 4.39C7.21 4.18 7.09 3.72 7.31 3.36L7.58 2.91C4.81 3.56 2.75 6.04 2.75 9C2.75 9.41 2.41 9.75 2 9.75Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M16.4002 8.20996L12.6402 6.17996C12.2402 5.96996 11.7702 5.96996 11.3702 6.17996L7.60016 8.20996C7.33016 8.35996 7.16016 8.64996 7.16016 8.96996C7.16016 9.29996 7.33016 9.58996 7.60016 9.73996L11.3602 11.77C11.5602 11.88 11.7802 11.93 12.0002 11.93C12.2202 11.93 12.4402 11.88 12.6402 11.77L16.4002 9.73996C16.6702 9.58996 16.8402 9.29996 16.8402 8.96996C16.8402 8.64996 16.6702 8.35996 16.4002 8.20996Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M10.74 12.4699L7.24 10.7199C6.97 10.5899 6.66 10.5999 6.4 10.7599C6.15 10.9199 6 11.1899 6 11.4899V14.7999C6 15.3699 6.32 15.8899 6.83 16.1399L10.33 17.8899C10.45 17.9499 10.58 17.9799 10.72 17.9799C10.88 17.9799 11.03 17.9399 11.17 17.8499C11.43 17.6899 11.58 17.4199 11.58 17.1199V13.8099C11.57 13.2399 11.26 12.7299 10.74 12.4699Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M17.5899 10.7599C17.3299 10.5999 17.0199 10.5899 16.7499 10.7199L13.2499 12.4699C12.7399 12.7299 12.4199 13.2399 12.4199 13.8099V17.1199C12.4199 17.4199 12.5699 17.6899 12.8299 17.8499C12.9699 17.9399 13.1199 17.9799 13.2799 17.9799C13.4099 17.9799 13.5399 17.9499 13.6699 17.8899L17.1699 16.1399C17.6799 15.8799 17.9999 15.3699 17.9999 14.7999V11.4899C17.9999 11.1899 17.8499 10.9199 17.5899 10.7599Z"
                                        fill="#C6FF53"
                                    />
                                </svg>
                            </div>
                            <div className="pt-1">
                                <h4 className="text-xl font-bold text-indigo-500">365 Days</h4>
                                <span className="text-lg font-bold text-gray-900">
                                    For free return
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 xl:w-1/4 px-4 mb-6">
                        <div className="flex max-w-xs mx-auto">
                            <div className="flex mr-6 items-center justify-center w-12 h-12 rounded-full bg-gray-900">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M17.62 10.7501C17.19 10.7501 16.85 10.4001 16.85 9.9801C16.85 9.6101 16.48 8.8401 15.86 8.1701C15.25 7.5201 14.58 7.1401 14.02 7.1401C13.59 7.1401 13.25 6.7901 13.25 6.3701C13.25 5.9501 13.6 5.6001 14.02 5.6001C15.02 5.6001 16.07 6.1401 16.99 7.1101C17.85 8.0201 18.4 9.1501 18.4 9.9701C18.4 10.4001 18.05 10.7501 17.62 10.7501Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M21.2298 10.75C20.7998 10.75 20.4598 10.4 20.4598 9.98C20.4598 6.43 17.5698 3.55 14.0298 3.55C13.5998 3.55 13.2598 3.2 13.2598 2.78C13.2598 2.36 13.5998 2 14.0198 2C18.4198 2 21.9998 5.58 21.9998 9.98C21.9998 10.4 21.6498 10.75 21.2298 10.75Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M11.05 14.95L9.2 16.8C8.81 17.19 8.19 17.19 7.79 16.81C7.68 16.7 7.57 16.6 7.46 16.49C6.43 15.45 5.5 14.36 4.67 13.22C3.85 12.08 3.19 10.94 2.71 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C10.83 13.32 10.94 13.42 11.04 13.52C11.44 13.91 11.45 14.55 11.05 14.95Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M21.9696 18.33C21.9696 18.61 21.9196 18.9 21.8196 19.18C21.7896 19.26 21.7596 19.34 21.7196 19.42C21.5496 19.78 21.3296 20.12 21.0396 20.44C20.5496 20.98 20.0096 21.37 19.3996 21.62C19.3896 21.62 19.3796 21.63 19.3696 21.63C18.7796 21.87 18.1396 22 17.4496 22C16.4296 22 15.3396 21.76 14.1896 21.27C13.0396 20.78 11.8896 20.12 10.7496 19.29C10.3596 19 9.96961 18.71 9.59961 18.4L12.8696 15.13C13.1496 15.34 13.3996 15.5 13.6096 15.61C13.6596 15.63 13.7196 15.66 13.7896 15.69C13.8696 15.72 13.9496 15.73 14.0396 15.73C14.2096 15.73 14.3396 15.67 14.4496 15.56L15.2096 14.81C15.4596 14.56 15.6996 14.37 15.9296 14.25C16.1596 14.11 16.3896 14.04 16.6396 14.04C16.8296 14.04 17.0296 14.08 17.2496 14.17C17.4696 14.26 17.6996 14.39 17.9496 14.56L21.2596 16.91C21.5196 17.09 21.6996 17.3 21.8096 17.55C21.9096 17.8 21.9696 18.05 21.9696 18.33Z"
                                        fill="#C6FF53"
                                    />
                                </svg>
                            </div>
                            <div className="pt-1">
                                <h4 className="text-xl font-bold text-indigo-500">Suppport</h4>
                                <span className="text-lg font-bold text-gray-900">
                                    Online support 24/7
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 xl:w-1/4 px-4 mb-6">
                        <div className="flex max-w-xs mx-auto">
                            <div className="flex mr-6 items-center justify-center w-12 h-12 rounded-full bg-gray-900">
                                <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.38965 18.49V8.32998C8.38965 7.92998 8.50965 7.53998 8.72965 7.20998L11.4596 3.14998C11.8896 2.49998 12.9596 2.03998 13.8696 2.37998C14.8496 2.70998 15.4996 3.80997 15.2896 4.78997L14.7696 8.05998C14.7296 8.35998 14.8096 8.62998 14.9796 8.83998C15.1496 9.02998 15.3996 9.14997 15.6696 9.14997H19.7796C20.5696 9.14997 21.2496 9.46997 21.6496 10.03C22.0296 10.57 22.0996 11.27 21.8496 11.98L19.3896 19.47C19.0796 20.71 17.7296 21.72 16.3896 21.72H12.4896C11.8196 21.72 10.8796 21.49 10.4496 21.06L9.16965 20.07C8.67965 19.7 8.38965 19.11 8.38965 18.49Z"
                                        fill="#C6FF53"
                                    />
                                    <path
                                        d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
                                        fill="#C6FF53"
                                    />
                                </svg>
                            </div>
                            <div className="pt-1">
                                <h4 className="text-xl font-bold text-indigo-500">99% Positive</h4>
                                <span className="text-lg font-bold text-gray-900">Feedback</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
                <div className="navbar-backdrop fixed inset-0 backdrop-blur-xl backdrop-filter bg-gray-900 bg-opacity-80" />
                <nav className="relative pt-7 pb-8 bg-white h-full overflow-y-auto">
                    <div className="flex flex-col px-6 h-full">
                        <a className="inline-block ml-4 mb-7" href="#">
                            <img src="shopal-assets/logos/shopal-logo.svg" alt="" />
                        </a>
                        <ul className="w-full mb-auto pb-16">
                            <li className="mb-6">
                                <button className="relative group inline-flex flex-wrap items-center text-left text-base font-bold text-black">
                                    <span className="mr-2">Category</span>
                                    <svg
                                        width={8}
                                        height={6}
                                        viewBox="0 0 8 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <div className="hidden group-hover:block w-full pt-2 px-2">
                                        <a
                                            className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                            href="#"
                                        >
                                            Category 1
                                        </a>
                                        <a
                                            className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                            href="#"
                                        >
                                            Category 1
                                        </a>
                                        <a
                                            className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                            href="#"
                                        >
                                            Category 1
                                        </a>
                                    </div>
                                </button>
                            </li>
                            <li className="mb-6">
                                <button className="relative group inline-flex flex-wrap items-center text-left text-base font-bold text-black">
                                    <span className="mr-2">Pages</span>
                                    <svg
                                        width={8}
                                        height={6}
                                        viewBox="0 0 8 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <div className="hidden group-hover:block w-full pt-2 px-2">
                                        <a
                                            className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                            href="#"
                                        >
                                            Category 1
                                        </a>
                                        <a
                                            className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                            href="#"
                                        >
                                            Category 1
                                        </a>
                                        <a
                                            className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                            href="#"
                                        >
                                            Category 1
                                        </a>
                                    </div>
                                </button>
                            </li>
                            <li className="mb-6">
                                <button className="relative group inline-flex flex-wrap items-center text-left text-base font-bold text-black">
                                    <span className="mr-2">Products</span>
                                    <svg
                                        width={8}
                                        height={6}
                                        viewBox="0 0 8 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.99999 5.08071C3.91243 5.08081 3.82572 5.06361 3.74483 5.03009C3.66394 4.99657 3.59048 4.94739 3.52866 4.88538L0.700184 2.05728C0.575173 1.93227 0.504943 1.76272 0.504944 1.58593C0.504944 1.40913 0.575175 1.23958 0.700187 1.11457C0.825199 0.989561 0.99475 0.919331 1.17154 0.919331C1.34834 0.919332 1.51789 0.989563 1.6429 1.11457L3.99999 3.47132L6.35708 1.11455C6.48209 0.989543 6.65165 0.919312 6.82844 0.919312C7.00523 0.919311 7.17478 0.989541 7.29979 1.11455C7.42481 1.23956 7.49504 1.40911 7.49504 1.58591C7.49504 1.7627 7.42481 1.93225 7.2998 2.05726L4.47132 4.8854C4.4095 4.9474 4.33604 4.99658 4.25515 5.0301C4.17426 5.06361 4.08755 5.08082 3.99999 5.08071V5.08071Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <div className="hidden group-hover:block w-full pt-2 px-2">
                                        <a
                                            className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                            href="#"
                                        >
                                            Category 1
                                        </a>
                                        <a
                                            className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                            href="#"
                                        >
                                            Category 1
                                        </a>
                                        <a
                                            className="block p-2 text-sm font-bold text-black hover:text-indigo-500"
                                            href="#"
                                        >
                                            Category 1
                                        </a>
                                    </div>
                                </button>
                            </li>
                            <li className="mb-6">
                                <a className="inline-block pl-1 font-bold" href="#">
                                    Blog
                                </a>
                            </li>
                            <li className="mb-6">
                                <a className="inline-block pl-1 font-bold" href="#">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a className="inline-block pl-1 font-bold" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="w-full">
                            <button className="block w-full py-4 px-4 mb-4 font-bold border-2 border-gray-900 rounded-md shadow">
                                Log in
                            </button>
                            <button className="block w-full py-4 px-4 mb-8 font-bold border-2 border-gray-900 rounded-md shadow text-gray-900 bg-green-500">
                                Sign up
                            </button>
                            <p className="pl-2 text-sm">2022 © Shuffle</p>
                        </div>
                    </div>
                </nav>
            </div>
        </section>


    )
}

export default Hero
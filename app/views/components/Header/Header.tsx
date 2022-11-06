const Header = () => {
  return (
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

  )
}

export default Header
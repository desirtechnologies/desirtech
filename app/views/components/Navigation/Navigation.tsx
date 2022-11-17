const Navigation = () => {
    return (
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
    )
}

export default Navigation
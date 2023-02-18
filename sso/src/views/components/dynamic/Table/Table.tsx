export default function Table() {
    return (
        <section className="py-4 overflow-hidden relative mt-64 z-10">
            <div className="container px-4 mx-auto">
                <div className="pt-5 pb-7 bg-neutral-50 border border-neutral-100 rounded-xl">
                    <div className="px-6">
                        <div className="flex flex-wrap items-center justify-between -m-2 mb-5">
                            <div className="w-auto p-2">
                                <h3 className="font-heading text-lg text-neutral-600 font-semibold">
                                    New Bookings
                                </h3>
                            </div>
                            <div className="w-auto p-2">
                                <a
                                    className="inline-flex items-center px-4 py-2.5 text-sm text-neutral-50 font-medium bg-neutral-600 hover:bg-neutral-800 focus:ring-4 focus:ring-neutral-400 rounded-lg"
                                    href="#"
                                >
                                    <svg
                                        className="mr-2.5"
                                        width={11}
                                        height={10}
                                        viewBox="0 0 11 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M6.25 0.999805C6.25 0.585592 5.91421 0.249805 5.5 0.249805C5.08579 0.249805 4.75 0.585592 4.75 0.999805H6.25ZM4.75 8.99981C4.75 9.41402 5.08579 9.74981 5.5 9.74981C5.91421 9.74981 6.25 9.41402 6.25 8.99981H4.75ZM9.5 5.74981C9.91421 5.74981 10.25 5.41402 10.25 4.99981C10.25 4.58559 9.91421 4.24981 9.5 4.24981V5.74981ZM1.5 4.24981C1.08579 4.24981 0.75 4.58559 0.75 4.99981C0.75 5.41402 1.08579 5.74981 1.5 5.74981L1.5 4.24981ZM4.75 0.999805V4.99981H6.25V0.999805H4.75ZM4.75 4.99981V8.99981H6.25V4.99981H4.75ZM9.5 4.24981H5.5V5.74981H9.5V4.24981ZM5.5 4.24981L1.5 4.24981L1.5 5.74981H5.5L5.5 4.24981Z"
                                            fill="#F9FAFB"
                                        />
                                    </svg>
                                    <span>Add Booking</span>
                                </a>
                            </div>
                        </div>
                        <div className="mb-12 w-full overflow-x-auto">
                            <table className="w-full min-w-max">
                                <thead>
                                    <tr className="text-left">
                                        <th className="p-0">
                                            <div className="pb-3.5">
                                                <a className="inline-flex items-center" href="#">
                                                    <span className="mr-2.5 text-sm text-gray-400 font-medium">
                                                        Name
                                                    </span>
                                                    <svg
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M4.7636 6.5636C5.11508 6.21213 5.68492 6.21213 6.0364 6.5636L9 9.52721L11.9636 6.5636C12.3151 6.21213 12.8849 6.21213 13.2364 6.5636C13.5879 6.91508 13.5879 7.48492 13.2364 7.8364L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.8364C4.41213 7.48492 4.41213 6.91508 4.7636 6.5636Z"
                                                            fill="#7F8995"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th className="p-0">
                                            <div className="pb-3.5">
                                                <a className="inline-flex items-center" href="#">
                                                    <span className="mr-2.5 text-sm text-gray-400 font-medium">
                                                        Email
                                                    </span>
                                                    <svg
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M4.7636 6.5636C5.11508 6.21213 5.68492 6.21213 6.0364 6.5636L9 9.52721L11.9636 6.5636C12.3151 6.21213 12.8849 6.21213 13.2364 6.5636C13.5879 6.91508 13.5879 7.48492 13.2364 7.8364L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.8364C4.41213 7.48492 4.41213 6.91508 4.7636 6.5636Z"
                                                            fill="#7F8995"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th className="p-0">
                                            <div className="pb-3.5">
                                                <a className="inline-flex items-center" href="#">
                                                    <span className="mr-4 text-sm text-gray-400 font-medium">
                                                        Booking Time
                                                    </span>
                                                    <svg
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M4.7636 6.5636C5.11508 6.21213 5.68492 6.21213 6.0364 6.5636L9 9.52721L11.9636 6.5636C12.3151 6.21213 12.8849 6.21213 13.2364 6.5636C13.5879 6.91508 13.5879 7.48492 13.2364 7.8364L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.8364C4.41213 7.48492 4.41213 6.91508 4.7636 6.5636Z"
                                                            fill="#7F8995"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th className="p-0">
                                            <div className="pb-3.5 flex justify-end">
                                                <a className="inline-flex items-center" href="#">
                                                    <span className="mr-4 text-sm text-gray-400 font-medium">
                                                        Status
                                                    </span>
                                                    <svg
                                                        width={18}
                                                        height={18}
                                                        viewBox="0 0 18 18"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M4.7636 6.5636C5.11508 6.21213 5.68492 6.21213 6.0364 6.5636L9 9.52721L11.9636 6.5636C12.3151 6.21213 12.8849 6.21213 13.2364 6.5636C13.5879 6.91508 13.5879 7.48492 13.2364 7.8364L9.6364 11.4364C9.28492 11.7879 8.71508 11.7879 8.3636 11.4364L4.7636 7.8364C4.41213 7.48492 4.41213 6.91508 4.7636 6.5636Z"
                                                            fill="#7F8995"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </th>
                                        <th className="p-0">
                                            <div className="pb-3.5" />
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-3 pr-4">
                                            <div className="flex flex-wrap items-center">
                                                <img
                                                    className="mr-3"
                                                    src="dashy-assets/images/avatar5.png"
                                                    alt=""
                                                />
                                                <span className="font-semibold">Corina McCoy</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">coy73@aol.com</span>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">Aug 21, 2022 9:45PM</span>
                                        </td>
                                        <td className="flex justify-end py-3 pr-4">
                                            <span className="px-2.5 py-1 text-sm font-medium text-blue-500 bg-blue-500 bg-opacity-10 rounded-full">
                                                Confirmed
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <a className="inline-flex" href="#">
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">
                                            <div className="flex flex-wrap items-center">
                                                <img
                                                    className="mr-3"
                                                    src="dashy-assets/images/avatar5.png"
                                                    alt=""
                                                />
                                                <span className="font-semibold">Brooklyn Simmons</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">coy73@aol.com</span>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">Aug 21, 2022 9:45PM</span>
                                        </td>
                                        <td className="flex justify-end py-3 pr-4">
                                            <span className="px-2.5 py-1 text-sm font-medium text-blue-500 bg-blue-500 bg-opacity-10 rounded-full">
                                                Confirmed
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <a className="inline-flex" href="#">
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">
                                            <div className="flex flex-wrap items-center pl-12">
                                                <span className="font-semibold">Esther Howard</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">phillips416@gmail.com</span>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">Aug 21, 2022 9:45PM</span>
                                        </td>
                                        <td className="flex justify-end py-3 pr-4">
                                            <span className="px-2.5 py-1 text-sm font-medium text-yellow-500 bg-yellow-500 bg-opacity-10 rounded-full">
                                                Pending
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <a className="inline-flex" href="#">
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">
                                            <div className="flex flex-wrap items-center pl-12">
                                                <span className="font-semibold">Guy Hawkins</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">phillips416@gmail.com</span>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">Aug 21, 2022 9:45PM</span>
                                        </td>
                                        <td className="flex justify-end py-3 pr-4">
                                            <span className="px-2.5 py-1 text-sm font-medium text-yellow-500 bg-yellow-500 bg-opacity-10 rounded-full">
                                                Pending
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <a className="inline-flex" href="#">
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">
                                            <div className="flex flex-wrap items-center">
                                                <img
                                                    className="mr-3"
                                                    src="dashy-assets/images/avatar5.png"
                                                    alt=""
                                                />
                                                <span className="font-semibold">Jane Cooper</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">coy73@aol.com</span>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">Aug 21, 2022 9:45PM</span>
                                        </td>
                                        <td className="flex justify-end py-3 pr-4">
                                            <span className="px-2.5 py-1 text-sm font-medium text-blue-500 bg-blue-500 bg-opacity-10 rounded-full">
                                                Confirmed
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <a className="inline-flex" href="#">
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">
                                            <div className="flex flex-wrap items-center pl-12">
                                                <span className="font-semibold">Darlene Robertson</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">phillips416@gmail.com</span>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">Aug 21, 2022 9:45PM</span>
                                        </td>
                                        <td className="flex justify-end py-3 pr-4">
                                            <span className="px-2.5 py-1 text-sm font-medium text-yellow-500 bg-yellow-500 bg-opacity-10 rounded-full">
                                                Pending
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <a className="inline-flex" href="#">
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-3 pr-4">
                                            <div className="flex flex-wrap items-center">
                                                <img
                                                    className="mr-3"
                                                    src="dashy-assets/images/avatar5.png"
                                                    alt=""
                                                />
                                                <span className="font-semibold">Bessie Cooper</span>
                                            </div>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">coy73@aol.com</span>
                                        </td>
                                        <td className="py-3 pr-4">
                                            <span className="font-medium">Aug 21, 2022 9:45PM</span>
                                        </td>
                                        <td className="flex justify-end py-3 pr-4">
                                            <span className="px-2.5 py-1 text-sm font-medium text-yellow-500 bg-yellow-500 bg-opacity-10 rounded-full">
                                                Pending
                                            </span>
                                        </td>
                                        <td className="py-3">
                                            <a className="inline-flex" href="#">
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="mx-0.5 w-1 h-1 bg-neutral-200 rounded-full" />
                                                <span className="w-1 h-1 bg-neutral-200 rounded-full" />
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-wrap items-center justify-between -m-2">
                            <div className="w-auto p-2">
                                <p className="text-sm text-neutral-500">
                                    Showing 1 of 20 out of 157 results
                                </p>
                            </div>
                            <div className="w-auto p-2">
                                <div className="flex flex-wrap -m-0.5">
                                    <div className="w-auto p-0.5">
                                        <a
                                            className="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                                            href="#"
                                        >
                                            <svg
                                                width={7}
                                                height={12}
                                                viewBox="0 0 7 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M6 10.6666L1.33333 5.99998L6 1.33331"
                                                    stroke="#71717A"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="w-auto p-0.5">
                                        <a
                                            className="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                                            href="#"
                                        >
                                            <span className="text-sm text-neutral-400 font-semibold">
                                                1
                                            </span>
                                        </a>
                                    </div>
                                    <div className="w-auto p-0.5">
                                        <a
                                            className="flex items-center justify-center w-9 h-9 border border-neutral-600 rounded-sm"
                                            href="#"
                                        >
                                            <span className="text-sm text-neutral-400 font-semibold">
                                                2
                                            </span>
                                        </a>
                                    </div>
                                    <div className="w-auto p-0.5">
                                        <a
                                            className="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                                            href="#"
                                        >
                                            <span className="text-sm text-neutral-400 font-semibold">
                                                3
                                            </span>
                                        </a>
                                    </div>
                                    <div className="w-auto p-0.5">
                                        <a
                                            className="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                                            href="#"
                                        >
                                            <span className="text-sm text-neutral-400 font-semibold">
                                                4
                                            </span>
                                        </a>
                                    </div>
                                    <div className="w-auto p-0.5">
                                        <a
                                            className="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                                            href="#"
                                        >
                                            <svg
                                                width={7}
                                                height={12}
                                                viewBox="0 0 7 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1.33335L5.66667 6.00002L1 10.6667"
                                                    stroke="#71717A"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="w-auto p-0.5">
                                        <a
                                            className="flex items-center justify-center w-9 h-9 border hover:border-neutral-300 rounded-sm"
                                            href="#"
                                        >
                                            <svg
                                                width={7}
                                                height={12}
                                                viewBox="0 0 7 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1.33335L5.66667 6.00002L1 10.6667"
                                                    stroke="#71717A"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <svg
                                                width={7}
                                                height={12}
                                                viewBox="0 0 7 12"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M1 1.33335L5.66667 6.00002L1 10.6667"
                                                    stroke="#71717A"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
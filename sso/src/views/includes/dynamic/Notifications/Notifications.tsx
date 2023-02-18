export default function Notifications() {

    return (
        <section className="py-4 overflow-hidden hidden">
            <div className="container px-4 mx-auto">
                <div
                    className="relative px-6 py-4 overflow-hidden rounded-xl"

                >
                    <div className="relative z-10 flex flex-wrap items-center justify-between -m-2">
                        <div className="w-auto p-2">
                            <h3 className="font-heading font-semibold text-lg text-white">
                                Save 30% on Pro Package. Get started now
                            </h3>
                        </div>
                        <div className="w-auto p-2">
                            <a
                                className="inline-flex flex-wrap items-center px-5 py-3.5 text-sm text-neutral-50 font-medium bg-gradient-purple-left hover:bg-gradient-purple-left-dark rounded-lg transition duration-300"
                                href="#"
                            >
                                <span className="mr-3 font-medium">Upgrade to Pro</span>
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.33333 3.33337L14 8.00004M14 8.00004L9.33333 12.6667M14 8.00004L2 8.00004"
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
            </div>
        </section>

    )
}
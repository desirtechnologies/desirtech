export default function SummarySection() {
    return (
        <section className="py-16 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -m-4">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex-initial mb-10">
                                <div className="md:max-w-lg">
                                    <h2 className="font-heading mb-6 text-4xl md:text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                                        Frequently Asked Questions
                                    </h2>
                                    <p className="text-gray-500 font-bold">
                                        Lorem ipsum dolor sit amet, to the consectr adipiscing elit.
                                        Volutpat tempor to the condi mentum vitae vel purus.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-initial">
                                <div className="flex flex-wrap -m-4">
                                    <div className="w-full p-4">
                                        <a className="block p-10 bg-white rounded-3xl" href="#">
                                            <div className="flex flex-wrap -m-2">
                                                <div className="flex-1 p-2">
                                                    <h3 className="font-heading mb-3 text-xl text-gray-900 font-black">
                                                        How does Zanrly help you in problems?
                                                    </h3>
                                                    <p className="text-gray-500 font-bold">
                                                        Lorem ipsum dolor sit amet, to the consectr adipiscing
                                                        elit. Volutpat tempor to the condi mentum.
                                                    </p>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M6.07928 15.8201L12.3093 15.8201L17.9193 15.8201C18.8793 15.8201 19.3593 14.6601 18.6793 13.9801L13.4993 8.80007C12.6693 7.97007 11.3193 7.97007 10.4893 8.80007L8.51928 10.7701L5.30927 13.9801C4.63927 14.6601 5.11928 15.8201 6.07928 15.8201Z"
                                                            fill="#6B7280"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-full p-4">
                                        <a className="block p-10 bg-white rounded-3xl" href="#">
                                            <div className="flex flex-wrap -m-2">
                                                <div className="flex-1 p-2">
                                                    <h3 className="font-heading text-xl text-gray-900 font-black">
                                                        Why we are so confident about future projects?
                                                    </h3>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M17.9207 8.17993L11.6907 8.17993H6.08072C5.12072 8.17993 4.64073 9.33993 5.32073 10.0199L10.5007 15.1999C11.3307 16.0299 12.6807 16.0299 13.5107 15.1999L15.4807 13.2299L18.6907 10.0199C19.3607 9.33993 18.8807 8.17993 17.9207 8.17993Z"
                                                            fill="#6B7280"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="w-full p-4">
                                        <a className="block p-10 bg-white rounded-3xl" href="#">
                                            <div className="flex flex-wrap -m-2">
                                                <div className="flex-1 p-2">
                                                    <h3 className="font-heading text-xl text-gray-900 font-black">
                                                        Is it really unlimited downloads?
                                                    </h3>
                                                </div>
                                                <div className="w-auto p-2">
                                                    <svg
                                                        width={24}
                                                        height={24}
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M17.9207 8.17993L11.6907 8.17993H6.08072C5.12072 8.17993 4.64073 9.33993 5.32073 10.0199L10.5007 15.1999C11.3307 16.0299 12.6807 16.0299 13.5107 15.1999L15.4807 13.2299L18.6907 10.0199C19.3607 9.33993 18.8807 8.17993 17.9207 8.17993Z"
                                                            fill="#6B7280"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <img
                            className="mx-auto md:mr-0"
                            src="zanrly-assets/images/faq/light.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}
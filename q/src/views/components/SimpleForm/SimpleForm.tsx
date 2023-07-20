export default function SimpleForm() {

    return (
        <section className="py-10 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap -m-4">
                    <div className="w-full md:w-1/2 p-4">
                        <div
                            className="py-32 px-8 h-full rounded-3xl"
                        
                        />
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <div className="py-32 px-8 text-center h-full bg-white overflow-hidden rounded-3xl">
                            <div className="max-w-md mx-auto">
                                <span className="inline-block mb-2 text-sm text-blue-500 font-bold uppercase tracking-widest">
                                    Applications
                                </span>
                                <h2 className="font-heading mb-8 text-4xl md:text-5xl text-gray-900 font-black tracking-tight">
                                    Subscribe and receive updates
                                </h2>
                                <div className="max-w-sm mx-auto">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="w-full md:flex-1 p-2">
                                            <input
                                                className="px-6 py-3.5 w-full text-lg text-gray-500 font-bold bg-gray-100 outline-none focus:ring-4 focus:ring-blue-200 placeholder-gray-500 rounded-full"
                                                id="newsletterLightReverseInput2-1"
                                                type="text"
                                                placeholder="Email address"
                                            />
                                        </div>
                                        <div className="w-full md:w-auto p-2">
                                            <div className="flex flex-wrap justify-center -m-2">
                                                <div className="w-full md:w-auto p-2">
                                                    <a
                                                        className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                                                        href="#"
                                                    >
                                                        Sign In
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
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
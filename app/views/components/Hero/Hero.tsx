const Hero = () => {

    return (
        <section className="py-26">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center border-3 border-indigo-900 rounded-2xl shadow-md overflow-hidden">
                    <img
                        className="block w-full md:w-2/5 h-128 md:h-156 object-cover"
                        src="https://static.shuffle.dev/uploads/files/4f/4fe644700e31070019e6907843ca9db3bf339751/LOGO.png"
                        alt=""
                    />
                    <div className="w-full md:w-3/5 px-6 lg:px-20 py-16">
                        <div className="mb-6 text-indigo-300 opacity-10">
                            <svg
                                width={75}
                                height={64}
                                viewBox="0 0 75 64"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M74.1252 0.631112L72.2546 13.9596C68.5132 13.6478 65.4734 14.2714 63.1351 15.8303C60.7967 17.3112 59.1599 19.4937 58.2246 22.3776C57.3672 25.1836 57.2113 28.4573 57.7569 32.1986H74.1252V64H42.3239V32.1986C42.3239 20.9746 44.935 12.4787 50.1573 6.71079C55.3796 0.864946 63.3689 -1.16161 74.1252 0.631112ZM31.8014 0.631112L29.9307 13.9596C26.1894 13.6478 23.1495 14.2714 20.8112 15.8303C18.4729 17.3112 16.836 19.4937 15.9007 22.3776C15.0433 25.1836 14.8874 28.4573 15.433 32.1986H31.8014V64H0V32.1986C0 20.9746 2.61114 12.4787 7.83342 6.71079C13.0557 0.864946 21.045 -1.16161 31.8014 0.631112Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                        <h1 className="max-w-md text-2xl lg:text-3xl font-extrabold font-heading mb-12">
                            Knowledge Determines Destiny.
                        </h1>
                        <h4 className="text-xl font-extrabold">Jeffrey Desir</h4>
                        <span className="block mb-12 text-gray-400 font-bold">
                            Technomancer
                        </span>
                        <div className="flex items-center">
                            <button className="w-4 h-4 mr-4 bg-indigo-100 hover:bg-indigo-200 rounded-full" />
                            <button className="w-4 h-4 mr-4 bg-indigo-500 rounded-full" />
                            <button className="w-4 h-4 mr-4 bg-indigo-100 hover:bg-indigo-200 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero
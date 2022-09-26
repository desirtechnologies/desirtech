const Header = () => {
  return (
    <section>
      <nav className="flex justify-between items-center backdrop-blur-sm py-6 px-10 relative">
        <button className="navbar-burger flex w-14 h-14 items-center justify-center focus:outline-none text-white bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 rounded">
          <svg
            className="block h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div className="hidden xl:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a className="text-lg font-bold" href="#">
            <img
              className="h-8"
              src="nigodo-assets/logo-nigodo.svg"
              alt=""
              width="auto"
            />
          </a>
        </div>
        <div className="hidden xl:inline-flex w-full max-w-xs p-4 items-center bg-white border-2 border-indigo-900 rounded">
          <a className="text-indigo-900 hover:text-indigo-800" href="#">
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94731 18.6997 5.81279 16.9855 4.27665C15.2714 2.74051 13.0338 1.91951 10.7329 1.98247C8.43203 2.04543 6.24272 2.98757 4.61514 4.61515C2.98756 6.24273 2.04543 8.43204 1.98247 10.7329C1.91951 13.0338 2.7405 15.2714 4.27664 16.9855C5.81278 18.6997 7.9473 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5064 21.8481 21.617 21.7737 21.71 21.68C21.8902 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8902 20.4765 21.71 20.29ZM11 18C9.61553 18 8.26215 17.5895 7.111 16.8203C5.95986 16.0511 5.06265 14.9579 4.53284 13.6788C4.00303 12.3997 3.8644 10.9922 4.1345 9.63437C4.4046 8.2765 5.07128 7.02922 6.05025 6.05026C7.02922 5.07129 8.2765 4.4046 9.63436 4.13451C10.9922 3.86441 12.3997 4.00303 13.6788 4.53285C14.9579 5.06266 16.0511 5.95987 16.8203 7.11101C17.5895 8.26216 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9497 15.9498C14.637 17.2625 12.8565 18 11 18Z"
                fill="#171952"
              />
            </svg>
          </a>
          <input
            className="bg-transparent px-3 text-lg font-extrabold text-indigo-900 placeholder-indigo-900 outline-none"
            type="search"
            placeholder="Search now"
          />
        </div>
      </nav>
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-2xl font-bold leading-none" href="#">
              <img
                className="h-6"
                src="nigodo-assets/logo-nigodo.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                  href="#"
                >
                  Resources
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-lg font-extrabold hover:bg-gray-50 rounded"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block py-4 px-6 text-center leading-6 text-lg text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
                href="#"
              >
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>

  )
}

export default Header
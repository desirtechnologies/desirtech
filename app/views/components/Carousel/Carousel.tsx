const Carousel = () => {

  return (
    <section className="py-26">
      <div className="container px-4 mx-auto">
        <div className="relative py-16 px-6 sm:px-20 sm:mx-4 bg-white border-3 border-indigo-900 rounded-2xl shadow-md">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 hidden sm:block px-4">
            <a
              className="inline-flex items-center justify-center w-16 h-16 bg-white text-indigo-900 hover:text-indigo-800 rounded-full border-3 border-indigo-900 hover:border-indigo-800"
              href="#"
            >
              <svg
                width={20}
                height={22}
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 9.33333H5.68332L11.1833 3.85C11.4972 3.53616 11.6735 3.1105 11.6735 2.66667C11.6735 2.22283 11.4972 1.79717 11.1833 1.48333C10.8695 1.16949 10.4438 0.993179 9.99999 0.993179C9.55615 0.993179 9.1305 1.16949 8.81666 1.48333L0.483323 9.81667C0.331589 9.97517 0.212647 10.1621 0.133323 10.3667C-0.0333734 10.7724 -0.0333734 11.2276 0.133323 11.6333C0.212647 11.8379 0.331589 12.0248 0.483323 12.1833L8.81666 20.5167C8.9716 20.6729 9.15593 20.7969 9.35903 20.8815C9.56213 20.9661 9.77997 21.0097 9.99999 21.0097C10.22 21.0097 10.4379 20.9661 10.641 20.8815C10.8441 20.7969 11.0284 20.6729 11.1833 20.5167C11.3395 20.3617 11.4635 20.1774 11.5481 19.9743C11.6328 19.7712 11.6763 19.5534 11.6763 19.3333C11.6763 19.1133 11.6328 18.8955 11.5481 18.6924C11.4635 18.4893 11.3395 18.3049 11.1833 18.15L5.68332 12.6667H18.3333C18.7754 12.6667 19.1993 12.4911 19.5118 12.1785C19.8244 11.8659 20 11.442 20 11C20 10.558 19.8244 10.134 19.5118 9.82149C19.1993 9.50893 18.7754 9.33333 18.3333 9.33333Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 hidden sm:block px-4">
            <a
              className="inline-flex items-center justify-center w-16 h-16 bg-white text-indigo-900 hover:text-indigo-800 rounded-full border-3 border-indigo-900 hover:border-indigo-800"
              href="#"
            >
              <svg
                width={20}
                height={22}
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66668 9.33333H14.3167L8.81668 3.85C8.50284 3.53616 8.32652 3.1105 8.32652 2.66667C8.32652 2.22283 8.50284 1.79717 8.81668 1.48333C9.13052 1.16949 9.55617 0.993179 10 0.993179C10.4438 0.993179 10.8695 1.16949 11.1833 1.48333L19.5167 9.81667C19.6684 9.97517 19.7874 10.1621 19.8667 10.3667C20.0334 10.7724 20.0334 11.2276 19.8667 11.6333C19.7874 11.8379 19.6684 12.0248 19.5167 12.1833L11.1833 20.5167C11.0284 20.6729 10.8441 20.7969 10.641 20.8815C10.4379 20.9661 10.22 21.0097 10 21.0097C9.77999 21.0097 9.56215 20.9661 9.35905 20.8815C9.15595 20.7969 8.97161 20.6729 8.81668 20.5167C8.66046 20.3617 8.53647 20.1774 8.45186 19.9743C8.36724 19.7712 8.32368 19.5534 8.32368 19.3333C8.32368 19.1133 8.36724 18.8955 8.45186 18.6924C8.53647 18.4893 8.66046 18.3049 8.81668 18.15L14.3167 12.6667H1.66668C1.22465 12.6667 0.800724 12.4911 0.488164 12.1785C0.175603 11.8659 9.53714e-06 11.442 9.53714e-06 11C9.53714e-06 10.558 0.175603 10.134 0.488164 9.82149C0.800724 9.50893 1.22465 9.33333 1.66668 9.33333Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div className="flex flex-wrap -mx-4 justify-between items-center relative">
            <div className="w-full sm:w-auto px-4 mb-6 xl:mb-0">
              <div className="flex items-center">
                <img src="nigodo-assets/testimonials/avatar-men.png" alt="" />
                <div className="pl-8">
                  <h4 className="text-xl font-extrabold">Macauley Herring</h4>
                  <span className="block text-orange-400 font-bold">
                    CEO &amp; Founder at Nigodo
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-auto px-4">
              <p className="max-w-xl text-2xl font-extrabold">
                The best solution for anyone who wants to work a flexible schedule
                but still earn a full-time income.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 sm:hidden w-full mt-12 px-4 flex justify-center items-center">
            <a
              className="inline-flex mr-4 items-center justify-center w-16 h-16 bg-white text-indigo-900 hover:text-indigo-800 rounded-full border-3 border-indigo-900 hover:border-indigo-800"
              href="#"
            >
              <svg
                width={20}
                height={22}
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.3333 9.33333H5.68332L11.1833 3.85C11.4972 3.53616 11.6735 3.1105 11.6735 2.66667C11.6735 2.22283 11.4972 1.79717 11.1833 1.48333C10.8695 1.16949 10.4438 0.993179 9.99999 0.993179C9.55615 0.993179 9.1305 1.16949 8.81666 1.48333L0.483323 9.81667C0.331589 9.97517 0.212647 10.1621 0.133323 10.3667C-0.0333734 10.7724 -0.0333734 11.2276 0.133323 11.6333C0.212647 11.8379 0.331589 12.0248 0.483323 12.1833L8.81666 20.5167C8.9716 20.6729 9.15593 20.7969 9.35903 20.8815C9.56213 20.9661 9.77997 21.0097 9.99999 21.0097C10.22 21.0097 10.4379 20.9661 10.641 20.8815C10.8441 20.7969 11.0284 20.6729 11.1833 20.5167C11.3395 20.3617 11.4635 20.1774 11.5481 19.9743C11.6328 19.7712 11.6763 19.5534 11.6763 19.3333C11.6763 19.1133 11.6328 18.8955 11.5481 18.6924C11.4635 18.4893 11.3395 18.3049 11.1833 18.15L5.68332 12.6667H18.3333C18.7754 12.6667 19.1993 12.4911 19.5118 12.1785C19.8244 11.8659 20 11.442 20 11C20 10.558 19.8244 10.134 19.5118 9.82149C19.1993 9.50893 18.7754 9.33333 18.3333 9.33333Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="inline-flex items-center justify-center w-16 h-16 bg-white text-indigo-900 hover:text-indigo-800 rounded-full border-3 border-indigo-900 hover:border-indigo-800"
              href="#"
            >
              <svg
                width={20}
                height={22}
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.66668 9.33333H14.3167L8.81668 3.85C8.50284 3.53616 8.32652 3.1105 8.32652 2.66667C8.32652 2.22283 8.50284 1.79717 8.81668 1.48333C9.13052 1.16949 9.55617 0.993179 10 0.993179C10.4438 0.993179 10.8695 1.16949 11.1833 1.48333L19.5167 9.81667C19.6684 9.97517 19.7874 10.1621 19.8667 10.3667C20.0334 10.7724 20.0334 11.2276 19.8667 11.6333C19.7874 11.8379 19.6684 12.0248 19.5167 12.1833L11.1833 20.5167C11.0284 20.6729 10.8441 20.7969 10.641 20.8815C10.4379 20.9661 10.22 21.0097 10 21.0097C9.77999 21.0097 9.56215 20.9661 9.35905 20.8815C9.15595 20.7969 8.97161 20.6729 8.81668 20.5167C8.66046 20.3617 8.53647 20.1774 8.45186 19.9743C8.36724 19.7712 8.32368 19.5534 8.32368 19.3333C8.32368 19.1133 8.36724 18.8955 8.45186 18.6924C8.53647 18.4893 8.66046 18.3049 8.81668 18.15L14.3167 12.6667H1.66668C1.22465 12.6667 0.800724 12.4911 0.488164 12.1785C0.175603 11.8659 9.53714e-06 11.442 9.53714e-06 11C9.53714e-06 10.558 0.175603 10.134 0.488164 9.82149C0.800724 9.50893 1.22465 9.33333 1.66668 9.33333Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Carousel
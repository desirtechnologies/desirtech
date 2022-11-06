import type { FooterProps } from '@typings/Footer'

const Footer = ({ links, favicon, copyright }: FooterProps) => {

    const Copyright = () => {
        return (
            copyright ? <div className="container px-4 pt-16 pb-24 mx-auto">
                <p className="text-center text-xl md:text-2xl font-extrabold">
                    {copyright ?? "COPYRIGHT_NOT_FOUND"}
                </p>
            </div> : <>COPYRIGHT_NOT_FOUND</>
        )
    }
    const Favicon = () => {
        return (
            favicon ? <a className="inline-block mx-auto mb-20" href={favicon?.url}>
                <img className="h-12" src={favicon?.image?.src} alt={favicon?.image?.alt} />
            </a> : <>FAVICON_NOT_FOUND</>
        )
    }


    const Links = () => {
        return (
            links ? <div className="flex flex-wrap -mx-4 -mb-6 justify-center">
                {
                    links.map((link, index) => {
                        return (
                            <div key={index} className="w-full md:w-1/3 xl:w-auto px-4 mb-6 md:mr-10 2xl:mr-16">
                                <a
                                    className="text-xl md:text-2xl font-extrabold hover:text-indigo-800"
                                    href={link?.url}
                                >
                                    {link?.name}
                                </a>
                            </div>
                        )
                    })
                }

            </div> : <>LINKS_NOT_FOUND</>
        )
    }


    return (
        <section className="pt-14 pb-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="pb-14 mb-14 border-b-2 border-black">
              <div className="flex flex-wrap items-center justify-between -mx-2 -mb-12">
                <div className="w-full md:w-1/2 xl:w-auto px-2 mb-12">
                  <div className="flex items-center">
                    <span className="inline-flex w-12 h-12 items-center justify-center rounded-full border-2 border-black shadow">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.5 15.5C21.78 15.5 22 15.72 22 16V17C22 18.66 20.66 20 19 20C19 18.35 17.65 17 16 17C14.35 17 13 18.35 13 20H11C11 18.35 9.65 17 8 17C6.35 17 5 18.35 5 20C3.34 20 2 18.66 2 17V15C2 14.45 2.45 14 3 14H12.5C13.88 14 15 12.88 15 11.5V6C15 5.45 15.45 5 16 5H16.84C17.56 5 18.22 5.39 18.58 6.01L19.22 7.13C19.31 7.29 19.19 7.5 19 7.5C17.62 7.5 16.5 8.62 16.5 10V13C16.5 14.38 17.62 15.5 19 15.5H21.5Z"
                          fill="#474BC5"
                        />
                        <path
                          d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                          fill="#474BC5"
                        />
                        <path
                          d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                          fill="#474BC5"
                        />
                        <path
                          d="M22 12.53V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L21.74 11.54C21.91 11.84 22 12.18 22 12.53Z"
                          fill="#474BC5"
                        />
                        <path
                          d="M13.08 2H5.69C3.65 2 2 3.65 2 5.69V12.07C2 12.62 2.45 13.07 3 13.07H12.15C13.17 13.07 14 12.24 14 11.22V2.92C14 2.41 13.59 2 13.08 2ZM10.07 7.07L7.98 9.09C7.83 9.23 7.64 9.3 7.46 9.3C7.27 9.3 7.08 9.23 6.94 9.09L5.93 8.13C5.63 7.84 5.62 7.36 5.91 7.06C6.19 6.76 6.67 6.76 6.97 7.04L7.46 7.51L9.03 5.99C9.33 5.7 9.8 5.71 10.09 6.01C10.38 6.31 10.37 6.78 10.07 7.07Z"
                          fill="#474BC5"
                        />
                      </svg>
                    </span>
                    <div className="ml-4">
                      <h4 className="text-base sm:text-xl font-black mb-1">
                        Free Shipping
                      </h4>
                      <span className="text-base sm:text-lg font-bold">From $45</span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-auto px-2 mb-12">
                  <div className="flex items-center">
                    <span className="inline-flex w-12 h-12 items-center justify-center rounded-full border-2 border-black shadow">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.75 8V10.1C18.31 10.04 17.81 10.01 17.25 10V8C17.25 4.85 16.36 2.75 12 2.75C7.64 2.75 6.75 4.85 6.75 8V10C6.19 10.01 5.69 10.04 5.25 10.1V8C5.25 5.1 5.95 1.25 12 1.25C18.05 1.25 18.75 5.1 18.75 8Z"
                          fill="#EB742E"
                        />
                        <path
                          d="M18.75 10.1C18.31 10.04 17.81 10.01 17.25 10H6.75C6.19 10.01 5.69 10.04 5.25 10.1C2.7 10.41 2 11.66 2 15V17C2 21 3 22 7 22H17C21 22 22 21 22 17V15C22 11.66 21.3 10.41 18.75 10.1ZM8.71 16.71C8.52 16.89 8.26 17 8 17C7.87 17 7.74 16.97 7.62 16.92C7.49 16.87 7.39 16.8 7.29 16.71C7.11 16.52 7 16.26 7 16C7 15.87 7.03 15.74 7.08 15.62C7.13 15.5 7.2 15.39 7.29 15.29C7.39 15.2 7.49 15.13 7.62 15.08C7.99 14.92 8.43 15.01 8.71 15.29C8.8 15.39 8.87 15.5 8.92 15.62C8.97 15.74 9 15.87 9 16C9 16.26 8.89 16.52 8.71 16.71ZM12.92 16.38C12.87 16.5 12.8 16.61 12.71 16.71C12.52 16.89 12.26 17 12 17C11.73 17 11.48 16.89 11.29 16.71C11.2 16.61 11.13 16.5 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.73 11.11 15.48 11.29 15.29C11.66 14.92 12.33 14.92 12.71 15.29C12.89 15.48 13 15.73 13 16C13 16.13 12.97 16.26 12.92 16.38ZM16.71 16.71C16.52 16.89 16.26 17 16 17C15.74 17 15.48 16.89 15.29 16.71C15.11 16.52 15 16.27 15 16C15 15.73 15.11 15.48 15.29 15.29C15.67 14.92 16.34 14.92 16.71 15.29C16.75 15.34 16.79 15.39 16.83 15.45C16.87 15.5 16.9 15.56 16.92 15.62C16.95 15.68 16.97 15.74 16.98 15.8C16.99 15.87 17 15.94 17 16C17 16.26 16.89 16.52 16.71 16.71Z"
                          fill="#EB742E"
                        />
                      </svg>
                    </span>
                    <div className="ml-4">
                      <h4 className="text-base sm:text-xl font-black mb-1">
                        Secure Shopping
                      </h4>
                      <span className="text-base sm:text-lg font-bold">
                        100% Guarantee
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-auto px-2 mb-12">
                  <div className="flex items-center">
                    <span className="inline-flex w-12 h-12 items-center justify-center rounded-full border-2 border-black shadow">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.38989 18.49V8.32998C8.38989 7.92998 8.50989 7.53998 8.72989 7.20998L11.4599 3.14998C11.8899 2.49998 12.9599 2.03998 13.8699 2.37998C14.8499 2.70998 15.4999 3.80997 15.2899 4.78997L14.7699 8.05998C14.7299 8.35998 14.8099 8.62998 14.9799 8.83998C15.1499 9.02998 15.3999 9.14997 15.6699 9.14997H19.7799C20.5699 9.14997 21.2499 9.46997 21.6499 10.03C22.0299 10.57 22.0999 11.27 21.8499 11.98L19.3899 19.47C19.0799 20.71 17.7299 21.72 16.3899 21.72H12.4899C11.8199 21.72 10.8799 21.49 10.4499 21.06L9.16989 20.07C8.67989 19.7 8.38989 19.11 8.38989 18.49Z"
                          fill="#C6FF53"
                        />
                        <path
                          d="M5.21 6.37988H4.18C2.63 6.37988 2 6.97988 2 8.45988V18.5199C2 19.9999 2.63 20.5999 4.18 20.5999H5.21C6.76 20.5999 7.39 19.9999 7.39 18.5199V8.45988C7.39 6.97988 6.76 6.37988 5.21 6.37988Z"
                          fill="#C6FF53"
                        />
                      </svg>
                    </span>
                    <div className="ml-4">
                      <h4 className="text-base sm:text-xl font-black mb-1">
                        Customer Satisfaction
                      </h4>
                      <span className="text-base sm:text-lg font-bold">
                        100% Positive Feedbacks
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-auto px-2 mb-12">
                  <div className="flex items-center">
                    <span className="inline-flex w-12 h-12 items-center justify-center rounded-full border-2 border-black shadow">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6.75C21.5188 6.75 22.75 5.51878 22.75 4C22.75 2.48122 21.5188 1.25 20 1.25C18.4812 1.25 17.25 2.48122 17.25 4C17.25 5.51878 18.4812 6.75 20 6.75Z"
                          fill="#FD4B38"
                        />
                        <path
                          d="M19.04 8.15C17.47 7.81 16.19 6.53 15.85 4.96C15.72 4.35 15.71 3.76 15.82 3.2C15.95 2.58 15.49 2 14.85 2H7C4.24 2 2 4.24 2 7V13.95C2 16.71 4.24 18.95 7 18.95H8.5C8.78 18.95 9.14 19.13 9.3 19.35L10.8 21.34C11.46 22.22 12.54 22.22 13.2 21.34L14.7 19.35C14.89 19.1 15.18 18.95 15.5 18.95H17.01C19.77 18.95 22 16.72 22 13.96V9.15C22 8.52 21.42 8.06 20.8 8.18C20.24 8.28 19.65 8.28 19.04 8.15ZM8 12C7.44 12 7 11.55 7 11C7 10.45 7.44 10 8 10C8.55 10 9 10.45 9 11C9 11.55 8.56 12 8 12ZM12 12C11.44 12 11 11.55 11 11C11 10.45 11.44 10 12 10C12.55 10 13 10.45 13 11C13 11.55 12.56 12 12 12ZM16 12C15.44 12 15 11.55 15 11C15 10.45 15.44 10 16 10C16.55 10 17 10.45 17 11C17 11.55 16.56 12 16 12Z"
                          fill="#FD4B38"
                        />
                      </svg>
                    </span>
                    <div className="ml-4">
                      <h4 className="text-base sm:text-xl font-black mb-1">
                        Support
                      </h4>
                      <span className="text-base sm:text-lg font-bold">
                        Online Support 24/7
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 pb-16 border-b-2 border-black">
              <div className="w-full xl:w-1/3 px-4 mb-6 lg:mb-0">
                <a className="inline-block mb-8" href="#">
                  <img
                    className="img-fluid h-8"
                    src="shopal-assets/logos/shopal-logo.svg"
                    alt=""
                    width="auto"
                  />
                </a>
                <div className="flex flex-col mb-8">
                  <p className="max-w-xs text-sm font-bold mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                    urna sapien.
                  </p>
                  <a
                    className="inline-block text-sm font-bold text-black hover:underline mb-3"
                    href="#"
                  >
                    Call us at: 1-888-699-8900
                  </a>
                  <a
                    className="inline-block text-sm font-bold text-black hover:underline"
                    href="mailto:contact@shopal.com"
                  >
                    Email: contact@shopal.com
                  </a>
                </div>
              </div>
              <div className="w-full xl:w-2/3 px-4">
                <div className="flex flex-wrap md:justify-between -mx-4 -mb-8">
                  <div className="w-full sm:w-auto px-4 mb-8">
                    <h3 className="text-base font-black text-black mb-6">
                      Information
                    </h3>
                    <ul>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          About
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Customer Service
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Reward Program
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Shipping &amp; Returns
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full sm:w-auto px-4 mb-8">
                    <h3 className="text-base font-black text-black mb-6">
                      Customer service
                    </h3>
                    <ul>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Search Terms
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Advanced Search
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Orders and Returns
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Contact Us
                        </a>
                      </li>
                      <li className="mb-4">
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Theme FAQs
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-sm font-bold text-black hover:text-indigo-500"
                          href="#"
                        >
                          Store Locations
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full md:w-auto xl:ml-auto px-4 mb-8">
                    <h3 className="text-base font-black text-black mb-6">
                      Newsletter
                    </h3>
                    <span className="block text-sm font-bold text-black mb-5">
                      Lorem ipsum dolor sit amet, consectetur.
                    </span>
                    <div className="xl:flex items-center max-w-xs lg:max-w-sm">
                      <input
                        className="h-12 w-full mb-4 xl:mb-0 xl:mr-3 pl-5 py-3 placeholder-black font-bold text-black border-2 border-black bg-white rounded-md focus:outline-indigo"
                        type="email"
                        placeholder="Type your e-mail"
                      />
                      <button
                        className="group flex-shrink-0 relative inline-block h-12 w-full xl:w-32 bg-blueGray-900 rounded-md"
                        type="submit"
                      >
                        <div className="absolute top-0 left-0 transform -translate-y-1 -translate-x-1 w-full h-full group-hover:translate-y-0 group-hover:translate-x-0 transition duration-300">
                          <div className="flex h-full w-full items-center justify-center text-black hover:text-white bg-white hover:bg-black border-2 border-black rounded-md transition duration-500">
                            <span className="text-base font-black">Subscribe</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-wrap items-center justify-between pt-8">
              <div className="w-full xl:w-auto">
                <p className="text-sm font-bold">
                  © Copyright 2022. All rights reserved by Shopal UX.
                </p>
              </div>
              <div className="xl:absolute top-0 left-1/2 transform xl:-translate-x-1/2 mt-8">
                <a className="inline-block mr-5" href="#">
                  <img src="shopal-assets/logos/visa-indigo.svg" alt="" />
                </a>
                <a className="inline-block mr-5" href="#">
                  <img src="shopal-assets/logos/mastercard-indigo.svg" alt="" />
                </a>
                <a className="inline-block" href="#">
                  <img src="shopal-assets/logos/paypal-indigo.svg" alt="" />
                </a>
              </div>
              <div className="w-full md:w-auto mt-8 md:mt-0">
                <a
                  className="inline-block text-green-500 hover:text-indigo-500 mr-6"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6349 20.7272V12.766H16.3583L16.7669 9.66243H13.6349V7.68126C13.6349 6.78299 13.8882 6.17083 15.203 6.17083L16.8771 6.17015V3.39421C16.5876 3.35731 15.5938 3.27271 14.4371 3.27271C12.0217 3.27271 10.3681 4.71878 10.3681 7.37389V9.66243H7.63647V12.766H10.3681V20.7272H13.6349Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_601_10113"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={7}
                      y={3}
                      width={10}
                      height={18}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.6349 20.7272V12.766H16.3583L16.7669 9.66243H13.6349V7.68126C13.6349 6.78299 13.8882 6.17083 15.203 6.17083L16.8771 6.17015V3.39421C16.5876 3.35731 15.5938 3.27271 14.4371 3.27271C12.0217 3.27271 10.3681 4.71878 10.3681 7.37389V9.66243H7.63647V12.766H10.3681V20.7272H13.6349Z"
                        fill="white"
                      />
                    </mask>
                  </svg>
                </a>
                <a
                  className="inline-block text-green-500 hover:text-indigo-500 mr-6"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_601_10114"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={3}
                      y={4}
                      width={19}
                      height={16}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.8181 6.14598C21.1356 6.44844 20.4032 6.65356 19.6336 6.74513C20.4194 6.27462 21.0208 5.52831 21.3059 4.64177C20.5689 5.0775 19.7553 5.39389 18.8885 5.56541C18.1943 4.82489 17.2069 4.36365 16.1118 4.36365C14.0108 4.36365 12.3072 6.06719 12.3072 8.16707C12.3072 8.46489 12.3408 8.75577 12.4057 9.03392C9.24434 8.87513 6.44104 7.3605 4.56483 5.05895C4.23686 5.61986 4.05028 6.27344 4.05028 6.9711C4.05028 8.29107 4.72243 9.45574 5.74225 10.1371C5.11877 10.1163 4.53237 9.94477 4.01901 9.65968V9.70719C4.01901 11.5498 5.33086 13.0876 7.07031 13.4376C6.75161 13.5234 6.41555 13.5709 6.06789 13.5709C5.82222 13.5709 5.58464 13.5466 5.35171 13.5002C5.8361 15.0125 7.24067 16.1123 8.90483 16.1424C7.6034 17.1623 5.96243 17.7683 4.1801 17.7683C3.87301 17.7683 3.57052 17.7498 3.27271 17.7162C4.95655 18.7974 6.95561 19.4279 9.10416 19.4279C16.1026 19.4279 19.928 13.6312 19.928 8.60398L19.9153 8.11147C20.6627 7.57834 21.3094 6.90853 21.8181 6.14598Z"
                        fill="white"
                      />
                    </mask>
                  </svg>
                </a>
                <a
                  className="inline-block text-green-500 hover:text-indigo-500 mr-6"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.6007 2.18176H16.3992C19.3874 2.18176 21.8184 4.61276 21.8182 7.60069V16.3992C21.8182 19.3871 19.3874 21.8181 16.3992 21.8181H7.6007C4.61276 21.8181 2.18188 19.3872 2.18188 16.3992V7.60069C2.18188 4.61276 4.61276 2.18176 7.6007 2.18176ZM16.3993 20.0759C18.4267 20.0759 20.0761 18.4266 20.0761 16.3992H20.076V7.60069C20.076 5.57343 18.4266 3.924 16.3992 3.924H7.6007C5.57343 3.924 3.92412 5.57343 3.92412 7.60069V16.3992C3.92412 18.4266 5.57343 20.076 7.6007 20.0759H16.3993ZM6.85721 12.0001C6.85721 9.16418 9.16425 6.85709 12.0001 6.85709C14.8359 6.85709 17.1429 9.16418 17.1429 12.0001C17.1429 14.8358 14.8359 17.1428 12.0001 17.1428C9.16425 17.1428 6.85721 14.8358 6.85721 12.0001ZM8.62805 11.9999C8.62805 13.8592 10.1408 15.3718 12.0001 15.3718C13.8593 15.3718 15.3721 13.8592 15.3721 11.9999C15.3721 10.1405 13.8594 8.62784 12.0001 8.62784C10.1407 8.62784 8.62805 10.1405 8.62805 11.9999Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_601_10115"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x={2}
                      y={2}
                      width={20}
                      height={20}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.6007 2.18176H16.3992C19.3874 2.18176 21.8184 4.61276 21.8182 7.60069V16.3992C21.8182 19.3871 19.3874 21.8181 16.3992 21.8181H7.6007C4.61276 21.8181 2.18188 19.3872 2.18188 16.3992V7.60069C2.18188 4.61276 4.61276 2.18176 7.6007 2.18176ZM16.3993 20.0759C18.4267 20.0759 20.0761 18.4266 20.0761 16.3992H20.076V7.60069C20.076 5.57343 18.4266 3.924 16.3992 3.924H7.6007C5.57343 3.924 3.92412 5.57343 3.92412 7.60069V16.3992C3.92412 18.4266 5.57343 20.076 7.6007 20.0759H16.3993ZM6.85721 12.0001C6.85721 9.16418 9.16425 6.85709 12.0001 6.85709C14.8359 6.85709 17.1429 9.16418 17.1429 12.0001C17.1429 14.8358 14.8359 17.1428 12.0001 17.1428C9.16425 17.1428 6.85721 14.8358 6.85721 12.0001ZM8.62805 11.9999C8.62805 13.8592 10.1408 15.3718 12.0001 15.3718C13.8593 15.3718 15.3721 13.8592 15.3721 11.9999C15.3721 10.1405 13.8594 8.62784 12.0001 8.62784C10.1407 8.62784 8.62805 10.1405 8.62805 11.9999Z"
                        fill="white"
                      />
                    </mask>
                  </svg>
                </a>
                <a
                  className="inline-block text-green-500 hover:text-indigo-500"
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
                      d="M19.2 3H4.8C3.81 3 3 3.81 3 4.8V19.2C3 20.19 3.81 21 4.8 21H19.2C20.19 21 21 20.19 21 19.2V4.8C21 3.81 20.19 3 19.2 3ZM8.4 18.3H5.7V10.2H8.4V18.3ZM7.05 8.67C6.15 8.67 5.43 7.95 5.43 7.05C5.43 6.15 6.15 5.43 7.05 5.43C7.95 5.43 8.67 6.15 8.67 7.05C8.67 7.95 7.95 8.67 7.05 8.67ZM18.3 18.3H15.6V13.53C15.6 12.81 14.97 12.18 14.25 12.18C13.53 12.18 12.9 12.81 12.9 13.53V18.3H10.2V10.2H12.9V11.28C13.35 10.56 14.34 10.02 15.15 10.02C16.86 10.02 18.3 11.46 18.3 13.17V18.3Z"
                      fill="currentColor"
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

export default Footer
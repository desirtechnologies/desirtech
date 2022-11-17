import type { FooterProps } from '@typings/Footer'

const Footer = ({ links, favicon, copyright }: FooterProps) => {



  return (
    <section className="pb-24 2xl:pb-28 backdrop-blur-md text-white">
      <div className="mb-16 py-5 border-b border-white border-opacity-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full md:w-auto px-4 pt-6 md:pt-0 mb-4 md:mb-0">
              <a
                className="mr-6 lg:mr-16 text-white hover:text-gray-100 font-heading"
                href="#"
              >
                New tools
              </a>
              <a
                className="mr-6 lg:mr-16 inline-flex items-center font-heading text-white hover:text-gray-100"
                href="#"
              >
                <span className="mr-4">Security</span>
                <svg
                  width={8}
                  height={5}
                  viewBox="0 0 8 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.97291 0.193232C7.20854 -0.0644107 7.58938 -0.0644107 7.82328 0.193232C8.05804 0.450875 8.05978 0.867141 7.82328 1.12478L4.42529 4.80677C4.19053 5.06441 3.81056 5.06441 3.57406 4.80677L0.176073 1.12478C-0.0586909 0.868102 -0.0586909 0.450875 0.176073 0.193232C0.411706 -0.0644107 0.792544 -0.0644107 1.02644 0.193232L4.00098 3.21284L6.97291 0.193232Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a className="font-heading text-white hover:text-gray-100" href="#">
                Join for free
              </a>
            </div>
            <div className="w-full md:w-auto px-4">
              <a className="font-bold text-xl" href="#">
                <img
                  className="h-10"
                  src="uinel-assets/logos/uinel-gray-white.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 mb-20 lg:mb-40">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-10 lg:mb-0">
            <h3 className="font-medium text-xl text-white mb-10">About Uinel</h3>
            <ul>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Stories
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Our people
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Founders
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Why Uinel
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  How we compare
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Website
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Idea
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Mission
                </a>
              </li>
              <li>
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Newsroom
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-10 lg:mb-0">
            <h3 className="font-medium text-xl text-white mb-10">
              Product &amp; Tools
            </h3>
            <ul>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Download Uinel
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Sign up free
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Pricing
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Google integrations
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Microsoft integrations
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Dropbox integrations
                </a>
              </li>
              <li>
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Mobile App
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-10 lg:mb-0">
            <h3 className="font-medium text-xl text-white mb-10">Community</h3>
            <ul>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  UI Designers
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  UX Designers
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Graphic Designers
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Developers
                </a>
              </li>
              <li>
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-10 sm:mb-0">
            <h3 className="font-medium text-xl text-white mb-10">Support</h3>
            <ul>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Your account
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Hire an experts
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Help center
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  For students
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Manage cookies
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  {` FAQ's`}
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Viedos on YT
                </a>
              </li>
              <li>
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 px-4">
            <h3 className="font-medium text-xl text-white mb-10">More</h3>
            <ul>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  LinkedIn
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Spotify x Uinel
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Twitter
                </a>
              </li>
              <li className="mb-5">
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="text-darkBlueGray-200 hover:text-darkBlueGray-300"
                  href="#"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full lg:w-auto px-4 mb-8 lg:mb-0">
            <p className="font-medium text-sm text-white tracking-widest">
              <span>© 2021 UINEL.</span>
              <span className="ml-6 font-medium uppercase tracking-widest text-gray-300">
                All rights reserved.
              </span>
            </p>
          </div>
          <div className="w-full lg:w-auto px-4">
            <a className="inline-block mr-5" href="#">
              <img src="uinel-assets/images/footers/instagram.svg" alt="" />
            </a>
            <a className="inline-block mr-5" href="#">
              <img src="uinel-assets/images/footers/facebook.svg" alt="" />
            </a>
            <a className="inline-block" href="#">
              <img src="uinel-assets/images/footers/twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>



  )
}

export default Footer
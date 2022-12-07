import type { FooterProps } from '@typings/Footer'
import { SocialIcon } from 'react-social-icons';

const Footer = ({ links, favicon, copyright, socials }: FooterProps) => {


  const Header = () => {

    return (

      <div className="py-5 mb-16 border-b border-white border-opacity-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 pt-6 mb-4 md:w-auto md:pt-0 md:mb-0">
              <a
                className="mr-6 text-white lg:mr-16 hover:text-gray-100 font-heading"
                href="#"
              >
                New tools
              </a>
              <a
                className="inline-flex items-center mr-6 text-white lg:mr-16 font-heading hover:text-gray-100"
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
              <a className="text-white font-heading hover:text-gray-100" href="#">
                Join for free
              </a>
            </div>
            <div className="w-full px-4 md:w-auto">
              <a className="text-xl font-bold" href="#">
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
    )
  }


  const Body = () => {


    const _Footer = () => {

      return (
        <div className="flex flex-wrap items-center justify-between -mx-4">


          <div className="w-full px-4 mb-8 lg:w-auto lg:mb-0">
            <p className="text-lg font-medium tracking-widest text-white">
              <span>{copyright ? copyright : "COPYRIGHT_NOT_FOUND"}</span>
            </p>
          </div>

          <div className="w-full px-4 lg:w-auto">

            {
              socials ? socials.map((social, index) => {
                return (
                  <span key={index} className='inline-block mr-2'>
                    <SocialIcon bgColor="#FFFFFF" url={social ?? "#"} />
                  </span>
                )
              }) : <>SOCIALS_NOT_FOUND</>
            }

          </div>
        </div>
      )
    }

    const _Links = () => {
      return (
        <div className="flex flex-wrap mb-20 -mx-4 lg:mb-40">

          {
            links ? links.map((link, index) => {
              return (
                <div key={index} className="w-full px-4 mb-10 sm:w-1/2 md:w-1/3 lg:w-1/5 lg:mb-0">

                  <h3 className="mb-10 text-xl font-medium text-white border-b-green-700 border-1">{link?.title ?? "TITLE_NOT_FOUND"}</h3>

                  <ul>
                    {
                      link?.links ? link?.links.map((linkType, index) => {
                        return (
                          <li key={index} className="mb-5">
                            <a
                              className="text-xl"
                              href="#"
                            >
                              {linkType?.name ?? "LINK_TYPE_NAME"}
                            </a>
                          </li>
                        )
                      }) : <>LINKS_NOT_FOUND</>
                    }
                  </ul>
                </div>
              )
            }) : <>LINKS_NOT_FOUND</>
          }

        </div>
      )
    }

    return (
      <div className="container px-4 mx-auto">
        <_Links />
        <_Footer />
      </div>
    )
  }


  return (
    <section className="pb-24 text-white 2xl:pb-28 backdrop-blur-sm font-mono">
      <Header />
      <Body />
    </section>
  )
}

export default Footer
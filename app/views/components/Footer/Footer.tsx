import type { FooterProps } from '@typings/Footer'
import { SocialIcon } from 'react-social-icons';

const Footer = ({ links, favicon, copyright, socials, headings }: FooterProps) => {


  const Header = () => {

    return (

      <div className="py-5 mb-16 border-b border-white border-opacity-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 pt-6 mb-4 md:w-auto md:pt-0 md:mb-0">
              {
                headings ?
                  headings.map((heading, index) => {
                    return (
                      <a
                        key={index}
                        className="mr-6 text-white lg:mr-16 hover:text-gray-100 font-heading"
                        href="#"
                      >
                        {heading ?? "NAME_NOT_FOUND"}
                      </a>
                    )
                  }) : <>HEADINGS_NOT_FOUND</>
              }
            </div>
            <div className="w-full px-4 md:w-auto">
              <a className="text-xl font-bold" href="#">
                <img
                  className="h-10"
                  src="/assets/images/logo.png"
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
            <p className="text-lg font-medium tracking-widest text-white uppercase cursor-pointer hover:text-slate-200 duration-500 hover:border-b hover:border-1 hover:border-green-600">
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
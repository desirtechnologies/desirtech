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
        <section>
            <div className="pt-26 border-3 border-l-0 border-r-0 border-indigo-900 text-white ">
                <div className="pb-16 border-b-3 border-indigo-900">
                    <div className="container px-4 mx-auto text-center">
                        <Favicon />
                        <Links />
                    </div>
                </div>
                <Copyright />
            </div>
        </section>

    )
}

export default Footer
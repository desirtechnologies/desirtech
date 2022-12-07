import type { ContactProps } from "@typings/Contact"
import type { ComponentType } from "@typings/Component"

const Contact: ComponentType<ContactProps> = ({ phone, email, heading, description }: ContactProps) => {

    const Header = () => {

        return (
            <>
                <h2 className="mb-12 font-medium leading-tight text-9xl md:text-10xl xl:text-11xl font-heading">
                    {heading ?? "HEADING_NOT_FOUND"}
                </h2>
                <p className="mb-20 text-xl">
                    {description ?? "DESCRIPTION_NOT_FOUND"}
                </p>
            </>
        )
    }

    const Info = () => {

        return (
            <div className="flex flex-wrap items-center">
                <div className="w-full pb-4 mb-8 border-b border-gray-200 border-opacity-50 lg:w-1/3 lg:mb-0 lg:pb-0 md:px-8 xl:px-16 lg:border-b-0 lg:border-r">
                    <div className="flex items-center">
                        <img
                            className="mr-6 h-14"
                            src="uinel-assets/images/contacts/icon1.svg"
                            alt=""
                        />
                        <a className="text-xl font-medium lg:text-3xl" href="#">
                            {phone ?? "PHONE_NOT_FOUND"}
                        </a>
                    </div>
                </div>
                <div className="w-full pb-4 mb-8 border-b border-gray-200 border-opacity-50 lg:w-1/3 lg:mb-0 lg:pb-0 md:px-8 xl:px-16 lg:border-b-0 lg:border-r">
                    <div className="flex items-center">
                        <img
                            className="mr-6 h-14"
                            src="uinel-assets/images/contacts/icon3.svg"
                            alt=""
                        />
                        <a className="text-xl font-medium lg:text-3xl" href={`mailto:${email ?? "EMAIL_NOT_FOUND"}`}>
                            {email ?? "EMAIL_NOT_FOUND"}
                        </a>
                    </div>
                </div>

                <div className="w-full pb-8 lg:w-1/3 lg:pb-0 md:px-8 xl:px-16">
                    <div className="flex items-center">
                        {[]}
                    </div>
                </div>
            </div>
        )
    }

    const CallToAction = () => {
        return (
            <div className="container px-6 pt-20 pb-24 mx-auto">
                <div className="flex flex-wrap items-center justify-center">
                    <a
                        className="inline-block w-full px-10 py-5 mb-6 text-xl font-medium leading-6 tracking-tighter text-center text-white bg-green-500 md:mb-0 md:mr-12 md:w-auto font-heading hover:bg-green-600 font-mono focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                        type="button"
                    >
                        Book now
                    </a>
                    <a
                        className="inline-flex items-center pb-2 text-xl font-bold leading-6 tracking-tight text-green-600 border-b border-green-600 hover:text-green-700 hover:border-green-700"
                        href="#"
                    >
                        <span className="mr-3">More information</span>

                    </a>
                </div>
            </div>
        )
    }



    return (
        <section>
            <div className="pt-24 pb-12 font-mono text-white 2xl:pt-40 rounded-b-4xl">
                <div className="container px-4 mx-auto">
                    <div className="text-center">
                        <Header />
                        <Info />
                    </div>
                </div>
            </div>
            <CallToAction />
        </section>


    )
}

export default Contact
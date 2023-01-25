import type { FooterProps } from "@typings/Footer"

const footer = ({ links, favicon, copyright, socials }: FooterProps) => {

    const defaultObject: FooterProps = {
        links: [
            {
                title: "LINKS_NOT_FOUND"
            }
        ],
        favicon: {
            image: {

            },
            url: "URL_NOT_FOUND"

        },
        copyright: "COPYRIGHT_NOT_FOUND",
        socials: []
    }

    const footerObject: FooterProps = {
        links: links ?? defaultObject.links,
        favicon: favicon ?? defaultObject.favicon,
        copyright: copyright ?? defaultObject.copyright,
        socials: socials ?? defaultObject.socials

    }

    return { ...footerObject } as FooterProps

}

export default footer
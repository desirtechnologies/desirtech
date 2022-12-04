import type { FooterProps } from "@typings/Footer"

const footer = ({ links, favicon, copyright }: FooterProps) => {

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
        copyright: "COPYRIGHT_NOT_FOUND"
    }

    const footerObject: FooterProps = {
        links: links ?? defaultObject.links,
        favicon: favicon ?? defaultObject.favicon,
        copyright: copyright ?? defaultObject.copyright

    }

    return { ...footerObject } as FooterProps

}

export default footer
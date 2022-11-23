import type { FooterProps } from "@typings/Footer"


const footer = ({ links, favicon, copyright }: FooterProps) => {

    const defaultObject = {
        links: [
            {
                title: "LINKS_NOT_FOUND"
            }
        ],
        favicon: {
            
        }
    }

    const footerObject = {
        links: links ?? defaultObject.links,
        favicon: favicon ?? defaultObject.favicon

    }

    return { ...footerObject } ?? null

}

export default footer
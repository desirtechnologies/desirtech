import type { FooterProps } from "@typings/Footer"


const footer = ({ links, favicon, copyright }: FooterProps) => {

    const deafultObject = {

    }

    const footerObject = {

    }

    return { ...footerObject } ?? null

}

export default footer
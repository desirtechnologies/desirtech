import type { HeaderProps } from "@typings/Header"

const header = ({ favicon }: HeaderProps) => {

    const defaultObject = {
        favicon: {
            image: {
                src: "FAVICON_SRC_NOT_FOUND"
            },
            url: "#FAVICON_URL_NOT_FOUND"
        }

    }

    const headerObject = {
        favicon: favicon ?? defaultObject.favicon
    }

    return { ...headerObject } ?? null

}

export default header
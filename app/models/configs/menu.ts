import type { DrawerMenuProps } from "@typings/DrawerMenu"

const menu = ({ links }: DrawerMenuProps) => {

    const defaultObject = {
        favicon: {
            image: {
                src: "FAVICON_SRC_NOT_FOUND"
            },
            url: "#FAVICON_URL_NOT_FOUND"
        },
        links: [
            {
                name: "LINK_NOT_FOUND"
            }
        ]

    }

    const menuObject = {
        links: links ?? defaultObject.links
    }

    return { ...menuObject } ?? null

}

export default menu
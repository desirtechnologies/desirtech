import layout from "@configs/layout"
import links from "@db/links"
import meta from "@db/meta"

import type { PageQueryProps } from "@typings/Page"

const pages = ({ store, key }: PageQueryProps) => {

    const { getLinks } = links(store)
    const { getTitle } = meta(store)


    const pageData = {

        home: {
            metaData: {
                pageTitle: "Home"
            },
            data: {
                hero: {
                    title: "Desir Tech",
                    heading: getTitle()?.values
                },
                featured: {
                    primary: {
                        title: "",
                        cover: {
                            src: ""
                        }

                    },
                    secondary: {

                    },
                    tertiary: {

                    }
                }
            },
        }
    }

    const pageObject = {
        version: Date.now(),
        metaData: pageData[key]?.metaData,
        data: pageData[key]?.data,
        layout: layout({
            header: {
                links: getLinks().map((link) => ({
                    name: link?.name ?? "NOT_FOUND",
                    url: link?.url ?? "#"
                })).splice(0, 6)
            },

            menu: {
                links: getLinks().map((link) => ({
                    name: link?.name ?? "NOT_FOUND",
                    url: link?.url ?? "#"
                })).splice(0, 6)
            },
            footer: {
                copyright: 'Desir Tech'
            }
        })

    }

    return { ...pageObject }
}

export default pages
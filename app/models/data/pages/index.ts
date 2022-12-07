import layout from "@configs/layout"
import links from "@db/links"
import meta from "@db/meta"
import portfolio from "@db/portfolio"
import social_media from "@db/social-media"

import type { PageQueryProps } from "@typings/Page"

const pages = ({ store, key }: PageQueryProps) => {

    const { getLinks } = links(store)
    const { getSocialMedia } = social_media(store)
    const { getTitle, getCopyright } = meta(store)
    const { getPortfolio, getFeaturedPortfolio } = portfolio(store)

    const pageData = {

        home: {
            metaData: {
                pageTitle: "Home",
                description: "Welcome to my laboratory!"
            },
            data: {
                hero: {
                    title: "Desir Tech",
                    heading: getTitle()?.values
                },
                featured: {
                    primary: getPortfolio()[0],
                    secondary: getPortfolio()[1],
                    tertiary: getPortfolio()[2]
                },

                contact: {
                    phone: "",
                    email: ""
                }
            },
        }
    }

    const pageObject = {
        version: Date.now(),
        data: pageData[key]?.data,
        layout: layout({
            metaData: pageData[key]?.metaData,
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
                })).splice(0, 6),
                copyright: getCopyright().values[0]
            },
            footer: {
                copyright: getCopyright().values[0],
                links: [
                    {
                        title: "Sitemap",
                        links: getLinks().map((link) => ({
                            name: link?.name,
                            url: link?.url
                        }))
                    },
                    {
                        title: "Social Media",
                        links: getLinks().map((link) => ({
                            name: link?.name,
                            url: link?.url
                        }))
                    },
                    {
                        title: "Sectors",
                        links: getLinks().map((link) => ({
                            name: link?.name,
                            url: link?.url
                        }))
                    },
                    {
                        title: "Sectors",
                        links: getLinks().map((link) => ({
                            name: link?.name,
                            url: link?.url
                        }))
                    },
                    {
                        title: "Sectors",
                        links: getLinks().map((link) => ({
                            name: link?.name,
                            url: link?.url
                        }))
                    }
                ],
                socials: getSocialMedia().map((social) => social?.url ?? "#")
            }
        })

    }

    return { ...pageObject }
}

export default pages
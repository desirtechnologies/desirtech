import layout from "@configs/layout"
import links from "@db/links"
import meta from "@db/meta"
import portfolio from "@db/portfolio"
import social_media from "@models/data/db/social_media"
import type { ContactProps } from "@models/typings/Contact"
import type { FeaturedProps } from "@typings/Featured"
import type { HeroProps } from "@typings/Hero"
import type { PageQueryProps } from "@typings/Page"
// import Database from "@db/index"
// [data]: Database.getSocialMedia()

export default function pages({ store, key }) {

    const { getLinks } = links(store)
    const { getSocialMedia } = social_media(store)
    const { getTitle, getCopyright, getObfuscator, getPhone, getEmail, getPortfolioHeading } = meta(store)
    const { getPortfolio, getFeaturedPortfolio } = portfolio(store)

    const _data = {

        home: {
            metaData: {
                pageTitle: "Home",
                description: "Welcome to my laboratory!"
            },
            data: {
                hero: <HeroProps>{
                    title: getTitle().name ?? null,
                    obfuscator: getObfuscator().values[0],
                    heading: getTitle()?.values ?? null
                },

                featured: <FeaturedProps>{
                    heading: getPortfolioHeading()?.name ?? null,
                    title: getPortfolioHeading()?.values[0] ?? null,
                    description: getPortfolioHeading()?.description ?? null,
                    features: {
                        primary: {
                            title: getFeaturedPortfolio()[0]?.name ?? null,
                            cover: {
                                src: getFeaturedPortfolio()[0]?.media[0]?.url ?? null,
                                alt: getFeaturedPortfolio()[0]?.media[0]?.name ?? null,
                            }
                        },
                        secondary: {
                            title: getFeaturedPortfolio()[1]?.name ?? null,
                            cover: {
                                src: getFeaturedPortfolio()[1]?.media[0]?.url ?? null,
                                alt: getFeaturedPortfolio()[1]?.media[0]?.name ?? null,

                            }
                        },
                        tertiary: {
                            title: getFeaturedPortfolio()[2]?.name ?? null,
                            cover: {
                                src: getFeaturedPortfolio()[2]?.media[0]?.url ?? null,
                                alt: getFeaturedPortfolio()[2]?.media[0]?.name ?? null,

                            }
                        }
                    }

                },

                timeline: {
                    title: "Latest Activity",
                    heading: "Relevant Updates",
                    events: getPortfolio().map((portfolio) => ({
                        name: portfolio?.name ?? null
                    }))
                },

                contact: <ContactProps>{
                    heading: "Get in Touch with Me",
                    description: "",
                    phone: getPhone().phone ?? null,
                    email: getEmail().email ?? null,
                    socials: getSocialMedia().map((social) => social.url ?? "#")
                }
            },
        }
    }

    const _object = {
        version: Date.now(),
        data: _data[key]?.data,
        layout: layout({
            metaData: _data[key]?.metaData,
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
                headings: ["Copyright", "Quotes", "Question of the Day"],
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
                        title: "Resources",
                        links: getLinks().map((link) => ({
                            name: link?.name,
                            url: link?.url
                        }))
                    },
                    {
                        title: "Research",
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

    return _object
}
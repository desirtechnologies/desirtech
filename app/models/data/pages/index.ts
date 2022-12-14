import layout from "@configs/layout"
import links from "@db/links"
import meta from "@db/meta"
import portfolio from "@db/portfolio"
import social_media from "@db/social-media"
import type { FeaturedProps } from "@typings/Featured"
import type { HeroProps } from "@typings/Hero"
import type { ContactProps } from "@models/typings/Contact"
import type { PageQueryProps } from "@typings/Page"

const pages = ({ store, key }: PageQueryProps) => {

    const { getLinks } = links(store)
    const { getSocialMedia } = social_media(store)
    const { getTitle, getCopyright, getObfuscator, getPhone, getEmail, getPortfolioHeading } = meta(store)
    const { getPortfolio, getFeaturedPortfolio } = portfolio(store)

    const pageData = {

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
                            title: getFeaturedPortfolio()[0].name,
                            cover: {
                                src: getFeaturedPortfolio()[0].media[0]?.url,
                                alt: getFeaturedPortfolio()[0].media[0]?.name,
                            }
                        },
                        secondary: {
                            title: getFeaturedPortfolio()[1]?.name,
                            cover: {
                                src: getFeaturedPortfolio()[1]?.media[0].url,
                                alt: getFeaturedPortfolio()[1].media[0]?.name,

                            }
                        },
                        tertiary: {
                            title: getFeaturedPortfolio()[2]?.name,
                            cover: {
                                src: getFeaturedPortfolio()[2]?.media[0].url,
                                alt: getFeaturedPortfolio()[2].media[0]?.name,

                            }
                        }
                    }

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

    return { ...pageObject }
}

export default pages
import utils from "@utils/index"

export const notion = () => {

    const { notion: { files, url, email, phone, rich_text, title, multi_select, number, status, select, isDatabase, getProperties } } = utils()

    const notionTypes = {


        variants: {
            title: "🪪Title",
            favicon: "",
            featured: "🌟Featured",
            obfuscator: "🗝️Obfuscator",
            heading: "#️⃣Heading",
            portfolio: "💼Portfolio",
            copyright: "📜Copyright",
            phone: "📞Phone",
            email: "📧Email"
        },


        services: {
            name: "Services",
            shape: (data: any) => {

                const { URL, Title, Types, Status } = data.properties

                return {
                    url: url(URL),
                    title: rich_text(Title),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = notionTypes.portfolio
                return isDatabase(name, data) ?? null
            }

        },
        links: {
            name: "🔗Links",
            shape: (data: any) => {

                const { URL, Name, Types, Status } = data.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = notionTypes.links
                return isDatabase(name, data) ?? null
            }

        },
        faqs: {
            name: "📱Social Media",
            shape: (data: any) => {

                const { URL, Title, Types, Status } = data.properties

                return {
                    url: url(URL),
                    title: rich_text(Title),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = notionTypes.portfolio
                return isDatabase(name, data) ?? null
            }

        },
        portfolio: {
            name: "💼Portfolio",
            variants: {
                featured: "🌟Featured"
            },
            shape: (data: any) => {

                const { URL, Name, Types, Status, Media } = data.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    media: files(Media),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = notionTypes.portfolio
                return true
            }

        },
        social_media: {
            name: "📱Social Media",
            shape: (data: any) => {

                const { URL, Name, Types, Status } = data.properties

                return {
                    url: url(URL),
                    name: title(Name),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = notionTypes.social_media
                return isDatabase(name, data) ?? null
            }

        },
        meta: {
            name: "🔎Meta",
            variants: {
                title: "🪪Title",
                favicon: "",
                heading: "",
                portfolio: "💼Portfolio",
                copyright: "📜Copyright",
                phone: "📞Phone",
                email: "📧Email"
            },
            shape: (data: any) => {

                const { URL, Name, Types, Phone, Email, Status, Values, Description } = data.properties

                return {
                    url: url(URL),
                    description: rich_text(Description),
                    name: title(Name),
                    phone: phone(Phone),
                    email: email(Email),
                    values: multi_select(Values),
                    types: multi_select(Types),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = notionTypes.meta
                return isDatabase(name, data) ?? null
            }

        },
    }

    return { ...notionTypes }
}


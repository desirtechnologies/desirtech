import utils from "@utils/index"


export const notion = () => {

    const {
        notion:
        { files, url, email, phone, rich_text, title, multi_select,
            number, status, select, isDatabase, getProperties } }
        = utils()

    const notionTypes = {


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
            name: "🎁Portfolio",
            shape: (data: any) => {

                const { URL, Title, Types, Status, Covers } = data.properties

                return {
                    url: url(URL),
                    title: rich_text(Title),
                    types: multi_select(Types),
                    covers: files(Covers),
                    status: status(Status),
                }
            },
            predicate: (data: any) => {
                const { name } = notionTypes.portfolio
                return isDatabase(name, data) ?? null
            }

        },
        social_media: {
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
                const { name } = notionTypes.social_media
                return isDatabase(name, data) ?? null
            }

        },
        meta: {
            name: "🔎Meta",
            variants: {
                title: "🪪Title",
                favicon: "",
                copyright: ""
            },
            shape: (data: any) => {

                const { URL, Title, Types, Status, Values, Description } = data.properties

                return {
                    url: url(URL),
                    description: rich_text(Description),
                    title: rich_text(Title),
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


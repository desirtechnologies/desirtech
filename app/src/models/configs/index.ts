import { NotionService } from "@services/notion"
import { blackprint } from "@utils/blackprint"
import { metaMethods } from "@db/index"
import { servicesMethods } from "@db/index"

const { defineDatabaseConfiguration, defineCollection } = blackprint()

export const notionCMS = () => (
    defineDatabaseConfiguration({

        params: {
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
            collections: {
                services: defineCollection({
                    meta: {
                        notionPageId: import.meta.env.META_PAGE_ID
                    },
                    methods: servicesMethods
                }),
                meta: defineCollection({
                    meta: {
                        notionPageId: import.meta.env.META_PAGE_ID
                    },
                    methods: metaMethods
                })
            },
        },

        method: async (params) => {

            const { getNotionPages } = NotionService().methods

            const pageIds = Object.keys(params.collections).map((param) => (
                {
                    id: params.collections[param].meta.notionPageId,
                    name: param
                }
            ))

            return await getNotionPages({ pageIds: pageIds })

        },
    })
)
import { NotionService } from "@services/notion"
import { models as BlackprintModels } from "@utils/blackprint"
import { metaCollection, portfolioCollection } from "@db/index"


export const notionCMS = () => {

    const { defineDatabaseConfiguration } = BlackprintModels().configs()

    return (
        defineDatabaseConfiguration({
            keys: {
                title: "🪪Title",
                favicon: "Favicon",
                featured: "🌟Featured",
                obfuscator: "🗝️Obfuscator",
                heading: "#️⃣Heading",
                portfolio: "💼Portfolio",
                copyright: "📜Copyright",
                phone: "📞Phone",
                email: "📧Email"
            },
            params: {
                
                collections: {
                    meta: metaCollection,
                    portfolio: portfolioCollection
                },
            },

            init: async (params) => {

                const { getNotionPages } = NotionService().methods

                const pageIds = Object.keys(params.collections).map((param) => (
                    {
                        id: params.collections[param]().meta.notionPageId,
                        name: param
                    }
                ))

                return await getNotionPages({ pageIds })

            }
        })
    )
}


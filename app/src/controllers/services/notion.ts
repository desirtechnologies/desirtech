import { Client } from "@notionhq/client"
import { blackprint } from "@utils/blackprint"

export interface INotionPage { }
export interface INotionPageGetter { cursor?: string | undefined, aggResults?: any[], pageId?: { name?: string, id?: string } }



const { defineService } = blackprint()

export const NotionService = () => {

    const NotionClient = new Client({
        auth: import.meta.env.FACADE_API_KEY ?? process.env.FACADE_API_KEY,
    })

    return defineService({
        methods: {
            getNotionPage: async ({ cursor = undefined, aggResults = [], pageId }: INotionPageGetter): Promise<INotionPage> => {

                let aggregateResults: any[] = []

                const { has_more, next_cursor, results } = await NotionClient.databases.query({
                    database_id: pageId?.id ?? "null",
                    page_size: 100,
                    start_cursor: cursor,
                })

                aggregateResults.push(...results, ...aggResults as any[])

                if (!has_more) {
                    return aggregateResults
                } else {
                    return await NotionService().methods.getNotionPage({
                        cursor: next_cursor as string,
                        aggResults: aggregateResults,
                        pageId
                    })
                }
            },

            getNotionPages: async ({ pageIds }) => {

                const { getNotionPage } = NotionService().methods;

                let pageData = [] as any[];

                for (let pagesIndex = 0; pagesIndex < pageIds.length; pagesIndex++) {
                    pageData.push({
                        [pageIds[pagesIndex].name as string]: await getNotionPage({
                            pageId: pageIds[pagesIndex]
                        })
                    })
                }

                return pageData.flat() ?? Error(`NotionService: Failed to retrieve: ${pageIds}`)
            }
        }
    })
}
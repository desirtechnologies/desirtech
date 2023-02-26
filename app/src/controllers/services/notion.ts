import { Client } from "@notionhq/client"
import { blackprint } from "@utils/blackprint"

export interface INotionPage { }
export interface INotionPageGetter { cursor?: string | undefined, aggResults?: any[], pageId: any }



const { defineService } = blackprint()

export const NotionService = () => {

    const NotionClient = new Client({
        auth: import.meta.env.FACADE_API_KEY ?? process.env.FACADE_API_KEY,
    })


    return defineService({
        methods: {
            getNotionPage: async ({ cursor, aggResults, pageId }: INotionPageGetter): Promise<INotionPage> => {

                let aggregateResults: any[] = []

                const { has_more, next_cursor, results } = await NotionClient.databases.query({
                    database_id: pageId,
                    page_size: 100,
                    start_cursor: cursor,
                })

                aggregateResults.push(...results, ...aggResults as any[])

                if (!has_more) {
                    return aggregateResults
                } else {
                    return NotionService().methods.getNotionPage({ cursor: next_cursor as string, aggResults: aggregateResults, pageId })
                }
            }
            ,
            getNotionPages: async ({ pageIds }) => {

                const { getNotionPage } = NotionService().methods.getNotionPage;

                const pageData = await pageIds.map((pageId) => {
                    return {
                        [pageId.name]: getNotionPage({
                            cursor: undefined,
                            aggResults: [],
                            pageId: pageId.id
                        })
                    }
                })

                return pageData
            }
        }
    })
}
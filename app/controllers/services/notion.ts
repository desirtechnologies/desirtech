import { Client } from "@notionhq/client"

const NotionService = () => {

    const serviceObject = {
        api: new Client({
            auth: process.env.FACADE_API_KEY,
        }),
        secured: {
            central_dogma: process.env.CENTRAL_DOGMA_ID as string ?? null
        },
        getCentralDogma: async () => {
            const response = (await serviceObject.api.databases.query({
                database_id: serviceObject.secured.central_dogma,
            }))?.results

            return response
        },
    }
    return { ...serviceObject }
}

export default NotionService
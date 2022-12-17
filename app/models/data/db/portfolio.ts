import FacadeService from "@services/fadcade"
import type { NotionDataResponseType } from "@typings/Notion"
import { collections } from "@utils/index"

const portfolio = (store: NotionDataResponseType) => {

    const { notion } = FacadeService().types
    const { portfolio, variants } = notion()

    const { createDatabase, queryDatabase } = collections()


    const dbObject = {

        getFeaturedPortfolio: () => {
            return queryDatabase({
                keys: [variants.featured],
                db: dbObject.db.data,
                batch: true
            })
        },

        getPortfolio: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: portfolio.name,
            data: store,
            shape: portfolio.shape,
            predicate: portfolio.predicate
        })
    }

    return { ...dbObject }
}


export default portfolio
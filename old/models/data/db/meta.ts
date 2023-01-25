import FacadeService from "@services/fadcade"
import type { NotionDataResponseType } from "@typings/Notion"
import { collections } from "@utils/index"

const meta = (store: NotionDataResponseType) => {

    const { createDatabase, queryDatabase } = collections()

    const { meta, variants } = FacadeService().types.notion()

    const dbObject = {

        getObfuscator: () => {
            return queryDatabase({
                keys: [variants.obfuscator],
                db: dbObject.db.data
            })
        },

        getPortfolioHeading: () => {
            return queryDatabase({
                keys: [variants.portfolio, variants.heading],
                db: dbObject.db.data
            })
        },

        getPhone: () => {
            return queryDatabase({
                keys: [variants.phone],
                db: dbObject.db.data
            })

        },
        getEmail: () => {
            return queryDatabase({
                keys: [variants.email],
                db: dbObject.db.data
            })
        },

        getTitle: () => {
            return queryDatabase({
                keys: [variants.title],
                db: dbObject.db.data
            })
        },

        getCopyright: () => {
            return queryDatabase({
                keys: [variants.copyright],
                db: dbObject.db.data,
            })
        },

        getMeta: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            id: meta.name,
            data: store,
            shape: meta.shape,
            predicate: meta.predicate
        })
    }

    return { ...dbObject }
}


export default meta
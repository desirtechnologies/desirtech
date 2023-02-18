import FacadeService from "@services/fadcade"
import type { NotionDataResponseType } from "@typings/Notion"
import { collections } from "@utils/index"


const links = (store: NotionDataResponseType) => {

    const { createDatabase, queryDatabase } = collections()

    const { links } = FacadeService().types.notion()

    const dbObject = {

        getLinks: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            data: store,
            predicate: links.predicate,
            shape: links.shape,
            id: links.name
        })
    }

    return { ...dbObject }
}


export default links
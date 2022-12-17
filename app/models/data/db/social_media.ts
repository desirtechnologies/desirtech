import FacadeService from "@services/fadcade"
import type { NotionDataResponseType } from "@typings/Notion"
import { collections } from "@utils/index"

const social_media = (store: NotionDataResponseType) => {

    const { social_media } = FacadeService().types.notion()

    const { createDatabase, queryDatabase } = collections()

    const dbObject = {


        getSocialMedia: () => {
            return dbObject.db.data
        },

        db: createDatabase({
            data: store,
            shape: social_media.shape,
            predicate: social_media.predicate,
            id: social_media.name,
        })
    }


    return { ...dbObject }
}


export default social_media
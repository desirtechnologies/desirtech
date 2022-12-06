import FacadeService from "@services/fadcade"
import type { NotionDataResponseType } from "@typings/Notion"


const meta = (store: NotionDataResponseType) => {

    const { notion } = FacadeService().types
    const { meta } = notion()

    const metaObject = {

        getTitle: () => {

            const _key = meta.variants.title
            return metaObject.getMeta().find((meta) => meta.types.includes(_key))

        },

        getMeta: () => {
            return (store.filter((data) => {
                return (
                    meta.predicate(data)
                )
            })).map((data) => {
                return (
                    meta.shape(data)
                )
            })
        }
    }

    return { ...metaObject }
}


export default meta
import FacadeService from "@services/fadcade"
import type { NotionDataResponseType } from "@typings/Notion"


const _template = (store: NotionDataResponseType) => {

    const { notion } = FacadeService().types


    const _templateObject = {
        get: () => {
            return (store.filter((data) => {
                return (null
                    //      meta.predicate(data)
                )
            })).map((data) => {
                return (null
                    //     meta.shape(data)
                )
            })
        }
    }

    return { ..._templateObject }
}


export default _template
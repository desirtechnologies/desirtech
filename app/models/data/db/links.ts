import FacadeService from "@services/fadcade"
import type  { NotionDataResponseType } from "@typings/Notion"

const links = (store: NotionDataResponseType) => {

    const { notion } = FacadeService().types

    const { links } = notion()

    const linksObject = {

        getLinks: () => {
            return store.filter((data) => {
                return links.predicate(data)
            }).map((data) => {
                return links.shape(data)
            })
        }
    }


    return { ...linksObject }
}


export default links
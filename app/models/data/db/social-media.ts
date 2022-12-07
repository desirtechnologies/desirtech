import FacadeService from "@services/fadcade"
import type { NotionDataResponseType } from "@typings/Notion"


const social_media = (store: NotionDataResponseType) => {

    const { notion } = FacadeService().types
    const { social_media } = notion()

    const socialMediaObject = {


        getSocialMedia: () => {
            return (store.filter((data) => {
                return (
                    social_media.predicate(data)
                )
            })).map((data) => {
                return (
                    social_media.shape(data)
                )
            })
        }
    }

    return { ...socialMediaObject }
}


export default social_media
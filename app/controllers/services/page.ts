import pages from "@pages/index"
import NotionService from '@services/notion'

const PageService = () => {

    const serviceObject = {


        getPage: async (pageKey: string) => {

            const { getCentralDogma } = NotionService()

            const centralDogma = (await getCentralDogma())

            const { layout, data } = pages({
                store: centralDogma,
                key: pageKey
            })

            const page = {
                layout,
                data,
            }
            
            return page
        }
    }

    return { ...serviceObject }
}




export default PageService


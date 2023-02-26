import { MySitePages } from "@pages/index"
import { blackprint } from "@utils/blackprint"

const { defineService, createPage } = blackprint()

export const PageService = () => {
    return defineService({
        methods: {
            getPage: async (id: string) => {

                const PageStore = await MySitePages()

                const pageData = createPage({ store: PageStore, id })

                return pageData
            }
        }
    })
}
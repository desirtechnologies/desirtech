import { MySitePages } from "@pages/index"
import { services as BlackprintServices } from "@utils/blackprint"
import { pages as BlackprintPages } from "@utils/blackprint"

const { defineService } = BlackprintServices()
const { createPage } = BlackprintPages()

export const PageService = defineService({
    methods: {
        getPage: async (id: string) => {

            const pageStore = await MySitePages()

            const pageData = createPage({ store: pageStore, id })

            return pageData
        }
    }
})
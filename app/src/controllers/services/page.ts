import pages from "@pages/index"

const PageService = ({ opts }) => {

    const _service = {

        getPage: async (id: string) => {

            const { layout, data } = await pages(id)

            const page = {
                layout,
                data,
            } ?? null

            return page
        }
    }

    return _service
}




export default PageService


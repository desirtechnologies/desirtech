import FacadeService from "@controllers/services/fadcade"


const meta = (store) => {

    const { types: { meta } } = FacadeService()

    const metaObject = {

        getFavicon: () => { },
        getTitles: () => {

            const titlesKey = "🪪Title"

            return metaObject.getMeta().find((meta) => meta.types.includes(titlesKey))

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
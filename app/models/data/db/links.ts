import FacadeService from "@services/fadcade"


const links = (store: any[]) => {

    const { types: { links } } = FacadeService()

    const linksObject = {
        getPageLinks: () => { },
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
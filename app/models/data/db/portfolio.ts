import FacadeService from "@services/fadcade"
import type { NotionDataResponseType } from "@typings/Notion"


const portfolio = (store: NotionDataResponseType) => {

    const { notion } = FacadeService().types
    const { portfolio, variants } = notion()


    const portfolioObject = {

        getFeaturedPortfolio: () => {
            const _key = variants.featured
            return portfolioObject.getPortfolio().filter((p) => p.types.includes(_key));
        },

        getPortfolio: () => {
            return (store.filter((data) => {
                return (portfolio.predicate(data)
                )
            })).map((data) => {
                return (
                    portfolio.shape(data)
                )
            })
        }
    }

    return { ...portfolioObject }
}


export default portfolio
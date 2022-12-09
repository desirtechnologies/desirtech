import FacadeService from "@services/fadcade"
import type { NotionDataResponseType } from "@typings/Notion"


const meta = (store: NotionDataResponseType) => {

    const { notion } = FacadeService().types
    const { meta, variants } = notion()

    const metaObject = {


        getObfuscator: () => {
            const _key = variants.obfuscator
            return metaObject.getMeta().find((meta) => meta.types.includes(_key)) ?? null

        },

        getPortfolioHeading: () => {
            const _key = [variants.heading, variants.portfolio]
            return metaObject.getMeta().find((meta) => _key.every((t) => {
                return meta.types.includes(t)
            })) ?? null
        },

        getPhone: () => {
            const _key = variants.phone
            return metaObject.getMeta().find((meta) => meta.types.includes(_key)) ?? null

        },
        getEmail: () => {
            const _key = variants.email
            return metaObject.getMeta().find((meta) => meta.types.includes(_key)) ?? null
        },

        getTitle: () => {

            const _key = variants.title
            return metaObject.getMeta().find((meta) => meta.types.includes(_key)) ?? null

        },
        getCopyright: () => {

            const _key = variants.copyright
            return metaObject.getMeta().find((meta) => meta.types.includes(_key)) ?? null
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
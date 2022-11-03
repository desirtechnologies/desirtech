import { layout } from "@configs/index"
import { meta } from "@db/index"

export type PageDatabaseQueryProps = {
    store?: any,
    key: string,
}

const pages = ({ store, key }: PageDatabaseQueryProps) => {


    const pageData = {
        home: {
            data: {
                hero: {

                }
            },
            metaData: {},
        }

    }

    const pageObject = {
        data: pageData,
        layout: layout({
            header: {},
            footer: {}

        })

    }

    return { ...pageObject }
}

export default pages
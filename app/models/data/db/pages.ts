
import layout from "@configs/layout"

const pages = (store: any, pageKey: string) => {

    const pageData = {
        home: {
            metaData: {
                version: Date.now(),
                pageTitle: 'Home'
            },
            data: {

            },

        },

    }


    const layoutObject = { ...layout()}

    const pageObject = {
        id: `${"siteTitle"}-${pageKey}`,
        version: Date.now(),
        layout: layoutObject,
        data: pageData[pageKey]
    }

    return pageObject ?? null

}

export default pages
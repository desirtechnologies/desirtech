import { db } from "@utils/blackprint";

const { defineDatabaseMethod, defineDatabaseCollection } = db()

export const metaCollection = () => {
    return defineDatabaseCollection({
        meta: {
            notionPageId: import.meta.env.PUBLIC_META_PAGE_ID
        },
        methods: {
            getFollowers: defineDatabaseMethod({
                shape: {},
                filters: {},
            })
        }
    })
}

export const portfolioCollection = () => {
    return defineDatabaseCollection({
        meta: {
            notionPageId: import.meta.env.PUBLIC_PORTFOLIO_PAGE_ID
        },
        methods: {
            getFollowers: defineDatabaseMethod({
                shape: {},
                filters: {}
            })
        }
    })
}

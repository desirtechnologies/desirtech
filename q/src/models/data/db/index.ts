import { db as BlackprintDatabase } from "@utils/blackprint";

const { defineDatabaseMethod, defineDatabaseCollection } = BlackprintDatabase()

export const metaCollection = defineDatabaseCollection({
    meta: {
        name: "meta",
        notionPageId: import.meta.env.PUBLIC_META_PAGE_ID
    },
    shape: (data) => {
        return data
    },
    methods: {
        getFavicon: defineDatabaseMethod({
            filters: [
                (data) => data?.properties?.Types == ""
            ]
        })
    }

})


export const writingsCollection = defineDatabaseCollection({
    meta: {
        name: "writings",
        notionPageId: import.meta.env.PUBLIC_WRITINGS_PAGE_ID
    },
    shape: (data) => {
        return data
    },
    methods: {
        getFavicon: defineDatabaseMethod({
            filters: [
                (data) => data?.properties?.Types == ""
            ]
        })
    }

})


export const portfolioCollection = defineDatabaseCollection({
    meta: {
        name: "portfolio",
        notionPageId: import.meta.env.PUBLIC_PORTFOLIO_PAGE_ID
    },
    shape: (data) => {
        return data
    },
    methods: {
        getFeatured: defineDatabaseMethod({
            filters: [
                (data) => data?.properties?.Types == ""
            ]
        })
    }

})


export type PageDataProps = Object | null
export type PageMetaProps = {
    version?: string | number,
    expires?: number
}

export type PageProps = {
    data?: PageDataProps,
    layout?: any,
    meta?: PageMetaProps
}

export interface IPageStore {
    pages?: PageProps[];
    layout?: any;
    meta?: PageMetaProps;
}

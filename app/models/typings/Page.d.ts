import type { NextPage } from 'next'

export interface IPage extends NextPage {
    page?: any
}


export type PageQueryProps = {
    store?: any,
    key?: any,
}

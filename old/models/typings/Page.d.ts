import type { NextPage } from 'next'

export interface IPage extends NextPage {
    page?: any,
    Wrapper?: any
}


export type PageQueryProps = {
    store?: any,
    key?: any,
}

export type PageType = {
    layout?: any,
    page?: any,
  
  }
  
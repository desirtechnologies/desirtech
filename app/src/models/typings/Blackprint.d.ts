export interface IBlackprintConfiguration {
    version?: string;
    name?: string;
    type?: string;
    author?: string;
    views?: any;
    models?: any;
    controllers?: any;
}

export interface IBlackprintService {
    methods?: any;
}

export interface IBlackprintViewStore {
    layout?: any;
    meta?: any;
    pages?: any;
}

export interface IBlackrpintUtility { }

export interface IBlackprintAPIRoute {
    get?: Function;
    post?: Function;
}

export interface IBlackprintLibrary {
    plugins?: any
}

export interface IBlackprintConfiguration { }
export interface IBlackprintDatabaseConfiguration extends IBlackprintConfiguration {
    method?: Promise<Function> & Function;
    params?: any;
}


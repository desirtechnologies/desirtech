import type { BlackprintControllersModules, BlackprintModelsModules, BlackprintModules, BlackprintViewsModules } from "@typings/Blackprint";


export const blackprint = (): BlackprintModules => {

    const lib: BlackprintModules = {
        _root: {
            defineConfiguration: () => { }
        },

        models: {
            _root: {

            },
            configs: configs,
            data: {
                db: db,
                pages: pages
            }
        },

        controllers: {
            _root: {

            },
            utils: utils,
            hooks: hooks,
            services: services
        },

        views: {
            _root: {
            },
            components: components,
            layouts: {},
            includes: {},
        }
    }

    return lib as BlackprintModules
};

export const hooks = {

}

export const db = () => {
    return {
        defineViewStore: ({ layout, pages }) => {
            return {
                layout, pages, meta: {
                    version: Date.now()
                }
            };

        },
        defineDatabaseCollection: ({ meta, methods }) => {
            return { meta, methods }
        },
        defineDatabase: async (databaseConfig) => {

            const { meta, initStore, params } = await databaseConfig()

            const db =
                Object.fromEntries(
                    Object.keys(params.collections).map((k) => ({
                        [k]: params.collections[k]().methods(initStore[k]),
                    })) as Array<any>
                ) ?? null;

            return db;
        },


        defineDatabaseMethod: ({ shape, filters }) => {
            return function ({ store }) {
                return shape(store).filter(filters[0])
            }
        },
    }
}

export const components = {}

export const layouts = {}

export const includes = {}

export const styles = {}

export const libs = {}

export const utils = {
    defineUtility: ({ methods }) => {
        return methods
    },
}

export const configs = () => {
    return {
        defineDatabaseConfiguration: async ({ params, init }) => {
            return {
                params,
                initStore: await init(params)
            }
        },


    }
}

export const pages = {
    createPage: ({ store, id }) => {
        return {
            id: crypto.randomUUID(),
            version: Date.now(),
            layout: store?.layout,
            data: store[id]?.data,
        };
    },

}

export const services = () => {
    return {
        defineService: ({ methods }) => {
            return { methods }
        }
    }
}

export const controllers = (): BlackprintControllersModules => {
    return {
        hooks: hooks,
        services: services
    } as BlackprintControllersModules
}

export const models = (): BlackprintModelsModules => {
    return {
        configs: configs,
        data: {
            db: db,
            pages: pages
        }
    } as BlackprintModelsModules
}

export const views = (): BlackprintViewsModules => {
    return {
        components: components,
        layouts: layouts,
        includes: includes,
        libs: libs,
        styles: styles
    } as BlackprintViewsModules
}

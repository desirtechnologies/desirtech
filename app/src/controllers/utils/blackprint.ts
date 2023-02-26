import type { IBlackprintViewStore } from "@typings/Blackprint";
import type { IBlackprintService } from "@typings/Blackprint"
import type { IBlackrpintUtility } from "@typings/Blackprint"
import type { IBlackprintAPIRoute } from "@typings/Blackprint"
import type { IBlackprintDatabaseConfiguration } from "@typings/Blackprint"
import type { IBlackprintLibrary } from "@typings/Blackprint"


export const blackprint = () => {
    return {

        defineViewStore: ({ layout, pages }): IBlackprintViewStore => {
            return {
                layout, pages, meta: {
                    version: Date.now()
                }
            };
        },

        defineMethods: () => {

        },
        defineMethod: () => { },

        defineUtility: ({ methods }): IBlackrpintUtility => {
            return methods
        },
        defineMetaConfig: () => { },
        defineAPIRoute: ({ get, post }) => {
            return {
                get: get ?? null,
                post: post ?? null
            };
        },

        defineConfiguration: ({ method, params }): IBlackprintDatabaseConfiguration => {
            return method(params)
        },
        defineService: ({ methods }): IBlackprintService => {
            return { methods };
        },
        defineHook: (hook) => {
            return hook();
        },
        defineCollection: ({ methods, meta }) => {
            return { meta, methods };
        },
        defineDatabase: async (databaseConfig: IBlackprintDatabaseConfiguration) => {

            const methodData = await databaseConfig.method();

            const db =
                Object.fromEntries(
                    Object.keys(databaseConfig.params.collections).map((k) => ({
                        [k]: databaseConfig.params.collections[k].methods(methodData),
                    })) as Array<any>
                ) ?? null;

            return db;
        },

        createPage: ({ store, id }) => {
            return {
                id: crypto.randomUUID(),
                version: Date.now(),
                layout: store?.layout,
                data: store[id]?.data,
            };
        },
    };
};

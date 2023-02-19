
import type { IPage } from "@typings/Page"
import { collections } from "@utils/index"
import { Database } from "@db/index"

export default async function pages(id: string): Promise<IPage> {

    const _pages = {
        home: {
            metaData: {
                pageTitle: "Home"
            },
            data: {
                hero: {

                }
            }
        }
    }


    const _object = {
        layout: {
            header: {
                favicon: await Database.getFavicon(),
                impressum: await Database.getImpressum()
            },
            footer: {
                copyright: await Database.getCopyright()
            },
            metaData: _pages[id]?.metaData
        },
        data: _pages[id]?.data,
        pages: _pages[id]?.pages ?? null,
        version: Date.now()
    }

    return _object

}


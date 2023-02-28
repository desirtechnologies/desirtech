
import { notionCMS } from "@models/configs"
import { db as BlackprintDatabase } from "@utils/blackprint"

export const MySitePages = async () => {

    const { defineViewStore, defineDatabase } = BlackprintDatabase()

    const { meta, portfolio } = await defineDatabase(notionCMS)

    return defineViewStore({
        layout: {
            header: {
                favicon: meta.getFavicon()
            }

        },
        pages: {
            home: {
                metaData: {
                    pageTitle: "Home",
                    description: ""
                },
                data: {
                    featuredSection: {
                  
                    }
                }
            }
        }
    })
}
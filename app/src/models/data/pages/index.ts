
import { notionCMS } from "@models/configs"
import { blackprint } from "@utils/blackprint"

export const MySitePages = async () => {

    const { defineViewStore, defineDatabase } = blackprint()

    const { meta } = await defineDatabase(notionCMS())

    return defineViewStore({

        layout: {
            header: {
                favicon: meta.getFavicon(["src", "url"])
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
                        features: portfolio.getFeatured()
                    }
                }
            }
        }
    })
}
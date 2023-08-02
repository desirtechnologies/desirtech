
import { notionCMS } from "@models/configs"
import { db as BlackprintDatabase } from "@utils/blackprint"

export const MySitePages = async () => {

    const { defineViewStore, defineDatabase } = BlackprintDatabase()

    const data = await defineDatabase(notionCMS)

    return defineViewStore({
        layout: {
            header: {
                favicon: "meta.getFavicon()"
            },
            footer: {

                favicon: [{}][0]
            }

        },
        pages: {
            home: {
                metaData: {
                    pageTitle: "Home",
                    description: "Knowledge Determines Destiny"
                },
                data: {
                    hero: {},
                    featuredGrid: {},
                    featuredSection: {},
                    stepsSection: {

                    },
                    statsGrid: {},
                    contentGrid: {},
                    simpleForm: {},
                    pricingTable: {},
                    summarySection: {}
                }
            },

            portfolio: {
                metaData: {},
                data: {}
            }
        }
    })
}
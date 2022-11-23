import layout from "@configs/layout"
import type { PageQueryProps } from "@typings/Page"

const pages = ({ store, key }: PageQueryProps) => {


    const pageData = {

        home: {
            metaData: {},
            data: {
                hero: {
                    title: "Desir Tech",
                    cover: {
                        src: "/assets/images/hacker.svg"
                    }

                }
            },
        }
    }

    const pageObject = {
        version: Date.now(),
        metaData: {},
        data: pageData[key]?.data,
        layout: layout({
            header: {},
            footer: {
                copyright: 'LOL'
            }

        })

    }

    return { ...pageObject }
}

export default pages
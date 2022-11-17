import Head from "next/head"
import type { MetaProps } from "@typings/Meta"


const Meta = ({ pageTitle }: MetaProps) => {

    return (
        <Head>
            <title>{pageTitle ?? "Desir Tech"}</title>
        </Head>
    )
}

export default Meta
import Meta from "@includes/Meta"
import type { LayoutProps } from "@typings/Layout"

const RootLayout = ({ children, metaData }: LayoutProps) => {

    return (
        <>
            <Meta {...metaData} />
            {children}
        </>
    )
}

export default RootLayout
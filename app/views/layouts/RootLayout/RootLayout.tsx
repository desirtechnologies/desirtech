import Meta from "@includes/Meta"
import type { LayoutProps } from "@typings/Layout"

const RootLayout = ({ children, metaData }: LayoutProps) => {

    return (
        <div>
            <Meta {...metaData} />
            {children}
        </div>
    )
}

export default RootLayout
import Meta from "@includes/Meta"
import BackgroundSx from "@styles/Background"
import type { LayoutProps } from "@typings/Layout"

const RootLayout = ({ children, metaData }: LayoutProps) => {

    const { containerSx } = BackgroundSx()

    return (
        <div style={containerSx}>
            <Meta {...metaData} />
            {children}
        </div>
    )
}

export default RootLayout
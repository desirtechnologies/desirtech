import Box from "@components/Box"
import Meta from "@includes/Meta"
import type { LayoutProps } from "@typings/Layout"

const RootLayout = ({ children, metaData }: LayoutProps) => {

    return (
        <Box>
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default RootLayout
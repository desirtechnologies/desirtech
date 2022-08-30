import Box from "@components/Box"
import Meta from "@includes/Meta"
import type { ILayout } from "@typings/Layout"

const RootLayout = ({ children, metaData }: ILayout) => {

    return (
        <Box>
            <Meta {...metaData} />
            {children}
        </Box>
    )
}

export default RootLayout
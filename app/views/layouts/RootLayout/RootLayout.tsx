import Meta from "@includes/Meta"
import type { LayoutProps } from "@typings/Layout"

const RootLayout = ({ children, metaData }: LayoutProps) => {

    const ContainerSx = {
        backgroundColor: "#000000EE",
        backgroundImage: "url('/assets/images/circuits.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    }

    return (
        <div style={ContainerSx}>
            <Meta {...metaData} />
            {children}
        </div>
    )
}

export default RootLayout
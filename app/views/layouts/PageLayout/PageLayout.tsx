import RootLayout from "@layouts/RootLayout"
import type { ILayout } from "@typings/Layout"
import Header from "@components/Header"
import Footer from "@components/Footer"
const PageLayout = ({ children, metaData }: ILayout) => {

    return (

        <RootLayout metaData={metaData}>
            <Header />
            {children}
            <Footer />
        </RootLayout>
    )
}

export default PageLayout
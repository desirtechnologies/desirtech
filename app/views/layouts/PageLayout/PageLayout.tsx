import RootLayout from "@layouts/RootLayout"
import type { LayoutProps } from "@typings/Layout"
import Header from "@components/Header"
import Footer from "@components/Footer"
import React from "react"

const PageLayout = ({ children, metaData, footer, header, menu }: LayoutProps) => {

    return (
        <RootLayout metaData={metaData}>
            {children}
            <Footer />
        </RootLayout>
    )
}

export default React.memo(PageLayout)
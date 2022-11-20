import Footer from "@components/Footer"
import Header from "@components/Header"
import RootLayout from "@layouts/RootLayout"
import type { LayoutProps } from "@typings/Layout"
import DrawerMenu from "@views/includes/DrawerMenu"
import React from "react"
import Controller from "@includes/Controller"

const PageLayout = ({ children, metaData, footer, header, menu }: LayoutProps) => {

    return (
        <RootLayout metaData={metaData}>
            <Header />
            {children}
            <Footer />
            <Controller/>
            <DrawerMenu />
        </RootLayout>
    )
}

export default React.memo(PageLayout)
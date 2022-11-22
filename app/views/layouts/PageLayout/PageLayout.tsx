import Footer from "@components/Footer"
import Header from "@components/Header"
import RootLayout from "@layouts/RootLayout"
import type { LayoutProps } from "@typings/Layout"
import DrawerMenu from "@views/includes/DrawerMenu"
import React from "react"
import Controller from "@includes/Controller"
import { Suspense } from "react"


const PageLayout = ({ children, metaData, footer, header, menu }: LayoutProps) => {

    return (
        <Suspense fallback={<></>}>
            <Controller />
            <DrawerMenu />
            <RootLayout metaData={metaData}>
                <Header />
                {children}
                <Footer />
            </RootLayout>
        </Suspense>
    )
}

export default React.memo(PageLayout)
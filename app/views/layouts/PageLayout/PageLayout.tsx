import RootLayout from "@layouts/RootLayout"
import type { LayoutProps } from "@typings/Layout"
import Header from "@components/Header"
import Footer from "@components/Footer"
import React from "react"
import Banner from "@components/Banner"
import DrawerMenu from "@views/includes/DrawerMenu"
import { Suspense } from "react"
import AwesomeSlider from 'react-awesome-slider';


const PageLayout = ({ children, metaData, footer, header, menu }: LayoutProps) => {

    return (
        <Suspense>
            <RootLayout metaData={metaData}>
                <Header />
                {children}
                <Footer />
            </RootLayout>
            <DrawerMenu />
        </Suspense>
    )
}

export default React.memo(PageLayout)
import type { MetaProps } from "@typings/Meta";
import type { FooterProps } from "@typings/Footer"
import type { DrawerMenuProps } from "@typings/DrawerMenu";


export type LayoutProps = {
    header?: any,
    children?: any,
    metaData?: MetaProps,
    footer?: FooterProps,
    menu?: DrawerMenuProps
}

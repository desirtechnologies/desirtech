import type { LayoutProps } from "@typings/Layout"
import { default as headerConfig } from "@configs/header"
import { default as footerConfig } from "@configs/footer"
import { default as menuConfig } from "@configs/menu"

const layout = ({ header, footer, menu, metaData }: LayoutProps) => {

    const layoutObject = {
        header: headerConfig({ ...header }),
        footer: footerConfig({ ...footer }),
        menu: menuConfig({ ...menu }),
        metaData
    }

    return { ...layoutObject }

}

export default layout
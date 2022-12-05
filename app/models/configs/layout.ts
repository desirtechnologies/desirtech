import type { LayoutProps } from "@typings/Layout"
import { default as headerConfig } from "@configs/header"
import { default as footerConfig } from "@configs/footer"
import { default as menuConfig } from "@configs/menu"

const layout = ({ header, footer, menu }: LayoutProps) => {

    const layoutObject = {
        header: headerConfig({ ...header }),
        footer: footerConfig({ ...footer }),
        menu: menuConfig({ ...menu })
    }

    return { ...layoutObject }

}

export default layout
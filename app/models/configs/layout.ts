import type { LayoutProps } from "@typings/Layout"
import { default as headerConfig } from "@configs/header"
import { default as footerConfig } from "@configs/footer"

const layout = ({ header, footer, menu }: LayoutProps) => {

    const layoutObject = {
        header: headerConfig({ ...header }),
        footer: footerConfig({ ...footer })
    }

    return { ...layoutObject }

}

export default layout
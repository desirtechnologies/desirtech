import type { IConfiguration } from "@typings/Configuration"

const footer: IConfiguration<any> = () => {

    const footerObject = {

    }

    return { ...footerObject } ?? null

}

export default footer
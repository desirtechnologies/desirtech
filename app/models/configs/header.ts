import type { IConfiguration } from "@typings/Configuration"


const header: IConfiguration<any> = () => {

    const headerObject = {

    }

    return { ...headerObject } ?? null

}

export default header
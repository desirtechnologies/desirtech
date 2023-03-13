import type { BlackprintModelsModules } from "@models/typings/Blackprint"


export const configs = () => { }

export const db = () => {

}

export const pages = () => {

}

export const data = () => {
    return {
        db, pages
    }
}

const models = (): BlackprintModelsModules => {
    return {
        configs,
        data
    } as BlackprintModelsModules
}

export default models
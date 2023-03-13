import type { BlackprintViewsModules } from "@models/typings/Blackprint"


export const components = () => { }
export const layouts = () => { }
export const libs = () => { }
export const styles = () => { }
export const includes = () => { }



const views = (): BlackprintViewsModules => {
    return {
        components,
        layouts,
        includes,
        libs,
        styles
    }
}

export default views
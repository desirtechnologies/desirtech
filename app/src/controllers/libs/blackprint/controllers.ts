import type { BlackprintControllersModules } from "@models/typings/Blackprint"


export const hooks = () => { }
export const services = () => { }


const controllers = (): BlackprintControllersModules => {
    return {
        hooks: hooks,
        services: services
    } as BlackprintControllersModules
}


export default controllers
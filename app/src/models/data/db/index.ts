import { blackprint } from "@utils/blackprint";
import { notionCMS } from "@models/configs"

const { defineMethods, defineMethod } = blackprint()


const { variants } = notionCMS().params

export const portfolioMethods = defineMethods();


export const metaMethods = defineMethods();

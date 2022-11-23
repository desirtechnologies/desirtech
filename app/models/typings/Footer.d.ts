import type { ImageProps } from "@typings/Image"
import type { FaviconProps } from "@typings/Favicon"
import type { LinkProps } from "@typings/Link"

export type LinkType = {
    title?: string,
    links?: LinkProps[]
}

export type FooterProps = {
    links?: LinkType[],
    socials?: string[],
    favicon?: FaviconProps,
    copyright?: string,
}
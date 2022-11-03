export type LinkProps = {
    url: string,
    name: string,
}

export type ImageProps = {
    src?: string,
    alt?: string,
    width?: number | string,
    height?: number | string,
}

export type FaviconProps = {
    image: ImageProps,
    url: string,
}

export type FooterProps = {
    links?: LinkProps[],
    favicon?: FaviconProps,
    copyright?: string,
}
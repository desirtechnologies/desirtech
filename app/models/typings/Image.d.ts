export type ImageProps = {
    src?: string,
    alt?: string,
    width?: number | string,
    height?: number | string,
    lazy?: "loading" | "eager" | "auto",
}
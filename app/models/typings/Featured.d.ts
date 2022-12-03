import type { ImageProps } from "@typings/Image"

export type FeatureProp = {
    cover?: ImageProps,
    title?: string,
}

export type FeaturedProps = {
    heading?: string,
    title?: string,
    description?: string,
    features?: {
        primary?: FeatureProp,
        secondary?: FeatureProp,
        tertiary?: FeatureProp
    }
}
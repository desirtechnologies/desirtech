import type { MetaProps } from "@typings/Meta";

export interface ILayout {
    children: any;
    metaData: MetaProps
}

export type LayoutProps = {
    header?: any,
    footer?: any,
}

import type { CallToActionProps } from "@typings/CallToAction" 
import type { FaviconProps } from "@typings/Favicon" 
import type { LinkProps } from "@typings/Link" 
import type { IComponent } from "@typings/Component"

export interface IHeader extends IComponent {
    favicon?: FaviconProps;
    links?: LinkProps[];
    cta?: CallToActionProps[];
}
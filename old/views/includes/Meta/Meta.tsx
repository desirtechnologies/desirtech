import type { MetaProps } from "@typings/Meta";
import type { ComponentType } from "@typings/Component"
import { NextSeo } from 'next-seo';
import meta from "@configs/meta"

const Meta: ComponentType<MetaProps> = ({ pageTitle, title, description, canonical, url }: MetaProps) => {

  return (
    <NextSeo
      title={`${title ?? meta?.title} | ${pageTitle ?? "PAGE_TITLE_NOT_FOUND"}`}
      description={`${description ?? "DESCRIPTION_NOT_FOUND"}`}
      canonical={`${canonical ?? "CANONICAL_NOT_FOUND"}`}
      additionalLinkTags={meta?.icons ?? null}
      openGraph={{
        url: url ?? canonical ?? "URL_NOT_FOUND",
        title: title ?? meta?.title,
        description: description ?? "DESCRIPTION_NOT_FOUND",
        siteName: title ?? meta?.title,
      }}
      twitter={{
        handle: `@${meta?.title}`,
        site: `@${meta?.title}`,
        cardType: 'summary_large_image',
      }}
    />
  )
}

export default Meta
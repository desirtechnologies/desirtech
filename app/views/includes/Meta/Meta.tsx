import type { MetaProps } from "@typings/Meta";
import type { ComponentType } from "@typings/Component"
import { NextSeo } from 'next-seo';


const Meta: ComponentType<MetaProps> = ({ pageTitle }: MetaProps) => {

    return (
        <NextSeo
            title="Desir Tech"
            description="This example uses more of the available config options."
            canonical="https://www.desir.tech"
            additionalLinkTags={[
                {
                  rel: 'icon',
                  href: 'https://www.test.ie/favicon.ico',
                },
                {
                  rel: 'apple-touch-icon',
                  href: 'https://www.test.ie/touch-icon-ipad.jpg',
                  sizes: '76x76'
                },
                {
                  rel: 'manifest',
                  href: '/manifest.json'
                },
                {
                  rel: 'preload',
                  href: 'https://www.test.ie/font/sample-font.woof2',
                  as: 'font',
                  type: 'font/woff2',
                  crossOrigin: 'anonymous'
                }
              ]}
            openGraph={{
                url: 'https://www.url.ie/a',
                title: 'Open Graph Title',
                description: 'Open Graph Description',
                images: [
                    {
                        url: 'https://www.example.ie/og-image-01.jpg',
                        width: 800,
                        height: 600,
                        alt: 'Og Image Alt',
                        type: 'image/jpeg',
                    },
                    {
                        url: 'https://www.example.ie/og-image-02.jpg',
                        width: 900,
                        height: 800,
                        alt: 'Og Image Alt Second',
                        type: 'image/jpeg',
                    },
                    { url: 'https://www.example.ie/og-image-03.jpg' },
                    { url: 'https://www.example.ie/og-image-04.jpg' },
                ],
                siteName: 'SiteName',
            }}
            twitter={{
                handle: '@desirtech',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
    )
}

export default Meta
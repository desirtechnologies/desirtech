
import "@libs/globals.css"
import "@libs/scrollbar.css"
import "@libs/tailwind.css"
import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import 'react-awesome-slider/dist/styles.css';

import PageService from '@controllers/services/page'
import PageLayout from "@layouts/PageLayout"

import type { ApplicationProps } from "@typings/Application"

export default function Application({ Component, pageProps, layout }: ApplicationProps) {
  return (
    <PageLayout {...layout}>
      <Component {...pageProps} />
    </PageLayout>
  )
}


Application.getInitialProps = async () => {

  const { getPage } = PageService()

  const { layout } = (await getPage("home"))

  return { layout }
}
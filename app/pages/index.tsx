import Hero from "@components/Hero"
import PageLayout from '@layouts/PageLayout'
import type { IPage } from "@typings/Page"

import PageService from '@services/page'

import { useEffect } from "react"

const HomePage = ({ page }: IPage) => {

  useEffect(() => {
    console.log(`Page data: ${JSON.stringify(page)}`)
  }, [page])

  return (
    <PageLayout {...page.layout}>
      <Hero />
    </PageLayout>
  )
}

export default HomePage


export async function getStaticProps() {

  const { getPage } = PageService

  const page = await getPage('home')

  return {
    props: {
      page
    }
  }
}
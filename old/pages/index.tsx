import Carousel from "@components/Carousel"
import Contact from "@components/Contact"
import Featured from "@components/Featured"
import Flow from "@components/Flow"
import Hero from "@components/Hero"
import LogoCloud from "@components/LogoCloud"
import Stats from "@components/Stats"
import Summary from "@components/Summary"
import Timeline from "@components/Timeline"
import PageLayout from "@layouts/PageLayout"
import PageService from '@services/page'
import type { PageType } from "@typings/Page"
import Pillars from "@views/components/Pillars"
import Table from "@views/components/Table"


export async function getStaticProps() {

  const { getPage } = PageService()

  const page = await getPage('home')

  return {
    props: {
      page
    },
    revalidate: 1
  }
}


const HomePage = ({ page }: PageType) => {

  const { hero, featured, flow, table, stats, summary, carousel, timeline, contact } = page?.data ?? null


  return (

    <>
      <Hero {...hero} />
      <Featured {...featured} />
      <Timeline {...timeline} />
      <Carousel />
      <Pillars />
      <Flow />
      <LogoCloud />
      <Table />
      <Stats />
      <Summary />
      <Contact {...contact} />
    </>

  )
}

HomePage.layout = PageLayout

export default HomePage




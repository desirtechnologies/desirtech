import Carousel from "@components/Carousel"
import Gallery from "@components/Gallery"
import Hero from "@components/Hero"
import LogoCloud from "@components/LogoCloud"
import PageService from '@services/page'
import type { PageType } from "@typings/Page"
import Contact from "@components/Contact"
import DataGrid from "@components/DataGrid"
import Featured from "@components/Featured"
import Stats from "@components/Stats"
import Summary from "@components/Summary"
import PageLayout from "@layouts/PageLayout"
import Flow from "@components/Flow"
import Timeline from "@components/Timeline"
import Table from "@views/components/Table"
import Pillars from "@views/components/Pillars"
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

  const { hero, featured, contact, simpleForm } = page?.data


  return (

    <>
      <Hero {...hero} />
      <Featured {...featured} />
      <Timeline />
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

HomePage.layout = { PageLayout }

export default HomePage




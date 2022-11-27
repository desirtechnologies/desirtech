import Carousel from "@components/Carousel"
import Gallery from "@components/Gallery"
import Hero from "@components/Hero"
import LogoCloud from "@components/LogoCloud"
import PageService from '@services/page'
import type { PageType } from "@typings/Page"
import Contact from "@views/components/Contact"
import DataGrid from "@views/components/DataGrid"
import Featured from "@views/components/Featured"
import Stats from "@views/components/Stats"
import Summary from "@views/components/Summary"
import PageLayout from "@views/layouts/PageLayout"


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

  const { hero, contentGrid, simpleForm } = page?.data


  return (

    <>
      <Hero {...hero} />
      <Gallery />
      <LogoCloud />
      <DataGrid />
      <Featured />
      <Stats />
      <Summary />
      <Contact />
    </>

  )
}

HomePage.layout = { PageLayout }

export default HomePage




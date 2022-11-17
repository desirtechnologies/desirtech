import Carousel from "@components/Carousel"
import Gallery from "@components/Gallery"
import Hero from "@components/Hero"
import LogoCloud from "@components/LogoCloud"
import PageService from '@services/page'
import type { IPage } from "@typings/Page"
import Contact from "@views/components/Contact"
import DataGrid from "@views/components/DataGrid"
import Featured from "@views/components/Featured"
import Stats from "@views/components/Stats"
import Summary from "@views/components/Summary"



const HomePage = ({ page: { data } }: IPage) => {

  const { hero, contentGrid, simpleForm } = data

  return (
    <>
      <Hero />
      <Carousel />
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

export default HomePage


export async function getStaticProps() {

  const { getPage } = PageService()

  const page = await getPage('home')

  return {
    props: {
      page
    },
    revalidate: 2
  }
}
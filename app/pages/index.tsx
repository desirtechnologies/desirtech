import Hero from "@components/Hero"
import PageLayout from '@layouts/PageLayout'
import PageService from '@services/page'
import type { IPage } from "@typings/Page"
import ContentGrid from "@views/components/ContentGrid"
import SimpleForm from "@views/components/SimpleForm"
import ContactForm from "@views/components/ContactForm"
import Carousel from "@components/Carousel"
import LogoCloud from "@components/LogoCloud"
const HomePage = ({ page: { data } }: IPage) => {

  const { hero, contentGrid, simpleForm } = data

  return (
    <>
      <Hero />
      <Carousel />
      <ContentGrid />
      <LogoCloud />
      <SimpleForm />
      <ContactForm />
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
    }
  }
}
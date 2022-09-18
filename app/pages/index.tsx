import type { NextPage } from 'next'
import PageLayout from '@layouts/PageLayout'
import type { IPage } from "@typings/Page"
import Hero from "@components/Hero"
import Carousel from "@components/Carousel"
import ContactForm from "@components/ContactForm"
import ContentGrid from "@components/ContentGrid"
import SimpleForm from '@components/SimpleForm'



const HomePage = ({ pageData }: IPage) => {

  return (
    <PageLayout metaData={{ pageTitle: 'Home' }}>
      <Hero />
      <Carousel />
      <ContentGrid />
      <SimpleForm />
      <ContactForm />
    </PageLayout>
  )
}

export default HomePage


export default async function getStaticProps() {

  return {
    props: {
      pageData: []
    }
  }
}
import React from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Layout from '../components/Layout'
import Service from '../components/Service'
import ShareThis from '../components/ShareThis'

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <Service />
      <Header />
      <ShareThis center="true" />
    </Layout>
  )
}

export default IndexPage
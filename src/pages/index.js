import React from "react"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Layout from '../components/Layout'
import Service from '../components/Service'

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <Service />
      <Header />
    </Layout>
  )
}

export default IndexPage
import React from "react"
import GoogleCustomSearch from '../components/GoogleCustomSearch'
import Header from "../components/Header"
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout>
      <Header showHome="true" />
      <GoogleCustomSearch />
    </Layout>
  )
}

export default IndexPage
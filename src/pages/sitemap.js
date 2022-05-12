import React from "react"
import Header from "../components/Header"
import Sitemap from '../components/Sitemap'
import Layout from '../components/Layout'

const SitemapPage = ({ location }) => {
  return (
    <Layout title="Sitemap">
      <Header showHome={true} />
      <Sitemap />
    </Layout>
  )
}

export default SitemapPage
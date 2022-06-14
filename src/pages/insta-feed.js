import React from "react"
import InstagramFeed from "../components/Showcase/InstagramFeed"
import Header from "../components/Header"
import Layout from '../components/Layout'

const InstaFeedPage = ({ location }) => {
  return (
    <Layout title="Instagram Feed POC">
      <Header showHome={true} />
      <InstagramFeed location={location} />
    </Layout>
  )
}

export default InstaFeedPage
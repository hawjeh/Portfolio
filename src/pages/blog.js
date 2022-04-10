import React from "react"
import Blog from "../components/Blog"
import Header from "../components/Header"
import Layout from '../components/Layout'

const ResumePage = () => {
  return (
    <Layout title="Blog">
      <Header showHome={true} />
      <Blog />
    </Layout>
  )
}

export default ResumePage
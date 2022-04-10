import React from "react"
import Header from "../components/Header"
import Resume from "../components/Resume"
import Layout from '../components/Layout'

const ResumePage = () => {
  return (
    <Layout title="Resume">
      <Header showHome={true} />
      <Resume />
    </Layout>
  )
}

export default ResumePage
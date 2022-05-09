import React from "react"
import Header from "../components/Header"
import Resume from "../components/Resume"
import Layout from '../components/Layout'

const ResumePage = ({ location }) => {
  return (
    <Layout title="Resume">
      <Header showHome={true} />
      <Resume location={location} />
    </Layout>
  )
}

export default ResumePage
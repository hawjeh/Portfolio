import React from "react"
import Header from "../components/Header"
import JsToExcel from '../components/Showcase/JsToExcel'
import Layout from '../components/Layout'

const ResumePage = () => {
  return (
    <Layout title="Blog">
      <Header showHome={true} />
      <JsToExcel />
    </Layout>
  )
}

export default ResumePage
import React from "react"
import { Helmet } from "react-helmet"
import WeddingLayout from '../components/Layout/wedding'
import Wedding from "../components/Wedding"

const WeddingPage = () => {
  return (
    <WeddingLayout title="#HJxMY Wedding">
      <Wedding />
      <Helmet>
        <script src="/wedding/wedding.js"></script>
      </Helmet>
    </WeddingLayout>
  )
}

export default WeddingPage
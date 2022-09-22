import React from "react"
import { Helmet } from "react-helmet"
import WeddingLayout from '../components/Layout/wedding'
import Wedding from "../components/Wedding"

const WeddingPage = () => {
  return (
    <WeddingLayout
      title="#HJxMY Wedding"
      description="Haw Jeh and Meng Yan Wedding"
      keywords="hawjeh, haw jeh, mengyan, meng yan, wedding, hawjeh and mengyan wedding, #hjxmy wedding, haw jeh and meng yan wedding"
      image="/wedding/hjxmy1.jpg"
      icon="/wedding/wedding_favicon.ico">
      <Wedding />
      <Helmet>
        <script src="/wedding/wedding.js"></script>
      </Helmet>
    </WeddingLayout>
  )
}

export default WeddingPage
import React from "react"
import useGtagScript from "../../hooks/useGtagScript";
import Footer from '../Footer'
import Seo from "../Seo"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithubSquare, faFacebookSquare, faTwitterSquare, faInstagramSquare, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faLinkedin, faFontAwesome)
library.add(fas, faGithubSquare, faFontAwesome)
library.add(fas, faFacebookSquare, faFontAwesome)
library.add(fas, faTwitterSquare, faFontAwesome)
library.add(fas, faInstagramSquare, faFontAwesome)

const Layout = ({ title = "", children }) => {
  useGtagScript('G-Q071PHWZBD');

  return (
    <>
      <Seo title={title} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
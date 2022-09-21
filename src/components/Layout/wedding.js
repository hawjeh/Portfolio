import React from "react"
import useFbSdkScript from '../../hooks/useFbSdkScript';
import useGtagScript from '../../hooks/useGtagScript';
import useSchemaScript from '../../hooks/useSchemaScript';
import Seo from "../Seo"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart, faPaw, fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faPaw)
library.add(fas, faHeart)

const WeddingLayout = ({ title = "", description = "", keywords = "", image = "", icon = "", children }) => {
  useGtagScript('G-Q071PHWZBD');
  useFbSdkScript('901448237938064');
  useSchemaScript();

  return (
    <div id="wedding-wrapper" className="d-flex text-center">
      <Seo title={title} description={description} keywords={keywords} image={image} customIcon={icon} />
      {children}
    </div>
  )
}

export default WeddingLayout
import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, keywords, lang, meta, title, image, customIcon }) => {
  const { site, icon, metaImg } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
           }
        }
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        metaImg: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxHeight: 630,maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
     `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = keywords ? `${keywords}, ${site.siteMetadata.keywords}` : site.siteMetadata.keywords
  const metaTitle = title ? `${title} | Haw Jeh` : site.siteMetadata?.title
  const metaImage = image || metaImg.childImageSharp.fluid.src
  const metaIcon = customIcon || icon.childImageSharp.fluid.src

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:image:width`,
          content: 1200,
        },
        {
          property: `og:image:height`,
          content: 630,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <link rel="icon" type="image/png" href={metaIcon} />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
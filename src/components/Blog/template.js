import React from "react"
import Header from "../Header"
import Layout from "../Layout"
import Seo from "../Seo"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"

const BlogTemplate = ({ data }) => {
  const shortcodes = { Link }

  const { title, keyword, description, date } = data.mdx.frontmatter;

  return (
    <Layout title={title}>
      <Seo title={title} description={description} keywords={keyword} />
      <Header showHome={true} />
      <div id="blog-template" className="container my-5">
        <p className="date">{date}</p>
        <h1 className="text-primary">{title}</h1>
        <div className="mt-5">
          <MDXProvider components={shortcodes}>
            <MDXRenderer frontmatter={data.mdx.frontmatter}>{data.mdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
        <div className="share mt-5">
          Share this icons
        </div>
      </div>
    </Layout>
  )
}

export default BlogTemplate

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        keyword
        description
        date
      }
    }
  }
`
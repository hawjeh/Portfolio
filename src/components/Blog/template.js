import React, { useEffect } from "react"
import Header from "../Header"
import Layout from "../Layout"
import Seo from "../Seo"

import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"

const BlogTemplate = ({ location, data }) => {
  const shortcodes = { Link }

  const { title, keyword, description, date } = data.mdx.frontmatter;
  const addThisUrl = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-6278824242b801b4';

  useEffect(() => {
    setTimeout(() => {
      var addthisScript = document.createElement('script');
      addthisScript.setAttribute('src', addThisUrl);
      if (document.body) document.body.appendChild(addthisScript)
    });
  }, []);

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
        <div className="addthis_inline_share_toolbox share mt-5" data-url={location.href} data-title={title}></div>
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
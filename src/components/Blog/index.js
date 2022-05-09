import React, { useState } from "react"
import Post from './Post'

import { useStaticQuery, graphql } from 'gatsby'

const Blog = () => {
  const { blogs } = useStaticQuery(
    graphql`
      query {
        blogs: allMdx(
          filter: {frontmatter: {category: {eq: "blog"}, published: {eq: true}}}
          sort: {fields: frontmatter___date, order: DESC}
        ) {
          edges {
            node {
              id
              frontmatter {
                slug
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 320) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                date
                keyword
              }
            }
          }
        }
      }
    `
  )

  const blogsContent = blogs.edges;
  const keywords = [...new Set(blogsContent.map(item => item.node.frontmatter.keyword))];
  const newKeywords = keywords.map(item => item.split(","));
  const filters = [...new Set(newKeywords.join().split(',').map(item => item.trim()))]
  const [filterKey, setFilterKey] = useState('');

  const onSelectChange = (e) => {
    setFilterKey(e.currentTarget.value);
  }

  return (
    <section id="blog">
      <div className="container">
        <div className="row animate__fadeInUp mb-5">
          <div className="col-12">
            <h1 className="text-primary">Blog</h1>
            <p className="text-secondary text-uppercase">Gain Knowledge by Sharing</p>
          </div>
          <div className="col-12 col-md-6">
            <select className="form-select form-select-lg mb-3" aria-label="Filter" onChange={(e) => onSelectChange(e)}>
              <option value="">Select a filter</option>
              {
                filters.sort().map(item => {
                  return <option key={item} value={item}>{item}</option>
                })
              }
            </select>
          </div>
        </div>
        <div className="text-center justify-content-center row mb-5 animate__fadeIn">
          {
            blogsContent.filter(item => item.node.frontmatter.keyword.includes(filterKey)).map(item => {
              const {
                id,
                frontmatter: { slug, title, image, date, keyword }
              } = item.node;

              return (<Post key={id} slug={slug} title={title} src={image.childImageSharp.fluid.src} date={date} keyword={keyword} />)
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog
import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"

const Education = () => {
  const { educations } = useStaticQuery(
    graphql`
      query {
        educations: allMdx(
          filter: {frontmatter: {category: {eq: "education"}}}
          sort: {fields: frontmatter___sequence, order: DESC}
        ) {
          edges {
            node {
              id
              body
              frontmatter {
                title
                qualification
                date
              }
            }
          }
        }
      }
    `
  )

  return (
    <section id="education">
      <h3 className="mb-3">Education</h3>
      <div className="container">
        {educations.edges.map((education) => {
          return (
            <div key={education.node.id}>
              <span className="dot"></span>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-1">
                  <span className="text-grey date">{education.node.frontmatter.date}</span>
                  <p className="mb-0 title">
                    <span className="text-primary text-bold-700">{education.node.frontmatter.title}</span>
                    <br />
                    {education.node.frontmatter.qualification}
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-8 description">
                  <MDXRenderer frontmatter={education.node.frontmatter}>{education.node.body}</MDXRenderer>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Education
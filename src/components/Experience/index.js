import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"

const Experience = () => {
  const { experiences } = useStaticQuery(
    graphql`
      query {
        experiences: allMdx(
          filter: {frontmatter: {category: {eq: "experience"}}}
          sort: {fields: frontmatter___sequence, order: DESC}
        ) {
          edges {
            node {
              id
              body
              frontmatter {
                title
                jobTitle
                date
              }
            }
          }
        }
      }
    `
  )

  return (
    <section id="experience">
      <h3 className="mb-3">Experience</h3>
      <div className="container">
        {experiences.edges.map((experience) => {
          return (
            <div key={experience.node.id}>
              <span className="dot"></span>
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-1">
                  <span className="text-grey date">{experience.node.frontmatter.date}</span>
                  <p className="mb-0 title">
                    <span className="text-primary text-bold-700">{experience.node.frontmatter.title}</span>
                    <br />
                    {experience.node.frontmatter.jobTitle}
                  </p>
                </div>
                <div className="col-12 col-md-6 col-lg-8 description">
                  <MDXRenderer frontmatter={experience.node.frontmatter}>{experience.node.body}</MDXRenderer>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'

const Certification = () => {
  const { certifications } = useStaticQuery(
    graphql`
      query {
        certifications: allMdx(
          filter: {frontmatter: {category: {eq: "certificate"}}}
          sort: {fields: frontmatter___sequence, order: DESC}
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                issue
                date
                url
              }
            }
          }
        }
      }
    `
  )

  return (
    <section id="certification">
      <h3 className="mb-3">Certification</h3>
      {certifications.edges.map((certification) => {
        return (
          <Link to={certification.node.frontmatter.url} target='_blank' rel="noopener noreferrer" key={certification.node.id}>
            <p>
              <span className="text-primary text-bold-700">{certification.node.frontmatter.title}</span>
              <br />
              <span className="text-secondary">{certification.node.frontmatter.issue}, {certification.node.frontmatter.date}</span>
            </p>
          </Link>
        )
      })}
    </section>
  )
}

export default Certification
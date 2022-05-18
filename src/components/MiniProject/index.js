import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'

const MiniProject = () => {
  const { projects } = useStaticQuery(
    graphql`
      query {
        projects: allMdx(
          filter: {frontmatter: {category: {eq: "miniproject"}}}
          sort: {fields: frontmatter___sequence, order: ASC}
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                url
              }
            }
          }
        }
      }      
    `
  )

  return (
    <section id="mini-project">
      <h3 className="mb-3">Mini Projects</h3>
      <div className="row">
        {projects.edges.map((project) => {
          return (
            <Link to={project.node.frontmatter.url} target='_blank' rel="noopener noreferrer" key={project.node.id}>
              <p className="text-primary text-bold-700">{project.node.frontmatter.title}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default MiniProject
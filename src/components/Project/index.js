import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'

const Project = () => {
  const { projects } = useStaticQuery(
    graphql`
      query {
        projects: allMdx(
          filter: {frontmatter: {category: {eq: "project"}}}
          sort: {fields: frontmatter___sequence, order: ASC}
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                url
                image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }      
    `
  )

  return (
    <section id="project">
      <h3 className="mb-3">Projects</h3>
      <div className="row">
        {projects.edges.map((project) => {
          return (
            <div key={project.node.id} className="col-6 col-lg-4 mb-3">
              <div key={project.node.key} className="card text-center">
                <img src={project.node.frontmatter.image.childImageSharp.fluid.src} alt={project.node.frontmatter.title} className="img-fluid" />
                <Link to={project.node.frontmatter.url} target='_blank' rel="noopener noreferrer">{project.node.frontmatter.title}</Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Project
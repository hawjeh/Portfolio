import React from "react"
import { useStaticQuery, graphql } from 'gatsby'

const Tool = () => {
  const { tools } = useStaticQuery(
    graphql`
      query {
        tools: allMdx(
          filter: {frontmatter: {category: {eq: "tool"}}}
          sort: {fields: frontmatter___sequence, order: ASC}
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                percentage
              }
            }
          }
        }
      }
    `
  )

  return (
    <section id="tool">
      <h3 className="mb-3">Technology & Tools</h3>
      <div className="row">
        {tools.edges.map((tool) => {
          return (
            <div className="col-6 mb-3" key={tool.node.id}>
              <p>
                {tool.node.frontmatter.title}
              </p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${tool.node.frontmatter.percentage}%` }} aria-valuenow={tool.node.frontmatter.percentage} aria-valuemin="0" aria-valuemax="100" aria-label="percentage"></div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Tool
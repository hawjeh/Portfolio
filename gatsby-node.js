const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx(
        filter: {frontmatter: {category: {eq: "blog"}, published: {eq: true}}}
        sort: {fields: frontmatter___date, order: DESC}
      ) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const posts = result.data.allMdx.edges
  posts.forEach(({ node }, index) => {
    createPage({
      path: `/${node.slug}`,
      component: path.resolve(`./src/components/Blog/template.js`),
      context: { id: node.id },
    })
  })
}
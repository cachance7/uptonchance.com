const path = require("path")

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve) => {
    graphql(`
      fragment Page on PagesJson {
        title
        slug
        template
      }

      {
        pages: allPagesJson {
          nodes {
            ...Page
          }
        }
      }
    `).then(result => {
      result.data.pages.nodes.map((node) => {
        createPage({
          path: node.slug || '/',
          component: path.resolve(`./src/templates/${node.template}.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })
}

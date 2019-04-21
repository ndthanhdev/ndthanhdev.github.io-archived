/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages  = ({ actions, graphql }) => {
    const { createPage } = actions
  
    const vanilaMdTemplate = path.resolve(`src/templates/vanila-md.tsx`)
  
    return graphql(`
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        return Promise.reject(result.errors)
      }
      console.log(result.data.allMarkdownRemark.edges);
      
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: vanilaMdTemplate,
          context: {}, // additional data can be passed via context
        })
      })
    })
  }

import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Post = ({ data }) => {
  return (
    <div>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD MM YYYY")
      }
      body
    }
  }
`

export default Post

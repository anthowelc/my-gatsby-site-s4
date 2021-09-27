import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Post = ({ data }) => {
  return (
    <div>
      <h1>{data.contentfulPost.title}</h1>
      {/* <MDXRenderer>{data.body}</MDXRenderer> */}
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulPost(id: { eq: $id }) {
      title
      publishDate(formatString: "DD MM YYYY")
      body
    }
  }
`

export default Post

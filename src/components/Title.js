import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

const Title = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  console.log(data)

  return (
    <h1>
      {data.site.siteMetadata.title}
      {data.site.siteMetadata.siteUrl}
    </h1>
  )
}

export default Title

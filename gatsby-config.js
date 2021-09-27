module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'My Gatsby Site'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/`
      }
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'tloptc0qghlf',
        accessToken: 'pVBlC64yq9c5UZKGhlvSA8QGaGQIqObvQtdYODhSIl0'
      }
    }
  ]
}

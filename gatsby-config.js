/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
/* Your site config here */
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    quote1: 'This COVID-19 Pandemic. ',
    quote2: 'Stay Home, Stay Safe.',
    author: 'Vipul Chandan'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `0e3j9n8f27xg`,
        accessToken: `V7CSBL6A6N10sclrSUTv1R0sODFxHhkzlXf_8G6JfQk`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
        }
    }
  ],
}

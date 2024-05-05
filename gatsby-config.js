/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `detailxpertz`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ['gatsby-plugin-react-helmet', 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/moustache.png"
    },
  }]
};
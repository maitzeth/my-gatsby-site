const config = require('./src/config')

module.exports = {
  siteMetadata: {
    title: `André Iván`,
    subtitle: `Web Developer`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    aboutText:
      "I'm Andre Ivan, a Informatic Engineer doing Web Developer. I was born in Venezuela, currently living in Argentina. I love to share what I learn and I've been working on web development in almost 4 years. I spend most of my time learning about new Technologies, Methodologies, Best Practices and proficient in other languages too, like PHP and Ruby.",
    author: `@maitzeth`,
    social: config.social,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'config/typography.js',
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: config.theme.redColor,
        showSpinner: true,
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-remark'
  ],
}

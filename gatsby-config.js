const config = require('./src/config')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: `André Iván`,
    subtitle: `Web Developer`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    aboutText:
      "I'm Andre Ivan, a Informatic Engineer doing Web Developer. I was born in Venezuela, currently living in Argentina. I love to share what I learn and I've been working on web development in almost 4 years. I spend most of my time learning about new Technologies, Methodologies, Best Practices and proficient in other languages too, like PHP and Ruby.",
    author: `@maitzeth`,
    social: config.social,
    siteUrl: config.siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        lang: 'en-US',
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.theme.whiteColor,
        theme_color: config.theme.redColor,
        display: 'standalone',
        icons: [
          {
            src: '/favicons/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicons/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-remark',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-json'
  ],
}

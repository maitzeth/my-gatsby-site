module.exports = {
  siteMetadata: {
    title: `A sample site using gatsby-source-wordpress`,
    subtitle: `Data fetched from a site hosted on wordpress.com`,
  },
  plugins: [
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `dev-mzgatsby.pantheonsite.io`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    }
  ],
}
module.exports = {
  siteMetadata: {
    title: `André Iván`,
    subtitle: `Web Developer`,
    about: `I'm Andre Ivan, a Web Developer from Venezuela, currently living in Argentina. I love to share what I learn and I've been working in the Web since 3 years. I spend most of my time learning about new Technologies, Methodologies, Best Practices and Paradigms, like OOP and Functional Programming. Always working with Web Technologies like HTML, CSS and Javascript.`
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
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
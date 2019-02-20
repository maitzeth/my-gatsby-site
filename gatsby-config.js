const config = require('./src/config')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: `André Iván`,
    subtitle: `Web Developer`,
    description: `Soy André Iván, ingeniero en informatica, me dedico al desarrollo web desde hace 4 años. Javascript Ninja.`,
    aboutText:
      'Hola, soy André Iván, soy Ingeniero Informático, me dedico enteramente al desarrollo web. Nací en Venezuela pero hace casi un año que vivo en Argentina. Me encanta compartir lo que aprendo y he estado trabajando en desarrollo web durante casi 4 años. Paso la mayor parte de mi tiempo aprendiendo sobre nuevas tecnologías, metodologías, paradigmas, mejores prácticas y otros aspecto del mundo de la tecnología. Obsesionado completamente con el rendimiento y las buenas practicas. React Lover <3',
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
    'gatsby-transformer-json',
  ],
}

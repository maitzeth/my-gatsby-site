const config = require('./config/website')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: `André Iván`,
    subtitle: `Web Developer`,
    about: `I'm Andre Ivan, a Web Developer from Venezuela, currently living in Argentina. I love to share what I learn and I've been working in the Web since 3 years. I spend most of my time learning about new Technologies, Methodologies, Best Practices and Paradigms, like OOP and Functional Programming. Always working with Web Technologies like HTML, CSS and Javascript.`,
    siteUrl: config.siteUrl + pathPrefix,
    sections: [
      {
        id: 0,
        name: 'Bio',
        content1:
          "I'm Andre Ivan, a Informatic Engineer doing Web Developer. I was born in Venezuela, currently living in Argentina. I love to share what I learn and I've been working on web development in almost 4 years. I spend most of my time learning about new Technologies, Methodologies, Best Practices and Paradigms. I primarily works with Javascript, HTML, CSS and all the technologies behind that. But im proficient in other languages too, like PHP and Ruby. ❤️ Elementary 5.0 (Juno)",
        active: true,
      },
      {
        id: 1,
        name: 'Skills',
        content2: ['HTML', 'CSS', 'Javascript', 'Webpack', 'React', 'Gatsby'],
        active: false,
      },
      {
        id: 3,
        name: 'Experience',
        content4: [
          {
            time: 'Jun 2018 - Now',
            job: 'Front-End Developer',
            place: 'Ego Agency at ISBAN Santader Rio.',
            url: 'http://www.agenciaego.com.ar/',
          },
          {
            time: 'Jan 2015 - Dec 2017',
            job: 'Web Development Instructor',
            place: 'Escuela Web LLC',
            url: 'http://escuelaweb.net',
          },
        ],
        active: false
      },
      {
        id: 2,
        name: 'Social',
        content3: [
          {
            icon: 'instagram',
            url: 'https://www.instagram.com/maitzethdrummer/',
          },
          { icon: 'github', url: 'https://github.com/maitzeth/' },
          { icon: 'linkedin', url: 'https://www.linkedin.com' },
          { icon: 'twitter', url: 'https://www.twitter.com/maitzeth' },
        ],
        active: false,
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-page-transitions',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-lodash',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/content/projects`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 820,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
  ],
}

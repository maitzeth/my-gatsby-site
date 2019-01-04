const config = require('./config/website');

const autoprefixer = require('autoprefixer');
const browserslist = require('browserslist');
const postCssDiscardDuplicates = require('postcss-discard-duplicates');
const postCssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postCssFocus = require('postcss-focus');

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		title: `André Iván`,
		subtitle: `Web Developer`,
		siteUrl: config.siteUrl + pathPrefix,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-offline',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-lodash',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-netlify',
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          postCssDiscardDuplicates(),
          postCssFlexbugsFixes(),
          postCssFocus(),
          autoprefixer(),
        ],
      }
    },
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: 'red',
				showSpinner: true
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/content/`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 590,
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
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: config.googleAnalyticsID,
			},
		},
		{
			resolve: 'gatsby-plugin-emotion',
			options: {
				autoLabel: process.env.NODE_ENV !== 'production',
				labelFormat: '[filename]--[local]',
			},
		},
		{
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.jsx',
      },
    },
    // {
    //   resolve: `gatsby-source-github-pinned`,
    //   options: {
    //     apiToken: 'ba3723e9ad1eb522797a0245b6f21d63847618e8' 
    //   }
    // }
	],
}

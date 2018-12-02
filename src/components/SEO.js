import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import config from '../../config/website'

const SEO = props => {
	const { postNode, postPath, postSEO } = props
	let title
	let description
	let image
	let postURL
	const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
	if (postSEO) {
		const postMeta = postNode.frontmatter
		title = `${postMeta.client} | ${postMeta.title}` // eslint-disable-line prefer-destructuring
		description = postNode.excerpt
		image = postMeta.cover.childImageSharp.resize.src
		postURL = config.siteUrl + realPrefix + postPath
	} else {
		title = config.siteTitle
		description = config.siteDescription
		image = config.siteLogo
	}
	image = config.siteUrl + realPrefix + image
	const blogURL = config.siteUrl + config.pathPrefix
	let schemaOrgJSONLD = [
		{
			'@context': 'http://schema.org',
			'@type': 'WebSite',
			'@id': blogURL,
			url: blogURL,
			name: title,
			alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
		},
	]
	if (postSEO) {
		schemaOrgJSONLD = [
			{
				'@context': 'http://schema.org',
				'@type': 'BlogPosting',
				'@id': postURL,
				url: postURL,
				name: title,
				alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
				headline: title,
				image: {
					'@type': 'ImageObject',
					url: image,
				},
				description,
				datePublished: postNode.frontmatter.date,
				dateModified: postNode.frontmatter.date,
				author: {
					'@type': 'Person',
					name: config.author,
				},
				publisher: {
					'@type': 'Organization',
					name: config.author,
					logo: {
						'@type': 'ImageObject',
						url: config.siteUrl + realPrefix + config.siteLogo,
					},
				},
				isPartOf: blogURL,
				mainEntityOfPage: {
					'@type': 'WebSite',
					'@id': blogURL,
				},
			},
		]
	}
	return (
		<Helmet>
			<html lang={config.siteLanguage} />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<script type="application/ld+json">
				{JSON.stringify(schemaOrgJSONLD)}
			</script>
			<meta property="og:locale" content={config.ogLanguage} />
			<meta property="og:url" content={postSEO ? postURL : blogURL} />
			{postSEO ? <meta property="og:type" content="article" /> : null}
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta
				name="twitter:creator"
				content={config.userTwitter ? config.userTwitter : ''}
			/>
			<meta name="twitter:title" content={title} />
			<meta name="twitter:url" content={config.siteUrl} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.22/css/uikit.min.css"
			/>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.22/js/uikit.min.js" />
			<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.22/js/uikit-icons.min.js" />
		</Helmet>
	)
}

export default SEO

SEO.propTypes = {
	postNode: PropTypes.object,
	postPath: PropTypes.string,
	postSEO: PropTypes.bool,
}

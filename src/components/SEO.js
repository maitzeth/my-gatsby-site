import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'
import config from '../config';

const replaceTrailing = _path => _path.replace(/\/$/, ``)

const Head = ({ postNode, pathname, single, data, excerpt }) => {
  let title
  let description
  let image

  const { buildTime } = data.site

  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix
  const homeURL = `${config.siteUrl}${realPrefix}`
  const URL = `${config.siteUrl}${replaceTrailing(pathname) || realPrefix}`

  // Add except if exists
  
  const postMeta = { ...postNode, excerpt }

  if (single) {
    const postImage = postMeta.cover.childImageSharp.fluid.src
    title = `${postMeta.title} | ${config.siteTitle}`
    description = postMeta.excerpt && postMeta.excerpt;
    image = `${homeURL}${postImage}`
  } else { 
    title = `${config.siteTitleAlt}`
    description = config.siteDescription
    image = `${homeURL}${config.siteLogo}`
  }

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: URL,
    headline: config.siteHeadline,
    inLanguage: 'en',
    mainEntityOfPage: URL,
    description: config.siteDescription,
    name: config.siteTitle,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: config.author,
    },
    copyrightYear: '2018',
    creator: {
      '@type': 'Person',
      name: config.author,
    },
    publisher: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: '2019-01-07T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }


  return (
    <Fragment>
      <Helmet>
        <html lang={config.siteLanguage} />
        <title>{title}</title>
        
        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="gatsby-starter" content="Gatsby André Iván Portfolio" />
        <meta name='robots' content='index,follow' />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        
        <link rel='fluid-icon' type='image/png' href='/logo-50x50.png' />
        <link rel="icon" type="image/png" href="/logo-50x50.png" />

        <meta name="msapplication-TileColor" content="#990100" />

        <meta property="og:locale" content={config.ogLanguage} />
        <meta property="og:site_name" content={config.ogSiteName ? config.ogSiteName : ''} />
        <meta property="og:url" content={URL} />
        <meta property="og:type" content='website' />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={description} />

        <meta property="og:see_also" content="https://github.com/maitzeth/" />
        <meta property="og:see_also" content="https://www.instagram.com/maitzethdrummer" />
        <meta property="og:see_also" content="https://twitter.com/maitzeth" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:url" content={URL} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:image:alt" content={description} />

        <link type="text/plain" href={`${config.siteUrl}/humans.txt`} rel="author" />
        <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>

        <link rel="stylesheet" href="css/nprogress.css" />
      </Helmet>
    </Fragment>
  )
}

const querySEO = graphql`
  query querySEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
    }
  }
`

const SEO = props => <StaticQuery query={querySEO} render={data => <Head {...props} data={data} />} />

export default SEO
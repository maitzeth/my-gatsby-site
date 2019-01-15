import React from 'react';
import { Helmet } from 'react-helmet';
import config from '../../config/website';
import theme from '../../config/theme';

const replaceTrailing = _path => _path.replace(/\/$/, ``)

const SEO = (props) => {
  const { postNode, single, pathname } = props;

  let title;
  let description;
  let image;
  
  const realPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;
  const homeURL = `${config.siteUrl}${realPrefix}`;

  const URL = `${config.siteUrl}${replaceTrailing(pathname) || realPrefix}`

  if (single) {
    const postMeta = postNode.frontmatter;
    const postImage = postMeta.cover.childImageSharp.fluid.src;    
    title = `${config.siteTitle} | ${postMeta.title}`; 
    description = postNode.excerpt;
    image = `${homeURL}${postImage}`;
  } else {
    title = config.siteTitle;
    description = config.siteDescription;
    image = `${homeURL}${config.siteLogo}`
  }

  // Initial breadcrumb list
  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': homeURL,
        name: 'Homepage',
      },
      position: 1,
    },
    {
      '@type': 'ListItem',
      item: {
        '@id': `${homeURL}/projects`,
        name: 'Projects',
      },
      position: 2,
    },
  ];


  itemListElement.push({
    '@type': 'ListItem',
    item: {
      '@id': URL,
      name: title,
    },
    position: 3,
  });
  
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
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: config.author,
    },
    publisher: {
      '@type': 'Person',
      name: config.author,
    },
    datePublished: '2019-01-07T10:30:00+01:00',
    dateModified: '2019-010-07T10:30:00+01:00',
    image: {
      '@type': 'ImageObject',
      url: image,
    },
  }

  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return (
    <Helmet>
      <html lang={config.siteLanguage} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="shortcut icon" href="favicon.ico" />

      <meta name="msapplication-TileColor" content={`${theme.primaryColor}`} />
      <meta name="msapplication-config" content="browserconfig.xml" />
      
      <meta property="og:locale" content={config.ogLanguage} />
      <meta property="og:site_name" content={config.ogSiteName ? config.ogSiteName : ''} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content={single ? 'article' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ''} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:url" content={URL} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={description} />

      {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
      <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  );
};

export default SEO;
